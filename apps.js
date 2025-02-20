// Ejecuta el codigo despues de que la estructura Dom este cargada
document.addEventListener("DOMContentLoaded", () => {
    
    // Obtener los doms necesarios
    
    // Seleccionar todos los imputs (Son los botoncitos de los planes) con el nombre plan
    const planes = document.querySelectorAll('input[name="plan"]');
    // Busca y seleccionar el titulo h3 del resumen para mostrarlo
    const resumen_planes = document.querySelector(".resumen-precio h3 span");
    // Busca y selecciona el segundo parrafo (Es el que tiene la descripcion del plan)
    const resumen_caracteristicas = document.querySelector(".resumen-precio p:nth-child(2)");
    // Busca y selecciona el tercer parrafo (Es el que tiene el precio de los plan)
    const resumen_precio = document.querySelector(".resumen-precio p:nth-child(3)");
    // Busca y selecciona el precio total
    const total_precio = document.getElementById("precio");
    // Busca y selecciona la alerta
    const alerta = document.querySelector(".alerta");
    // Busca y selecciona el boton de contratar
    const boton_contratar = document.querySelector("button");

    // Características de cada plan (Cambiar en caso de no estar deacurdo preguntar!!!)
    const caracteristicas = {
        // Para marisol NOTA: No se como hacer que la misma descripcion de planes sea la misma sin repetirla!! ;(
        // Tampoco e conseguido añadir una pequeña lista de caracteristicas de cada plan
        
        // Selecciona el id de cada plan y le damos la descripcion
        "plan_simple":"Protección mas basica para tus viajes.",
        // Selecciona el id de cada plan y le damos la descripcion
        "plan_normal": "Protección estandar para tus viajes.",
        // Selecciona el id de cada plan y le damos la descripcion
        "plan_premium": "Protección premium para tus viajes."
    };

    // Función para actualizar la selección

    // Funcion para actualizar el resumen solo cuando el usuario seleccione un plan
    const actualizarResumen = () => {

        // Seleccionar el plan que el usuario ha seleccionado si esta vacio sera null
        const plan_seleccionado = document.querySelector('input[name="plan"]:checked');
        
        //Si el plan seleccionado es null no ejecutar el codigo 
        if (!plan_seleccionado) return;
        // Busca dentro del de resumen el h2 y seleciona el texto asignado
        const nombre_plan = plan_seleccionado.parentElement.querySelector("h2").textContent;
        // Obtienes el precio del plan si esta seleccionado
        const precio_plan = plan_seleccionado.value;
        // Obtener la descripción del plan seleccionado
        const descripcion_plan = caracteristicas[plan_seleccionado.id];

        // Actualiza el resumen y lo modifica con los datos del plan seleccionado
        resumen_planes.textContent = nombre_plan;
        resumen_caracteristicas.textContent = descripcion_plan;
        resumen_precio.textContent = `$${precio_plan}`;
        total_precio.textContent = precio_plan;

        // Ocultar alerta y habilitar botón

        // Ocultar alerta texto
        alerta.style.display = "none";
        // Quitar boton 
        boton_contratar.disabled = false;
    };

    // Evento para cada plan
    planes.forEach(plan => {
        // Sirve por si el usuario decide cambiar de plan
        plan.addEventListener("change", actualizarResumen);
    });
});
