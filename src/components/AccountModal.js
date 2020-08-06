import React from "react";
import { Modal, Form, Button } from "react-bootstrap";

const AccountModal = ({ show, handleClose }) => (
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Abra sua conta</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Group controlId="formBasicName">
                    <Form.Label>Seu nome</Form.Label>
                    <Form.Control type="text" placeholder="Seu nome" />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Seu email</Form.Label>
                    <Form.Control type="email" placeholder="Seu email" />
                </Form.Group>

                <Form.Group controlId="formCity">
                    <Form.Label className="mr-sm-2" htmlFor="formCitySelect" srOnly>
                        Preference
                    </Form.Label>
                    <Form.Control as="select" className="mr-sm-2" id="formCitySelect" custom>
                        <option value="0">Florianópolis - SC</option>
                        <option value="1">Curitiba - PR</option>
                        <option value="2">São Paulo- SP</option>
                        <option value="3">Rio de Janeiro - RJ</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Eu li e concordo com os termos de uso" />
                </Form.Group>
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Cancelar
            </Button>
            <Button variant="primary" onClick={handleClose}>
                Criar conta
            </Button>
        </Modal.Footer>
    </Modal>
);

export default AccountModal;