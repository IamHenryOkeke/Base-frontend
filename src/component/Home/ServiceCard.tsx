import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function ServiceCard({ title, description, imageUrl }: { title: string, description: string, imageUrl: string }) {
  return (
    <div className="px-3 py-5 2xl:px-6 2xl:py-10 border-[3.5px] border-primaryColor rounded-lg flex gap-5 lg:gap-10 items-start">
      <img src={imageUrl} alt={title} width={200} height={50} className="w-10 h-10 lg:w-[71px] lg:h-[71px]" />
      <div className="flex flex-col gap-1 lg:gap-3">
        <h2 className="font-bold text-lg lg:text-3xl">{title}</h2>
        <p className="font-medium lg:text-xl">{description}</p>
        <Link to="/" className="font-medium lg:text-xl hover:text-primaryColor">Learn more <FaArrowRight className="inline" /></Link>
      </div>
    </div>
  )
}
