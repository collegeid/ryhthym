# Rhythm Markmap

Welcome to the Rhythm Markmap project! This repository hosts the backend services and API endpoints for accessing film, TV, and music data. Our dataset is powered by applications built with Elixir and Phoenix 1.7.7, utilizing Elixir version 1.16. Below is a detailed overview of the available endpoints and their functionalities.

## Accessing the Roadmap

To access the roadmap for this project, please visit the following link:

[Roadmap](https://collegeid.github.io/rythym_markmap/)

### Important Note

Please note that only requests from registered CORS URLs are allowed.

## Dataset (Film, TV, Music)

### General Endpoints

- **GET /:** Displays a Copyright message. [Example](https://rhythm.gigalixirapp.com/)
  
### Music Endpoints

- **GET /album/musics:** Displays music albums (Spotify). [Example](https://rhythm.gigalixirapp.com/album/musics)
- **GET /check/album/:id:** Displays album details. [Example](https://rhythm.gigalixirapp.com/check/album/2lZzryqflrZLO9YDjnlkMz) (Juicy Luicy)
- **GET /tracks/album/:id:** Displays tracks from an album. [Example](https://rhythm.gigalixirapp.com/tracks/album/2lZzryqflrZLO9YDjnlkMz) (Juicy Luicy)
- **GET /tracks/find/:query:** Searches for tracks based on a query. [Example](https://rhythm.gigalixirapp.com/tracks/find/juicy luicy)

### TV Endpoints

- **GET /tv:** Displays a list of TV shows (filtered for adult content). [Example](https://rhythm.gigalixirapp.com/tv)
- **GET /tv/:id:** Displays TV show details. [Example](https://rhythm.gigalixirapp.com/tv/1)
- **GET /tv/find/:query:** Searches for TV shows based on a query (TV show title). [Example](https://rhythm.gigalixirapp.com/tv/find/breaking)

### Movie Endpoints

- **GET /movies:** Displays a list of movies (filtered for adult content). [Example](https://rhythm.gigalixirapp.com/movies)
- **GET /movies/:id:** Displays movie details. [Example](https://rhythm.gigalixirapp.com/movies/823464)
- **GET /movies/find/:query:** Searches for movies based on a query (movie title). [Example](https://rhythm.gigalixirapp.com/movies/find/inception)

### Combined Search Endpoints

- **GET /cinema/find/:query:** Searches for both movies and TV shows based on a query. [Example](https://rhythm.gigalixirapp.com/cinema/find/juicy luicy)
- **GET /trendings/multi:** Displays combined trending albums, movies, and TV shows. [Example](https://rhythm.gigalixirapp.com/trendings/multi)

### Multi Trending Endpoints

- **GET /trendings/multi:** Displays combined trending albums, movies, and TV shows. [Example](https://rhythm.gigalixirapp.com/trendings/multi)

## Additional Endpoints

### Lite Endpoints

#### Trending and Albums

- **GET /lite/trendings:** Displays minimalized combined trending albums, movies, and TV shows.
- **GET /lite/albums/musics:** Displays minimalized music albums.

#### Cinema (TV and Movies)

- **GET /lite/cinema/tv:** Displays minimalized TV shows.
- **GET /lite/cinema/movies:** Displays minimalized movies.

## NB

Feel free to open issues or pull requests for any improvements or features you'd like to suggest.

