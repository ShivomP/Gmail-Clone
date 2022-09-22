import React from 'react'
import './css/emailrow.css'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { IconButton } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import {useNavigate} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { selectMail } from '../features/mailSlice';

function EmailRow({id, title, subject, description, time}) {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const openMail = () => {
        dispatch(
            selectMail({
                id,
                title,
                subject,
                description,
                time
            })
        )
        navigate('/mail')
    }

  return (
    <div onClick={openMail} className='email__row'>
        <div className="email__row--options">
            <Checkbox />
            <IconButton>
                <StarBorderIcon />
            </IconButton>
            <IconButton>
                <LabelImportantIcon />
            </IconButton>
        </div>
        <h3 className="email__row--title">
            {title}
        </h3>
        <div className="email__row--message">
            <h4>
                {subject}{""}:
                <span className='email__row--description'>{description}</span>
            </h4>
        </div>
        <p className="email__row--time">
            {time}
        </p>
    </div>
  )
}

export default EmailRow
