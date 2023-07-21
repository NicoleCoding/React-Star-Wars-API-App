import React from 'react';
import './style.css';
import React, { useEffect, useState } from 'react';

export default function App() {
  const [search, setSearch] = useState('');
  const [films, setFilms] = useState([]);
  const [title, setTitle] = useState('');
  const [director, setDirector] = useState('');
  const [producer, setProducer] = useState('');
  const [openingCrawl, setOpeningCrawl] = useState('');
  const [releaseDate, setReleaseDate] = useState('');

  useEffect(() => {
    fetch('https://swapi.dev/api/films/')
      .then((response) => response.json())
      .then((data) => setFilms(data.results));
  }, []);

  function showDetails() {
    for (let film of films) {
      if (film.title.toLowerCase() == search) {
        setTitle(film.title);
        setDirector(film.director);
        setProducer(film.producer);
        setOpeningCrawl(film.opening_crawl);
        setReleaseDate(film.release_date);
        break;
      }
    }
  }

  function changeContent(event) {
    setSearch(event.target.value);
  }

  return (
    <div>
      <h1>Star Wars API </h1>
      <div>
        <input type="text" onChange={changeContent} />
        <button disabled={films.length === 0} onClick={showDetails}>
          Visa film
        </button>
      </div>
      <div>Title: {title}</div>
      <div>Director: {director}</div>
      <div>Producer: {producer}</div>
      <div>Opening crawl: {openingCrawl}</div>
      <div>Release date: {releaseDate}</div>
    </div>
  );
}
