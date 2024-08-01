import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <div>
      <div className="flex gap-5">
            <p className="text-[20px] cursor-pointer text-white font-bold transition-all duration-200 hover:scale-125">
              <Link href="/">Post</Link>
            </p>
            <p className="text-[17px] cursor-pointer text-white font-bold transition-all duration-200 hover:scale-125">
              <Link href="/Replies">Replies</Link>
            </p>
            <p className="text-[20px] cursor-pointer text-white font-bold transition-all duration-200 hover:scale-125">
              <Link href="/Highlights">Highlights</Link>
            </p>
            <p className="text-[17px] cursor-pointer text-white font-bold transition-all duration-200 hover:scale-125">
              <Link href="/Media">Media</Link>
            </p>
          </div>
    </div>
  )
}

export default Navbar
