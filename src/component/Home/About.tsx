import { FaCheck } from "react-icons/fa6";
import AboutImage from "../../assets/AboutImage.png";

export default function About() {
  return (
    <section className="pb-10 lg:pb-20">
      <h1 className="mb-1 text-lg lg:text-2xl font-bold text-primaryColor">About Our Company</h1>
      <div className='w-full flex flex-col lg:flex-row gap-4'>
        <div className='space-y-2 lg:space-y-8 lg:w-1/2'>
          <h2 className='font-bold text-2xl md:text-4xl lg:text-6xl'>We guarantee high quality IT services</h2>
          <p className='text-lg md:text-2xl'>Supporting the growth of our clients is the fundamental reason why our Services is the chosen one for many</p>
          <div className='font-medium md:text-xl lg:text-2xl flex flex-col gap-3 lg:pr-10'>
            <div className="flex gap-3 lg:gap-7">
              <div className="mt-1.5 self-start text-white font-bold rounded-[50%] bg-primaryColor p-1">
                <FaCheck size={18} />
              </div>
              <p className="">We empower our clients&apos; by providing seamless fiat to crypto transactions.</p>
            </div>
            <div className="flex gap-3 lg:gap-7">
              <div className="mt-1.5 self-start text-white font-bold rounded-[50%] bg-primaryColor p-1">
                <FaCheck size={18} />
              </div>
              <p>Commitment to transparency and customer satisfaction.</p>
            </div>
            <div className="flex gap-3 lg:gap-7">
              <div className="mt-1.5 self-start text-white font-bold rounded-[50%] bg-primaryColor p-1">
                <FaCheck size={18} />
              </div>
              <p>Dedication to our clients&apos; financial success and peace of mind.</p>
            </div>
          </div>
        </div>
        <div className='lg:w-1/2 relative'>
          <img src={AboutImage} alt="About Image" className="lg:-translate-y-4"/>
        </div>
      </div>
    </section>
  )
}
