import React, { Component } from 'react'
import {Link,Route} from 'react-router-dom';
import Content from './Content'

export default class All extends Component {
    render() {
        return (
            <div>
                {
                    <div className='all'>
                        <div>
                            <Route path='/home/all/:id' component={Content}/>
                        </div>
                        <div>
                            <ul>
                                <Link className='btn' to='/home/all/1'>1</Link>
                                <Link className='btn' to='/home/all/2'>2</Link>
                                <Link className='btn' to='/home/all/3'>3</Link>
                                <Link className='btn' to='/home/all/4'>4</Link>
                                <Link className='btn' to='/home/all/5'>5</Link>
                                <Link className='btn' to='/home/all/6'>6</Link>
                                <Link className='btn' to='/home/all/7'>7</Link>
                                <Link className='btn' to='/home/all/8'>8</Link>
                                <Link className='btn' to='/home/all/9'>9</Link>
                                <Link className='btn' to='/home/all/10'>10</Link>
                                        
                            </ul>
                        </div>

                      
                    </div>
                            
                }
            </div>
        )
    }
}
