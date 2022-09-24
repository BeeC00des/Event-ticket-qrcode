  // let [responseData, setResponseData] = React.useState([])
  // let [artistData, setArtistData] = React.useState([])

    // const options = {
    //   method: 'GET',
    //   url: 'https://youtube-music1.p.rapidapi.com/v2/search',
    //   params: {query: 'eminem'},
    //   headers: {
    //     'X-RapidAPI-Key': '00ec9b22ebmsh606d8ad6fdb8db8p1651eejsnc5d86aad3b6e',
    //     'X-RapidAPI-Host': 'youtube-music1.p.rapidapi.com'
    //     }
    // };
    // const base = {
    //   method: 'GET',
    //   url: 'https://youtube-music1.p.rapidapi.com/v2/get_artist',
    //   params: {artist_id: 'UCedvOgsKFzcK3hA5taf3KoQ'},
    //   headers: {
    //     'X-RapidAPI-Key': '00ec9b22ebmsh606d8ad6fdb8db8p1651eejsnc5d86aad3b6e',
    //     'X-RapidAPI-Host': 'youtube-music1.p.rapidapi.com'
    //   }
    // };
    
    // useEffect(()=>{
      // getAllVideos();
      // getAllArtist();
    // }, [])

    // const getAllVideos =() =>{
    //   axios.request(options).then(function (response) {
    //     const allSongs = response.data.result.songs
    //     let newArr = []

    //     for(let i = 0; i < 4; i++){
    //       let index = Math.floor(Math.random() * allSongs.length-1);
    //       newArr.push(allSongs[index])
    //     }

    //     console.log(newArr);
    //     setResponseData(newArr)
  
    //   }).catch(function (error) {
    //     console.error(error);
    //   });
    // } 

    // const getAllArtist =() =>{
    //   axios.request(base).then(function (response) {
    //     const allArtist = response.data.result.albums;
    //     let newArtist = []

    //     for(let i = 0; i < 4; i++){
    //       let index = Math.floor(Math.random() * allArtist.length-1);
    //       newArtist.push(allArtist[index])
    //     }

    //     console.log(newArtist);
    //     setArtistData(newArtist)
  
    //   }).catch(function (error) {
    //     console.error(error);
    //   }); 
    // } 