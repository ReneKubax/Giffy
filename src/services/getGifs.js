
const apiKey = 'fbN1jIYabq9RqA10ZpHkvACXyv2Y6Cwa'


export default function getGifs({keyword = 'pan'} = {}){
    const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=25&offset=0&rating=g&lang=en`
return fetch(apiURL)
  .then(res => res.json(0))
  .then(response => {
    const {data} = response
    if(Array.isArray(data)){
    const gifs = data.map(image => {
        const {images, title, id} = image
        const {url} = images.downsized_medium
        return {title, id, url}
    })
    return gifs 
    }
  })
}