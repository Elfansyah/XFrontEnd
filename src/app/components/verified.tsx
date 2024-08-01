import { FaCheck } from "react-icons/fa6";
import { IoIosLock } from "react-icons/io";

export default function Verified() {
  return (
    <div className="max-w-[600px] p-7 flex flex-col justify-center items-center bg-black">
        <button className="mr-[350px] self-start hover:bg-gray-500 p-4 rounded-full">x</button> 
      <div className="flex gap-5">
        <h1>Verified organization</h1>
      </div>
      <div className="flex gap-3 bg-gray-500 px-2 rounded-full my-5">
        <p>Basic</p>
        <p>Full Access</p>
      </div>
      <div className="bg-gray-900 rounded-xl p-4">
        <h2 className="text-gray-500 font-semibold text-xl">Basic</h2>
        <h1 className="text-3xl font-bold">
          Grow faster on X, and get $2500 USD free ad credit
        </h1>
        <p>
          Try adversiting and grow business with priority support and ads
          credit.
        </p>
        <div className="self-start my-4">
        <div className="flex gap-2 items-center">
          <FaCheck />
          <p> Gold Checkmart</p>
        </div>
        <div className="flex gap-2 items-center">
          <FaCheck />
          <p> Priority Support</p>
        </div>
        <div className="flex gap-2 items-center">
          <FaCheck />
          <p> Premium+</p>
        </div>
        <div className="flex gap-2 items-center">
          <FaCheck />
          <p> Hiring</p>
        </div>
        <div className="flex gap-2 items-center">
          <IoIosLock />
          <p> Increased reach</p>
        </div>
        <div className="flex gap-2 items-center">
          <IoIosLock />
          <p> Affiliations</p>
        </div>
      </div>
      <p>
        + For a limited time, a $2,500 USD adversiting credit to spend on your
        organization <span className="font-bold underline">every year</span>{" "}
        with dedicated support. <span className="text-sky-600">Learn more</span>
      </p>
      </div>
     
      <div className="border-2 py-2 px-4 border-sky-600 rounded-xl my-6">
        <h1 className="font-extrabold">IDR 3,094,910 / month</h1>
        <p className="text-gray-600"> Billed Monthly</p>
      </div>
      <button className="bg-white text-black font-semibold min-w-[200px] border-2 py-3 px-6 rounded-full">Subscribe & Pay</button>
    </div>
  );
}
