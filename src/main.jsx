import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
import { useState } from "react";
import PropTypes from 'prop-types';


const Search = ({  onChildClick }) => {
    const [ searchInput, setSearchInput ] = useState("")

    return(
        <div className="flex w-full justify-center items-center">
            <input className="text-sm rounded bg-transparent" id="input" type="text"
                placeholder="Search NFT collection"
                onChange={event => setSearchInput(event.target.value)}
                value={searchInput} />
                <button onClick={() => onChildClick(searchInput)} className='ml-2 p-1 text-white' style={{backgroundColor: "#4dc2fc", height: "32px"}}>GO</button>
            </div> 
    )
}

Search.propTypes = {
    onChildClick: PropTypes.func.isRequired
}

export default Search;