

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
import Link from 'next/link';
import DotPattern from '../magicui/dot-pattern';

export default async function DataFetch() {


  const response = await fetch("https://data.bmkg.go.id/DataMKG/TEWS/gempaterkini.json");
  const posts = await response.json();
  console.log(posts)


  return (
    <div className='w-full relative'>
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
      <TableHead>koordinat</TableHead>
      <TableHead>Lintang</TableHead>
      <TableHead className="w-[100px]">Wilayah</TableHead>
      <TableHead>Magnitudo</TableHead>
      <TableHead>Kedalaman</TableHead>
      <TableHead>Potensi</TableHead>
      <TableHead>Aksi</TableHead>
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
          <TableCell>{items.Coordinates}</TableCell>
          <TableCell>{items.Lintang}</TableCell>
          <TableCell>{items.Wilayah}</TableCell>
          <TableCell>{items.Magnitude}</TableCell>  
          <TableCell>{items.Kedalaman}</TableCell>
          <TableCell>{items.Potensi}</TableCell>
          <TableCell>
            <Button>AKSI</Button>
          </TableCell>
           {/* <Link as={`/p/${posts.id}`} href={`/post?id=${posts.id}`}>
            {posts.name}
          </Link> */}
        </TableRow>
      ))
    }
  </TableBody>
</Table>
      </div>
      </div>
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
        )}
      />
    </div>
  )
}
