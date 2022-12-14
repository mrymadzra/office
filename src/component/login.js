import { useNavigate } from "react-router-dom"

export const Login = () => {
    let navigate = useNavigate();
    return(
        <div class="flex items-center justify-center min-h-screen bg-gradient-to-r from-violet-500 to-fuchsia-500">
        <div class="px-8 py-6 mt-4 text-left bg-white shadow-lg rounded-lg">
            <h3 class="text-2xl font-bold text-center">Office Management System</h3>
            <div class="mt-4">
                <h4 class="text-1xl text-center">Admin Login</h4>
            </div>
            <form action="">
                <div class="mt-4">
                    <div>
                        <label class="block" for="email">Admin ID</label>
                                <input type="text" placeholder="Enter admin ID"
                                    class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                    </div>
                    <div class="mt-4">
                        <label class="block">Password</label>
                                <input type="password" placeholder="Enter password"
                                    class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                    </div>
                    <div class="flex items-baseline justify-between">
                        <button class="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900" onClick={ () => navigate('/home') }>Login</button>
                        <a href="#" class="text-sm text-blue-600 hover:underline">Forgot password?</a>
                    </div>
                </div>
            </form>
        </div>
    </div>
    )
}
