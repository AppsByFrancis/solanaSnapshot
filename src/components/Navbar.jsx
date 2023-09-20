import { logo } from '../assets'
import { useState } from 'react';
import {findCollection} from './findFunction.js';

const Navbar = () => {
    const [ searchInput, setSearchInput ] = useState("") 

    return(
        <nav className='w-full flex md: justify-between p-4'>
            <div className='md:flex-[0.5] flex-initial justify-center items-center'>
                <a href='https://indigilabs.com/'><img src={logo} alt='logo' className='w-32 cursor-pointer'/></a>
            </div>
            <div>
            <input className="text-sm rounded" type="text"
                placeholder="Search NFT collection"
                onChange={event => setSearchInput(event.target.value)}
                value={searchInput} />
                <button onClick={() => findCollection(searchInput)} className='bg-indigo-500 ml-2'>clickME</button>
            </div>
        </nav>
    )
}

export default Navbar;