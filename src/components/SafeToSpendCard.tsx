import { motion } from "framer-motion";
import { Shield, TrendingUp } from "lucide-react";

const SafeToSpendCard = () => {
  const safeAmount = 4500;
  const totalBudget = 12000;
  const percentage = (safeAmount / totalBudget) * 100;

  const getZoneColor = () => {
    if (percentage > 50) return "bg-gradient-success";
    if (percentage > 25) return "bg-warning";
    return "bg-gradient-coral";
  };

  const getZoneLabel = () => {
    if (percentage > 50) return "You're doing great! 🎉";
    if (percentage > 25) return "Watch your spending 👀";
    return "Time to slow down ⚠️";
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-hero rounded-2xl p-5 text-primary-foreground shadow-float"
      aria-label="Safe to spend predictor"
    >
      <div className="flex items-center gap-2 mb-1">
        <Shield className="w-5 h-5" />
        <h2 className="text-sm font-display font-semibold opacity-90">
          Safe to Spend This Week
        </h2>
      </div>
      <div className="flex items-end gap-2 mb-3">
        <span className="text-4xl font-display font-bold">₹{safeAmount.toLocaleString()}</span>
        <span className="text-sm opacity-70 mb-1">of ₹{totalBudget.toLocaleString()}</span>
      </div>

      {/* Progress bar */}
      <div className="relative h-3 rounded-full bg-primary-foreground/20 overflow-hidden mb-2">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className={`absolute inset-y-0 left-0 rounded-full ${getZoneColor()}`}
        />
        {/* Zone markers */}
        <div className="absolute inset-y-0 left-1/4 w-px bg-primary-foreground/20" />
        <div className="absolute inset-y-0 left-1/2 w-px bg-primary-foreground/20" />
        <div className="absolute inset-y-0 left-3/4 w-px bg-primary-foreground/20" />
      </div>

      <div className="flex items-center justify-between">
        <span className="text-xs opacity-80">{getZoneLabel()}</span>
        <div className="flex items-center gap-1 text-xs opacity-80">
          <TrendingUp className="w-3 h-3" />
          <span>12% better than last week</span>
        </div>
      </div>
    </motion.section>
  );
};

export default SafeToSpendCard;
