import React, { Component } from 'react'
import {Link,Route} from 'react-router-dom';
import Content from './Content'

export default class Share extends Component {
    render() {
        return (
            <div>
                {
                    <div className='all'>
                        <div>
                            <Route path='/home/share/:id' component={Content}/>
                        </div>
                        <div>
                            <ul>
                                <Link className='btn' to='/home/share/1'>1</Link>
                                <Link className='btn' to='/home/share/2'>2</Link>
                                <Link className='btn' to='/home/share/3'>3</Link>
                                <Link className='btn' to='/home/share/4'>4</Link>
                                <Link className='btn' to='/home/share/5'>5</Link>
                                <Link className='btn' to='/home/share/6'>6</Link>
                                <Link className='btn' to='/home/share/7'>7</Link>
                                <Link className='btn' to='/home/share/8'>8</Link>
                                <Link className='btn' to='/home/share/9'>9</Link>
                                <Link className='btn' to='/home/share/10'>10</Link>
                                        
                            </ul>
                        </div>

                      
                    </div>
                            
                }
            </div>
        )
    }
}
