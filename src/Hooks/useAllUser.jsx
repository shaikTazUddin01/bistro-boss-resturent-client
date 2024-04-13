import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useAllUser = () => {
    const axiosSecure = useAxiosSecure()
    const { data: users ,isPending } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res =await axiosSecure.get('/user')
            return res.data
        }
    })
    return [users ,isPending]
};

export default useAllUser;