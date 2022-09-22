import React, { useEffect, useState } from 'react'
import './css/emaillist.css'
import IconButton from '@mui/material/IconButton';
import Checkbox from '@mui/material/Checkbox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RedoIcon from '@mui/icons-material/Redo';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardHideIcon from '@mui/icons-material/KeyboardHide';
import SettingsIcon from '@mui/icons-material/Settings';
import Section from '../components/Section';
import InboxIcon from '@mui/icons-material/Inbox';
import PeopleIcon from '@mui/icons-material/People';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import EmailRow from '../components/EmailRow';
import '../components/css/emailrow.css'
import { db } from '../firebase';

const EmailList = () => {
    const [emails, setEmails] = useState([])

    useEffect(() => {
        db.collection('emails')
        .orderBy('timestamp', 'desc')
        .onSnapshot(snapshot =>
            setEmails(
                snapshot.docs.map(doc => ({
                    id: doc.id,
                    data: doc.data(),
                }))))
    }, [])

  return (
    <div className='emaillist'>
      <div className="emaillist__settings">
        <div className="emaillist__settings--left">
            <Checkbox />
            <IconButton>
                <ArrowDropDownIcon />
            </IconButton>
            <IconButton>
                <RedoIcon />
            </IconButton>
            <IconButton>
                <MoreVertIcon />
            </IconButton>
        </div>
        <div className="emaillist__settings--right">
            <IconButton>
                <ChevronLeftIcon />
            </IconButton>
            <IconButton>
                <ChevronRightIcon />
            </IconButton>
            <IconButton>
                <KeyboardHideIcon />
            </IconButton>
            <IconButton>
                <SettingsIcon />
            </IconButton>
        </div>
      </div>
        <div className="emaillist__sections">
            <Section Icon={InboxIcon} title='Primary' color='red' selected />
            <Section Icon={PeopleIcon} title='Social' color='#1A73E8' />
            <Section Icon={LocalOfferIcon} title='Promotions' color='green' />
        </div>
        <div className="emaillist__list">
            {emails.map(({id, data:{to, subject, message, timestamp}}) => (
                <EmailRow 
                    id={id}
                    key={id}
                    title={to}
                    subject={subject}
                    description={message}
                    time={new Date(timestamp?.seconds * 1000).toUTCString()}
                />
            ))}
        </div>
    </div>
  )
}

export default EmailList
