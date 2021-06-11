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

// function PopupWithForm() {
//   return (
//     <article className="overlay page__overlay">
//       <form 
//       // className="popup popup_type_form popup_do_edit" 
//       className={`popup popup_type_form popup_do_${this.props.name}`}  name={`form-${this.props.name}`} novalidate>
//         <h2 className="popup__heading">{this.props.title}</h2>
//         <fieldset className="popup__input-container">

//           <button type="submit" className="popup__submit" aria-label="Сохранить">Сохранить</button>
//         </fieldset>
//         <button className="popup__button popup__button_close" type="button" aria-label="Закрыть"></button>
//       </form>
//     </article>
//   );
// }



function PopupWithForm(props) {

    // Используем JavaScript-шаблон для склейки значения атрибута
    // const className = `switch ${this.props.color} ${this.state.isActive ? 'on' : 'off'}`;

    return (
      <article className="overlay page__overlay">
      <form 
      // className="popup popup_type_form popup_do_edit" 
      className={`popup popup_type_form popup_do_${props.name}`}  
      name={`form-${props.name}`} 
      novalidate>
        <h2 className="popup__heading">{props.title}</h2>
        <fieldset className="popup__input-container">
        {/* {props.children} */}
          <button type="submit" className="popup__submit" aria-label="Сохранить">Сохранить</button>
        </fieldset>
        <button className="popup__button popup__button_close" type="button" aria-label="Закрыть"></button>
      </form>
    </article>
    );
  
}


// ReactDOM.render((
//   <>
//     <PopupWithForm title="Редактировать профиль" name="edit" children=`{
//                 <input type="url" className="popup__input popup__input_el_image popup__input_el_image-avatar" id="avatar-input" name="link"
//                 placeholder="Ссылка на картинку" value="" required />
//               <span className="avatar-input-error popup__input-error"></span>
//     }` />
//     <PopupWithForm title="Новое место" name="add" />
//     <PopupWithForm title="Вы уверены?" name="delete" />
//     <PopupWithForm title="Обновить аватар" name="avatar" /> 
//   </>
// ), document.querySelector('#root'));





export default PopupWithForm;
