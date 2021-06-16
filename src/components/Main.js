import api from "../utils/API";
import React from 'react';
import Card from "./Card";


function Main(props) {

  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getUserData()
      .then(res => {
        setUserAvatar(res.avatar)
        setUserName(res.name)
        setUserDescription(res.about)
      })
      .catch(e => { console.log(e) })
  }, [])

  React.useEffect(() => {
    api.getCards()
      .then(card => {
        setCards(card)
      })
      .catch(e => { console.log(e) })
  }, [])

  return (
    <main className="content page__content">
      <section className="profile content__profile">
        <div className="profile__avatar-container">
          <img
            alt="" className="profile__avatar"
            style={{ backgroundImage: `url(${userAvatar})` }}
          />
          <button
            className="profile__button profile__avatar-edit"
            onClick={props.onEditAvatar}
          ></button>
        </div>
        <div className="profile__info">
          <div className="profile__text">
            <h1 className="profile__name">{userName}</h1>
            <p className="profile__about">{userDescription}</p>
          </div>
          <button
            className="profile__button profile__button_edit"
            type="button"
            aria-label="Редактировать"
            onClick={props.onEditProfile}
          ></button>
        </div>
        <button
          className="profile__button profile__button_add"
          type="button"
          aria-label="Добавить"
          onClick={props.onAddPlace}
        ></button>
      </section>
      <section className="elements content__elements">
        {cards.map((obj) => (
          <Card 
          card={obj} 
          onCardClick={props.onCardClick}
          key={obj._id}
          />
        ) )}
      </section>
    </main>
  );
}

export default Main;
