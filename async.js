// async function fetchData() {
//     // asychronous operation goes in here
//     const data = await fetch('https://jsonplaceholder.typicode.com/users')
//     const response = await data.json();
//     console.log(response);
// }



const fetchAlbums = async () => {
    // asychronous operation goes in here 
    try {
        const data2 = await fetch('https://jsonplaceholder.typicode.com/users')
        const res = await data2.json()
        console.log(res)
    } catch(error) {
        console.log(error)
    }
}

// fetchData()
fetchAlbums()