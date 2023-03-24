import { useState } from 'react';
import ListMovies from './components/ListMovies';
import Search from './components/Search';
import AddMovies from './components/AddMovies';

function App() {
  const [listState, setListState] = useState([])

  return (
    <div className="layout">
        <header className="header">
          <div className="container">
            <div className="logo">
                <div className="play"></div>
            </div>
            <span>MoviesPlus+</span>
          </div>
        </header>
        <div className="banner container">
          <div className="overlay"></div>
          <h1>¡Encuentra las mejores película de tu país!</h1>
        </div>
        <div className="container contenedor">
          <section id="content" className="content">
            <ListMovies listState={listState} setListState={setListState}/>
          </section>

          <aside className="lateral">
            <div className="filters">
              <Search listState={listState} setListState={setListState}/>
              <AddMovies setListState={setListState}/>
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
