import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Icone Free
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export default function Contact() {
    return (
        <section>
            <h2 className="title-singlePage">Contattaci</h2>
            <div className="contatti-info">
                <p><span className='span-home'><FontAwesomeIcon icon={faEnvelope} /></span>E-mail:<a href="mailto:pepe2117k@gmail.com">pepe2117k@gmail.com</a> </p>
                <p><span className='span-home'><FontAwesomeIcon icon={faPhone} /></span>
                    Cellulare:
                    <a href="tel:+393331598026">3331598026</a>
                </p>
                <p><span className='span-home'><FontAwesomeIcon icon={faWhatsapp} /></span>
                    WhatsApp:
                    <a href="https://wa.me/393331598026">💬 Invia un messaggio</a>
                </p>
            </div>
        </section>
    );
}
