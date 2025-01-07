import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { Link } from 'react-router';

// ----------------------------------------------------------------

const Register: React.FC = () => {
  const auth = getAuth();

  const handleSubmit = async () => {
    try {
      const response = await createUserWithEmailAndPassword(auth, '', '');
    } catch (error) {
      console.log('Error creating user:', error);
    }
  };

  return (
    <div className="flex flex-col gap-3 border border-blue-500 w-[min(400px,100%)] p-2 sm:p-4">
      <h2 className="h2-bold text-center">Sign Up</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <Input type="text" placeholder="Name" label="Your Name" />
        <Input type="email" placeholder="Email" label="Your Email" />
        <Input type="password" placeholder="Password" label="Your Password" />
        <Button className="w-full">Sign Up</Button>
      </form>
      <div className="flex flex-col gap-2 text-center border">
        <p className="p2-medium text-center w-full">Or if you already have an account instead</p>
        <Link to="/login" className="text-blue-500 underline">
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default Register;
