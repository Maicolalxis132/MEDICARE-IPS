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

})


fetch('../Archivos/json/info.json')
.then(doc => doc.json())
.then(datos => {

    document.getElementById('quienessomostitle').textContent = datos.quienessomostitle;
    document.getElementById('quienessomosparrafo1').textContent = datos.quienessomosparrafo1;
    document.getElementById('quienessomosparrafo2').textContent = datos.quienessomosparrafo2;

    document.getElementById('misiontitle').textContent = datos.misiontitle;
    document.getElementById('misionparrafo1').textContent = datos.misionparrafo1;
    document.getElementById('misionparrafo2').textContent = datos.misionparrafo2;

    document.getElementById('visiontitle').textContent = datos.visiontitle;
    document.getElementById('visionparrafo1').textContent = datos.visionparrafo1;

    document.getElementById('valores').textContent = datos.valores;

    document.getElementById('valor1').textContent = datos.valor1;
    document.getElementById('valor1parrafo').textContent = datos.valor1parrafo;
    document.getElementById('valor2').textContent = datos.valor2;
    document.getElementById('valor2parrafo').textContent = datos.valor2parrafo;
    document.getElementById('valor3').textContent = datos.valor3;
    document.getElementById('valor3parrafo').textContent = datos.valor3parrafo;
    document.getElementById('valor4').textContent = datos.valor4;
    document.getElementById('valor4parrafo').textContent = datos.valor4parrafo;
    document.getElementById('valor5').textContent = datos.valor5;
    document.getElementById('valor5parrafo').textContent = datos.valor5parrafo;
    document.getElementById('valor6').textContent = datos.valor6;
    document.getElementById('valor6parrafo').textContent = datos.valor6parrafo;
    document.getElementById('valor7').textContent = datos.valor7;
    document.getElementById('valor7parrafo').textContent = datos.valor7parrafo;

    document.getElementById('debertitle').textContent = datos.debertitle;
    document.getElementById('deberparrafo1').textContent = datos.deberparrafo1;
    document.getElementById('deberparrafo2').textContent = datos.deberparrafo2;

    document.getElementById('deber1').textContent = datos.deber1;
    document.getElementById('deber2').textContent = datos.deber2;
    document.getElementById('deber3').textContent = datos.deber3;
    document.getElementById('deber4').textContent = datos.deber4;
    document.getElementById('deber5').textContent = datos.deber5;
    document.getElementById('deber6').textContent = datos.deber6;
    document.getElementById('deber7').textContent = datos.deber7;
    document.getElementById('deber8').textContent = datos.deber8;
    document.getElementById('deber9').textContent = datos.deber9;
    document.getElementById('deber10').textContent = datos.deber10;
    document.getElementById('deber11').textContent = datos.deber11;
    document.getElementById('deber12').textContent = datos.deber12;
    document.getElementById('deber13').textContent = datos.deber13;
    document.getElementById('deber14').textContent = datos.deber14;
    document.getElementById('deber15').textContent = datos.deber15;

    document.getElementById('derechotitle').textContent = datos.derechotitle;
    document.getElementById('derechoparrafo1').textContent = datos.derechoparrafo1;
    document.getElementById('derechoparrafo2').textContent = datos.derechoparrafo2;

    document.getElementById('derecho1').textContent = datos.derecho1;
    document.getElementById('derecho2').textContent = datos.derecho2;
    document.getElementById('derecho3').textContent = datos.derecho3;
    document.getElementById('derecho4').textContent = datos.derecho4;
    document.getElementById('derecho5').textContent = datos.derecho5;
    document.getElementById('derecho6').textContent = datos.derecho6;
    document.getElementById('derecho7').textContent = datos.derecho7;
    document.getElementById('derecho8').textContent = datos.derecho8;
    document.getElementById('derecho9').textContent = datos.derecho9;
    document.getElementById('derecho10').textContent = datos.derecho10;
    document.getElementById('derecho11').textContent = datos.derecho11;
    document.getElementById('derecho12').textContent = datos.derecho12;
    document.getElementById('derecho13').textContent = datos.derecho13;
    document.getElementById('derecho14').textContent = datos.derecho14;
    document.getElementById('derecho15').textContent = datos.derecho15;
    document.getElementById('derecho16').textContent = datos.derecho16;

    document.getElementById('capacidadtitle').textContent = datos.capacidadtitle;

    document.getElementById('targetimg1').src = datos.targetimg1;
    document.getElementById('targettitle1').textContent = datos.targettitle1;
    document.getElementById('targettext1').textContent = datos.targettext1;
    document.getElementById('targetimg2').src = datos.targetimg2;
    document.getElementById('targettitle2').textContent = datos.targettitle2;
    document.getElementById('targettext2').textContent = datos.targettext2;
    document.getElementById('targetimg3').src = datos.targetimg3;
    document.getElementById('targettitle3').textContent = datos.targettitle3;
    document.getElementById('targettext3').textContent = datos.targettext3;
    document.getElementById('targetimg4').src = datos.targetimg4;
    document.getElementById('targettitle4').textContent = datos.targettitle4;
    document.getElementById('targettext4').textContent = datos.targettext4;
    document.getElementById('targetimg5').src = datos.targetimg5;
    document.getElementById('targettitle5').textContent = datos.targettitle5;
    document.getElementById('targettext5').textContent = datos.targettext5;
    document.getElementById('targetimg6').src = datos.targetimg6;
    document.getElementById('targettitle6').textContent = datos.targettitle6;
    document.getElementById('targettext6').textContent = datos.targettext6;
    document.getElementById('targetimg7').src = datos.targetimg7;
    document.getElementById('targettitle7').textContent = datos.targettitle7;
    document.getElementById('targettext7').textContent = datos.targettext7;
    document.getElementById('targetimg8').src = datos.targetimg8;
    document.getElementById('targettitle8').textContent = datos.targettitle8;
    document.getElementById('targettext8').textContent = datos.targettext8;
    document.getElementById('targetimg9').src = datos.targetimg9;
    document.getElementById('targettitle9').textContent = datos.targettitle9;
    document.getElementById('targettext9').textContent = datos.targettext9;
    document.getElementById('targetimg10').src = datos.targetimg10;
    document.getElementById('targettitle10').textContent = datos.targettitle10;
    document.getElementById('targettext10').textContent = datos.targettext10;
    document.getElementById('targetimg11').src = datos.targetimg11;
    document.getElementById('targettitle11').textContent = datos.targettitle11;
    document.getElementById('targettext11').textContent = datos.targettext11;
    document.getElementById('targetimg12').src = datos.targetimg12;
    document.getElementById('targettitle12').textContent = datos.targettitle12;
    document.getElementById('targettext12').textContent = datos.targettext12;
    document.getElementById('targetimg13').src = datos.targetimg13;
    document.getElementById('targettitle13').textContent = datos.targettitle13;
    document.getElementById('targettext13').textContent = datos.targettext13;
    document.getElementById('targetimg14').src = datos.targetimg14;
    document.getElementById('targettitle14').textContent = datos.targettitle14;
    document.getElementById('targettext14').textContent = datos.targettext14;
    document.getElementById('targetimg15').src = datos.targetimg15;
    document.getElementById('targettitle15').textContent = datos.targettitle15;
    document.getElementById('targettext15').textContent = datos.targettext15;
    document.getElementById('targetimg16').src = datos.targetimg16;
    document.getElementById('targettitle16').textContent = datos.targettitle16;
    document.getElementById('targettext16').textContent = datos.targettext16;
    document.getElementById('targetimg17').src = datos.targetimg17;
    document.getElementById('targettitle17').textContent = datos.targettitle17;
    document.getElementById('targettext17').textContent = datos.targettext17;
    document.getElementById('targetimg18').src = datos.targetimg18;
    document.getElementById('targettitle18').textContent = datos.targettitle18;
    document.getElementById('targettext18').textContent = datos.targettext18;


    


    


})

