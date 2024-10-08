import bookSelf from "/Projects/Book-shop/src/assets/bookSelf.jpg"
import other from "/Projects/Book-shop/src/assets/other.jpg"
import video from "/Projects/Book-shop/src/assets/video.mp4"
import { Link } from "react-router-dom";
import { FaBook } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import { BsEmojiSmileFill } from "react-icons/bs";

const About = () => {
    return (
        <div className="container mx-auto pb-8 lg:pb-16 px-4 lg:px-0 py-6">
        <div className="relative w-full">
            <img className="h-96 w-full object-cover rounded-md" src={bookSelf} alt="" />
            <div className="absolute inset-0 bg-black opacity-15 rounded-md"></div>
            <div className="absolute inset-0 flex items-center justify-center">
                <div>
                    <h2 className="text-white text-3xl font-medium lg:font-bold">& Read Books <br />& Gain Valuable Knowledge  <br />& Improve Your Memory</h2>
                    <Link
                     to={'/'} className='btn bg-[#80e8f6] hover:bg-second text-white font-bold text-xl mt-4'>Read Books</Link>
                </div>
            </div>
        </div>
        <div className='mt-10 bg-black py-10 rounded-xl lg:rounded-full bg-opacity-15 flex items-center justify-between lg:justify-around flex-wrap lg:flex-nowrap space-y-6 lg:space-y-0 px-5 lg:px-0'>
            <div className='flex items-center gap-4'>
                <div className='p-4 rounded-full bg-[#80e8f6] bg-opacity-20 text-[#80e8f6]'>
                    <FaBook className='text-2xl' />
                </div>
                <div>
                    <h1 className='text-xl font-bold'>8,254</h1>
                    <p className='text-lg font-medium'>total books</p>
                </div>
            </div>
            <div className='flex items-center gap-4'>
                <div className='p-4 rounded-full bg-[#1ae63e] bg-opacity-25 text-[#1ae63e]'>
                    <FaUserFriends className='text-2xl' />
                </div>
                <div>
                    <h1 className='text-xl font-bold'>1,456</h1>
                    <p className='text-lg font-medium'>authors</p>
                </div>
            </div>
            <div className='flex items-center gap-4'>
                <div className='p-4 rounded-full bg-[#80e8f6] bg-opacity-25 text-[#80e8f6]'>
                    <FaCartPlus className='text-2xl' />
                </div>
                <div>
                    <h1 className='text-xl font-bold'>7,489</h1>
                    <p className='text-lg font-medium'>books sold</p>
                </div>
            </div>
            <div className='flex items-center gap-4'>
                <div className='p-4 rounded-full bg-[#1ae63e] bg-opacity-25 text-[#1ae63e]'>
                    <BsEmojiSmileFill className='text-2xl' />
                </div>
                <div>
                    <h1 className='text-xl font-bold'>95%</h1>
                    <p className='text-lg font-medium'>happy customer</p>
                </div>
            </div>
        </div>
        <div className='mt-7 space-y-10'>
            <div>
                <video className='w-full h-96 object-fill rounded-2xl' controls autoPlay>
                    <source src={video} type="video/mp4" />
                </video>
            </div>
            <div className='text-center'>
                <h3 className='text-xl lg:text-2xl font-medium mb-3'>STILL HAVE A QUESTION?</h3>
                <h2 className='text-3xl lg:text-4xl font-bold'>CONTACT US TODAY</h2>
                <p className='text-xl my-6'>Our friendly team aim to get back to you within 48 hours.</p>
                <Link to={'/contact'} className='bg-second py-2 px-6 rounded-full text-xl font-bold text-white'>Go to Contact Us</Link>
            </div>
            <div className="relative w-full flex items-center justify-center ">
              <img className="w-full h-80 object-cover rounded-md" src={other} alt="" />
              <div className="absolute inset-0 bg-black opacity-20 flex justify-center items-center py-10"></div>
                <div className='absolute text-center px-7 lg:px-0'>
                    <h2 className='text-[#1ae63e] text-3xl lg:text-4xl font-bold'>Get <span className='text-white'>10%</span> Off Your Order!</h2>
                    <p className='text-[#80e8f6] text-xl mt-4'>Enter your email and receive a 10% discount on your next order!</p>
                    <div className='rounded-full relative flex items-center mt-5'>
                        <input type="text" placeholder="Your Email Address" className="input pl-6 input-info w-full rounded-l-full focus:outline-none" />
                        <button className='bg-[#80e8f6] py-3 rounded-r-full px-6 text-white'>Subscribe</button>
                    </div>
                </div>
              
            </div>
        </div>
    </div>
    );
};

export default About;