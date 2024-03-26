import React from 'react'
import Navbar from '../NavbarComponent/Navbar'
import SidebarCompoent from '../SidebarComponent/SidebarCompoent'
export default function Dashboard() {
  return (
    <div>
      <Navbar></Navbar>
      <SidebarCompoent></SidebarCompoent>
        {/* <h1 className="text-3xl font-bold underline text-center">Hello world!</h1> */}
    </div>
  )
}
