import React from "react";
import Card from "../Card/Card";
import './CardsContainer.css';

class CardsContainer extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.render();
    }
    
    render() {
        if(!this.props.cards) {
            console.log(this.props);
            return ('');
        }
        let cards = [];
        for(let i = 0; i < this.props.cards.length; i++) {
            cards.push(<Card key={this.props.cards[i].id} data={this.props.cards[i]}></Card>)
        }
        return (
            <div class="card-container">
                {cards}
            </div>
            )
        }
        
    }

    export default CardsContainer;
    