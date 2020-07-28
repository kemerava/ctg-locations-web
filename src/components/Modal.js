import React, { Component } from 'react'
import { Button, Icon, Modal, Header, Input, Checkbox } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

export default class ModalExampleCloseIcon extends Component {
    state = { modalOpen: false }

    handleOpen = () => this.setState({ modalOpen: true })

    handleSubmit = () => this.setState({ modalOpen: false })
    handleClose = () => this.setState({ modalOpen: false })
    render (){
        return(
    <Modal trigger={<Button onClick={this.handleOpen}>Show Modal</Button>} closeIcon
           open={this.state.modalOpen}
           onClose={this.handleClose}>
        <Header icon='map marker alternate' content='Add the place' />
        <Modal.Content>
            <p>
                What is the name of the place?
            </p>
            <Input placeholder='Search...' />
            <br/>
            <br/>
            <Checkbox label='I wanna make this spot public' />

        </Modal.Content>
        <Modal.Actions>
            <Button color='red' onClick={this.handleClose}>
                <Icon name='remove' /> Cancel
            </Button>
            <Button color='green' onClick={this.handleSubmit}>
                <Icon name='checkmark' /> Add
            </Button>
        </Modal.Actions>
    </Modal>
)
    }
}

