import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import { useRegisterUser } from '@/lib/hooks/mutations/use-register-user';
import { type IRegisterForm, registerFormSchema } from '@/lib/validation';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router';
import { toast } from 'react-toastify';

// ----------------------------------------------------------------

const Register: React.FC = () => {
  const navigate = useNavigate();
  const { error, mutateAsync: registerUserAsync } = useRegisterUser();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      userName: '',
      email: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<IRegisterForm> = async (data) => {
    try {
      const { email, userName, password } = data;

      await registerUserAsync({ password, userName, email });
      toast.success('You have successfully created account', { autoClose: 3000 });
      navigate('/');
    } catch (error) {
      console.log('Error creating new user', error);
    }
  };

  return (
    <div className="flex flex-col gap-3 shadow-xl bg-white w-[min(400px,100%)] p-2 sm:p-5">
      <h2 className="h2-bold text-center">Create Account</h2>
      {error && <p className="p1-medium text-red-500 text-center">{error.message}</p>}
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
        <Input
          {...register('userName')}
          type="text"
          placeholder="Username"
          label="Username"
          errorMessage={errors.userName?.message}
        />
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
          Sign Up
        </Button>
      </form>
      <div className="flex flex-col gap-2 text-center ">
        <p className="p2-medium text-center w-full">Or if you already have an account instead</p>
        <Link to="/login" className="text-blue-500 underline">
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default Register;
