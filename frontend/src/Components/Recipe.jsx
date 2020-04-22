import React, { Component } from 'react'
import { List, Avatar, Divider, Col , Skeleton} from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';


export default class Recipe extends Component {
    render() {
        const IconText = ({ icon, text }) => (
            <span>
              {React.createElement(icon, { style: { marginRight: 8 } })}
              {text}
            </span>
          );
        return (
            
            <Col span={18} offset={3}>
                    <List.Item
                        className="list-items"
                        key={this.props.Title}
                        actions={[
                        <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
                        <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
                        <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
                        ]}
                        extra={
                        <img
                            width={165}
                            alt="logo"
                            src={this.props.Image}
                        />
                        }
                    >
                        <List.Item.Meta
                        avatar={<Avatar src={this.props.Image} />}
                        title={<a href="">{this.props.Title}</a>}
                        description={this.props.Title}
                        />
                        {this.props.Title}
                    </List.Item>
                    <Divider/>
                </Col>
        )
    }
}
