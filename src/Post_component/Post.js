import './Post.css'

export default function Post(props) {
    return (
    <div className="cards-container">
        <div className="post-card">
            <h2 className="post-title">{props.title}</h2>
            <p className="post-body">{props.body}</p>
            <button 
                className="btn-delete" 
                onClick={() => props.deletePost(props.id)}>
                Delete
            </button>
        </div>
    </div>
    )
}