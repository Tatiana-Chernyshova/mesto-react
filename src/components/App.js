import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import api from "../utils/API";
import CurrentUserContext from "../contexts/CurrentUserContext";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isImagePopupOpen, setImagePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [currentUser, setCurrentUser] = React.useState({});

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
  
  function handleUpdateUser(el) {
    api.setUserData(el)
      .then(res => {
        setCurrentUser(res);
        console.log(currentUser);
      })
      .catch(e => { console.log(e) })  
      .finally(() =>{
        closeAllPopups();
      }) 
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setImagePopupOpen(false);
  }

  React.useEffect(() => {
    api.getUserData()
      .then(res => {
        setCurrentUser(res)
      })
      .catch(e => { console.log(e) })
  }, [])


  return (
    <CurrentUserContext.Provider value={currentUser}>
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

          <EditProfilePopup 
          isOpen={isEditProfilePopupOpen && `active`} 
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
          />

          <EditAvatarPopup 
          isOpen={isEditProfilePopupOpen && `active`} 
          onClose={closeAllPopups}
          // onUpdateUser={handleUpdateUser}
          />

          {/* <PopupWithForm
            title="Редактировать профиль"
            name="edit"
            isOpen={isEditProfilePopupOpen && `active`}
            onClose={closeAllPopups}
          >
            <input
              type="text"
              className="popup__input popup__input_el_name"
              id="name-input"
              name="name"
              placeholder="Ваше имя"
              defaultValue=""
              minLength="2"
              maxLength="40"
              required
            />
            <span className="name-input-error popup__input-error"></span>
            <input
              type="text"
              className="popup__input popup__input_el_about"
              id="about-input"
              name="about"
              placeholder="Краткое описание"
              defaultValue=""
              minLength="2"
              maxLength="200"
              required
            />
            <span className="about-input-error popup__input-error"></span>
          </PopupWithForm> */}

          <PopupWithForm
            title="Новое место"
            name="add"
            isOpen={isAddPlacePopupOpen && `active`}
            onClose={closeAllPopups}
          >
            <input
              type="text"
              className="popup__input popup__input_el_caption"
              id="caption-input"
              name="name"
              placeholder="Название"
              defaultValue=""
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
              defaultValue=""
              required
            />
            <span className="image-input-error popup__input-error"></span>
          </PopupWithForm>

          <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} />

          {/* <PopupWithForm
            title="Обновить аватар"
            name="avatar"
            isOpen={isEditAvatarPopupOpen && `active`}
            onClose={closeAllPopups}
          >
            <input
              type="url"
              className="popup__input popup__input_el_image popup__input_el_image-avatar"
              id="avatar-input"
              name="link"
              placeholder="Ссылка на картинку"
              defaultValue=""
              required
            />
            <span className="avatar-input-error popup__input-error"></span>
          </PopupWithForm> */}

          <ImagePopup
            isOpen={isImagePopupOpen && `active`}
            onClose={closeAllPopups}
            card={selectedCard}
          />
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
