

const findCollection = async (address) => {
    // const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

    // const rateLimitedAsyncFunc = async (owner, amount) => {
    //     while (true) { // keep trying until successful or non 429 error
    //         try {
    //             await asyncFunc(owner, amount);
    //             break; // exit loop if successful
    //         } catch (err) {
    //             if (err.message.includes('429')) { // check for 429 status in the error
    //                 console.log("Rate limited! Waiting before retry...");
    //                 await sleep(1000 * 10); // wait for 10 seconds before retrying
    //             } else {
    //                 throw err; // if error is not 429, throw it
    //             }
    //         }
    //     }
    // };


    var myHeaders = new Headers();
    myHeaders.append("x-api-key", "DusIOcbkZAl81jAt");


    var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow',
    };


    try {
        const rawCollection = await fetch(`https://api.shyft.to/sol/v1/collections/get_nfts?network=mainnet-beta&collection_address=${address}&page=26&size=15`, requestOptions)
        console.log(rawCollection.headers)
        const jsonCollection =  await rawCollection.json();
        const nftsOfCollection = await jsonCollection.result?.nfts;
        // const totalPages = await jsonCollection.result?.total_pages;
        

        if(nftsOfCollection === undefined){
            findCollection(address)
            
        } 




        // let allNFTs = [];

        // for (let page = 1; page <= totalPages; page++) {
        //          await sleep(2000);
                 
                 
        //          const rawPageResponse = await fetch(`https://api.shyft.to/sol/v1/collections/get_nfts?network=mainnet-beta&collection_address=${address}&page=${page}&size=15`, requestOptions);
        //          const jsonPageData = await rawPageResponse?.json();
        //          const nfts = await jsonPageData.result?.nfts;
        //          allNFTs = allNFTs.concat(nfts);
                 
        //          await sleep(2000);

        // }

        // console.log(allNFTs); // This should print all the NFTs

        // console.log(nftsOfCollection) 
        // console.log(totalPages)
        
    } catch (err) {
        console.error(err)
    }

}
findCollection("8A6NtZj2gJKTHuiCjoPhkXGWDb3FK4v7DAsq9GhtwAZx")
export { 
    findCollection 
}