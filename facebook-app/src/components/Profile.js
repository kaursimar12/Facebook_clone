import React from 'react'
import Allbody from './Allbody'


function Profile() {
  return (
    <div className="w-[100vw] h-[100vh] overflow-y-scroll">
    <div className="bg-gray-100 w-[100vw] h-[90vh]">
      <div className=" flex justify-center">
        <div className=" bg-gray-400 w-[60vw] h-[70vh] border rounded-md">
          <img  className="w-full h-full rounded-md"src="profile2.jpg"/>
        </div>
        </div>
        <div className="flex">
        <div className="relative left-[350px] top-[-50px] border-4 border-solid border-white rounded-full h-[155px] w-[155px]">
          <img className="h-[150px] w-[150px] rounded-full" src="profile.jpg"/>
          <div className="relative left-[120px] top-[-48px] h-8 w-8 bg-slate-200 rounded-full flex justify-center items-center "><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
  <path d="M12 9a3.75 3.75 0 100 7.5A3.75 3.75 0 0012 9z" />
  <path fill-rule="evenodd" d="M9.344 3.071a49.52 49.52 0 015.312 0c.967.052 1.83.585 2.332 1.39l.821 1.317c.24.383.645.643 1.11.71.386.054.77.113 1.152.177 1.432.239 2.429 1.493 2.429 2.909V18a3 3 0 01-3 3h-15a3 3 0 01-3-3V9.574c0-1.416.997-2.67 2.429-2.909.382-.064.766-.123 1.151-.178a1.56 1.56 0 001.11-.71l.822-1.315a2.942 2.942 0 012.332-1.39zM6.75 12.75a5.25 5.25 0 1110.5 0 5.25 5.25 0 01-10.5 0zm12-1.5a.75.75 0 100-1.5.75.75 0 000 1.5z" clip-rule="evenodd" />
</svg>
</div>
        </div>
        <div className="flex-col">
        <div className="font-bold text-4xl relative left-[370px]">
          Simar Kaur
        </div>
        <div className="font-medium text-xl relative left-[370px]"> 399 Friends</div>
        </div>
        </div>
      </div>
      <Allbody/>
      </div>
  )
}

export default Profile
