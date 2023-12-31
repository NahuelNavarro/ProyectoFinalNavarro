import React from 'react'
import { ColeccionContext } from "../../context/ColeccionContext";
import {useContext,useEffect,useState} from 'react';
import TableTotal from '../Card/TableTotal';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';



export default function ResumenProductos() {
    const { coleccion, setColeccion } = useContext(ColeccionContext)
  

    useEffect(() => {
      }, [coleccion])

      const [suma,setSuma] = useState()

      const sumarTotal = () => {

        const sumar = coleccion.map ((x)=> x.cantidad * x.Filtrado.price).reduce((a,c)=>a+c,0)


        setSuma(sumar)

     };

      useEffect(() => {
        sumarTotal()
      }, [suma])
      


      const finalizarCompra = () => {
              }

  return (

    <div className='container-box '>
          <div>Total${suma}</div>
       
    <Table striped bordered hover>
    <thead>
      <tr>
        <th>#</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Username</th>
      </tr>
    </thead>
    <tbody>
    {coleccion.map((elm)=>{
            return <TableTotal producto={elm}/> 
            })}
      
    </tbody>
  </Table>
  <Link to= "/FinalizarCompra" variant="secondary"  onClick={finalizarCompra} ><button>Finalizar compra</button></Link>

    </div>
    
   
    
    )
  
}
