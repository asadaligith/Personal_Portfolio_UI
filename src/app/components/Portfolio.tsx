import Image from 'next/image';
import React from 'react'

const Portfolio = () => {

  const project = [
    {id:1, name:"Project1", image:"/Project6.png"},
    {id:2, name:"Project2", image:"/Project2.png"},
    {id:3, name:"Project3", image:"/Project3.png"},
    {id:4, name:"Project4", image:"/Project4.png"},
    {id:5, name:"Project5", image:"/Project5.png"},
    {id:6, name:"Project6", image:"/Project6.png"},
  ];

  return (
    <div className="w-full h-auto pb-5">

<div className="bg-[url('/sectionHeader.png')] bg-cover bg-center bg-no-repeat w-full h-64">
  {/* Content */}
</div>
<div className="w-full bg-black text-white flex justify-center items-center p-4 gap-16 underline">
<h6 className="text-lg md:text-xl tracking-widest">All</h6>
<h6 className="text-lg md:text-xl tracking-widest">CODED</h6>
<h6 className="text-lg md:text-xl tracking-widest">DESIGN</h6>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0">
  {project.map((item) => (
    <div key={item.id} className="relative w-full h-72"> 
      <Image
        src={item.image}
        alt={item.name}
        fill
        className="object-cover"
      />
    </div>
  ))}
</div>



    </div>
  )
}

export default Portfolio