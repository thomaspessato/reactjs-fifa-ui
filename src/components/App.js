import React from 'react';
import './App.css';
import Header from './Header/Header';
import Navbar from  './Navbar/Navbar';
import CardDetail from './CardDetail/CardDetail';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CardsContainer from './CardsContainer/CardsContainer';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      menuItems: [
        {
          title: "FUT CENTRAL",
          page: "futcentral",
          cards: [
            {
              id: "futcentral1",
              type: "large",
              title: {
                text: "DIVISION RIVALS",
                color: "black",
              },
              tag: {
                title: "NEW WEEK, NEW REWARDS!",
                subtitle: "This Weekly Competition is LIVE",
                color: "#29bd2b"
              },
              image: "http://dc.rbsdirect.com.br/imagesrc/24432705.jpg?w=660"
            },
            {
              id: "futcentral2",
              type: "large",
              title: {
                text: "COPA AMERICA",
                color: "white",
              },
              tag: {
                title: "CAN MESSI LEAD THE WAY?",
                subtitle: "This Weekly Competition is LIVE",
                color: "goldenrod"
              },
              image: "https://netaaji.news/wp-content/uploads/2018/06/698067-messi.jpg"
            },
            {
              id: "futcentral3",
              type: "large",
              title: {
                text: "DIVISION RIVALS",
                color: "white",
              },
              tag: {
                title: "NEW WEEK, NEW REWARDS!",
                subtitle: "This Weekly Competition is LIVE",
                color: "#29bd2b"
              },
              image: "https://conteudo.imguol.com.br/c/entretenimento/ab/2018/08/10/fifa-19---neymar-1533917429175_v2_900x506.jpg"
            },
            {
              id: "futcentral4",
              type: "large",
              title: {
                text: "",
                color: "white",
              },
              tag: {
                title: "",
                subtitle: "",
                color: ""
              },
              image: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE2ybOb"
            }
          ]
        },
        {
          title: "SINGLE PLAYER",
          page: "single",
          cards: [
            {
              id: "single1",
              type: "large",
              title: {
                text: "DIVISION RIVALS",
                color: "#2ae7d5",
              },
              tag: {
                title: "NEW WEEK, NEW REWARDS!",
                subtitle: "This Weekly Competition is LIVE",
                color: "#29bd2b"
              },
              image: "https://media.contentapi.ea.com/content/dam/ea/easports/fifa/fifa-19-home/fifa19_refresh/franchise-hero-tertiary-fifa19-home-update-key-art-xs.jpg"
            },
            {
              id: "single2",
              type: "large",
              title: {
                text: "NEW STADIUMS",
                color: "white"
              },
              tag: {
                title: "Opens in: 4 Hours 2 Mins!",
                subtitle: "Your Weekend League begins soon",
                color: "#29bd2b"
              },
              image: "https://static1.squarespace.com/static/54d10203e4b0d299700879e5/t/5ccb5b73195cb900011bee32/1556831098332/Fifa2019.png"
            }
          ]
        },
        {
          title: "ONLINE",
          page: "online",
          cards: []
        },
        {
          title: "SQUADS",
          page: "squads",
          cards: []
        },
        {
          title: "TRANSFERS",
          page: "transfers",
          cards: []
        },
        {
          title: "STORE",
          page: "store",
          cards: []
        },
        {
          title: "MY CLUB",
          page: "myclub",
          cards: []
        }
      ]
    }
  }

  componentDidMount() {
    this.setState({
      activePage: this.state.menuItems[0].page,
      cards: this.state.menuItems[0].cards
    })

    this.render();

  }

  handlePageChange(e, data) {
    this.setState({
      activePage: data.page,
      cards: data.cards
    })
    this.render();
  }

  render() {
    console.log("rendering");
    return (
      <Router>
        <div className="App">
          <Header></Header>
          <Navbar activePage={this.state.activePage} onPageChange={(e, data) => { this.handlePageChange(e, data) }} items={this.state.menuItems}></Navbar>
          <Route exact path="/home" render={(routeProps) => (
            <CardsContainer {...routeProps} cards={this.state.cards} />
          )} 
          />
          <Route path="/detail" component={CardDetail} />
        </div>
      </Router>
    );
  }
  
}

export default App;
