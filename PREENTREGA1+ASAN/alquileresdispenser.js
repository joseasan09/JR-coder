

    let producto = "";
    let precio = 0;
    let cantidad = 0;
    let precioTotal = 0;
    let cantidadTotal = 0;
    let seguirComprando = false;



do {
    producto = prompt ("¿queres alquilar un dispenser o comprar filtros?");
    cantidad = parseInt(prompt("¿cuantos queres?"));


    switch (producto) {
        case "dispenser":
            precio = 2500;
            break;
        case "filtros":
            precio = 1500;
            break
        default:
            alert("alguno de los datos ingresado no es correcto");
            precio= 0;
            cantidad= 0;
    }
    precioTotal += precio*cantidad;
    cantidadTotal += cantidad;

    seguirComprando = confirm("¿necesitas agregar algo mas?");
} while ( seguirComprando);

alert("a adquirido "+cantidadTotal+"productos y el total es $"+precioTotal)

let finalizarCompra = confirm("¿Desea finalizar la compra?")

if(finalizarCompra) alert("Su compra se a realizado con exito");
if(!finalizarCompra) alert("Esperamos volver a verlo pronto");
    

