import React, { Component } from 'react'

export default class Todoinput extends Component {
    constructor(){
        super();
        this.handleInput = this.handleInput.bind(this);
        this.state = {
            a:''
        }
    }
    handleInput = (e)=>{
        //绑定this，事件处理函数写成箭头函数，或者用bind
        if(e.keyCode === 13 && e.target.value !== ''){
            this.props.add(e.target.value);
            this.setState({
                [e.target.name]:''
                
            })
        };
    }

   
    handleChange = (e)=>{
        this.setState({
            [e.target.name]:e.target.value
            
        })
    }

    componentDidMount(){
        console.log(this);
        this.refs.a.focus();
    }
    render() {
        return (
            <section className='header1'>
                <header>
                    <label htmlFor="tit">ToDoList</label>
                    <input id="tit" name='tit' ref="a" required='required' type='text' placeholder='添加ToDo' onKeyDown={this.handleInput}></input>
                </header>
               
            </section>
        )
    }
}
