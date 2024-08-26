"use client"
import Navigation from '@/components/commons/Navigation';
import { useState, useEffect, use } from 'react';

export default  function Page() {


  interface Users {
    map(arg0: (user: any) => import("react").JSX.Element): import("react").ReactNode;
    Infogempa: {
      gempa: {
        id: number;
        Jam: string;
        Wilayah: string;
        Potensi: string;
        Magnitude: string;
        Kedalaman: string;
      }[];
    };
  }
  
  const [data, setData] = useState<Users | null>(null);




//  useEffect(() => {
//     const fetchData = async () => {
//       const data = await fetch('https://data.bmkg.go.id/DataMKG/TEWS/autogempa.json').then((res) =>
//         res.json()
//       ).then((data) =>
//         data
//       )
//       setData(data);
//       console.log(data);
//     };
    
//     fetchData();  
//   }, [data?.map]);


  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch('https://data.bmkg.go.id/DataMKG/TEWS/autogempa.json').then((res) =>
        res.json()
      ).then((data) =>
        data
      )
      setData(data);
      console.log(data);
    };
    
    fetchData();  
  }, []);


  return (

    <>
    <Navigation/>
    <div className='w-full'>
      <div className='lg :max-w-6xl mx-auto px-5'>
        <h2 className='text-4xl text-center font-bold'>Data Gempa Bumi Terbaru</h2>
        <p className='text-center dark:text-gray-300 text-gray-400 mt-4'>Data diambil 10 menit sekali (waktu ambil data adalah waktu server.)</p>


        <div className=''>
        </div>


        {/* Data Maping  */}
        <div className='mt-16'>
          {
            data && data.Infogempa.gempa.length > 0 && data.Infogempa.gempa.map ((user: any, index: number) => (
              <div key={index}>
                <div className='grid grid-cols-7 border p-5'>
                  <div >{user.Jam}</div> 
                  <div>{user.Wilayah}</div>
                  <div>{user.Potensi}</div>
                  <div>{user.Magnitude}</div>
                  <div>{user.Kedalaman}</div>
                  <div>{user.Wilayah}</div>
                  <div>{user.Potensi}</div> 
                </div>
              </div>
            ))
          }
      </div>
    </div>
    </div>
    </>
  )
}