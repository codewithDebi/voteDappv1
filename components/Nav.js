import React, { Component } from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import { ConnectKitButton } from "connectkit";
import MobileMenu from './MobileMenu';
import Image from 'next/image';
import logo from '../public/Vote.png'

export class Nav extends Component {
  render() {
    return (
      <div className='bg-vote-400 px-4 md:p-14 text-white h-32 w-full flex justify-between items-center rounded-bl-3xl rounded-br-3xl'>
        <Image className='w-10 h-12' src={logo} alt='Vote' width={25} height={25} />
        <div className='flex justify-end items-center space-x-2'>
          <ConnectKitButton />
          <MobileMenu />
        </div>
      </div>
    )
  }
}

export default Nav