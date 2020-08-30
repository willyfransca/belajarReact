import React from 'react';
const Post = (porps) => {
    return (
        <div className="post">
            <div className="img-tumb">
                <img
                    src="https://placeimg.com/200/150/nature" alt="dummy"
                />
            </div>
            <div className="content">
                <p className="title">{porps.title}</p>
                <p className="desc">{porps.desc}</p>
            </div>
        </div>
    )
}
export default Post;