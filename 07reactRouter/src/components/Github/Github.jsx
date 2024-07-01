import React, { useEffect, useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom'

function Github() {

  const data = useLoaderData();


//   const [data, setData] = useState([]);

// fetching data using useeffect hook 

//   useEffect(() => {
//     fetch('https://api.github.com/users/ashutoshupadhyay23')
//     .then(resp => resp.json())
//     .then(data => {
//         console.log(data);
//         setData(data)
//     })
//   }, [])
  

  return (
    <div className='bg-gray-500 text-white text-3xl p-4 relative'>
  
      <div className="absolute top-0 left-0 p-4 text-2xl">
        Username: {" "}
        <Link 
          to={data.html_url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-blue-500 transition-transform duration-300 ease-in-out transform hover:-translate-y-1"
        >
          {data.name}
        </Link>
      </div>
      
      <div className="absolute top-0 right-0 p-4">
        <img src={data.avatar_url} alt="Git picture" width={50} className="rounded-full" />
      </div>

      <div className="text-center mt-20">
        <div className="text-3xl">Public Repos: {data.public_repos}</div>
      </div>
    </div>


  )
}

export default Github

// it is the another way to fetch api. it is the method of react router 
export const githubInfoLoader = async () => {
    const resp = await fetch('https://api.github.com/users/ashutoshupadhyay23')
    return resp.json();
}