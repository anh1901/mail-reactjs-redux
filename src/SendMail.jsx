import React from "react";
import "./SendMail.css";
import CloseIcon from "@material-ui/icons/Close";
import { Button } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { closeSendMessage } from "./features/mailSlice";

export default function SendMail() {
  const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = (formData) => {
       
    console.log(formData);
  };
  const dispatch = useDispatch();
  return (
    <div className="sendMail">
      <div className="sendMail_header">
        <h3>New Message</h3>
        <CloseIcon
          className="sendMail_close"
          onClick={() => dispatch(closeSendMessage())}
        />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          ref={register({ required: true })}
          name="to"
          type="email"
          placeholder="To"
        />
        {errors.to && <p className="sendMail_error">To is required!</p>}
        <input
          ref={register({ required: true })}
          name="subject"
          type="text"
          placeholder="Subject"
        />
        {errors.subject && (
          <p className="sendMail_error">Subject is required!</p>
        )}
        <input
          ref={register({ required: true })}
          name="message"
          type="text"
          placeholder="Message..."
          className="sendMail_message"
        />
        {errors.message && (
          <p className="sendMail_error">Message is required!</p>
        )}
        <div className="sendMail_options">
          <Button
            className="sendMail_send"
            variant="contained"
            color="primary"
            type="submit"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}
