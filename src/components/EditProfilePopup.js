import React from 'react';
import PopupWithForm from "./PopupWithForm";
import CurrentUserContext from "../contexts/CurrentUserContext";


function EditProfilePopup(props) {
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');
  const currentUser = React.useContext(CurrentUserContext);

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeDescription(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();
    // Передаём значения управляемых компонентов во внешний обработчик
    props.onUpdateUser({
      name,
      about: description,
    });
  }

// После загрузки текущего пользователя из API
// его данные будут использованы в управляемых компонентах.
  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]); 

  return (
//     <PopupWithForm
//     title="Редактировать профиль"
//     name="edit"
//     isOpen={props.isOpen}
//     onClose={props.onClose}
//     onSubmit={handleSubmit}
//   >
//     <input
//       type="text"
//       className="popup__input popup__input_el_name"
//       id="name-input"
//       name="name"
//       placeholder="Ваше имя"
//       defaultValue=""
//       minLength="2"
//       maxLength="40"
//       required
//       onChange={handleChangeName}
//     />
//     <span className="name-input-error popup__input-error"></span>
//     <input
//       type="text"
//       className="popup__input popup__input_el_about"
//       id="about-input"
//       name="about"
//       placeholder="Краткое описание"
//       defaultValue=""
//       minLength="2"
//       maxLength="200"
//       required
//       onChange={handleChangeDescription}
//     />
//     <span className="about-input-error popup__input-error"></span>
//   </PopupWithForm>

     <PopupWithForm
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
          </PopupWithForm>
  );
}

export default EditProfilePopup;
