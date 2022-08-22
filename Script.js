let dineroTotal = parseInt(prompt('Cuanto dinero tienes?')) 
const primerOpcion = 'compra leche, manteca, pan, gaseosa'
const segundaOpcion = 'deja la gaseosa y trae el resto'
const terceraOpcion = 'compra lo que te alcance'
const cuartaOpcion = 'que hiciste con la plata que deje para las compras?'


if (dineroTotal >=500) {
    alert(primerOpcion)
    alert('te sobran ' + (dineroTotal - 500))
}
else if (dineroTotal <499 && dineroTotal >=400) {
    alert(segundaOpcion)
    alert('te sobran '+ (dineroTotal-380))
} 
else if (dineroTotal <=399 && dineroTotal >=200) {
    alert(terceraOpcion)
}
else {
    alert(cuartaOpcion)
}
alert('Nos vemos en casa')













