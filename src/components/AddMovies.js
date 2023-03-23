import { useState, useEffect} from 'react';

function AddMovies(){
    const [newMovie, setNewMovie] = useState({})
    
    function addMovie(e){
        e.preventDefault();

        const pelicula = {
            title: e.target.title.value,
            overview: e.target.overview.value
        }

        setNewMovie(pelicula)
    }

    useEffect(() =>{
        console.log(newMovie)
    }, [newMovie]);

    return (
        <div className="add">
            <h3 className="title">Añadir pelicula:</h3>
            <form onSubmit={(e) => addMovie(e)}>
                <input type="text" id="title" name="title" placeholder="Titulo" />
                <textarea id="overview" name="overview" placeholder="Descripción"></textarea>
                <button type="submit" name="submit" id="save">Guardar</button>
            </form>
        </div>
    )
}

export default AddMovies;