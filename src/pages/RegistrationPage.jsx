import Registration from "../components/auth/Registration"

const RegistrationPage = () => {
  return (
    <section className="container">
      <div className="w-full md:w-1/2 mx-auto bg-[#030317] p-8 rounded-md mt-12">
        <h2 className="text-2xl font-bold mb-6">Register</h2>
        <Registration />
      </div>
    </section>
  )
}

export default RegistrationPage
