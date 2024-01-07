import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

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
    <div className='bg-gray-500 text-center m-4 text-white text-3xl p-4'>
        Github followers: {data.followers}
        <img src={data.avatar_url} alt="Git picture" width={250} />
    </div>
  )
}

export default Github

// it is the another way to fetch api. it is the method of react router 
export const githubInfoLoader = async () => {
    const resp = await fetch('https://api.github.com/users/ashutoshupadhyay23')
    return resp.json();
}