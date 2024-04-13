
import useAllUser from '../../Hooks/useAllUser';
import SectionTitle from '../../Component/Shared/SectionTitle/SectionTitle'
import { MdDelete } from 'react-icons/md';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
const AllUser = () => {
    const axiosSecure=useAxiosSecure()
    const [users, isPending] = useAllUser()
    if (isPending) {
        return <p>Loading...</p>
    }
    const handleDelete = (id) => {
        console.log(id)

    }
    return (
        <div>
            <SectionTitle heading={'Wanna add more?'} subHeading={'My Cart'}></SectionTitle>

            <section className='flex  justify-between items-center py-2 px-5'>
                <p className='text-2xl font-semibold uppercase'>Total Users: {users?.length}</p>

            </section>
            <div className="overflow-x-auto mt-10 ">
                <table className="table table-sm">
                    <thead>
                        <tr className='font-medium text-lg text-black'>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {users?.map((item, index) => {
                            return (

                                <tr key={item?._id}>

                                    <td>{index + 1}</td>
                                    <td>{
                                        <img src={item?.name} alt="" className='w-16 rounded-lg' />
                                    }</td>
                                    <td>{item?.email}</td>
                                    <td>admin</td>
                                    <td className=''>
                                        <button className='bg-red-600 p-3 rounded-md text-white text-xl' onClick={() => handleDelete(item?._id)}><MdDelete></MdDelete></button>
                                    </td>

                                </tr>
                            )
                        })}

                    </tbody>

                </table>



            </div>
        </div>
    );
};

export default AllUser;