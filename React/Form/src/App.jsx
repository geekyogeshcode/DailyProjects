import{useForm} from 'react-hook-form'
import{DevTool} from '@hookform/devtools'
import './App.css'

function App() {
  const form=useForm()
  const {register ,control,handleSubmit,formState:{errors}}=form

  const onSubmitForm=(data) =>{
    console.log("Form Submited",data);
  }

  return (
    <>
     <div className="App">
      <h1>Login Form</h1>
      <form action="" onSubmit={handleSubmit(onSubmitForm )}>
            <input type="text" placeholder='userName'  {...register('username',
              {required:"Username is Required",
                maxLength:{value:20,message:"username must be less than 20 characters"},
                minLength:{value:5,message:"Input must be greater than 5 characters"}
              })} />
            {errors.username && <p>{errors.username.message}</p>}

            <input type="email" placeholder='Email'   {...register('email',
            {required:"Email is Required",
            })} />
            {errors.email && <p>{errors.email.message}</p>}

            <input type="number" placeholder='Number'    {...register('number',{
              required:"Number is Required"
            })} />
            {errors.number && <p>{errors.number.message}</p>}

            <input type="password" placeholder='Password'    {...register('password',{
              required:"Password is Required",minLength:{
                value:10,
                message:"Must be greater than 10 Character"
              }
            })} />    
            {errors.password && <p>{errors.password.message}</p>}

            <button>Submit</button>
      </form>
      <DevTool  control={control}/> 
     </div>
    </>
  )
}

export default App