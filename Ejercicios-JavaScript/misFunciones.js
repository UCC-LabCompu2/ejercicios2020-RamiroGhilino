/**

 */

/**
 * Conversor de unidades entre metros, pies, pulgadas y yardas
 * @method cambiarunidades
 * @param {string} id - El id de los valores para el conversor
 * @param {number} valor - el valor de los inputs según la unidad
 * @return
 */
function cambiarunidades(Id, valor){
    if(isNaN(valor)){
        alert("Se ingresó un valor inválido");
        document.LasUnidades.unid_metro.value="";
        document.LasUnidades.unid_pulgada.value="";
        document.LasUnidades.unid_pie.value="";
        document.LasUnidades.unid_yarda.value="";
    }else if(Id=="metro"){
        document.LasUnidades.unid_pulgada.value=39.3701*valor;
        document.LasUnidades.unid_pie.value=3.28084*valor;
        document.LasUnidades.unid_yarda.value=1.09361*valor;
    }else if(Id=="pulgada"){
        document.LasUnidades.unid_metro.value=0.0254*valor;
        document.LasUnidades.unid_pie.value=0.0833333*valor;
        document.LasUnidades.unid_yarda.value=0.0277778*valor;
    }else if(Id=="pie"){
        document.LasUnidades.unid_metro.value=0.3047996952*valor;
        document.LasUnidades.unid_pulgada.value=11.999988*valor;
        document.LasUnidades.unid_yarda.value=0.333333*valor;
    }else if(Id=="yarda"){
        document.LasUnidades.unid_metro.value=0.9144*valor;
        document.LasUnidades.unid_pulgada.value=36*valor;
        document.LasUnidades.unid_pie.value=3*valor;
    }
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
    document.getElementsByName("sum_total")[0].value=  Number(num1) + Number(num2);
}

function calcularres() {
    var num1, num2;

    num1= document.getElementsByName("res_num1")[0].value;
    num2= document.getElementsByName("res_num2")[0].value;
    document.getElementsByName("res_total")[0].value=  Number(num1) - Number(num2);
}

function calcularmul() {
    var num1, num2;

    num1= document.getElementsByName("mul_num1")[0].value;
    num2= document.getElementsByName("mul_num2")[0].value;
    document.getElementsByName("mul_total")[0].value=  Number(num1) * Number(num2);

}

function calculardiv() {
    var num1, num2;

    num1= document.getElementsByName("div_num1")[0].value;
    num2= document.getElementsByName("div_num2")[0].value;
    document.getElementsByName("div_total")[0].value=  Number(num1) / Number(num2);

}
