import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
//ALWAYS IMPORT THE ACTION AND TEST IT BEFORE PASSING TO REDUCER
import { fetchPosts } from "../store/postsfeed/actions"
import { selectPosts, selectAmount, selectLoading} from "../store/postsfeed/selectors"

export default function Homepage(){

  const posts = useSelector(selectPosts)
  const loading = useSelector(selectLoading)
  const amount = useSelector(selectAmount)

  const dispatch = useDispatch()

  useEffect(() => {
    //NOTE THAT I DON'T CALL FETCHPOSTS
    //IF USED FUNCTION INSIDE FUNCTION, YOU HAVE TO CALL
    //EX: dispatch(fetchPosts())
    dispatch(fetchPosts)
  }, [])

  return(
    <div>
      <h2>List of posts</h2>
      <p> We have <b>{amount}</b> posts</p>
      {loading ? "Loading" : posts.map(post => <p key={post.id}>{post.title}</p>)}
    </div>
  )
}