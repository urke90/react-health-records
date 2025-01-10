import Input from '@/components/ui/Input';
import Textarea from '@/components/ui/Textarea';
import { auth, db } from '@/db';
import {
  userProfileSchema,
  type IUserProfileSchema,
  type IUserProfileSchemaDTO,
} from '@/lib/validation';
import { zodResolver } from '@hookform/resolvers/zod';
import { doc, getDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';

// ----------------------------------------------------------------

type Props = {};

const ProfileEdit = (props: Props) => {
  const [data, setData] = useState<Partial<IUserProfileSchemaDTO>>();

  const userId = auth.currentUser?.uid;

  const {
    handleSubmit,
    register,
    formState: { errors },
    watch,
  } = useForm<IUserProfileSchema>({
    resolver: zodResolver(userProfileSchema),
    defaultValues: {
      firstName: data?.firstName || '',
      lastName: data?.lastName || '',
      userName: data?.userName || '',
      email: data?.email || '',
      birthDate: data?.birthDate?.toDate() || undefined,
      allergies: data?.allergies || '',
      profileImg: data?.profileImg || '',
      specialNotes: data?.specialNotes || '',
      address: {
        state: data?.address?.state || '',
        city: data?.address?.city || '',
        street: data?.address?.street || '',
        phone: data?.address?.phone || '',
      },
    },
  });

  console.log('watch', watch());

  const onSubmit: SubmitHandler<IUserProfileSchema> = (data) => {
    console.log('data u onSubmit', data);
  };

  useEffect(() => {
    if (!userId) return;
    const fetchUserDoc = async () => {
      try {
        const userDocRef = doc(db, 'users', userId);
        const userDocSnap = await getDoc(userDocRef);

        if (userDocSnap.exists()) {
          console.log('userDoc response', userDocSnap.data());

          const userData = userDocSnap.data() as Partial<IUserProfileSchemaDTO>;

          setData(userData);
        }
      } catch (error) {
        console.log('Error fetching user documents', error);
      }
    };
    fetchUserDoc();
  }, [userId]);

  useEffect(() => {
    console.log('data', data);
    // console.log('data TYPEOF', data?.createdAt);
    // console.log('data TO DATE', data?.createdAt?.toDate());
  }, [data]);

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
        </div>
      </form>
    </section>
  );
};

export default ProfileEdit;
