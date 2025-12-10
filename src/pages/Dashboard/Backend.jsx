import NODE from "../../assets/node-js.png"
import PYTHON from "../../assets/Python.png"
import JAVA from "../../assets/Java.png"

export default function Backend() {
  return(
    <div>
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

    </div>
  )
}