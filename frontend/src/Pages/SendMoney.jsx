import React from 'react'
import { InputBox } from './AuthComponents/InputBox'

const SendMoney = () => {
  return (
    <div className="bg-gray-400 h-screen w-screen flex items-center justify-center ">
      <div className=" w-96 h-72 bg-white rounded-md">
        <h1 className="font-bold pt-6 text-2xl text-center">Send Money</h1>
        <div className="pt-10 ">
          <div className="flex pl-6 content-start gap-3 items-center  ">
            <img
              src="https://images.unsplash.com/photo-1586289883499-f11d28aaf52f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="w-10 h-10 mt-6 rounded-full"
            />
            {/* <div className="bg-green-500 text-lg m-6 text-white px-3 py-2 rounded-full">A</div> */}
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
