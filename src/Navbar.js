import React from 'react';
import './Navbar.css';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    handleClick(event, data) {
        this.props.onPageChange(event, data);
    }

    render() {
        let divs = []
        for(let i = 0; i < this.props.items.length; i++) {
            let classes = 'menu-item';
            if(this.props.items[i].page === this.props.activePage) {
                classes += ' active';
            }
            divs.push(<li class={classes} onClick={((e) => this.handleClick(e, this.props.items[i]))} key={i}>{this.props.items[i].title}</li>)
        }
        return (
            <div class="Navbar">
                <ul>
                    {divs}
                </ul>
            </div>
        )
    }
}

export default Navbar;