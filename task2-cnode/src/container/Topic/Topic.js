import React, { Component } from 'react'
import {fetch} from 'whatwg-fetch';
import './topic.css'

export default class Topic extends Component {
    constructor() {
        super();
        this.state = {
            data: {
                author:{}
            }
        }
    }
    componentDidMount(){
        let page = this.props.match.params.id;
        fetch('https://cnodejs.org/api/v1/topic/'+page)
            .then((res)=>res.json())
            .then((res)=>{
                this.setState({
                    data: res.data
                });
            })
    }
    render() {
        return (
            <div style={{background:'#ffffff'}}>
                <div className='detail'>
                    <span className='top2'>置顶</span>
                    <h2 style={{display:'inline',marginLeft:5}}>
                        {this.state.data.title}
                    </h2>
                    <div className='list'>
                        <span> •发布于 6 个月前 </span>
                        <span> •作者 {this.state.data.author.loginname}</span>
                        <span> •{this.state.data.visit_count} 次浏览 </span>
                        <span> •来自 分享 </span>
                    </div>
                </div>
                <div>
                    <div dangerouslySetInnerHTML={{__html: this.state.data.content}}></div>
                </div>

            </div>
        )
    }


}
