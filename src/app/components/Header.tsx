import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'
import MenuBar from './MenuBar'

const Header = () => {
  return (
    <nav className="bg-black text-white w-full  flex justify-center items-center">
              <div className="container mx-auto flex justify-around items-center py-4 px-6">

{/* Logo Section */}

<div className="flex justify-center items-center w-1/2 text-3xl font-bold">
    Logo
</div>

<div className="space-x-10  hidden md:block">
<ul className="flex justify-center items-center space-x-10 text-lg md:text-xl">
    <Link href={"#"}>    <li className="hover:text-gray-300">About me</li>    </Link>
    <Link href={"#"}>     <li className="hover:text-gray-300">Skills</li>    </Link>
    <Link href={"#"}>     <li className="hover:text-gray-300">Portfolio</li>    </Link>
   
    <Link href={"/"}>
<li><Button className="bg-white text-lg text-black hover:bg-red-400 active:bg-red-400 active:opacity-50 transition-all duration-300">
Contact us</Button></li>
</Link>
</ul>
</div>

<div className="md:hidden bg-black py-6">
<MenuBar/>
</div>

    </div>
    </nav>
   
  )
}

export default Header