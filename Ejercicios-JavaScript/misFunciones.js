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