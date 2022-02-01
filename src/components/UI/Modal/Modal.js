import React from 'react';
import { Modal, Button } from 'react-bootstrap'
const NewModal = (props) => {
    return (<>
        <Modal show={props.show} onHide={props.handleClose} size={props.size}>
            <Modal.Header closeButton>
                <Modal.Title>{props.modalTitle}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {props.children}
            </Modal.Body>
            <Modal.Footer>
                {
                    props.buttons ? props.buttons.map((btn) =>
                        <button key={Math.random()} onClick={btn.onClick} variant={btn.color}>
                            {btn.label}
                        </button>
                    ):
                    <Button variant="primary" onClick={props.handleClose}>
                    Save Changes
                </Button>
                }
            
            </Modal.Footer>
        </Modal>
    </>);
};

export default NewModal;
