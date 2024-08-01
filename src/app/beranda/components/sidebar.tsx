import Link from "next/link"
import { BiUser} from "react-icons/bi";
import { MdHomeFilled} from "react-icons/md";



export default function SideBar() {
    return (
        <div className="bg-black h-screen pt-10 flex flex-col w-1/3 sticky top-0">
            <div className="pl-20">
                <div className="pl-5">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50" className='fill-current text-white'>
                        <path d="M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z"></path>
                    </svg>
                </div>
                <div className="text-white pl-6 pt-10 pb-8 flex flex-col">
                    <div className="flex gap-3">
                        <MdHomeFilled size={20}/>
                        <Link href="/" className="font-semibold pb-5 hover:text-primary">Home</Link>

                    </div>
                    <div className="flex gap-3">
                        <BiUser size={20}/>
                        <Link href="/" className="font-semibold hover:text-primary" >Profile</Link>
                    </div>
                </div>
                <div className="pl-5">
                    <Link href="/" className="py-3 px-6 bg-primary text-white rounded-full text-base font-semibold hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out">
                        Post
                    </Link>
                </div>
                <div className="pt-80 flex gap-3">
                    <div className="avatar">
                        <div className="w-14 rounded-full">
                            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                    </div>
                    <div className="pt-1">
                        <h3 className="text-white font-bold">Dasti</h3>
                        <p className="text-gray-400">@dasticantik</p>
                    </div>
                </div>
            </div>
        </div>
    )
}