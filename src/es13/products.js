// Bun ya tiene Fetch por default ¯\_(ツ)_/¯

const response = await fetch('https://api.escuelajs.co/api/v1/products')
export const products = await response.json()

