const lat = 28.6532
const lon = 77.2108

function location() {
    fetch(`https://us1.locationiq.com/v1/reverse?key=pk.afe408bf175dc1ac9bf57badd656a9a0&lat=${lat}&lon=${lon}&format=json&`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error('Error fetching location data:', error);
        });
}
location();