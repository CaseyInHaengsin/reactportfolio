import React from 'react';


const Header = () => {
    return (
        <div>
            <div class="ui large top fixed hidden menu">
                <div class="ui container">
                <a class="active item">Home</a>
                    <a class="item">Work History</a>
                    <a class="item">Projects</a>
                <div class="right menu">
                    <div class="item">
                    <a class="item">About me</a>
                </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Header;