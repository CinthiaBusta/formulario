function ValidateEmail(mail) 
{
 if ("/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/".test(myForm. emailAddr.value))
  {
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)
}


const formulario = document.querySelector('form');

formulario.addEventListener('submit', (event) => {
    event.preventDefault();
    const correoInput = document.querySelector('#correo');
    const correo = correoInput.value;
    const regexCorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!regexCorreo.test(correo)) {
      alert('El correo electrónico no es válido');
      return;
    }
    // Si el correo electrónico es válido, puedes enviar el formulario aquí.
    form.submit();
});