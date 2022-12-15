import Medusa from "@medusajs/medusa-js"

const medusaClient = new Medusa({ baseUrl: import.meta.env.VITE_MEDUSA_SERVER_URL })

export { medusaClient }