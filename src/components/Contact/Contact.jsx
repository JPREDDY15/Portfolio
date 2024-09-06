  import React,{useState} from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';
import {useRef} from "react"
import { themeContext } from '../../Context';
import { useContext } from 'react';
const Contact = () => {
  const theme=useContext(themeContext);
  const darkMode=theme.state.darkMode;
    const form = useRef();
    const [done, setDone] = useState(false)
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_v33c2yn','template_4st454n',form.current,'8p0bUA3jmqz9KBPTg')
        .then((result) => {
            console.log(result.text);
            setDone(true);
          },(error) => {
            console.log(error.text);
          });
    };
  
  return (
    <div className="Contact-form">
        <div className="w-right">
            <div className="awesome">
                <span style={{color:darkMode?'white':''}}>Get In Touch </span>
                <span>Contact me</span>
                <div className="blur s-blurl" style={{background:"#ABF1FF94"}}
                >
                </div>
            </div>
        </div>
        <div className="c-right">
            <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="user_name" className="user"  placeholder="Name"/>
          <input type="email" name="user_email" className="user" placeholder="Email"/>
          <textarea name="message" className="user" placeholder="Message"/>
          <input type="submit" value="Send" className="button"/>
          <span>{done && "Thanks for Contacting me"}</span>
          <div className="blur c-blurl" style={{background:"var(--purple)"}}
           ></div>
            </form>
        </div>
    </div>
  )
}

export default Contact