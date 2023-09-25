import './loader.css'
import PropTypes from 'prop-types'

const Loader = ({ totalPages, page }) => {
    return(
        <>  
            <div className="lds-roller absolute w-[100px] mt-3 flex justify-center right-[50%]"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
            {page >= "1" && <h1 className='text-white absolute mt-10 flex justify-center right-[50%]'>
                {page}/{totalPages}
            </h1>}
        </>
    )
}

Loader.propTypes = {
    totalPages: PropTypes.string.isRequired,
    page: PropTypes.string.isRequired
}


export default Loader;

