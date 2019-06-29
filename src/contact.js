import React, { Component, textarea} from 'react';
import { Layout, Popover, Tabs, Comment, Card, Icon, Avatar, Alert, Typography, Tag, List } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebook,faGithub,faTwitter,faInstagram,faLinkedin,faKeybase,faYCombinator,faGoogle} from '@fortawesome/free-brands-svg-icons';
import Item from 'antd/lib/list/Item';
import './App.css';
const {Text, Title} = Typography;

const social = [
    {"name":"github","link" : "https://www.github.com/adarsh9pai", "title":"GitHub // @adarsh9pai", "icon":faGithub, "color" : "#4078c0"},
    {"name":"twitter","link" : "https://www.twitter.com/adarsh9pai", "title":"Twitter // @adarsh9pai","icon":faTwitter, "color" : "#1da1f2"},
    {"name":"linkedin","link": "https://www.linkedin.com/in/adarsh9pai", "title":"LinkedIn // @adarsh9pai", "icon":faLinkedin, "color" : "#0077b5"},
    {"name":"instagram","link" : "https://www.instagram.com/adarsh9pai", "title":"Instagram // @adarsh9pai", "icon":faInstagram, "color" : "#e1306c"},
    {"name":"y-combinator","link": "https://news.ycombinator.com/user?id=adarsh9pai", "title":"Hacker News // @adarsh9pai", "icon":faYCombinator, "color" : "#ff4000"},
    {"name":"keybase","link": "https://keybase.io/adarsh9pai", "title":"Keybase // @adarsh9pai", "icon":faKeybase, "color" : "#4c8eff"}
]

const pgp = `-----BEGIN PGP PUBLIC KEY BLOCK-----
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
-----END PGP PUBLIC KEY BLOCK-----
`

let links = [];
for(let i = 0; i < social.length; ++i){
    let Color = social[i].color;
    links.push( <a href = {social[i].link} style = {{color:'white'}}><FontAwesomeIcon icon = {social[i].icon} /> <strong style = {{color : Color}}>{social[i].title}</strong><br/><br/></a>);
}


const Contact = () =>{
    return(
        <div style = {{textAlign : "center"}}>
        <strong style = {{color : 'white'}}>You can find me online on</strong><br/><br/> 
        {links}
        <br/>
        <strong style = {{color : 'white'}}>or email me at <a href = "mailto:adarsh9pai@gmail.com" style = {{color : "#b37feb"}}>adarsh9pai@gmail.com</a></strong><br/><br/><br/>
        <h3 style = {{color : '#eb2f96',fontWeight:'800'}}>PGP Public Key</h3>
        <pre><mark style = {{color : 'white',backgroundColor : '#232323'}}>{pgp}</mark></pre>
        </div>
    )
}

export default Contact;