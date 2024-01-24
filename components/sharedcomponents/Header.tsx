import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import MobileNav from './NavMobile'
import Navitems from './Navitems'


const Header = () => {
  return (
    <header className='m-1  '>
      <div className='wrapper flex items-center justify-between'>
        <Link href='/'>
          <p className='font-mono font-bold text-2xl'>Bookit.</p>
        </Link>
        <SignedIn>
          <nav className="md:flex-between hidden w-full max-w-[25rem]">
            <Navitems />
          </nav>
        </SignedIn>
        <div className='flex gap-3'>
          <SignedIn>
            <nav className='flex gap-3'>
              <UserButton afterSignOutUrl='/' />
              <MobileNav />
            </nav>
          </SignedIn>
          <SignedOut>
            <Button asChild className='h-max w-max p-3 bg-blue-500 text-white hover:cursor-pointer rounded-2xl opacity-60 '>
              <Link href='/sign-in'> Login</Link>
            </Button>
          </SignedOut>
        </div>
      </div>
    </header>
  )
}

export default Header
