# Rhythym Movie TV by Stellar Team

Welcome to the Rhythym Markmap project! This repository hosts the backend services and API endpoints for accessing film, TV, and music data. Our dataset is powered by applications built with Elixir and Phoenix 1.7.7, utilizing Elixir version 1.16. Below is a detailed overview of the available endpoints and their functionalities.

To access the backend services and API endpoints, please visit: [Rhythym API](https://rhytym.gigalixirapp.com/)

## Accessing the Roadmap

To access the roadmap for this project, please visit the following link:

[Roadmap](https://collegeid.github.io/rythym_markmap/)

### Important Note

Please note that only requests from registered CORS URLs are allowed.

## Dataset (Film, TV, Music)
- **Main** : [Preview](https://rhytym.gigalixirapp.com/) (rhytym.gigalixir.com/)
- **Mirror** : [Preview](https://rhytym2.gigalixirapp.com/) (rhytym2.gigalixir.com/)
### General Endpoints

- **GET /:** Displays a Copyright message. [Preview](https://rhytym.gigalixirapp.com/)
  
### Music Endpoints

- **GET /album/musics:** Displays music albums (Spotify). [Preview](https://rhytym.gigalixirapp.com/album/musics)
- **GET /check/album/:id:** Displays album details. [Preview](https://rhytym.gigalixirapp.com/check/album/2lZzryqflrZLO9YDjnlkMz) (Sentimental- Juicy Luicy)
- **GET /tracks/album/:id:** Displays tracks from an album. [Preview](https://rhytym.gigalixirapp.com/tracks/album/2lZzryqflrZLO9YDjnlkMz) (Sentimental - Juicy Luicy)
- **GET /tracks/find/:query:** Searches for tracks based on a query. [Preview](https://rhytym.gigalixirapp.com/tracks/find/juicy%20luicy). (Juicy Luicy)

### TV Endpoints

- **GET /tv:** Displays a list of TV shows (filtered for adult content). [Preview](https://rhytym.gigalixirapp.com/tv)
- **GET /tv/:id:** Displays TV show details. [Preview](https://rhytym.gigalixirapp.com/tv/1)
- **GET /tv/find/:query:** Searches for TV shows based on a query (TV show title). [Preview](https://rhytym.gigalixirapp.com/tv/find/breaking)

### Movie Endpoints

- **GET /movies:** Displays a list of movies (filtered for adult content). [Preview](https://rhytym.gigalixirapp.com/movies)
- **GET /movies/:id:** Displays movie details. [Preview](https://rhytym.gigalixirapp.com/movies/823464)
- **GET /movies/find/:query:** Searches for movies based on a query (movie title). [Preview](https://rhytym.gigalixirapp.com/movies/find/inception)

### Combined Search Endpoints

- **GET /cinema/find/:query:** Searches for both movies and TV shows based on a query. [Preview](https://rhytym.gigalixirapp.com/cinema/find/spiderman%202)
- **GET /trendings/multi:** Displays combined trending albums, movies, and TV shows. [Preview](https://rhytym.gigalixirapp.com/trendings/multi)

### Multi Trending Endpoints

- **GET /trendings/multi:** Displays combined trending albums, movies, and TV shows. [Preview](https://rhytym.gigalixirapp.com/trendings/multi)

## Additional Endpoints

### Lite Endpoints

#### Trending and Albums

- **GET /lite/trendings:** Displays minimalized combined trending albums, movies, and TV shows. [Preview](https://rhytym.gigalixirapp.com/lite/trendings)
- **GET /lite/albums/musics:** Displays minimalized music albums. [Preview](https://rhytym.gigalixirapp.com/lite/albums/musics)

#### Cinema (TV and Movies)

- **GET /lite/cinema/tv:** Displays minimalized TV shows. [Preview](https://rhytym.gigalixirapp.com/lite/cinema/tv)
- **GET /lite/cinema/movies:** Displays minimalized movies. [Preview](https://rhytym.gigalixirapp.com/lite/cinema/movies)

## Contributing

We welcome contributions from the community to improve and expand our services. Feel free to open issues or pull requests for any improvements or features you'd like to suggest.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
