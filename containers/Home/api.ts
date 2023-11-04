import { client } from 'services'

const endpoint = '';

export const getCities = async () => await client.get(endpoint)