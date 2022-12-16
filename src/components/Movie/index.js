import "./Movie.css";

export default function Movie({ name, isLiked, onDelete, onToggleLike }) {
  return (
    <section className="movie">
      <h2 className={`movie__title${isLiked ? " movie__title--is-liked" : ""}`}>
        {name}
      </h2>
      <div className="movie__actions">
        <button
          onClick={onToggleLike}
          className="movie__button"
          type="button"
          title={isLiked ? "unlike movie" : "like movie"}
        >
          {isLiked ? "👍" : "👎"}
        </button>
        <button
          onClick={onDelete}
          className="movie__button"
          type="button"
          title="delete movie"
        >
          ✕
        </button>
      </div>
    </section>
  );
}
