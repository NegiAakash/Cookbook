import React, { Component } from 'react'
import {Layout, Col, Row, Avatar} from 'antd';
import {UserOutlined,FacebookFilled, TwitterSquareFilled, InstagramFilled, MailFilled } from '@ant-design/icons';

const { Header, Content, Footer } = Layout;
const Contact = ()=>{
    return(
        <div >
            <Layout className="contactBg">
           
                <Content className="site-layout " style={{ padding: '0 50px', marginTop: 64 }}>
            
                    <div className="site-layout-background " style={{ padding: 24, minHeight: "85vh" }} >
                        
                        <Row className="">
                          
                            <Col span={15} offset={10} className="contact-icon">
                                <Avatar size={250} icon={<UserOutlined />} />
                                
                            </Col>
                            
                        </Row>
                        <div className="contact-text">
                                    <strong>AAKASH </strong>NEGI
                            </div>
                        <h3 className="contact-desc">Web developer and Game developer</h3>
                        <div className="social-icon">
                            <a href="https://www.facebook.com"><FacebookFilled  className="contact-social-icon"/></a>
                            <a href="https://www.twitter.com"><TwitterSquareFilled  className="contact-social-icon"/></a>
                            <a href="https://www.instagram.com"><InstagramFilled  className="contact-social-icon"/></a>
                            <a href="https://www.gmail.com"><MailFilled  className="contact-social-icon"/></a>
                        </div>
                    </div>  
               </Content>
               <Footer className="contactBg" style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        </div>
    )
}

export default Contact;