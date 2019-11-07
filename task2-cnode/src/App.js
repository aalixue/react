import React, { Component } from 'react'
import Header from './components/Header';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import Home from './container/Home/Home';
import Api from './container/Api/Api';      
import Start from './container/Start/Start';
import About from './container/About/About';
import Topic from './container/Topic/Topic';
import Signin from './container/Signin/Signin';

export default class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Header />
                </div>
                <div className='content'>
                    <div className='left'>
                        <Route path='/home' component={Home}/>
                        <Route path='/start' component={Start}/>
                        <Route path='/api' component={Api}/>
                        <Route path='/about' component={About}/>
                        <Route path='/signin' component={Signin}/>
                        <Route path="/topic/:id" component={Topic}/>

                    </div>
                    <div className='sidebar'>
                        <div className='panel'>
                            <div className='inner'>
                                <p>CNode：Node.js专业中文社区</p>
                                <div className='word2'>
                                    您可以
                                    <a> 登录</a>
                                    或
                                    <a> 注册</a>
                                    ，也可以
                                    <button className='sign'>通过 GitHub 登录</button>
                                </div>
                            </div>
                        </div>
                        <div className='panel2'>
                            <img src='https://static.cnodejs.org/FufeQ8S-sz6aKH5bvPXzVXvQG2Z-' className='one'/>
                            <img src='https://static.cnodejs.org/Fn4D6BhOTz1IswvmzeZ1q7QW1ls_' className='two'/>
                            <img src='https://static.cnodejs.org/FlajCCXkxZaOsuWp3k0iaiqfrJaS' className='three'/>
                        </div>
                        <div className='panel3'>
                            <div className='part1'>友情社区</div>
                            <div className='part2'>
                                <img src='https://static2.cnodejs.org/public/images/ruby-china-20150529.png' className='part3'/>
                            </div>
                            <div className='part2'>
                                <img src='https://static2.cnodejs.org/public/images/golangtc-logo.png' className='part3'/>
                            </div>
                            <div className='part2'>
                                <img src='https://static2.cnodejs.org/public/images/phphub-logo.png' className='part3'/>
                            </div>
                            <div className='part2'>
                                <img src='https://static.cnodejs.org/FjLUc7IJ2--DqS706etPQ1EGajxK' className='part3'/>
                            </div>

                        </div>
                        <div className='panel4'>
                            <div className='part1'>客户端二维码</div>
                            <img src='https://static.cnodejs.org/FtG0YVgQ6iginiLpf9W4_ShjiLfU' className='erweima'/>
                            <br/>
                            <Link className='link'>客户端源码地址</Link>
                        </div>
                    </div>
                </div>
            </Router>           
        )
    }
}
