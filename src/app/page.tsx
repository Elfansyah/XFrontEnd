import Leftsidebar from "./components/Leftsidebar";
import Navbar from "./components/Navbar";
import RightSidebar from "./components/Rightsidebar";


const Profile = () => {
  return (
    <div className="w-full h-full flex justify-center items-center relative bg-black">
      <div className="max-w-screen-xl w-full h-full flex relative">
        <Leftsidebar />
        <main className="ml-[275px] p-6 mx-2 flex w-[600px] h-full min-h-screen flex-col border-l-[0.5px] border-r-[0.5px] border-gray-600">
          <div className="bg bg-neutral-700 h-44 relative">COVER PHOTO</div>
          <div className="border-b-[1px] border-gray-800 p-5">
            <div className="border-b-[1px] border-gray-600"></div>
            <div className=" absolute -bottom-16 left-4 w-10 h-10 bg-black rounded-full">
            </div>
            <div className="flex flex-col"></div>
          </div>
        </main>
        <RightSidebar />
        {/* <Navbar /> */}
      </div>
    </div>
  );
};

export default Profile;
