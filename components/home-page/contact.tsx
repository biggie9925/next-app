import classes from './contact.module.css';
import { useState } from "react";

function Contact() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [details, setDetails] = useState('');
    
    const handleSubmit = (e: any) => {
        e.preventDefault();
        const contact = { name, email, details };
        console.log(contact);
      }

    return (
        <section className={classes.contact}>
            <h2>Get in touch</h2>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input type="text" required value={name} onChange={(e) => setName(e.target.value)}/>

                <label>Email:</label>
                <input type="text" required value={email} onChange={(e) => setEmail(e.target.value)}/>

                <label>Details:</label>
                <textarea required value={details} onChange={(e) => setDetails(e.target.value)}></textarea>


                <button>Submit</button>
            </form>
        </section>
    );
}

export default Contact;
