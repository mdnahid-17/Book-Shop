import { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getLocalData } from '../../utils/utils';
import Card from './Card';
import { shortContext } from '../Pages/Listed';


const ReadBook = () => {
    const shortData = useContext(shortContext)
    const books = useLoaderData();
    const [listBooks,setListBooks] = useState([]);
    const [display,setDisplay] = useState([]);
    const [sortBooks,setSorBooks] = useState([])

  

    useEffect(()=>{
        const storedIds =getLocalData();
        if (books.length > 0) {
            const bookList =books.filter(book => storedIds.includes(book.id))
            setListBooks(bookList);
            setDisplay(bookList)
        }
        if (shortData ==='rating') {
            const rating =books.sort((a,b) => a.rating - b.rating)
            setSorBooks(rating)
        }else if (shortData ==='year') {
            const year =books.sort((a,b) => a.year_of_publishing - b.year_of_publishing)
            setSorBooks(year)
        }else if (shortData ==='page') {
            const page =books.sort((a,b) => a.total_pages - b.total_pages)
            setSorBooks(page)
        }
    },[shortData,books])

    return (
        <div>
           <div>
            {
                sortBooks.map((book,idx) => <Card key={idx} book={book}></Card>)
            }
           </div>
            {
                display.map(book => <Card key={book.id} book={book}></Card>)
            }
        </div>
    );
};

export default ReadBook;