import React from "react";
import Button from "react-bootstrap/Button";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
class Examples extends React.Component {
    render() {
        return (
        <div className="center">
            <h4>Examples</h4>
            <ButtonToolbar>
            <Button 
                variant="outline-light" 
                onClick={this.props.glider}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/f/f2/Game_of_life_animated_glider.gif" alt="Glider"/>
            </Button>
            <Button
                variant="outline-light"
                onClick={this.props.pulsar}
            >
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/07/Game_of_life_pulsar.gif" alt="Pulsar"/>
            </Button>
            </ButtonToolbar>
        </div>
        );
    }
}

export default Examples