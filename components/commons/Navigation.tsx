"use client"
import React from 'react'
import { ModeToggle } from '../atoms/modetogle'
import Link from 'next/link'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from '../ui/button'
import { PiSealWarningBold } from 'react-icons/pi'
import { IoLogoGithub } from 'react-icons/io'
import { FaInstagram } from 'react-icons/fa'
import { LiaBlogSolid } from 'react-icons/lia'


const Navigation = () => {
  return (
    <div className='w-full border-b '>
        <div className='lg:max-w-8xl mx-auto px-5 flex justify-between items-center p-4'>
            {/* <p className='text-lg font-bold text-center '></p> */}
            <div className='items-center gap-x-5 flex'>
                <Link href='/' className='hover:text-sky-300'>Home</Link>
                <Link href='/gempadirasakan' className='hover:text-sky-300'>Gempa Dirasakan</Link>
                {/* <Link href='/gempaterkini' className='hover:text-sky-300'>Gempa Terbaru</Link> */}
            </div>
            <div className='flex gap-x-3 items-center'>
            <Dialog>
            <DialogTrigger>
              <PiSealWarningBold size={20} />
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                {/* <DialogTitle>
                  Terimaksih sudah mengunjugi website ini !
                </DialogTitle> */}
                <DialogDescription>
                Sumber Data BMKG (Badan Meterologi Klimatologi dan Geofisika)
                <Link href={"https://data.bmkg.go.id"} className='hover:text-sky-300'>https://data.bmkg.go.id</Link> 
                </DialogDescription>
                <p className="my-5">Follow Social Media Kami :</p>
                <div className="mt-5 flex lg:justify-start justify-center items-center gap-x-2">
                  <Link href="https://github.com/ervinarviandi" target="blank">
                    <IoLogoGithub size={18} />
                  </Link>
                  <Link
                    href="https://www.instagram.com/ervinarviandi/"
                    target="blank"
                  >
                    <FaInstagram size={18} />
                  </Link>
                  <Link href="https://ceritaervin.vercel.app/" target="blank">
                    <LiaBlogSolid size={18} />
                  </Link>
                </div>
              </DialogHeader>
            </DialogContent>
          </Dialog>
            <ModeToggle/>
            </div>
        </div>
    </div>
  )
}

export default Navigation


{/* <DialogFooter className='text-sm flex flex-col' >
          <p>Sumber Data BMKG (Badan Meterologi Klimatologi dan Geofisika)</p>
        <Link href={"https://data.bmkg.go.id"} className='hover:text-sky-300'>https://data.bmkg.go.id</Link> 
        </DialogFooter> */}