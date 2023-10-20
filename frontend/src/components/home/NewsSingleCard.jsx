import { Link } from 'react-router-dom';
import { PiClockClockwiseBold } from 'react-icons/pi';
import { BiUserCircle, BiShow, BiWindows } from 'react-icons/bi';
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';
import { useState } from 'react';
import NewsModal from './NewsModal';


const NewsSingleCard = ({ news }) => {
    const [showModal, setShowModal] = useState(false);

    return (
        <div
            className='border-2 border-gray-500 rounded-lg px-4 py-2 m-4 relative hover:shadow-xl bg-opacity-0.1' style={{
                backgroundColor:"black",
                opacity:"0.9"
                
            }}>
            <h2 className="absolute top-1 right-2 px-4 py-1 bg-gray-300 rounded-lg">
                {news.date}
            </h2>
            <h4 className="my-2 text-gray-500">{news._id}</h4>
            <div className="flex justify-start items-center gap-x-2">
                <PiClockClockwiseBold className='text-red-300 text-2xl' st />
                <h2 className="my-1 bg-gray-300 rounded-lg" style={{color:"#0C1C60"}}>{news.title}</h2>
            </div>
            <div className="flex justify-start items-left gap-x-2">
                <BiWindows className="text-green-300 text-2xl" />
                <h2 className="my-1 bg-black-300 rounded-lg" style={{color:"#FFFF"}}>{news.description} </h2>
            </div>
            <div className="flex justify-start items-center gap-x-2">
                <BiUserCircle className="text-green-300 text-2xl" />
                <h2 className="my-1" style={{color:"#CCCCFF"}}>{news.author}</h2>
            </div>
            <div className="flex justify-between items-center gap-x-2 mt-4 p-4">
                <BiShow
                    className='text-3xl text-blue-800 hover:text-black cursor-pointer'
                    onClick={() => setShowModal(true)}
                />
                <Link to={`/news/details/${news._id}`}>
                    <BsInfoCircle className="text-2xl text-green-800 hover:text-black" />
                </Link >
                <Link to={`/news/edit/${news._id}`}>
                    <AiOutlineEdit className="text-2xl text-yellow-600 hover:text-black" />
                </Link>
                <Link to={`/news/delete/${news._id}`}>
                    <MdOutlineDelete className="text-2xl text-red-600 hover:text-black" />
                </Link>
            </div>
            {
                showModal && (
                    <NewsModal news={news} onClose={() => setShowModal(false)} />
                )
            }
        </div>
    );
};

export default NewsSingleCard;