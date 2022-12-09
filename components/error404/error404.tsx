import React from 'react'
import './error404.css'
const Error404 = () => {
    return (
        <>
            <div className='error404container'>
                <img src={require('../../assets/404.png')} alt="" className='error404Img' />
                <div className='error404Txt'>
                    That page doesnot exist on our website
                </div>
                <div className='error404Btn'>
                    <img src={require('../../assets/Added button.png')} alt="" className='errorPageBtn' />
                </div>
            </div>
        </>
    )
}

export default Error404
