import React, { Component } from 'react';

class AddPlayer extends Component {

     constructor(props){
         super(props)
         this.state={
             player1: null,
             player2: null,
            
         }
         
     }

     handelPlayer1Change = (e) =>{
        e.preventDefault();
         this.setState ({
            player1:e.target.value
         })
     }


    handelPlayer2Change = (e) =>{
        e.preventDefault();
         this.setState ({
            player2:e.target.value
         })
     }

     setRedirect = () => {
        this.props.getPlayer(this.state.player1, this.state.player2);
        this.props.history.push("/Game");
      }


    render() {
          
        return (
            <div>
                <body>
                    <div className="logo"></div>
                    <div className="main-border">
                        <div className="wrapper clearfix">
                            <h1>Welcome To <span style={{color: "#FBA202"}}>TIC TAC TOE</span></h1>

                            <div className="user-form">
                            <p>PLAYER 1</p>
                            <input type="text"  value= {this.state.player1} onChange= {this.handelPlayer1Change} placeholder="" Validate/>

                            <p>PLAYER 2</p>

                            <input type="text" value= {this.state.player2} onChange= {this.handelPlayer2Change} placeholder="" Validate/>
                           
                            <button type="submit" className="button-calss" onClick={this.setRedirect}>Continue</button>
                            </div>
                            
                        </div>
                        </div>
                </body>
            </div>
        );
    }
}

export default AddPlayer;