import PropTypes from 'prop-types';


const Main = ({ data }) => {

    return(
        <div className='flex w-full justify-center items-center flex-wrap'>
            {
                data.map((item, index) => {
                   return(
                    <div key={index}>{item.name}</div>
                   )
                })
            }
        </div>

    )
}

Main.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        owner: PropTypes.string.isRequired,
        mint: PropTypes.string.isRequired,
    })).isRequired
};

export default Main;