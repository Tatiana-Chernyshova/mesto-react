// import logo from './logo.svg';
import './App.css';
import Header from './Header';
import headerLogo from './images/header-logo.svg'; 

function App() {
  return (
    <body class="page">
    <div className="page__container">
      <Header />
      <main className="content page__content">
      <section className="profile content__profile">
        <div className="profile__avatar-container">
          <img src="<%=require('./images/avatar.jpg')%>" alt="Аватар" className="profile__avatar" />
          <div className="profile__avatar-edit"></div>
        </div>
        <div className="profile__info">
          <div className="profile__text">
            <h1 className="profile__name"></h1>
            <p className="profile__about"></p>
          </div>
          <button className="profile__button profile__button_edit" type="button" aria-label="Редактировать"></button>
        </div>
        <button className="profile__button profile__button_add" type="button" aria-label="Добавить"></button>
      </section>
      <section className="elements content__elements">
      </section>
    </main>
    <footer className="footer page__footer">
      <p className="footer__copyright">&copy; 2020 Mesto Russia</p>
    </footer>
    <article className="overlay page__overlay page__overlay_type_edit">
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
    </template> 
    </div>
    </body>
  );
}

export default App;
