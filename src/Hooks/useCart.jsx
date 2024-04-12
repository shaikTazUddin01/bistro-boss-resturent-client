import {
    useQuery,
} from '@tanstack/react-query'
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth'
const useCart = () => {
    const {user}=useAuth()
    // console.log(user?.email)
    const axiosSecure = useAxiosSecure()
    const { data: cart ,refetch } = useQuery({
        queryKey: ['cart'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/addtocart?email=${user?.email}`)
            return res.data
        }
    })
    return [cart,refetch]
};

export default useCart;