'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react';
import Intro from './introduction';


export default function NavBar() {
  return(
    <nav className="flex flex-row justify-between items-center">
        <button className="text-2xl font-bold">Clodolt</button>
    </nav>
  )
}