import React from "../../assets/React-Logo.png"
import JS from "../../assets/JS-Logo.png"
import HTML from "../../assets/HTML-Logo.png"
import NODE from "../../assets/node-js.png"
import PYTHON from "../../assets/Python.png"
import JAVA from "../../assets/Java.png"
import ETHICAL from "../../assets/ethical.jpg"
import NETWORK from "../../assets/network.jpg"
import PENT from "../../assets/pen-testing.png"
import { useAuth } from '../../context/AuthContext';

export default function Overview() {
  const { user } = useAuth();
  return(
    <div>
        
        <main className="p-6">
          <h2 className="text-2xl font-bold mb-6">Welcome Back 👋, {user?.email}</h2>
          <h2 className="text-4xl font-bold mb-6">This are the courses we offer</h2>

          <div className="flex flex-col md:flex-row gap-6">
            <div className="bg-white p-4 rounded shadow flex flex-col items-center justify-center">
              <img className="w-100 h-100 " src={React} alt="react logo" />
                <div className="p-2 text-center text-2xl font-bold">React</div>
              </div>

            <div className="bg-white p-4 rounded shadow flex flex-col items-center justify-center">
              <img className="w-100 h-100 " src={JS} alt="JS logo" />
                <div className="p-2 text-center text-2xl font-bold">JavaScript</div>
              </div>  
            <div className="bg-white p-4 rounded shadow flex flex-col items-center justify-center">
              <img className="w-100 h-100 " src={HTML} alt="html logo" />
                <div className="p-2 text-center text-2xl font-bold">HTML</div>
              </div>
    
          </div>
          <div className="flex flex-col md:flex-row gap-6 mt-10">
            <div className="bg-white p-4 rounded shadow flex flex-col items-center justify-center">
              <img className="w-100 h-100 " src={NODE} alt="node js logo" />
                <div className="p-2 text-center text-2xl font-bold">NODE JS</div>
              </div>

            <div className="bg-white p-4 rounded shadow flex flex-col items-center justify-center">
              <img className="w-100 h-100  " src={PYTHON} alt="python logo" />
                <div className="p-2 text-center text-2xl font-bold">PYTHON</div>
              </div>  
            <div className="bg-white p-4 rounded shadow flex flex-col items-center justify-center">
              <img className="w-100 h-100 " src={JAVA} alt="java logo" />
                <div className="p-2 text-center text-2xl font-bold">JAVA</div>
              </div>
          
          </div>
          <div className="flex flex-col md:flex-row gap-6 mt-10">
            <div className="bg-white p-4 rounded shadow flex flex-col items-center justify-center">
              <img className="w-100 h-100 " src={ETHICAL} alt="ethical hacking logo" />
                <div className="p-2 text-center text-2xl font-bold">ETHICAL HACKING</div>
              </div>

            <div className="bg-white p-4 rounded shadow flex flex-col items-center justify-center">
              <img className="w-100 h-100  " src={NETWORK} alt="network security logo" />
                <div className="p-2 text-center text-2xl font-bold">NETWORK SECURITY</div>
              </div>  
            <div className="bg-white p-4 rounded shadow flex flex-col items-center justify-center">
              <img className="w-100 h-100 " src={PENT} alt="penetration testing logo" />
                <div className="p-2 text-center text-2xl font-bold">PENETRATION TESTING</div>
              </div>
          
          </div>
        </main>
    </div>
    
  );
}