import { AiFillBell } from "react-icons/ai";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { IoSettingsSharp } from "react-icons/io5";
import { PiCopySimple } from "react-icons/pi";
import Question from '../../assets/question.svg'
import OverviewCard from "../../component/Dashboard/Home/OverviewCard";
import { Link } from "react-router-dom";
import ReceiveImg from '../../assets/Group 31.svg'

export default function Home() {
  return (
    <section className="p-10 w-[90%] h-screen">
      <div className="flex justify-between items-center">
        <h2 className="font-semibold text-2xl">Wallet</h2>
        <div className="flex items-center gap-4">
          <img src={Question} alt="User" className="w-8 h-8 rounded-full" />
          <AiFillBell className="text-gray-500 w-8 h-8" />
          <IoSettingsSharp className="w-6 h-6" />
          <BsFillPlusCircleFill className="text-primaryColor w-6 h-6" />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-10 mt-5">
        <OverviewCard imgVariant={true} textColorVariant={false} amount={40000.00} title="Fiat Balance" bgColor="bg-primaryColor" />
        <OverviewCard imgVariant={false} textColorVariant={false} amount="0.6341 BTC" title="Crypto Balance" bgColor="bg-[#9A35EA]" />
        <OverviewCard imgVariant={false} textColorVariant={true} amount={10000.00} title="Refferal Balance" bgColor="bg-[#F8F8F8]" />
      </div>
      <div className="grid grid-cols-[1fr_0.5fr] gap-10 my-10">
        <div>
          <h2 className="font-medium text-xs">Recent Transactions</h2>
          <div className="bg-[#F8F8F8] my-2 p-4 rounded-xl flex flex-col gap-5">
            <TransactionCard id="1" amount={1000.00} transactionStatus="pending"/>
            <TransactionCard id="1" amount={1000.00} transactionStatus="successful"/>
            <TransactionCard id="1" amount={1000.00} transactionStatus="pending"/>
            <TransactionCard id="1" amount={1000.00} transactionStatus="pending"/>
            <TransactionCard id="1" amount={1000.00} transactionStatus="successful"/>
          </div>
        </div>
        <div>
          <h2 className="mb-2 font-medium text-xs">Referral Link</h2>
          <div className="bg-[#F8F8F8] rounded-xl flex justify-between items-center px-3 py-6">
            <h2 className="text-sm">https://www.fusionpay.com/referral</h2>
            <button className="">
              <PiCopySimple size={20} />
            </button>
          </div>
          <div>
            <div className="mt-4 mb-2 flex justify-between font-medium text-xs">
              <h2>Referrals</h2>
              <Link to="/dashboard/referrals" className="text-primaryColor hover:underline">View all</Link>
            </div>
            <div className="bg-[#F8F8F8] p-4 rounded-xl flex flex-col gap-5">
              <ReferralCard id="1" amount={1000.00} />
              <ReferralCard id="1" amount={1000.00} />
              <ReferralCard id="1" amount={1000.00} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


function ReferralCard({ id, amount }: { id: string, amount: number }) {
  const formattedAmount = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(Number(amount));
  return (
    <Link to={`/dashboard/referrals/${id}`} className="flex justify-between items-center">
      <div className="flex items-center gap-2">
        <div className="h-14 w-14 p-2 rounded-full bg-[#6472F1] flex items-center justify-center">
          <div className="bg-primaryColor h-8 w-8 flex items-center justify-center rounded-lg">
            <img src={ReceiveImg} alt="" className="w-3/5"/>
          </div>
        </div>
        <div>
          <p className="font-semibold text-[#2D2D2D] text-sm">Referral Bonus</p>
          <p className="font-medium text-xs text-[#7A7A7A]">15:30pm, today</p>
        </div>
      </div>
      <p className="text-sm font-semibold text-primaryColor">{formattedAmount}</p>
    </Link>
  )
}

function TransactionCard({ id, amount, transactionStatus }: { id: string, amount: number, transactionStatus: 'successful' | 'pending'}) {
  const formattedAmount = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(Number(amount));
  return (
    <div id={id} className="flex justify-between items-center">
      <div className="flex items-center gap-2">
        <div className={`h-14 w-14 p-2 rounded-full ${transactionStatus === 'successful' ? 'bg-[#6472F1]' : 'bg-[#D196FF]'} flex items-center justify-center`}>
          <div className={`${transactionStatus === 'successful' ? 'bg-primaryColor' : 'bg-[#9A35EA]'} h-8 w-8 flex items-center justify-center rounded-lg`}>
            <img src={ReceiveImg} alt="" className="w-3/5"/>
          </div>
        </div>
        <div>
          <p className="font-semibold text-[#2D2D2D] text-sm">Received from client</p>
          <p className="font-medium text-xs text-[#7A7A7A]">15:30pm, today</p>
        </div>
      </div>
      <button className={`${transactionStatus === 'successful' ? 'bg-[#6472F1] text-primaryColor' : 'bg-[#D196FF] text-[#9A35EA]'} font-medium text-xs w-24 text-center py-2 rounded-2xl`}>{transactionStatus === 'successful' ? 'Successful' : 'Pending'}</button>
      <p className="text-xs text-primaryColor">{formattedAmount}</p>
      <button className={`${transactionStatus === 'successful' ? 'bg-primaryColor' : 'bg-[#9A35EA]'} text-white font-medium text-xs w-24 text-center py-2 rounded-2xl`}>{transactionStatus === 'successful' ? 'Download' : 'Redeem'}</button>
    </div>
  )
}