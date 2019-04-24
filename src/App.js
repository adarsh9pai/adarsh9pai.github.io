import React, { Component, Text } from 'react';
import logo from './logo.svg';
import './App.css';
import { Layout, Popover, Tabs, Comment, Card, Icon, Avatar, Alert, Typography, Tag, List } from 'antd';
import { Document, Page, pdfjs, View } from 'react-pdf';
import resume from './assets/resume.pdf';
const { Header, Content, Footer } = Layout;
const { Meta } = Card;
let Markdown = require('react-markdown');
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
const { Title } = Typography;
const TabPane = Tabs.TabPane;

const PGP_PUBLIC_KEY = `-----BEGIN PGP PUBLIC KEY BLOCK-----
Version: BCPG C# v1.6.1.0

mQENBFy+9n8BCACBNMR4nZwOOVq/o4j9n5eiJURJoA1WTb+gapqNXuQWVntzpK1Y
HwaMSWSTfxcO5hjiRnZ15BsMUP/vkTnJRFZdTkCdrL47GQDGo/6sO/MeNf8wIAHq
zJMQIhwwjVfhcpsaYSvZNL1Sh++QznDpKzQy/S9TJuXmzho8Gpnud8h8YcQNvCbK
prmxDuH0L+O1lFEI3mc39WxoC3AGT69wRGsg9xSSLrfVp3bx4LhRvqv4KyFsEUCr
N2CsFKB3Mnb0rKNhYe/RyJj2MFdij/h8bfsuJdysgaSXdx2RwUlzG7fmH+pXfWQX
53u8tbBk3kISsiE8b6NJ/5x7h1L7aP9+HN6TABEBAAG0FGFkYXJzaDlwYWlAZ21h
aWwuY29tiQEcBBABAgAGBQJcvvZ/AAoJEG8OWIB8ETXTQd0H+wWxtBp4VS/Tq3SS
FfJWdye+QWAGR9HaHjHNwWPQZAIdJpYEOEFs/2LFtjenE0LlAOVltFJqWnYeP9Rq
do4HLuMFIbZ99FJQT0KNEEil4CEWlLhlWCLS/w9E+F/daIQs9NasfOd/HXW4l9Kg
NUcsbqIXpPwOa3WgjkxNVaHtNnLf88fmScpLdQxhXg6wgSK1dw/SpDXMxPvhSAJ5
b0EduxXAvQvBbhJ0PdLTLp1RDqPlgkrhWmYtXxtMaxM7gdmpilAH3e4q2d519QXM
aYOUs9tszuJc/7AuzSavupvD9LQ0cYrwnqAPwslGm7/sK7jOEAB0ZBQudHYqjzts
WxyybTY=
=WFLq
-----END PGP PUBLIC KEY BLOCK-----`;


const socialLinks = [
  {
    title: 'Email',
    handle: 'adarsh9pai@gmail.com',
    link: 'mailto:adarsh9pai@gmail.com',
    icon : 'mail'
  },
  {
    title: 'GitHub',
    handle: '@adarsh9pai',
    link: 'https://www.github.com/adarsh9pai',
    icon : 'github'
  },
  {
    title: 'LinkedIn',
    handle: '/in/adarsh9pai',
    link: 'https://www.linkedin.com/in/adarsh9pai',
    icon : 'linkedin'
  },
  {
    title: 'Twitter',
    handle: '@adarsh9pai',
    link: 'https://www.twitter.com/adarsh9pai',
    icon : 'twitter'
  },
  {
    title: 'Facebook',
    handle: 'adarsh9pai',
    link: 'https://www.facebook.com/adarsh9pai',
    icon : 'facebook'
  }
]

class App extends Component {

  render() {
    return (
      <Layout className='layout'>
        <Header style = {{backgroundColor : '#1a1a1d'}}>
          <h3 style={{ color: 'white' }}>
            Adarsh Yogesh Pai
            </h3>
        </Header>
        <Content style = {{textAlign : 'center', backgroundColor : '#1a1a1d'}}>
            <div style = {{minHeight : 'calc(100vh - 140px)'}}>
            <Tabs defaultActiveKey="1" style = {{padding:'20px 40px', color : '#05386b'}}>
              <TabPane tab="About" key="1">
                <Avatar size={120} src="https://media.licdn.com/dms/image/C4E03AQEkAJNMel4j6Q/profile-displayphoto-shrink_200_200/0?e=1561593600&v=beta&t=4Qq5KQ2zk7ZuH7vfHRY7qQPVlqSNvcD7CyGl7g0gy2U" />
                <br />
                <br />
                <Title>Hi, I'm Adarsh</Title>
              </TabPane>
              <TabPane tab="Work" key="2">
              </TabPane>
              <TabPane tab="Contact" key="3" style={{ padding: '20px 100px' }}>
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
