// "use client"

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const EarthquakeInfo = () => {
//     // const [data, setData] = useState(null);
//     const [data, setData] = useState<{
//         [x: string]: any; Infogempa: { gempa: any[] } 
// } | null>(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     const endpoint = "https://data.bmkg.go.id/DataMKG/TEWS/autogempa.json"

//     useEffect(() => {
//         axios.get(endpoint)
//             .then((response) => {
//                 setData(response.data.Infogempa.gempa.data);
//                 setLoading(false);
//             })
//             .catch((error) => {
//                 setError(error.message);
//                 setLoading(false);
//             });
//     }, []);

//     if (loading) return <p>Loading...</p>;
//     if (error) return <p>Error: {error}</p>;

//     // Menampilkan data gempa
//     return (
//         <div>
//             {data && data[0].map((posts: any) => (
//   <div key={posts.Tanggal}>
//     {posts && posts.Infogempa.gempa.map((items: any) => (
//       <div key={items.Tanggal}>
//         <div className=' text-xl text-teal-600 font-bold'>{items.Tanggal}</div>
//         <div className=' text-xl text-teal-600 font-bold'>{items.Jam}</div>
//         <div className=' text-xl text-teal-600 font-bold'>{items.Wilayah}</div>
//         <div className=' text-xl text-teal-600 font-bold'>{items.Potensi}</div>
//         <div className=' text-xl text-teal-600 font-bold'>{items.DateTime}</div>
//       </div>
//     ))}
//   </div>
// ))}
//         </div>
//     );
// }

// export default EarthquakeInfo;
