import BookmarkIcon from "../BookmarkIcon/BookmarkIcon"
import CommentIcon from "../CommentIcon/CommentIcon"
import ShareIcon from "../ShareIcon/ShareIcon"
import s from "./PostInteractionsBar.module.css"

export default function PostInteractionsBar({comments}) {
  return (
    <div className={s.container}>
        <div className={s.item}>
        <CommentIcon/>
      
        <span className={s.label}>
        {comments && comments + " "}
            Comments
        </span>
        </div>
        <div className={s.item}>
            <ShareIcon/>
        <span className={s.label}>
           
            Share
        </span>
        </div>
        <div className={s.item}>
        <BookmarkIcon/>
        <span className={s.label}>
            Save
        </span>
        </div>
        <div className={s.item}>
            ...
        </div>
    </div>
  )
}
