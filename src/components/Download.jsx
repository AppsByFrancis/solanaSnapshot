import PropTypes from 'prop-types';
import FileDownload from 'js-file-download';

function Download ({ data }) {
    const download = async () => {
        await FileDownload(JSON.stringify(data), 'data.json' ) 
        console.log(data)
    }

  return (
    <div id="downloadButton" className='absolute w-[150px] mt-5 flex justify-center right-[50%] translate-x-[75px] cursor-pointer hover:scale-110 ease-in-out duration-300'>
      <button className='border-4 text-white p-3 hover:border-[#31cbff]' onClick={download}>List of NFT ownersL</button>
    </div>
  );
}
Download.propTypes = {
    data: PropTypes.array
};

export default Download;