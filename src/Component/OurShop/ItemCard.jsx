import React from 'react';
import useAuth from '../../Hooks/useAuth';
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import axios from 'axios'
import useAxiosSecure from '../../Hooks/useAxiosSecure';
const ItemCard = ({ item }) => {
    const axiosSecure = useAxiosSecure()
    const { image, recipe, name } = item
    const { user } = useAuth()
    const navigate = useNavigate()
    const handleAddToCart = (item) => {
        if (user && user?.email) {

            const cartInFo = {
                id: item?._id,
                name: item?.name,
                category: item?.category,
                price: item?.price,
                image: item?.image,
                user: user?.email
            }
            console.log(cartInFo)

            axiosSecure.post('/addtocart', cartInFo)
                .then(res => {
                    if(res.data.insertedId){
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: `${item?.name} add to the cart`,
                            showConfirmButton: false,
                            timer: 1500
                          });
                    }
                    
                }).catch(err => {
                    Swal.fire({
                        position: "center",
                        icon: "error",
                        title: `${err?.messages}`,
                        showConfirmButton: false,
                        timer: 1500
                      });
                })

        } else {
            Swal.fire({
                title: "You are not logged in?",
                text: "Please log in!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, log in!"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login')
                }
            });
        }
    }
    return (
        <div>
            <div className="card card-compact bg-slate-200 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="text-xl font-medium">{name}</h2>
                    <p className='text-left'>{recipe}</p>
                    <div className="card-actions justify-center">
                        <button className="btn btn-primary" onClick={() => handleAddToCart(item)}>Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemCard;