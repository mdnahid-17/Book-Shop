import React, { useEffect, useState } from 'react';
import BookCards from './BookCards';
import { useBookData } from '../../Hooks/useBookData';
import Loader from '../Loader/Loader';

const Books = () => {
    const [showAll,setShowAll] = useState(false);
    const {data,loading} =useBookData();

// OLD COLLECTION 
    // const [data,setData] =useState([]);
    // useEffect(()=>{
    //     fetch('books.json')
    //     .then(res => res.json())
    //     .then(data =>setData(data))
        
    // },[])

    return (
        <div>
            <h3 className='text-2xl text-center pb-4 font-bold py-10'>Books</h3>

            <div className='flex items-center justify-center my-4'>
                { loading ? <Loader></Loader> : null}
            </div>




            <div className="md:grid lg:grid grid-cols-3 gap-8 w-4/5 mx-auto">
                {
                    data.slice(0,showAll ? data.length : 6).map(book => <BookCards key={book.id} book={book}></BookCards> )
                }
            </div>

           {
            data.length > 6 ? 
            <div className='text-center'>
            <button className='btn bg-[#1ae63e] mb-8 text-xl' onClick={()=>setShowAll(!showAll)}>{!showAll ? 'ShowAll' :'ShowLess'}</button>
            </div>:null
           }

        </div>
    );
};

export default Books;