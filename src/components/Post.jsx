import { useState } from "react";

const Post = (props)=>{
    const [active, setActive] = useState(false);
    return(
        <div onClick={()=>setActive(!active)} className="repos__item">
            <div className="repos__title">
                Profile:<a target="_blank" href={props.post.html_url}> {props.post.login}</a>
            </div>
            <div className="repos__text">
                <p className="repos__profile">Url: <a target="_blank" href={props.post.html_url}>{props.post.html_url}</a></p>
                <p className="repos__description">id: <span> {props.post.id}</span></p>
                <div className={active ? "repos__dopDeescription_active":"repos__dopDeescription"}>
                    <img src={props.post.avatar_url} alt="avatar" />
                </div>
            </div>
        </div>
    )
}
export default Post;