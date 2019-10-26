import React, { Component } from 'react'
import Todoinput from './Todoinput'
import Todoing from './Todoing'

export default class Todolist extends Component {
    constructor(){
        super();
        // 获取 localStorage
        let data1 = JSON.parse(localStorage.getItem('data1'));
        if (data1 === null) {
            this.state = {
                todo: []
            }
        } 
        else {
            this.state = {
                todo: data1
            }
        }
    }
    addItem = (data)=>{
        let data1 = {"title": data, "done": false};
        this.setState({//异步的
            todo:[...this.state.todo,data1]
        })
    }
    changeItem = (idx) => {
        let todo = [...this.state.todo];
        todo[idx].done = !todo[idx].done;
        this.setState({
            todo: todo
        })
    }
    delItem = (idx) => {
        let todo = [...this.state.todo];
        todo.splice(idx, 1);
        this.setState({
            todo: todo
        });    
    }
    
    render() {
        localStorage.setItem('data1', JSON.stringify(this.state.todo));
        let doing = 0;
        let done = 0;
      
        this.state.todo.forEach((item) => {
            if (item.done === false) {
                doing++;
            } else {
                done++;
            }
        });
        return (
            <div>
                <Todoinput add={this.addItem}/>
                <div>
                    <section>
                        <Todoing change={this.changeItem} del={this.delItem} todo={this.state.todo} doing={doing} done={done}/>
                    </section>
                </div>
            </div>
            
        )
    }
}