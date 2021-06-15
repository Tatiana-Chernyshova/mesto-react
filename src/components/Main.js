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

//   function hand() {
//     console.log("2")
//   }
//   function handleMouseLeave() {
//     console.log('Ну ты чего, нормально же общались!');
// }


  return (
    <main className="content page__content">
      <section className="profile content__profile">
        <div className="profile__avatar-container">
          <img src="" alt="Аватар" className="profile__avatar" />
          <button 
          className="profile__avatar-edit" 
          // onClick={props.onAddPlace}
          onClick={props.onEditAvatar}
          ></button>
        </div>
        <div className="profile__info">
          <div className="profile__text">
            <h1 className="profile__name"></h1>
            <p className="profile__about"></p>
          </div>
          <button 
          className="profile__button profile__button_edit" 
          type="button" 
          aria-label="Редактировать" 
          // onAddPlace={handleEditProfileClick}
          // op={props.oppen}
          // olo={hand}
          // onClick={props.op}
          onClick={props.onEditProfile}
          >
          </button>
        </div>
        <button 
        className="profile__button profile__button_add" 
        type="button" aria-label="Добавить" 
        // onEditProfile={handleAddPlaceClick}
        onClick={props.onAddPlace}
        >
        </button>
      </section>
      <section className="elements content__elements">
      </section>
  </main>
  );
}

export default Main;
