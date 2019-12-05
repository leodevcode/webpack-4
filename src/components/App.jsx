import React, { Component } from 'react';
import '../assets/style/App.css'
import img from './Comenzamos.png'

class App extends Component {
    render() {
        return (
            <div>
                <h1>¡Hola mundo!</h1>
                <h2>desde React.js</h2>
                <img src={img} alt="" width="200"/>
            </div>
        );
    };
};

export default App;