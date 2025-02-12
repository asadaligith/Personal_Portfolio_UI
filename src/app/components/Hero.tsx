import { Button } from '@/components/ui/button';
import { AtSign, Github, Linkedin } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const Hero = () => {
  return (
    <div className="w-full flex-wrap">
      
      <div className="flex flex-col md:flex-row justify-between items-center w-full bg-[#D7D7D7] h-auto">

        {/* Left Section (Text & Social Links) */}
        <section className="bg-[#D7D7D7] flex flex-col justify-center items-start pl-10 md:pl-28 w-full md:w-1/2">
          <h3 className="text-xl md:text-2xl font-bold">Hi, I am</h3>
          <h1 className="text-4xl md:text-5xl font-extrabold mt-6">Asad Ali</h1>
          <p className="text-sm md:text-lg text-gray-600 mt-2">Front-end Developer / UI Designer</p>

          <div className="flex justify-start items-center gap-6 md:gap-10 mt-20 md:mt-28 mb-4">
            <AtSign size={38} className="bg-[#00000040] p-2 rounded-full" />
            <Github size={38} className="bg-[#00000040] p-2 rounded-full" />
            <Linkedin size={38} className="bg-[#00000040] p-2 rounded-full" />
          </div>
        </section>

        {/* Right Section (Image) */}
        <section className="bg-black flex items-end justify-center w-full md:w-1/2">
          <Image
            src={"/ProfilePic.jpeg"} 
            alt="Picture" 
            width={300} 
            height={300} 
            className="rounded-full border-4 border-gray-600 shadow-lg pb-10 max-w-[80%] md:max-w-[50%] h-auto"
          />
        </section>
      </div>

      {/* IT Berries Section */}
      <section className="bg-black text-white w-full py-10 px-8">
        <h1 className="text-2xl md:text-3xl font-bold">IT BERRIES</h1>
        <p className="text-lg my-4">
          IT Berries is a hub of creativity and technology, where innovation meets perfection.
          With a strong passion for front-end development and UI design, I transform ideas 
          into visually stunning and high-performance web experiences.<br/>
          My expertise in modern frameworks like Next.js and TypeScript ensures seamless functionality,
          while my eye for design brings elegance to every project. IT Berries is not just
          about coding—it's about crafting digital excellence.
        </p>

        <Button>Read more</Button>
      </section>

    </div>
  );
};

export default Hero;
