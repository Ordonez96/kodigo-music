
import '../styles/Music.css'; 

const Music = () => {
  return (
    <section className="music">
      <h2>Explore Music</h2>
      <p>Discover your favorite genres and latest albums.</p>

      {/* Géneros musicales */}
      <section className="genres">
        <h3>Popular Genres</h3>
        <section className="genre-grid">
          <div className="genre-item">Pop</div>
          <div className="genre-item">Rock</div>
          <div className="genre-item">Hip-Hop</div>
          <div className="genre-item">Jazz</div>
          <div className="genre-item">Electronic</div>
          <div className="genre-item">Classical</div>
        </section>
      </section>

      {/* Álbumes recientes */}
      <section className="recent-albums">
        <h3>Recent Albums</h3>
        <div className="album-grid">
          <div className="album-item">
            <img src="https://upload.wikimedia.org/wikipedia/en/5/55/Radioheadthebends.png" alt="Album 1" />
            <p>The Bends by RadioHead</p>
          </div>
          <div className="album-item">
            <img src="https://upload.wikimedia.org/wikipedia/en/f/fd/Coldplay_-_Parachutes.png" alt="Album 2" />
            <p>Parachutes by ColdPlay</p>
          </div>
          <div className="album-item">
            <img src="https://cdns-images.dzcdn.net/images/cover/ebd6fc49c3c87cbd5441424f151c04f2/0x1900-000000-80-0-0.jpg" alt="Album 3" />
            <p>21st Century Breakdown by Green Day</p>
          </div>
          <div className="album-item">
            <img src="https://m.media-amazon.com/images/I/71n0xmxpw7L.jpg" alt="Album 4" />
            <p>The Eminem Show by Eminem</p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Music;
