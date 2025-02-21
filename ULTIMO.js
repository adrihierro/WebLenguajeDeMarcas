// Seleccionamos el botón y el contenedor donde irá el formulario
const botonCrear = document.getElementById('crearFormulario');
const contenedorFormulario = document.getElementById('formContainer');

// Agregamos un evento para el clic del botón
botonCrear.addEventListener('click', () => {
    // Verificamos si ya se ha creado un formulario
    if (document.getElementById('miFormulario')) {
        alert('El formulario ya está creado.');
        return;
    }

    // Crear el formulario usando JavaScript
    const formulario = document.createElement('form');
    formulario.id = 'miFormulario';

    // Campo: Nombre
    const labelNombre = document.createElement('label');
    labelNombre.textContent = 'Nombre:';
    labelNombre.setAttribute('for', 'nombre');
    const inputNombre = document.createElement('input');
    inputNombre.type = 'text';
    inputNombre.id = 'nombre';
    inputNombre.name = 'nombre';
    inputNombre.required = true;

    // Campo: Fecha
    const labelFecha = document.createElement('label');
    labelFecha.textContent = 'Fecha:';
    labelFecha.setAttribute('for', 'fecha');
    const inputFecha = document.createElement('input');
    inputFecha.type = 'text';
    inputFecha.id = 'fecha';
    inputFecha.date = 'fecha';
    inputFecha.required = true;

    // Campo: Correo Electrónico
    const labelEmail = document.createElement('label');
    labelEmail.textContent = 'Correo Electrónico:';
    labelEmail.setAttribute('for', 'email');
    const inputEmail = document.createElement('input');
    inputEmail.type = 'email';
    inputEmail.id = 'email';
    inputEmail.name = 'email';
    inputEmail.required = true;

    // Campo: Mensaje
    const labelMensaje = document.createElement('label');
    labelMensaje.textContent = '¿Algun detalle que quiera comentar?';
    labelMensaje.setAttribute('for', 'mensaje');
    const textareaMensaje = document.createElement('textarea');
    textareaMensaje.id = 'mensaje';
    textareaMensaje.name = 'mensaje';
    textareaMensaje.rows = 4;
    textareaMensaje.required = true;

    // Botón de envío
    const botonEnviar = document.createElement('button');
    botonEnviar.type = 'submit';
    botonEnviar.textContent = 'Enviar';

    // Agregar los elementos al formulario
    formulario.appendChild(labelNombre);
    formulario.appendChild(inputNombre);
    formulario.appendChild(document.createElement('br'));

    
    formulario.appendChild(labelFecha);
    formulario.appendChild(inputFecha);
    formulario.appendChild(document.createElement('br'));

    formulario.appendChild(labelEmail);
    formulario.appendChild(inputEmail);
    formulario.appendChild(document.createElement('br'));

    formulario.appendChild(labelMensaje);
    formulario.appendChild(document.createElement('br'));
    formulario.appendChild(textareaMensaje);
    formulario.appendChild(document.createElement('br'));

    formulario.appendChild(botonEnviar);

    // Agregar el formulario al contenedor
    contenedorFormulario.appendChild(formulario);

    // Agregar evento para manejar el envío del formulario
    formulario.addEventListener('submit', (event) => {
        event.preventDefault(); // Evitar que se recargue la página

        // Capturar los valores de los campos
        const nombre = inputNombre.value;
        const email = inputEmail.value;
        const mensaje = textareaMensaje.value;

        // Mostrar los datos en la consola
        console.log('Nombre:', nombre);
        console.log('Fecha del viaje', fecha);
        console.log('Correo Electrónico:', email);
        console.log('¿Algun?', mensaje);

        // Mostrar un mensaje de confirmación
        alert('Formulario enviado con éxito');

        // Eliminar el formulario del DOM
        formulario.remove();
    });
    document.getElementById('cambiarFondo').addEventListener('click', () => {
        document.body.style.backgroundColor = "yellow";
        document.body.style.color ="grey";
    });
});