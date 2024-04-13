import { FaGoogle } from 'react-icons/fa';
import useAuth from '../../Hooks/useAuth.jsx';
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";
import useAxiosPublic from '../../Hooks/useAxiosPublic.jsx';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider.jsx';

const SocialLogin = () => {
    // const { googleLogin, user } = useAuth()
    const {googleLogin}=useContext(AuthContext)
    const navigate = useNavigate()
    const axiosPublic = useAxiosPublic()
    

   


    const handleGoogleLogin = () => {
       
        googleLogin()
            .then(res => {
                const email = res?.user?.email;
                const name = res?.user?.displayName;
                const userInfo = {
                    email,
                    name
                }
                axiosPublic.post(`/user?email=${email}`, userInfo)
                .then(res=>{
                    // console.log(res)
                })
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Log in success",
                    showConfirmButton: false,
                    timer: 1500
                });
                
                if (location?.state) {
                    navigate(location.state)
                } else {
                    navigate('/')
                }
            }).catch(err => {
                // alert(err.messages)
            })

    }
    return (
        <div className='mx-auto'>
            <div className='bg-yellow-500 p-2 rounded-full' onClick={handleGoogleLogin}>
                <FaGoogle className='text-white'></FaGoogle>
            </div>
        </div>
    );
};

export default SocialLogin;