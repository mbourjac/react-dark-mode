import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ExpandingArrow } from '../../../components/ExpandingArrow';
import { contactSchema } from '../Home.schemas';
import type { Contact } from '../Home.types';
import { ContactInput } from './ContactInput';

export const ContactSection = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Contact>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: Contact) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    console.log(data);
    reset();
  };

  return (
    <section>
      <div className="br-border grid grid-cols-1 gap-8 px-2 py-4 text-xl font-bold sm:py-8 sm:text-2xl lg:grid-cols-2">
        <p className="text-pretty">
          Blanditiis id odio assumenda. Facilis autem, non voluptate quis odio
          vero hic exercitationem atque voluptatibus officia distinctio vitae
          sit cum assumenda itaque id optio? Impedit eos ratione recusandae
          doloremque dignissimos! Numquam officia asperiores sit.
        </p>
        <p className="text-pretty">
          Corrupti voluptatem eaque totam adipisci sapiente fugit tempora maxime
          libero aut nesciunt fuga ad quas veritatis quae, officiis ipsam
          tempore iure repellat culpa? Animi soluta velit debitis minima
          deleniti eos? Optio rem enim totam ullam fugit delectus.
        </p>
      </div>
      <h2 className="bl-border p-2 text-2xl font-bold uppercase leading-none sm:text-[min(5.5vw,8rem)]">
        Contact
      </h2>
      <form
        noValidate
        onSubmit={(event) => void handleSubmit(onSubmit)(event)}
        className="flex flex-col"
      >
        <ContactInput
          type="text"
          id="name"
          label="Your name*"
          register={register}
          errorMessage={errors.name?.message?.toString()}
        />
        <ContactInput
          type="email"
          id="email"
          label="Your email*"
          register={register}
          errorMessage={errors.email?.message?.toString()}
        />
        <ContactInput
          type="textarea"
          id="message"
          label="Your message*"
          register={register}
          errorMessage={errors.message?.message?.toString()}
        />
        <button className="br-border group/arrow inline-flex items-center gap-4 p-2 text-xl font-bold uppercase leading-none sm:text-4xl">
          <ExpandingArrow />
          Submit
        </button>
      </form>
    </section>
  );
};
