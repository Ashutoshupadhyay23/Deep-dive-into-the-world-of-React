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
            }
        })
    }, [])


    if(posts.length === 0) {
        return (
            <div className='w-full py-20 mt-4 text-center'>
                <Container>
                    <div className='flex flex-wrap'>
                        <div className='p-2 w-full'>
                            <h1 className='text-2xl font-bold hover:to-gray-500'>
                                Please login to read posts
                            </h1>
                            <Link
                                to="/login"
                                className="text-white bg-blue-500 hover:bg-blue-600 font-bold mt-4 py-2 px-8 rounded inline-block"
                            >
                                Login
                            </Link>
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