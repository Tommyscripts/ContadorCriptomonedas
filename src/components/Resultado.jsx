import styled from "@emotion/styled"

const Contenedor = styled.div`
    color: #FFF;
    font-family: 'Lato', sans-serif;
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 1.875rem;
`
const Imagen = styled.img`
    width: 7.5rem;
`
const Texto = styled.p`
      font-size: 1.125rem;
    span{
        font-weight: 700;
    }
`
const Precio = styled.p`
    font-size: 1.4rem;
    span{
        font-weight: 700;
    }
`
const Resultado = ({resultado}) => {
    const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE} =resultado
  return (
    <Contenedor>
        <Imagen
            src={`https://cryptocompare.com/${IMAGEURL}`} 
            alt="imagen cripto" 
         />
        <div>
        <Precio>
            El precio es de: <span> {PRICE}</span>
        </Precio>
        <Texto>
            El preciomás alto del día: <span> {HIGHDAY}</span>
        </Texto>
        <Texto>
            El precio el precio más bajo del día: <span> {LOWDAY}</span>
        </Texto>
        <Texto>
            Varación: <span> {CHANGEPCT24HOUR}</span>
        </Texto>

        <Texto>
            Última actualización: <span> {LASTUPDATE}</span>
        </Texto>
        </div>
    </Contenedor>
  )
}

export default Resultado
