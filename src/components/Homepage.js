import axios from "axios"
import { useEffect, useState } from "react"

export default function Homepage(){

  //THIS WILL MOVE TO THE REDUCER INITIAL STATE
  const [ data, setData ] = useState({
    loading: true,
    amount: null,
    posts: []
  })

  //THIS WILL MOVE TO ACTIONS PAGE
  //IT'LL DISPATCH AN ANCTION AT THE END
  const fetchPosts = async () => {
    const response = await axios.get(`https://codaisseur-coders-network.herokuapp.com/posts?offset=30`)
    // console.log("response", response)
    setData({loading: false, amount: response.data.count, posts: response.data.rows})
  }

  //THIS WILL DISPATCH FETCH POSTS INSTEAD
  useEffect(() => {
    fetchPosts()
  }, [])

  return(
    <div>
      <h2>List of posts</h2>
      <p> We have <b>{data.amount}</b> posts</p>
      {/* YOU WILL USE THE SELECTOR TO MAP OVER THE DATA */}
      {data.loading ? "Loading" : data.posts.map(post => <p key={post.id}>{post.title}</p>)}
    </div>
  )
}