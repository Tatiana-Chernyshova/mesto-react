


function ImagePopup(props) {

    // Используем JavaScript-шаблон для склейки значения атрибута
    // const className = `switch ${this.props.color} ${this.state.isActive ? 'on' : 'off'}`;

    return (
      <article className={`overlay page__overlay page__overlay_type_look page__overlay_${props.isOpen}`}>
      <div className="popup popup_type_image popup_do_look">
        <figure className="popup__figure">
          <img 
          src={props.card.link} 
          // alt="#" className="popup__image"
          // style={{ backgroundImage: `url(${props.card.link})` }}
          className="popup__image"
          />
          {/* {console.log(`1111 ${props.card.link}`)} */}
          <figcaption className="popup__caption">{props.card.name}</figcaption>
        </figure>
        <button className="popup__button popup__button_close" type="button" aria-label="Закрыть"
        onClick={props.onClose}
        ></button>
      </div>
    </article>

    //   <article className={`overlay page__overlay page__overlay_${props.isOpen}`}>
    //   <form 
    //   // className="popup popup_type_form popup_do_edit" 
    //   className={`popup popup_type_form popup_do_${props.name}`}  
    //   name={`form-${props.name}`} 
    //   novalidate>
    //     <h2 className="popup__heading">{props.title}</h2>
    //     <fieldset className="popup__input-container">
    //     {props.children}
    //       <button type="submit" className="popup__submit" aria-label="Сохранить">Сохранить</button>
    //     </fieldset>
    //     <button className="popup__button popup__button_close" type="button" aria-label="Закрыть"
    //     onClick={props.onClose}
    //     ></button>
    //   </form>
    // </article>
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





export default ImagePopup;
