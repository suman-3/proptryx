import { cn } from "../../lib/utils";

interface ListItem {
  text: string;
  subItems?: string[];
}

interface ListTextProps {
  title: string;
  description?: string;
  description1?: string;
  items?: (string | ListItem)[];
  children?: React.ReactNode;
}

export const ListTextPrivacy = ({
  title,
  description,
  description1,
  items = [],
  children,
}: ListTextProps) => {
  return (
    <div className="w-full flex flex-col gap-4 md:gap-6">
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl md:text-3xl font-semibold w-full text-start font-spaceGrotesk">
          {title}
        </h1>
        {description && (
          <p className="text-start w-full text-sm md:text-[16px] text-dull mt-2 tracking-wider font-manrope">
            {description}
          </p>
        )}
        {description1 && (
          <p className="text-start w-full text-sm md:text-[16px] text-dull mt-2 tracking-wider font-manrope">
            {description1}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-4">
        {items.map((item, index) => {
          const isListItem = typeof item === 'object' && 'text' in item;
          const itemText = isListItem ? item.text : item;
          const subItems = isListItem ? item.subItems : undefined;

          return (
            <div key={index} className="flex flex-col gap-2">
              <div className="flex gap-2 items-start">
                <p className="text-dark text-lg -mt-1">&#x2022;</p>
                <p className={cn("text-start w-full text-sm md:text-[16px] leading-6 tracking-wide font-manrope",
                  isListItem ? "text-black font-semibold" : "text-dull"
                )}>
                  {itemText}
                </p>
              </div>

              {subItems && subItems.length > 0 && (
                <div className="flex flex-col gap-2 ml-6">
                  {subItems.map((subItem, subIndex) => (
                    <div key={subIndex} className="flex gap-2 items-start">
                      <p className="text-dark text-base -mt-1">◦</p>
                      <p className="text-start w-full text-sm md:text-[15px] text-dull leading-6 tracking-wide font-manrope">
                        {subItem}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}

        {children && (
          <div className="text-start w-full text-sm md:text-[16px] text-dull leading-6 tracking-wide font-manrope">
            {children}
          </div>
        )}
      </div>
    </div>
  );
};
