import LandingHeader from "./components/LandingHeader"
import LandingSection from "./components/LandingSection"
import ModelSection from "./components/ModelSection"


export default function Home() {
  const titleLandings={title1:"Model Y", title2:"Model 3", title3:"Model S", title4:"Model X", title5:"Solar y PowerWall", title6:"Accesorios"}
  const subtitleLandings={sub1:"Concertar una prueba de conducción", sub2:"Programe una consulta virtual",sub3:"Energía para todos"}
  const bgLandings={image1:"./model-y.avif",image2:"./model-3.avif",image3:"./model-s.avif",image4:"./model-x.avif",image5:"./solar-panels.avif",image6:"./accesories.avif"}
  const buttons={button1:"Explorar inventario",button2:"Pedido personalizado", button3:"Saber más", button4:"Comprar ahora"}
  return (
    <>
      <LandingHeader/>

    <main className="relative w-full h-screen overflow-auto snap-y snap-mandatory scroll-smooth">
      <div className="snap-center">
        <LandingSection/>
      </div>
      <div className="snap-center">
        <ModelSection title={titleLandings.title1} subtitle={subtitleLandings.sub1} bgImage={bgLandings.image1} leftButton={buttons.button1} rightButton={buttons.button2}/>
      </div>
      <div className="snap-center">
        <ModelSection title={titleLandings.title2} subtitle={subtitleLandings.sub1} bgImage={bgLandings.image2} leftButton={buttons.button1} rightButton={buttons.button2}/>
      </div>
      <div className="snap-center">
        <ModelSection title={titleLandings.title3} subtitle={subtitleLandings.sub2} bgImage={bgLandings.image3} leftButton={buttons.button2} rightButton={buttons.button3}/>
      </div>
      <div className="snap-center">
        <ModelSection title={titleLandings.title4} subtitle={subtitleLandings.sub2} bgImage={bgLandings.image4} leftButton={buttons.button2} rightButton={buttons.button3}/>
      </div>
      <div className="snap-center">
        <ModelSection title={titleLandings.title5} subtitle={subtitleLandings.sub3} bgImage={bgLandings.image5} leftButton={buttons.button3} />
      </div>
      <div className="snap-center">
        <ModelSection title={titleLandings.title6}  bgImage={bgLandings.image6} leftButton={buttons.button4} />
      </div>
    </main>
    </>
    
  )
}
