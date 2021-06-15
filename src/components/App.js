// import logo from './logo.svg';
// import '../index.css';
import React, { useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import Card from "./Card";

// import headerLogo from './images/header-logo.svg';

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isImagePopupOpen, setImagePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  

  function handleIsEditProfilePopupOpen() {
    setIsEditProfilePopupOpen(true);
    // console.log(isEditProfilePopupOpen);
    // const popup = document.querySelector(".page__overlay_type_edit");
  }
  function handleIsAddPlacePopupOpen() {
    setIsAddPlacePopupOpen(true);
    // console.log(isAddPlacePopupOpen);
    // const popup = document.querySelector(".page__overlay_type_add");
  }
  function handleIsEditAvatarPopupOpen() {
    setIsEditAvatarPopupOpen(true);
    // console.log(isEditAvatarPopupOpen);
    // const popup = document.querySelector(".page__overlay_type_avatar");
  }
  function handleCardClick(el) {
    setImagePopupOpen(true);
    setSelectedCard(el);
// console.log(selectedCard);
// console.log(olo);
  }

  function closeAllPopups() {
    const popup = document.querySelector(".page__overlay_active");
    popup.classList.remove("page__overlay_active");
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setImagePopupOpen(false);
  }

  // function handleEditAvatarClick() {
  //   const popup = document.querySelector('.page__overlay_type_avatar');
  //   // po.classList.add('page__overlay_active');
  //   console.log(popup);
  // }

  // function handleEditProfileClick() {
  //   const popup = document.querySelector('.page__overlay_type_edit');
  //   popup.classList.add('page__overlay_active');
  // }

  // function handleAddPlaceClick() {
  //   const popup = document.querySelector('.page__overlay_type_add');
  //   popup.classList.add('page__overlay_active');
  // }

  return (
    <body class="page">
      <div className="page__container">
        <Header />
        <Main
          // op={oppen}
          // olo={console.log('025&&')}
          // onAddPlace={handleEditProfileClick}
          // onEditAvatar={handleEditAvatarClick}
          //   onEditProfile={handleAddPlaceClick}
          // handleLike={handleDislike}
          onAddPlace={handleIsAddPlacePopupOpen}
          onEditAvatar={handleIsEditAvatarPopupOpen}
          onEditProfile={handleIsEditProfilePopupOpen}
          onCardClick={handleCardClick}
          // handleIsAddPlacePopupOpen
        />
        <Footer />
        {/* <PopupWithForm /> */}
        <PopupWithForm
          title="Редактировать профиль"
          name="edit"
          // isOpen="active"
          isOpen={isEditProfilePopupOpen && `active`}
          onClose={closeAllPopups}
        >
          <>
            <input
              type="url"
              className="popup__input popup__input_el_image popup__input_el_image-avatar"
              id="avatar-input"
              name="link"
              placeholder="Ссылка на картинку"
              value=""
              required
            />
            <span className="avatar-input-error popup__input-error"></span>
          </>
        </PopupWithForm>
        <PopupWithForm
          title="Новое место"
          name="add"
          // isOpen="active"
          isOpen={isAddPlacePopupOpen && `active`}
          onClose={closeAllPopups}
        >
          <>
            <input
              type="text"
              className="popup__input popup__input_el_caption"
              id="caption-input"
              name="name"
              placeholder="Название"
              value=""
              minlength="2"
              maxlength="30"
              required
            />
            <span className="caption-input-error popup__input-error">
              Вы пропустили это поле.
            </span>
            <input
              type="url"
              className="popup__input popup__input_el_image"
              id="image-input"
              name="link"
              placeholder="Ссылка на картинку"
              value=""
              required
            />
            <span className="image-input-error popup__input-error"></span>
          </>
        </PopupWithForm>

        <PopupWithForm
          title="Обновить аватар"
          name="avatar"
          // isOpen="active"
          isOpen={isEditAvatarPopupOpen && `active`}
          onClose={closeAllPopups}
        >
          <>
            <input
              type="url"
              className="popup__input popup__input_el_image popup__input_el_image-avatar"
              id="avatar-input"
              name="link"
              placeholder="Ссылка на картинку"
              value=""
              required
            />
            <span className="avatar-input-error popup__input-error"></span>
          </>
        </PopupWithForm>
        <ImagePopup
          // title="Обновить аватар"
          // name="avatar"
          // isOpen="active"
          isOpen={isImagePopupOpen && `active`}
          onClose={closeAllPopups}
          card={selectedCard}
          />

        {/* {isAddPlacePopupOpen ? console.log('popopo') : console.log('p45445o')} */}
        {/* <PopupWithForm title="Вы уверены?" name="delete" />
      // <PopupWithForm title="Обновить аватар" name="avatar" />  */}

        {/* <article className="overlay page__overlay page__overlay_type_edit">
      <form className="popup popup_type_form popup_do_edit" name="form-edit" novalidate>
        <h2 className="popup__heading">Редактировать профиль</h2>
        <fieldset className="popup__input-container">
          <input type="text" className="popup__input popup__input_el_name" id="name-input" name="name" placeholder="Ваше имя"
            value="" minlength="2" maxlength="40" required />
          <span className="name-input-error popup__input-error"></span>
          <input type="text" className="popup__input popup__input_el_about" id="about-input" name="about"
            placeholder="Краткое описание" value="" minlength="2" maxlength="200" required />
          <span className="about-input-error popup__input-error"></span>
          <button type="submit" className="popup__submit" aria-label="Сохранить">Сохранить</button>
        </fieldset>
        <button className="popup__button popup__button_close" type="button" aria-label="Закрыть"></button>
      </form>
    </article>
    <article className="overlay page__overlay page__overlay_type_add">
      <form className="popup popup_type_form popup_do_add" name="form-add" novalidate>
        <h2 className="popup__heading">Новое место</h2>
        <fieldset className="popup__input-container">
          <input type="text" className="popup__input popup__input_el_caption" id="caption-input" name="name" placeholder="Название"
            value="" minlength="2" maxlength="30" required />
          <span className="caption-input-error popup__input-error">Вы пропустили это поле.</span>
          <input type="url" className="popup__input popup__input_el_image" id="image-input" name="link"
            placeholder="Ссылка на картинку" value="" required />
          <span className="image-input-error popup__input-error"></span>
          <button type="submit" className="popup__submit" aria-label="Создать">Создать</button>
        </fieldset>
        <button className="popup__button popup__button_close" type="button" aria-label="Закрыть"></button>
      </form>
    </article>
    <article className="overlay page__overlay page__overlay_type_look">
      <div className="popup popup_type_image popup_do_look">
        <figure className="popup__figure">
          <img src="#" alt="#" className="popup__image"/>
          <figcaption className="popup__caption"></figcaption>
        </figure>
        <button className="popup__button popup__button_close" type="button" aria-label="Закрыть"></button>
      </div>
    </article>
    <article className="overlay page__overlay page__overlay_type_delete">
      <form className="popup popup_type_form popup_do_delete" name="form-delete" novalidate>
        <h2 className="popup__heading">Вы уверены?</h2>
        <fieldset className="popup__input-container">
          <button type="submit" className="popup__submit" aria-label="Удалить">Да</button>
        </fieldset>
        <button className="popup__button popup__button_close" type="button" aria-label="Закрыть"></button>
      </form>
    </article>
    <article className="overlay page__overlay page__overlay_type_avatar">
      <form className="popup popup_type_form popup_do_avatar" name="form-avatar" novalidate>
        <h2 className="popup__heading">Обновить аватар</h2>
        <fieldset className="popup__input-container">
          <input type="url" className="popup__input popup__input_el_image popup__input_el_image-avatar" id="avatar-input" name="link"
            placeholder="Ссылка на картинку" value="" required />
          <span className="avatar-input-error popup__input-error"></span>
          <button type="submit" className="popup__submit" aria-label="Создать">Сохранить</button>
        </fieldset>
        <button className="popup__button popup__button_close" type="button" aria-label="Закрыть"></button>
      </form>
    </article>
    <template className="template">
      <div className="elements__item">
        <img src="#" alt="#" className="elements__image" />
        <div className="elements__box">
          <h2 className="elements__caption"></h2>
          <div className="elements__like-box">
            <button className="elements__button-like" type="button" aria-label="Мне нравится"></button>
            <p className="elements__number"></p>
          </div>
        </div>
        <button className="elements__button-delete elements__button-delete_hidden" type="button" aria-label="Удалить"></button>
      </div>
    </template>  */}
      </div>
    </body>
  );
}

export default App;
