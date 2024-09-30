import React, { useState } from "react"
import Button from "./Button";
import FormProcessingSpinner from "./FormProcessingSpinner";

function ContactForm({ content, handleContactSubmit, isFormProcessing }) {
  const [formVal, setFormVal] = useState({
    name: "",
    email: "",
    msg: ""
  });
  const inputHandle = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormVal({ ...formVal, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleContactSubmit(formVal);
  };
  return (
    <>
      <form action="" method="POST" onSubmit={handleSubmit}>
        <div className="form_row row">
          <div className="col-sm-12">
            <h6>{content.cu_form_1_heading}</h6>
            <div className="form_blk">
              <input
                type="text"
                name="name"
                id="name"
                value={formVal.name}
                onChange={inputHandle}
                className="input"
              />
            </div>
          </div>
          <div className="col-sm-12">
            <h6>{content.cu_form_2_heading}</h6>
            <div className="form_blk">
              <input
                type="text"
                name="email"
                id="email"
                value={formVal.email}
                onChange={inputHandle}
                className="input"
              />
            </div>
          </div>
          <div className="col-sm-12">
            <h6>{content.cu_form_3_heading}</h6>
            <div className="form_blk">
              <textarea
                name="msg"
                id="msg"
                value={formVal.msg}
                onChange={inputHandle}
                className="input"
              ></textarea>
            </div>
          </div>
        </div>
        <div className="btn_blk form_btn">
          <button
            className="site_btn block"
            type="submit"
            disabled={isFormProcessing}
          >
            {content.cu_form_button_text}
            <FormProcessingSpinner isFormProcessing={isFormProcessing} />
          </button>
        </div>
      </form>
    </>
  );
}

export default ContactForm;