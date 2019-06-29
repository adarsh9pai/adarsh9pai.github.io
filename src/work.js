import {Typography, Icon,Row, Col, List} from 'antd';
import React, { Component } from 'react';
import './App.css';
const {Title, Text} = Typography;


const Work = props =>{
    const repos = [];
    for(let i = 0; i < props.data.length; ++i){
        if(props.data[i].description != null){
            repos.push(props.data[i]);
        }
    }
    console.log(repos.length);
    return(
    <div>
    <Row>
    <Col span = {6}></Col>
    <Col span = {12}>
    <h3 style = {{color : '#eb2f96',fontWeight:'800'}}>Project Repositories</h3>
    <List
      dataSource={repos}
      renderItem={item => 
        <div>
        <br/>
        <h3 style = {{color : 'white'}}>{item.name}</h3>
        <Text>{item.description}</Text><br/><br/>
        <a href = {"https://github.com/adarsh9pai/" + item.name} style = {{color : "#b37feb"}}>Visit <Icon type="github" style = {{color : "#b37feb"}}/> Repo</a>
        <br/><br/>
        </div>
    
    }
    />
    </Col>
    <Col span = {6}></Col>
    </Row>
    </div>

    )
}

export default Work;