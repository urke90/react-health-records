import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import { auth } from '@/db';
import { type IRegisterForm, registerFormSchema } from '@/lib/validation';
import { zodResolver } from '@hookform/resolvers/zod';
import { FirebaseError } from 'firebase/app';
import { AuthErrorCodes, createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link } from 'react-router';

// ----------------------------------------------------------------

const Register: React.FC = () => {
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<IRegisterForm> = async (data) => {
    try {
      // console.log('data', data);
      const { email, firstName, lastName, password } = data;

      const response = await createUserWithEmailAndPassword(auth, email, password);
      console.log('response', response);
    } catch (error) {
      console.log('Error message', error);
      // ? Da li je potrebno proveravati sve errore ili samo ovako neke kao email? Da li onda praviti neku klasu gde cu imati sve error.code i njihove specificne greske ali formatirane u  userfriendly formatu??? (ovo je vise primer, da li moram da proveravam pojedinacno ili mogu da setujem u error ceo error.message i samo da renderujem?)
      if (error instanceof FirebaseError) {
        if (error.code === AuthErrorCodes.EMAIL_EXISTS) {
          setError('Email is already in use!');
        } else {
          setError(error.message);
        }
      }
      // console.log('Error creating user:', error);
    }
  };

  return (
    <div className="flex flex-col gap-3 shadow-xl bg-white w-[min(400px,100%)] p-2 sm:p-5">
      <h2 className="h2-bold text-center">Sign Up</h2>
      {error && <p className="p1-medium text-red-500 text-center">{error}</p>}
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
        <Input
          {...register('firstName')}
          type="text"
          placeholder="First Name"
          label="First Name"
          errorMessage={errors.firstName?.message}
        />
        <Input
          {...register('lastName')}
          type="text"
          placeholder="Last Name"
          label="Last Name"
          errorMessage={errors.lastName?.message}
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
