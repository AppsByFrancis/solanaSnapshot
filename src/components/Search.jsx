import { useState } from "react";
import PropTypes from 'prop-types';



const Search = ({  onChildClick, disabled }) => {
    const [ searchInput, setSearchInput ] = useState("")
    // useEffect(() => {
    //     const searchClick = document.getElementById('searchQueryInput');
    //     const handleClick = () => {
    //         if(Event.key === "Enter"){
    //             Event.preventDefault();
    //             document.getElementById('searchQuerySubmit').click()
    //         }
    //     };
    
    //     searchClick.addEventListener('click', handleClick);
    
    //     // Cleanup: remove the event listener when the component is unmounted
    //     return () => {
    //       searchClick.removeEventListener('click', handleClick);
    //     };
    //   }, []);  
      
      

    return(
            <div id="searchDiv" className="mt-20 flex w-full justify-center items-center opacity-0 ease-in-out duration-700">
                <div className="flex w-full flex-col items-center justify-center text-center">
                    <h1 className="text-[#31cbff] text-3xl mb-6 text-left">Look up NFT collection</h1>
                    <div id="searchBar" className="searchBar">
                        <input id="searchQueryInput" type="text" name="searchQueryInput" placeholder="Search" value={searchInput} onChange={event => setSearchInput(event.target.value)} />
                        <button id="searchQuerySubmit" disabled={Boolean(disabled)} onClick={() => searchInput.length ? onChildClick(searchInput): console.log('hi')} type="submit" name="searchQuerySubmit">
                            <svg style={{width:"24px", height:"24px"}} viewBox="0 0 24 24"><path fill="#666666" d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
                        </svg>
                        </button>
                    </div>
                </div>

            </div>
    )
}

Search.propTypes = {
    onChildClick: PropTypes.func.isRequired,
    disabled: PropTypes.bool.isRequired
}

export default Search;