import React, { Component } from 'react'
import { NavBar, Icon,Tabs,WingBlank, WhiteSpace} from 'antd-mobile';
const tabs2 = [
    { title: '推荐', sub: '1' },
    { title: '冬季', sub: '2' },
    { title: '宜家', sub: '3' },
    { title: '小清新', sub: '4' },
    { title: '小户型', sub: '5' },
    { title: '个性色彩', sub: '6' },
  ];
export default class Inspiration extends Component {
    render() {
        return (
            <div>
                <NavBar
                style={{backgroundColor:'#3fcccb',color:'white'}}
                rightContent={[
                    <Icon key="0" type="search" style={{ marginRight: '16px' }} />
                ]}
                >灵感</NavBar>
                <Tabs tabs={tabs2}
                    initialPage={1}
                    onChange={(tab, index) => { console.log('onChange', index, tab); }}
                    onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                    >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
                        <WingBlank>
                            <div style={{width:'100%',float:'left'}}>
                                <img src={require('../img/linggantu1.png')} style={{width:'100%'}}/>
                                <WhiteSpace/>
                                <img src={require('../img/linggantu2.png')} style={{width:'100%'}}/>
                                <WhiteSpace/>
                                <img src={require('../img/linggantu1.png')} style={{width:'100%'}}/>
                                <WhiteSpace/>
                                <img src={require('../img/linggantu2.png')} style={{width:'100%'}}/>
                                <WhiteSpace/>
                                <img src={require('../img/linggantu1.png')} style={{width:'100%'}}/>
                                <WhiteSpace/>
                                <img src={require('../img/linggantu2.png')} style={{width:'100%'}}/>
                            </div>
                        </WingBlank>
                        

                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
                        <WingBlank>
                            <div style={{width:'100%',float:'left'}}>
                                <img src={require('../img/linggantu2.png')} style={{width:'100%'}}/>
                                <WhiteSpace/>
                                <img src={require('../img/linggantu1.png')} style={{width:'100%'}}/>
                                <WhiteSpace/>
                                <img src={require('../img/linggantu2.png')} style={{width:'100%'}}/>
                                <WhiteSpace/>
                                <img src={require('../img/linggantu1.png')} style={{width:'100%'}}/>
                                <WhiteSpace/>
                                <img src={require('../img/linggantu2.png')} style={{width:'100%'}}/>
                            </div>
                        </WingBlank>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
                        <WingBlank>
                            <div style={{width:'100%',float:'left'}}>
                                <img src={require('../img/linggantu1.png')} style={{width:'100%'}}/>
                                <WhiteSpace/>
                                <img src={require('../img/linggantu2.png')} style={{width:'100%'}}/>
                                <WhiteSpace/>
                                <img src={require('../img/linggantu1.png')} style={{width:'100%'}}/>
                                <WhiteSpace/>
                                <img src={require('../img/linggantu2.png')} style={{width:'100%'}}/>
                                <WhiteSpace/>
                                <img src={require('../img/linggantu1.png')} style={{width:'100%'}}/>
                                <WhiteSpace/>
                                <img src={require('../img/linggantu2.png')} style={{width:'100%'}}/>
                            </div>
                        </WingBlank>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
                        <WingBlank>
                            <div style={{width:'100%',float:'left'}}>
                                <img src={require('../img/linggantu2.png')} style={{width:'100%'}}/>
                                <WhiteSpace/>
                                <img src={require('../img/linggantu1.png')} style={{width:'100%'}}/>
                                <WhiteSpace/>
                                <img src={require('../img/linggantu2.png')} style={{width:'100%'}}/>
                                <WhiteSpace/>
                                <img src={require('../img/linggantu1.png')} style={{width:'100%'}}/>
                                <WhiteSpace/>
                                <img src={require('../img/linggantu2.png')} style={{width:'100%'}}/>
                            </div>
                        </WingBlank>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
                        <WingBlank>
                            <div style={{width:'100%',float:'left'}}>
                                <img src={require('../img/linggantu1.png')} style={{width:'100%'}}/>
                                <WhiteSpace/>
                                <img src={require('../img/linggantu2.png')} style={{width:'100%'}}/>
                                <WhiteSpace/>
                                <img src={require('../img/linggantu1.png')} style={{width:'100%'}}/>
                                <WhiteSpace/>
                                <img src={require('../img/linggantu2.png')} style={{width:'100%'}}/>
                                <WhiteSpace/>
                                <img src={require('../img/linggantu1.png')} style={{width:'100%'}}/>
                                <WhiteSpace/>
                                <img src={require('../img/linggantu2.png')} style={{width:'100%'}}/>
                            </div>
                        </WingBlank>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
                        <WingBlank>
                            <div style={{width:'100%',float:'left'}}>
                                <img src={require('../img/linggantu2.png')} style={{width:'100%'}}/>
                                <WhiteSpace/>
                                <img src={require('../img/linggantu1.png')} style={{width:'100%'}}/>
                                <WhiteSpace/>
                                <img src={require('../img/linggantu2.png')} style={{width:'100%'}}/>
                                <WhiteSpace/>
                                <img src={require('../img/linggantu1.png')} style={{width:'100%'}}/>
                                <WhiteSpace/>
                                <img src={require('../img/linggantu2.png')} style={{width:'100%'}}/>
                            </div>
                        </WingBlank>
                    </div>
                </Tabs>
            </div>
        )
    }
}
