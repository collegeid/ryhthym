<h1>Roadmap</h1>
<a href="https://collegeid.github.io/rythym_markmap/">Klik Di sini</a>
<h2>Dataset (Film, TV, Music) </h2>
<a href="https://rhytym.gigalixirapp.com/">v0.0.1 (Elixir & Phoenix)</a>
Methode : GET
Endpoint: 

* GET /welcome: Menampilkan pesan selamat datang

- GET /api/album/musics: Menampilkan album musik (spotify)
- GET /api/check/album/:id: Menampilkan detail album
- GET /api/tracks/album/:id: Menampilkan daftar lagu dari album
- GET /api/tracks/find/:query: Mencari lagu berdasarkan query

- GET /tv: Menampilkan daftar acara TV (TV dewasa terfilter)
- GET /movies: Menampilkan daftar film (Film unsur dewasa terfilter)

- GET /tv/:id: Menampilkan detail acara TV
- GET /movies/:id: Menampilkan detail film

- GET /tv/find/:query: Mencari acara TV berdasarkan query (judul acara tv)
- GET /movies/find/:query: Mencari film berdasarkan query (judul acara tv)

- GET /cinema/find/:query: Mencari film dan acara TV berdasarkan query
