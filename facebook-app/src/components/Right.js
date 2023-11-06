import React from 'react'

function Right() {
    const data = [
        { Icon: "kirti.jpg", Name: "Kirti Kaur" },
        { Icon: "jyoti.jpg", Name: "Jyoti Arora" },
        { Icon: "surjit.jpeg", Name: "Surjit Kaur" },
        { Icon: "lucky.jpeg", Name: "Lucky Arora" },
        { Icon: "tinku.jpeg", Name: "Tinku Singh" },
        { Icon: "vicky.jpg", Name: "Vicky Singh" },
        { Icon: "satnam.jpg", Name: "Satnam SIngh" },
      ];
      const friends = [
        { Profile: "biraj.jpg", Name: "Biraj Mahanta" },
        { Profile: "lucky.jpeg", Name: "Anuja Sarma" },
      ];
  return (
      <div className="w-3/12 h-[91vh] overflow-y-scroll bg-gray-100">
      <div className="pl-4 flex justify-start text-2xl">
        <h1><strong>Friend Requests</strong></h1>
      </div>
      <div>
      {friends.map((item, index) => (
  <div key={index} className="p-2 h-20 hover:bg-gray-300 hover:cursor-pointer bg-gray-100  flex items-center">
    <div className="ml-2">
      <img className="w-14 h-14 rounded-full" src={item.Profile} alt={item.Name} />
    </div>
    <div className="ml-6 font-medium text-2xl flex-col items-center justify-between">
      <span>{item.Name}</span>
      <div className="flex">
        <button
          type="button"
          className="inline-block rounded bg-blue-600 h-[30px] w-[70px] text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
        >
          Confirm
        </button>
        <button
          type="button"
          className="inline-block rounded bg-gray-500 h-[30px] w-[70px] text-xs font-medium uppercase leading-normal ml-4 text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-gray-800 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
        >
          Delete
        </button>
      </div>
    </div>
  </div>
))}
      </div>
      <div className=" mt-10 pl-4 flex justify-start text-2xl">
        <h1><strong>Contacts</strong></h1>
      </div>
      {data.map((item, index) => (
        <div key={index} className="p-2 h-16 hover:bg-gray-300 hover:cursor-pointer bg-gray-100 flex items-center">
          <div className="ml-2">
            <img className="w-8 h-8 rounded-full" src={item.Icon} alt={item.Name} />
          </div>
          <div className="ml-6 font-medium text-xl">
            {item.Name}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Right
