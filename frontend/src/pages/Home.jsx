import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
import NewsTable from '../components/home/NewsTable';
import NewsCard from '../components/home/NewsCard';
import img from "../components/home/Image/world2.jpg";


const Home = () => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showType, setShowType] = useState('table');
    

    useEffect(() => {
        setLoading(true);
        axios
            .get('http://localhost:5555/news')
            .then((response) => {
                setNews(response.data.data);
                setLoading(false);
            }).catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, []);
    return (
        <div className="p-full" 
        style={{
            margin:"25px auto",
            padding:"20px",
            backgroundSize:"cover",
            width:"100%",
            height:"100vh",
            backgroundImage: `url(${img})`,
                        
        }}>
            <div className='flex justify-center items-center gap-x-4' >
                            
                <button
                    className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg'
                    onClick={() => setShowType('table')}
                >
                    Table
                </button>
                <button
                    className='bg-sky-300 hover:bg-orange-600 px-4 py-1 rounded-lg'
                    onClick={() => setShowType('card')}
                >
                    Card
                </button>

            </div>
            <div className='flex justify-between items-center'>
                <h1 className='text-3xl text-white my-8'>News Blog</h1>
                <Link to='/news/create'>
                    <MdOutlineAddBox className='test-white-800 text-4xl' />
                </Link>
            </div>
            {loading ? (<Spinner />
            ) : showType === 'table' ? (
                <NewsTable news={news} />
            ) : (
                <NewsCard news={news} />
            )}
        </div>
    );
};

export default Home;