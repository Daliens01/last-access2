"use client"
import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { useRouter } from 'next/navigation';
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { Image } from "@heroui/image";
import React, { ReactNode, useState } from "react";
import { Select, SelectItem } from "@heroui/select";
import { Button } from "@heroui/button";
export interface Selector {
  selector: string
}
export default function Home() {

  const [select, setSelect] = React.useState<React.ChangeEvent<HTMLInputElement>>()

  const router = useRouter()
  const handleSubmit = (ruta: React.ChangeEvent<HTMLInputElement>) => router.push(`/${ruta}`)
  const handleChange = (e: any) => {
    setSelect(e.target.value)
    console.log(`viendo el handle change en ${e.target.value}`);

  }
  const fecha = new Date()
  //busca la fecha actual para mostrarlo en pantalla
  


  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <Image src={"esi.png"} alt="esiapi Logo" width={458} height={150} />
      <i>Selecciona la modalidad para ver la lista de alumnos</i>
      <Select id="name" label="modalidad" placeholder="Selecciona una modalidad" className="max-w-xs"
        onChange={handleChange}>
        <SelectItem key={"licenciatura"}>LICENCIATURA</SelectItem>
        <SelectItem key={"posgrado"}>POSGRADO</SelectItem>
      </Select>
      {select ? <Button color="warning"
        onPress={() => handleSubmit(select)}
        variant="solid">Ver tabla de {select.toString()} </Button> : ""}
    </section>
  );
}
