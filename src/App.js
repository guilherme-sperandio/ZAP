import React, {useState,useEffect} from 'react';
import './App.css';

import Chatlistitem from '../src/components/chatlistitem';
import ChatIntro from '../src/components/chatintro';
import ChatWindow from '../src/components/chatwindow';

import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';


export default () => {
  const [chatlist , setChatlist] = useState([
    {chatId: 1, title: 'Guilherme', image: 'https://image.freepik.com/vetores-gratis/design-de-avatar-de-pessoa_24877-38140.jpg'},
    {chatId: 2, title: 'jorge', image: 'https://image.freepik.com/vetores-gratis/design-de-avatar-de-pessoa_24877-38140.jpg'},
    {chatId: 3, title: 'Guilherme', image: 'https://image.freepik.com/vetores-gratis/design-de-avatar-de-pessoa_24877-38140.jpg'},
    {chatId: 4, title: 'Guilherme', image: 'https://image.freepik.com/vetores-gratis/design-de-avatar-de-pessoa_24877-38140.jpg'},
  ]);
  const [activechat, setActiveChat] = useState({});
  return (
    <div className="app-window">
      <div className="sidebar">
        
        <header>
          <img className="header-avatar" src="https://image.freepik.com/vetores-gratis/design-de-avatar-de-pessoa_24877-38140.jpg" alt=""/>
          <div className="header-buttons">
            <div className="header-btn">
              <DonutLargeIcon style={{color: '#919191'}}/>
            </div>
            <div className="header-btn">
              <ChatIcon style={{color: '#919191'}}/>
            </div>
            <div className="header-btn">
              <MoreVertIcon style={{color: '#919191'}}/>
            </div>
          </div>        
        </header>

        <div className="search">
          <div className="search-input">
            <SearchIcon fontSize="small" style={{color: '#919191'}}/>
            <input type="search" placeholder="Procurar ou começar uma nova conversa"/>
          </div>
        </div>

        <div className="chatlist">
          {chatlist.map((item,key)=>(
            <Chatlistitem
              key = {key}
              data = {item}
              active = {activechat.chatId === chatlist[key].chatId }
              onClick = {()=> setActiveChat(chatlist[key])}
            />
          ))}
        </div>

      </div>
      <div className="contentarea">
        {activechat.chatId !== undefined &&
          <ChatWindow/>
        }
        {activechat.chatId === undefined &&
          <ChatIntro/>
        }
        
      </div>
    </div>
  );
}