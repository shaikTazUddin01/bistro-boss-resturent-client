import { FaGoogle } from 'react-icons/fa';
import useAuth from '../../Hooks/useAuth.jsx';
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";
const SocialLogin = () => {
    const { googleLogin } = useAuth()
    const navigate = useNavigate()
    const handleGoogleLogin = () => {
        
        googleLogin()
            .then(res => {
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
                alert(err.messages)
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