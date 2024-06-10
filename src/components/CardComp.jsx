import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActions } from '@mui/material';
import { AllMarqueeEquityTaskContextState } from '../context/MarqueeEquityTaskStateProvider';




export default function CardComp({ bookData }) {


    const {
        addToBookShelf, deleteFromBookShelf, myBookShelf

    } = AllMarqueeEquityTaskContextState()



    const findInBookShelf = myBookShelf?.some((ele) => {
        return  ele?.title === bookData?.title;
    });


    return (

        bookData ?

            <Card sx={{
                maxWidth: 550, minWidth: 350, height: "auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexDirection: "column", flexWrap: "wrap",
                "@media (max-width: 640px)": {
                    minWidth: 230,
                }

            }}
                className='cardClass'>

                <CardContent>
                    <Typography gutterBottom variant="h5" component="div"

                        sx={{
                            fontWeight: "800",
                            fontSize: "250%",
                            mb: 5,
                            "@media (max-width: 410px)": {
                                fontSize: "200%",
                            }
                        }}
                    >
                        <span className=''><b>Book title :-</b>  {bookData?.title} </span>

                    </Typography>
                    <Typography variant="h5" sx={{ paddingBottom: 5 }}>


                        <span className=''>author name :- <b>{bookData?.author_name[0]}</b> </span>

                    </Typography>
                    <Typography variant="h5" sx={{ paddingBottom: 5 }}>


                        <span className=''>edition count :- <b>{bookData?.edition_count}</b> </span>
                    </Typography>
                    <Typography variant="h5" sx={{ paddingBottom: 5 }}>


                        <span className=''>first publish year :- <b>{bookData?.first_publish_year}</b> </span>
                    </Typography>

                </CardContent>
                <CardActions>

                    {
                        findInBookShelf

                            ?

                            <Button variant="contained"
                                color="error"
                                onClick={() => deleteFromBookShelf(bookData)}
                                sx={{ p: "15px" }}

                            >
                                remove from bookshelf
                            </Button>

                            :

                            <Button variant="contained"
                                onClick={() => addToBookShelf(bookData)}
                                sx={{ p: "15px" }}

                            >
                                add to bookshelf
                            </Button>

                    }

                </CardActions>
            </Card >

            : <h1 style={{ color: "red" }}>loading....</h1>
    );
}


