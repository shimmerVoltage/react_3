import logo from '../../logo.svg';
import React from 'react';
import './header.css';

class Header extends React.Component {
    render() {
        return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                    <h1>Мудрёный пай и рэд ход попечительство.</h1>
                <p>
                </p>
                <a
                    className="App-link"
                    href="https://ru.wikipedia.org/wiki/%D0%91%D0%BE%D1%80%D0%B0%D1%82_%D0%A1%D0%B0%D0%B3%D0%B4%D0%B8%D0%B5%D0%B2"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        )
    }
}

export default Header;