import { useState, useEffect } from 'react';
import { Navbar, Main, Search } from './components'


const App = () => {

  const [ dataArray, setDataArray ] = useState([])
  // Inside your App component
  useEffect(() => {
      console.log(dataArray);
  }, [dataArray]);
  


const findCollection = async (address, retryCount = 0) => {
  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

  var myHeaders = new Headers();
  myHeaders.append("x-api-key", "DusIOcbkZAl81jAt");


  var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow',
  };

  
  try {
    const rawCollection = await fetch(`https://api.shyft.to/sol/v1/collections/get_nfts?network=mainnet-beta&collection_address=${address}&page=1&size=80`, requestOptions)
    const jsonCollection =  await rawCollection.json();
    const nftsOfCollection = await jsonCollection.result?.nfts;
    const totalPages = await jsonCollection.result?.total_pages;
    
    
    if(nftsOfCollection === undefined && retryCount < 3){
      await sleep(1000)
      findCollection(address)
      
    } else if(retryCount >= 3){
      console.log("Reached max retry attempts")
    }
    
    
    
    let allNFTs = [];
    
    
    for (let page = 1; page <= totalPages; page++) {
      await sleep(1000)
      
      console.log("started")
      const rawPageResponse = await fetch(`https://api.shyft.to/sol/v1/collections/get_nfts?network=mainnet-beta&collection_address=${address}&page=${page}&size=80`, requestOptions);
      const jsonPageData = await rawPageResponse?.json();
      const nfts = await jsonPageData.result?.nfts;
      allNFTs = allNFTs.concat(nfts);
      
      console.log(`Fetch: ${page}`)
    }
    setDataArray(allNFTs)
    
    

    

  } catch (err) {
    console.error(err)
        }
        
      }
      
  return (
    <div className='min-h-screen'>
      <div className='gradient-bg-welcome'>
        <Navbar />
        <Search onChildClick={findCollection}/>
        {dataArray.length > 1 && <Main data={dataArray}/>}
      </div>
    </div>
  )
}

export default App
