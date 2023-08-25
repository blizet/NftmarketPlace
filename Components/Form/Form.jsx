import React from "react";
//internal import 
import { FormSVG,Lock } from "../SVG/index";
import Style from "./Form.module.css";
import {CheckBox} from "../index"

const Form = ({
  setFile,
  setDisplay,
  handleFormFieldChange,
  handleSubmit,
  setCategory
}) => {
  const categories=["National","International","State"]
  return (
    <div className={Style.card}>
      <div className={Style.card2}>
        <form action="" className={Style.form}>
          <p id="heading" className={Style.heading}>
            Upload Image Details
          </p>
          <div className={Style.field}>
            <FormSVG styleClass={Style.input_icon} />
            <input type="text" 
            className={Style.input_field}
            placeholder="title"
            autoComplete="false"
            onChange={(e)=>handleFormFieldChange("title",e)}/>
          </div>
          <div className={Style.field}>
            <Lock styleClass={Style.input_icon} />
            <textarea type="description" 
            className={ ` ${Style.input_feld} ${Style.textarea}`}
            placeholder="description"
            onChange={(e)=>handleFormFieldChange("description",e)}/>
          </div>
          <div className={Style.field}>
            <FormSVG styleClass={Style.input_icon} />
            <input type="email" 
            className={Style.input_field}
            placeholder="email"
            autoComplete="false"
            onChange={(e)=>handleFormFieldChange("email",e)}/>
          </div>
          <p className={Style.second}>Category</p>
          <div className={Style.category}>
            {categories.map((category,i)=>(
              <CheckBox setCategory={setCategory}
              key={i+1}
              category={category}/>
            ))}
          </div>

          <div className={Style.btn}>
            <button className={Style.button1}
            onClick={()=>(setFile(null),setDisplay(null))}>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Close
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </button>
            <button className={Style.button2}>Sign Up</button>
          </div>
          <button className={Style.button3} onClick={(e)=>handleSubmit(e)}>
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
