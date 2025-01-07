import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';

// ----------------------------------------------------------------

const Register: React.FC = () => {
  const handleSubmit = () => {};

  return (
    <div className="border border-blue-500 w-[min(400px,100%)] p-2 sm:p-4">
      <h2 className="h2-bold text-center">Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <Input type="text" placeholder="Name" />
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <Button className="w-full">Sign Up</Button>
      </form>
    </div>
  );
};

export default Register;
