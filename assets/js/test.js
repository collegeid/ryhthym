fetch('https://rhytym.gigalixirapp.com/lite/cinema/movies')
.then(response => response.json())
.then(output_film => {
    console.log('Data film:', output_film)
})