"user client"
import React from 'react'
import { Button } from "@heroui/button"
import * as XLSX from "xlsx";

const ExcelButton = (data: any, name: string)=>{

    const handleDownload = () => {
    
        const libro = XLSX.utils.book_new();
    
        const hoja = XLSX.utils.json_to_sheet(data);
    
        XLSX.utils.book_append_sheet(libro, hoja, name);
    
        setTimeout(() => {
          XLSX.writeFile(libro, `alumnos-${name}.xlsx`);
        }, 1000);
      };
 return(
    <Button color="success" onClick={handleDownload}>
    Descargar Excel de {name}
  </Button>
 )
}

export default ExcelButton