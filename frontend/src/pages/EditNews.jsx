import React, { useState, useEffect } from 'react'
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import img from "../components/home/Image/techno.jpg";

const EditNews = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [author, setAuthor] = useState('');
    const [date, setDate] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { id } = useParams();
    const { enqueueSnackbar } = useSnackbar();
    useEffect(() => {
        setLoading(true);
        axios.get(`http://localhost:5555/news/${id}`)
            .then((response) => {
                setAuthor(response.data.author);
                setTitle(response.data.title);
                setDescription(response.data.description);
                setDate(response.data.date);
                setLoading(false);
            }).catch((error) => {
                setLoading(false);
                alert('An error happened. Please check console');
                console.log(error);
            });
    }, [])

    const handleEditNews = () => {
        const data = {
            title,
            description,
            author,
            date,
        };
        setLoading(true);
        axios
            .put(`http://localhost:5555/news/${id}`, data)
            .then(() => {
                setLoading(false);
                enqueueSnackbar('News Edited Successfully', { variant: 'success' });
                navigate('/');
            })
            .catch((error) => {
                setLoading(false);
                //alert('An error happened. Please check console');
                enqueueSnackbar('Error', { variant: 'error' });
                console.log(error);
            });
    };
    return (
        <div className='p-4'
        style={{
            margin:"25px auto",
            padding:"20px",
            backgroundSize:"cover",
            width:"100%",
            height:"100vh",
            backgroundImage: `url(${img})`, opacity:"1.5"
        }}>
            <BackButton />
            <h1 className='text-3x1 my-4'style={{ color: "#FFFF",  fontSize:"30px", textDecoration:"underline", fontWeight:"bold"}}>Edit News</h1>
            {loading ? <Spinner /> : ''}
            <div className='flex flex-col rounded-lg w-[600px] p-4 mx-auto'>
                <div className='my-4 '>
                    <label className='text-x1 mr-4 text-white-500' style={{ color: "#FFFF", fontSize:"20px", fontWeight:"bold" }}>Title</label>
                    <input
                        type='text'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className='border-2 border-gray-500 px-4 py-2 w-full rounded-full bg-black text-white'
                    />
                </div>
                <div className='my-4 '>
                    <label className='text-x1 mr-4 text-white-500' style={{ color: "#FFFF", fontSize:"20px", fontWeight:"bold" }}>Description</label>
                    <input
                        type='text'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className='border-2 border-gray-500 px-4 py-2 w-full rounded-full bg-black text-white'
                    />
                </div>
                <div className='my-4 '>
                    <label className='text-x1 mr-4 text-white-500' style={{ color: "#FFFF", fontSize:"20px", fontWeight:"bold" }}>Author</label>
                    <input
                        type='text'
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        className='border-2 border-gray-500 px-4 py-2 w-full rounded-full bg-black text-white'
                    />
                </div>
                <div className='my-4 '>
                    <label className='text-x1 mr-4 text-white-500' style={{ color: "#FFFF", fontSize:"20px", fontWeight:"bold" }}>Date</label>
                    <input
                        type='text'
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className='border-2 border-gray-500 px-4 py-2 w-full rounded-full bg-black text-white'
                    />
                </div>
                <button className='p-2 bg-sky-700 m-8 text-white rounded-full' onClick={handleEditNews}>
                    Done
                </button>

            </div>
        </div>
    )
}

export default EditNews