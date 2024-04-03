import type { UseFormRegister } from 'react-hook-form';
import { cn } from '../../../lib/tailwind';
import type { Contact } from '../Home.types';

type ContactInputProps = {
  id: keyof Contact;
  type: 'text' | 'email' | 'textarea';
  label: string;
  errorMessage?: string;
  register: UseFormRegister<Contact>;
};

export const ContactInput = ({
  id,
  type,
  label,
  errorMessage,
  register,
}: ContactInputProps) => {
  const inputAttributes = {
    id,
    type,
    className: cn(
      'w-full p-2 text-xl font-bold focus-visible:bg-primary focus-visible:outline-none dark:bg-black dark:text-white dark:focus-visible:bg-secondary',
      type === 'textarea' && 'block resize-none',
    ),
    ...register(id),
  };

  return (
    <>
      <label
        htmlFor={id}
        className="br-border flex justify-between p-2 font-bold sm:text-xl md:text-2xl"
      >
        <span className="uppercase">{label}</span>
        {errorMessage && <span>{errorMessage}</span>}
      </label>
      <div className="bl-border">
        {type === 'textarea' ?
          <textarea rows={5} {...inputAttributes}></textarea>
        : <input key={id} {...inputAttributes} />}
      </div>
    </>
  );
};
