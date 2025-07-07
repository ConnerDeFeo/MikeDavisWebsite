import emailjs from '@emailjs/browser';
import type { FormEvent } from 'react';

const Contact = () => {
    const inputStyling = "innerShadow rounded h-10 text-xl";

    const sendEmail= async (e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        await emailjs.sendForm('service_ho7d22t', 'template_e1yhk0c', form, 'dHmN6Poxt2OKm6_FU');
        window.location.reload();
    }

    return (
        <div className="w-[90%] md:w-[80%] mx-auto">
            <h2 className='text-4xl text-center my-10'>Reach Out!</h2>
            <div className="flex flex-col md:flex-row">
                <form onSubmit={e => sendEmail(e)} className='flex flex-col gap-y-5'>
                    <input className={inputStyling} placeholder={"Name"} type='text' name='from_name'/>
                    <input className={inputStyling} placeholder={"E-Mail"} type='text' name='from_email'/>
                    <textarea className='innerShadow rounded resize-none text-xl h-25' placeholder={"Message"} name='message' />
                    <input type='submit' value='Send Email' className='mx-auto border text-white bg-blue-800 p-3 rounded-xl cursor-pointer w-50 text-xl'/>
                </form>
                <img src="default.jpg" alt="mike davis image" className='mt-10 md:mt-0 rounded w-80 h-110 sm:w-140 sm:h-180 object-cover mx-auto'/>
            </div>
        </div>
    );
};

export default Contact;