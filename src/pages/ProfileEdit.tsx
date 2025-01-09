import Input from '@/components/ui/Input';
import Textarea from '@/components/ui/Textarea';

// ----------------------------------------------------------------

type Props = {};

const ProfileEdit = (props: Props) => {
  return (
    <section className="flex flex-col gap-2 sm:gap-4 flex-1 m-auto max-sm:w-[min(460px,100%)]">
      <h2 className="h2-bold">Uros Bijelic Health Card</h2>
      <form className="md:flex gap-6 lg:gap-10">
        <div className="w-[min(400px,100%)]">
          <p className="p1-bold underline mb-2">Personal Info</p>
          <div className="flex flex-col gap-2">
            <Input label="First Name" placeholder="First name" />
            <Input label="Last Name" placeholder="Last name" />
            <Input label="Userame" placeholder="Username" />
            <Input label="Email" placeholder="Email" />
            <Textarea placeholder="Allergies" label="Allergies" />
            <Textarea placeholder="Special Notes" label="Special Notes" />
          </div>
        </div>
        <div className="w-[min(400px,100%)]">
          <p className="p1-bold underline mb-2">Address</p>
          <div className="flex flex-col gap-2">
            <Input label="State" placeholder="State" />
            <Input label="City" placeholder="City" />
            <Input label="Street" placeholder="Street" />
            <Input label="Phone" placeholder="Phone" />
          </div>
        </div>
      </form>
    </section>
  );
};

export default ProfileEdit;