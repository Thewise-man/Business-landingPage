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
    <div className="w-full overflow-x-hidden">
      <section id="overview" className="md:p-10 mt-10 p-5 min-h-screen scroll-mt-15">
        <div className=" md:flex md:items-center gap-5 rounded-[30px] rounded-br-[250px] md:rounded-br-[290px] md:justify-between md:w-auto  md:h-130 bg-linear-160 from-blue-600 to-pink-400 text-white">
          <div className="flex flex-col gap-4 md:gap-5 p-5">
            <h1 className="text-white font-bold text-4xl md:text-7xl ">
              Develop your skill
            </h1>
            <h1 className="text-white font-bold text-4xl -mt-3 md:text-7xl tracking-tight">
              without negligence
            </h1>
            <p className="text-white ">
              But I must explain to you haow all this mistaken ideas of
              denouncing <br className="hidden md:block" /> pleasure and
              praising pain was born and i will give you a complete{" "}
              <br className="hidden md:block" /> account of the story
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

          <img
            className=" w-full  md:w-150 md:h-103 md:-mb-30"
            src={Rafiki}
            alt="illustration"
          />
        </div>
      </section>

      <section id="products" className="mt-25 md:p-10 min-h-screen scroll-mt-28 ">
        <div className="flex flex-col gap-10 items-center md:w-auto md:flex-row md:h-130 md:p-10 md:flex md:items-center md:justify-between md:gap-5 ">
          <div className="w-80 md:pl-5 flex flex-col gap-5 md:-mt-65">
            <h1 className="font-bold text-[#1E1E56] text-4xl ">
              Why we are better than others
            </h1>
            <p>
              On the other hand we denounce with righteous indignation and
              dislike men who are beguiled and demoralized
            </p>
          </div>

          <div className="border border-white shadow-[0_0_10px_2px_rgba(0,0,0,0.2)] rounded-3xl w-70 h-80 flex flex-col items-center gap-2 p-5 md:-mt-30">
            <img className="w-50 h-50 " src={Amico} alt="illustration" />
            <p className="text-[#1E1E56] -ml-35 w-20 font-bold">
              Convenient study time
            </p>
          </div>

          <div className="border border-white shadow-[0_0_10px_2px_rgba(0,0,0,0.2)] rounded-3xl w-70 h-80 flex flex-col items-center gap-4 p-5 md:-mb-30">
            <img className="w-50 h-50" src={Cuate} alt="illustration" />
            <p className="text-[#1E1E56] -ml-35 w-20 font-bold">
              Assessment Done 1v1
            </p>
          </div>

          <div className="border border-white shadow-[0_0_10px_2px_rgba(0,0,0,0.2)] rounded-3xl w-70 h-80 flex flex-col items-center gap-2 p-5 md:-mt-30">
            <img className="w-50 h-50" src={Twoguys} alt="illustration" />
            <p className="text-[#1E1E56] -ml-15 w-35 font-bold">
              Top notch Developers for Collaboration
            </p>
          </div>
        </div>
      </section>

      <section id="about" className="mt-25 bg-pink-100 min-h-screen scroll-mt-15">
        <div className="flex flex-col gap-16 p-6 md:p-10 md:gap-10 items-center">
          {/* BLOCK 1 */}
          <div className="flex flex-col md:flex-row items-center justify-center md:gap-20 gap-10 text-center md:text-left">
            <img
              className="w-full max-w-xs md:max-w-[300px]"
              src={Plan}
              alt="plan image"
            />

            <div className="flex flex-col gap-3 max-w-md">
              <span className="text-[#1E1E56] text-3xl md:text-4xl font-bold">
                Developing Business
              </span>
              <span className="text-[#1E1E56] text-3xl md:text-4xl font-bold">
                Strategises to grow
              </span>
              <span className="text-pink-400 text-3xl md:text-4xl font-bold">
                your Organisation
              </span>

              <p className="text-gray-700">
                On the other hand we denounce with righteous indignation and
                dislike men who are beguiled and demoralized
              </p>

              <button className="border border-pink-400 text-white bg-pink-400 font-semibold px-5 py-1.5 rounded-md hover:bg-transparent hover:text-black">
                Get Started
              </button>
            </div>
          </div>

          {/* BLOCK 2 */}
          <div className="flex flex-col md:flex-row items-center md:gap-20 gap-10 text-center md:text-left">
            <div className="flex flex-col gap-3 max-w-md">
              <span className="text-[#1E1E56] text-3xl md:text-4xl font-bold">
                You can conveniently
              </span>
              <span className="text-[#1E1E56] text-3xl md:text-4xl font-bold">
                connect your business
              </span>
              <span className="text-pink-400 text-3xl md:text-4xl font-bold">
                on all social media
              </span>

              <p className="text-gray-700">
                On the other hand we denounce with righteous indignation and
                dislike men who are beguiled and demoralized
              </p>

              <button className="border border-pink-400 text-white bg-pink-400 font-semibold px-5 py-1.5 rounded-md hover:bg-transparent hover:text-black">
                Get Started
              </button>
            </div>

            <img
              className="w-full max-w-xs md:max-w-[300px]"
              src={Socials}
              alt="socials image"
            />
          </div>
        </div>
      </section>

      <section id="pricing" className="mt-25 p-10 min-h-screen ">
        <div className="flex md:flex-col items-center p-10 w-auto gap-10 flex-col">
          <div className="flex flex-col items-center justify-center gap-2 ">
            <h1 className="font-bold text-5xl text-[#1E1E56]">
              Here are our Plans
            </h1>
            <p>
              On the other hand we denounce with righteous indignation and
              dislike men who are
            </p>
            <p className="-mt-8 -ml-22 md:-mt-3">beguiled and demoralized</p>
            <div className="md:flex gap-5 flex mt-6 ">
              <span>Monthly</span>
              <span>
                <ToggleButton />
              </span>
              <span>Yearly</span>
            </div>
          </div>

          <div className="flex flex-col gap-10 items-center justify-center md:flex-row md:gap-20 ">
            <div className="w-80 p-8 border border-white shadow-[0_0_10px_2px_rgba(0,0,0,0.2)] rounded-3xl flex flex-col gap-5">
              <h1 className="font-bold text-3xl text-[#1E1E56] flex flex-col items-center">
                Starter
              </h1>
              <p className="flex flex-col items-center text-sm gap-1">
                On the other hand we denounce with{" "}
                <span>righteous indignation and dislike</span>
              </p>
              <div className="flex items-center justify-center gap-2">
                {" "}
                <h1 className="font-bold text-6xl text-pink-400">50$</h1>{" "}
                <p className="text-[#1E1E56] text-sm -mb-7">/monthly</p>{" "}
              </div>
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
                <button className="border border-pink-400 text-pink-400 font-semibold px-5 py-1.5 rounded-md hover:bg-pink-400 hover:text-white cursor-pointer">
                  Get Started
                </button>
              </div>
            </div>

            <div className="w-80 p-8 border border-white shadow-[0_0_10px_2px_rgba(0,0,0,0.2)] rounded-3xl flex flex-col gap-5">
              <h1 className="font-bold text-3xl text-[#1E1E56] flex flex-col items-center">
                Pro
              </h1>
              <p className="flex flex-col items-center text-sm gap-1">
                On the other hand we denounce with{" "}
                <span>righteous indignation and dislike</span>
              </p>
              <div className="flex items-center justify-center gap-2">
                {" "}
                <h1 className="font-bold text-6xl text-pink-400">75$</h1>{" "}
                <p className="text-[#1E1E56] text-sm -mb-7">/monthly</p>{" "}
              </div>
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
                <button className="border border-pink-400 text-white bg-pink-400 font-semibold px-5 py-1.5 rounded-md hover:bg-transparent hover:text-pink-400 cursor-pointer">
                  Get Started
                </button>
              </div>
            </div>

            <div className="w-80 p-8 border border-white shadow-[0_0_10px_2px_rgba(0,0,0,0.2)] rounded-3xl flex flex-col gap-5">
              <h1 className="font-bold text-3xl text-[#1E1E56] flex flex-col items-center">
                Enterprise
              </h1>
              <p className="flex flex-col items-center text-sm gap-1">
                On the other hand we denounce with{" "}
                <span>righteous indignation and dislike</span>
              </p>
              <div className="flex items-center justify-center gap-2">
                {" "}
                <h1 className="font-bold text-6xl text-pink-400">100$</h1>{" "}
                <p className="text-[#1E1E56] text-sm -mb-7">/monthly</p>{" "}
              </div>
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
                <button className="border border-pink-400 text-pink-400 font-semibold px-5 py-1.5 rounded-md hover:bg-pink-400 hover:text-white cursor-pointer">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-25 md:px-50 p-5">
        <div className="md:flex md:flex-row flex flex-col items-center gap-20 bg-linear-160 from-blue-600 to-pink-400 p-10 rounded-[30px] md:w-auto md:h-120">
          <div className="flex flex-col gap-8">
            <h1 className="font-bold text-4xl text-white flex flex-col md:gap-3 md:-mt-25">
              All users can share their discount{" "}
              <span>code with ten friends.</span> <span>Everyone Wins!!</span>
            </h1>
            <p className="text-gray-200 text-sm md:w-130">
              But I must explain to you how all this mistaken ideas of
              denouncing pleasure and praising pain was born and I will give you
              a complete account of the story
            </p>
            <div>
              <button className="border border-pink-400 text-white text-sm bg-pink-400 font-semibold px-5 py-1.5 rounded-md hover:bg-transparent hover:text-pink-400 cursor-pointer">
                I Have a Code
              </button>
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
