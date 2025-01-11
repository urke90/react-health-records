import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import { auth, db } from '@/db';
import { type IRegisterForm, registerFormSchema } from '@/lib/validation';
import { errorMessageGenerator } from '@/utils/error-handling';
import { zodResolver } from '@hookform/resolvers/zod';
import { FirebaseError } from 'firebase/app';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, serverTimestamp, setDoc } from 'firebase/firestore';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router';
import { toast } from 'react-toastify';

// ----------------------------------------------------------------

const Register: React.FC = () => {
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

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

      const response = await createUserWithEmailAndPassword(auth, email, password);
      await setDoc(doc(db, 'users', response.user.uid), {
        id: response.user.uid,
        userName,
        email,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      });
      toast.success('You have successfully created account', { autoClose: 3000 });
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
      <h2 className="h2-bold text-center">Create Account</h2>
      {error && <p className="p1-medium text-red-500 text-center">{error}</p>}
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
