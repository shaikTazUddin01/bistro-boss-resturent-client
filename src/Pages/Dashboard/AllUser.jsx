
import useAllUser from '../../Hooks/useAllUser';
import SectionTitle from '../../Component/Shared/SectionTitle/SectionTitle'
import { MdDelete } from 'react-icons/md';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';
const AllUser = () => {
    const axiosSecure = useAxiosSecure()
    const [users, isPending ,refetch] = useAllUser()
    if (isPending) {
        return <p>Loading...</p>
    }
    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/user/${id}`)
                    .then(res => {
                        if (res?.data?.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            refetch()
                        }
                    })
                    .catch(err => {
                        Swal.fire({

                            text: "something is wrong please try again",
                            icon: "error"
                        });
                    })
            }
        });


    }
    return (
        <div>
            <SectionTitle heading={'manage all users'} subHeading={'How many??'}></SectionTitle>

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
                                    <td>{item?.name}</td>
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