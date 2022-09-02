import classes from './contact.module.css';
import { useState } from "react";
import emailjs from "emailjs-com";

function Contact() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [details, setDetails] = useState('');
    
    const handleSubmit = (e: any) => {
        alert("Your message has been sent")
        e.preventDefault();
        const contact = { name, email, details };
        console.log(contact);

        emailjs.sendForm('service_wosllbn', 'template_77d0jta', e.target, 'FaDup2F3UanmktkL0')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        (document.getElementById("input_name") as HTMLInputElement).value = "";
        (document.getElementById("input_email") as HTMLInputElement).value = "";
        (document.getElementById("input_details") as HTMLInputElement).value = "";

        setName("")
        setEmail("")
        setDetails("")

      }


    return (
        <section className={classes.contact}>
            <h2>Get in touch</h2>
            <form id="input_form" onSubmit={handleSubmit}>
                <label>Name:</label>
                <input id="input_name" type="text" required value={name} onChange={(e) => setName(e.target.value)} name="name"/>

                <label>Email:</label>
                <input id="input_email" type="text" required value={email} onChange={(e) => setEmail(e.target.value)} name="email"/>

                <label>Details:</label>
                <textarea id="input_details" required value={details} onChange={(e) => setDetails(e.target.value)} name="details"></textarea>

                <button type="submit">Submit</button>
            </form>
        </section>
    );
}

export default Contact;
