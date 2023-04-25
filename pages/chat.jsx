import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

type Message = {
  text: string;
  isReceived: boolean;
  isMarkdown: boolean;
};

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputMessage(event.target.value);
  };

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      setMessages([...messages, { text: inputMessage, isReceived: false, isMarkdown: false }]);
      setInputMessage('');
    }
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold mb-8">Next Chat</h1>
      <div className="chat-container">
        <ul className="space-y-4">
          {messages.map((message, index) => (
            <li
              key={index}
              className={`p-2 bg-white rounded shadow-sm ${
                message.isReceived ? 'text-left' : 'text-right'
              }`}
            >
              {message.isMarkdown ? (
                <ReactMarkdown className="prose">{message.text}</ReactMarkdown>
              ) : (
                message.text
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-8">
        <input
          type="text"
          className="chat-input"
          value={inputMessage}
          onChange={handleInputChange}
          placeholder="Type your message"
        />
        <button
          className="chat-send-button mt-4"
          onClick={handleSendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
