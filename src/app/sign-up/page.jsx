'use client'
import Link from "next/link"
import { useRegisterMutation } from "@/store/features/auth/authApiSlice"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useRouter } from "next/navigation"
import { useDispatch } from "react-redux" 
import { setCredentials } from "@/store/features/auth/authSlice"
import { toast } from "sonner"

export default function SignUpPage() {
  const router = useRouter()
  const dispatch = useDispatch()
  const [registerData, { isLoading }] = useRegisterMutation()

  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = async (data) => {
    try {
      const result = await registerData(data).unwrap()
      dispatch(setCredentials(result))
      router.push('/dashboard')
    } catch (error) {
      console.error('Registration failed:', error)
      toast.error(error.data.message)
    }
  }

  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">Create an account</h1>
          <p className="text-sm text-muted-foreground">Enter your details to create a new account</p>
        </div>
        <div className="grid gap-6">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-2">
              <div className="grid gap-3">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  {...register("name")}
                  placeholder="John Doe"
                  type="text"
                  autoCapitalize="words"
                  autoComplete="name"
                  autoCorrect="off"
                />
                {errors.name && <p className="text-red-500">{errors.name.message}</p>}
              </div>
              <div className="grid gap-1">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  {...register("email")}
                  placeholder="name@example.com"
                  type="email"
                  autoCapitalize="none"
                  autoComplete="email"
                  autoCorrect="off"
                />
                {errors.email && <p className="text-red-500">{errors.email.message}</p>}
              </div>
              <div className="grid gap-1">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  {...register("password")}
                  type="password"
                />
                {errors.password && <p className="text-red-500">{errors.password.message}</p>}
              </div>
              <Button disabled={isLoading}>{isLoading ? 'Signing Up...' : 'Sign Up'}</Button>
            </div>
          </form>
        </div>
        <p className="px-8 text-center text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link href="/sign-in" className="underline underline-offset-4 hover:text-primary">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  )
}

