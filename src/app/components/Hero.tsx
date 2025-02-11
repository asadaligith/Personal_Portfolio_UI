import { AtSign , Github, Linkedin} from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className="w-full h-auto flex-wrap">
      
      <div className="flex flex-col md:flex-row justify-between items-center w-full">

  <section className="bg-[#D7D7D7] flex flex-col justify-center items-start pl-28 w-full md:w-1/2 h-[50rem]">
<h3 className="text-lg font-bold">Hi, I am</h3>
<h1 className="text-5xl font-extrabold mt-8">Asad Ali</h1>
<p className="text-sm text-gray-600 mt-2">Front-end Developer / UI Designer</p>

<div className="flex justify-center items-start gap-6 mt-28 ">
<AtSign size={38} className='bg-[#00000040] p-2'/>
<Github size={38} className='bg-[#00000040] p-2'/>
<Linkedin size={38} className='bg-[#00000040] p-2'/>
</div>
</section>


{/* my picture */}

<section className=" bg-black flex items-center justify-center w-full md:w-1/2 h-[50rem]">
  <Image src={"/ProfilePic.jpeg"} alt="Picture" width={300} height={300} objectFit='cover' >

  </Image>
</section>

    </div>
    </div>
  )
}

export default Hero