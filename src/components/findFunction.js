

const findCollection = async (address) => {
    const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

    var myHeaders = new Headers();
    myHeaders.append("x-api-key", "DusIOcbkZAl81jAt");


    var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow',
    };


    try {
        const rawCollection = await fetch(`https://api.shyft.to/sol/v1/collections/get_nfts?network=mainnet-beta&collection_address=${address}&page=1&size=60`, requestOptions)
        const jsonCollection =  await rawCollection.json();
        const nftsOfCollection = await jsonCollection.result?.nfts;
        const totalPages = await jsonCollection.result?.total_pages;
        

        if(nftsOfCollection === undefined){
            findCollection(address)
            
        } 




        let allNFTs = [];

        for (let page = 1; page <= totalPages; page++) {
                await sleep(1000)
                 
                 console.log("started")
                const rawPageResponse = await fetch(`https://api.shyft.to/sol/v1/collections/get_nfts?network=mainnet-beta&collection_address=${address}&page=${page}&size=60`, requestOptions);
                const jsonPageData = await rawPageResponse?.json();
                const nfts = await jsonPageData.result?.nfts;
                allNFTs = allNFTs.concat(nfts);
                
                console.log(`Fetch: ${page}`)
                
            }
            
            
            console.log(allNFTs)

        
    } catch (err) {
        console.error(err)
    }

}

export { 
    findCollection 
}