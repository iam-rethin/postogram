import {useForm} from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup'
import {addDoc, collection} from 'firebase/firestore'
import { db, auth } from '../../config/firebase';
import { useAuthState } from "react-firebase-hooks/auth"
import { useNavigate } from 'react-router-dom';
import './form.css'

//typscript
interface CreateFormData {
    title: string;
    description: string;
}

export const CreateForm = () => {

    const navigate = useNavigate();

    const [user] = useAuthState(auth);

    const schema = yup.object().shape({
        title: yup.string().required("You must add a title!"),
        description: yup.string().required("You must add a descrition!")

    })

    const {register, handleSubmit, formState:{errors}} = useForm<CreateFormData>({
        resolver: yupResolver(schema),
    })

    const postRef = collection(db, "posts")

    const onCreatePost = async (data:CreateFormData) => {
        await addDoc(postRef, {
            title: data.title,               //...data
            description: data.description,
            username: user?.displayName,
            userId: user?.uid
        })

        navigate("/")
    }

    return (
        <form onSubmit={handleSubmit(onCreatePost)} className='form'>
            <input placeholder="Enter title..." {...register("title")} className='titleInput'/>
            <p style={{color:"red"}}>{errors.title?.message}</p>
            <textarea placeholder="Enter description..." {...register("description")} className='textArea'/>
            <p style={{color:"red"}}>{errors.description?.message}</p>
            <input type='submit' className='submitButton'/>
        </form>
    )
}