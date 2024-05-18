<h1>Roadmap</h1>
<a href="https://collegeid.github.io/rythym_markmap/">  Click Here</a>

<h2>Dataset (Film, TV, Music)</h2>
Preview : <a href="https://rhytym.gigalixirapp.com">v0.0.1 (Elixir & Phoenix)</a>

<h3>General Endpoints</h3>
<ul>
  <li>
    <strong>GET /</strong> - Menampilkan Copyright message
    <br>Example: <a href="https://rhytym.gigalixirapp.com/">GET /</a>
  </li>
  <li>
    <strong>GET /welcome</strong> - Menampilkan pesan selamat datang
    <br>Example: <a href="https://rhytym.gigalixirapp.com/welcome">GET /welcome</a>
  </li>
</ul>

<h3>Music Endpoints</h3>
<ul>
  <li>
    <strong>GET /api/album/musics</strong> - Menampilkan album musik (Spotify)
    <br>Example: <a href="https://rhytym.gigalixirapp.com/album/musics">GET /api/album/musics</a>
  </li>
  <li>
    <strong>GET /api/check/album/:id</strong> - Menampilkan detail album
    <br>Example: <a href="https://rhytym.gigalixirapp.com/check/album/2lZzryqflrZLO9YDjnlkMz">GET /api/check/album/2lZzryqflrZLO9YDjnlkMz (Juicy Luicy)</a>
  </li>
  <li>
    <strong>GET /api/tracks/album/:id</strong> - Menampilkan daftar lagu dari album
    <br>Example: <a href="https://rhytym.gigalixirapp.com/tracks/album/2lZzryqflrZLO9YDjnlkMz">GET /api/tracks/album/2lZzryqflrZLO9YDjnlkMz (Juicy Luicy)</a>
  </li>
  <li>
    <strong>GET /api/tracks/find/:query</strong> - Mencari lagu berdasarkan query
    <br>Example: <a href="https://rhytym.gigalixirapp.com/tracks/find/juicy luicy">GET /api/tracks/find/juicy luicy</a>
  </li>
</ul>

<h3>TV Endpoints</h3>
<ul>
  <li>
    <strong>GET /tv</strong> - Menampilkan daftar acara TV (TV dewasa terfilter)
    <br>Example: <a href="https://rhytym.gigalixirapp.com/tv">GET /tv</a>
  </li>
  <li>
    <strong>GET /tv/:id</strong> - Menampilkan detail acara TV
    <br>Example: <a href="https://rhytym.gigalixirapp.com/tv/1">GET /tv/1</a>
  </li>
  <li>
    <strong>GET /tv/find/:query</strong> - Mencari acara TV berdasarkan query (judul acara TV)
    <br>Example: <a href="https://rhytym.gigalixirapp.com/tv/find/breaking">GET /tv/find/breaking</a>
  </li>
</ul>

<h3>Movie Endpoints</h3>
<ul>
  <li>
    <strong>GET /movies</strong> - Menampilkan daftar film (Film unsur dewasa terfilter)
    <br>Example: <a href="https://rhytym.gigalixirapp.com/movies">GET /movies</a>
  </li>
  <li>
    <strong>GET /movies/:id</strong> - Menampilkan detail film
    <br>Example: <a href="https://rhytym.gigalixirapp.com/movies/823464">GET /movies/823464</a>
  </li>
  <li>
    <strong>GET /movies/find/:query</strong> - Mencari film berdasarkan query (judul film)
    <br>Example: <a href="https://rhytym.gigalixirapp.com/movies/find/inception">GET /movies/find/inception</a>
  </li>
</ul>

<h3>Combined Search Endpoints</h3>
<ul>
  <li>
    <strong>GET /cinema/find/:query</strong> - Mencari film beserta acara TV  berdasarkan query
    <br>Example: <a href="https://rhytym.gigalixirapp.com/cinema/find/juicy luicy">GET /cinema/find/juicy luicy</a>
  </li>
  <li>
    <strong>GET /trendings/multi</strong> - Menampilkan gabungan trending Album, Movies, dan TV
    <br>Example: <a href="https://rhytym.gigalixirapp.com/trendings/multi">GET /trendings/multi</a>
  </li>
</ul>
