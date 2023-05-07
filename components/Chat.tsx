'use client'
import { useState , FC} from 'react';
import styled from '@emotion/styled';
type MessageProps = {
  text: string;
};
const ChatBox = ({ chatName }) => {
  const [messages, setMessages] = useState([]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    const message = e.target.elements.message.value.trim();
    if (message) {
      // Send message to server here
      setMessages([...messages, message]);
      e.target.elements.message.value = '';
    }
  }

  return (
    <ChatBoxContainer>
      <ChatBoxHeader>{chatName}</ChatBoxHeader>
      <MessageList>
        {messages.map((message, index) => (
          <Message key={index} text={message} />
        ))}
      </MessageList>
      <MessageForm onSubmit={handleSendMessage}>
        <input type="text" name="message" placeholder="Type a message..." />
        <button type="submit">Send</button>
      </MessageForm>
    </ChatBoxContainer>
  );
}

const ChatBoxContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 1rem;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  display: flex;
  border-box-sizing: border-box;
  flex-direction: column;
  height: 80vh;
  padding: 1rem 1.5rem;
  width: 100%;
`;

const ChatBoxHeader = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const MessageList = styled.div`
  flex-grow: 1;
  overflow-y: scroll;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const Message:FC<MessageProps>= ({ text }) => (
  <MessageStyle>
    <div className="MessageText">{text}</div>
  </MessageStyle>
);

const MessageStyle = styled.div`
  margin-bottom: 1rem;
  .MessageText {
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 1rem;
    padding: 0.5rem 1rem;
  }
`;

const MessageForm = styled.form`
  display: flex;
  margin-top: 1rem;
  input[type="text"] {
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 1rem;
    border: none;
    flex-grow: 1;
    padding: 0.5rem 1rem;
  }
  button {
    background-color: rgba(255, 255, 255, 0.2);
    border: none;
    border-radius: 1rem;
    color: white;
    font-weight: bold;
    margin-left: 0.5rem;
    padding: 0.5rem 1rem;
    transition: all 0.2s ease;
    &:hover {
      background-color: rgba(255, 255, 255, 0.3);
      cursor: pointer;
    }
  }
`;

export default ChatBox;
