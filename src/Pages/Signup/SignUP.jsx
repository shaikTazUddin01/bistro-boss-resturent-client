import { useContext } from "react";
import { useForm } from "react-hook-form"
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
const Signup = () => {
    const {auth,createUser}=useContext(AuthContext)
    const navigate=useNavigate()
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()


    const onSubmit = (data) => {
        // console.log(data)

        createUser(data?.email,data?.password)
        .then(res=>{
            updateProfile(auth.currentUser, {
                displayName: data?.name
              })
              .then(()=>{
                  Swal.fire({
                      position: "center",
                      icon: "success",
                      title: "sign up success",
                      showConfirmButton: false,
                      timer: 1500
                    });
                    navigate('/')
              })
              .catch(error=>{
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: error.messages,
                    showConfirmButton: false,
                    timer: 1500
                  });
              })
        }).catch(err=>{
            alert(err.message)
        })

    }

    return (
        <div className=" min-h-screen bg-base-200 py-36">
            <div className=" flex-col lg:flex-row-reverse items-center justify-center">
                <div className="text-center lg:text-left">
                </div>
                <div className=" shrink-0 w-full max-w-md mx-auto shadow-2xl bg-base-100 items-center justify-center">
                    {/* <h1>LOG IN</h1> */}
                    <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Full Name</span>
                            </label>
                            <input type="text" placeholder="Full name" className="input input-bordered" {...register("name",{ required: true })}  />
                            {errors.name?.type === "required" && (
                                <p className="text-red-500">Name is required</p>
                            )}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" {...register("email",{ required: true })}  />
                            {errors.email?.type === "required" && (
                                <p className="text-red-500">email is required</p>
                            )}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" {...register("password",{ required: true })}  />
                            {errors.password?.type === "required" && (
                                <p className="text-red-500">password is required</p>
                            )}
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary" type="submit">Sign up</button>
                        </div>
                        <p className="text-center">Already registered? <a href="/login" className="font-semibold text-yellow-700">Go to log in</a ></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;