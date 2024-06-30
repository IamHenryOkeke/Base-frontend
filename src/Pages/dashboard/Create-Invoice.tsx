import { MdCloudUpload } from "react-icons/md";
import { TbCaretUpDownFilled } from "react-icons/tb";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";

export default function CreateInvoice() {
  const [issueDate, setIssueDate] = useState<Date | null>(new Date());
  const [dueDate, setDueDate] = useState<Date | null>(new Date());

  return (
    <div className="grid grid-cols-[1fr_0.3fr] px-10">
      <div className="h-full flex items-center flex-col justify-center">
        <div className="bg-white rounded-[50%] flex items-center justify-center mx-auto h-20 w-20 translate-y-10 drop-shadow-md">
          <MdCloudUpload className="h-9 w-9 text-[#808080]" />
        </div>
        <div className=' text-[#2D2D2D] text-sm p-8 w-full rounded-3xl bg-white flex flex-col items-center justify-center gap-3'>
          <div className="px-5 w-full flex justify-between">
            <p className="w-56 flex items-center gap-1">
              Issue Date: <DatePicker className="w-24 focus:outline-none" selected={issueDate} onChange={(date) => setIssueDate(date)} /> <TbCaretUpDownFilled className="-ml-3 z-50 inline" />
            </p>
            <div className="w-56 flex items-center justify-end gap-1">
              Due Date: <DatePicker className="w-24 focus:outline-none" selected={dueDate} onChange={(date) => setDueDate(date)} /> <TbCaretUpDownFilled className="-ml-3 z-50 inline" />
            </div>
          </div>
          <h2 className="font-semibold text-2xl">INVOICE FORM</h2>
          <hr className="h-[2px] bg-[#8B8B8B] w-full" />
          <div className="px-5 self-start w-full grid grid-cols-2 gap-5">
            <div className="space-y-3">
              <h2 className="font-semibold mb-2">
                Bill From:
              </h2>
              <input type="email" name="" id="" className="w-full bg-[#F6F6F6] p-3 focus:outline-none rounded-md placeholder:text-[#7A7A7A]" placeholder="Email" />
              <textarea className="w-full h-28 resize-none bg-[#F6F6F6] p-3 focus:outline-none rounded-md placeholder:text-[#7A7A7A]" placeholder="Who is this invoice from?"></textarea>
            </div>
            <div className="space-y-3">
              <h2 className="font-semibold mb-2">
                Bill To:
              </h2>
              <input type="email" name="" id="" className="w-full bg-[#F6F6F6] p-3 focus:outline-none rounded-md placeholder:text-[#7A7A7A]" placeholder="Email" />
              <textarea className="w-full h-28 resize-none bg-[#F6F6F6] p-3 focus:outline-none rounded-md placeholder:text-[#7A7A7A]" placeholder="Who is this invoice to?"></textarea>
            </div>
          </div>
          <hr className="h-[2px] bg-[#8B8B8B] w-full" />
          <div className="font-semibold px-5 w-full grid grid-cols-[2fr_0.5fr_1.5fr]">
            <h2>
              Item
            </h2>
            <h2>
              Units
            </h2>
            <h2 className="text-right">
              Total
            </h2>
          </div>
          <hr className="h-[2px] bg-[#8B8B8B] w-full" />
          <div className="px-5 w-full grid grid-cols-[2fr_0.5fr_1.5fr]">
            <div className="space-y-4">
              <input type="text" className="w-4/5 bg-[#F6F6F6] p-3 focus:outline-none rounded-md placeholder:text-[#7A7A7A]" placeholder="Item name" />
              <input type="text" className="w-4/5 bg-[#F6F6F6] p-3 focus:outline-none rounded-md placeholder:text-[#7A7A7A]" placeholder="Description" />
            </div>
            <input type="number" min={1} className="w-[30%] appearance-none h-fit pl-1 py-2 bg-[#F6F6F6] focus:outline-none rounded-md placeholder:text-[#7A7A7A]" />
            <h2 className="text-right font-semibold mb-2">
              $4,000
            </h2>
          </div>
          <hr className="h-[2px] bg-[#8B8B8B] w-full" />
          <div className="px-5 w-full self-start">
            <h2 className="font-semibold mb-2">
              Notes
            </h2>
            <input type="text" name="" id="" className="w-full bg-[#F6F6F6] p-3 focus:outline-none rounded-md placeholder:text-[#7A7A7A]" placeholder="Thanks for choosing us" />
          </div>
        </div>
      </div>
      <div className="mx-auto w-4/5 translate-y-24 font-semibold">
        <button className="bg-primaryColor text-white w-full rounded-lg p-3 drop-shadow-md">
          Generate Invoice Link
        </button>
        <div className="flex justify-between gap-2 my-5">
          <button className="bg-white w-full rounded-lg p-3 drop-shadow-md">
            Preview
          </button>
          <button className="bg-white w-full rounded-lg p-3 drop-shadow-md">
            Download
          </button>
        </div>
      </div>
    </div>
  )
}
