import { Button } from '@/components/ui/button';
import { AtSign, Database, Github, Laptop, Linkedin, PaintRoller, Palette, PenTool, ServerCog, Settings2, Wrench } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Hero = () => {
  const using = [
    {id:1, name:"HTML5", image:"/html.svg"},
    {id:2, name:"CSS3", image:"/css.svg"},
    {id:3, name:"SASS", image:"/sass.svg"},
    {id:4, name:"JAVASCRIPT", image:"/jscrip.svg"},
    {id:5, name:"REACT", image:"/react.svg"},
    {id:6, name:"BOOTSTRAP", image:"/bootstrap.svg"},
    {id:7, name:"GIT", image:"/Git.png"},
    {id:8, name:"FIGMA", image:"/figma.svg"},

];

const Learning = [
  {id:1, name:"NODEJS", image:"/nodejs.png"},
  {id:2, name:"MYSQL", image:"/mysql.svg"},
  {id:3, name:"MONGODB", image:"/mongodb.png"},
  {id:4, name:"TYPESCRIPT", image:"/typescript.png"},
 
];
const otherSkills = [
  {id:1, name:"ANGIELSKI", image:"/image17.svg"},
  {id:2, name:"HISZPAŃSKI", image:"/image18.svg"},
  {id:3, name:"C++", image:"/image19.svg"},
  {id:4, name:"C", image:"/image20.svg"},
 
];


return (
    <div className="w-full flex-wrap">
      
      <div className="flex flex-col-reverse md:flex-row justify-between items-center w-full bg-[#D7D7D7] h-auto">

        {/* Left Section (Text & Social Links) */}
        <section className="bg-[#D7D7D7] flex flex-col justify-center items-start pl-10 md:pl-28 w-full md:w-1/2">
          <h3 className="text-xl md:text-2xl font-bold pt-4">Hi, I am</h3>
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
      <section className="bg-black flex flex-col justify-center items-center text-white w-full py-10 px-8">
        <h1 className="text-2xl md:text-3xl font-bold">IT BERRIES</h1>
        <p className="text-lg my-4 text-justify">
          IT Berries is a hub of creativity and technology, where innovation meets perfection.
          With a strong passion for front-end development and UI design, I transform ideas 
          into visually stunning and high-performance web experiences.
          My expertise in modern frameworks like Next.js and TypeScript ensures seamless functionality,
          while my eye for design brings elegance to every project. IT Berries is not just
          about coding—it's about crafting digital excellence.
        </p>

        <Button>Read more</Button>
      </section>

        {/* About Section */}

      <section className="bg-[#D7D7D7] w-full">
        <div className="flex flex-col justify-center items-center py-16 space-y-14">
          <Link href={"/about"}>
          <Button className="bg-[#D7D7D7] w-48 py-6 text-lg text-black border-4 border-black tracking-widest hover:text-white">ABOUT ME</Button>
          </Link>

            <p className="text-md md:text-lg text-justify px-20 md:px-36">
            I am a passionate frontend developer specializing in building responsive and user-friendly web applications. With expertise in Next.js, TypeScript, JavaScript, and Tailwind CSS, I focus on writing clean, maintainable, and efficient code.

I enjoy solving complex problems, learning new technologies, and bringing creative ideas to life. My goal is to create seamless digital experiences that enhance user engagement and performance.

Currently, I am expanding my skills in backend development and API integrations to become a full-stack developer. I love collaborating on projects and exploring new ways to improve my coding abilities.

Let's build something amazing together!
            </p>

            <Button className="bg-[#D7D7D7] text-black border-x-2 border-black hover:text-white">
            EXPLORE</Button>

            <Image 
            src={"/separatorBlack.png"}
            alt="icon"
            width={100}
            height={100}/>
            
{/* Design & Development & Maintanance */}
            <div className="flex flex-col md:flex-row gap-6 px-16">

              {/* Design */}
              <div>
                <h1 className="text-lg md:text-xl font-bold tracking-wider">DESIGN</h1>
                <p className="text-gray-600 text-justify mt-2">I create visually appealing, user-friendly, and modern designs that enhance user experience. 
                  From wireframes to high-fidelity prototypes, I ensure a seamless and engaging interface.</p>
              <div className="flex my-4">
                  <PaintRoller size={40} className="mx-auto text-black"/>
                  <PenTool size={40} className="mx-auto text-black" />
                  <Palette size={40} className="mx-auto text-black"/>
              </div>
              </div>


              <div>
                <h1 className="text-lg md:text-xl font-bold tracking-wider">DEVELOPMENT</h1>
                <p className="text-gray-600 text-justify mt-2">I specialize in building high-performance web applications using Next.js, TypeScript,
                   and modern frameworks. My focus is on clean, maintainable, and scalable code.</p>
                   
                   <div className="flex mt-4">
                   <Laptop size={40} className="mx-auto text-black"/>
                   <ServerCog size={40} className="mx-auto text-black" />
                   </div>
              </div>

            </div>

              {/* Maintaince  */}
                    <div className="flex flex-col items-center">
                    <h1 className="text-lg md:text-xl font-bold tracking-wider">MAINTENANCE</h1>
                    <p className="text-gray-600 text-justify mt-2 px-16">I provide long-term maintenance and support to ensure smooth performance,
                       security updates, and feature enhancements for your applications.</p>
                      <div className="flex gap-4 mt-4">
                      <Wrench size={40} className="mx-auto text-black" />
                      <Settings2 size={40} className="mx-auto text-black"/>
                      <Database size={40} className="mx-auto text-black" />
                      </div>
                    </div>

            <Image 
            src={"/separatorBlack.png"}
            alt="icon"
            width={100}
            height={100}/>
                    
            <Link href={"/skills"}>
          <Button className="bg-[#D7D7D7] w-48 py-6 text-lg text-black border-4 border-black tracking-widest hover:text-white">
            SKILLS</Button>
          </Link>
          <div className="flex items-start">
            <h1 className="text-left text-lg md:text-xl font-bold tracking-wide">USING NOW:</h1>
          </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">

              {using.map((items)=>(
                <div key={items.id}>
                  <Image src={items.image} alt={items.name} width={80} height={80}/>

                  <h1 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 mt-6">{items.name}</h1>

                </div>
              ))}
            </div>

            <div className="flex items-start">
            <h1 className="text-left text-lg md:text-xl font-bold tracking-wide">LEARNING:</h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">

{Learning.map((items)=>(
  <div key={items.id}>
    <Image src={items.image} alt={items.name} width={50} height={50}/>

    <h1 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 mt-6">{items.name}</h1>

  </div>
))}
</div>


<div className="flex items-start">
            <h1 className="text-left text-lg md:text-xl font-bold tracking-wide">OTHER SKILLS:</h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">

{otherSkills.map((items)=>(
  <div key={items.id}>
    <Image src={items.image} alt={items.name} width={50} height={50}/>

    <h1 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 mt-6">{items.name}</h1>

  </div>
))}
</div>

        </div>
      </section> 
      
    </div>
  );
};

export default Hero;
