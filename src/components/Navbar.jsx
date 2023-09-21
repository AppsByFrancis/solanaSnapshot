import { logo } from '../assets'


// import { findCollection } from './findFunction.js';

const Navbar = () => {

    

    return(
        <nav className='w-full flex md: justify-between p-4'>
            <div className='md:flex-[0.5] flex-initial justify-center items-center'>
                <a href='https://indigilabs.com/'><img src={logo} alt='logo' className='w-32 cursor-pointer'/></a>
            </div>

        </nav>
    )
}

  export default Navbar;