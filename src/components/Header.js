import React from 'react';


const Header = () => {
    return (
        <div>
            <div className="ui large top fixed borderless hidden menu">
                <div className="ui container">
                <a className="active item">Home</a>
                    <a className="item">Work History</a>
                    <a className="item">Projects</a>
                <div className="right menu">
                    <div className="item">
                    <a className="item">About me</a>
                </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Header;