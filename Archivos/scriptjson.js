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

    document.getElementById('especialidadtitle1').textContent = datos.especialidadtitle1;
    document.getElementById('especialidadparrafo1').textContent = datos.especialidadparrafo1;

    document.getElementById('especialidadtitle2').textContent = datos.especialidadtitle2;
    document.getElementById('especialidadparrafo2').textContent = datos.especialidadparrafo2;

    document.getElementById('especialidadtitle3').textContent = datos.especialidadtitle3;
    document.getElementById('especialidadparrafo3').textContent = datos.especialidadparrafo3;

    document.getElementById('especialidadtitle4').textContent = datos.especialidadtitle4;
    document.getElementById('especialidadparrafo4').textContent = datos.especialidadparrafo4;

    document.getElementById('especialidadtitle5').textContent = datos.especialidadtitle5;
    document.getElementById('especialidadparrafo5').textContent = datos.especialidadparrafo5;

    document.getElementById('especialidadtitle6').textContent = datos.especialidadtitle6;
    document.getElementById('especialidadparrafo6').textContent = datos.especialidadparrafo6;

    document.getElementById('especialidadtitle7').textContent = datos.especialidadtitle7;
    document.getElementById('especialidadparrafo7').textContent = datos.especialidadparrafo7;

    document.getElementById('especialidadtitle8').textContent = datos.especialidadtitle8;
    document.getElementById('especialidadparrafo8').textContent = datos.especialidadparrafo8;

    document.getElementById('especialidadtitle9').textContent = datos.especialidadtitle9;
    document.getElementById('especialidadparrafo9').textContent = datos.especialidadparrafo9;


    document.getElementById('hrefdireccion').href = datos.hrefdireccion;
    document.getElementById('direccion').textContent = datos.direccion;

    document.getElementById('hrefcorreo').href = datos.hrefcorreo;
    document.getElementById('correo').textContent = datos.correo;

    document.getElementById('hrefwhatsapp').href = datos.hrefwhatsapp;
    document.getElementById('whatsapp').textContent = datos.whatsapp;

    document.getElementById('botondario').href = datos.botondario;

})
    