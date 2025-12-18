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
    <div className="w-full h-full mt-2 pt-8 md:pt-10 px-6 md:px-14 2xl:px-64">
      <div className="w-full flex flex-col space-y-4 md:space-y-5">
        <div className="w-full flex flex-col items-center justify-center space-y-3 md:space-y-4">
          <h1 className="text-2xl md:text-4xl lg:text-5xl text-center font-medium w-full leading-8 md:leading-[40px] lg:leading-[50px] font-spaceGrotesk text-black">
            Why choose us
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 relative z-10 py-4 md:py-10">
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
        "flex flex-col shrink-0 py-6 md:py-10 relative group/feature border-b md:border-b-0",
        // Desktop borders (3 columns)
        "lg:border-r lg:last:border-r",
        (index === 0 || index === 3) && "lg:border-l dark:border-neutral-800",
        index < 3 && "lg:border-b dark:border-neutral-800",
        // Tablet borders (2 columns)
        "md:border-r md:last:border-r-0",
        index % 2 === 0 && "md:border-l md:lg:border-l-0",
        (index === 0 || index === 3) && "md:lg:border-l",
        index < 4 && "md:border-b md:lg:border-b-0",
        index < 3 && "md:lg:border-b",
        // Mobile border
        "border-neutral-200 dark:border-neutral-800 last:border-b-0"
      )}
    >
      {/* Gradient overlays */}
      {index < 3 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 3 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}

      {/* Icon */}
      <div className="mb-3 md:mb-4 relative z-10 px-6 md:px-10 text-neutral-600 dark:text-neutral-400">
        <img
          src={`/home/why-choose/${index + 1}.svg`}
          alt={title}
          className="size-6 md:size-7 shrink-0"
          loading="lazy"
        />
      </div>

      {/* Title with animated bar */}
      <div className="text-base md:text-lg font-bold mb-2 relative z-10 px-6 md:px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-light-gray transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 select-none inline-block text-black font-spaceGrotesk">
          {title}
        </span>
      </div>

      {/* Description */}
      <p className="text-sm md:text-base text-dull font-manrope max-w-xs md:max-w-sm relative z-10 px-6 md:px-10 leading-relaxed">
        {description}
      </p>
    </div>
  );
};
