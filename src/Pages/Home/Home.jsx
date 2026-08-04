import { useState } from "react";
import Header from "../../Shared/Header"
import Hero from "./Hero"
import Ourservices from "./Ourservices"
import Ourteam from "./Ourteam"
import OurWorks from "./OurWorks"
import Whychoose from "./Whychoose"
import Reviews from "./Reviews"
import Footer from "../../Shared/Footer"

const codeParticles = [
  { text: '{ }', top: '5%', left: '8%', delay: '0s', duration: '6s' },
  { text: '< />', top: '15%', right: '12%', delay: '1s', duration: '8s' },
  { text: '//', top: '30%', left: '5%', delay: '2s', duration: '7s' },
  { text: '( )', top: '45%', right: '6%', delay: '0.5s', duration: '9s' },
  { text: '[ ]', top: '60%', left: '10%', delay: '1.5s', duration: '6s' },
  { text: '&&', top: '72%', right: '15%', delay: '3s', duration: '8s' },
  { text: '=>', top: '85%', left: '7%', delay: '2.5s', duration: '10s' },
  { text: '# ', top: '25%', right: '4%', delay: '0s', duration: '7s' },
  { text: '/*', top: '50%', left: '3%', delay: '1s', duration: '9s' },
  { text: '*/', top: '68%', right: '8%', delay: '2s', duration: '6s' },
  { text: '::', top: '10%', left: '50%', delay: '3.5s', duration: '8s' },
  { text: '??', top: '90%', right: '25%', delay: '4s', duration: '7s' },
];

const Home = () => {
  const [isHungry, setIsHungry] = useState(true);

  if (isHungry) {
    return (
      <div className="min-h-screen bg-choco-gradient flex flex-col items-center justify-center space-y-8 p-4 relative overflow-hidden">
        {/* Floating Code Particles */}
        {codeParticles.map((p, i) => (
          <span
            key={i}
            className="particle animate-float font-mono"
            style={{
              top: p.top,
              left: p.left,
              right: p.right,
              animationDelay: p.delay,
              animationDuration: p.duration,
              fontSize: `${12 + Math.random() * 14}px`,
            }}
          >
            {p.text}
          </span>
        ))}
        <div className="text-4xl md:text-6xl font-bold text-center z-10 text-black drop-shadow-lg">
          গাজী ভাই, কিছু খাওয়ান 😋
        </div>
        <button
          onClick={() => setIsHungry(false)}
          className="z-10 px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white rounded-full text-2xl font-bold shadow-lg transition-all transform hover:scale-105 hover:shadow-orange-500/50"
        >
          ওকে খাওয়াবো..
        </button>
      </div>
    );
  }

  return (
    <div className="bg-choco-gradient min-h-screen overflow-hidden relative">
      {/* Floating Code Particles */}
      {codeParticles.map((p, i) => (
        <span
          key={i}
          className="particle animate-float font-mono"
          style={{
            top: p.top,
            left: p.left,
            right: p.right,
            animationDelay: p.delay,
            animationDuration: p.duration,
            fontSize: `${12 + Math.random() * 14}px`,
          }}
        >
          {p.text}
        </span>
      ))}

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
