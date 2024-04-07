import { useContext } from "react";
import { useForm } from "react-hook-form"
import { AuthContext } from "../../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";
const LoginPage = () => {
    const { login } = useContext(AuthContext);

    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()


    const onSubmit = (data) => {

        login(data?.email, data?.password)
            .then(res => {
                alert("login")
                navigate("/")
            }).catch(err => {
                alert(err.messages)
            })

    }

    return (
        <div className=" min-h-screen bg-base-200 pt-40">
            <div className=" flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                </div>
                <div className=" shrink-0 w-full max-w-md mx-auto shadow-2xl bg-base-100">
                    {/* <h1>LOG IN</h1> */}
                    <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" {...register("email")} required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" {...register("password")} required />

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary" type="submit">Login</button>
                        </div>
                        <p className="text-center">New Here? <a href="/signup" className="font-semibold text-yellow-700">Create a New Account</a ></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;