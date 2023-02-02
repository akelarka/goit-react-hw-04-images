import PropTypes from 'prop-types';
import { Overlay, ModalWrapper } from './Modal.styled';
import { useEffect } from 'react';

export const Modal = ({ onClose, largeImageURL }) => {
  useEffect(() => {
    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  });

  const onKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  const onBackdropClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <Overlay onClick={onBackdropClick}>
      <ModalWrapper>
        <img src={largeImageURL} alt="" />
      </ModalWrapper>
    </Overlay>
  );
};

export default Modal;

Modal.propType = {
  onClose: PropTypes.func.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};
