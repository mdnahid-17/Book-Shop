import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
const Contact = () => {
    return (
        <div className="mt-7">
        <div className="container mx-auto px-5">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.4594823863913!2d90.36564367505999!3d23.73098888952195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bf311ac4e977%3A0x29ab374c87b8c31e!2sHazaribagh%20Boro%20Masjid!5e0!3m2!1sen!2sbd!4v1726738598158!5m2!1sen!2sbd" className='w-full h-72' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className="container mx-auto mt-10 px-3 pb-6">
            <div className="py-7 lg:py-16 border-2 rounded-lg border-second px-6 md:px-4 lg:px-0">
                <div className="grid grid-cols-1 lg:px-8 md:grid-cols-2 md:divide-x">
                    <div className="py-6 md:py-0 md:px-6">
                        <h1 className="text-4xl font-bold">Contact Details</h1>
                        <p className="pt-2 pb-4">Fill in the form to start a conversation</p>
                        <div className="space-y-4">
                            <p className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                                </svg>
                                <span>Dhaka Bangladesh</span>
                            </p>
                            <p className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                                </svg>
                                <span>123456789</span>
                            </p>
                            <p className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                </svg>
                                <span>contact@business.com</span>
                            </p>
                        </div>
                        <ul className="flex gap-4 items-center mt-8">
                            <li className="bg-[#80e8f6] hover:bg-[#1ae63e] p-3 bg-second rounded-full text-white text-xl cursor-pointer"><Link><FaFacebookF /></Link></li>
                            <li className="bg-[#80e8f6] hover:bg-[#1ae63e] p-3 cursor-pointer bg-second rounded-full text-white text-xl"><Link><FaTwitter  /></Link></li>
                            <li className="bg-[#80e8f6] hover:bg-[#1ae63e] cursor-pointer p-3 bg-second rounded-full text-white text-xl"><Link><FaInstagram  /></Link></li>
                            <li className="bg-[#80e8f6] hover:bg-[#1ae63e] cursor-pointer p-3 bg-second rounded-full text-white text-xl"><Link><FaYoutube  /></Link></li>
                        </ul>
                    </div>
                    <div>
                        <form className="flex flex-col py-6 space-y-6 md:py-0 md:px-6">
                            <label className="block">
                                <span className="font-medium text-xl">Full name</span>
                                <input type="text" placeholder="Name" className="input input-bordered input-accent w-full block mt-2" />
                            </label>
                            <label className="block">
                                <span className="font-medium text-xl">Email address</span>
                                <input type="text" placeholder="Email" className="input input-bordered input-accent w-full block mt-2" />
                            </label>
                            <label className="block">
                                <span className="font-medium text-xl">Message</span>
                                <textarea className="textarea textarea-info h-40 block mt-2 resize-none w-full" placeholder="Bio"></textarea>
                            </label>
                        </form>
                        <div className="px-6 mt-5">
                            <button className="btn bg-[#80e8f6] text-xl text-white hover:bg-[#1ae63e] w-full">Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
    );
};

export default Contact;