import api from "../utils/API";
import React from 'react';
import Card from "./Card";
// import { useContext } from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";


function Main(props) {

  // const [userName, setUserName] = React.useState('');
  // const [userDescription, setUserDescription] = React.useState('');
  // const [userAvatar, setUserAvatar] = React.useState('');
  
  const currentUser = React.useContext(CurrentUserContext);

  // function handleCardLike(card) {
  //   // Снова проверяем, есть ли уже лайк на этой карточке
  //   const isLiked = card.likes.some(i => i._id === currentUser._id);
  //   // Отправляем запрос в API и получаем обновлённые данные карточки
  //   api.changeLikeCardStatus(card._id, !isLiked)
  //     .then(newCard => {setCards(state => state.map(c => c._id === card._id ? newCard : c));
  //   });
  // }


  
  // function handleCardDelete(card) {
  //   api.deleteCard(card._id)
  //     .then(() => {
  //         const newCards = cards.filter(e => e._id !== card._id);
  //         setCards(newCards);
  //   });
  // }

  // React.useEffect(() => {
  //   api.getUserData()
  //     .then(res => {
  //       console.log(currentUser);
  //       console.log(res);
  //       // setUserAvatar(res.avatar)
  //       // setUserName(res.name)
  //       // setUserDescription(res.about)
  //     })
  //     .catch(e => { console.log(e) })
  // }, [])

  // React.useEffect(() => {
  //   api.getCards()
  //     .then(card => {
  //       setCards(card)
  //     })
  //     .catch(e => { console.log(e) })
  // }, [])

  return (
    <main className="content page__content">
      <section className="profile content__profile">
        <div className="profile__avatar-container">
          <img
            alt="" className="profile__avatar"
            style={{ backgroundImage: `url(${currentUser.avatar})` }}
          />
          <button
            className="profile__button profile__avatar-edit"
            onClick={props.onEditAvatar}
          ></button>
        </div>
        <div className="profile__info">
          <div className="profile__text">
            <h1 className="profile__name">{currentUser.name}</h1>
            <p className="profile__about">{currentUser.about}</p>
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
        {props.cards.map((obj) => (
          <Card 
          card={obj} 
          onCardClick={props.onCardClick}
          onCardLike={props.onCardLike}
          onCardDelete={props.onCardDelete}
          key={obj._id}
          />
        ) )}
      </section>
    </main>
  );
}

export default Main;
