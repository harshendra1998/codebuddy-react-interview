import React, {useEffect, useState} from 'react'
import { fetch } from 'whatwg-fetch'
import Eachpost from '../components/eachpost'

export default function Posts() {
    const [data, setData] = useState(null)
    useEffect(() => {
      fetch('https://codebuddy.review/posts').then(res => { console.log(res); return res.json()}).then((posts) => { console.log(posts.data.posts); return setData(posts.data.posts);})
    }, [])
    
  return (
    <div className='container'><p className='text-center fs-3'>Posts</p>
    <div className='row'>
    {data?.map(eachdata=><Eachpost id={eachdata.id} firstName={eachdata.firstName} lastName={eachdata.lastName} writeup={eachdata.writeup} image={eachdata.image} avatar={eachdata.avatar} />)}
    </div>
    </div>
  )
}

