import Movies from './components/Movies';
import Search from './components/Search';
import AddMovies from './components/AddMovies';

function App() {
  return (
    <div className="layout">
        <header className="header">
          <div className="container">
            <div className="logo">
                <div className="play"></div>
            </div>
            <span>MisPelis</span>
          </div>
        </header>
        <div className="banner container">
          <div className="overlay"></div>
          <h1>¡Encuentra las mejores película de tu país!</h1>
        </div>
        <div className="container contenedor">
          <Movies />
          <aside className="lateral">
            <div className="filters">
              <Search />
              <AddMovies/>
            </div>
          </aside>
        </div>
        <footer className="footer">
          <div className="container">
            &copy; Máster en React - JCerme
          </div>
        </footer>
    </div>

  );
}

export default App;
