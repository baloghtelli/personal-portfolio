import React, { useState } from 'react';
import styles from '../styles/Contact.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faPhone, faDownload } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const scriptURL = 'https://script.google.com/macros/s/AKfycbzw2ViqF773TL-2JFG78zab2WUXszYRiL9IVElHIoYFzjF-mdbLzO2SMCOxIk_ztlBz8g/exec';
    const form = event.target;

    try {
      const formData = new FormData(form);
      const response = await fetch(scriptURL, { method: 'POST', body: formData });

      if (response.ok) {
        setMessage('Message sent successfully!');
        setTimeout(() => setMessage(''), 5000);
        form.reset();
      } else {
        throw new Error('Failed to send message.');
      }
    } catch (error) {
      console.error('Error!', error.message);
      setMessage('Failed to send message.');
    }
  };

  return (
    <div id='contact' className={styles.contactContainer}>
      <div className={styles.leftContact}>
      <h2 className={styles.contactTitle}>Contact Me</h2>
        <div className={styles.mailContainer}>
          <FontAwesomeIcon icon={faPaperPlane} className={styles.paperPlaneIcon} />
          <a href='mailto:sebastian.balogh@hotmail.com' className={styles.emailLink}>sebastian.balogh@hotmail.com</a>
        </div>
        <div className={styles.phoneContainer}>
          <FontAwesomeIcon icon={faPhone} className={styles.phoneIcon} />
          <p className={styles.phoneNumber}>+46 73 876 41 84</p>
        </div>
        <div className={styles.linkedInContainer}>
          <FontAwesomeIcon icon={faLinkedin} className={styles.linkedinIcon} />
          <a href='https://www.linkedin.com/in/sebastian-balogh/' className={styles.linkedinLink} target='_blank'>https://www.linkedin.com/in/sebastian-balogh/</a>
        </div>
        <a href='mycv.pdf' download className={styles.cvButton}>Download CV <FontAwesomeIcon icon={faDownload} className={styles.downloadIcon} /></a>
      </div>
      <div className={styles.rightContact}>
      <form onSubmit={handleSubmit} name="submit-to-google-sheet">
          <input type='text' name='name' className={styles.nameInput} placeholder='Name' required />
          <input type='email' name='email' className={styles.mailInput} placeholder='Email' required />
          <textarea name='message' className={styles.messageInput} placeholder='Type your message...' cols='20' rows='5' required />
          <button type='submit' className={styles.submitButton}>Submit</button>
        </form>
        {message && <p id="msg" className={styles.message}>{message}</p>}
      </div>
    </div>
  );
}

export default Contact;