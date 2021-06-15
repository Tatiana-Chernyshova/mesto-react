import api from "../utils/API";

import React, {useContext} from 'react';
import Card from "./Card";
// import App from '../App.css';

// function handleEditAvatarClick() {
//   const popup = document.querySelector('.page__overlay_type_avatar');
//   popup.classList.add('page__overlay_active');
// }

// function handleEditProfileClick() {
//   const popup = document.querySelector('.page__overlay_type_edit');
//   popup.classList.add('page__overlay_active');
// }

// function handleAddPlaceClick() {
//   const popup = document.querySelector('.page__overlay_type_add');
//   popup.classList.add('page__overlay_active');
// }

function Main(props) {
  // userName, userDescription и userAvatar.
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

  
  // React.useEffect(() => {
  //   Promise.all([api.getUserData(), api.getCards()])
  // .then(([userData, card]) => {
  //   user = userData;
  //   userInfo.setUserInfo(user);
  //   cardList.renderItems(card);
  // })
  // .catch(e => { console.log(e) })
  // }

  // function handleUserAvatar() {
  //   setuserAvatar(true);
  //   console.log(userAvatar);
  // }


  return (
    <main className="content page__content">
      <section className="profile content__profile">
        <div className="profile__avatar-container">
          <img 
          // src={`${userAvatar}`}
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
        {/* {console.log(cards)} */}
      {cards.map((obj) => (
    //   {
    //   // console.log(obj);
    //   console.log(obj.name);
    //   console.log(obj.link);
    //   console.log(obj.likes.length);
    //   // .link .length
    //   // style={{ backgroundImage: `url(${userAvatar})` }}

      <Card card={obj} onCardClick={props.onCardClick}/>
        )
        )}
  </section>
  </main>
  );
}

export default Main;
