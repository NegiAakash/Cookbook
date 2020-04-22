import React, { Component } from 'react'
import { Row, Col, Input, List, Layout, Menu, Breadcrumb} from 'antd';
import {NavLink} from 'react-router-dom';

const { Header, Content, Footer } = Layout;

export default class NavBar extends Component {
    render() {
        return (
            <div>
                
                
            <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
            <div />
            
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} >
            <Menu.Item className="logo" ><strong>COOKBOOK</strong></Menu.Item>
            
           <Menu.Item key="1" className="nav-list">
               <NavLink to="/">Recipe</NavLink>
            </Menu.Item>
            <Menu.Item key="2" className="nav-list">
                <NavLink to="/About">About</NavLink>
            </Menu.Item>
            <Menu.Item key="3" className="nav-list">
                <NavLink to="/Contact">Contact</NavLink>
            </Menu.Item>
            </Menu>
            </Header>
            </div>
        )
    }
}
