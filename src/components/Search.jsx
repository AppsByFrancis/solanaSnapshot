import { useState } from "react";
import PropTypes from 'prop-types';



const Search = ({ onChildClick, disabled }) => {
    const [ searchInput, setSearchInput ] = useState("");
      
    const handleInputChange = (event) => {
        setSearchInput(event.target.value)
    }  

    const handleSubmit = (event) => {
        event.preventDefault()
        if(searchInput.length > 20){
            onChildClick(searchInput)
        } else {
            alert('Your input might be too short')
        }
    }

   

    return(
            <div id="searchDiv" className="mt-20 flex w-full justify-center items-center opacity-0 ease-in-out duration-700">
                <div className="flex w-full flex-col items-center justify-center text-center">
                    <h1 className="text-[#31cbff] text-3xl mb-6 text-left">Look up NFT collection</h1>
                        <form onSubmit={handleSubmit} id="searchBar" className="searchBar">
                            <input
                            id="searchQueryInput"
                            name="searchQueryInput"
                            type="text"
                            value={searchInput}
                            onChange={handleInputChange}
                            placeholder="Search NFT Collections"
                            className="pr-8"
                            />
                            <button id="searchQuerySubmit" disabled={Boolean(disabled)} type="submit" name="searchQuerySubmit">
                                <svg className="searchIcon" style={{width:"24px", height:"24px"}} viewBox="0 0 24 24">
                                    <path fill="#666666" d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
                                </svg>
                            </button>
                        </form>
                </div>
            </div>
    )
}

Search.propTypes = {
    onChildClick: PropTypes.func.isRequired,
    disabled: PropTypes.bool.isRequired
}

export default Search;