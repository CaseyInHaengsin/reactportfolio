import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import SideBar from './components/SideBar';

const App = () => {
    return (
        <div>
            <Header />
            <SideBar />
        </div>
    )
}

ReactDOM.render(<App/>, document.querySelector('#root'));