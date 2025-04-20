import './Modal.css'

function Modal({text, onModalCancel, onModalConfirm}) {
  return (
    <div>
      <div className="modal">
        <p className="modal__title">{text}</p>
        <div className="modal__buttons">
          <button className="btn btn__cancel" onClick={onModalCancel}>Cancel</button>
          <button className="btn" onClick={onModalConfirm}>Confirm</button>
        </div>
      </div>
      <div className="backdrop" />
    </div>
  );
}

export default Modal;