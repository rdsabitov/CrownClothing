import { signInWithEmailAndPassword } from "@firebase/auth";
import { useState } from "react"
import { signInWithGooglePopup, createUserDocumentFromAuth} from '../../utils/firebase/firebase.utils';
//import FormInput from '../form-input/form-input.component';
//import './sign-up-form.styles.scss'
import Button from '../button/button.component'
import FormInput from "../form-input/form-input.component";
import './sign-in-form.styles.scss'

const defaultFieldNames = { 
    email:'',
    password:''
}


const SignInForm =() => { 

    const [formFields, setFormFields] = useState(defaultFieldNames)
    const {email, password} = formFields

    const resetFormFields = () => { 
        setFormFields(defaultFieldNames)
    }

    const handleSubmit = async (event) => { 
        event.preventDefault();

            try { 
                const response = await signInWithEmailAndPassword(email, password)
                resetFormFields()

            } catch(error) { 
               
        } 
    }

    const handleChange = (event) => { 
        const {name, value} = event.target;

        setFormFields({...formFields, [name]: value})
    }


        const signWithGoogle = async() => {
         const {user} = await signInWithGooglePopup();
         await createUserDocumentFromAuth(user);
    
}
    return ( 
        <div className='sign-in-container'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={handleSubmit}> 
        <FormInput
                    label='Email'
                    type='email'
                    required
                    onChange={handleChange}
                    name='email'
                    value={email}
                 />
                <FormInput
                    label='Password'
                    type='password'
                    required
                    onChange={handleChange}
                    name='password'
                    value={password}
                 />
                 <div className="buttons-container">
                 <Button type='submit'>Sign In</Button>
                 <Button buttonType='google' onClick={signWithGoogle} >Sign In With Google</Button>
                 </div>
                
             </form>
    </div>
    )
}

export default SignInForm;
