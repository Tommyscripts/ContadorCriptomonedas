import {useState} from 'react'
import styled from '@emotion/styled';

const Label = styled.label`
    color: #fff;
    display: block;
    font-family:'Lato', sans-serif;
    font-size: 2rem;
    font-weight: 700;
    margin: 0.93rem 0;
`
const Select = styled.select`
    width: 100%;
    font-size: 1.125rem;
    padding: 0.875rem;
    border-radius: 0.625rem;
    margin-bottom: 1.25rem;
`
const useSelectMonedas = (label, opciones) => {
    const[state, setState] = useState('')

    const SelectMonedas = () => (
        <>
            <Label> {label}</Label>
            <Select
                value={state}
                onChange={e => setState(e.target.value)}
            >
                <option value=""> Seleccione</option>
                {opciones.map(opcion => (
                    <option
                        key={opcion.id}
                        value={opcion.id}
                    >
                        {opcion.nombre}
                    </option>
                ))}
            </Select>
        </>

    )
    return [state, SelectMonedas];
}

export default useSelectMonedas;
