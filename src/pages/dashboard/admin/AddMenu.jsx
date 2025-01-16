import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const AddMenu = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  // image hosting keys
  const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
  const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

  // on submit form
  const onSubmit = async (data) => {
    // image upload to imgbb and then get an url
    const imageFile = { image: data.image[0] };
    const hostingImg = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });

    if (hostingImg.data.success) {
      // now send the menu item data to the server with the image url
      const menuItem = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        recipe: data.recipe,
        image: hostingImg.data.data.display_url
      }

      const menuRes = await axiosSecure.post('/menu', menuItem);
      if(menuRes.status === 200){
        // show success popup
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.name} is added to the menu.`,
          showConfirmButton: false,
          timer: 1500
        });
      }
    }
  };

  return (
    <div className="w-full md:w-[870px] mx-auto px-4">
      <h2 className="text-2xl font-semibold my-4">
        Upload a New <span className="text-green">Menu Item</span>
      </h2>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Recipe Name */}
          <div className="form-control w-full my-6">
            <label className="label" htmlFor="name">
              <span className="label-text">Recipe Name*</span>
            </label>
            <input
              id="name"
              type="text"
              placeholder="Recipe Name"
              {...register("name", { required: "Recipe Name is required" })}
              className="input input-bordered w-full"
            />
          </div>

          <div className="flex gap-6">
            {/* Category */}
            <div className="form-control w-full my-6">
              <label className="label" htmlFor="category">
                <span className="label-text">Category*</span>
              </label>
              <select
                id="category"
                {...register("category", { required: "Category is required" })}
                className="select select-bordered w-full"
              >
                <option value="default" disabled>
                  Select a category
                </option>
                <option value="popular">Popular</option>
                <option value="kota">Kota</option>
                <option value="chips">Chips</option>
                <option value="drinks">Drinks</option>
                <option value="extras">Extras</option>
              </select>
            </div>

            {/* Price */}
            <div className="form-control w-full my-6">
              <label className="label" htmlFor="price">
                <span className="label-text">Price*</span>
              </label>
              <input
                id="price"
                type="number"
                placeholder="Price"
                {...register("price", {
                  required: "Price is required",
                  min: { value: 0.01, message: "Price must be greater than 0" },
                })}
                className="input input-bordered w-full"
              />
            </div>
          </div>

          {/* Recipe Details */}
          <div className="form-control">
            <label className="label" htmlFor="recipe">
              <span className="label-text">Recipe Details</span>
            </label>
            <textarea
              id="recipe"
              {...register("recipe")}
              className="textarea textarea-bordered h-24"
              placeholder="Recipe details"
            ></textarea>
          </div>

          {/* Image Upload */}
          <div className="form-control w-full my-6">
            <label className="label" htmlFor="image">
              <span className="label-text">Upload Image*</span>
            </label>
            <input
              id="image"
              {...register("image", { required: "Image is required" })}
              type="file"
              className="file-input w-full max-w-xs"
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn bg-green text-white px-6">
            Add Item <FaUtensils />
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddMenu;