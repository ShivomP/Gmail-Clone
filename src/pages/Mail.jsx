import React from 'react'
import './css/mail.css'
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox';
import ErrorIcon from '@mui/icons-material/Error';
import DeleteIcon from '@mui/icons-material/Delete';
import EmailIcon from '@mui/icons-material/Email';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {useNavigate} from 'react-router-dom'
import { Icon } from '@mui/material';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import PrintIcon from '@mui/icons-material/Print';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import {selectOpenMail}  from '../features/mailSlice';
import { useSelector } from 'react-redux'

function Mail() {
    const navigate = useNavigate()

    const selectedMail = useSelector(selectOpenMail)

  return (
    <div className='mail'>
      <div className="mail__tools">
            <div className="mail__tools--left">
                <IconButton onClick={() => navigate("/")}>
                    <ArrowBackIcon />
                </IconButton>
                <IconButton>
                    <MoveToInboxIcon />
                </IconButton>
                <IconButton>
                    <ErrorIcon />
                </IconButton>
                <IconButton>
                    <DeleteIcon />
                </IconButton>
                <IconButton>
                    <EmailIcon />
                </IconButton>
                <IconButton>
                    <WatchLaterIcon />
                </IconButton>
                <IconButton>
                    <CheckCircleIcon />
                </IconButton>
                <IconButton>
                    <LabelImportantIcon />
                </IconButton>
                <IconButton>
                    <MoreVertIcon />
                </IconButton>
            </div>
            <div className="mail__tools--right">
                <IconButton>
                    <UnfoldMoreIcon />
                </IconButton>

                <IconButton>
                    <PrintIcon />
                </IconButton>

                <IconButton>
                    <ExitToAppIcon />
                </IconButton>
            </div>
      </div>
      <div className="mail__body">
        <div className="mail__body--header">
            <h2>{selectedMail?.subject} </h2>
            <LabelImportantIcon className='mail__important'/>
            <p>{selectedMail?.title} </p>
            <p className='mail__time'>{selectedMail?.time} </p>
        </div>
        <div className="mail__message">
            <p>{selectedMail?.description} </p>
        </div>
      </div>
    </div>
  )
}

export default Mail
