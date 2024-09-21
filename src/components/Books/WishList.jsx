import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from './Card';
import { getWishData } from '../../utils/utils';


const WishList = () => {
    const books = useLoaderData();
    const [listBooks,setListBooks] = useState([]);
    const [display,setDisplay] = useState([])

    useEffect(()=>{
        const storedIds =getWishData();
        if (books.length > 0) {
            const bookList =books.filter(book => storedIds.includes(book.id))
            // console.log(bookList);
            setListBooks(bookList);
            setDisplay(bookList)
        }
    },[books])


    return (
        <div>
            {
                display.map(book => <Card key={book.id} book={book}></Card>)
            }
            
        </div>
    );
};

export default WishList;