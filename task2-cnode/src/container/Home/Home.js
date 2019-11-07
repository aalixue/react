import React, { Component } from 'react'
import {Link,Route} from 'react-router-dom'
import './home.css'
import All from './All/All';
import Good from './Good/Good';
import Share from './Share/Share';
import Ask from './Ask/Ask';
import Gob from './Job/Job'

export default class Home extends Component {
    render() {
        let {url} = this.props.match;
        return (
            
                <div>
                     <div>
                        <div className='top'>
                            {/* 父子路由，带上前边的父路径 */}
                            <Link to='/home/all/1'><span>全部</span></Link>
                            <Link to='/home/good/1'><span>精华</span></Link>
                            <Link to='/home/share/1'><span>分享</span></Link>
                            <Link to='/home/ask/1'><span>问答</span></Link>
                            <Link to='/home/job/1'><span>招聘</span></Link>
                        
                        </div>
                        <div>
                            <Route path={url+'/all'} component={All}/>
                            <Route path='/home/good' component={Good}/>
                            <Route path='/home/share' component={Share}/>
                            <Route path='/home/ask' component={Ask}/>
                            <Route path='/home/job' component={Gob}/>
                        </div>
                    </div>
                </div>
            
        )
    }
}
