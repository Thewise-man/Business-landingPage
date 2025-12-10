import ETHICAL from "../../assets/ethical.jpg"
import NETWORK from "../../assets/network.jpg"
import PENT from "../../assets/pen-testing.png"

export default function Cybersecurity() {
  return(
    <div>
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

    </div>
  )
}
