import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router";
import { useState } from "react";

const signupSchema = z.object({
  name: z.string().nonempty("Name is required"),
  phone: z
    .string()
    .regex(/^98\d{8}$/, "Phone must start with '98' and be exactly 10 digits"),
  email: z.string().email("Invalid email address"),
  address: z.string().nonempty("Address is required"),
  password: z
  .string()
  .min(8, { message: "Password must be at least 8 characters long" })
  .regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter" })
  .regex(/[0-9]/, { message: "Password must contain at least one number" })
  .regex(/[@$!%*?&#]/, { message: "Password must contain at least one special character (@$!%*?&#)" }),

  confirmPassword: z.string().min(8, "Confirm Password is required"),
  age: z
  .number()
  .positive()
  .min(1000000000, { message: "Phone number must be 10 digits long" })
  .max(9999999999, { message: "Phone number must be 10 digits long" }),
  isDeveloper: z.boolean().optional(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

type FormData = z.infer<typeof signupSchema>;

function SignUpForm() {
    const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    localStorage.setItem("userData", JSON.stringify(data));
    navigate("/login");
  };

  return (
    <div className="w-[100%] h-[100vh] flex items-center flex-col gap-[30px] justify-center">
      <h1 className="text-red text-3xl font-bold underline">Signup</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-[10px] w-[400px] border-[1px] border-blue-500 bg-blue-200/50 p-[25px] rounded-[10px]"
      >
        <label>Name</label>
        <input {...register("name")} />
        {errors.name && <span>{errors.name.message}</span>}

        <label>Email</label>
        <input {...register("email")} />
        {errors.email && <span>{errors.email.message}</span>}

        <label>Phone</label>
        <input {...register("phone")} />
        {errors.phone && <span>{errors.phone.message}</span>}

        <label>Address</label>
        <input {...register("address")} />
        {errors.address && <span>{errors.address.message}</span>}

        <label className="relative">Password <button
          type="button"
          className="absolute right-0 top-[-5px] flex items-center"
          onClick={() => setShowPassword(!showPassword)} // Toggle visibility
        >
          {showPassword ? "🙈" : "👁️"} {/* Icons */}
        </button></label>
        <input {...register("password")} type={showPassword ? "text" : "password"} />
        {errors.password && <span>{errors.password.message}</span>}

        <label>Confirm Password</label>
        <input {...register("confirmPassword")} type={showPassword ? "text" : "password"} />
        {errors.confirmPassword && <span>{errors.confirmPassword.message}</span>}

        <input
          className="bg-blue-500 shadow-lg shadow-blue-500/50 text-white h-[40px] rounded-[20px]"
          type="submit"
        />
      </form>
    </div>
  );
}

export default SignUpForm;
