<h1>Roadmap</h1>
<a href="https://collegeid.github.io/rythym_markmap/">Click Here</a>
<hr>

<p><strong>Note:</strong> Only registered with our CORS URL allowed.</p>
<p>Best regards, Stellar Team</p>


<h2>Dataset (Film, TV, Music)</h2>
Preview: <a href="https://rhytym.gigalixirapp.com">v0.0.1 (Elixir & Phoenix)</a>

<h3>General Endpoints</h3>
<ul>
  <li>
    <strong>GET /</strong> - Displays a Copyright message
    <br>Example: <a href="https://rhytym.gigalixirapp.com/">GET /</a>
  </li>
</ul>

<h3>Music Endpoints</h3>
<ul>
  <li>
    <strong>GET /api/album/musics</strong> - Displays music albums (Spotify)
    <br>Example: <a href="https://rhytym.gigalixirapp.com/album/musics">GET /album/musics</a>
  </li>
  <li>
    <strong>GET /api/check/album/:id</strong> - Displays album details
    <br>Example: <a href="https://rhytym.gigalixirapp.com/check/album/2lZzryqflrZLO9YDjnlkMz">GET /check/album/2lZzryqflrZLO9YDjnlkMz (Juicy Luicy)</a>
  </li>
  <li>
    <strong>GET /api/tracks/album/:id</strong> - Displays tracks from an album
    <br>Example: <a href="https://rhytym.gigalixirapp.com/tracks/album/2lZzryqflrZLO9YDjnlkMz">GET /tracks/album/2lZzryqflrZLO9YDjnlkMz (Juicy Luicy)</a>
  </li>
  <li>
    <strong>GET /api/tracks/find/:query</strong> - Searches for tracks based on a query
    <br>Example: <a href="https://rhytym.gigalixirapp.com/tracks/find/juicy luicy">GET /tracks/find/juicy luicy</a>
  </li>
</ul>

<h3>TV Endpoints</h3>
<ul>
  <li>
    <strong>GET /tv</strong> - Displays a list of TV shows (filtered for adult content)
    <br>Example: <a href="https://rhytym.gigalixirapp.com/tv">GET /tv</a>
  </li>
  <li>
    <strong>GET /tv/:id</strong> - Displays TV show details
    <br>Example: <a href="https://rhytym.gigalixirapp.com/tv/1">GET /tv/1</a>
  </li>
  <li>
    <strong>GET /tv/find/:query</strong> - Searches for TV shows based on a query (TV show title)
    <br>Example: <a href="https://rhytym.gigalixirapp.com/tv/find/breaking">GET /tv/find/breaking</a>
  </li>
</ul>

<h3>Movie Endpoints</h3>
<ul>
  <li>
    <strong>GET /movies</strong> - Displays a list of movies (filtered for adult content)
    <br>Example: <a href="https://rhytym.gigalixirapp.com/movies">GET /movies</a>
  </li>
  <li>
    <strong>GET /movies/:id</strong> - Displays movie details
    <br>Example: <a href="https://rhytym.gigalixirapp.com/movies/823464">GET /movies/823464</a>
  </li>
  <li>
    <strong>GET /movies/find/:query</strong> - Searches for movies based on a query (movie title)
    <br>Example: <a href="https://rhytym.gigalixirapp.com/movies/find/inception">GET /movies/find/inception</a>
  </li>
</ul>

<h3>Combined Search Endpoints</h3>
<ul>
  <li>
    <strong>GET /cinema/find/:query</strong> - Searches for both movies and TV shows based on a query
    <br>Example: <a href="https://rhytym.gigalixirapp.com/cinema/find/juicy luicy">GET /cinema/find/juicy luicy</a>
  </li>
  <li>
    <strong>GET /trendings/multi</strong> - Displays combined trending albums, movies, and TV shows
    <br>Example: <a href="https://rhytym.gigalixirapp.com/trendings/multi">GET /trendings/multi</a>
  </li>
</ul>

<h3>Multi Trending Endpoints</h3>
<ul>
  <li>
    <strong>GET /trendings/multi</strong> - Displays combined trending albums, movies, and TV shows
    <br>Example: <a href="https://rhytym.gigalixirapp.com/trendings/multi">GET /trendings/multi</a>
  </li>
</ul>

<hr>
