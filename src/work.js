import {Typography, Icon,Row, Col, List, Button, Avatar, Tag} from 'antd';
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSnapchatGhost, faGithub} from '@fortawesome/free-brands-svg-icons';

import './App.css';
import UTASeal from './assets/uta.jpg';
import Emerson from './assets/emerson.jpg';
import UTADSS from './assets/utadss.jpg';


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
    <div style = {{textAlign : 'center'}}>
    <Row>
    <Col span = {6}></Col>
    <Col span = {12}>
    <br/>
    <Text style = {{color : 'white'}}>Currently updating this section(as of June 29, 2019). Meanwhile take a look at my repositories, resume or contact me for information.</Text><br/><br/>
    <h3 style = {{color : 'white'}}>Download my resume <a href = "https://drive.google.com/file/d/1MMlz_rQMEK6OMmqIfrTptexWZCvsQ83l/view?usp=sharing" style = {{color : '#b37feb'}}>here</a> for a concise look at my work.</h3><br/>   

    <div></div>
    
    <h3 style = {{color : '#eb2f96',fontWeight:'800'}}>Work Experience and Education</h3><br/>
    <Avatar src = {UTADSS} size = {150}></Avatar><br/><br/>
    <h3 style = {{color : 'white'}}>Division of Student Success</h3>
    <h5 style = {{color : 'grey'}}>August 18' - Present</h5>
    <h5 style = {{color : 'grey'}}>Arlington, TX</h5>
    <h4 style = {{color : 'white'}}>I work as an instructor for UNIV 1131 - Student Success for Computer Science and Music majors. My primary responsibility is lecturing, grading assignments and conducting office hours.</h4>
    <br/>


    <Avatar src = {UTASeal} size = {150}></Avatar><br/><br/>
    <h3 style = {{color : 'white'}}>Hercleia Human-Centered Computing Lab</h3>
    <h5 style = {{color : 'grey'}}>Summer '18 - Fall '18</h5>
    <h5 style = {{color : 'grey'}}>Arlington, TX</h5>
    <h4 style = {{color : 'white'}}>Improved Tensorflow based hand detector to streamline building datasets using OpenCV. Primarily worked with Python, OpenCV and C#.</h4>
    <br/>


    <Avatar src = {Emerson} size = {150}></Avatar><br/><br/>
    <h3 style = {{color : 'white'}}>Emerson Automation Solutions</h3>
    <h5 style = {{color : 'grey'}}>June 17' - July '17</h5>
    <h5 style = {{color : 'grey'}}>Mumbai, India</h5>
    <h4 style = {{color : 'white'}}>Developed an internal web-based application to optimize scheduling and improve operational effectiveness. Primarily used PHP and Postgres.</h4>
    <br/>
   
    <Avatar src = {UTASeal} size = {150}></Avatar><br/><br/>
    <h3 style = {{color : 'white'}}>University of Texas at Arlington</h3>
    <h5 style = {{color : 'grey'}}>August 17' - May 21'</h5>
    <h5 style = {{color : 'grey'}}>Arlington, TX</h5>
    <h4 style = {{color : 'white'}}>
    Major GPA <strong>3.92</strong> Cumulative GPA <strong>3.61</strong><br/>
    Rising junior majoring in Computer Science.<br/>
    Maverick Academic Scholarship Recipient and part of the Honors College.<br/>
    Graduating <strong>May 2021</strong>.</h4>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>

    <h3 style = {{color : '#eb2f96',fontWeight:'800'}}>Prominent Projects</h3><br/>
    <h3 style = {{color : 'white'}}>Edunate</h3>
    <h4 style = {{color : 'white'}}>Succeed in College through micro-donations, peer tutoring and textbook exchange</h4>
    <h4 style = {{color : 'white'}}>🥇 1st Place and Best Use of <FontAwesomeIcon icon = {faSnapchatGhost}/> Snap Kit.</h4>
    <h4 style = {{color : 'white'}}>📌 HackHouston, Texas Southern University</h4>
    <h4 style = {{color : 'white'}}>👨‍💻
    <Tag color="#b37feb"><a href = "https://adarshpai.com" style = {{color : 'white', textDecoration : 'none'}}> Adarsh Pai</a></Tag>
    <Tag color="#b37feb"><a href = "https://jamesrbrady.com" style = {{color : 'white', textDecoration : 'none'}}> James Brady</a></Tag>
    <Tag color="#b37feb"><a href = "https://patrickbrady.me" style = {{color : 'white', textDecoration : 'none'}}> Robert Brady</a></Tag>
    <Tag color="#b37feb"><a href = "https://imtiazkhaled.com" style = {{color : 'white', textDecoration : 'none'}}> Imtiaz Khaled</a></Tag>
    <br/>
    <br/>
    <a href = "https://github.com/adarsh9pai/edunate" style = {{color : "#b37feb"}}>Visit <Icon type="github" style = {{color : "#b37feb"}}/> Repo</a>
    </h4>
    <br/>
    <br/>

    <h3 style = {{color : 'white'}}>MemeRoyale</h3>
    <h4 style = {{color : 'white'}}>The Battle Royale of Memes</h4>
    <h4 style = {{color : 'white'}}>🥇 1st Place and Best 📱Mobile Project</h4>
    <h4 style = {{color : 'white'}}>📌 HackSMU, Southern Methodist University</h4>
    <h4 style = {{color : 'white'}}>👨‍💻
    <Tag color="#b37feb"><a href = "https://adarshpai.com" style = {{color : 'white', textDecoration : 'none'}}> Adarsh Pai</a></Tag>
    <Tag color="#b37feb"><a href = "https://jamesrbrady.com" style = {{color : 'white', textDecoration : 'none'}}> James Brady</a></Tag>
    <Tag color="#b37feb"><a href = "https://patrickbrady.me" style = {{color : 'white', textDecoration : 'none'}}> Robert Brady</a></Tag>
    <Tag color="#b37feb"><a href = "#" style = {{color : 'white', textDecoration : 'none'}}> Nahian Alam</a></Tag>
    <br/>
    <br/>
    <a href = "https://github.com/adarsh9pai/memeroyale" style = {{color : "#b37feb"}}>Visit <Icon type="github" style = {{color : "#b37feb"}}/> Repo</a>
    </h4>
    <br/>
    <br/>

    <h3 style = {{color : 'white'}}>Cibo</h3>
    <h4 style = {{color : 'white'}}>Cibo is a food and event organization app powered by curated listings and crowd-sourced recommendations to help you find the perfect place to dine.</h4>
    <h4 style = {{color : 'white'}}>🥇 1st Runner Up, Best Project - Fundamentals of Software Engineering</h4>
    <h4 style = {{color : 'white'}}>📌 University of Texas at Arlington</h4>
    <h4 style = {{color : 'white'}}>👨‍💻
    <Tag color="#b37feb"><a href = "https://adarshpai.com" style = {{color : 'white', textDecoration : 'none'}}> Adarsh Pai</a></Tag>
    <Tag color="#b37feb"><a href = "#" style = {{color : 'white', textDecoration : 'none'}}> Kanyon Loyd</a></Tag>
    <Tag color="#b37feb"><a href = "#" style = {{color : 'white', textDecoration : 'none'}}> Jamshed Jahangir</a></Tag>
    <Tag color="#b37feb"><a href = "#" style = {{color : 'white', textDecoration : 'none'}}> Luke Owens</a></Tag>
    <Tag color="#b37feb"><a href = "#" style = {{color : 'white', textDecoration : 'none'}}> Said Adem</a></Tag>
    
    <br/>
    <br/>
    <a href = "https://github.com/adarsh9pai/cibo" style = {{color : "#b37feb"}}>Visit <Icon type="github" style = {{color : "#b37feb"}}/> Repo</a>
    </h4>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <h3 style = {{color : '#eb2f96',fontWeight:'800'}}>Code Repositories</h3>
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