import React from 'react';

import TopNav from './top-nav';
import InfoModal from './info-modal';

import './header.css';

export default function Header(props) {
    return (
        <header>
            <TopNav 
                toggleInfoModal={() => props.toggleInfoModal()}
                newGame={() => props.newGame()} 
            />
            {props.isInfoModal ? <InfoModal toggleInfoModal={() => props.toggleInfoModal()}/> : ''}
            <h1>HOT or COLD</h1>
        </header>
    );
};
