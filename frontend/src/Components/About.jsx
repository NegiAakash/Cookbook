import React, { Component } from 'react'
import {Layout} from 'antd';

const { Header, Content, Footer } = Layout;
const About = ()=>{
    return(
        <div>
            <Layout>
           
                <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
                {/* <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb> */}
                    <div className="site-layout-background" style={{ padding: 24, minHeight: "85vh" }}>
                        AAbout
                    </div>
               </Content>
               <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        </div>
    )
}

export default About;