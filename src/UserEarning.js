import React from "react";
import './UserEarning.css';

class UserEarning extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div class="user-earning">
                <img alt={this.props.title} src={this.props.img}></img>
                <div>
                    <span class="user-earning-title">{this.props.title}</span>
                    <span class="user-earning-value">{this.props.value}</span>
                </div>
            </div>
        );
    }
}

export default UserEarning;