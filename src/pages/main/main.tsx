import { getDocs, collection } from 'firebase/firestore';
import { db, auth } from '../../config/firebase';
import { useState, useEffect } from 'react';
import { Post } from './post';

export interface Post {
    id: string;
    userId: string;
    description: string;
    username: string;
}


//Home Page: to display the posts
export const Main = () => {
    const [postsList, setPostsList] = useState<Post[] | null>(null);
    const postsRef = collection(db, "posts")

    const getPosts = async () => {
        const data = await getDocs(postsRef);
        setPostsList(data.docs.map((doc) => ({...doc.data(), id: doc.id})) as Post[]);
    }

    useEffect(() => {
        getPosts();
    }, []);

    return (
        <div>
           {postsList?.map((post) => <Post post={post}/>)}
        </div>
    )
}