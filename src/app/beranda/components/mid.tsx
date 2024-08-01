'use client'
import Image from "next/image"
import Link from "next/link"
import img1 from "@/assets/Foto 1.jpg"
import { FaRegImage } from "react-icons/fa6";
import { MdGifBox } from "react-icons/md";
import { BiPoll } from "react-icons/bi";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { RiCalendarScheduleFill } from "react-icons/ri";
import { FaLocationDot } from "react-icons/fa6";
import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";
import { useState } from "react";

export default function Mid() {
    const [like,setLike] = useState(0)
    return (
        <div className="bg-white w-full">
            {/* Judul */}
            <div className="flex justify-center ">
                <Link href="/" className="text-primary font-semibold border border-solid border-primary py-1 px-[188px] hover:bg-primary hover:text-white">For You</Link>
                <Link href="/" className="text-primary font-semibold border border-solid border-primary py-1 px-[188px] hover:bg-primary hover:text-white">Following</Link>
            </div>

            {/* What Is Happening?! */}
            <div className="border border-solid border-gray-300 p-5">
                <div className="flex gap-3">
                    <div>
                        <div className="avatar pt-5">
                            <Image src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="profile" width={50} height={50} className="rounded-full" />
                        </div>
                    </div>
                    <div className="pt-8 w-full">
                        <textarea className="bg-white text-black text-xl w-full outline-none" placeholder="What Is Happening?!" />
                    </div>
                </div>
                <div className="pt-10 flex justify-between">
                    <div className="flex gap-3 pt-3 pl-5">
                        <FaRegImage size={20} color="gray" />
                        <MdGifBox size={20} color="gray" />
                        <BiPoll size={20} color="gray" />
                        <MdOutlineEmojiEmotions size={20} color="gray" />
                        <RiCalendarScheduleFill size={20} color="gray" />
                        <FaLocationDot size={20} color="gray" />
                    </div>
                    <button className="py-3 px-6 bg-primary text-white rounded-full text-base font-semibold hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out">
                        Post
                    </button>
                </div>
            </div>

            {/* Posting 1 */}
            <div className="border border-solid border-gray-300 p-5">
                <div className="pt-5 flex gap-3">
                    <div className="avatar">
                        <div className="w-14 rounded-full">
                            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                    </div>
                    <div className="pt-1 flex gap-3">
                        <h3 className="text-black font-bold">Dasti</h3>
                        <p className="text-gray-400">@dasticantik</p>
                    </div>
                </div>
                <div className="pl-16">
                    <p className="text-justify">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores nostrum delectus id obcaecati consequuntur repellendus ex, debitis dignissimos nemo consectetur minima aliquid at repudiandae iste quis enim assumenda odio veniam corrupti? Dolorem, labore! Sed natus inventore eum, unde quae nobis excepturi doloremque nesciunt eligendi perferendis, non aspernatur soluta. Odio, amet dolor voluptate, aut eveniet veniam quo cupiditate accusantium laborum quidem nam laboriosam consequuntur vero! Odio optio laboriosam nobis, dolore, minima soluta placeat facilis, quibusdam sed atque esse dolorum quidem assumenda corrupti accusamus ea nemo architecto temporibus alias quia hic. Nisi sunt minus praesentium iste quos odit ea quas doloremque quo!</p>
                </div>
                <div className="pl-14 pt-3 flex gap-5">
                    <div className="flex">
                        <button onClick={()=>setLike(like + 1)}><AiFillLike size={20} className="text-primary" /></button>
                        <p>{like}</p>
                    </div>
                    <div className="flex">
                        <button onClick={()=>setLike(like + 1)}><AiFillDislike size={20} className="text-red-500" /></button>
                        <p>{like}</p>
                    </div>
                </div>
            </div>
            {/* Posting 2 */}
            <div className="border border-solid border-gray-300 p-5">
                <div className="pt-5 flex gap-3">
                    <div className="avatar">
                        <div className="w-14 rounded-full">
                            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                    </div>
                    <div className="pt-1 flex gap-3">
                        <h3 className="text-black font-bold">Dasti</h3>
                        <p className="text-gray-400">@dasticantik</p>
                    </div>
                </div>
                <div className="pl-16">
                    <p className="text-justify">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores nostrum delectus id obcaecati consequuntur repellendus ex, debitis dignissimos nemo consectetur minima aliquid at repudiandae iste quis enim assumenda odio veniam corrupti? Dolorem, labore! Sed natus inventore eum, unde quae nobis excepturi doloremque nesciunt eligendi perferendis, non aspernatur soluta. Odio, amet dolor voluptate, aut eveniet veniam quo cupiditate accusantium laborum quidem nam laboriosam consequuntur vero! Odio optio laboriosam nobis, dolore, minima soluta placeat facilis, quibusdam sed atque esse dolorum quidem assumenda corrupti accusamus ea nemo architecto temporibus alias quia hic. Nisi sunt minus praesentium iste quos odit ea quas doloremque quo!</p>
                </div>
            </div>
            {/* Posting 3 */}
            <div className="border border-solid border-gray-300 p-5">
                <div className="pt-5 flex gap-3">
                    <div className="avatar">
                        <div className="w-14 rounded-full">
                            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                    </div>
                    <div className="pt-1 flex gap-3">
                        <h3 className="text-black font-bold">Dasti</h3>
                        <p className="text-gray-400">@dasticantik</p>
                    </div>
                </div>
                <div className="pl-16">
                    <p className="text-justify">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores nostrum delectus id obcaecati consequuntur repellendus ex, debitis dignissimos nemo consectetur minima aliquid at repudiandae iste quis enim assumenda odio veniam corrupti? Dolorem, labore! Sed natus inventore eum, unde quae nobis excepturi doloremque nesciunt eligendi perferendis, non aspernatur soluta. Odio, amet dolor voluptate, aut eveniet veniam quo cupiditate accusantium laborum quidem nam laboriosam consequuntur vero! Odio optio laboriosam nobis, dolore, minima soluta placeat facilis, quibusdam sed atque esse dolorum quidem assumenda corrupti accusamus ea nemo architecto temporibus alias quia hic. Nisi sunt minus praesentium iste quos odit ea quas doloremque quo!</p>
                </div>
            </div>
        </div>
    )
}