"use client"

import React, { useEffect, useState } from 'react'

export default  async function DataFetch() {
  
    const [data,setData] = useState<{Infogempa:any}[]>([]);
    // const [posts,setData] = useState<{Infogempa:any}[]>([]);




    const endpoint = "https://data.bmkg.go.id/DataMKG/TEWS/autogempa.json"
    const response =  await fetch(endpoint);
    const {Data} = await response.json();
    console.log(data)
    setData(data);
    




    // const endpoint = "https://data.bmkg.go.id/DataMKG/TEWS/autogempa.json"
    // const response =  await fetch(endpoint);
    // const data = await response.json();
    // console.log(data.Infogempa.gempa.data)
    // setData(data.Infogempa.gempa.data);



    // const response = await fetch("https://data.bmkg.go.id/DataMKG/TEWS/autogempa.json");
    // const {posts} = await response.json();
    // console.log(posts)



    // const endpoint = "https://data.bmkg.go.id/DataMKG/TEWS/gempaterkini.json";    
    // useEffect(() => {
    //   fetch(endpoint)
    //     .then((response) => response.json())
    //     .then((posts) => {
    //       console.log(posts);
    //       setData(posts.Infogempa.gempa.posts);
    //     });
    // }, []);


// useEffect(() => {

//     fetch ("https://data.bmkg.go.id/DataMKG/TEWS/autogempa.json")
//         .then(response => response.json())
//         .then(data => {
//           console.log(posts);
//             // setPosts(data.Infogempa.gempa.data);
            
//         });
//     }, []) ;
    

  return (
    <div className='w-full'>
      <div className='lg:max-w-6xl mx-auto px-5 bg-[#222121]'>
        <h2 className='text-center lg:text-5xl text-3xl font-bold'>gempa sekarang 😁</h2>
      {/* {posts && (
        <div  className='lg:max-w-6xl mx-auto px-5'>
          <h2 className='lg:text-5xl text-3xl font-bold text-center my-10'>Data Gempa </h2>
          <div className='border-2 bg-[#222121]'>
            { posts && posts[0]?.Infogempa?.gempa.map((items: any) => (
                <div key={items.Tanggal} className='grid md:grid-cols-5 border p-5 '>
                  <h2 className='text-teal-200'>{items.Tanggal}</h2>
                  <div className='text-purple-500 text-sm font-bold '>{items.Kedalaman}</div>
                  <div className='text-purple-500 text-sm font-bold '>{items.Dirasakan}</div>
                  <div className='text-purple-500 text-sm font-bold '>{items.Wilayah}</div>
                  <div className='text-purple-500 text-sm font-bold '>{items.Potensi}</div>
                  <div className='text-purple-500 text-sm font-bold '>{items.Magnitude}</div>
                  <div className='text-purple-500 text-sm font-bold '>{items.Kedalaman}</div>
                  <div className='text-purple-500 text-sm font-bold '>{items.Wilayah}</div>
                  <div className='text-purple-500 text-sm font-bold '>{items.Potensi}</div>
                  <div className='text-purple-500 text-sm font-bold '>{items.Dirasakan}</div>
              </div>
            ))}
          </div>
          <p className='text-lg text-white text-center italic '>data gempa bumi sekarang </p>
        </div>
      )} */}
response={}
{data && data.map((posts: any) => (
  <div key={posts.Tanggal}>
    {posts && posts.Infogempa.gempa.map((items: any) => (
      <div key={items.Tanggal}>
        <div className=' text-xl text-teal-600 font-bold'>{items.Tanggal}</div>
        <div className=' text-xl text-teal-600 font-bold'>{items.Jam}</div>
        <div className=' text-xl text-teal-600 font-bold'>{items.Wilayah}</div>
        <div className=' text-xl text-teal-600 font-bold'>{items.Potensi}</div>
        <div className=' text-xl text-teal-600 font-bold'>{items.DateTime}</div>
      </div>
    ))}
  </div>
))}


      </div>
    </div>
  )
}
function setData(data: any) {
    throw new Error('Function not implemented.')
}

