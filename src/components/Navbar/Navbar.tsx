import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    return (
        <nav>
            <Link href='/'>
                <Image className='absolute z-30 left-1/2 transform -translate-x-1/2 top-14' width={227} height={48} alt='logo' src='/images/logo.png' />
            </Link>
        </nav>
    );
};

export default Navbar;