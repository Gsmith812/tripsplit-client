import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useRef } from 'react';
import './Modal.css';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';

const Modal = (props) => {
    const { handleClose, show, children } = props;

    const node = useRef();

    useEffect(() => {
        if(show) {
            // when component mounts
            document.addEventListener('mousedown', handleClickOverlay);
        } else {
            document.removeEventListener('mousedown', handleClickOverlay);
        }

        // return function to call after unmount
        return () => {
            document.removeEventListener('mousedown', handleClickOverlay);
        };
    }, [show]);

    const handleClickOverlay = e => {
        if(node.current.contains(e.target)) {
            // If inside component is clicked
            return;
        }

        // If overlay is clicked
        handleClose();
    }

    const showHideClassName = show ? 'modal-show' : 'modal-hide';
    
    return (
        <div className={showHideClassName}>
            <section className='modal'>
                <section className='modal-main' ref={node}>
                    <FontAwesomeIcon className='window-close-btn' icon={faWindowClose} onClick={handleClose} />
                    {children}
                </section>
            </section>
        </div>
    )
}

export default Modal;