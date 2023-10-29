
import axios from 'axios'

const searchCar = async (term) =>{
    const res = await axios.get('https://mocki.io/v1/0a27dccc-c0bd-46fb-8343-2599e48f9e9e',{
          params:{
              model: term
          }
      })

      debugger;
      return res.data;
  }

  export default searchCar