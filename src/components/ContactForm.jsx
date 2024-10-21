
import { useForm } from 'react-hook-form';

const ContactForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert('Nos pondremos en contacto con usted.');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="Your Name"
        {...register('name', { required: 'Name is required' })}
      />
      {errors.name && <p>{errors.name.message}</p>}

      <input
        type="email"
        placeholder="Your Email"
        {...register('email', { required: 'Email is required' })}
      />
      {errors.email && <p>{errors.email.message}</p>}

      <textarea
        placeholder="Your Message"
        {...register('message', { required: 'Message is required' })}
      />
      {errors.message && <p>{errors.message.message}</p>}

      <button type="submit">Send Message</button>
    </form>
  );
};

export default ContactForm;
