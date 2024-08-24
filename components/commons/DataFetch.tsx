

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
import { Button } from '../ui/button';
import GridPattern from '../magicui/grid-pattern';
import { cn } from '@/lib/utils';

export default async function DataFetch() {


  const response = await fetch("https://data.bmkg.go.id/DataMKG/TEWS/gempaterkini.json");
  const posts = await response.json();
  console.log(posts)


  return (
    <div className='w-full'>
      <div className=' lg:max-w-8xl mx-auto px-5'>
        <h2 className='lg:text-5xl text-3xl font-bold text-center mt-10'>Data Gempa Bumi Terbaru</h2>
        <p className='text-center dark:text-gray-300 text-gray-400 mt-4'>Data diambil 10 menit sekali (waktu ambil data adalah waktu server.)</p>
        <div className='mt-16'>
      {/* {
        
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
          </div>
            </div>
        ))
      } */}

<Table  className="w-full">
  <TableCaption>Data Gempa Bumi Terbaru Yang Terjadi Di Indonesia</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead>No</TableHead>
      <TableHead>Ambil Data</TableHead>
      <TableHead>Tanggal</TableHead>
      <TableHead className="w-[100px]">Jam</TableHead>
      <TableHead className="w-[100px]">Wilayah</TableHead>
      <TableHead>koordinat</TableHead>
      <TableHead>Lintang</TableHead>
      <TableHead>Kedalaman</TableHead>
      <TableHead>Potensi</TableHead>
      {/* <TableHead>Aksi</TableHead> */}
    </TableRow>
  </TableHeader>
  <TableBody>
    {
      posts.Infogempa.gempa.map((items:any, index: any) => (
        <TableRow key={items.Tanggal}>
          <TableCell>{index + 1}</TableCell>
          <TableCell>{items.DateTime}</TableCell>
          <TableCell>{items.Tanggal}</TableCell>
          <TableCell>{items.Jam}</TableCell>
          <TableCell>{items.Wilayah}</TableCell>
          <TableCell>{items.Coordinates}</TableCell>
          <TableCell>{items.Lintang}</TableCell>
          <TableCell>{items.Kedalaman}</TableCell>
          <TableCell>{items.Potensi}</TableCell>
          {/* <TableCell>
            <Button>AKSI</Button>
          </TableCell> */}
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
  )
}
