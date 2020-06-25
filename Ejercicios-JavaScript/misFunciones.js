/**

 */

/**
 * Conversor de unidades entre metros, pies, pulgadas y yardas
 * @method cambiarunidades
 * @param {string} id - El id de los valores para el conversor
 * @param {number} valor - el valor de los inputs según la unidad
 * @return
 */
function cambiarunidades(id, valor){
    var metro, pulgada, pie, yarda;

    if(valor.includes(",")){
        valor = valor.replace(",",".");
    }
    if(isNaN(valor)){
        alert("Se ingresó un valor inválido" +id);
        metro="";
        pulgada="";
        pie="";
        yarda="";
    }else if(id=="metro"){
        metro=valor;
        pulgada=39.3701*valor;
        pie=3.28084*valor;
        yarda=1.09361*valor;
    }else if(id=="pulgada"){
        pulgada=valor;
        metro=0.0254*valor;
        pie=0.0833333*valor;
        yarda=0.0277778*valor;
    }else if(id=="pie"){
        pie = valor;
        metro=0.3047996952*valor;
        pulgada=11.999988*valor;
        yarda=0.333333*valor;
    }else if(id=="yarda"){
        yarda = valor;
        metro=0.9144*valor;
        pulgada=36*valor;
        pie=3*valor;
    }
    document.LasUnidades.unid_metro.value=Math.round(metro*100)/100;
    document.LasUnidades.unid_pulgada.value=Math.round(pulgada*100)/100;
    document.LasUnidades.unid_pie.value=Math.round(pie*100)/100;
    document.LasUnidades.unid_yarda.value=Math.round(yarda*100)/100;
}
function convertirGradosARadianes(id) {
    var grad, rad;
    if(id=="grados"){
        grad = document.getElementById("grados").value;
        rad= (grad*Math.PI)/180;
    }else if(id=="radianes"){
        rad = document.getElementById("radianes").value;
        grad = (rad*180)/Math.PI;
    }
    document.getElementById("grados").value = grad;
    document.getElementById("radianes").value = rad;
}

function Mostrar_Ocultar(valorMO) {
    if(valorMO=="val_mostrar"){
        document.getElementById("divMO").style.display='block';
    } else if(valorMO=="val_ocultar"){
        document.getElementById("divMO").style.display= 'none';
    }
}

function calcularsum() {
    var num1, num2;

    num1= document.getElementsByName("sum_num1")[0].value;
    num2= document.getElementsByName("sum_num2")[0].value;
    document.getElementsByName("sum_total")[0].innerHTML=  Number(num1) + Number(num2);
}

function calcularres() {
    var num1, num2;

    num1= document.getElementsByName("res_num1")[0].value;
    num2= document.getElementsByName("res_num2")[0].value;
    document.getElementsByName("res_total")[0].innerHTML=  Number(num1) - Number(num2);
}

function calcularmul() {
    var num1, num2;

    num1= document.getElementsByName("mul_num1")[0].value;
    num2= document.getElementsByName("mul_num2")[0].value;
    document.getElementsByName("mul_total")[0].innerHTML=  Number(num1) * Number(num2);

}

function calculardiv() {
    var num1, num2;

    num1= document.getElementsByName("div_num1")[0].value;
    num2= document.getElementsByName("div_num2")[0].value;
    document.getElementsByName("div_total")[0].innerHTML=  Number(num1) / Number(num2);

}

function CargarWeb() {
    var cant, unidad, urlcomp;

    cant= document.getElementById("distancia").value;
    unidad= document.getElementsByName("unidades")[0].value;
    urlcomp= "segundaWeb.html#" + cant + "#" + unidad;
    window.open(urlcomp);
}

function cargarRes() {
    var urlComp, can, un;

    urlComp = window.location.href;
    can=urlComp.split("#")[1];
    un=urlComp.split("#")[2];

    document.getElementById("dist").value= can + " " + un;
}

function dibujarCirCuad() {
     var canvas =document.getElementById("myCanvas");
     var ctx = canvas.getContext("2d");
     var ymax=canvas.height;
     var xmax=canvas.width;
     var margen= 5;
     ctx.fillStyle = "#333899";
     ctx.fillRect(0 + margen , ymax-40-margen, 40,40);

     ctx.arc(xmax/2, ymax/2, 60, 0, 2*Math.PI);
     ctx.stroke();
     ctx.fillStyle = "#fca71b";
     ctx.fill();

}
var bandera;
function dibujar(event) {
    var canvas= document.getElementById("CanvasADibujar")
    var ctx= canvas.getContext("2d");

    var posX= event.clientX;
    var posY= event.clientY;

    canvas.onmousedown = function(){bandera=true};
    canvas.onmouseup = function(){bandera=false};
    if(bandera){
        ctx.fillRect(posX , posY , 5, 5);
        ctx.fill;

    }
}

function Limpiar() {
    var canvas= document.getElementById("CanvasADibujar");
    var ctx= canvas.getContext("2d");

    canvas.width=canvas.width;
}

function Dibujar() {
    var canvas = document.getElementById("Canvas");
    var ctx = canvas.getContext("2d");
    var alturaMax= canvas.height;
    var anchoMax = canvas.width;
    ctx.beginPath();
    for(var i=0; i<alturaMax;){
        ctx.moveTo(0,i);
        ctx.lineTo(anchoMax, i);
        ctx.strokeStyle = "#ffffff";
        ctx.stroke();
        i=i+20;
    }
    ctx.closePath();
    ctx.beginPath();
    for(var i=0; i<anchoMax;){
        ctx.moveTo(i,0);
        ctx.lineTo(i, alturaMax);
        ctx.strokeStyle = "#f6f6f6";
        ctx.stroke();
        i=i+20;
    }
    ctx.closePath();
//Eje X
    ctx.beginPath();
    ctx.moveTo(0,alturaMax/2);
    ctx.lineTo(anchoMax, alturaMax/2);
    ctx.strokeStyle = "#fa0202";
    ctx.stroke();
    ctx.closePath();
//Eje Y
    ctx.beginPath();
    ctx.moveTo(anchoMax/2,0);
    ctx.lineTo(anchoMax/2, alturaMax);
    ctx.strokeStyle = "#fa0202";
    ctx.stroke();
    ctx.closePath();
}

function DibujarImagen(posX, posY) {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    console.log(posX,posY);
    var img= new Image();
    img.src= "images/auto.png";

    canvas.width=canvas.width;
    img.onload = function(){
        ctx.drawImage(img, posX, posY);
    };
}