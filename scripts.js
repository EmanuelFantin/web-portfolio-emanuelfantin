/* Menu Hamburguesa */

    document.getElementById('mobile-menu').addEventListener('click', function() {
        document.querySelector('.nav-list').classList.toggle('active');
    });

//Copiar o enviar gmail

    document.getElementById('sendEmail').addEventListener('click', function() {
        window.location.href = 'mailto:fantinemanuel@gmail.com';
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

let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }
    const offset = -currentSlide * 100;
    document.querySelector('.slider').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);
});

// Descargar mi CV

document.getElementById('downloadCV').addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = './CurriculumVitae_EmanuelFantin.pdf'; // Reemplaza con la ruta real a tu archivo PDF
    link.download = 'CurriculumVitae_EmanuelFantin.pdf'; // Nombre del archivo descargado
    link.click();
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
  