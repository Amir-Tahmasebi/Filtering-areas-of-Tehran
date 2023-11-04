import { useState, useEffect } from 'react'

import { UseCitiesType, getCities } from './'

export function useCities(keyword?: UseCitiesType) {
    const [cities, setCities] = useState([])
    useEffect(() => {
        getCities().then(res => {
            console.log(res);
        })
    }, [])

}