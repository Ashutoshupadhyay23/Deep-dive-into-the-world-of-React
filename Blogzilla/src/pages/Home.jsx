import React, { useEffect, useState } from 'react'
import appwriteService from "../appwrite/conf"
import { Container, PostCard } from '../components'
import { Link } from 'react-router-dom'

function Home() {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            } else {
                console.log(Error)
            }
        })
    }, [])


    if(posts.length === 0) {
        return (
            <div className='w-full py-20 mt-4 text-center'>
                <Container>
                    <div className='flex flex-wrap'>
                        <div className='p-2 w-full'>
                            <div className="text-center">
                                <p className="text-xl font-semibold">Please Log In or Sign Up to Read Posts</p>
                                <p className="mt-2 text-lg text-gray-600">
                                    Enjoy exclusive access to our latest posts and updates by logging in or signing up for an account.
                                </p>
                                <div className="mt-4">
                                    <Link to="/login" className="inline-block px-4 py-2 text-blue-500 border border-blue-500 rounded-md mr-2 hover:bg-blue-100 transition duration-300">
                                        Log In
                                    </Link>
                                    <Link to="/signup" className="inline-block px-4 py-2 text-blue-500 border border-blue-500 rounded-md ml-2 hover:bg-blue-100 transition duration-300">
                                        Sign Up
                                    </Link>
                                </div>
                            </div>

                        </div>
                    </div>
                </Container>
            </div>
        )
    }

    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
  
}

export default Home