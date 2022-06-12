import React from 'react';

function Login(props) {
    return (
        <section className="App h-4/6 w-full flex justify-center items-center bg-dark ">
            <div class="p-4 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 bg-dark">

                <form class="space-y-6" action="#">
                    <h5 >Sign in to our platform</h5>
                    <div className='w-full'>
                        <label for="email" class="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                        <input type="email" name="email" id="email" class="input-primary" placeholder="name@company.com" />
                    </div>
                    <div>
                        <label for="password" class="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your password</label>
                        <input type="password" name="password" id="password" placeholder="••••••••" class="input-primary" />
                    </div>
                    <div class="flex items-start">
                        <div class="flex items-start">
                            <div class="flex items-center h-5">
                                <input id="remember" type="checkbox" value="" class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" />
                            </div>
                            <label for="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                        </div>
                        <a href="#" class="ml-auto text-sm text-primary hover:underline">Lost Password?</a>
                    </div>
                    <button type="submit" class="btn-primary">Login to your account</button>
                    <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
                        Not registered? <a href="#" class="text-primary hover:underline">Create account</a>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Login;