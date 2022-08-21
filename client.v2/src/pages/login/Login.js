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
                    <button type="submit" class="btn-primary" onClick={logIn}>Login to your account</button>

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
                        <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.9892 10.1871C18.9892 9.36767 18.9246 8.76973 18.7847 8.14966H9.68848V11.848H15.0277C14.9201 12.767 14.3388 14.1512 13.047 15.0812L13.0289 15.205L15.905 17.4969L16.1042 17.5173C17.9342 15.7789 18.9892 13.221 18.9892 10.1871Z" fill="#4285F4" />
                            <path d="M9.68813 19.9314C12.3039 19.9314 14.4999 19.0455 16.1039 17.5174L13.0467 15.0813C12.2286 15.6682 11.1306 16.0779 9.68813 16.0779C7.12612 16.0779 4.95165 14.3395 4.17651 11.9366L4.06289 11.9465L1.07231 14.3273L1.0332 14.4391C2.62638 17.6946 5.89889 19.9314 9.68813 19.9314Z" fill="#34A853" />
                            <path d="M4.17667 11.9366C3.97215 11.3165 3.85378 10.6521 3.85378 9.96562C3.85378 9.27905 3.97215 8.6147 4.16591 7.99463L4.1605 7.86257L1.13246 5.44363L1.03339 5.49211C0.37677 6.84302 0 8.36005 0 9.96562C0 11.5712 0.37677 13.0881 1.03339 14.4391L4.17667 11.9366Z" fill="#FBBC05" />
                            <path d="M9.68807 3.85336C11.5073 3.85336 12.7344 4.66168 13.4342 5.33718L16.1684 2.59107C14.4892 0.985496 12.3039 0 9.68807 0C5.89885 0 2.62637 2.23672 1.0332 5.49214L4.16573 7.99466C4.95162 5.59183 7.12608 3.85336 9.68807 3.85336Z" fill="#EB4335" />
                        </svg>
                        <p class="text-base font-medium ml-4 text-gray-700">Continuer avec Google</p>
                    </button> */}

                    <div class="text-sm font-medium text-gray-500 dark:text-gray-300 p-2">
                        Vous n'avez pas un compte? <Link class="text-primary hover:underline" to="/signup">Cree un compte</Link>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Login;