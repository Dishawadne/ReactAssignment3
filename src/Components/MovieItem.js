import React from 'react';

function MovieItem({ movie, addFavourite, onSave }) {
  return (
    <li className="list-group-item mb-5 d-flex flex-column align-items-center">
      <img src={movie.posterPath} alt={movie.title} className="img-thumbnail" />
      <h5 className="text-center">{movie.title}</h5>
      <button className="btn btn-primary mt-2" onClick={() => addFavourite(movie.id)}>
        Add to Favourites
      </button>
    </li>
  );
}

export default MovieItem;
