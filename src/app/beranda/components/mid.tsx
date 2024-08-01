import Link from "next/link"

Link

export default function Mid() {
    return (
        <div className=" pl-10 pr-10 bg-white">
            {/* Judul */}
            <div className="flex gap-5 justify-center ">
                <Link href="/" className="text-primary font-semibold border border-solid border-primary py-1 px-48 hover:bg-primary hover:text-white">For You</Link>
                <Link href="/" className="text-primary font-semibold border border-solid border-primary py-1 px-48 hover:bg-primary hover:text-white">Following</Link>
            </div>

            {/* What Is Happening?! */}
            <div className="border border-solid border-gray-300 p-5">
                <div className="flex gap-3">
                    <div className="avatar pt-5 pl-2">
                        <div className="w-14 rounded-full">
                            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                    </div>
                    <div className="pt-8">
                        <input type="text" className="text-xl bg-white" placeholder="What Is Happening?!" />
                    </div>
                </div>
                <input type="file" className="pt-5" />
                <div className="pt-10 flex justify-end">
                    <Link href="/" className="py-3 px-6 bg-primary text-white rounded-full text-base font-semibold hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out">
                        Post
                    </Link>
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