import Link from "next/link";
import { title } from "process";
import { BiHomeCircle, BiUser } from "react-icons/bi";
import {
  BsBell,
  BsBookmark,
  BsEnvelope,
  BsThreeDots,
  BsTwitterX,
} from "react-icons/bs";
import { HiOutlineHashtag } from "react-icons/hi";
import { VscTwitter } from "react-icons/vsc";

const navigation_items = [
  {
    title: "Twitter",
    icon: BsTwitterX,
  },
  {
    title: "Home",
    icon: BiHomeCircle,
  },
  {
    title: "Explore",
    icon: HiOutlineHashtag,
  },
  {
    title: "Notifications",
    icon: BsBell,
  },
  {
    title: "Message",
    icon: BsEnvelope,
  },
  {
    title: "Bookmark",
    icon: BsBookmark,
  },
  {
    title: "Profile",
    icon: BiUser,
  },
];

const Leftsidebar = () => {
  return (
    <section className="fixed w-[275px] flex flex-col items-stretch h-screen px-6">
      <div className="flex flex-col items-stretch h-full space-y-4 mt-4">
        {navigation_items.map((item) => (
          <Link
            className="hover:bg-white/10 text-2xl transition duration-200 flex items-center justify-start w-fit space-x-4 rounded-3xl p-2 py-2 px-6"
            href={`${item.title.toLocaleLowerCase()}`}
            key={item.title}
          >
            <div>
              <item.icon />
            </div>

            {item.title !== "Twitter" && <div>{item.title}</div>}
          </Link>
        ))}
        <button className="rounded-full m-4 bg-primary p-4 text-2xl text-center hover:bg-opacity-70 transition duration-200">
          Post
        </button>
      </div>
      <button className="rounded-full flex items-center space-x-2 m-4 bg-transparent p-4 text-center hover:bg-white/10 transition duration-200 w-full justify-center">
        <div className="flex items-center space-x-2">
          <div className="rounded-full bg-slate-400 w-12 h-12"></div>
          <div className="text-left text-sm">
            <div className="font-semibold">kresna wibisono</div>
            <div className="text-xs">@kresnawibisono</div>
          </div>
        </div>
        <div>
          <BsThreeDots />
        </div>
      </button>
    </section>
  );
};

export default Leftsidebar;
