import React, { Component } from 'react'
import { NavBar, WingBlank ,Carousel,WhiteSpace} from 'antd-mobile';

export default class Home extends Component {
    render() {
        return (
            <div>
                <NavBar
                style={{backgroundColor:'#3fcccb',color:'white'}}
                >住吧家居</NavBar>
                <Carousel
                autoplay={true}
                infinite
                beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                afterChange={index => console.log('slide to', index)}
                >
                {[1,2].map(val => (
                    <a
                    key={val}
                    style={{ display: 'inline-block', width: '100%' }}
                    >
                    <img
                        src={require('../img/bg.png')}
                        alt=""
                        style={{ width: '100%', verticalAlign: 'top' }}
                    />
                    </a>
                ))}
                </Carousel>
                <WhiteSpace/>
                <WingBlank>
                    <div style={{width:'100%'}}>
                        <img src={require('../img/stu.png')} style={{width:'100%'}}/>
                    </div>
                </WingBlank>
                <WhiteSpace/>
                <div style={{width:'100%',height:'25px'}}>
                    <WingBlank>热门推荐</WingBlank>
                </div>
                <WhiteSpace/>
                <div style={{width:'100%'}}>
                    <img src={require('../img/tu4.png')} style={{width:'100%'}}/>
                </div>
            </div>
        )
    }
}