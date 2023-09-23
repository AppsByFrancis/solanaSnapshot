import { useState, useEffect } from 'react';
import { Navbar, Main, Search, Headline } from './components';

// function groupByOwner(data) {
//   return data.reduce((acc, item) => {
//     if (!acc[item.owner]) {
//       acc[item.owner] = [];
//     }
//     acc[item.owner].push(item);
//     return acc;
//   }, {});
// }

const App = () => {
  const [ disabled, setDisabled ] = useState(false)
  const [ dataArray, setDataArray ] = useState([])
  // Inside your App component
  useEffect(() => {
      console.log(dataArray);
  }, [dataArray]);
  


const findCollection = async (address, retryCount = 0) => {
  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

  var myHeaders = new Headers();
  myHeaders.append("x-api-key", "QdzpLKyW5djeUO2T");


  var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow',
  };

  
  try {
    const rawCollection = await fetch(`https://api.shyft.to/sol/v1/collections/get_nfts?network=mainnet-beta&collection_address=${address}&page=1&size=80`, requestOptions)
    const jsonCollection = await rawCollection.json();
    const nftsOfCollection = await jsonCollection.result?.nfts;
    const totalPages = await jsonCollection.result?.total_pages;
    
    
    if(nftsOfCollection === undefined && retryCount < 3){
      await sleep(1000)
      findCollection(address)
      
    } else if(retryCount >= 3){
      console.log("Reached max retry attempts")
      retryCount= 0;
    }
    
    setDisabled(true)
    
    
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

    // const owner = allNFTs.map( item => {
    //   const IMAGE = item.image_uri
    //   const NAME = item.name;
    //   const OWNER = item.owner;
    //   const MINT = item.mint;

    //   const owner = {
    //     image: [IMAGE],
    //     name: [NAME],
    //     owner: OWNER,
    //     mint: [MINT]

    //   }

    //   return owner
    // })
  
  //   const removeDuplicates = (persons) => {
  //     const ownerMap = new Map();
  //     const unique = [];
  
  //     for (const person of persons) {
  //         if (ownerMap.has(person.owner)) {
  //           console.log(person.owner)
  //             // If the owner exists in our map, increment the count of the original object
  //             ownerMap.get(person.owner).image.push(person.image[0]);
  //             ownerMap.get(person.owner).name.push(person.name[0]);
  //             ownerMap.get(person.owner).mint.push(person.mint[0]);
  //         } else {
  //             // If the owner doesn't exist in our map, add the person object to the map and to the unique array
  //             ownerMap.set(person.owner, person);
  //             unique.push(person);
  //         }
  //     }
  //     if(unique[unique.length] == undefined){
  //         unique.pop()
  //     } 


  //     return unique;
  // };



    setDataArray(allNFTs)
    
    setTimeout(() => {
      setDisabled(false)
    })

    

  } catch (err) {
    console.error(err)
        }
        
      }
      
  return (
    <div className='min-h-screen'>
      <div className='gradient-bg-welcome'>
        <Navbar />
        <Search onChildClick={findCollection} disabled={disabled}/>
        <Headline />
        {/* <Card data={dataArray} zIndex="" /> */}
        {dataArray.length > 1 && <Main data={dataArray}/>}
      </div>
    </div>
  )
}

export default App
