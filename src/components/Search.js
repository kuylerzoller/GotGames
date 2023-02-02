import React, { useEffect, useState } from 'react'
import '../App.css';
import { VideoGameCard } from './VideoGameCard';

export const Search = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  useEffect( () => {
    fetch(`/api/games?key=${process.env.REACT_APP_RAWG_KEY}&search=${query}`)
    .then(res => res.json())
    .then((data) => {
      if(!data.errors) {
        setResults(data.results);
      }
      else{
        setResults([]);
      }
    });
}, []);

  const onChange = e => {
    e.preventDefault();
    
    setQuery(e.target.value);

    fetch(`/api/games?key=${process.env.REACT_APP_RAWG_KEY}&search=${e.target.value}`)
      .then(res => res.json())
      .then((data) => {
        if(!data.errors) {
          setResults(data.results);
        }
        else{
          setResults([]);
        }
      });
  };

  return (
      <div className='search-container'>
        <div className='add-content'>
          <div className='input-wrapper'>
            <input type = "text" placeholder='Search for a game' value = {query} onChange={onChange}></input>
          </div>
        </div>

        {results.length > 0 &&(
          <ul className='games-container'>
            {results.map((game) => (
              <li key={game.id}>
                <VideoGameCard game={game} />
              </li>
            ))}

          </ul>
        )}
      </div>
    
  )
}
