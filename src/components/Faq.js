import React, { useState, useEffect } from "react";
import { Container, Row, Col, Accordion, Card } from "react-bootstrap";
import IconText from "./IconText";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard, faWallet, faShieldAlt, faUserTie } from "@fortawesome/free-solid-svg-icons";

import "./Faq.scss";

const Faq = () => {
    const options = [
        { icon: faCreditCard, text: "Cartão de Crédito" },
        { icon: faWallet, text: "Conta e abertura" },
        { icon: faShieldAlt, text: "Token digital" },
        { icon: faUserTie, text: "Produtos e Serviços" },
    ];

    const [index, setIndex] = useState(0);

    const handleClick = (key) => {
        setIndex(key);
    };

    return (
        <section className="faq text-light">
            <Container className="py-5">
                <Row className="justify-content-center">
                    <h2 className="faq-title my-5">Dúvidas frequentes</h2>
                </Row>
                <Row className="d-flex aligh-items-center justify-items-center">
                    <Col className="d-lg-none mb-5" xs={12}>
                        <Row>
                            {options.map(({ icon }, key) => (
                                <Col className="d-flex justify-content-center" key={key}>
                                    <FontAwesomeIcon icon={icon} size="2x" color={key === index ? "#FFF" : "#BBB"} onClick={() => handleClick(key)}></FontAwesomeIcon>
                                </Col>
                            ))}
                        </Row>
                        <Row className="justify-content-center mt-5">
                            <p className="lead">{options[index].text}</p>
                        </Row>
                    </Col>

                    <Col className="d-none d-lg-block">
                        {options.map(({ icon, text }, key) => (
                            <IconText icon={icon} size={3} className="faq-clickable mb-3" textClassName="lead" color={key === index ? "#FFF" : "#BBB"} onClick={() => handleClick(key)} key={key}>
                                {text}
                            </IconText>
                        ))}
                    </Col>

                    <Col>
                        <Accordion defaultActiveKey="0" activeKey={`${index}`}>
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="0">
                                    Lorem ipsum dolor sit amet
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                                        scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                                        the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="1">
                                    Nulla portitor eros ac ex tristique posuere
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="1">
                                    <Card.Body>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                                        scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                                        the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="2">
                                    Quisque fringilla tincidunt arcu
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="2">
                                    <Card.Body>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                                        scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                                        the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Accordion.Toggle as={Card.Header} eventKey="3">
                                    Wan elementus lebortis purus a maximus tortor
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey="3">
                                    <Card.Body>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                                        scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                                        the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Faq;
