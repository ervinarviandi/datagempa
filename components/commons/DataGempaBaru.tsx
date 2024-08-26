import React from 'react'

export default async function DataGempaBaru() {
    const response = await fetch("https://data.bmkg.go.id/DataMKG/TEWS/gempadirasakan.json");
    const {posts} = await response.json();
    console.log()

  return (
    <div className='w-full'>
        <div className='lg:max-w-6xl mx-auto px-5'>
            <h2 className='text-4xl text-center font-bold'>Data Gempa Bumi Terbaru</h2>
            <p className=''>Dibawah ini adalah data gempa bumi terbaru </p>
            <div>
                {
        posts && posts.Infogempa.gempa.map((items: any) => (
          <div key={items.Tanggal}>
            <div className='grid md:grid-cols-7 border p-5'>
            <div>{items.Jam}</div>
            <div>{items.Wilayah}</div>
            <div>{items.Potensi}</div>
            <div>{items.Magnitude}</div>
            <div>{items.Kedalaman}</div>
            <div>{items.Wilayah}</div>
            <div>{items.Potensi}</div>
            <div className='flex items-center gap-x-2'>
            <div className='flex items-center gap-x-2'>{items.Dirasakan}</div>
            </div>
          </div>
            </div>
        ))
      }
            </div>
        </div>
    </div>
  )
}
