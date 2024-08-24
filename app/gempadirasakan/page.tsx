
// import { Table } from 'lucide-react';
import React from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import Navigation from '@/components/commons/Navigation';
import Footer from '@/components/commons/Footer';
import GridPattern from '@/components/magicui/grid-pattern';
import { cn } from '@/lib/utils';

export default async function DataFetch() {


  const response = await fetch("https://data.bmkg.go.id/DataMKG/TEWS/gempadirasakan.json");
  const posts = await response.json();
  console.log(posts)


  return (
    <>
        <Navigation/>
    <div className='w-full'>
      <div className=' mx-auto px-5'>
        <h2 className='lg:text-5xl text-3xl font-bold text-center mt-10'>Data Gempabumi Dirasakan</h2>
        <p className='text-center dark:text-gray-300 text-gray-400 mt-4'>Data diambil 10 menit sekali (waktu ambil data adalah waktu server.)</p>
        <div className='mt-16'>
<Table className="w-full overflow-auto">
  <TableCaption>Data Gempa Bumi Terbaru Berdasarkan Jangkauan Yang Dirasakan</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead>No</TableHead>
      {/* <TableHead>Ambil Data</TableHead> */}
      <TableHead>Tanggal</TableHead>
      <TableHead className="w-[100px]">Jam Kejadian</TableHead>
      <TableHead className="w-[100px]">Date Time</TableHead>
      <TableHead>Koordinat</TableHead>
      <TableHead>Lintang</TableHead>
      <TableHead>Kedalaman</TableHead>
      <TableHead>Magnitudo</TableHead>
      <TableHead>Wilayah</TableHead>
      <TableHead>Dirasakan</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {
        posts.Infogempa.gempa.map((items:any, index:any) => (
            <TableRow key={items.Tanggal}>
          <TableCell>{index + 1}</TableCell>
          {/* <TableCell>{items.DateTime}</TableCell> */}
          <TableCell>{items.Tanggal}</TableCell>
          <TableCell>{items.Jam}</TableCell>
          <TableCell>{items.DateTime}</TableCell>
          <TableCell>{items.Coordinates}</TableCell>
          <TableCell>{items.Lintang}</TableCell>
          <TableCell>{items.Kedalaman}</TableCell>
          <TableCell>{items.Magnitude}</TableCell>
          <TableCell>{items.Wilayah}</TableCell>
          <TableCell className='flex flex-col '>{items.Dirasakan}</TableCell>
        </TableRow>
      ))
    }
  </TableBody>
</Table>
      </div>
      </div>
      <GridPattern
        squares={[
          [4, 4],
          [5, 1],
          [8, 2],
          [5, 3],
          [5, 5],
          [10, 10],
          [12, 15],
          [15, 10],
          [10, 15],
          [15, 10],
          [10, 15],
          [15, 10],
        ]}
        className={cn(
          "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
        )}
      />
    </div>
    <Footer/>
    </>
  )
}
