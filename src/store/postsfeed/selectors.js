// export const selectWhatever = reduxState => reduxState.something
export const selectPosts = reduxState => reduxState.feed.posts
export const selectAmount = reduxState => reduxState.feed.amount
export const selectLoading = reduxState => reduxState.feed.loading

