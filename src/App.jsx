import { useState, useEffect } from 'react'
import Formulario from './components/Formulario'
import styled from '@emotion/styled'
import ImagenCripto from './img/imagen-criptos.png'
import Resultado from './components/Resultado'
import Spinner from './components/Spinner'

const Imagen = styled.img`
  max-width: 25 rem;
  width: 80%;
  margin-top: 5rem;
  margin-bottom: 3.12rem;
  display: block;
`

const Contenedor = styled.div`
  max-width: 56.25rem;
  margin: 0 auto;
  width: 90%;
  @media (min-width: 62rem){
      display:grid;
      grid-template-columns: repeat(2,1fr);
      column-gap: 2rem;
  }
`

const Heading = styled.h1`
 font-family: 'Lato', sans-serif;
 color: #FFF;
 text-align: center;
 font-weight: 700;
 margin-top: 5rem;
 margin-bottom: 3.12rem;
 font-size: 2.12rem;

 &::after{
  content:'';
  width: 6.25rem;
  height: 0.37rem;
  background-color: #66A2FE;
  display:block;
  margin: 0.62rem auto 0 auto;
 }
`


function App() {
  const [monedas, setMonedas] = useState({})
  const [resultado, setResultado] = useState({})
  const [cargando, setCargando] = useState(false)

    useEffect(() => {
      if(Object.keys(monedas).length >0){
        setCargando(true)
        setResultado({})
        const cotizarCripto = async () => {
          const {moneda, criptoMoneda} = monedas
          const url =  `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptoMoneda}&tsyms=${moneda}`
            const respuesta = await fetch(url)
            const resultado = await respuesta.json()
            setResultado(resultado.DISPLAY[criptoMoneda][moneda])

            setCargando(false)
        }
        cotizarCripto()
      }
    }, [monedas])

  return (

    <Contenedor>
      <Imagen
        src={ImagenCripto}
        alt="imagenes criptomonedas"
      />
      <div>
        <Heading>Cotiza criptomonedas al instante</Heading>
        <Formulario
          setMonedas={setMonedas}
        />
        {cargando && <Spinner/>}
        { resultado.PRICE && <Resultado resultado={resultado}/>}
      </div>
    </Contenedor>

  )
}

export default App