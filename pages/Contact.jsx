import React, { useState } from "react";
import Modal from "./components/Modal";
import Header from "./components/Header";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [text, setText] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [subjectError, setSubjectError] = useState("");
  const [textError, setTextError] = useState("");
  const [nameColor, setNameColor] = useState("");
  const [emailColor, setEmailColor] = useState("");
  const [subjectColor, setSubjectColor] = useState("");
  const [textColor, setTextColor] = useState("");
  const [openModal,setOpenModal] = useState(false)

  const valid =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const handleSubmit = (e) => {
    e.preventDefault();
    formCheck();
    setTimeout(() => {
      setOpenModal(false)
    }, 1000);
  };

  const formCheck = () => {
    if (name.length >= 1) {
      setNameError("");
      setNameColor("green");
    } else {
      setNameError("Please enter your name");
      setNameColor("red");
    }

    if (email.match(valid)) {
      setEmailError("");
      setEmailColor("green");
    } else {
      setEmailError("Email  is invalid");
      setEmailColor("red");
    }

    if (subject.length >= 1) {
      setSubjectError("");
      setSubjectColor("green");
    } else {
      setSubjectError("Please enter your Subject");
      setSubjectColor("red");
    }

    if (text.length >= 1) {
      setTextError("");
      setTextColor("green");
    } else {
      setTextError("Please enter a message");
      setTextColor("red");
    }

    if (
      name.length >= 1 &&
      email.match(valid) &&
      subject.length >= 1 &&
      text.length >= 1
    ) {
      setName("");
      setNameColor("");
      setEmail("");
      setEmailColor("");
      setSubject("");
      setSubjectColor("");
      setText("");
      setTextColor("");
      setOpenModal(true)

     
    }
    return <Modal />
  };




  return (
    <div className="min-h-screen">
           <Header
          name="Contact"
          title="Get Helps & Friendly Support"
          image="/Header_Image/Contact_Header.jpg"
        />
      
      {openModal && <Modal closeModal={setOpenModal} btnName="Submit"  />}
      <div className="max-w-[80%] mx-auto md:max-w-[90%] my-[5rem]">
        <form
          action=""
          className=" bg-white shadow-[0_0_20px_0_rgb(255,193,7,0.5)] p-[30px] rounded-[3px]"
          onSubmit={handleSubmit}
        >
          <h1 className="text-[2rem] mb-[20px] font-bold ">Fillup The Form</h1>
          <div className="flex flex-wrap  w-full">
            <div className="mb-[20px] flex-[0_0_50%] max-w-[50%] pr-[5px]  sm:max-w-full sm:flex-[100%] sm:mr-0 sm:pr-0">
              <input
                type="text"
                placeholder="Name"
                className="block w-full mr-[10px] flex-[50%] border-[2px] border-black rounded-[5px] px-[10px] py-[5px] outline-none "
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{ borderColor: nameColor }}
              />
              <small style={{ color: nameColor }}>{nameError}</small>
            </div>
            <div className="mb-[20px] flex-[0_0_50%] max-w-[50%] pl-[5px]  sm:max-w-full sm:flex-[100%] sm:pl-0">
              <input
                type="text"
                placeholder="Email"
                className="block w-full mr-[10px]  flex-[50%] border-[2px] border-black rounded-[5px] px-[10px] py-[5px]  outline-none "
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ borderColor: emailColor }}
              />
              <small style={{ color: emailColor }}>{emailError}</small>
            </div>
          </div>
          <div className="mb-[20px]">
            <input
              type="text"
              placeholder="Subject"
              className=" mr-[10px] w-full border-[2px] border-black rounded-[5px] px-[10px] py-[5px] outline-none"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              style={{ borderColor: subjectColor }}
            />
            <small style={{ color: subjectColor }}>{subjectError}</small>
          </div>
          <div className="mb-[20px]">
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              className="w-full border-[2px] border-black rounded-[5px]  p-[10px]  outline-none"
              value={text}
              onChange={(e) => setText(e.target.value)}
              style={{ borderColor: textColor }}
            ></textarea>
            <small style={{ color: textColor }}>{textError}</small>
          </div>
          <button type="submit" className="button">
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
}
