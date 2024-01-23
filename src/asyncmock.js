const productos = [
    {id: 1, nombre: 'Remeron Kendrick', precio: 500, img: '../img/remeras/remera1.jpg', idCat: 1},
    {id: 2, nombre: 'Remeron Kendall', precio: 200, img: '../img/remeras/remera2.jpg', idCat: '1'},
    {id: 3, nombre: 'Remera Lucy', precio: 180, img: '../img/remeras/remera5.jpg', idCat: '1'},
    {id: 4, nombre: 'Remera Snake', precio: 900, img: '../img/remeras/remera4.jpg', idCat: '1'},
    {id: 5, nombre: 'Remeron Delcha', precio: 500, img: '../img/remeras/remera6.jpg', idCat: 1},
    {id: 6, nombre: 'Remeron D3fai', precio: 200, img: '../img/remeras/remera7.jpg', idCat: '1'},
    {id: 7, nombre: 'Remera Kook', precio: 180, img: '../img/remeras/remera8.jpg', idCat: '1'},
    {id: 8, nombre: 'Remera Zwan', precio: 900, img: '../img/remeras/remera9.jpg', idCat: '1'},
    {id: 9, nombre: 'Pant Rock', precio: 500, img: '../img/remeras/remera1.jpg', idCat: 1},
    {id: 10, nombre: 'Pantalón Carper', precio: 200, img: '../img/pants/pant1.jpg', idCat: '2'},
    {id: 11, nombre: 'Remera Lucy', precio: 180, img: '../img/pants/pant2.jpg', idCat: '2'},
    {id: 12, nombre: 'Pareo Rock Tul', precio: 900, img: '../img/polleras/pollera1.jpg', idCat: '3'},
    {id: 13, nombre: 'Pareo Rock Red', precio: 500, img: '../img/polleras/pollera2.jpg', idCat: '3'},
    {id: 14, nombre: 'Mini Informal', precio: 200, img: '../img/polleras/pollera3.jpg', idCat: '3'},
    {id: 15, nombre: 'Mini Rock', precio: 180, img: '../img/polleras/polera4.jpg', idCat: '3'},
    {id: 16, nombre: 'Remera Zwan', precio: 900, img: '../img/remeras/remera9.jpg', idCat: '1'}
];


export const getProductos=()=>{
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve(productos)
        }, 1000);
    })
}

//Funcion similar pero ahora retorna un solo item:

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = productos.find(prod => prod.id == id);
            resolve(producto);
        }, 1000);
    })
}

export const getProductosPorCategoria = (idCategoria) => {
    console.log(idCategoria);
    return new Promise((resolve) => {
        setTimeout(() => {
            const productosCategoria = productos.filter(prod => prod.idCat == idCategoria);
            resolve(productosCategoria);
        }, 2000);
    })
}