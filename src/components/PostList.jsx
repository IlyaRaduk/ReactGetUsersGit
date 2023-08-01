import Post from "./Post";

const PostList = (props) => {
    let posts;
    if (props.posts.length !== 0) {
        posts = props.posts.map((item) =>
            <Post key={item.id} post={item} />
        )
    }
    return (
        <>
            <div className="repos__colomns">
                {props.posts.length === 0 ? 'Список репозиториев пуст' : posts}
            </div>
            <div>
                {props.posts.length === 0 ? '' : props.pages.map(p => <button className={props.currentPages===p ? 'page__current':'page'} onClick={()=>props.setCurrentPages(p)} key={p}>{p}</button>)}
            </div>
        </>
    )
}
export default PostList;