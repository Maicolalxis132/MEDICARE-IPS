fetch('./Archivos/json/index.json')
.then(doc => doc.json())
.then(datos => {
    document.getElementById('card1title').textContent = datos.card1title;
    document.getElementById('card1parrafo').textContent = datos.card1parrafo;

    document.getElementById('card2title').textContent = datos.card2title;
    document.getElementById('card2parrafo').textContent = datos.card2parrafo;

    document.getElementById('card3title').textContent = datos.card3title;
    document.getElementById('card3parrafo').textContent = datos.card3parrafo;

    document.getElementById('titlegrid').textContent = datos.titlegrid;
    document.getElementById('parrafogrid').textContent = datos.parrafogrid;
})
    