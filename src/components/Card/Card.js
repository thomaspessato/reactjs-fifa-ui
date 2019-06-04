import React from 'react';
import './Card.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Card extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        let cardHeight = 0;
        switch (this.props.data.type) {
            case 'large':
                cardHeight = "400px";
                break;
            default:
                cardHeight = "150px";
                break;
        }
        return (
            <Link to={'/detail/'+this.props.data.title.text} style={{
                height: cardHeight,
                backgroundSize: 'cover',
                backgroundImage: "url(" + this.props.data.background + ")"
                }} class="card">
                <span class="card-title" style={{color: this.props.data.title.color}}>{this.props.data.title.text}</span>
                <span class="card-tag" style={{backgroundColor: this.props.data.tag.color}}>{this.props.data.tag.title}</span>
                <span class="card-tag-subtitle" style={{color: this.props.data.tag.color}}>{this.props.data.tag.subtitle}</span>
            </Link>
        )
    }

}

export default Card;