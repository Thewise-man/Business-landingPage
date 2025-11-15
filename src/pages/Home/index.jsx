import React from "react";
import Rafiki from "../../assets/rafiki.png";
import Amico from "../../assets/amico.png";
import Cuate from "../../assets/cuate.png";
import Twoguys from "../../assets/two-guys.png";
import Plan from "../../assets/plan.png";
import Socials from "../../assets/socials.png";
import Pana from "../../assets/pana.png";
import ToggleButton from "../../components/ToggleButton";
import { Check, X } from "lucide-react";

function index() {
  return (
    <div>
      <section className="p-10 ">
        <div className=" flex items-center gap-5 rounded-[30px] rounded-br-[290px] justify-between w-auto h-130 p-10 bg-linear-160 from-blue-600 to-pink-400 text-white">
          <div className="flex flex-col gap-5 p-5"> 
            <h1 className="text-white font-bold text-7xl ">
              Develop your skill
            </h1>
            <h1 className="text-white font-bold text-7xl tracking-tight">
              without negligence
            </h1>
            <p className="text-white ">
              But I must explain to you haow all this mistaken ideas of
              denouncing <br className="hidden md:block" /> pleasure and praising pain was born and i will give you
              a complete <br className="hidden md:block" /> account of the story
            </p>

            <div className=" flex gap-3">
              <button className="border border-pink-400 text-white bg-pink-400 font-semibold px-5 py-1.5 rounded-md hover:bg-transparent cursor-pointer">
                Get Started
              </button>
              <button className="border border-white text-white font-semibold px-5 py-1.5 rounded-md hover:bg-[#1E1E56] hover:text-white transition-all cursor-pointer">
                Discount
              </button>
            </div>
          </div>

          <img className="w-150 h-103 -mb-30" src={Rafiki} alt="illustration" />
        </div>
      </section>

      <section  className="mt-25 p-10">
        <div className="w-auto h-130 p-10 flex items-center justify-between gap-5 "> 
            <div className="w-80 pl-5 flex flex-col gap-5 -mt-65">
                <h1 className="font-bold text-[#1E1E56] text-4xl">Why we are better than others</h1>
                <p>On the other hand we denounce with righteous indignation and dislike men who are beguiled and demoralized</p>
            </div>
                
            <div className="border border-white shadow-[0_0_10px_2px_rgba(0,0,0,0.2)] rounded-3xl w-70 h-80 flex flex-col items-center gap-2 p-5 -mt-30">
                <img className="w-50 h-50 " src={Amico} alt="illustration" />
                <p className="text-[#1E1E56] -ml-35 w-20 font-bold">Convenient study time</p>
            </div>

            <div className="border border-white shadow-[0_0_10px_2px_rgba(0,0,0,0.2)] rounded-3xl w-70 h-80 flex flex-col items-center gap-4 p-5 -mb-30">
                <img className="w-50 h-50" src={Cuate} alt="illustration" />
                <p className="text-[#1E1E56] -ml-35 w-20 font-bold">Assessment Done 1v1</p>
            </div>

            <div className="border border-white shadow-[0_0_10px_2px_rgba(0,0,0,0.2)] rounded-3xl w-70 h-80 flex flex-col items-center gap-2 p-5 -mt-30">
                <img className="w-50 h-50" src={Twoguys} alt="illustration" />
                <p className="text-[#1E1E56] -ml-15 w-35 font-bold">Top notch Developers for Collaboration</p>
            </div>
        </div>
      </section>

      <section className="mt-25 p-10 bg-pink-100">
        <div className="flex flex-col items-center p-10 w-auto gap-10">
            <div className="flex items-center gap-30">
                <div> <img className="w-150 " src={Plan} alt="plan image" /> </div>
                <div className="flex flex-col gap-3">
                    <span className="text-[#1E1E56] text-4xl font-bold">Developing Business</span>
                    <span className="text-[#1E1E56] text-4xl font-bold">Strategises to grow</span>
                    <span className="text-pink-400 text-4xl font-bold">your Organisation</span>

                    <p className="w-110">On the other hand we denounce with righteous indignation and dislike men who are beguiled and demoralized</p>
                    
                    <div>
                        <button className="border border-pink-400 text-white bg-pink-400 font-semibold px-5 py-1.5 rounded-md hover:bg-transparent cursor-pointer">Get Started</button>
                    </div>
                
                </div>
            </div>

            <div className="flex items-center gap-30 ">
                <div className="flex flex-col gap-3">
                    <span className="text-[#1E1E56] text-4xl font-bold">You can conveniently</span>
                    <span className="text-[#1E1E56] text-4xl font-bold">connect your business</span>
                    <span className="text-pink-400 text-4xl font-bold">on all social media</span>

                    <p className="w-110">On the other hand we denounce with righteous indignation and dislike men who are beguiled and demoralized</p>
                    
                    <div>
                        <button className="border border-pink-400 text-white bg-pink-400 font-semibold px-5 py-1.5 rounded-md hover:bg-transparent cursor-pointer">Get Started</button>
                    </div>
                
                </div>
                <div><img className="w-150" src={Socials} alt="socials image" /></div>
            </div>
        </div>
        
      </section>


      <section className="mt-25 p-10">
        <div className="flex flex-col items-center p-10 w-auto gap-10">
          <div className="flex flex-col items-center justify-center gap-2">
            <h1 className="font-bold text-5xl text-[#1E1E56]">Here are our Plans</h1>
            <p>On the other hand we denounce with righteous indignation and dislike men who are</p>
            <p className="-mt-3">beguiled and demoralized</p>
            <div className="flex gap-5">
              <span>Monthly</span>
              <span><ToggleButton/></span>
              <span>Yearly</span>
            </div>
          </div>

          <div className="flex gap-20">
            <div className="w-80 p-8 border border-white shadow-[0_0_10px_2px_rgba(0,0,0,0.2)] rounded-3xl flex flex-col gap-5">
              <h1 className="font-bold text-3xl text-[#1E1E56] flex flex-col items-center">Starter</h1>
              <p className="flex flex-col items-center text-sm gap-1">On the other hand we denounce with <span>righteous indignation and dislike</span></p>
              <div className="flex items-center justify-center gap-2"> <h1 className="font-bold text-6xl text-pink-400">50$</h1> <p className="text-[#1E1E56] text-sm -mb-7">/monthly</p> </div>
              <ul className="space-y-2 flex flex-col gap-3 text-sm">
                <li className="flex items-center gap-2 text-[#1E1E56]">
                  <Check className="w-5 h-5 text-white bg-green-600 rounded-2xl" />
                  Website Wireframes
                </li>

                <li className="flex items-center gap-2 text-[#1E1E56]">
                  <Check className="w-5 h-5 text-white bg-green-600 rounded-2xl" />
                  Social Media Walk Through
                </li>

                <li className="flex items-center gap-2 text-[#1E1E56]">
                  <X className="w-5 h-5 text-white bg-pink-400 rounded-2xl" />
                  Assessment Checks
                </li>

                <li className="flex items-center gap-2 text-[#1E1E56]">
                  <X className="w-5 h-5 text-white bg-pink-400 rounded-2xl" />
                  Additional Practise Tasks
                </li>

                <li className="flex items-center gap-2 text-[#1E1E56]">
                  <X className="w-5 h-5 text-white bg-pink-400 rounded-2xl" />
                  Personal Advise from instructors
                </li>
              </ul>

              <div className="flex flex-col items-center justify-center">
                <button className="border border-pink-400 text-pink-400 font-semibold px-5 py-1.5 rounded-md hover:bg-pink-400 hover:text-white cursor-pointer">Get Started</button>
              </div>
            </div>

            <div className="w-80 p-8 border border-white shadow-[0_0_10px_2px_rgba(0,0,0,0.2)] rounded-3xl flex flex-col gap-5">
              <h1 className="font-bold text-3xl text-[#1E1E56] flex flex-col items-center">Pro</h1>
              <p className="flex flex-col items-center text-sm gap-1">On the other hand we denounce with <span>righteous indignation and dislike</span></p>
              <div className="flex items-center justify-center gap-2"> <h1 className="font-bold text-6xl text-pink-400">75$</h1> <p className="text-[#1E1E56] text-sm -mb-7">/monthly</p> </div>
              <ul className="space-y-2 flex flex-col gap-3 text-sm">
                <li className="flex items-center gap-2 text-[#1E1E56]">
                  <Check className="w-5 h-5 text-white bg-green-600 rounded-2xl" />
                  Website Wireframes
                </li>

                <li className="flex items-center gap-2 text-[#1E1E56]">
                  <Check className="w-5 h-5 text-white bg-green-600 rounded-2xl" />
                  Social Media Walk Through
                </li>

                <li className="flex items-center gap-2 text-[#1E1E56]">
                  <Check className="w-5 h-5 text-white bg-green-600 rounded-2xl" />
                  Assessment Checks
                </li>

                <li className="flex items-center gap-2 text-[#1E1E56]">
                  <Check className="w-5 h-5 text-white bg-green-600 rounded-2xl" />
                  Additional Practise Tasks
                </li>

                <li className="flex items-center gap-2 text-[#1E1E56]">
                  <X className="w-5 h-5 text-white bg-pink-400 rounded-2xl" />
                  Personal Advise from instructors
                </li>
              </ul>

              <div className="flex flex-col items-center justify-center">
                <button className="border border-pink-400 text-white bg-pink-400 font-semibold px-5 py-1.5 rounded-md hover:bg-transparent hover:text-pink-400 cursor-pointer">Get Started</button>
              </div>
            </div>

            <div className="w-80 p-8 border border-white shadow-[0_0_10px_2px_rgba(0,0,0,0.2)] rounded-3xl flex flex-col gap-5">
              <h1 className="font-bold text-3xl text-[#1E1E56] flex flex-col items-center">Enterprise</h1>
              <p className="flex flex-col items-center text-sm gap-1">On the other hand we denounce with <span>righteous indignation and dislike</span></p>
              <div className="flex items-center justify-center gap-2"> <h1 className="font-bold text-6xl text-pink-400">100$</h1> <p className="text-[#1E1E56] text-sm -mb-7">/monthly</p> </div>
              <ul className="space-y-2 flex flex-col gap-3 text-sm">
                <li className="flex items-center gap-2 text-[#1E1E56]">
                  <Check className="w-5 h-5 text-white bg-green-600 rounded-2xl" />
                  Website Wireframes
                </li>

                <li className="flex items-center gap-2 text-[#1E1E56]">
                  <Check className="w-5 h-5 text-white bg-green-600 rounded-2xl" />
                  Social Media Walk Through
                </li>

                <li className="flex items-center gap-2 text-[#1E1E56]">
                  <Check className="w-5 h-5 text-white bg-green-600 rounded-2xl" />
                  Assessment Checks
                </li>

                <li className="flex items-center gap-2 text-[#1E1E56]">
                  <Check className="w-5 h-5 text-white bg-green-600 rounded-2xl" />
                  Additional Practise Tasks
                </li>

                <li className="flex items-center gap-2 text-[#1E1E56]">
                  <Check className="w-5 h-5 text-white bg-green-600 rounded-2xl" />
                  Personal Advise from instructors
                </li>
              </ul>

              <div className="flex flex-col items-center justify-center">
                <button className="border border-pink-400 text-pink-400 font-semibold px-5 py-1.5 rounded-md hover:bg-pink-400 hover:text-white cursor-pointer">Get Started</button>
              </div>
            </div>
          </div>

        </div>
      </section>


      <section className="mt-25 px-50">
        <div className="flex items-center gap-20 bg-linear-160 from-blue-600 to-pink-400 p-10 rounded-[30px] w-auto h-120">
          <div className="flex flex-col gap-8">
            <h1 className="font-bold text-4xl text-white flex flex-col gap-3 -mt-25">All users can share their discount <span>code with ten friends.</span> <span>Everyone Wins!!</span></h1>
            <p className="text-gray-200 text-sm w-130">But I must explain to you how all this mistaken ideas of denouncing pleasure and praising pain was born and I will give you a complete account of the story</p>
            <div>
                <button className="border border-pink-400 text-white text-sm bg-pink-400 font-semibold px-5 py-1.5 rounded-md hover:bg-transparent hover:text-pink-400 cursor-pointer">I Have a Code</button>
            </div>

          </div>
            <div>
              <img className="w-100" src={Pana} alt="refer a friend" />
            </div>
        </div>
      </section>
    </div>
  );
}

export default index;
