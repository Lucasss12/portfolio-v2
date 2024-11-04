'use client'
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    icon: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2",
        className
      )}
    >
      {items.map((item, idx) => (
        <div key={item?.title} className="relative group block h-full w-full" onMouseEnter={() => setHoveredIndex(idx)} onMouseLeave={() => setHoveredIndex(null)}>
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute -inset-2 h-[calc(100%+16px)] w-[calc(100%+16px)] bg-neutral-200 block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.15 },}}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <div>
              <CardTitle title={item.title} icon={item.icon}/>
            </div>
            <CardDescription>{item.description}</CardDescription>
          </Card>
        </div>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full overflow-hidden bg-black border border-transparent group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="px-4 py-6">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({className,title, icon}: {className?: string;title: string; icon: string}) => {
  return (
    <h4 className={cn("text-white font-medium tracking-wide flex items-center justify-start gap-1", className)}>
      <Image src={icon} alt={`Logo ${title}`} width={16} height={16} />
      {title}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-8 text-white tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
