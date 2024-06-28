import { RiDashboardLine } from "react-icons/ri";
import { PiCards, PiScroll } from "react-icons/pi";
import { RiWalletLine } from "react-icons/ri";
import { AiOutlineBell } from "react-icons/ai";
import { IoSettingsSharp } from "react-icons/io5";
import { LuLogOut } from "react-icons/lu";
import { Link, useLocation } from 'react-router-dom';
import { FaUserLarge } from "react-icons/fa6";
import { MdLockOutline } from "react-icons/md";
import { useState } from "react";

export default function DashBoardNav() {
  const location = useLocation()
  const [showSettingsNav, setShowSettingsNav] = useState<boolean>(false)
  const handleSettingsNav = () => {
    setShowSettingsNav(!showSettingsNav)
  }

  const closeSettingsNav = () => {
    setShowSettingsNav(false)
  }

  const handleChildClick = (e: any) => {
    e.stopPropagation();

    console.log('handleChildClick');
  }

  return (
    <nav className='flex flex-col gap-4'>
      <div onClick={closeSettingsNav}>
        <NavLinkPrimary to="/dashboard/home" active={location.pathname === '/dashboard/home'} text="Dashboard">
          <RiDashboardLine size={25} className="ml-2" />
        </NavLinkPrimary>
      </div>
      <div onClick={closeSettingsNav}>
        <NavLinkPrimary to="/dashboard/fund-wallet" active={location.pathname === '/dashboard/fund-wallet'} text="Fund Wallet">
          <RiWalletLine size={25} className="ml-2" />
        </NavLinkPrimary>
      </div>
      <div onClick={closeSettingsNav}>
        <NavLinkPrimary to="/dashboard/cards-and-receipts" active={location.pathname === '/dashboard/cards-and-receipts'} text="Cards and Receipts">
          <PiCards size={25} className="ml-2" />
        </NavLinkPrimary>
      </div>
      <div onClick={closeSettingsNav}>
        <NavLinkPrimary to="/dashboard/transactions" active={location.pathname === '/dashboard/transactions'} text="Transactions">
          <PiScroll size={25} className="ml-2" />
        </NavLinkPrimary>
      </div>
      <div onClick={closeSettingsNav}>
        <NavLinkPrimary to="/dashboard/notifications" active={location.pathname === '/dashboard/notifications'} text="Notifications">
          <AiOutlineBell size={25} className="ml-2" />
        </NavLinkPrimary>
      </div>
      <div onClick={handleSettingsNav}>
        <NavLinkPrimary to="/dashboard/settings/profile" active={location.pathname.includes('/dashboard/settings')} text="Settings">
          <IoSettingsSharp size={25} className="ml-2" />
        </NavLinkPrimary>
        <div onClick={handleChildClick} className={`overflow-hidden transition-all ease-in-out ${showSettingsNav ? "opacity-100 h-[138px] md:h-20 lg:h-32 xl:h-20" : "opacity-0 h-0"} duration-500`}>
          <NavLinkSecondary to="/dashboard/settings/profile" active={location.pathname.includes('/dashboard/settings/profile')} text="Profile">
            <FaUserLarge size={15} className="ml-2" />
          </NavLinkSecondary>
          <NavLinkSecondary to="/dashboard/settings/password" active={location.pathname.includes('/dashboard/settings/password')} text="Password">
            <MdLockOutline size={20} className="ml-1 -mr-1" />
          </NavLinkSecondary>
        </div>
      </div>
      <div onClick={closeSettingsNav}>
        <NavLinkPrimary to="/dashboard/logout" active={location.pathname === '/dashboard/logout'} text="Log Out">
          <LuLogOut size={25} className="ml-2" />
        </NavLinkPrimary>
      </div>
    </nav>
  )
}

function NavLinkPrimary({ to, active, text, children }: { to: string, active: boolean, text: string, children: React.ReactNode }) {
  return (
    <Link to={to} className={`py-4 pl-2 border-r-8 flex gap-5 w-full ${active ? ' border-primaryColor text-primaryColor bg-primaryColor/15' : 'border-transparent'} items-center hover:bg-primaryColor/15`}>
      {children}
      <p>
        {text}
      </p>
    </Link>
  )
}

function NavLinkSecondary({ to, active, text, children }: { to: string, active: boolean, text: string, children: React.ReactNode }) {
  return (
    <Link to={to} className={`py-3 ml-5 flex gap-5 w-full ${active ? 'text-primaryColor' : ''} items-center`}>
      {children}
      <p>
        {text}
      </p>
    </Link>
  )
}


