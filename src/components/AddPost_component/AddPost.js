import {useState} from 'react'
import './AddPost.css';

export default function AddPost(props) {
const [title, setTitle] = useState('');
const [body, setBody] = useState('');

const handleSubmit = (e) => {
    e.preventDefault();
    props.addPost(title, body);
    setTitle('');
    setBody('');
};    
    
return (
    <div class="cards-container">
    <div className='addPost-card'>
        <form onSubmit={handleSubmit}>
            <h2>Add new Post</h2>
            <div className="input-container">
                <label htmlFor="title">Title</label>
                <input 
                    name="title" 
                    type="text" 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div className="input-container">
                <label htmlFor="body">Body</label>
                <textarea 
                    name="body" 
                    value={body} 
                    onChange={(e) => setBody(e.target.value)}>
                </textarea>
            </div>
            <button type="submit" className="btn-submit">Add Post</button>
        </form>
    </div>
    </div>
    )
}