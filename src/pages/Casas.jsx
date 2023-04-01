import React from 'react'
import ListCasas from '../helpers/ListCasas'
import GetData from '../components/GetData'
import '../css/Casas.css'
import Container from '@mui/material/Container'

function Casas() {
  return (
    <Container>
      <div className='casas'>
        <h1 className='casaTitle'>Nossas Casas</h1>
        <div className='listaCasas'>

          {ListCasas.map((getImovel, key) => {

            return (
              <GetData
                key={key}
                image={getImovel.image}
                name={getImovel.name}
                price={getImovel.price}
              />
            );

          })}

        </div>
      </div>
    </Container>
  )
}

export default Casas