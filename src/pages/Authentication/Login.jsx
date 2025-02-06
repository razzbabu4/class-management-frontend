import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const { login } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(id, password);
            navigate(location?.state ? location.state : '/dashboard')
        } catch (err) {
            setError(err.message);
        }
    };
    return (
        <section className="min-h-screen flex items-center justify-center my-auto">
            <div className="w-full max-w-xl p-4 rounded-md shadow sm:p-8 bg-gray-900 text-gray-100 mx-auto">
                <h2 className="mb-3 text-3xl font-semibold text-center">Login to your account</h2>
                <div className="flex items-center w-full my-4">
                    <hr className="w-full text-gray-400 dark:text-gray-600" />
                    <p className="px-3 text-gray-400 dark:text-gray-600">OR</p>
                    <hr className="w-full text-gray-400 dark:text-gray-600" />
                </div>
                {error && <p className="text-red-500">{error}</p>}
                <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="space-y-4 form-control">
                        <div className="space-y-2 form-control">
                            <label htmlFor="id" className="block text-sm">User Id</label>
                            <input type="text" placeholder="user-id" value={id} onChange={(e) => setId(e.target.value)} required className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400 focus:dark:border-violet-600" />

                        </div>
                        <div className="space-y-2 form-control">
                            <label htmlFor="password" className="text-sm">Password</label>
                            <input type="password" placeholder="*******" value={password} onChange={(e) => setPassword(e.target.value)} required className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400 focus:dark:border-violet-600" />

                            <div className="flex justify-end">
                                <a rel="noopener noreferrer" href="#" className="text-sm hover:underline text-gray-400 dark:text-gray-600">Forgot password?</a>
                            </div>
                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <button type="submit" className="btn btn-accent btn-outline text-lg">Sign in</button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Login;