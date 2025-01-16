import React, { useState } from "react";
import useMenu from "../../../hooks/useMenu";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";
import { FaArrowCircleRight, FaArrowLeft, FaArrowRight, FaEdit, FaTrashAlt, FaUsers } from "react-icons/fa";
import { GiConfirmed } from "react-icons/gi";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";

const ManageBookings = () => {
  const { user, loading } = useAuth();
  const token = localStorage.getItem("access_token");
  const { refetch, data: orders = [] } = useQuery({
    queryKey: ["orders", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await fetch(
        `https://complete-pge-server.onrender.com//payments/all`,
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );
      return res.json();
    },
  });
    //   console.log(menu)
      const axiosSecure = useAxiosSecure();
    
    //   pagination
    const [currentPage, setCurrentPage] = useState(1);
    const items_Per_Page =  10;
    const indexOfLastItem = currentPage * items_Per_Page;
      const indexOfFirstItem = indexOfLastItem - items_Per_Page;
      const currentItems = orders.slice(indexOfFirstItem, indexOfLastItem);
    
      // delete item
      const handleDeleteItem = (item) => {
        console.log(item._id)
    }

    const formatItemNames = (itemsName) => {
      if (!itemsName) return [];
      const itemsStr = String(itemsName);
    
      // Updated regex to include numbers, dots, and hyphens
      const matches = itemsStr.match(/(?:[A-Za-z0-9.-]+(?:\s[A-Za-z0-9.-]+)*)/g) || [];
    
      return matches.map(item => item.trim());
    };

     // date format
     const formatDate = (createdAt) => {
      const createdAtDate = new Date(createdAt);
    
      // Format date with month as a number (1-12)
      const date = createdAtDate.toLocaleDateString(undefined, {
        year: 'numeric',
        month: 'numeric', // Month as a number (1-12)
        day: 'numeric',
      });
    
      // Format time (e.g., "2:30 PM")
      const time = createdAtDate.toLocaleTimeString(undefined, {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      });
    
      return `${date}\n${time}`; // Combine date and time with a newline
    };
    
    // confirm order
    const confiremedOrder = async(item) => {
      console.log(item)
    await  axiosSecure.patch(`/payments/${item._id}`)
      .then(res =>{
          console.log(res.data)
          Swal.fire({
              position: "top-end",
              icon: "success",
              title: `Order Confirmed Now!`,
              showConfirmButton: false,
              timer: 1500
            });
          refetch();
      })

    }

  console.log(orders)


  return (
    <div className="w-full md:w-[870px] mx-auto px-4 ">
      <h2 className="text-2xl font-semibold my-4">
        Manage All <span className="text-green">Bookings!</span>
      </h2>

      {/* menu items table  */}
      <div>
        <div className="overflow-x-auto lg:overflow-x-visible">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>User</th>
                <th>Items</th>
                <th>Order Date</th>
                <th>Transition Id</th>
                <th>Price</th>
                <th>Status</th>
                <th>Confirm Order</th>
                {/*<th>Delete</th>*/}
              </tr>
            </thead>
            <tbody>
              {currentItems.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>
                   {item.email}
                  </td>
                  <td className="p-3">
                    <div className="space-y-1 min-w-[150px]">
                      {formatItemNames(item.itemsName).map((itemName, idx) => (
                        <div key={idx} className="text-xs sm:text-sm text-gray-600">
                          • {itemName}
                        </div>
                      ))}
                    </div>
                  </td>
                  <td>{formatDate(item.createdAt)}</td>
                  <td>{item.transitionId}</td>
                  <td>R{item.price}</td>
                  <td>
                    {item.status}
                  </td>
                  <td className="text-center">
                  {item.status === "confirmed" ? "done" :  <button
                      className="btn bg-green text-white btn-xs text-center"
                      onClick={() => confiremedOrder(item)}
                    >
                      <GiConfirmed />
                    </button> }
                   
                  </td>
                  {/*<td>
                    <button
                      onClick={() => handleDeleteItem(item)}
                      className="btn btn-ghost btn-xs"
                    >
                      <FaTrashAlt className="text-red"></FaTrashAlt>
                    </button>
                  </td>*/}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-center my-4">
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="btn btn-sm mr-2 btn-warning"
          >
            <FaArrowLeft/> Previous 
          </button>
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={indexOfLastItem >= orders.length}
            className="btn btn-sm bg-green text-white"
          >
            Next  <FaArrowRight/>
          </button>
        </div>
    </div>
  )
}

export default ManageBookings