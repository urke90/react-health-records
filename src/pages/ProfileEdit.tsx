import Input from '@/components/ui/Input';
import Textarea from '@/components/ui/Textarea';
import { auth, db } from '@/db';
import { type IUserProfileSchema, type IUserProfileSchemaDTO } from '@/lib/validation';
import { doc, getDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { type SubmitHandler, useForm } from 'react-hook-form';

// ----------------------------------------------------------------

type Props = {};

const ProfileEdit = (props: Props) => {
  const [data, setData] = useState<Partial<IUserProfileSchemaDTO>>();

  const userId = auth.currentUser?.uid;

  const { handleSubmit } = useForm<IUserProfileSchema>({
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
