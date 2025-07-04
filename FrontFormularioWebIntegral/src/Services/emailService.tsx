import emailjs from '@emailjs/browser';

const sendEmail = (data: any) => {

    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    
    return emailjs.send(serviceId, templateId , data, publicKey);
};

export default {
    sendEmail
};