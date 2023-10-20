import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import img from "../components/home/Image/techno.jpg";

const ShowNews = () => {
    const [news, setNews]=useState({});
    const [loading, setLoading]=useState(false);
    const {id}=useParams();

    useEffect(()=>{
        setLoading(true);
        axios
            .get(`http://localhost:5555/news/${id}`)
            .then((response) => {
                setNews(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    },[])

  return (
    <div className='p-4'>
        <BackButton/>
        <h1 className='p-4'
        style={{
            margin:"25px auto",
            padding:"20px",
            backgroundSize:"cover",
            
            backgroundImage: `url(${img})`,
            backgroundPosition:"20,20",
            backgroundColor:"black"
        }}>Show News</h1>
        {loading ? (
            <Spinner />
        ):(
            <div className='flex flex-col border-2 border-black rounded-lg w-full p-4'>
                <div className='my-4'>
                    <span className='text-x1 mr-4 text-gray-500'>Id :</span>
                    <span>{news._id}</span>
                </div>
                <div className='my-4'>
                    <span className='text-x1 mr-4 text-gray-500'>Title :</span>
                    <span>{news.title}</span>
                </div>
                <div className='my-4'>
                    <span className='text-x1 mr-4 text-gray-500'>Description    :</span>
                    <span>{news.description}</span>
                </div>
                <div className='my-4'>
                    <span className='text-x1 mr-4 text-gray-500'>Author    :</span>
                    <span>{news.author}</span>
                </div>
                <div className='my-4'>
                    <span className='text-x1 mr-4 text-gray-500'>Date   :</span>
                    <span>{news.date}</span>
                </div>
                <div className='my-4'>
                    <span className='text-x1 mr-4 text-gray-500'>Create Time :</span>
                    <span>{new Date(news.createdAt).toString()}</span>
                </div>
                <div className='my-4'>
                    <span className='text-x1 mr-4 text-gray-500'>Last Update Time :</span>
                    <span>{new Date(news.updatedAt).toString}</span>
                </div>
            </div> 
        )}
    </div>
  );
};
export default ShowNews;