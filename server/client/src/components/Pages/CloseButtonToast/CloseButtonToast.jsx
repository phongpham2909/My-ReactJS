import React from 'react';
import { css } from 'glamor';

function CloseButton({ closeToast, type, ariaLabel }) {
  const styles = css({
    color: '#fff !important',
    fontWeight: 'bold !important',
    fontSize: '15px !important',
    background: 'transparent !important',
    outline: 'none !important',
    border: 'none !important',
    cursor: 'pointer !important',
    opacity: '0.7 !important',
    transition: '.3s ease',
    alignSelf: 'flex-start',
    ':hover, :focus': {
      opacity: 1
    }
  });
  return (
    <button
      {...styles}
      type="button"
      onClick={closeToast}
      aria-label={ariaLabel}
    >
      ✖
    </button>
  );
}

export default CloseButton;