import React, { useState } from 'react';
import authService from "../../services/authService";
import { Link, useNavigate } from 'react-router-dom';

function Login({setToken}) {
    let navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [message, setMessage] = useState("")
    
    const onChangevalue = (e, setState) => {
        const value = e.target.value;
        setState(value);
    };

    const logIn = ()=>{
        if (username == null || username.length <= 0) return setMessage("Le nom d'utilisateur est obligatoire");
        if (email == null || email.length <= 0) return setMessage("L'email est obligatoire");
        if (password == null || password.length <= 0) return setMessage("Le mot de passe est obligatoire");
        authService.register(username,email, password).then(
            () => {
              navigate("/explore");
              window.location.reload();
            },
            (error) => {
              const resMessage = (error.response &&error.response.data &&error.response.data.message) || error.message || error.toString();
                setMessage(resMessage);
            }
          );
    }
    return (
        <section className="App h-4/6 w-full flex justify-center items-center bg-dark ">
            <div class="p-4 w-full max-w-xl bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 bg-dark">

                <form class="space-y-6" action="#">
                    <h5 >Inscription </h5>
                    <div className='w-full'>
                        <label for="email" class="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Votre surnom</label>
                        <input type="email" name="email" id="email" class="input-primary" placeholder="Batman" value={username} onChange={(e) => onChangevalue(e, setUsername)}/>
                    </div>

                    <div className='w-full'>
                        <label for="email" class="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Votre email</label>
                        <input type="email" name="email" id="email" class="input-primary" placeholder="name@company.com" value={email} onChange={(e) => onChangevalue(e, setEmail)}/>
                    </div>
                    <div>
                        <label for="password" class="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Votre mot de passe</label>
                        <input type="password" name="password" id="password" placeholder="••••••••" class="input-primary"value={password} onChange={(e) => onChangevalue(e, setPassword)} />
                    </div>
      
                    <button type="submit" class="btn-primary" onClick={logIn}>Crée votre compte</button>

                    {message.length>0 && (
                            <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                            <span class="block sm:inline">{message}</span>
                            <span class="absolute top-0 bottom-0 right-0 px-4 py-3" onClick={()=>setMessage("")}>
                              <svg class="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title>
                              <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
                            </span>
                          </div>
                    )}

                    <div class="text-sm font-medium text-gray-500 dark:text-gray-300 p-2">
                        Vos avez déjà un compte? <Link class="text-primary hover:underline" to="/login">Se connecter</Link>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Login;