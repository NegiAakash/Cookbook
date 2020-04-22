import React, { useEffect, useState } from 'react'
import { Row, Col, Input, List, Layout} from 'antd';
import '../App';
import Recipe from './Recipe';


const {  Content, Footer } = Layout;
const { Search } = Input;

const Body =()=> {

    

        const API_Key = '081e823baad8cd63d238536fccf5b221';
        const APP_ID = '947dc512';
        
        const [search, setSearch] = useState('');
        const [recipe, setRecipe] = useState([]);
        const [query, setQuery] = useState('');
        
        
        useEffect(()=>{
          connection();
        },[query]);
      
        const updateSearch = e=>
        {
          setSearch(e.target.value);
        }
      
      
        const getSearch = e =>
        {
       
          setQuery(search);
        }
      
        const connection = async ()=>
        {
          const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${API_Key}`);
          const data = await response.json();
          setRecipe(data.hits);
          console.log(data.hits);
        }

        return (
            <div>
                
        <Layout>
           
            <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
            {/* <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb> */}
            <div className="site-layout-background" style={{ padding: 24, minHeight: "85vh" }}>
                <Row className="search-box">
                <Col span={6} offset={10}>
                    <Search placeholder="Name of recipe you want to find" value={search} onChange={updateSearch} onSearch={getSearch}  enterButton />
                </Col>
                </Row>
                
                <List
                    itemLayout="vertical"
                className="list-main"
                    pagination={{
                    onChange: page => {
                        // console.log(page);
                    },
                    pageSize: 6,
                    }}
                    dataSource={recipe}
                    footer={
                    <div>
                    
                    </div>
                    }
                        renderItem={item => (
                            // {recipe.map(recipes=>(
                        
                            <Recipe 
                            key={item.recipe.label}
                            Title={item.recipe.label}
                            Image={item.recipe.image}
                            Desc={item.recipe.ingredients}
                            />
                        
                        
                        )}

                />
            </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
            </div>
        )
    }

export default Body;