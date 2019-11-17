import React, { Component } from 'react'
// import {Link,Route} from 'react-router-dom'
import { NavBar,Icon,Grid, WhiteSpace, WingBlank } from 'antd-mobile';
import Setting from './Setting'

const name=['购物车','优惠券','在线服务','我的收藏','我的关注','收货地址','沙发','家居饰品','户外家具','全部分类'];
const data = Array.from(new Array(10)).map((_val, i) => ({
    icon: 'img/circle'+i+'.png',
    text: name[i],
}));  
export default class Mine extends Component {
    render() {
        return (
            <div>
                <NavBar
                style={{backgroundColor:'#3fcccb',color:'white'}}
                rightContent={[
                    // <button style={{background:'#3fcccb',border:'#3fcccb'}}>
                    //     <Link to='/s'>
                    //         <img src={require('../img/icon-test.png')} style={{width:'25%'}}/>
                    //     </Link>
                    // </button>
                ]}
                >我的</NavBar>
                <div style={{width:'100%'}}>
                    <img src={require('../img/mine.png')} width="100%"/>
                </div>
                <WhiteSpace/>
                <div style={{width:'100%'}}>
                    <img src={require('../img/ren.png')} style={{width:'100%'}}/>
                </div>
                <WingBlank>
                    <WhiteSpace/>
                    <div style={{width:"100%"}}>
                        <div className="sub-title">我的订单 </div>
                        <WhiteSpace/>
                        <Grid data={data}
                        columnNum={3}
                        renderItem={dataItem => (
                            <div>
                                <img src={dataItem.icon} style={{ width: '50%', height: '50%' }} alt="" />
                                <div style={{ fontSize: '14px',marginTop:'10px'}}>
                                    <span>{dataItem.text}</span>
                                </div>
                            </div>
                        )}
                        />
                    </div>
                </WingBlank>
                {/* <Route path='/s' component={<Setting/>}/> */}
            </div>
        )
    }
}
