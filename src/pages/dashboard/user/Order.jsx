import { useQuery } from "@tanstack/react-query";

import useAuth from "../../../hooks/useAuth";
import { Link } from "react-router-dom";

const Order = () => {
  const { user, loading } = useAuth();
  const token = localStorage.getItem("access_token");
  const { refetch, data: orders = [] } = useQuery({
    queryKey: ["orders", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await fetch(
        `https://complete-pge-server.onrender.com//payments?email=${user?.email}`,
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );
      return res.json();
    },
  });

  const formatItemNames = (itemsName) => {
    if (!itemsName) return [];
    const itemsStr = String(itemsName);
  
    // Updated regex to include numbers, dots, and hyphens
    const matches = itemsStr.match(/(?:[A-Za-z0-9.-]+(?:\s[A-Za-z0-9.-]+)*)/g) || [];
  
    return matches.map(item => item.trim());
  };
  

  // console.log(orders)

  // date format
  const formatDate = (createdAt) => {
    const createdAtDate = new Date(createdAt);
    return createdAtDate.toLocaleDateString(); // You can adjust options as needed
  };
  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
      {/* banner */}
      <div className=" bg-gradient-to-r from-0% from-[#FAFAFA] to-[#FCFCFC] to-100%">
        <div className="py-28 flex flex-col items-center justify-center">
          {/* content */}
          <div className=" text-center px-4 space-y-7">
            <h2 className="md:text-5xl text-4xl font-bold md:leading-snug leading-snug">
              Track Your All<span className="text-green"> Orders</span>
            </h2>
          </div>
        </div>
      </div>

      {/* table content */}
      <div>
        {
          <div>
            <div>
              <div className="overflow-x-auto">
                <table className="table text-center">
                  {/* head */}
                  <thead className="bg-green text-white rounded-sm">
                    <tr>
                      <th>#</th>
                      <th>Order Date</th>
                      <th>Items</th>
                      <th>transitionId</th>
                      <th>Price</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map((item, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{formatDate(item.createdAt)}</td>
                        <td className="p-3">
                          <div className="space-y-1 min-w-[150px]">
                            {formatItemNames(item.itemsName).map(
                              (itemName, idx) => (
                                <div
                                  key={idx}
                                  className="text-xs sm:text-sm text-gray-600"
                                >
                                  • {itemName}
                                </div>
                              )
                            )}
                          </div>
                        </td>
                        <td className="font-medium">{item.transitionId}</td>
                        <td>R{item.price}</td>
                        <td>{item.status}</td>
                        <td>
                          <Link to="/contact-us" className="btn btn-sm border-none text-orange-400 bg-transparent">
                            Contact
                            </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  {/* foot */}
                </table>
              </div>
            </div>
            <hr />
          </div>
        }
      </div>
    </div>
  );
};

export default Order;
