export interface ejemplo {
    sa: string,
    data: string
}

export function Example(props: ejemplo):JSX.Element{
    return(
        <>hola: {props.data}</>
    )
}
