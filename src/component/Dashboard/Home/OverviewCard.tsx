import { useState } from "react"
import { FaEyeSlash, FaEye } from "react-icons/fa";
import Rec1 from '../../../assets/Rectangle1.svg';
import Rec2 from '../../../assets/Rectangle2.svg';
import Circle1 from '../../../assets/Ellipse 104.svg';
import Circle2 from '../../../assets/Ellipse 103.svg';

export default function OverviewCard({ bgColor, title, amount, imgVariant, textColorVariant }: { bgColor: string, title: string, amount: number | string, imgVariant: boolean, textColorVariant: boolean }) {
  const [showBalance, setShowBalance] = useState<boolean>(false);
  const formattedAmount = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(Number(amount));
  const newAmount = formattedAmount === "$NaN" ? amount : formattedAmount;
  return (
    <div className={`rounded-xl ${bgColor} ${textColorVariant ? "text-[#2D2D2D]" : "text-white"}  overflow-hidden`}>
      <div className="mt-10 my-4 px-6">
        <div>
          <h2 className="font-medium text-sm mb-2">{title}</h2>
          <div className="flex justify-between items-center gap-4">
            <h2 className="text-2xl font-semibold">{showBalance ? newAmount : "****"}</h2>
            <div onClick={() => setShowBalance(!showBalance)}>
              {
                showBalance ? <FaEye size={25} /> : <FaEyeSlash size={25} />
              }
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        {
          imgVariant ?
            <div className="relative translate-y-1">
              <img src={Rec2} alt="" />
              <img src={Rec1} alt="" className="z-50 absolute bottom-0 right-0" />
            </div> :
            <div className="relative">
              <img src={Circle1} alt="" />
              <img src={Circle2} alt="" className="z-50 absolute bottom-0 right-0" />
            </div>
        }
      </div>
    </div>
  )
}
