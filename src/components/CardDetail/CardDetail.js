import React from 'react';
import './CardDetail.css';

class CardDetail extends React.Component {
    constructor(props) {
        super(props)
        this.state = {};
    }

    componentDidMount() {
        console.log(this.props);
    }

    render() {
        return (
            <div class="card-detail">
                <div class="image-container">
                    <img class="image-container__image" src="http://dc.rbsdirect.com.br/imagesrc/24432705.jpg?w=660"/>
                    <figcaption class="image-container__caption">Caption</figcaption>
                </div>
                <div class="content">
                    <h2 class="content__title">Titulo do Texto</h2>
                    <p class="content__body">
                        Enim veniam ea incididunt est consectetur fugiat sint deserunt. Incididunt voluptate dolore eiusmod officia enim. Voluptate sunt magna reprehenderit voluptate dolore ea consectetur do. Cupidatat et anim irure fugiat eiusmod et laborum. Ipsum est voluptate consectetur ad incididunt amet ullamco aliqua enim eiusmod. Nisi esse Lorem occaecat commodo qui velit cupidatat labore cupidatat. Tempor exercitation officia cillum fugiat laboris ullamco elit incididunt officia adipisicing amet velit.
                    </p>
                </div>
            </div>
        );
    }
}

export default CardDetail;