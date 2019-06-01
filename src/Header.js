import React from 'react';
import './Header.css';
import './UserEarning';
import UserEarning from './UserEarning';

import iconCoin from './assets/icon-coins.png';
import iconFifaPoints from './assets/icon-fifa-points.png';
import iconRecord from './assets/icon-record.png';

class Header extends React.Component {
    render() {
        return (
            <div class="Header">
                <div class="left-user-info">
                    <div class="left-edge"></div>
                    <div class="user-team">
                        <img alt="" class="user-team-badge" src="https://upload.wikimedia.org/wikipedia/pt/b/b6/Manchester_United_FC_logo.png"></img>
                    </div>
                    <div class="user-info">
                        <div class="user-info-header">
                            <span class="team-name">ChuBoi</span>
                            <span class="team-date">EST. Jul 2018</span>
                        </div>
                        <div class="user-earnings-container">
                            <UserEarning title="Coins" value="952,246" img={iconCoin}></UserEarning>
                            <UserEarning title="FIFA Points" value="10,000" img={iconFifaPoints}></UserEarning>
                            <UserEarning title="Record" value="0-0-0" img={iconRecord}></UserEarning>
                        </div>
                        <div class="right-edge"></div>
                    </div>
                </div>

                <div class="right-user-info">
                    <div class="user-team">
                        <img class="user-team-badge" src="https://upload.wikimedia.org/wikipedia/pt/b/b6/Manchester_United_FC_logo.png"></img>
                    </div>
                    <div class="user-info">
                        <div class="user-info-header">
                            <span class="team-name">ChuBoi</span>
                            <span class="team-date">EST. Jul 2018</span>
                        </div>
                        <div class="user-earnings-container">
                            <UserEarning title="Coins" value="952,246" img={iconCoin}></UserEarning>
                            <UserEarning title="FIFA Points" value="10,000" img={iconFifaPoints}></UserEarning>
                            <UserEarning title="Record" value="0-0-0" img={iconRecord}></UserEarning>
                        </div>
                    </div>
                </div>


            </div>
        )
    }
}

export default Header;