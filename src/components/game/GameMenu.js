import React, { useState } from 'react';
import MemoryGame from '../../containers/MemoryGame'

import { 
    Button, 
    Container,
    Modal, 
    ModalHeader, 
    ModalBody, 
    ModalFooter, 
    Form, 
    FormGroup, 
    Label, 
    Input 
} from 'reactstrap';

import style from '../../assets/style/main.module.css'

const GameMenu = () => {
    const [ modal, setModal ] = useState(false);
    const [ modalSetting, setModalSetting ] = useState(false);
    const [ name, setName ] = useState("")
    const [ gameStart, setGameStart ] = useState(false)
    const [ cardsCount, setCardsCount ] = useState(16)
        const setSettings = () => {
            toggleSetting();
        }
    
    const toggle = () => setModal(!modal);
    const toggleSetting = () => setModalSetting(!modalSetting);
    
    const onPlay = () => {
        setGameStart(true)
    }

    const startGame = () => {
        toggle()
        onPlay()
    }

    if (gameStart) {
        return (
            <div id="game">
                <MemoryGame username={name} cardsCount={cardsCount} />
            </div>
        )
    }

    return (
        <Container id="game-menu">
            <p className={style.text}>This Memory Match Game is ready to be played! Click the button below to start. </p>
            <Button onClick={toggle} className={style.btn}>Start Game</Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Start Game</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label for="name">Your Name:</Label>
                            <Input type="text" name="name" id="name" maxLength="12" placeholder="Insert your name" onChange={(e) => setName(e.target.value)} />
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={startGame}>Play</Button>
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
            <p className={style.text}>Choose the number of cards in the game</p>
            <button onClick={toggleSetting} className={style.btn}>Set Settings</button>
            <Modal isOpen={modalSetting} toggle={toggle}>
                <ModalHeader toggle={toggleSetting}>Settings</ModalHeader>
                <ModalBody>
                    <Form>
                    <FormGroup>
  <Label for="cardsCount">Cards count:</Label>
  <Input 
    type="select" 
    name="cardsCount" 
    id="cardsCount" 
    onChange={(e) => setCardsCount(e.target.value)}
  >
    <option value="" disabled selected>Select number of cards</option>
    <option value="8">8</option>
    <option value="16">16</option>
    <option value="32">32</option>
  </Input>
</FormGroup>

                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={setSettings}>Set Settings</Button>
                    <Button color="secondary" onClick={toggleSetting}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </Container>
    );
}

export default GameMenu;