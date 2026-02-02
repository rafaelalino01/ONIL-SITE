import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ServiceCard = ({ icon: Icon, title, description }: ServiceCardProps) => {
  return (
    <div className="gradient-border p-6 md:p-8 h-full group hover:scale-[1.02] transition-transform duration-300 hover-pulse">
      <div className="relative z-10 h-full flex flex-col">
        {/* Icon */}
        <div className="mb-6">
          <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300">
            <Icon className="w-7 h-7 text-primary" />
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold text-foreground mb-3">
          {title}
        </h3>

        {/* Description */}
        <p className="text-muted-foreground leading-relaxed flex-grow">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
