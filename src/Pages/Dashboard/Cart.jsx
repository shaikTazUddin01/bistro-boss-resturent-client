import { FaDeleteLeft } from 'react-icons/fa6';
import SectionTitle from '../../Component/Shared/SectionTitle/SectionTitle'
import useCart from '../../Hooks/useCart';
import { MdDelete } from "react-icons/md";
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2'

const Cart = () => {
    const axiosSecure = useAxiosSecure()
    const [cart, refetch] = useCart()

const totalPrice=cart?.reduce((previousValue,currentValue)=>previousValue+currentValue?.price,0)

    const handleDelete = (itemId) => {
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
                axiosSecure.delete(`/addtocart/${itemId}`)
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

            }
        });


    }
    return (
        <div>
            <SectionTitle heading={'Wanna add more?'} subHeading={'My Cart'}></SectionTitle>

            <section className='flex  justify-between items-center py-2 px-5'>
                <p className='text-2xl font-semibold uppercase'>Total orders: {cart?.length}</p>
                <p className='text-2xl font-semibold uppercase'>Total price: ${totalPrice}</p>
                <button className='btn btn-success uppercase'>pay</button>
            </section>
            <div className="overflow-x-auto mt-10 ">
                <table className="table table-sm">
                    <thead>
                        <tr className='font-medium text-lg text-black'>
                            <th>#</th>
                            <th>Item Image</th>
                            <th>Item Name</th>
                            <th>Price</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {cart?.map((item, index) => {
                            return (

                                <tr key={item?._id}>

                                    <td>{index + 1}</td>
                                    <td>{
                                        <img src={item?.image} alt="" className='w-16 rounded-lg' />
                                    }</td>
                                    <td>{item?.name}</td>
                                    <td>${item?.price}</td>
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

export default Cart;