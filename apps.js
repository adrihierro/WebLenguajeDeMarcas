document.addEventListener("DOMContentLoaded", () => {
    // Obtener los doms necesarios
    const planes = document.querySelectorAll('input[name="plan"]'); 
    const resumenPlan = document.querySelector(".resumen-precio h3 span");
    const resumenCaracteristicas = document.querySelector(".resumen-precio p:nth-child(2)");
    const resumenPrecio = document.querySelector(".resumen-precio p:nth-child(3)");
    const totalPrecio = document.getElementById("precio");
    const alerta = document.querySelector(".alerta");
    const botonContratar = document.querySelector("button");

    // Características de cada plan (Cambiar en caso de no estar deacurdo preguntar!!!)
    const caracteristicas = {
        "plan-simple": "Protección básica para viajes ocasionales.",
        "plan-normal": "Cobertura estándar para viajeros frecuentes.",
        "plan-premium": "Máxima protección para exploradores expertos."
    };

    // Función para actualizar la selección
    const actualizarResumen = () => {
        const planSeleccionado = document.querySelector('input[name="plan"]:checked');
        
        if (!planSeleccionado) return; // Si no hay plan seleccionado, no hacer nada

        const nombrePlan = planSeleccionado.parentElement.querySelector("h2").textContent;
        const precioPlan = planSeleccionado.value;
        const descripcionPlan = caracteristicas[planSeleccionado.id];

        // Actualizar el resumen
        resumenPlan.textContent = nombrePlan;
        resumenCaracteristicas.textContent = descripcionPlan;
        resumenPrecio.textContent = `$${precioPlan}`;
        totalPrecio.textContent = precioPlan;

        // Ocultar alerta y habilitar botón
        alerta.style.display = "none";
        botonContratar.disabled = false;
    };

    // Evento para cada plan
    planes.forEach(plan => {
        plan.addEventListener("change", actualizarResumen);
    });
});
