import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './signin.css'
export default class Signin extends Component {
    render() {
        return (
            <div>
                {
                    <div className='container'>
                        <div className='top'>
                            <a>主页</a>/ 
                            <a>登录</a>
                        </div>
                        <div className='bottom'>
                            <div className='user'>
                                用户名<input/>
                            </div>
                            <div className='password'>
                                密码<input/>
                            </div>
                        </div>
                        <Link to='/home/all/1' className='btn2'>登录</Link>
                    </div>
                }
            </div>
        )
    }
}
