"use client"
import SlideLoading from '@/app/_components/SlideLoading'
import React, { useEffect, useRef, useState } from 'react'
import emailjs from 'emailjs-com';
import Alert from '@/app/_components/Alert';
import Footer from '@/app/_components/Footer';
import Header from '@/app/_components/Header';



export default function Contact() {
  const fullNameRef = useRef<HTMLInputElement>(null);
  const clientEmailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const [showAlert, setShowAlert] = useState(false)
  const [alertMessage, setAlertMessage] = useState("")
  const [alertColor, setAlertColor] = useState("");

  const [loadContent, setLoadContent] = useState(false);


  useEffect(() => {

    // Delay the showing of the AuroraBackground component
    const timer = setTimeout(() => {
      setLoadContent(true);
    }, 300); // Adjust the delay time as needed

    // Cleanup function to clear the timer if component unmounts or changes
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {

    setTimeout(() => {
      setShowAlert(false)
      setAlertMessage("")
      setAlertColor("");
    }, 2000)


  }, [showAlert])

  const sendMail = () => {
    if (
      fullNameRef.current &&
      fullNameRef.current.value != "" &&
      clientEmailRef.current &&
      clientEmailRef.current.value != "" &&
      messageRef.current &&
      messageRef.current.value != ""
    ) {
      let params = {
        from_name: fullNameRef.current.value,
        email: clientEmailRef.current.value,
        message: messageRef.current.value
      };

      setAlertMessage("Email sent successfully")
      setAlertColor("bg-purple-400");
      setShowAlert(true)


      emailjs.send("service_ighq0xm", "template_dtvzk2q", params, "lPKTLTnGlEiMEhPGF").then(() => {
        setAlertMessage("Email sent successfully")
        setShowAlert(true)
        window.location.href = "/"
      })
    } else {
      setAlertMessage("Please fill all the fields")
      setShowAlert(true)

    }
  }


  return (
    <div className='min-w-screen min-h-screen bg-black flex flex-col items-center justify-center'>
      <SlideLoading />
      <Header />

      <div className='flex justify-center items-center bg-black w-screen h-screen pt-[120px] pb-20'>
        <Alert message={alertMessage} show={showAlert} setShow={setShowAlert} color={alertColor} />

        <div id='contactForm' className="w-[25rem] h-fit relative overflow-hidden  bg-gray-900 p-8 rounded-lg shadow-md before:w-24 before:h-24 before:absolute before:bg-purple-600 before:rounded-full before:-z-10 before:blur-2xl after:w-32 after:h-32 after:absolute after:bg-sky-400 after:rounded-full after:-z-10 after:blur-xl after:top-24 after:-right-12">
          <h2 className="text-3xl font-bold  gradientText mb-8">Let&apos;s get in touch!</h2>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-300"
            >Full Name</label >
            <input
              className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
              type="text"
              ref={fullNameRef}
              id="fullName"
              name="fullName"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-300"
            >Email Address</label>
            <input
              className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
              name="email"
              id="email"
              type="email"
              ref={clientEmailRef}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-300" >Message</label>
            <textarea
              className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded-md text-white"
              rows={3}
              name="message"
              id="message"
              ref={messageRef}
            ></textarea>
          </div>

          <div className="flex justify-around mt-5">
            <button onClick={() => window.history.back()} data-ripple-light="true" className="select-none rounded-lg bg-purple-100 py-4 px-7 text-center align-middle text-base font-bold uppercase text-purple-600 shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
              Back
            </button>

            <a data-ripple-light="true" onClick={sendMail} className="select-none rounded-lg bg-purple-100 py-4 px-7 text-center align-middle text-base font-bold uppercase text-purple-600 shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
              Send
            </a>
          </div>
        </div>

      </div>
      <Footer />

    </div>

  )
}
