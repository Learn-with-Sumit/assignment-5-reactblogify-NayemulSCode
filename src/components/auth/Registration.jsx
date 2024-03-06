import axios from "axios"
import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom"
import { passwordRegex } from "../../utils/passwordRegx"
import Field from "../common/Field"
const Registration = () => {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm()
  const onSubmit = async (formData) => {
    try {
      let response = await axios.post(
        `${import.meta.env.VITE_SERVER_BASE_URL}/auth/register`,
        formData
      )

      if (response.status === 201) {
        navigate("/login")
      }
    } catch (error) {
      console.error(error)
      setError("root.random", {
        type: "random",
        message: `Something went wrong: ${error.message}`,
      })
    }
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
      <div className="mb-6">
        <Field
          label={"First Name"}
          error={errors.firstName}
          className="block mb-2"
        >
          <input
            {...register("firstName", {
              required: "First Name is Required",
            })}
            type="text"
            id="firstName"
            name="firstName"
            className={`w-full p-3 bg-[#030317] border ${
              errors.firstName ? "border-red/20" : "border-white/20"
            } rounded-md focus:outline-none focus:border-indigo-500`}
          />
        </Field>
      </div>
      <div className="mb-6">
        <Field
          label={"Last Name"}
          error={errors.lastName}
          className="block mb-2"
        >
          <input
            {...register("lastName", {
              required: "Last Name is Required",
            })}
            type="text"
            id="lastName"
            name="lastName"
            className="w-full p-3 bg-[#030317] border border-white/20 rounded-md focus:outline-none focus:border-indigo-500"
          />
        </Field>
      </div>
      <div className="mb-6">
        <Field label={"Email"} error={errors.email} className="block mb-2">
          <input
            {...register("email", {
              required: "Email is Required",
            })}
            type="email"
            id="email"
            name="email"
            className="w-full p-3 bg-[#030317] border border-white/20 rounded-md focus:outline-none focus:border-indigo-500"
          />
        </Field>
      </div>
      <div className="mb-6">
        <Field
          label={"Password"}
          error={errors.password}
          className="block mb-2"
        >
          <input
            {...register("password", {
              required: "Password is Required",
              pattern: {
                value: passwordRegex,
                message:
                  "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.",
              },
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
            })}
            type="password"
            id="password"
            name="password"
            className="w-full p-3 bg-[#030317] border border-white/20 rounded-md focus:outline-none focus:border-indigo-500"
          />
        </Field>
      </div>
      <div className="mb-6">
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white p-3 rounded-md hover:bg-indigo-700 transition-all duration-200"
        >
          Create Account
        </button>
      </div>
      <p className="text-center">
        Already have account?{" "}
        <Link to="/login" className="text-indigo-600 hover:underline">
          Login
        </Link>
      </p>
    </form>
  )
}

export default Registration
