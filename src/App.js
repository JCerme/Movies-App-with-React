import Movies from './components/Movies'

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
              <div className="search">
                  <h3 className="title">Buscador:</h3>
                  <form>
                      <input type="text" id="search_field" />
                      <button id="search">Buscar</button>
                  </form>
              </div>

              <div className="add">
                  <h3 className="title">Añadir pelicula:</h3>
                  <form>
                      <input type="text" id="title" placeholder="Titulo" />
                      <textarea id="description" placeholder="Descripción"></textarea>
                      <button type="submit" id="save">Guardar</button>
                  </form>
              </div>
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
