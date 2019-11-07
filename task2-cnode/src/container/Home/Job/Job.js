import React, { Component } from 'react'
import {Link,Route} from 'react-router-dom';
import Content from './Content'

export default class Gob extends Component {
    render() {
        return (
            <div>
                {
                    <div className='all'>
                        <div>
                            <Route path='/home/job/:id' component={Content}/>
                        </div>
                        <div>
                            <ul>
                                <Link className='btn' to='/home/job/1'>1</Link>
                                <Link className='btn' to='/home/job/2'>2</Link>
                                <Link className='btn' to='/home/job/3'>3</Link>
                                <Link className='btn' to='/home/job/4'>4</Link>
                                <Link className='btn' to='/home/job/5'>5</Link>
                                <Link className='btn' to='/home/job/6'>6</Link>
                                <Link className='btn' to='/home/job/7'>7</Link>
                                <Link className='btn' to='/home/job/8'>8</Link>
                                <Link className='btn' to='/home/job/9'>9</Link>
                                <Link className='btn' to='/home/job/10'>10</Link>
                                        
                            </ul>
                        </div>

                      
                    </div>
                            
                }
            </div>
        )
    }
}
