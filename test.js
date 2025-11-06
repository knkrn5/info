const lat = 28.6532
const lon = 77.2108
const API_KEY = "your_api_key_here"

function location() {
    fetch(`https://us1.locationiq.com/v1/reverse?key=${API_KEY}&lat=${lat}&lon=${lon}&format=json&`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error('Error fetching location data:', error);
        });
}

location();