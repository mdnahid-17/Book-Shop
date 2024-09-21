import React from 'react';
import { Link } from 'react-router-dom';
import { FaRegStar } from "react-icons/fa";

const BookCards = ({book}) => {
    const { id, book_name, author, image, rating, category, tags }=book;
    return (
        
        <Link to={`/books/${id}`} className='w-full border-4 border-gray-300 lg:p-6 lg:mx-0 rounded-xl mb-14 hover:shadow-2xl'>
        <div className='bg-gray-200 flex items-center justify-center mx-5 px-5 lg:mx-0 lg:px-0 py-8'>
            <img className='lg:w-[168px] lg:h-[200px] object-cover' src={image} alt="" />
        </div>
        <div>
            <ul className='flex py-3 justify-around flex-wrap gap-2'>
                {tags.map(( tag, idx) => <li key={idx} className='text-[#1ae63e] font-semibold'>{tag}</li>)}
            </ul>
        </div>

       <h2 className='text-2xl font-semibold p-4'>{book_name}</h2>
       <p className='text-xl border-b-2 border-dashed border-gray-300 pb-7 mx-4'>By:  {author}</p>

      <div className='flex justify-between px-4 py-7'>
      <p>{category}</p>
      <div className='flex gap-1'>
      <p>{rating}</p>
      <FaRegStar />
      </div>
      </div>
      
        </Link>
    );
};

export default BookCards;