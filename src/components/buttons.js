import React from "react";
import DropdownButton from "react-bootstrap/DropdownButton";
import DropdownItem from "react-bootstrap/DropdownItem";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Button from "react-bootstrap/Button";

class Buttons extends React.Component {
    handleSelect = e => {
        this.props.gridSize(e);
    };

    render() {
        return (
        <div className="center">
            <h4>Controls</h4>
            <ButtonToolbar>
            <Button
                variant="outline-light"
                size="sm"
                onClick={this.props.playButton}
            >
                Play
            </Button>
            <Button
                variant="outline-light"
                size="sm"
                onClick={this.props.pauseButton}
            >
                Pause
            </Button>
            <Button variant="outline-light" size="sm" onClick={this.props.clear}>
            Delete
            </Button>
            <Button variant="outline-light" size="sm" onClick={this.props.slow}>
            Slow
            </Button>
            <Button variant="outline-light" size="sm" onClick={this.props.fast}>
                Fast
            </Button>
            <Button variant="outline-light" size="sm" onClick={this.props.seed}>
                Random
            </Button>
            
            <DropdownButton 
                
                variant="outline-light"
                size="sm"
                title="Grid Size"
                id=" dropdown-basic-button"
                onSelect={this.handleSelect}
            >
                <DropdownItem className='size'>50x50</DropdownItem>
                <DropdownItem eventKey="1" className='size'>75x75</DropdownItem>
            </DropdownButton>
            </ButtonToolbar>
        </div>
        );
    }
}

export default Buttons;