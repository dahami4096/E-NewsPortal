import { AiOutlineClose } from "react-icons/ai";
import { PiClockClockwiseBold } from "react-icons/pi";
import { BiUserCircle, BiWindows } from "react-icons/bi";

const NewsModal = ({ news, onClose }) => {
    return (
        <div className="fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center"
            onClick={onClose}
        >
            <div
                onClick={(event) => event.stopPropagation()}
                className='w-[600px] max-w-full h-[400px] bg-white rounded-xl p-4 flex flex-col relative'
            >
                <AiOutlineClose
                    className='absolute right-6 top-6 text-3xl text-red-600 cursor-pointer'
                    onClick={onClose}
                />
                <h2 className="w-fit px-4 py-1 bg-red-300 rounded-lg">
                    {news.date}
                </h2>
                <h4 className="my-2 text-gray-500">{news._id}</h4>
                <div className="flex justify-start items-center gap-x-2">
                    <PiClockClockwiseBold className='text-red-300 text-2xl' />
                    <h2 className="my-1">{news.title}</h2>
                </div>
                <div className="flex justify-start items-left gap-x-2">
                    <BiWindows className="text-green-300 text-2xl" />
                    <h2 className="my-1">{news.description}</h2>
                </div>
                <div className="flex justify-start items-center gap-x-2">
                    <BiUserCircle className="text-green-300 text-2xl" />
                    <h2 className="my-1">{news.author}</h2>
                </div>
                <p className="mt-4">More Information</p>
                <p className="my-2">
                    Within Israeli and Palestinian society, the conflict generates a wide variety of views and opinions. Since its inception, the conflict's casualties have not been restricted to combatants, with a large number of civilian fatalities on both sides. A minority of Jewish Israelis (32 percent) support a two-state solution with the Palestinians.[25] Israeli Jews are divided along ideological lines, and many favor maintaining the status quo.
                </p>
            </div>
        </div>

    );
}

export default NewsModal