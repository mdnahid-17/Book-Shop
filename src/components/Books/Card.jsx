import React from 'react';
import { IoLocationOutline } from "react-icons/io5";
import { FaUserTie } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Card = ({book}) => {

    const { book_name, author, image, rating, total_pages, category, publisher, year_of_publishing, tags, id } = book;
    return (
        <div className='flex mx-2 overflow-hidden  flex-wrap flex-col md:flex-row lg:flex-row px-8 py-6 gap-10 mb-5 border border-gray-400 lg:mx-10 rounded-xl '>
            <div className='bg-gray-200 w-full py-4 flex items-center justify-center rounded-lg lg:w-2/6'>
              <img className='w-3/5 h-2/6 object-contain' src={image} alt="" />
            </div>

            <div className='py-5 h-3/5'>
                <h3 className='text-2xl font-semibold'>{book_name}</h3>
                <h5 className='text-xl py-3'>{author}</h5>
                <ul className='flex justify-around gap-3 py-2'>
                    <li className='text-2xl font-semibold'>Tag</li>
                    {tags.map((tag,idx) => <li key={idx} className='text-base bg-[#1ae63e] bg-opacity-10 text-[#1ae63e] font-medium rounded-3xl p-3'>{tag}</li>)}
                    <li className='flex gap-2 items-center justify-center text-base font-semibold '><IoLocationOutline /> year of publishing:{year_of_publishing}</li>
                </ul>
                <div className='flex gap-5  border-b-2 py-4'>
                <p className='flex gap-1 text-xl font-semibold'><FaUserTie />Publisher:<span className='text-base font-normal'>{publisher}</span></p>
                <p className='text-xl font-semibold flex gap-1'><FaBookOpen />Pages <span className='text-xl font-normal'>{total_pages}</span></p>
                </div>
                <ul className='flex flex-col flex-wrap w-3/4 overflow-hidden lg:flex-row gap-3 pt-5'>
                    <li><button className='bg-[#328EFF] bg-opacity-10 p-3 text-base rounded-full font-medium'>Category: {category}</button></li>
                    <li><button className='bg-[#FFAC33] bg-opacity-10 p-3 text-base rounded-full font-medium'>Rating {rating}</button> </li>
                    <li><Link to='/' className='btn bg-[#1ae63e] rounded-full text-white'>View Details </Link></li>
                </ul>
            </div>

        </div>
    );
};

export default Card;