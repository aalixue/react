import React, { Component } from 'react'

export default class Todoing extends Component {  
  render() {
        var {todo} = this.props;
        return (
            <div className='section'>
                <h2>正在进行<span>{this.props.doing}</span></h2>
                <ol id="doing">
                {
                    todo.map((item, index) => {
                        if (item.done === false) {
                            return (
                                <li key={index}>
                                    <input type="checkbox" onClick={()=>this.props.change(index)}/>
                                    <p>{item.title}</p>
                                    <a onClick={()=>this.props.del(index)}>-</a>
                                </li>
                            )
                        }
                        return '';
                    })
                }
                </ol>
                <h2>已经完成<span>{this.props.done}</span></h2>
                <ul id="done">
                {
                    todo.map((item, index) => {
                        if (item.done === true) {
                            return (
                                <li key={index}>
                                    <input type="checkbox" onClick={()=>this.props.change(index)} checked="checked" readOnly/>
                                    <p>{item.title}</p>
                                    <a onClick={()=>this.props.del(index)}>-</a>
                                </li>
                            )
                        }
                        return '';
                    })
                } 
                </ul>
            </div>
        )
    }
}
