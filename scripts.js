/* Menu Hamburguesa */

document.getElementById('mobile-menu').addEventListener('click', function() {
    document.querySelector('.nav-list').classList.toggle('active');
});

// Obtener todos los enlaces dentro de la lista de navegación
const navLinks = document.querySelectorAll('.nav-list li a');

// Agregar un evento de clic a cada enlace
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        // Esconder el menú después de hacer clic en un enlace
        document.querySelector('.nav-list').classList.remove('active');
    });
});

//Copiar o enviar gmail

document.getElementById('sendEmail').addEventListener('click', function() {
    window.open('mailto:fantinemanuel@gmail.com?Subject=Ví%20tú%20portafolio%20en%20linea%20y%20quisiera%20ponerme%20en%20contacto', '_blank');
});

    document.getElementById('copyEmail').addEventListener('click', function() {
        const email = 'fantinemanuel@gmail.com';
        navigator.clipboard.writeText(email).then(() => {
            alert('Correo copiado al portapapeles');
        }, (err) => {
            alert('Error al copiar el correo: ', err);
        });
    });

// Seccion Proyectos
// Ventana emergente
document.addEventListener('DOMContentLoaded', () => {
    const projectButtons = document.querySelectorAll('.project-button');
    projectButtons.forEach(button => {
      button.addEventListener('click', function (event) {
        event.preventDefault();
        openPopup(this.href);
      });
    });
  });
  
  function openPopup(url) {
    document.getElementById('popup-iframe').src = url;
    document.getElementById('popup').style.display = 'flex';
  }
  
  function closePopup() {
    document.getElementById('popup-iframe').src = '';
    document.getElementById('popup').style.display = 'none';
  }
  

// Funciones del CV

  document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('cv-modal');
    const cvIframe = document.getElementById('cv-iframe');
    const viewCVButton = document.getElementById('viewCV');
    const closeCVButton = document.getElementById('closeCV');
    const downloadCVButton = document.getElementById('downloadCV');
    
    // Mostrar la ventana emergente del CV
    viewCVButton.addEventListener('click', function() {
        cvIframe.src = './CurriculumVitae_EmanuelFantin.pdf';
        modal.style.display = 'flex';
    });

    // Cerrar la ventana emergente
    closeCVButton.addEventListener('click', function() {
        modal.style.display = 'none';
        cvIframe.src = ''; // Limpiar el src para detener la carga del iframe
    });

    // Descargar el CV
    downloadCVButton.addEventListener('click', function() {
        const link = document.createElement('a');
        link.href = './CurriculumVitae_EmanuelFantin.pdf'; // Reemplaza con la ruta real a tu archivo PDF
        link.download = 'CurriculumVitae_EmanuelFantin.pdf'; // Nombre del archivo descargado
        link.click();
    });

    // Cerrar la ventana emergente si se hace clic fuera de ella
    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
            cvIframe.src = ''; // Limpiar el src para detener la carga del iframe
        }
    });
});




// Formulario de contacto (EmailJS)

(function() {
    emailjs.init('OdqqeBcsIs2mY2rzP');
})();

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Parametros del Email
    const templateParams = {
        name: name,
        email: email,
        message: message
    };

    // Envia un email usando EmailJS
    emailjs.send('service_m11z8xr', 'template_0unozp4', templateParams)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            document.getElementById('status').innerText = 'Mensaje enviado exitosamente!';
        }, function(error) {
            console.log('FAILED...', error);
            document.getElementById('status').innerText = 'Error al enviar el mensaje. Intente nuevamente.';
        });

    // Limpiar formulario
    document.getElementById('contactForm').reset();
});

// Boton whatsapp


popupWhatsApp = () => {
  
    let btnClosePopup = document.querySelector('.closePopup');
    let btnOpenPopup = document.querySelector('.whatsapp-button');
    let popup = document.querySelector('.popup-whatsapp');
    let sendBtn = document.getElementById('send-btn');
  
    btnClosePopup.addEventListener("click",  () => {
      popup.classList.toggle('is-active-whatsapp-popup')
    })
    
    btnOpenPopup.addEventListener("click",  () => {
      popup.classList.toggle('is-active-whatsapp-popup')
       popup.style.animation = "fadeIn .6s 0.0s both";
    })
    
    sendBtn.addEventListener("click", () => {
    let msg = document.getElementById('whats-in').value;
    let relmsg = msg.replace(/ /g,"%20");
     window.open('https://wa.me/+543704058731?text='+relmsg, '_blank'); 
    
    });
  
 //   setTimeout(() => {
 //     popup.classList.toggle('is-active-whatsapp-popup');
 //   }, 3000);
  }
  
  popupWhatsApp();
  