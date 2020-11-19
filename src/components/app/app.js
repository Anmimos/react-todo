import React from 'react';

import Tasks from '../tasks';

import './app.scss';

export default class App extends React.Component {

    render() {

        return (
            <section id='tasks'>
                <h1>Type your tasks</h1>
                <Tasks/>
            </section>      
        )
    }
}