'use client'
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    return (
        <nav className='w-full'>
            <Link href='/' className='absolute z-50 left-1/2 transform -translate-x-1/2 top-14'>
                <Image className='w-32 md:w-full' width={227} height={48} alt='logo' src='/images/logo.png' />
            </Link>
        </nav>
    );
};

export default Navbar;