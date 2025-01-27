"use client"
import React from 'react'
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@heroui/table";
import ExcelButton from "@/components/ExcelButtonDownload";
// import { useSearchParams } from "next/navigation";
import { ApiHook } from './hooks/useApi';
import { Reload } from './hooks/useReload';
import { UserData } from './interfaces/interfaces';
import { Example } from './example';
const Tables = ({ id }: { id: string }) => {

  try {
    //fetch para obtener los resultados de la api
    const { data, count } = ApiHook({ id })
    //hook para parar las recargas
    Reload()
    const fecha = new Date()
    //busca la fecha actual para mostrarlo en pantalla
    const TodaysDate = `${
      fecha.getDate() > 9 ?fecha.getDate():`0${fecha.getDate()}`
    }
    /
    ${
      fecha.toLocaleString('default', { month: 'long' }).toUpperCase()
    }
    /
    ${fecha.getFullYear()} 
`
    if (count) {
      return (<h1 style={{ textAlign: "center" }}>has excendido el limite de consultas</h1>)
    } else {
      return (<div className='justify-items-center'>
        <div className='flex p-4 '>
          <div><h1>Alumnos de {id} sin acceder a la fecha de:</h1></div>
         <div> <h1 className='text-primary mx-2'>{TodaysDate}</h1></div>
        </div>
        <Table
          aria-label="Example static collection table">
          <TableHeader>
            <TableColumn>MATRICULA</TableColumn>
            <TableColumn>ALUMNO</TableColumn>
            <TableColumn>CURSOS</TableColumn>
            <TableColumn>ÚLTIMO ACCESO</TableColumn>
          </TableHeader>
          <TableBody emptyContent={"No hay alumnos sin acceder por mas de 9 días"}>
            {/* se consulta si la longitud de los datos son mayores a 0 
              para mandar el mensaje de arriba o si no, mandar los datos obtenidos **/}
            {data.map(e => e).length > 0 ? data.map(e => (
              <TableRow key={e.MATRICULA} >
                <TableCell>{e.MATRICULA}</TableCell>
                <TableCell>{e.ALUMNO}</TableCell>
                <TableCell>{e.CURSOS}</TableCell>
                <TableCell>{e.ACCESO}</TableCell>
              </TableRow>
            )) : []
            }
          </TableBody>
        </Table>

        <div className='p-4 '>
          <ExcelButton data={data} name={id} />
        </div>
      </div>)
    }
  } catch (error) {
    return (<p> pagina no encontrada. Error
      {/* {error}  */}
    </p>)
  }

}

export default Tables