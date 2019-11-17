import React, { Component } from 'react'
import { NavBar,Icon, List,WhiteSpace,Button ,Carousel } from 'antd-mobile';
const Item = List.Item;
const Brief = Item.Brief;
export default class Setting extends Component {
    render() {
        return (
            <div>
                <NavBar
                style={{backgroundColor:'#3fcccb',color:'white'}}
                leftContent={[
                    <Icon key="0" type="left" />,
                ]}
                >设置</NavBar>
                <List className="my-list">
                    <Item 
                    arrow="horizontal" 
                    thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                    multipleLine 
                    onClick={() => {}}
                    >
                    资料修改
                    </Item>
                    <Item
                    arrow="horizontal"
                    thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                    multipleLine
                    onClick={() => {}}
                    platform="android"
                    >
                    密码修改
                    </Item>
                    <WhiteSpace />
                    <Item
                    arrow="horizontal"
                    thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                    multipleLine
                    onClick={() => {}}
                    >
                    清除缓存
                    </Item>
                    <WhiteSpace />
                    <Item 
                    arrow="horizontal" 
                    thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                    multipleLine 
                    onClick={() => {}}
                    >
                    关于我们
                    </Item>
                    <WhiteSpace />
                    <Button type="warning">删除</Button>
                </List>
            </div>
        )
    }
}
