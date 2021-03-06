import React from 'react';
import '../styles/Contact.css'
import emailjs from 'emailjs-com';

export default function Contact() {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_e3af47d', 'template_mdy7m22', e.target, 'user_1GDvO9fR6f3uZRQAb1tX1')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
        alert("Your message has been sent");
    }

    return (
        <div>
            <div className="container email-container email-bg-pic">
                <header className="education email-header">
                    <div className="row">
                        <div className="col-md-12 ">
                            <h2 className="email-title text-center">Contact Us</h2>
                            <h5 className="email-subheader text-center">Have any questions or concerns?</h5>
                            <h5 className="email-subheader text-center">Drop us a line and we'll get back to you as soon as possible.</h5>
                        </div>
                    </div>
                </header>

                <form onSubmit={sendEmail}>
                    <div className="row pt-5 mx-auto">
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="text" className="form-control email-window" placeholder="Name" name="name" />
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="text" className="form-control email-window" placeholder="Email Address" name="email" />
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="text" className="form-control email-window" placeholder="Subject" name="subject" />
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <textarea className="form-control email-window" type="text" id="" cols="30" rows="8" placeholder="Your Message" name="message"></textarea>
                        </div>
                        <div className="col-8 form-group mx-auto">
                            <input type="submit" className="btn btn-email-send" value="Send Message"></input>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

