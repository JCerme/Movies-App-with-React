import { useState, useEffect } from 'react';

function Search() {
    const [toSearch, setToSearch] = useState('');

    useEffect(()=>{
        console.log(toSearch)
    }, [toSearch])

    return (
        <div className="search">
            <h3 className="title">Buscador:</h3>
            <form>
                <input type="text" id="search_field" onChange={(e) => setToSearch(e.target.value)} placeholder={toSearch}/>
            </form>
        </div>
    )
}

export default Search;