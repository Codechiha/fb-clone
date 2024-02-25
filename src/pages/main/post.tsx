
import { Post as IPost } from './main';
import { auth, db } from '../../config/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { addDoc, collection, query, where } from 'firebase/firestore';

interface Props {
    post: IPost;
}

export const Post = (props: Props) => {
    const { post } = props;

    const [user] = useAuthState(auth);

    const likesRef = collection(db, 'likes');

    const likesDoc = query(likesRef, where("postId", "==", post.id))

    const addLike = async () => {
        await addDoc(likesRef, { userId: user?.uid, postId: post.id });
    };
    
    return(
        <div>
            <div>
                @{post.username}
                <button onClick={addLike}> &#128077; Like </button>
                
            </div>
            <div className='description'>
                <p>
                    {post.description}
                </p>
                
            </div>
        </div>
    )
}