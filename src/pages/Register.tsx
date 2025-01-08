import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import { auth } from '@/db';
import { registerFormSchema } from '@/lib/validation';
import { zodResolver } from '@hookform/resolvers/zod';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link } from 'react-router';

// ----------------------------------------------------------------

interface IRegisterForm {
  email: string;
  password: string;
  name: string;
}

const Register: React.FC = () => {
  console.log('auth', auth);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      email: '',
      password: '',
      name: '',
    },
  });

  const onSubmit: SubmitHandler<IRegisterForm> = async (data) => {
    try {
      console.log('data', data);
      const { email, name, password } = data;

      console.log('name', name);
      console.log('email', email);
      console.log('password', password);

      const response = await createUserWithEmailAndPassword(auth, email, password);
      console.log('response', response);
    } catch (error) {
      // console.log('Error message', error.message);
      console.log('Error creating user:', error);
    }
  };

  return (
    <div className="flex flex-col gap-3 shadow-xl bg-white w-[min(400px,100%)] p-2 sm:p-5">
      <h2 className="h2-bold text-center">Sign Up</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
        <Input
          {...register('name')}
          type="text"
          placeholder="Name"
          label="Your Name"
          errorMessage={errors.name?.message}
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
