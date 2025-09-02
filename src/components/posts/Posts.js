import React from 'react';
import Post from '../post/Post.js';
import './Posts.css';

class Posts extends React.Component
{
    constructor(props)
    {
        super(props)
        //let {posts} = props;
        this.state = 
        {
            //posts:{props.posts}
            //posts:props.posts
            props:props
        }
    }
    render()
    {
        return(
            <div>
                {
                    //typeof(this.state.props)
                    this.state.props.posts.map
                    (
                        post =>
                        (
                            <Post key={post.id} title={post.title} content={post.content}/>
                        )
                    )
                }
            </div>
        )
    }
}

export default Posts;