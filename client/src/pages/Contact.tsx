import emailjs from '@emailjs/browser';
import type { FormEvent } from 'react';

const Contact = () => {
    const inputStyling = "innerShadow rounded h-10 lg:h-12 text-xl pl-3";

    const sendEmail= async (e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        await emailjs.sendForm('service_ho7d22t', 'template_e1yhk0c', form, 'dHmN6Poxt2OKm6_FU');
        window.location.reload();
    }

    return (
        <div className="w-[90%] md:w-[80%] mx-auto">
            <h2 className='text-4xl text-center lg:text-left my-10'>Reach Out!</h2>
            <div className="flex flex-col lg:flex-row lg:gap-x-5">
                <form onSubmit={e => sendEmail(e)} className='flex flex-col gap-y-5 lg:gap-y-10 w-full'>
                    <input className={inputStyling} placeholder={"Name"} type='text' name='from_name'/>
                    <input className={inputStyling} placeholder={"E-Mail"} type='email' name='from_phone_number'/>
                    <input className={inputStyling} placeholder={"Phone"} type='phone' name='from_email'/>
                    <select name='from_orginization_type' className='h-10 lg:h-12 innerShadow text-center text-xl'>
                        <option value="Education">Education</option>
                        <option value="Healthcare">Healthcare</option>
                        <option value="Private Orginization">Private Orginization</option>
                    </select>
                    <textarea className='innerShadow rounded resize-none text-xl h-25 lg:h-40 pl-3' placeholder={"Message"} name='message' />
                    <input type='submit' value='Send Email' className='mx-auto border text-white bg-blue-800 p-3 rounded-xl cursor-pointer w-50 lg:w-75 text-xl'/>
                </form>
                <img src="default.jpg" alt="mike davis image" className='mt-10 md:mt-0 rounded w-80 h-110 md:w-125 md:h-160 lg:w-80 lg:w-125 object-cover mx-auto lg:mx-0 lg:ml-auto'/>
            </div>
        </div>
    );
};

export default Contact;