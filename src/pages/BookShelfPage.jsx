import { Button } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { AllMarqueeEquityTaskContextState } from '../context/MarqueeEquityTaskStateProvider'
import CardComp from '../components/CardComp'

const BookShelfPage = () => {

  const { myBookShelf, clearAll } = AllMarqueeEquityTaskContextState()

  return (

    <section className='searchpageSec'>

      <h1 className='searchHeading'>my bookshelf</h1>

      <div className='searchcompdiv'>

        <NavLink
          to="/"
        >
          <Button variant="contained" color="warning" sx={{ p: "15px" }}>
            back to home
          </Button>
        </NavLink>

      </div>
      {
        (myBookShelf && myBookShelf?.length > 0) ?

          <div className='allcardsdiv'>

            {
              myBookShelf?.map((book, i) => {
                return <CardComp key={i} bookData={book}

                />
              })
            }

          </div>
          :
          <h1 className='endHeading'>My bookshell is currently empty...</h1>

      }

      {/* --------------------------------------- */}

      {
        (myBookShelf && myBookShelf?.length > 0) ?
          <Button variant="outlined" color="warning" sx={{ p: "15px" }} onClick={clearAll}>
            clear all
          </Button> : null

      }

    </section>

















  )
}

export default BookShelfPage










/*

      <NavLink
        to="/"
      >
        <Button variant="contained" sx={{ p: "15px" }}>
          back to home
        </Button>
      </NavLink>;

      <h1>bookshelfpage</h1>
      */