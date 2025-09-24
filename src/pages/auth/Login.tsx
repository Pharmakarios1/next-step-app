import { SignIn } from '@clerk/clerk-react'

const Login = () => {
  return (
    <div className="flex justify-center items-center mx-auto ">
      <SignIn signUpUrl="/signup" forceRedirectUrl="/dashboard" />
    </div>
  )
}

export default Login
