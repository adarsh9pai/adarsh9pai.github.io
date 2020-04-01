import React, { Component } from 'react';
import './App.css';
import QueueAnim from 'rc-queue-anim'
import { Layout, Typography} from 'antd';
import { InstagramOutlined, LinkedinFilled, MailFilled, FilePdfOutlined, GithubOutlined, CodeFilled, TwitterOutlined, FilePdfFilled} from '@ant-design/icons';
import Pdf from './assets/resume.pdf';
const { Text } = Typography;
const { Header, Content, Footer } = Layout;




class App extends Component {
  
  render() {
    return (
      <Layout>
        <Header></Header>
        <Content>
          <QueueAnim delay={500} type='left' ease = 'easeInOutQuart'>
            <div key = {1}>
              <Text className = "IntroductionText">Hi, I'm <mark><a href = "#">Adarsh Pai</a></mark>.<br/><br/></Text>
              <Text className = "IntroductionText">I will be spending this summer working on fascinating problems at <mark><a href = "https://www.citrix.com/">Citrix</a></mark> on the <mark><a href = "https://www.citrix.com/products/citrix-virtual-apps-and-desktops/">Virtual Apps and Desktops Engineering</a></mark> team. Previously worked at <mark><a href = "https://www.emerson.com/">Emerson</a></mark>.<br/><br/></Text>
              <Text className = "IntroductionText">Computer Science at the <mark><a href = "https://www.uta.edu/">University of Texas at Arlington</a></mark>, Class of 2021.<br/><br/></Text>
              <Text className = "IntroductionText">Won a Nintendo Switch at a <mark><a href = "https://www.theshorthorn.com/news/for-uta-student-hackathon-team-winning-is-in-the-code/article_133c3eb8-6de8-11e9-a1f8-1bf4fa4b99df.html">hackathon</a></mark> once.<br/><br/></Text>
              <Text className = "IntroductionText">Raised in Mumbai, India.<br/><br/></Text>
              <Text className = "IntroductionText">Love Math, Problem Solving and Algorithms? Check out <mark><a href = "https://www.blazeoj.com/">BlazeJudge</a></mark>.<br/><br/></Text>
            </div>
            <div key = {2}>
              <a href = "https://www.instagram.com/adarsh9pai" className = "social"><InstagramOutlined /></a>
              <a href = "https://www.twitter.com/adarsh9pai" className = "social"><TwitterOutlined /></a>
              <a href = "https://www.github.com/adarsh9pai" className = "social"><GithubOutlined /></a>
              <a href = "https://www.devpost.com/adarsh9pai" className = "social"><CodeFilled /></a>
              <a href = "https://www.linkedin.com/in/adarsh9pai" className = "social"><LinkedinFilled /></a>
              <a href = "mailto://adarsh9pai@gmail.com/" className = "social"><MailFilled /></a>
              <a href = {Pdf} target = "_blank" rel="noopener noreferrer" className = "social"><FilePdfFilled /></a>
            </div>
          </QueueAnim>
        </Content>
        <Footer style = {{textAlign : 'center'}}>
          <Text>© 2020</Text>
        </Footer>
      </Layout>
    )
  }
}

export default App;