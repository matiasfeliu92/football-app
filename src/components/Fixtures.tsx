import React, { useEffect, useState } from 'react'
import DataService from '../services/services'

export const Fixtures = () => {
    const services = new DataService()
    const [fixtures, setFixtures] = useState([])

    useEffect(()=>{
        services.getFixtures('2023-05-05', '2023-05-20')
        .then((res)=>{
            setFixtures(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    }, [])

    console.log(fixtures)
  return (
    <div>Fixtures</div>
  )
}
