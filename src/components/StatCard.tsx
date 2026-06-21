import { cn } from "@/lib/utils";

interface StatCardProps {
  icon: string;
  label: string;
  value: string | number;
  trend?: string;
  className?: string;
}

export function StatCard({ icon, label, value, trend, className }: StatCardProps) {
  return (
    <div className={cn(
      "p-4 rounded-xl bg-secondary/50 border border-border/50 hover:bg-secondary/70 transition-colors",
      className
    )}>
      <div className="flex items-center gap-3">
        <span className="text-2xl">{icon}</span>
        <div className="flex-1">
          <p className="text-sm text-muted-foreground">{label}</p>
          <p className="font-display text-2xl text-foreground">{value}</p>
        </div>
        {trend && (
          <span className={cn(
            "text-sm font-medium",
            trend.startsWith('+') ? 'text-win' : 'text-loss'
          )}>
            {trend}
          </span>
        )}
      </div>
    </div>
  );
}
