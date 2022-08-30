import React, { useState } from 'react';
import authService from "../../services/authService";
import { useNavigate, Link } from 'react-router-dom';

function Login({ setToken }) {
    let navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("")

    const onChangevalue = (e, setState) => {
        const value = e.target.value;
        setState(value);
    };

    const logIn = (e) => {
        e.preventDefault();
        if (email == null || email.length <= 0) return setMessage("L'email est obligatoire");
        if (password == null || password.length <= 0) return setMessage("Le mot de passe est obligatoire");
        authService.login(email, password).then(
            () => {
                navigate("/explore");
                window.location.reload();
            },
            (error) => {
                const resMessage = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
                setMessage(resMessage);
            }
        );
    }
    return (
        <section className="place-content-center  w-full flex justify-center items-center bg-dark py-7">
            <div class="m-4 w-full max-w-xl p-4 bg-white rounded-lg border border-gray-200 shadow-md sm:p-6  lg:p-12 bg-dark">

                <form class="space-y-6" action="#">
                    <h5 >Se connecter</h5>
                    <div className='w-full'>
                        <label for="email" class="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
                        <input type="email" name="email" id="email" class="input-primary" placeholder="name@mail.com" value={email} onChange={(e) => onChangevalue(e, setEmail)} />
                    </div>
                    <div>
                        <label for="password" class="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Mot de passe</label>
                        <input type="password" name="password" id="password" placeholder="••••••••" class="input-primary" value={password} onChange={(e) => onChangevalue(e, setPassword)} />
                    </div>
                    <div class="flex items-start gap-8">
                        <div class="flex items-start">
                            <div class="flex items-center h-5">
                                <input id="remember" type="checkbox" value="" class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" />
                            </div>
                            <label for="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Rester connecter</label>
                        </div>
                        <a href="#" class="ml-auto text-sm text-primary hover:underline">Mot de passe oublié?</a>
                    </div>
                    <button type="submit" class="btn-primary" onClick={logIn}>Se connecter</button>

                    {message.length>0 && (
                            <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                            <span class="block sm:inline">{message}</span>
                            <span class="absolute top-0 bottom-0 right-0 px-4 py-3" onClick={()=>setMessage("")}>
                              <svg class="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title>
                              <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
                            </span>
                          </div>
                    )}

                    {/* <div class="w-full flex items-center justify-between py-5">
                        <hr class="w-full bg-gray-400" />
                        <p class="text-base font-medium leading-4 px-2.5 text-gray-400">OU</p>
                        <hr class="w-full bg-gray-400  " />
                    </div>

                    <button class="focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full mt-10">
                        <img src={google} data-src={google} alt="crypto" className="lazy lazyLoaded" data-load-priority="0" />
                        <p class="text-base font-medium ml-4 text-gray-700">Continuer avec Google</p>
                    </button> */}

                    <div class="text-sm font-medium text-gray-500 dark:text-gray-300 p-2">
                        Vous n'avez pas un compte? <Link class="text-primary hover:underline" to="/signup">Crée un compte</Link>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Login;