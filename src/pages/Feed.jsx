import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Loader from "../components/Loader";
import { toast } from "react-toastify";

const Feed = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState({});
  const [profilePicData, setProfilePicData] = useState(null);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const fetch_user_data = async () => {
    let req = await fetch("http://localhost:3000/auth/user", {
      credentials: "include",
    });
    req = await req.json();
    const { student_name, email, profile , roll_number , year , branch ,college_name } = req.data;
    setValue("student_name", student_name);
    setValue("email", email);
    setValue("profile_pic", profile);
    setValue("roll_number",roll_number)
    setValue("branch",branch)
    setValue("year",year)
    setValue("college_name",college_name)
    setUser({ data: req.data });
    setIsLoading(false);
    setImage(profile)
    console.log(profile)
  };

  useEffect(() => {
    fetch_user_data();
  }, []);

  const [image, setImage] = useState(null);

  const handleProfile = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file)); // image preview
      setValue("profile_pic", file); // react-hook-form me file save
      setProfilePicData(file);
    }
  };

  const onSubmit = async(data) => {
    const form = new FormData();
    for (const key in data) {
      form.append(key, data[key]);
    }
    form.append("profile", profilePicData);
     let req = await fetch('http://localhost:3000/auth/update', {
        method: "POST",
        // headers: { "Content-Type": "multipart/form-data" } ,
        credentials: "include",
        body: form,
      });
      req = await req.json()
       if(req.status == 200){
          toast.success(req.message)
          setTimeout(() => {
            document.location.reload()
          }, 5000);
        }else{
          toast.error(req.message)
        }
  };
  if (isLoading) {
    return <Loader />;
  } else {
    return (
      <div className="bg-[#1B3C53] min-h-screen w-full flex items-center justify-center p-6">
        <div className="bg-gradient-to-br from-[#2E5569] to-[#456882] rounded-2xl shadow-2xl w-full max-w-5xl p-8 md:p-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left: Avatar / Profile */}
          <div className="md:col-span-1 flex flex-col items-center justify-start gap-4">
            <label
              htmlFor="profile"
              className="relative w-40 h-40 rounded-full overflow-hidden bg-white/20 border border-white/10 flex items-center justify-center shadow-inner cursor-pointer"
            >
              {image ? (
                <img
                  src={image}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              ) : (
                <img src="/profile.jpg" alt="Profile Photo" />
              )}
            </label>

            {/* hidden file input */}
            <input
              type="file"
              className="hidden"
              id="profile"
              accept="image/*"
              onChange={handleProfile}
            />
            <h3 className="text-white text-lg font-semibold">
              {user.data.student_name}
            </h3>
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
                  htmlFor="student_name"
                  encType="application/x-www-form-urlencoded"
                  className="block mb-2 text-sm text-white/90"
                >
                  Student Name
                </label>
                <input
                  {...register("student_name", { required: true })}
                  type="text"
                  id="student_name"
                  className="w-full px-3 py-2 rounded-md bg-white/10 border border-white/20 placeholder-white/60 text-white focus:outline-none focus:ring-2 focus:ring-sky-400"
                  placeholder="XYZ"
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
                  disabled={true}
                  {...register("email", { required: true })}
                  type="email"
                  id="email"
                  className="cursor-not-allowed w-full px-3 py-2 rounded-md bg-white/10 border border-white/20 placeholder-white/60 text-white focus:outline-none focus:ring-2 focus:ring-sky-400"
                  placeholder="john.doe@company.com"
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
                  {...register("college_name", { required: true })}
                  type="text"
                  id="college"
                  className="w-full px-3 py-2 rounded-md bg-white/10 border border-white/20 placeholder-white/60 text-white focus:outline-none focus:ring-2 focus:ring-sky-400"
                  placeholder="Education Campus"
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
                  htmlFor="year"
                  className="block mb-2 text-sm text-white/90"
                >
                  Year
                </label>
                <input
                  {...register("year", { required: true })}
                  type="text"
                  id="year"
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
                  {...register("roll_number", { required: true })}
                  type="number"
                  id="rollNo"
                  className="w-full px-3 py-2 rounded-md bg-white/10 border border-white/20 placeholder-white/60 text-white focus:outline-none focus:ring-2 focus:ring-sky-400"
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
  }
};

export default Feed;
