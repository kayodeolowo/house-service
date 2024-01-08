import { request, gql } from 'graphql-request'

const MASTER_URL= "https://api-eu-west-2.hygraph.com/v2/clr4sw81s6in801uqp4p2kcai/master"

const getSlider =async()=>{
    const query = gql`
    query GetSlider {
        sliders {
          name
          id
          image {
            url
          }
        }
      }
`
const result = await request(MASTER_URL, query)

return result 
}


export default {
    getSlider
}