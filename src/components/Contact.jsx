import '../styles/Contact.css';
import { SocialNetworks } from '../components/ui/SocialNetworks.jsx';
import iconCheck from '../assets/check.svg';
import iconLoading from '../assets/loading.svg';

export function Contact(){

  const sendMail = () => {
    const $form = document.querySelector(".contact-form");
    const $loading = document.querySelector(".modal-loading");
    const $check = document.querySelector(".modal-check");
  
    $form.addEventListener("submit", (e) => {
      e.preventDefault();
      $loading.classList.add("modal-active");

      fetch("https://formsubmit.co/ajax/serragonzalo1@gmail.com", {
        method: "POST",
        body: new FormData(e.target)
      })
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then((json) => {
        $form.reset();
      })
      .catch((err) => {
        let message = err.statusText || "Ocurrio un error";
        $check.querySelector("h5").innerHTML = `${message}`;
      })
      .finally(() => {
        $check.classList.add("modal-active");
        setTimeout(() => {
          $loading.classList.remove("modal-active");
        }, 2000);
        setTimeout(() => {
          $check.classList.add("modal-active-down");
        }, 2150);
        setTimeout(() => {
          $check.classList.remove("modal-active");
        }, 4150);
      })
    })
  }

  return(
    <section id="contact" className="contact">
      <h3 className="title">Contacto</h3>

      <div className="contact-content">
        <p className="text">
          Puedes contactarme enviando un mail o a través de mis redes sociales. <br />
          <u>¡Espero tu mensaje!</u>
        </p>

        <SocialNetworks />

        <form action="https://formsubmit.co/ajax/serragonzalo1@gmail.com" className="contact-form">
          <input title="Ingresa tu nombre" className="contact-input-text" type="text" name="name" placeholder="Ingresa tu nombre" pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$" required />
          <input title="Ingresa tu correo" className="contact-input-text" type="email" name="email" placeholder="Ingresa tu correo" pattern="^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$" required />
                    
          <textarea title="Ingresa tu mensaje" name="message" placeholder="Ingresa tu mensaje" required></textarea>
          
          <button type="submit" title="Enviar" className="form-send-btn" onClick={sendMail}>Enviar</button>
        </form>

        <article className="modal-check">
          <img src={iconCheck} alt="Enviado" />
          <h5>¡Gracias!<br/>Recibí tu mensaje</h5>
        </article>

        <article className="modal-loading">
          <img src={iconLoading} alt="Enviando" className="icon-loading" />
          <h5>Enviando...</h5>
        </article>

      </div>
    </section>
  );
}