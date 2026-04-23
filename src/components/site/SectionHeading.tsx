import { cn } from "@/lib/utils";

interface Props {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  light?: boolean;
}

export const SectionHeading = ({ eyebrow, title, description, align = "center", className, light }: Props) => {
  return (
    <div
      className={cn(
        "max-w-3xl reveal",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {eyebrow && (
        <div className={cn("inline-flex items-center gap-3 text-xs uppercase tracking-[0.3em] mb-4", light ? "text-accent" : "text-accent")}>
          <span className="w-8 h-px bg-accent/60" />
          {eyebrow}
          <span className="w-8 h-px bg-accent/60" />
        </div>
      )}
      <h2 className={cn("font-serif text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-5", light ? "text-primary-foreground" : "text-foreground")}>
        {title}
      </h2>
      {description && (
        <p className={cn("text-base md:text-lg leading-relaxed", light ? "text-primary-foreground/80" : "text-muted-foreground")}>
          {description}
        </p>
      )}
    </div>
  );
};
