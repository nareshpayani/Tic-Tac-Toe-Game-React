import React, { Component } from 'react'

export default class FinalWinner extends Component {
    render() {
        return (
            <body>
                <div className="main-border">
                    <div className="wrapper clearfix">
                    <div className="o-turn">WINNER!</div>
                        <div className="winner-box">
                            <div className="winner-label">PLAYER 2</div>
                            <div className="winner-name" id="current-1">Naresh</div>
                            <div className="winner-symbol"></div>
                        </div>
                    </div>
                </div>
            </body>
        )
    }
}
