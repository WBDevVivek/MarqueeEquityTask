import React from 'react'
import CardComp from '../components/CardComp'
import SearchComp from '../components/SearchComp'
import { Button } from '@mui/material';
import { AllMarqueeEquityTaskContextState } from '../context/MarqueeEquityTaskStateProvider';

import { NavLink } from "react-router-dom";





const SearchPage = () => {

    const {
        searchBooksData,

    } = AllMarqueeEquityTaskContextState()

    return (
        <section className='searchpageSec'>


            <h1 className='searchHeading'>search by book name</h1>

            <div className='searchcompdiv'>

                <SearchComp />

                <NavLink
                    to="/bookshelf"
                >
                    <Button variant="contained" color="secondary" sx={{ p: "15px" }}>
                        go to bookshelf
                    </Button>
                </NavLink>;

            </div>
            {
                (searchBooksData && searchBooksData?.length > 0) ?

                    <div className='allcardsdiv'>


                        {
                            searchBooksData?.map((book, i) => {
                                return <CardComp key={i} bookData={book}

                                />
                            })
                        }

                    </div>
                    :
                    <h1 className='endHeading'>enter something in search field to get data...</h1>

            }

        </section>
    )
}

export default SearchPage