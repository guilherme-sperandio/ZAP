import React,  { useState} from 'react';
import EmojiPicker from 'emoji-picker-react';



import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import CloseIcon from '@material-ui/icons/Close';
import SendIcon from '@material-ui/icons/Send';
import MicIcon from '@material-ui/icons/Mic';
import './chatwindow.css';

export default () => {
    const [text, settext] = useState('');
    const [emojiopen, setemojiopen] = useState(false);
    const handleEmojiClick = (e, emojiObject ) =>{
        settext (text + emojiObject.emoji);
    }

    const handleopenemoji = () =>{
        setemojiopen(true);
    }

    const handlecloseemoji = () =>{
        setemojiopen(false);
    }

    return(
        <div className="chatwindow">
            <div className="chatwindow-header">

                <div className="chatwindow-headerinfo">
                    <img className="chatwindow-avatar" src="https://image.freepik.com/vetores-gratis/design-de-avatar-de-pessoa_24877-38140.jpg" alt=""/>
                    <div className="chatwindow-name">
                        guilherme
                    </div>
                </div>
                <div className="chatwindow-headerbtn">
                    <div className="header-btn">
                        <SearchIcon style={{color: '#919191'}}/>
                    </div>
                    <div className="header-btn">
                        <AttachFileIcon style={{color: '#919191'}}/>
                    </div>
                    <div className="header-btn">
                    <MoreVertIcon style={{color: '#919191'}}/>
                    </div>
                </div>
            </div>

            <div className="chatwindow-body"> 
             
            </div>

            <div className="chatwindow-emojiarea" style={{height: emojiopen ? '200px' : '0px'}}>
                <EmojiPicker
                    onEmojiClick= {handleEmojiClick}
                    disableSearchBar
                    disableSkinTonePicker
                />

            </div>

            <div className="chatwindow-footer">
                <div className="chatwindow-pre">
                    <div className="header-btn" onClick={handlecloseemoji} style={{width: emojiopen ? '40px' : '0px'}}>
                        <CloseIcon style={{color: '#919191'}}/>
                    </div>
                    <div className="header-btn" onClick = {handleopenemoji} >
                        <InsertEmoticonIcon style={{color:emojiopen ? '#009688' : '#919191'}}/>
                    </div>
                    <div className="header-btn">
                        <AttachFileIcon style={{color: '#919191'}}/>
                    </div>
                </div>
                <div className="chatwindow-inputarea">
                    <input className="chatwindow-input"
                     type="text"
                      placeholder="Digite uma mensagem" 
                      value={text} 
                      onChange = {e => settext(e.target.value)}/>
                </div>
                <div className="chatwindow-pos">
                    {text !== '' &&
                    <div className="header-btn">
                        <SendIcon style={{color: '#919191'}}/>
                    </div>
                    }

                    {text === '' &&
                    <div className="header-btn">
                        <MicIcon style={{color: '#919191'}}/>
                    </div>
                    }
                </div>


            </div>
        
        </div>
    );
}