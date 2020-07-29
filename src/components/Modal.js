import React, { Component, useState, useRef } from 'react'
import { Button, Icon, Modal, Header, Input, Checkbox, Ref } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import {useSelector} from "react-redux";


export default function CustomModal (props){
    const [state, setState] = useState({ modalOpen: false });
    const {lat, log} = props;
    const inputRef = useRef();
    const checkboxRef = useRef();
    console.log("we are here")
    const showModal = useSelector(state => state.showModalWindow)
    setState({modalOpen: showModal})
    console.log(showModal)

    const handleSubmit = () => {
        //onSubmit({name: inputRef.current.value, isPublic: checkboxRef.current.checked})
        setState({ modalOpen: false })
    }
    const handleClose = () => setState({ modalOpen: false })

    return(
    <Modal closeIcon
           open={state.modalOpen}
           onClose={handleClose}>
        <Header icon='map marker alternate' content='Add the place' />
        <Modal.Content>
            <p>
                What is the name of the place?
            </p>
            <input placeholder='Name the place' ref={inputRef}/>
            <br/>
            <br/>
            <input type="checkbox" id="public" name="public" ref={checkboxRef}/>
            <label for="public"> Want to make the spot public?</label>

        </Modal.Content>
        <Modal.Actions>
            <Button color='red' onClick={handleClose} >
                <Icon name='remove' /> Cancel
            </Button>
            <Button color='green' onClick={handleSubmit}>
                <Icon name='checkmark' /> Add
            </Button>
        </Modal.Actions>
    </Modal>
)
}

