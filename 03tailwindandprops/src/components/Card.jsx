import React from 'react'

//destructuring
// or we can give default value here also if props is not being passed like this {btnText = "click me"}
function Card({userName, btnText}) {
    console.log('incoming props:-', userName)

  return (
    <div className="relative h-[400px] w-[300px] rounded-md">
        <img
            src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
            alt="AirMax Pro"
            className="z-0 h-full w-full rounded-md object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        <div className="absolute bottom-4 left-4 text-left">
            <h1 className="text-lg font-semibold text-white"> {userName} </h1>
            <p className="mt-2 text-sm text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            debitis?
            </p>
            <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
                {btnText} →
                {/* {btnText || "click me"} →  it will be ejected if someone hav'nt passed props  */}
            </button>
        </div>
    </div>

  )
}

export default Card