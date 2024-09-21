import React from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import { saveLocalData, saveWishData,  } from '../../utils/utils';

const BookDetails = () => {
    const books=useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const book=books.find(item => item.id == idInt)
    const {book_name, author, image, review, publisher, year_of_publishing, total_pages, rating, category, tags } =book;
    const handelReadBook = ()=>{
        saveLocalData(idInt)        
    }

    const handelWishList = ()=>{
        saveWishData(idInt)
    }
 

    return (
        <div className='flex-col lg:flex gap-5 px-6 py-10 lg:px-14'>
            <div className='w-full p-10 lg:w-1/2 bg-gray-200 lg:p-20 rounded-lg'>
                <img src={image} alt="" />
            </div>

            <div className='w-full lg:w-1/2 py-3'>
                <h3 className='text-2xl font-semibold'>{book_name}</h3>
                <h4 className='text-xl border-b-2 border-dashed border-gray-300 py-4'>By: {author}</h4>
                <h4 className='text-xl border-b-2 border-dashed border-gray-300 py-4'>{category}</h4>
                <p className='text-base py-3'><span className='text-xl font-bold'>Review: </span>{review}</p>
                <ul className='flex gap-3 py-3 border-b-2 border-dashed border-gray-300'>
                    <span className='font-bold text-xl'>Tags:</span>
                {book.tags.map((item, idx) => <li key={idx} className='text-[#1ae63e] rounded-2xl font-medium py-2 px-3'>{item}</li>)}
                </ul>
                
               <p className='flex justify-between py-3'><span className='font-bold'>Number of Page</span>{total_pages}</p>
               <p className='flex justify-between py-3'><span className='font-bold'>Publisher</span>{publisher}</p>
               <p className='flex justify-between py-3'><span className='font-bold'>Year of Publishing</span>{year_of_publishing}</p>
               <p className='flex justify-between py-3'><span className='font-bold'>Rating</span>{rating}</p>
               <div className="flex gap-3 pt-4">
                <Link onClick={handelReadBook} className="btn bg-[#1ae63e] text-white hover:text-black">Read Book</Link>
                <Link onClick={handelWishList} className="btn  bg-[#80e8f6] text-white hover:text-black">WishList</Link>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;