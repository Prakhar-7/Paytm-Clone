import React from 'react'
import { InputBox } from './AuthComponents/InputBox'

const SendMoney = () => {
  return (
    <div className="bg-gray-400 h-screen w-screen flex items-center justify-center ">
      <div className=" w-96 h-72 bg-white rounded-md">
        <h1 className="font-bold pt-6 text-2xl text-center">Send Money</h1>
        <div className="pt-10 ">
          <div className="flex pl-6 content-start gap-3 items-center  ">
            <div className="mt-6 w-10 h-10 bg-green-500 rounded-full text-white text-xl flex justify-center items-center">
              A
            </div>
            <h2 className="font-bold pt-6 text-lg text-center">
              Friend's Name
            </h2>
          </div>
          <div className="flex flex-col  mx-6 mt-2 gap-2">
            <label htmlFor="amount" className="text-xs font-medium text-left">
              Amount (in Rs)
            </label>
            <input
              type="text"
              id="amount"
              required
              placeholder="Enter amount"
              // onChange={onChange}
              className="w-full px-3 py-2 text-xs font-medium border rounded border-slate-300 outline-0 "
            />
            <button className="bg-green-500 text-white font-medium text-xs py-2 rounded-md">
              Initiate Transfer
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SendMoney
