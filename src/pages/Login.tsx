import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import { auth } from '@/db';
import { ILoginForm, loginFormSchema } from '@/lib/validation';
import { errorMessageGenerator } from '@/utils/error-handling';
import { zodResolver } from '@hookform/resolvers/zod';
import { FirebaseError } from 'firebase/app';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router';

// ----------------------------------------------------------------

const Login: React.FC = () => {
  const [error, setError] = useState<string | null>(null);
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

      await signInWithEmailAndPassword(auth, email, password);
      navigate('/');
    } catch (error) {
      console.log('Error message', error);
      // ? Da li je potrebno proveravati sve errore ili samo ovako neke kao email? Da li onda praviti neku klasu gde cu imati sve error.code i njihove specificne greske ali formatirane u  userfriendly formatu??? (ovo je vise primer, da li moram da proveravam pojedinacno ili mogu da setujem u error ceo error.message i samo da renderujem?)
      if (error instanceof FirebaseError) {
        const errorMessage = errorMessageGenerator.getAuthErrorMessage(error.code);

        setError(errorMessage);
      }
    }
  };

  return (
    <div className="flex flex-col gap-3 shadow-xl bg-white w-[min(400px,100%)] p-2 sm:p-5">
      <h2 className="h2-bold text-center">Login</h2>
      {error && <p className="p1-medium text-red-500 text-center">{error}</p>}
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
