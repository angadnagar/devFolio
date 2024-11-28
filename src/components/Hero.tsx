
import { ArrowRight } from 'lucide-react';



export default function Hero() {

 



  return (
    <section className="py-24 px-6 lg:px-8 flex flex-col items-center justify-center min-h-screen text-center bg-[#14213D]">
      <div className="mb-8">
        <img
          src="/pic1.png"
          alt="Angad Nagar"
          width={200}
          height={200}
          className="rounded-s-3xl border-4 border-[#FCA311]"
        />
      </div>
      <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6 text-[#FFFFFF]">
        Hi, I'm{' '}
        <span className="inline-block min-w-[150px] text-left ] text-[#FCA311] px-2">
          Angad Nagar
        </span>

      </h1>
      <p className="text-xl text-[#E5E5E5] max-w-2xl mb-8">
        I'm a passionate developer specializing in creating beautiful and functional web applications. With expertise in React, Next.js, and modern web technologies, I bring ideas to life.
      </p>
      <a href="https://github.com/angadnagar?tab=repositories" target="_blank">
      <button  className="group bg-[#FCA311] hover:bg-[#FCA311]/90 text-[#14213D] px-6 py-3 text-lg rounded-md flex items-center">
      View My Work
        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
       
      </button>
      </a>
    </section>
  );
}
