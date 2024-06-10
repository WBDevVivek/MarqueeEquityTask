
import React, { createContext, useContext, useState, useEffect } from "react";

export const MarqueeEquityTaskAppStates = createContext(null);

// ----------------------------------------------------------

// for save data on localStorage...
const getLocalStorageItems = () => {
    let localStorageBooks = localStorage.getItem("localStorageForBookShelf");

    if (localStorageBooks) {
        return JSON.parse(localStorageBooks);
    } else {
        return [];
    }
};

// ----------------------------------------------------------

export const MarqueeEquityTaskStateProvider = ({ children }) => {


    const [searchValue, setSearchValue] = useState("");
    const [searchBooksData, setSearchBooksData] = useState([])
    const [myBookShelf, setMyBookShelf] = useState(getLocalStorageItems())

    useEffect(() => {

        async function getBooksBySearch(searchValue) {

            if (searchValue === "") setSearchBooksData([])

            const stringToSearch = searchValue?.split(" ").join("+")


            console.log(stringToSearch)


            const searchBooksApi = `https://openlibrary.org/search.json?q=${stringToSearch}&limit=10&page=1`

            const response = await fetch(searchBooksApi);

            if (!response.ok) {
                throw new Error(response.statusText)
            }
            const data = await response.json();
            const result = await data?.docs

            if (result.length > 0) {

                const addIdToData = result?.map((val, i) => {
                    return {
                        ...val,
                        id: i + 1
                    }
                })
                setSearchBooksData(addIdToData)
            }
        }

        getBooksBySearch(searchValue)

    }, [searchValue])


    // console.log(searchBooksData)

    // console.log(searchValue)

    // ----------------------------------------------------------

    // --------------add to my bookshelf--------------

    function addToBookShelf(data) {

        const findInBookShelf = myBookShelf?.some((ele) => {
            return ele.title === data.title;
        });

        if (findInBookShelf) {
            setMyBookShelf([...myBookShelf])
        } else {
            setMyBookShelf([...myBookShelf, data])
        }
    }

    // --------------add to my bookshelf--------------

    // --------------remove from my bookshelf--------------

    function deleteFromBookShelf(data) {
        setMyBookShelf(myBookShelf?.filter((val) => val.id !== data.id))
    }

    // --------------remove from my bookshelf--------------

    // console.log(myBookShelf)

    // function to clearAll the bookShelf items...
    const clearAll = (e) => {
        setMyBookShelf([]);
    };

    // ----------------------------------------------------------

    // function to save data on localStorage...

    useEffect(() => {
        localStorage?.setItem("localStorageForBookShelf", JSON.stringify(myBookShelf));
    }, [myBookShelf]);

    // function to save data on localStorage...

    // ----------------------------------------------------------

    return (
        <MarqueeEquityTaskAppStates.Provider
            value={{

                searchValue,
                setSearchValue,
                searchBooksData,
                setSearchBooksData,
                myBookShelf,
                setMyBookShelf,
                addToBookShelf,
                deleteFromBookShelf,
                clearAll

            }}
        >
            {children}
        </MarqueeEquityTaskAppStates.Provider>
    )
}

export const AllMarqueeEquityTaskContextState = () => {
    return useContext(MarqueeEquityTaskAppStates)
};









