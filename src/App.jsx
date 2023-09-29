
import { useState, useEffect } from 'react';
import { Navbar, Search, Headline, Loader, Main, groupByOwner, Download } from './components';


const App = () => {
  const [ disabled, setDisabled ] = useState(false);
  const [ dataArray, setDataArray ] = useState([]);
  const [ loader, setLoader ] = useState(null);
  const [ page, setPage ] = useState("");
  const [ totPages, setTotPages] = useState("");
  const [downloadUrl, setDownloadUrl] = useState(null);



  useEffect(() => {
      const triggerBottom = window.innerHeight / 4;
      const mainSection = document.getElementById('mainSection');
      const extendDiv = document.getElementById('searchBar');
      const headline = document.getElementById('headline');
      const searchDiv = document.getElementById('searchDiv');

      const expand = () => {

        if(extendDiv.getBoundingClientRect().top < triggerBottom){
          mainSection?.classList.remove('md:p-20')
        } else {
          mainSection?.classList.add('md:p-20')
        }
       
    }

    window.addEventListener('scroll', expand)
    window.addEventListener('load', () =>{
      setTimeout(() => {
        headline.style.opacity = 1;
        searchDiv.style.opacity = 1;
      }, 200)
    })
    return () => {
      window.removeEventListener('scroll', expand)
    }
  }, [dataArray]);



const findCollection = async (address, retryCount = 0) => {
  setLoader(true)

  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
  var myHeaders = new Headers();
  myHeaders.append("x-api-key", "QdzpLKyW5djeUO2T");


  var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow',
  };

  
  try {
    const rawCollection = await fetch(`https://api.shyft.to/sol/v1/collections/get_nfts?network=mainnet-beta&collection_address=${address}&page=1&size=80`, requestOptions);
    const jsonCollection = await rawCollection.json();
    const nftsOfCollection = jsonCollection.result?.nfts;
    const totalPages =  jsonCollection.result?.total_pages;

    let allNFTs = [];

    setTotPages(`${totalPages}`)
    setDisabled(true)
    
    if(nftsOfCollection === undefined && retryCount < 3){
      await sleep(1000)
      findCollection(address)
      
    } else if(retryCount >= 3){
      console.log("Reached max retry attempts")
      retryCount= 0;
    }
    
    
    
    
    
    for (let page = 1; page <= totalPages; page++) {
      await sleep(1000)
      

      const rawPageResponse = await fetch(`https://api.shyft.to/sol/v1/collections/get_nfts?network=mainnet-beta&collection_address=${address}&page=${page}&size=80`, requestOptions);
      const jsonPageData = await rawPageResponse?.json();
      const nfts = await jsonPageData.result?.nfts;
      allNFTs = allNFTs.concat(nfts);
      

      setPage(`${page}`)
      setDataArray([allNFTs])
    }

    if(allNFTs.length >= 0){
      const grouped = groupByOwner(allNFTs)
      setDownloadUrl([grouped])

    
    }
    
    setTimeout(() => {
      setDisabled(false)
      setLoader(false)
      setPage("")
      setTotPages("")
    })


  } catch (err) {
    console.error(err)
        }
        
      }

  return (
    <div className='min-h-screen'>
      <div className='gradient-bg-welcome'>
        <Navbar />
        <Headline />
        <Search onChildClick={findCollection} disabled={disabled}/>
        {loader === false && dataArray.length > 0 && <Download data={downloadUrl} />}
        {loader && <Loader page={page} totalPages={totPages}/>}
        {
          dataArray.map((item, index) => {
            return(
              <Main key={index} data={item}/>
            )
          })
        }
      </div>
    </div>
  )
}

export default App;