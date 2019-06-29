import {Typography, Icon,Row, Col, List, Button} from 'antd';
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
    <br/>
    <Text style = {{color : 'white'}}>Currently updating this section(as of June 29, 2019). Meanwhile take a look at my repositories, resume or contact me for information.</Text><br/><br/>
    <h3 style = {{color : 'white'}}>Download my resume <a href = "https://drive.google.com/file/d/1MMlz_rQMEK6OMmqIfrTptexWZCvsQ83l/view?usp=sharing" style = {{color : '#b37feb'}}>here</a> for a concise look at my work.</h3><br/>   

    <div></div>
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