import Image from "next/image";
import Sign_up from "./components/sign_up";
import Login from "./components/login";

export default function Home() {
  return (
   <div className="bg-white min-h-screen flex justify-center items-center">
    <Sign_up/>
    {/* <Login/> */}
    
   </div>
  );
}
