"user client"
import React from 'react'
import { Button } from "@heroui/button"
import * as XLSX from "xlsx";
import { excelbuttoninterface } from '@/app/interfaces/interfaces';
const ExcelButton = (props: excelbuttoninterface)=>{
    const handleDownload = () => {
    
        const libro = XLSX.utils.book_new();
    
        const hoja = XLSX.utils.json_to_sheet(props.data);
    
        XLSX.utils.book_append_sheet(libro, hoja, props.name);
    
        setTimeout(() => {
          XLSX.writeFile(libro, `alumnos-${props.name}.xlsx`);
        }, 1000);
      };
 return(
    <Button color="success" onClick={handleDownload}>
    Descargar Excel de {props.name}
  </Button>
 )
}

export default ExcelButton