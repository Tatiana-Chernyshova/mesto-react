import React from "react";
import PopupWithForm from "./PopupWithForm";
import CurrentUserContext from "../contexts/CurrentUserContext";

function EditAvatarPopup(props) {
  const [avatar, setAvatar] = React.useState("");
  const currentUser = React.useContext(CurrentUserContext);
  const avatarRef = React.useRef();

  function handleChangeAvatar(e) {
    setAvatar(e.target.value);
  }

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();
    // Передаём значения управляемых компонентов во внешний обработчик
    props.onUpdateUser({
      avatar: avatarRef.current.value
    });
  }

  return (
    <PopupWithForm
      title="Обновить аватар"
      name="avatar"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <input
        type="url"
        className="popup__input popup__input_el_image popup__input_el_image-avatar"
        id="avatar-input"
        name="link"
        placeholder="Ссылка на картинку"
        defaultValue=""
        required
        ref={avatarRef}
        onChange={handleChangeAvatar}
      />
      <span className="avatar-input-error popup__input-error"></span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
