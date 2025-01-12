import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import { useLoginUser } from '@/lib/hooks/mutations/use-login-user';
import { ILoginForm, loginFormSchema } from '@/lib/validation';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router';

// ----------------------------------------------------------------

const Login: React.FC = () => {
  const { error, mutateAsync: loginUserAsync } = useLoginUser();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<ILoginForm> = async (data) => {
    try {
      const { email, password } = data;

      await loginUserAsync({ email, password });
      navigate('/');
    } catch (error) {
      // ? immam vec try catch u loginUser function-u koju prosledjuem useMutation-u, da li je redundant da onda i u onSubmit-u imam ovaj try catch
      console.log('Error message in onSubmit login user', error);
    }
  };

  return (
    <div className="flex flex-col gap-3 shadow-xl bg-white w-[min(400px,100%)] p-2 sm:p-5">
      <h2 className="h2-bold text-center">Login</h2>
      {error && <p className="p1-medium text-red-500 text-center">{error.message}</p>}
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
        <Input
          {...register('email')}
          type="email"
          placeholder="Email"
          label="Your Email"
          errorMessage={errors.email?.message}
        />
        <Input
          {...register('password')}
          type="password"
          placeholder="Password"
          label="Your Password"
          errorMessage={errors.password?.message}
        />
        <Button type="submit" className="w-full">
          Sign In
        </Button>
      </form>
      <div className="flex flex-col gap-2 text-center ">
        <p className="p2-medium text-center w-full">
          Or if you don&apos;t have account yet create one
        </p>
        <Link to="/register" className="text-blue-500 underline">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Login;
