const productos = [
    { nombre: "mantel", precio: 1000 },
    { nombre: "mantelito", precio: 500 },
    { nombre: "servilleta", precio: 250 },
    { nombre: "pei de cama", precio: 1000 },

];
 let carrito = []

 let seleccion = prompt("hola desea comprar algun producto si o no")

 while(seleccion != "si" && seleccion != "no"){
    alert("por favor ingrese si o no")
    seleccion = prompt("hola desea comprar algo si o no")
 }

 if(seleccion == "si"){
    alert("a continuacion nuestra lista de productos")
    let todosLosProductos = productos.map(
        (producto) => producto.nombre + " " + producto.precio + "$\n" 
    );
    alert(todosLosProductos.join(" - "))
} else if (seleccion == "no"){
    alert("gracias por venir, hasta pronto")
}

while(seleccion != "no"){
    let producto = prompt("agrega un producto a tu carrito")
    let precio = 0

    if(producto == "mantel" || producto == "mantelito" || producto == "servilleta" || producto == "pie de cama"){
        switch (producto) {
            case "mantel":
                precio = 1000;
            break;
            case "mantelito":
                precio = 500;
            break;
            case "servilleta":
                precio = 250;
            break;
            case "pie de cama":
                precio = 1000;
            break;
            default:
            break;
        }
    let unidades = parseInt(prompt("cuantas unidades quiere llevar"))

    carrito.push({producto, unidades, precio})
    console.log(carrito)
    } else {
        alert("no tenemos ese producto")
    }

    seleccion = prompt("desea seguir comprando?")

    while(seleccion === "no"){
        alert("gracias por la compra! hasta pronto")
        carrito.forEach((carritoFinal) => {
            console.log(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades},
             total a pagar por producto ${carritoFinal.unidades * carritoFinal.precio}`)
        })
    break;
    }

}

const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0)
prompt (`el total a pagar por su compra es: ${total}`)