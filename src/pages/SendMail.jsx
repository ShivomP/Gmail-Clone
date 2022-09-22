import React from 'react'
import './css/sendmail.css'
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { closeSendMessage } from '../features/mailSlice';
import { db } from '../firebase'
import firebase from 'firebase/compat/app'

const SendMail = () => {
  const {register, handleSubmit, watch, formState: { errors }} = useForm()
  const dispatch = useDispatch()

  const onSubmit = (formData) => {
    
    db.collection('emails').add({
      to:formData.to,
      subject: formData.subject,
      message: formData.message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    dispatch(closeSendMessage())
  }

  return (
    <div className='sendmail'>
      <div className="sendmail__header">
        <h3>New Message</h3>
        <CloseIcon onClick={() => dispatch(closeSendMessage()) } className="sendMail__close"/>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input 
          type="email" 
          name='to'
          placeholder='To:'
          {...register("to", { required: true})} 
        />
          {errors.to && <p className="sendmail__error">To is required</p>}

        <input 
          type="text" 
          name='subject'
          placeholder='Subject:'
          {...register("subject", { required: true})}
        />
          {errors.subject && <p className="sendmail__error">Subject is required</p>}
        <input 
          type="text" 
          name='message'
          placeholder='Message...'
          className='sendmail__message'
          {...register("message", { required: true})}
        />
          {errors.message && <p className="sendmail__error">Message is required</p>}
        <div className="sendmail__options">
          <Button 
            className='sendmail__send'
            variant='contained'
            color='primary'
            type='submit'
            >
            Send
          </Button>
        </div>
      </form>
    </div>
  )
}

export default SendMail
