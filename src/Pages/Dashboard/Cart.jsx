import { FaDeleteLeft } from 'react-icons/fa6';
import SectionTitle from '../../Component/Shared/SectionTitle/SectionTitle'
import useCart from '../../Hooks/useCart';
import { MdDelete } from "react-icons/md";

const Cart = () => {
    const [cart] = useCart()
    return (
        <div>
            <SectionTitle heading={'Wanna add more?'} subHeading={'My Cart'}></SectionTitle>


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
                                        <button className='bg-red-600 p-3 rounded-md text-white text-xl'><MdDelete></MdDelete></button>
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