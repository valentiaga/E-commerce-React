import { useEffect } from "react";
import { db } from "../../services/config";
import { collection, doc, setDoc } from "firebase/firestore";

const CargarArray = () => {

    useEffect(() => {
        const cargarData = async () => {
            try {
                const productos = [
                    {id: 1, nombre: 'Remeron Kendrick', precio: 21999, img: '../img/remeras/remera1.jpg', idCat: 1, stock:1000, desc: 'Remeron oversized confeccionado en tela jersey peinado 24/1 con cuello de rib. Estampado en la totalidad del frente y con logo institucional en espalda.'},
                    {id: 2, nombre: 'Remeron Kendall', precio: 21999, img: '../img/remeras/remera2.jpg', idCat: '1', stock:1300, desc: 'Remeron de jersey 24/1 premium con cuello de rib (morley). Misma molderia de siempre, oversized. La mejor que tenes. Diseño de estampa en serigrafia en frente y espalda.'},
                    {id: 3, nombre: 'Remera Lucy', precio: 21999, img: '../img/remeras/remera5.jpg', idCat: '1', stock:400, desc: 'Músculosa tipo sudadera con molderia oversized. Cuello de Rib. Bordado Institutional en frente.'},
                    {id: 4, nombre: 'Remera Snake', precio: 21999, img: '../img/remeras/remera4.jpg', idCat: '1', stock:1500, desc: 'Remeron oversized confeccionado en jersey 20/1 con cuello de rib.'},
                    {id: 5, nombre: 'Remeron Delcha', precio: 21999, img: '../img/remeras/remera6.jpg', idCat: 1, stock:1500, desc: 'Remeron molderia boxy fit de jersey con cuello de rib. Bordado institucional.'},
                    {id: 6, nombre: 'Remeron D3fai', precio: 21999, img: '../img/remeras/remera7.jpg', idCat: '1', stock:1400, desc: 'Remeron boxy fit. Prenda holgada y cuadrada con parche bordado institucional.'},
                    {id: 7, nombre: 'Remera Kook', precio: 21999, img: '../img/remeras/remera8.jpg', idCat: '1', stock:1000, desc: 'Remeron oversized confeccionado en tela jersey peinado 24/1 con cuello de rib. Estampado en la totalidad del frente y con logo institucional en espalda.'},
                    {id: 8, nombre: 'Remera Zwan', precio: 21999, img: '../img/remeras/remera9.jpg', idCat: '1', stock:1000, desc: 'Remeron oversized confeccionado en jersey 20/1 con cuello de rib.'},
                    {id: 9, nombre: 'Remera Rock', precio: 21999, img: '../img/remeras/remera1.jpg', idCat: 1, stock:1000, desc: 'Remeron boxy fit. Prenda holgada y cuadrada con parche bordado institucional.'},
                    {id: 10, nombre: 'Pantalón Carper', precio: 27999, img: '../img/pants/pant2.jpg', idCat: '2', stock:100, desc: 'Pantalon unisex de tela gabardina con molderia, estilo carpintero. Incluye 6 bolsillos.'},
                    {id: 11, nombre: 'Pant Rock', precio: 27999, img: '../img/pants/pant1.jpg', idCat: '2', stock:1000, desc: 'Pantalón de microtul elastizado con tajo.'},
                    {id: 12, nombre: 'Pareo Rock Tul', precio: 37850, img: '../img/polleras/pollera1.jpg', idCat: '3', stock:1000, desc: 'Pareo de tela microtul elastizado.'},
                    {id: 13, nombre: 'Pareo Rock Red', precio: 36500, img: '../img/polleras/pollera2.jpg', idCat: '3', stock:1000, desc: 'Pareo largo de tela red elastizada.'},
                    {id: 14, nombre: 'Mini Informal', precio: 25000, img: '../img/polleras/pollera3.jpg', idCat: '3', stock:1000, desc: 'Mini falda tela gabardina con doble bolsillo cargo en su delantera. Incluye cinturon con hebilla y ojales.'},
                    {id: 15, nombre: 'Mini Rock', precio: 23200, img: '../img/polleras/polera4.jpg', idCat: '3', stock:1000, desc: 'Mini falda tela gabardina elastizada'},
                ];

                const productosCollection = collection(db, "items");

                productos.forEach(async (producto) => {
                    const productoDoc = doc(productosCollection, producto.id.toString());
                    await setDoc(productoDoc, producto);
                })
            } catch (error) {
                console.log(error => console.log("Ocurrio un error al cargar los datos", error))
            }
        }

        cargarData();

    }, [])


    return (
        <div></div>
    )
}

export default CargarArray