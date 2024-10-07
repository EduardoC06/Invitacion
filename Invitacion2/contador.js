const countdownElement = document.getElementById('countdown');
const hoursElement = document.getElementById('hours');   

const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');   


// Fecha y hora de finalización en Perú (GMT-5)
const countDownDate = new Date('Oct 7, 2024 21:00:00').getTime();

// Actualiza el contador cada segundo
const x = setInterval(() => {
  const now = new Date().getTime();
  const distance = countDownDate - now;

  // Cálculos para obtener días, horas, minutos y segundos
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes   
 = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Actualiza los elementos HTML
  hoursElement.textContent = hours;
  minutesElement.textContent = minutes;
  secondsElement.textContent   
 = seconds;

  // Si el contador llega a cero, puedes realizar alguna acción (opcional)
  if (distance < 0) {
    clearInterval(x);
    countdownElement.textContent = "-";
  }
}, 1000);