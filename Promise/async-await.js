async function fetchDogData() {
    try {
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        const data = await response.json();
        console.log(data.message);
    } catch(error) {
        console.error('Error fetching dog data:', error);
    }
}

fetchDogData();