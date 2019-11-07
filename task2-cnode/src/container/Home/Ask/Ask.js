import React, { Component } from 'react'
import {Link,Route} from 'react-router-dom';
import Content from './Content'

export default class Ask extends Component {
    render() {
        return (
            <div>
                {
                    <div className='all'>
                        <div>
                            <Route path='/home/ask/:id' component={Content}/>
                        </div>
                        <div>
                            <ul>
                                <Link className='btn' to='/home/ask/1'>1</Link>
                                <Link className='btn' to='/home/ask/2'>2</Link>
                                <Link className='btn' to='/home/ask/3'>3</Link>
                                <Link className='btn' to='/home/ask/4'>4</Link>
                                <Link className='btn' to='/home/ask/5'>5</Link>
                                <Link className='btn' to='/home/ask/6'>6</Link>
                                <Link className='btn' to='/home/ask/7'>7</Link>
                                <Link className='btn' to='/home/ask/8'>8</Link>
                                <Link className='btn' to='/home/ask/9'>9</Link>
                                <Link className='btn' to='/home/ask/10'>10</Link>
                                        
                            </ul>
                        </div>

                      
                    </div>
                            
                }
            </div>
        )
    }
}
