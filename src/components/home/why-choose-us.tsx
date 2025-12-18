import { cn } from "../../lib/utils";

export function WhyChooseUs() {
  const features = [
    {
      title: "Verified Listings",
      description: "Documents & owner checks before publishing.",
    },
    {
      title: "Rich Metadata",
      description:
        "Frontage, beam bottom height, eaves/top height, car parks & more.",
    },
    {
      title: "Virtual Tours",
      description: "Immersive walkthroughs to evaluate spaces remotely.",
    },
    {
      title: "Property Intelligence",
      description:
        "Rich metadata covering retail frontage, beam height, eaves/top height, car parks and brand mix for better comparison.",
    },
    {
      title: "Secure Documents",
      description:
        "Upload and view NOCs, certificates and compliance documents with role-based access.",
    },
    {
      title: "Collaboration",
      description:
        "Shortlist properties, schedule meetings and track MOMs and deal status within the platform.",
    },
  ];
  return (
    <div className="w-full h-full mt-2 pt-10 px-6 md:px-14 2xl:px-64 ">
      <div className="w-full flex flex-col space-y-5">
        <div className="w-full flex flex-col items-center justify-center h-full space-y-3 md:space-y-4 pr-4 md:pr-1">
          <h1 className="text-xl md:text-4xl lg:text-5xl text-center font-medium w-full leading-7 md:leading-[36px] lg:leading-[45px] font-spaceGrotesk text-black">
            Why choose us
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3  relative z-10 py-10">
          {features.map((feature, index) => (
            <Feature key={feature.title} {...feature} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

const Feature = ({
  title,
  description,
  index,
}: {
  title: string;
  description: string;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r shrink-0 py-10 relative group/feature",
        (index === 0 || index === 3) && "lg:border-l dark:border-neutral-800",
        index < 3 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 3 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 3 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        <img
          src={`/home/why-choose/${index + 1}.svg`}
          alt={title}
          className="size-6 md:size-7 shrink-0"
          loading="lazy"
        />
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-light-gray transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-black font-spaceGrotesk">
          {title}
        </span>
      </div>
      <p className="text-sm text-dull font-manrope max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
