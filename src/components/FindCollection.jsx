const FindCollection = ( adress ) => {
    var myHeaders = new Headers();
    myHeaders.append("x-api-key", "DusIOcbkZAl81jAt");

     var requestOptions = {
     method: 'GET',
     headers: myHeaders,
     redirect: 'follow'
};

const collection = fetch(`https://api.shyft.to/sol/v1/collections/get_nfts?network=mainnet-beta&collection_address=${adress}&page=1&size=5`, requestOptions)
  .then(response => response.text())
  .then(result => {
      const parsed = JSON.parse(result)
      return parsed.result.nfts
  }
    )
  .catch(error => console.log('error', error));
    return(
        <div>
            {collection}
        </div>
    )
}

export default FindCollection;