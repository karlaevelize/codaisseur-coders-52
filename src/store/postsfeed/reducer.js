const initialState = {
  loading: true,
  amount: null,
  posts: []
};

export default function feedSliceReducer(state = initialState, action) {
  switch (action.type) {
    case "FEED/postsFetched": {
      //HERE IS THE PLACE TO CONSOLE.LOG YOURR ACTION.PAYLOAD
      console.log("feed/action", action.payload)
      return {
        loading: false,
        amount: action.payload.count,
        posts: [...action.payload.rows]
      }
    }
    default: {
      return state;
    }
  }
}