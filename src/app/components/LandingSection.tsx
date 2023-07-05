import React from 'react'

export default function LandingSection() {
  return (
    <section className="landing-section bg-black h-screen w-screen text-center overflow-hidden relative" 
    data-header-color="white">

        <div className="z-30 relative h-full flex flex-col">
          <header className="z-30 relative">
            <h2 className="text-white pt-40 text-[40px] font-medium">Disfrute de Tesla</h2>
            <p className="text-white text-sm">Programe una prueba de conducción hoy mismo</p>
          </header>
          <footer className="flex flex-col flex-grow justify-end pb-[90px]">
            <div>
            <a 
            className="border-[3px] border-white text-sm rounded font-medium text-white px-14 py-2 inline-block
            hover:bg-white hover:text-black transition-colors" 
            href="/"
            >Prueba de conduccion</a
            >
            </div>
          </footer>
        </div>

        <div className="absolute top-0 bottom-0 z-10 w-full">
          <video autoPlay muted loop className=" object-center object-cover h-full w-full" src="/public_video.webm"></video>

        </div>


      </section>
  )
}
