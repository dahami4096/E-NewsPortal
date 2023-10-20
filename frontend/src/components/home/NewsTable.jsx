import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';

const NewsTable = ({ news }) => {
    return (
        <table className='w-full border-seperate border-spacing-5 rounded-lg bg-black ' style={{
            backgroundColor:"black",
            backgroundOpacity:"0.5"
            
        }}>
            <thead>
                <tr>
                    <th className='border border-slate-600 rounded-md' style={{ color: "#FFFF" }}>No</th>
                    <th className='border border-slate-600 rounded-md' style={{ color: "#FFFF" }}>Title</th>
                    <th className='border border-slate-600 rounded-md max-md:hidden' style={{ color: "#FFFF" }}>Description</th>
                    <th className='border border-slate-600 rounded-md max-md:hidden' style={{ color: "#FFFF" }}>Author</th>
                    <th className='border border-slate-600 rounded-md max-md:hidden' style={{ color: "#FFFF" }}>Date</th>
                    <th className='border border-slate-600 rounded-md' style={{ color: "#FFFF" }}>Operations</th>
                </tr>

            </thead>
            <tbody>
                {news.map((news, index) => (
                    console.log(news),
                    <tr key={news._id} className='h-8 bg-black rounded-md '>
                        <td className='border border-slate-700 rounded-md text-center' style={{ color: "#FF7F50" }}>
                            {index + 1}
                        </td>
                        <td className='border border-slate-700 rounded-md text-center' style={{ color: "#FF7F50" }}>
                            {news.title}
                        </td>
                        <td className='border border-slate-700 rounded-md text-left max-md-hidden' style={{ color: "#FFFF" }}>
                            {news.description}
                        </td>
                        <td className='border border-slate-700 rounded-md text-center max-md:hidden' style={{ color: "#FF7F50" }}>
                            {news.author}
                        </td>
                        <td className='border border-slate-700 rounded-md text-center max-md:hidden' style={{ color: "#FF7F50" }}>
                            {news.date}
                        </td>
                        <td className='border border-slate-700 rounded-md text-center'>
                            <div className='flex justify-center gap-x-4'>
                                <Link to={`/news/details/${news._id}`}>
                                    <BsInfoCircle className='text-2x1 text-green-800' />
                                </Link>
                                <Link to={`/news/edit/${news._id}`}>
                                    <AiOutlineEdit className='text-2xl text-yellow-600' />
                                </Link>
                                <Link to={`/news/delete/${news._id}`}>
                                    <MdOutlineDelete className='text-2xl text-red-600' />
                                </Link>
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
export default NewsTable;