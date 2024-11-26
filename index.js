function ObtenerCursos() {
    fetch('https://cursos-88af3-default-rtdb.firebaseio.com/cursos.json')
        .then(response => response.json())
        .then(data => { 
            const cursosContenedor = document.getElementById('cursos-contenedor');
            cursosContenedor.innerHTML = '';

            for (const key in data) {
                const curso = data[key];

                const card = document.createElement('div');
                card.className = 'card';

                const imagen = document.createElement('img');
                imagen.src = curso.imagen ; // Imagen genérica si no hay imagen
                card.appendChild(imagen);

                const titulo = document.createElement('h2');
                titulo.textContent = curso.nombre;
                card.appendChild(titulo);

                const descripcion = document.createElement('p');
                descripcion.textContent = curso.objetivos;
                card.appendChild(descripcion);

                const valor = document.createElement('p');
                valor.textContent = `Valor: ${curso.valor}`;
                valor.classList.add('p-valor')
                card.appendChild(valor);

                const boton = document.createElement('button');
                boton.textContent = 'Ver más';
                card.appendChild(boton);

                cursosContenedor.appendChild(card);
            }
        })
}

ObtenerCursos();