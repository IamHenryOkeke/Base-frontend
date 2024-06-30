import { BsChevronDown } from "react-icons/bs";
import { IoSearchSharp } from "react-icons/io5";
import { AiFillBell } from "react-icons/ai";
import Logo from '../../assets/logo.svg'
import { useDynamicContext } from "@dynamic-labs/sdk-react-core";

export default function DashBoardHeader() {
  const { user } = useDynamicContext()
  console.log(user)
  return (
    <div className="pl-5 pr-16 py-7 flex justify-between items-center">
      <div className="w-3/5 flex gap-10 items-center">
        <img src={Logo} alt="Nav Icon" className="w-52" />
        <div className="w-1/2 border border-[#2D2D2D] rounded-full flex gap-3 items-center px-3 py-4">
          <IoSearchSharp size={25} className="text-[#2D2D2D] font-bold" />
          <input className="bg-transparent outline-none w-full" placeholder="search for features, services, settings and more" />
        </div>
      </div>
      <div className="flex items-center justify-between text-lg">
        <AiFillBell className="text-gray-500 w-8 h-8 mr-4"/>
        <div className="flex justify-between items-center">
          <div className="w-10 h-10 mr-2 bg-purple-500 rounded-full">

          </div>
          <div className="mr-4 font-medium">
            Michael Ward
          </div>
          <BsChevronDown />
        </div>
      </div>
    </div>
  )
}
