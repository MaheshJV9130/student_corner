import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Feed = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const [image, setImage] = useState(null);

  // jab user photo select kare
  const handleProfile = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file)); // image preview
      setValue("profile_pic", file); // react-hook-form me file save
    }
  };

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <div className="bg-[#1B3C53] min-h-screen w-full flex items-center justify-center p-6">
      <div className="bg-gradient-to-br from-[#2E5569] to-[#456882] rounded-2xl shadow-2xl w-full max-w-5xl p-8 md:p-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left: Avatar / Profile */}
        <div className="md:col-span-1 flex flex-col items-center justify-start gap-4">
          <label
            htmlFor="profile_pic"
            className="relative w-40 h-40 rounded-full overflow-hidden bg-white/20 border border-white/10 flex items-center justify-center shadow-inner cursor-pointer"
          >
            {image ? (
              <img
                src={image}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            ) : (
              <img src="../public/profile.jpg" alt="Profile Photo" />
            )}
          </label>

          {/* hidden file input */}
          <input
            type="file"
            className="hidden"
            id="profile_pic"
            accept="image/*"
            onChange={handleProfile}
          />
          <h3 className="text-white text-lg font-semibold">XYZ</h3>
        </div>

        {/* Right: Form */}
        <div className="md:col-span-2 bg-white/5 backdrop-blur-md rounded-lg p-6 md:p-8">
          <h2 className="text-white text-2xl font-semibold mb-4">
            Profile details
          </h2>
          <form
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div>
              <label
                htmlFor="first_name"
                className="block mb-2 text-sm text-white/90"
              >
                First name
              </label>
              <input
                {...register("first_name", { required: true })}
                type="text"
                id="first_name"
                className="w-full px-3 py-2 rounded-md bg-white/10 border border-white/20 placeholder-white/60 text-white focus:outline-none focus:ring-2 focus:ring-sky-400"
                placeholder="XYZ"
              />
            </div>
            <div>
              <label
                htmlFor="last_name"
                className="block mb-2 text-sm text-white/90"
              >
                Last name
              </label>
              <input
                {...register("last_name", { required: true })}
                type="text"
                id="last_name"
                className="w-full px-3 py-2 rounded-md bg-white/10 border border-white/20 placeholder-white/60 text-white focus:outline-none focus:ring-2 focus:ring-sky-400"
                placeholder="XYZ"
              />
            </div>

            <div>
              <label
                htmlFor="college"
                className="block mb-2 text-sm text-white/90"
              >
                College
              </label>
              <input
                {...register("college", { required: true })}
                type="text"
                id="college"
                className="w-full px-3 py-2 rounded-md bg-white/10 border border-white/20 placeholder-white/60 text-white focus:outline-none focus:ring-2 focus:ring-sky-400"
                placeholder="Education Campus"
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block mb-2 text-sm text-white/90"
              >
                Phone number
              </label>
              <input
                {...register("phone", { required: true })}
                type="tel"
                id="phone"
                className="w-full px-3 py-2 rounded-md bg-white/10 border border-white/20 placeholder-white/60 text-white focus:outline-none focus:ring-2 focus:ring-sky-400"
                placeholder="123-45-678"
              />
            </div>

            <div>
              <label
                htmlFor="branch"
                className="block mb-2 text-sm text-white/90"
              >
                Branch
              </label>
              <input
                {...register("branch", { required: true })}
                type="text"
                id="branch"
                className="w-full px-3 py-2 rounded-md bg-white/10 border border-white/20 placeholder-white/60 text-white focus:outline-none focus:ring-2 focus:ring-sky-400"
                placeholder="Information Tech (SY)"
              />
            </div>
            <div>
              <label
                htmlFor="rollNo"
                className="block mb-2 text-sm text-white/90"
              >
                Roll No.
              </label>
              <input
                {...register("rollNo", { required: true })}
                type="number"
                id="rollNo"
                className="w-full px-3 py-2 rounded-md bg-white/10 border border-white/20 placeholder-white/60 text-white focus:outline-none focus:ring-2 focus:ring-sky-400"
              />
            </div>

            <div className="md:col-span-2">
              <label
                htmlFor="email"
                className="block mb-2 text-sm text-white/90"
              >
                Email address
              </label>
              <input
                {...register("email", { required: true })}
                type="email"
                id="email"
                className="w-full px-3 py-2 rounded-md bg-white/10 border border-white/20 placeholder-white/60 text-white focus:outline-none focus:ring-2 focus:ring-sky-400"
                placeholder="john.doe@company.com"
              />
            </div>

            <div className="md:col-span-2 flex justify-end">
              <button
                type="submit"
                className="px-6 py-2 bg-sky-500 hover:bg-sky-600 text-white rounded-md transition cursor-pointer"
              >
                Save changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Feed;
