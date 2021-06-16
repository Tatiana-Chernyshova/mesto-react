import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";


function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isImagePopupOpen, setImagePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});


  function handleIsEditProfilePopupOpen() {
    setIsEditProfilePopupOpen(true);
  }

  function handleIsAddPlacePopupOpen() {
    setIsAddPlacePopupOpen(true);
  }

  function handleIsEditAvatarPopupOpen() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleCardClick(el) {
    setImagePopupOpen(true);
    setSelectedCard(el);
  }

  function closeAllPopups() {
    const popup = document.querySelector(".page__overlay_active");
    popup.classList.remove("page__overlay_active");
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setImagePopupOpen(false);
  }

  return (
    <div className="page">
      <div className="page__container">
        <Header />

        <Main
          onAddPlace={handleIsAddPlacePopupOpen}
          onEditAvatar={handleIsEditAvatarPopupOpen}
          onEditProfile={handleIsEditProfilePopupOpen}
          onCardClick={handleCardClick}
        />

        <Footer />

        <PopupWithForm
          title="Редактировать профиль"
          name="edit"
          isOpen={isEditProfilePopupOpen && `active`}
          onClose={closeAllPopups}
        >
          <>
            <input
              type="text"
              className="popup__input popup__input_el_name"
              id="name-input" name="name"
              placeholder="Ваше имя"
              value=""
              minLength="2"
              maxLength="40"
              required />
            <span className="name-input-error popup__input-error">
            </span>
            <input
              type="text"
              className="popup__input popup__input_el_about"
              id="about-input"
              name="about"
              placeholder="Краткое описание"
              value=""
              minLength="2"
              maxLength="200"
              required />
            <span className="about-input-error popup__input-error"></span>
          </>
        </PopupWithForm>

        <PopupWithForm
          title="Новое место"
          name="add"
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
              minLength="2"
              maxLength="30"
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
          isOpen={isImagePopupOpen && `active`}
          onClose={closeAllPopups}
          card={selectedCard}
        />
      </div>
    </div>
  );
}

export default App;
