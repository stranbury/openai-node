import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import messagesOpenai from '../public/conversations.json'; 

import styles from "./index.module.css";
import styled, { css } from 'styled-components'
type Message = {
  text: string;
  isReceived: boolean;
  isMarkdown: boolean;
};

const ChatContainer = styled.button`
  background: transparent;
  border-radius: 4px;
  border: none;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05), 
              0px 4px 80px rgba(0, 0, 0, 0.1);
  color: palevioletred;
  margin: 4em 1em;
  width: calc(100% - 2em);
  height: calc(100vh - 8em);
  display: grid;
  grid-template-rows: 90% 10%;
  grid-template-columns: 1fr;
  padding: 2em 1em;
  box-sizing: border-box;
  grid-gap: 1em;

  ${props =>
    props.$primary &&
    css`
      background: palevioletred;
      color: white;
    `};
`;

const MessageContainer = styled.ul`
    background: rgba(255, 255, 255, 0.8);
    border-radius: 16px;
    backdrop-filter: blur(8px);
    min-height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    padding: 0;
    margin: 0;
    list-style: none;
    height: 100%;
    overflow-y: scroll;
    scrollbar-width: none;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
        display: none;
    }
    li {
        margin-bottom: 0.5em;
        padding: 0.5em 1em;
        border-radius: 0.5em;
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1), 
                    0px 2px 20px rgba(0, 0, 0, 0.05);
        background: rgba(255, 255, 255, 0.8);
        max-width: 80%;
        word-wrap: break-word;
    }
    li.text-left {
        align-self: flex-start;
        background: rgba(241, 240, 240, 0.8);
    }
    li.text-right {
        align-self: flex-end;
        background: rgba(225, 255, 199, 0.8);
    }
    li:last-child {
        margin-bottom: 0;
    }
`;

const ChatInput = styled.input`
    background: rgba(255, 255, 255, 0.8);
    border: none;
    border-radius: 16px;
    padding: 0.5em 1em;
    width: 100%;
    box-sizing: border-box;
    outline: none;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1), 
                0px 2px 20px rgba(0, 0, 0, 0.05);
    &:focus {
        border-color: #aaa;
    }
`;


const GlassButton = styled.button`
  background-color: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(5px);
  border-radius: 10px;
  border: none;
  width: 100%;
    height: 100%;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
  color: green;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  padding: 1em 2em;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: rgba(255, 255, 255, 0.5);
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.8);
    transform: translateY(-2px);
  }

  &:active {
    background-color: rgba(255, 255, 255, 0.7);
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
    transform: translateY(0);
  }

  &:focus {
    outline: none;
  }
`;

const ChatButton = styled.button`
    border: 1px solid #ccc;
    border-radius: 0.5em;
    padding: 0.5em 1em;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    outline: none;
    &:focus {
        border-color: #aaa;
    }
`
const ChatInputContainer = styled.div`
    display: grid;
    width: calc(100% - 2em);
    height: 100%;
    grid-template-columns: 90% 10%;
    grid-template-rows: 1fr; 
    grid-gap: 1em;

`
const Chat = () => {
  const [messages, setMessages] = useState<any>(messagesOpenai.chats[0].mapping);//should be type Message[]
  const [inputMessage, setInputMessage] = useState('');
console.log( messages)
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputMessage(event.target.value);
  };

  const handleSendMessage = () => {
    // if (inputMessage.trim()) {
    //   setMessages([...messages, { text: inputMessage, isReceived: false, isMarkdown: false }]);
    //   setInputMessage('');
    // Object.values(myObj)
    // }
    console.log("send message")
    alert(inputMessage)
  };

  return (
    <ChatContainer>
        <MessageContainer>
          {
            
          Object.values(messages).map((message, index) => (
            <li
              key={index}
              className={`p-2 bg-white rounded shadow-sm ${
                message.isReceived ? 'text-left' : 'text-right'
              }`}
            >
              {message.isMarkdown ? (
                <ReactMarkdown className="prose">{message.text}</ReactMarkdown>
              ) : (
                `${message}`
              )}
            </li>
          ))
          }
        </MessageContainer>
      
      <ChatInputContainer>
        <ChatInput
          type="text"
          value={inputMessage}
          onChange={handleInputChange}
          placeholder="Type your message"
        />
        <GlassButton
          onClick={handleSendMessage}
        >
          Send
        </GlassButton>
      </ChatInputContainer>
    </ChatContainer>
  );
};

export default Chat;
