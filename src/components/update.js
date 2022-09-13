import { Component } from "react";
import axios from 'axios';
import { Feedbacks } from "../Variables";

export class Updates extends Component{

    constructor(props) {
      super(props)
    
      this.state = {        
        Name:'',
        Time:'',
        feedback:''
      }
    }

    handleChange=(e) =>{        
        this.setState({
            [e.target.id]:e.target.value,            
        })
    }

    handleSubmit=(e) =>{      
        e.preventDefault();  
              
        axios({
            method:'put',
            url:Feedbacks.API_URL,
            data:{
               Name:this.state.Name,
               Time:this.state.Time,
               feedback:this.state.feedback
            }
        })
    }


    render(){        
        return(            
            <div><h3>Registration</h3><br />
                <form onSubmit={this.handleSubmit}>
                    <label>Name</label><br />
                    <input type='text' id='Name' name='Name' value={this.state.Name} onChange={this.handleChange}  required=""></input><br />
                    <label>Time</label><br />
                    <input type='time' id='Time' name='Time' value={this.state.Time} onChange={this.handleChange} required=""></input><br />
                    <label>feedback</label><br />
                    <input type='text' id='feedback' name='feedback' value={this.state.feedback} onChange={this.handleChange}  required=""></input><br />
                    <button type='submit'>Submit</button>
                </form>    
            </div>
        )
    }
}

export default Updates;