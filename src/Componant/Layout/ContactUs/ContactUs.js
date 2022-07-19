import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
// import { EmailJSResponseStatus } from 'emailjs-com';
import emailjs from '@emailjs/browser';
import './ContactUs.css';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';
import { Button, Card, Stack } from 'react-bootstrap';


const ContactUs = () => {
    const { curentUser } = useAuth();
    console.log('curenUser=', curentUser);
    const [name, setName] = useState('');
    const [eamil, setEmail] = useState('');
    const [Message, setMessage] = useState('');

        

    const form = useRef();
    const userName = useRef();
    const Eamil = useRef();
    const message = useRef();

     useEffect(() => {
         localStorage.setItem('user name: ', JSON.stringify(name));
     }, [name]);

     useEffect(() => {
  const items = JSON.parse(localStorage.getItem('items'));
  if (items) {
   setName(items);
   console.log('items=',items);
  }
},[name])


const contact=useHistory();
    const sendEmail = (e) => {
        e.preventDefault();
        console.log('User Name: ', userName.current.value);
        console.log('Email: ', Eamil.current.value);
        console.log('Message: ', message.current.value);

        setName(userName.current.value);
        setEmail(Eamil.current.value);
        setMessage(message.current.value);

   

        //  emailjs
        //      .sendForm(
        //          'service_pjlhmx6',
        //          'template_0uyh89g',
        //          form.current,
        //          'cy4jYFdpvMCLmJFkf'
        //      )
        //      .then(
        //          (result) => {
        //              console.log(result.text);
        //          },
        //          (error) => {
        //              console.log(error.text);
        //              console.log('hi sovan');
        //          }
        //      );
    };
   
   //  currentUser=5;
    return (
        <>
        
            {curentUser && (
                <Card className='border-0'>
                    <form
                        className="from-section"
                        ref={form}
                        onSubmit={sendEmail}
                    >
                        <div>
                            <label>Name: </label>
                            <input className='my-2'
                                type="text"
                                ref={userName}
                                name="user_name"
                            />
                        </div>
                        <div >
                            <label>Email: </label>
                            <input className='mb-2' type="email" ref={Eamil} name="user_email" />
                        </div>
                        <div>
                            <label>Message: </label>
                            <textarea className='me-2' name="message" ref={message} />
                            <input className='' type="submit" value="Send" />
                        </div>
                    </form>
                    <div className="ouput-section">
                        <div> {name}</div>
                        <div> {eamil}</div>
                        <div> {Message}</div>
                    </div>
                </Card>
            )}
            {!curentUser && contact.push('./login')}
        </>
    );
};

export default ContactUs;
