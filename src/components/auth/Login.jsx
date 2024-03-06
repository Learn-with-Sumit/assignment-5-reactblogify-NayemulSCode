import axios from "axios"
import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../../hooks/useAuth"
import { passwordRegex } from "../../utils/passwordRegx"
import Field from "../common/Field"

const Login = () => {
  const { setAuth } = useAuth()
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm()
  const onSubmit = async (formData) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_BASE_URL}/auth/login`,
        formData
      )

      if (response.status === 200) {
        const { token, user } = response.data
        if (token) {
          const authToken = token.accessToken
          const refreshToken = token.refreshToken

          console.log(`Login time auth token: ${authToken}`)
          setAuth({ user, authToken, refreshToken })

          navigate("/")
        }
      }
    } catch (error) {
      console.error(error)
      setError("root.random", {
        type: "random",
        message: `User with email ${formData.email} is not found`,
      })
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
      <div className="mb-6">
        <Field label={"Email"} error={errors.email} className="block mb-2">
          <input
            {...register("email", {
              required: "Email is Required",
            })}
            type="email"
            id="email"
            name="email"
            className={`w-full p-3 bg-[#030317] border ${
              errors.email ? "border-red/20 " : "border-white/20 "
            }rounded-md focus:outline-none focus:border-indigo-500`}
          />
        </Field>
      </div>
      <div className="mb-6">
        <Field
          label={"password"}
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
            className={`w-full p-3 bg-[#030317] border ${
              errors.password ? "border-red/20 " : "border-white/20 "
            }rounded-md focus:outline-none focus:border-indigo-500`}
          />
        </Field>
      </div>
      <div className="mb-6">
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white p-3 rounded-md hover:bg-indigo-700 transition-all duration-200"
        >
          Login
        </button>
      </div>
      <p className="text-center">
        Don't have an account?{" "}
        <Link to="/register" className="text-indigo-600 hover:underline">
          Register
        </Link>
      </p>
    </form>
  )
}

export default Login
