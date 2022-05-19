import React from 'react';
import './messages.scss';
import { RiMailDownloadLine } from "react-icons/ri";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";

const Messages = () => {
  return (
    <div className='messages'>
      <div className="container">
        <p>Messages</p>
        <div className="logos">
          <RiMailDownloadLine className='logo'/>
          <MdOutlineKeyboardArrowUp />
        </div>
      </div>
    </div>
  );
};

export default Messages;
