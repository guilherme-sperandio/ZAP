import React from 'react';
import './chatlistitem.css';

export default ({onClick,active,data}) => {
    return(
        <div className={`chatlistitem ${active?'active':''}`}
        onClick ={onClick}> 
            <img className="chatlistitem-avatar" src={data.image} alt=""/>
            <div className="chatlistitem-lines">
                <div className="chatlistitem-line">
                    <div className="chatlistitem-name">
                        {data.title}
                    </div>
                    <div className="chatlistitem-date">
                        19:00
                    </div>
                </div>
                <div className="chatlistitem-line">
                    <div className="chatlistitem-lastmsg">
                        <p>
                            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

