function Card(props) {

  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <div className="elements__item">
      <img
        className="elements__image"
        src={props.card.link} 
        alt={props.card.name} 
        onClick={handleClick}
      />
      <div className="elements__box">
        <h2 className="elements__caption">{props.card.name}</h2>
        <div className="elements__like-box">
          <button
            className="elements__button-like"
            type="button"
            aria-label="Мне нравится"
          ></button>
          <p className="elements__number">{props.card.likes.length}</p>
        </div>
      </div>
      <button
        className="elements__button-delete elements__button-delete_hidden"
        type="button"
        aria-label="Удалить"
      ></button>
    </div>
  );
}

export default Card;
