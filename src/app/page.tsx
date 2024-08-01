import Image from "next/image";
import Verified from "./components/verified";

export default function Home() {
  return (
   
   <div className="flex justify-center min-h-screen items-center bg-white">
    <Verified/>
   </div>
  );
}
