
import '../styles/Home.css';
const Home = () => {
  return (
    <section className="home">
      <h2>Welcome to Kodigo Music!</h2>
      <p>Your favorite place to explore music.</p>

      {/* Ranking de las canciones más escuchadas */}
      <section className="ranking">
        <h3>Top 5 Most Played Songs</h3>
        <ol>
          <li>1. Creep by Radiohead</li>
          <li>2. Clinnt Eastwood by Gorillaz</li>
          <li>3. Karma Police by Radiohead</li>
          <li>4. Apocalypse by Cigarettes after sex</li>
          <li>5. Stop Crying Your Heart Out by Oasis</li>
        </ol>
      </section>

      {/* Playlists populares */}
      <section className="playlists">
        <h3>Popular Playlists</h3>
        <div className="playlist-grid">
          <div className="playlist-item">
            <img src="https://i.scdn.co/image/ab67616d0000b2735d9565a4747fc84bc2653d5c" alt="Pop Hits" />
            <p>Pop Hits</p>
          </div>
          <div className="playlist-item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMh4C7JPsxvr58opvs1hQlssfmzR52mlIL9A&s" alt="Rock Classics" />
            <p>Rock Classics</p>
          </div>
          <div className="playlist-item">
            <img src="https://i.scdn.co/image/ab67616d0000b2735427d49d14a6dd0ab505c55b" alt="Hip-Hop Essentials" />
            <p>Hip-Hop Essentials</p>
          </div>
          <div className="playlist-item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5euz_zKu7lbvvsnmqMa5mUCVTha7fj1nN_g&s" alt="Jazz Vibes" />
            <p>Jazz Vibes</p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Home;
