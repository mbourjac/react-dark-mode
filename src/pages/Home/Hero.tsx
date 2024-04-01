import hero from '../../assets/images/hero.jpeg';
import { Spotlight } from '../../components/Spotlight';

export const Hero = () => {
  return (
    <section className="font-bold">
      <h2 className="br-border p-2 text-2xl uppercase leading-none sm:text-[min(5.5vw,8rem)]">
        Dolor sit amet consectetur
      </h2>
      <p className="bl-border p-2 text-xl sm:text-2xl">
        Adipisicing elit, quod dolores temporibus vitae similique fuga, odit
        enim delectus velit nemo ducimus doloribus cumque at asperiores
        deleniti, consequatur suscipit animi explicabo labore.
      </p>
      <Spotlight
        containerClassName="br-border h-[70vh]"
        gradientClassName="mix-blend-exclusion"
      >
        <img
          src={hero}
          alt=""
          className="h-full w-full object-cover object-[center_20%]"
        />
      </Spotlight>
    </section>
  );
};
