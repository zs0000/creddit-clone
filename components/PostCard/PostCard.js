import DownvoteIcon from "../DownvoteIcon/DownvoteIcon"
import PostInteractionsBar from "../PostInteractionsBar/PostInteractionsBar"
import UpvoteIcon from "../UpvoteIcon/UpvoteIcon"
import s from "./PostCard.module.css"

export default function PostCard({title,author,time,subreddit}) {

    const upvotes = "3.7k"
    const comments = "3.0k"

  return (
    <div className={s.container}>
       
        <div className={s.upvotes}>
            <UpvoteIcon/>
        {upvotes}
            <DownvoteIcon/>
        </div>
        <div className={s.primaryinfo}>
        <div className={s.postinfo}>
        <span className={s.subreddit}>
        {subreddit}
        </span>
        <span className={s.dot}>
            .
        </span>
        <span className={s.author}>
        Posted by u/{author}
        </span>
        <span className={s.time}>
            {time}
        </span>
        </div>
        <div className={s.posttitle}>
            <span className={s.title}>
            {title}
            </span>
        </div>
        <PostInteractionsBar comments={comments}/>
        </div>
         {/* 
        {if(hasImg){
            <div className={s.image}>
            <Image src={post.image_url}/>
            </div>
        }}
        */}
       
    </div>
  )
}
