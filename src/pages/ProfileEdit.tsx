import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Textarea from '@/components/ui/Textarea';
import { auth, db } from '@/db';
import {
  userProfileSchema,
  type IUserProfileSchema,
  type IUserProfileSchemaDTO,
} from '@/lib/validation';
import { zodResolver } from '@hookform/resolvers/zod';
import { doc, getDoc, serverTimestamp, updateDoc } from 'firebase/firestore';
import { useEffect } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';

// ----------------------------------------------------------------

type Props = {};

const ProfileEdit = (props: Props) => {
  const userId = auth.currentUser?.uid;

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<IUserProfileSchema>({
    resolver: zodResolver(userProfileSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      userName: '',
      email: '',
      birthDate: new Date(),
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
  });

  const onSubmit: SubmitHandler<IUserProfileSchema> = async (data) => {
    console.log('data u onSubmit', data);

    try {
      if (!userId) return;
      const userDocRef = doc(db, 'users', userId);

      await updateDoc(userDocRef, {
        ...data,
        updatedAt: serverTimestamp(),
      });
    } catch (error) {
      console.log('Error updating User profile info', error);
    }
  };

  useEffect(() => {
    if (!userId) return;
    const fetchUserDoc = async () => {
      try {
        const userDocRef = doc(db, 'users', userId);
        const userDocSnap = await getDoc(userDocRef);

        if (userDocSnap.exists()) {
          const userData = userDocSnap.data() as Partial<IUserProfileSchemaDTO>;

          const data = {
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
          };
          reset(data);
        }
      } catch (error) {
        console.log('Error fetching user documents', error);
      }
    };
    fetchUserDoc();
  }, [userId, reset]);

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
          <Button type="submit" className="w-full mt-4">
            Submit
          </Button>
        </div>
      </form>
    </section>
  );
};

export default ProfileEdit;