fetch('./Archivos/json/footer.json')
.then(doc => doc.json())
.then(datos => {

document.querySelectorAll('.otroslink1').forEach(el => {el.href = datos.otroslink1;});
document.querySelectorAll('.otrostitle1').forEach(el => {el.textContent = datos.otrostitle1;});
document.querySelectorAll('.otroslink2').forEach(el => {el.href = datos.otroslink2;});
document.querySelectorAll('.otrostitle2').forEach(el => {el.textContent = datos.otrostitle2;});
document.querySelectorAll('.otroslink3').forEach(el => {el.href = datos.otroslink3;});
document.querySelectorAll('.otrostitle3').forEach(el => {el.textContent = datos.otrostitle3;});
document.querySelectorAll('.otrostitle4').forEach(el => {el.textContent = datos.otrostitle4;});


document.querySelectorAll('.hrefdireccion').forEach(el => {el.href = datos.hrefdireccion;});
document.querySelectorAll('.direccion').forEach(el => {el.textContent = datos.direccion;});
document.querySelectorAll('.hrefcorreo').forEach(el => {el.href = datos.hrefcorreo;});
document.querySelectorAll('.correo').forEach(el => {el.textContent = datos.correo;});
document.querySelectorAll('.hrefwhatsapp').forEach(el => {el.href = datos.hrefwhatsapp;});
document.querySelectorAll('.whatsapp').forEach(el => {el.textContent = datos.whatsapp;});
document.querySelectorAll('.hreffacebook').forEach(el => {el.href = datos.hreffacebook;});
document.querySelectorAll('.facebook').forEach(el => {el.textContent = datos.facebook;});


document.querySelectorAll('.botondario').forEach(el => {el.href = datos.botondario;});
    
})

fetch('../Archivos/json/footer.json')
.then(doc => doc.json())
.then(datos => {

document.querySelectorAll('.otroslink1').forEach(el => {el.href = datos.otroslink1;});
document.querySelectorAll('.otrostitle1').forEach(el => {el.textContent = datos.otrostitle1;});
document.querySelectorAll('.otroslink2').forEach(el => {el.href = datos.otroslink2;});
document.querySelectorAll('.otrostitle2').forEach(el => {el.textContent = datos.otrostitle2;});
document.querySelectorAll('.otroslink3').forEach(el => {el.href = datos.otroslink3;});
document.querySelectorAll('.otrostitle3').forEach(el => {el.textContent = datos.otrostitle3;});
document.querySelectorAll('.otrostitle4').forEach(el => {el.textContent = datos.otrostitle4;});

document.querySelectorAll('.hrefdireccion').forEach(el => {el.href = datos.hrefdireccion;});
document.querySelectorAll('.direccion').forEach(el => {el.textContent = datos.direccion;});
document.querySelectorAll('.hrefcorreo').forEach(el => {el.href = datos.hrefcorreo;});
document.querySelectorAll('.correo').forEach(el => {el.textContent = datos.correo;});
document.querySelectorAll('.hrefwhatsapp').forEach(el => {el.href = datos.hrefwhatsapp;});
document.querySelectorAll('.whatsapp').forEach(el => {el.textContent = datos.whatsapp;});
document.querySelectorAll('.hreffacebook').forEach(el => {el.href = datos.hreffacebook;});
document.querySelectorAll('.facebook').forEach(el => {el.textContent = datos.facebook;});


document.querySelectorAll('.botondario').forEach(el => {el.href = datos.botondario;});
    
})
