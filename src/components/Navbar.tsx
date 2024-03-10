import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import blinxlogo from '@/assets/Blinxlogo.png'
const Navbar = () => {
    return(
        <div>
            <nav>
                <Link href={'/'}>
                    <Image src={blinxlogo} alt='logo' className='w-20' />
                </Link>
            </nav>
        </div>
    )
}

export default Navbar;