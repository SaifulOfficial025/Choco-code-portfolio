import Container from "../../Layout/Container/Container"
import Header from "../../Shared/Header"
import Hero from "./Hero"
import Ourservices from "./Ourservices"
import Ourteam from "./Ourteam"
import OurWorks from "./OurWorks"
import Whychoose from "./Whychoose"
import Reviews from "./Reviews"
import Footer from "../../Shared/Footer"

const Home = () => {
  return (
    <div className="bg-gradient-to-b from-[#cae8ff] to-[#f4faff] min-h-screen overflow-hidden">
      <Header/>
      <Hero/>
      <Whychoose/>
      <Ourservices/>
      <OurWorks/>
      <Ourteam/>
      <Reviews/>
      <Footer/>
    </div>
  )
}

export default Home
