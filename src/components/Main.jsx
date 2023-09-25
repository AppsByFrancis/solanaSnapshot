import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import PropTypes from 'prop-types';
import './main.css'
import { placeholder } from '../assets';

import { copy } from '../assets'


const Main = ({ data }) => {

        return(
            <div id="mainSection" className='flex items-center justify-center md:p-20 mt-20'>
                <div className='grid w-full m-auto gap-5 p-10 overflow-hidden grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 3xl:grid-cols-8'>
                    {data.map((item, index) => {
                        return(
                            
                            <div className="box-border border-2 border-[#767676] pb-3 rounded-2xl" key={index}>
                                <LazyLoadImage src={item.image_uri}
                                width={"100%"} height={"auto"}
                                placeholderSrc={placeholder}
                                effect="blur"
                                className='rounded-2xl'
                                />
                                <div className="flex flex-col p-3 text-[1em] text-[#BBB7B7]">
                                    <h1 className='text-[#31cbff] mb-4'><strong>{item.name}</strong></h1>
                                    <div className='flex'>
                                        <h1><span className='text-[#FFFFFF] mr-2'><strong>Owner:</strong></span></h1>
                                        <button className="cursor-pointer" onClick={async() => {await navigator.clipboard.writeText(item.owner); alert(`Copied Owner Address: ${item.owner} to clipboard!`)}}><img id="copy" src={copy} className="cursor-pointer" width="20px"/></button>
                                    </div>
                                    <div className='flex'>
                                        <h1><span className='text-[#FFFFFF] mr-2'><strong>Mint Address:</strong></span></h1>
                                        <button className="cursor-pointer" onClick={async() => {await navigator.clipboard.writeText(item.mint); alert(`Copied Owner Address: ${item.mint} to clipboard!`)}}><img id="copy" src={copy} className="cursor-pointer" width="20px"/></button>
                                    </div>
                                </div>
                            </div> 
                        )

                    })}
                </div>
            </div>
    )
}

Main.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        owner: PropTypes.string.isRequired,
        mint: PropTypes.string,
        image_uri: PropTypes.string
    })).isRequired
};

export default Main;