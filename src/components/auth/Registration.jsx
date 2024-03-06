import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import Field from "../common/Field"

const Registration = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm()
  const onSubmit = async (formData) => {
    console.log("data", formData)
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
