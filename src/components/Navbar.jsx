import { logo } from '../assets'

const Navbar = () => {

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }
    

    return(
        <nav className='w-full flex md: justify-between p-4'>
            <div className='fixed p-3 z-[2] md:flex-[0.5] flex-initial justify-center items-center'>
                <a onClick={scrollTop}><img src={logo} alt='logo' className='w-32 cursor-pointer'/></a>
            </div>

        </nav>
    )
}

  export default Navbar;