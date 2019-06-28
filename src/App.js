import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Layout, Popover, Tabs, Comment, Card, Icon, Avatar, Alert, Typography, Tag, List } from 'antd';
import { Document, Page, pdfjs, View } from 'react-pdf';
import profile from './assets/image.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Links from './links';
import Contact from './contact';
import Work from './work';
let Markdown = require('react-markdown');

const { Header, Content, Footer } = Layout;
const { Meta } = Card;
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
const { Title, Text } = Typography;
const TabPane = Tabs.TabPane;




class App extends Component {
    state = {
        activeKey: "1"
    };
    changeTabKey = key => {
        this.setState({ activeKey: key });
    };
  
  render() {
    return (
      <Layout className='layout'>
        <Header style = {{backgroundColor : '#1a1a1d'}}>
          <h3 style={{ color: 'white' }}>
            <Icon type = "environment" style = {{color:'gray'}} /> DFW // BOM 
          </h3>
        </Header>
        <Content style = {{textAlign : 'center', backgroundColor : '#1a1a1d'}}>
            <div style = {{minHeight : 'calc(100vh - 140px)'}}>
            <Tabs activeKey={this.state.activeKey} onChange={this.changeTabKey} style = {{padding:'20px 20px', color : '#05386b'}}>
              <TabPane tab="About" key="1">
                <Avatar size={120} src='https://media.licdn.com/dms/image/C4E03AQEkAJNMel4j6Q/profile-displayphoto-shrink_200_200/0?e=1567036800&v=beta&t=a5uF7VhfIha7Ep7tZVrldUsMECNG60S_BciKsteIt9k'/>
                <br />
                <br />
                <Title>Hi, I'm Adarsh</Title>
                <Text strong style = {{color: 'white'}}>
                I am a budding <a href = "https://en.wikipedia.org/wiki/Software_engineer">Software Engineer</a> and rising junior majoring in <a href = "https://en.wikipedia.org/wiki/Computer_science">Computer Science</a> at the <a href = "https://www.uta.edu">University of Texas at Arlington</a>.<br/>
                Before this, I spent 17 years of my life in different parts of <a href = "https://en.wikipedia.org/wiki/India">India</a>, predominantly in <a href = "https://en.wikipedia.org/wiki/Chennai">Chennai</a> and <a href = "https://en.wikipedia.org/wiki/Mumbai" >Mumbai</a>.<br/>
                I like <a href="https://en.wikipedia.org/wiki/Learning">learning</a> and <a href="https://en.wikipedia.org/wiki/Building">building</a> things and you'll probably find me at a <a href="https://www.mlh.io">hackathon</a> on the weekends.<br/>
                </Text>
                <br/>
                <Text strong style = {{color: 'white'}}>
                  While you're here, check out my <a onClick = {() => this.changeTabKey("2")}>work</a>, what I <a onClick = {() => this.changeTabKey("4")}>like</a> or how to get in <a onClick = {() => this.changeTabKey("3")}>touch</a> with me.
                </Text>
              </TabPane>
              <TabPane tab="Work" key="2">
                  <Work />
              </TabPane>
              <TabPane tab="Contact" key="3" style={{ padding: '20px 100px' }}>
                  <Contact />
              </TabPane>
              <TabPane tab="Links" key="4" style={{ padding: '20px 100px' }}>
                  <Links />
              </TabPane>
            </Tabs>
            </div>
        </Content>
        <Footer style={{ textAlign: 'center',backgroundColor : '#1a1a1d'}}>
          <h4 style = {{color : 'white'}}>Adarsh Yogesh Pai ©2019</h4>
        </Footer>
      </Layout>
    )
  }
}

export default App;