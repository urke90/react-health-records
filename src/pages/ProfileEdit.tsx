import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import SpinningLoader from '@/components/ui/SpinningLoader';
import Textarea from '@/components/ui/Textarea';
import { useUpdateUser } from '@/lib/hooks/mutations/use-update-user';
import { useFetchUser } from '@/lib/hooks/queries/use-fetch-user';
import { userProfileSchema, type IUserProfileSchema } from '@/lib/validation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';

// ----------------------------------------------------------------

const ProfileEdit = () => {
  const { data: userData, isPending, error: userDataError } = useFetchUser();
  const { mutateAsync: updateUserAsync } = useUpdateUser();
  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<IUserProfileSchema>({
    resolver: zodResolver(userProfileSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      userName: '',
      email: '',
      birthDate: undefined,
      allergies: '',
      profileImg: '',
      specialNotes: '',
      address: {
        state: '',
        city: '',
        street: '',
        phone: '',
      },
    },
    values: {
      firstName: userData?.firstName || '',
      lastName: userData?.lastName || '',
      userName: userData?.userName || '',
      email: userData?.email || '',
      birthDate: userData?.birthDate?.toDate() || new Date(),
      allergies: userData?.allergies || '',
      profileImg: userData?.profileImg || '',
      specialNotes: userData?.specialNotes || '',
      address: {
        state: userData?.address?.state || '',
        city: userData?.address?.city || '',
        street: userData?.address?.street || '',
        phone: userData?.address?.phone || '',
      },
    },
  });

  const onSubmit: SubmitHandler<IUserProfileSchema> = async (data) => {
    try {
      await updateUserAsync(
        { data },
        {
          onError(error) {
            toast.error(error.message);
          },
          onSuccess() {
            toast.success('Profile updated successfully');
            navigate('/');
          },
        }
      );
    } catch (error) {
      console.log('Error updating User profile info', error);
    }
  };

  if (isPending) {
    return <SpinningLoader asLayout />;
  }

  if (userDataError) {
    return <h2 className="h2-bold">{userDataError.message}</h2>;
  }

  return (
    <section className="flex flex-col gap-2 sm:gap-4 flex-1 m-auto max-sm:w-[min(460px,100%)]">
      <h2 className="h2-bold">Your Health Card</h2>
      <form className="md:flex gap-6 lg:gap-10" onSubmit={handleSubmit(onSubmit)}>
        <div className="w-[min(400px,100%)]">
          <p className="p1-bold underline mb-2">Personal Info</p>
          <div className="flex flex-col gap-2">
            <Input
              label="First Name"
              placeholder="First name"
              {...register('firstName')}
              errorMessage={errors.firstName?.message}
            />
            <Input
              label="Last Name"
              placeholder="Last name"
              {...register('lastName')}
              errorMessage={errors.lastName?.message}
            />
            <Input
              label="Userame"
              placeholder="Username"
              {...register('userName')}
              errorMessage={errors.userName?.message}
            />
            <Input
              label="Email"
              placeholder="Email"
              {...register('email')}
              errorMessage={errors.email?.message}
            />
            <Textarea
              placeholder="Allergies"
              label="Allergies"
              {...register('allergies')}
              errorMessage={errors.allergies?.message}
            />
            <Textarea
              placeholder="Special Notes"
              label="Special Notes"
              {...register('specialNotes')}
              errorMessage={errors.specialNotes?.message}
            />
          </div>
        </div>
        <div className="w-[min(400px,100%)]">
          <p className="p1-bold underline mb-2">Address</p>
          <div className="flex flex-col gap-2">
            <Input
              label="State"
              placeholder="State"
              {...register('address.state')}
              errorMessage={errors.address?.state?.message}
            />
            <Input
              label="City"
              placeholder="City"
              {...register('address.city')}
              errorMessage={errors.address?.city?.message}
            />
            <Input
              label="Street"
              placeholder="Street"
              {...register('address.street')}
              errorMessage={errors.address?.street?.message}
            />
            <Input
              label="Phone"
              placeholder="Phone"
              {...register('address.phone')}
              errorMessage={errors.address?.phone?.message}
            />
          </div>
          <Button type="submit" className="w-full mt-4" disabled={isSubmitting}>
            {isSubmitting ? 'Processing...' : 'Submit'}
          </Button>
        </div>
      </form>
    </section>
  );
};

export default ProfileEdit;
