document.addEventListener("DOMContentLoaded", function () {
    const addform = document.getElementById("form-validation");
    const reservationDetails = document.getElementById("reservation-details");

    addform.addEventListener("submit", (e) => {
        e.preventDefault();  // Evitar el envío del formulario

        if (addform.checkValidity() === true) {  
            // Obtener los datos del formulario
            const formData = {
                nombre: addform.nombre.value,
                apellido: addform.apellido.value,
                email: addform.email.value,
                telefono: addform.telf.value,
                diaReserva: addform.datetime.value
            };

            displayReservationData(formData);

            addform.reset();
        } else {
            addform.classList.add('was-validated');  
        }
    });

    function displayReservationData(formData) {
        // Hacer visible el contenedor de los detalles de la reserva
        reservationDetails.style.display = "block";

        // Mostrar los valores en el contenedor de reserva
        document.getElementById("display-name").textContent = formData.nombre;
        document.getElementById("display-lastname").textContent = formData.apellido;
        document.getElementById("display-email").textContent = formData.email;
        document.getElementById("display-phone").textContent = formData.telefono;
        document.getElementById("display-date").textContent = formData.diaReserva;
    }

});
