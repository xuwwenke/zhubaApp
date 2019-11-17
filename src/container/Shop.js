import React, { Component } from 'react'
import { NavBar,Carousel,Grid,SearchBar, WhiteSpace, WingBlank } from 'antd-mobile';
const name=['桌','床','椅','几','柜','书架','沙发','家居饰品','户外家具','全部分类'];
const data = Array.from(new Array(10)).map((_val, i) => ({
    icon: 'img/circle'+i+'.png',
    text: name[i],
})); 

export default class Shop extends Component {
    render() {
        return (
            <div>
                <NavBar
                style={{backgroundColor:'#3fcccb',color:'white'}}
                rightContent={[
                    <img src={require('../img/icon-che.png')} style={{width:'25%'}}/>
                ]}
                >商城
                </NavBar>
                <SearchBar placeholder="输入关键字搜索" style={{background:'#f5e9e2'}} maxLength={8} />
                <Carousel
                autoplay={true}
                infinite
                >
                {[1,2,3,4].map(val => (
                    <a
                    key={val}
                    style={{ display: 'inline-block', width: '100%' }}
                    >
                    <img
                        src={require('../img/shap.png')}
                        alt=""
                        style={{ width: '100%', verticalAlign: 'top' }}
                    />
                    </a>
                ))}
                </Carousel>
                <WhiteSpace/>
                <WingBlank>
                    <div style={{width:"100%"}}>
                        <div className="sub-title">我的订单 </div>
                        <WhiteSpace/>
                        <Grid data={data}
                        columnNum={5}
                        renderItem={dataItem => (
                            <div>
                                <img src={dataItem.icon} style={{ width: '50%', height: '50%' }} alt="" />
                                <div style={{fontSize: '10px'}}>
                                    <span>{dataItem.text}</span>
                                </div>
                            </div>
                        )}
                        />
                    </div>
                </WingBlank>
                <WhiteSpace/>
                <WingBlank>
                    <div style={{width:"100%"}}>
                        <img src={require('../img/shoptu.png')} style={{width:'100%'}}/>
                        <WhiteSpace/>
                        <img src={require('../img/shoptu.png')} style={{width:'100%'}}/>
                        <WhiteSpace/>
                        <img src={require('../img/shoptu.png')} style={{width:'100%'}}/>
                    </div>
                </WingBlank>
            </div>
        )
    }
}
