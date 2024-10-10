/* Crear un constructor alumno e instanciar los 22 alumnos de la clase de daw */

class Alumno {
    constructor(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
}

const alumnos = [];
for (let i = 0; i < 22; i++) {
  alumnos.push(new Alumno(`Nombre ${i}`, `Apellido ${i}`, 20 + i));
}
console.log(alumnos); // Verify the alumnos array is populated

let alumnoGenerados = [];

const container = document.getElementById('container');
const generarButton = document.getElementById('generar');

generarButton.addEventListener('click', () => {
    console.log("has hecho click");
    if (alumnoGenerados.length >= 22) {
        alert('No puedes generar más de 22 alumnos');
        return;
    }

    const indiceRandom = Math.floor(Math.random() * alumnos.length);
    const alumno = alumnos[indiceRandom];

    if (alumnoGenerados.includes(alumno)) {
        alert('Ya has generado este alumno');
        return;
    }

    alumnoGenerados.push(alumno);
    console.log(alumnoGenerados);

    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
        <h2>${alumno.nombre} ${alumno.apellido}</h2>
        <p>Edad: ${alumno.edad}</p>
        <button class="borrar">Borrar</button>
    `;
    container.appendChild(card);

    const borrarButton = card.querySelector('.borrar');
    borrarButton.addEventListener('click', () => {
        container.removeChild(card);
        alumnoGenerados = alumnoGenerados.filter(a => a !== alumno);
    });
});