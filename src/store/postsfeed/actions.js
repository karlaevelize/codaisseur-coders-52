import axios from "axios"

export const postsFetched = (data) => {
  return {
    type: "FEED/postsFetched",
    payload: data
  }
}

export const fetchPosts = async (dispatch, getState) => {
  const response = await axios.get(`https://codaisseur-coders-network.herokuapp.com/posts?offset=30`)
  // PASSING THE RESPONSE AS PAYLOAD, ONLY DATA YOU NEED, NOT EVERYTHING
  dispatch(postsFetched(response.data))
}

//ANOTHER OF WITING THE SAME THING
//MANDATORY FOR WHEN USING A PARAMETER
//FETCHING SOMETHING BY ID FOR EXAMPLE
//HAVE TO CALL WHEN DISPATCHING

// export const fetchPosts = () => {
//   return async function thunk(dispatch, getState){
//     const response = await axios.get(`https://codaisseur-coders-network.herokuapp.com/posts?offset=30`)
//   // console.log(response.data)
//   dispatch(postsFetched(response.data))
//   }
// }