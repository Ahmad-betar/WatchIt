


const useFetch = () => {


    const sendRequest = async (requestConfig, applyData) => {

        try {
            



        } catch (error) {
            
        }

    }

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzhjYzk0OTQyNjAzOGQ0ZDMxNjM4NzRhNDUzYjZmNyIsInN1YiI6IjY0N2NiMzNiMjYzNDYyMDBkYzQyOTA4MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aPpohnre8sQZWIRRfZCAAynIfm4g5q_jLBewR9dXlcA'
        }
    };

    fetch('https://api.themoviedb.org/3/network/network_id/images', options)
        .then(response => response.json())
        .then(response => console.log(response))




}


export default useFetch;