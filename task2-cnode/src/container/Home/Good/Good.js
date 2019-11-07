import React, { Component } from 'react'
import {Link,Route} from 'react-router-dom';
import Content from './Content'

export default class Good extends Component {
    render() {
        return (
            <div>
                {
                    <div className='all'>
                        <div>
                            <Route path='/home/good/:id' component={Content}/>
                        </div>
                        <div>
                            <ul>
                                <Link className='btn' to='/home/good/1'>1</Link>
                                <Link className='btn' to='/home/good/2'>2</Link>
                                <Link className='btn' to='/home/good/3'>3</Link>
                                <Link className='btn' to='/home/good/4'>4</Link>
                                <Link className='btn' to='/home/good/5'>5</Link>
                                <Link className='btn' to='/home/good/6'>6</Link>
                                <Link className='btn' to='/home/good/7'>7</Link>
                                <Link className='btn' to='/home/good/8'>8</Link>
                                <Link className='btn' to='/home/good/9'>9</Link>
                                <Link className='btn' to='/home/good/10'>10</Link>
                                        
                            </ul>
                        </div>

                      
                    </div>
                            
                }
            </div>
        )
    }
}
