import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import MainDisplay from './components/MainDisplay';


const App = () => {
    return (
        <div>
            <Header />
            <br></br>
            <MainDisplay />
            <br></br>
            <div>
                
            </div>
        </div>
    )
}

ReactDOM.render(<App/>, document.querySelector('#root'));