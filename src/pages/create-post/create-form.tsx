import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
//a doc is an entry into firebase database
import { addDoc, collection} from 'firebase/firestore';
import { db, auth } from '../../config/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';


//A requirement of typescript to specify data types for data
interface CreateFormData {
    description: string
}

export const CreateForm = () => {

    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    const schema = yup.object().shape({
        description: yup.string().required("Post cannot be empty")
    })

    const { register, handleSubmit, formState: { errors } } = useForm<CreateFormData>({
        resolver: yupResolver(schema)
    });

    const postsRef = collection(db, 'posts');

    const onCreatePost = async (data: CreateFormData) => {
        await addDoc(postsRef, {
            description: data.description,
            username: user?.displayName,
            userId: user?.uid
        });

        navigate('/');
    }
    return (
        <form onSubmit={handleSubmit(onCreatePost)}>
            <textarea placeholder='What is on your mind...' {...register('description')}/>
            <p style={{color: 'red'}}>{errors.description?.message}</p>
            <input type='submit'/>
        </form>
    )
}