import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import {fetch} from 'whatwg-fetch'
import '../home.css'

export default class Content extends Component {
    constructor(){
        super();
        this.state = {
            data: []
        }
        
    }
    componentDidMount(){
        let page = this.props.match.params.id;
        fetch('https://cnodejs.org/api/v1/topics?tab=good&page='+page)
            .then((res)=>res.json())
            .then((res)=>{
                console.log(res)
                this.setState({
                    data: res.data
                });
            })
    }
    componentDidUpdate(prevProps,prevState){
        if(prevProps.match.params.id!==this.props.match.params.id){
            let page = this.props.match.params.id;
            fetch('https://cnodejs.org/api/v1/topics?tab=good&page='+page)
                .then((res)=>res.json())
                .then((res)=>{
                    console.log(res)
                    this.setState({
                        data: res.data
                    });
                })
        }
    }
    render() {
        return (
            <div>
                 <div>
                    {
                        this.state.data.map((item)=>(
                            <div>
                                <li className='cell'>
                                    <img style={{width:30,height:30,overflow:'hidden'}} src={item.author.avatar_url}/>
                                    <span className='box'>
                                        <span className='reply'>{item.reply_count}</span>
                                        <span style={{fontSize: 10}}>/</span>
                                        <span className='visit'>{item.visit_count}</span>
                                    </span>
                                    <span className='share'>分享</span>
                                    <Link className='title' style={{textDecoration:'none'}} to={`/topic/${item.id}`} title={item.title}>{item.title}</Link>
                                    <div className='box1'>
                                        <img style={{width:20,height:20,overflow:'hidden'}} src={item.author.avatar_url}/>
                                        <span className='days'>1天前</span>
                                    </div>
                                </li>
                             </div>
                        ))
                    }
                </div>
            </div>
        )
    }
}
