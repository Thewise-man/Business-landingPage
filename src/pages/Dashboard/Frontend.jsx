import React from "../../assets/React-Logo.png"
import JS from "../../assets/JS-Logo.png"
import HTML from "../../assets/HTML-Logo.png"


export default function Frontend() {
  return (
    <div>
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

    </div>
  )
}
