import React,{useState} from 'react'

interface ModelYProps {
  title: string;
  subtitle?: string | null;
  bgImage: string;
  leftButton: string;
  rightButton?: string;
}

export default function ModelY(props:ModelYProps) {
  const { title, subtitle,bgImage,leftButton,rightButton } = props;


  return (
    <section className="landing-section bg-black h-screen w-screen text-center overflow-hidden relative"
        data-header-color="black" >

        <div className="z-30 relative h-full flex flex-col">
          <header className="z-30 relative">
            <h2 className="text-black pt-32 text-[40px] font-medium">{title}</h2>
            <p className="text-black text-sm underline">{subtitle}</p>
          </header>
          <footer className="flex flex-col flex-grow justify-end pb-[60px]">
            <div className='flex gap-x-6 mx-auto'>
            <a 
            className=" text-sm rounded font-medium text-white px-[60px] py-[9px] inline-block bg-gray-900
            " 
            href="/"
            >{leftButton}</a>
           { rightButton && (
            <a 
            className=" text-sm rounded font-medium text-black  py-[9px] px-[60px] inline-block bg-white" 
            href="/"
            >{rightButton}</a>
           )
           }
            </div>
          </footer>
        </div>

        <div className="absolute top-0 bottom-0 z-10 w-full">
          <img src={bgImage} alt="Model Y" className='h-full w-full object-cover object-center'/>

        </div>


      </section>
  )
}
