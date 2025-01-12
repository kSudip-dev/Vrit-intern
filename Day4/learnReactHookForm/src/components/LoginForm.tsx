import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router";

// Type for form inputs
type Inputs = {
  phone: string; // Use `string` since inputs are always string before parsing
  password: string;
};

// Type for user data stored in localStorage
type UserData = {
  phone: string;
  password: string;
} | null; // It can also be null if no data is found in localStorage

function LoginForm() {
  const [userData, setUserData] = useState<UserData>(null); // State type
  const navigate = useNavigate();

  // Fetch user data from localStorage
  useEffect(() => {
    const data = localStorage.getItem("userData");
    if (data) {
      setUserData(JSON.parse(data)); // Parse and set user data
    }
  }, []);

  // React Hook Form setup
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  // Form submission handler
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    if (userData && data.password === userData.password) {
      localStorage.setItem("user",JSON.stringify(data))
      navigate("/dashboard"); // Navigate to login
    } else {
      alert("Invalid password or user not found");
    }
  };

  return (
    <div className="w-[100%] h-[100vh] flex items-center flex-col gap-[30px] justify-center">
      <h1 className="text-red text-3xl font-bold underline">Login</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-[10px] w-[400px] border-[1px] border-blue-500 bg-blue-200/50 p-[25px] rounded-[10px]"
      >
        {/* Phone Field */}
        <label className="text-blue-500 font-bold">Phone</label>
        <input
          type="text"
          {...register("phone", {
            required: "Phone number is required",
            minLength: {
              value: 10,
              message: "Phone number must be exactly 10 digits",
            },
            maxLength: {
              value: 10,
              message: "Phone number must be exactly 10 digits",
            },
          })}
          className="border-b-[2px] border-blue-500 bg-transparent"
        />
        {errors.phone && (
          <span className="text-red-500">{errors.phone.message}</span>
        )}

        {/* Password Field */}
        <label className="text-blue-500 font-bold">Password</label>
        <input
          type="password"
          {...register("password", { required: "Password is required" })}
          className="border-b-[2px] border-blue-500 bg-transparent"
        />
        {errors.password && (
          <span className="text-red-500">{errors.password.message}</span>
        )}

        {/* Submit Button */}
        <input
          className="bg-blue-500 shadow-lg shadow-blue-500/50 text-white h-[40px] rounded-[20px]"
          type="submit"
        />
      </form>
    </div>
  );
}

export default LoginForm;
