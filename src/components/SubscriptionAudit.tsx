import { motion } from "framer-motion";
import { CreditCard, X, MessageSquare, TrendingDown, ChevronRight } from "lucide-react";

const subscriptions = [
  {
    id: 1,
    name: "Netflix",
    emoji: "🎬",
    amount: 649,
    status: "active",
    usage: "low",
    savingTip: "You watched only 2 shows last month. Consider the basic plan!",
    potentialSaving: 200,
  },
  {
    id: 2,
    name: "Spotify",
    emoji: "🎵",
    amount: 119,
    status: "active",
    usage: "high",
    savingTip: null,
    potentialSaving: 0,
  },
  {
    id: 3,
    name: "Cloud Storage",
    emoji: "☁️",
    amount: 130,
    status: "active",
    usage: "low",
    savingTip: "Using only 12% of your storage. Downgrade to free tier!",
    potentialSaving: 130,
  },
  {
    id: 4,
    name: "Gym Membership",
    emoji: "💪",
    amount: 999,
    status: "active",
    usage: "none",
    savingTip: "You haven't visited in 45 days. Cancel and save ₹999/month!",
    potentialSaving: 999,
  },
];

const totalMonthly = subscriptions.reduce((sum, s) => sum + s.amount, 0);
const totalSavings = subscriptions.reduce((sum, s) => sum + s.potentialSaving, 0);

const SubscriptionAudit = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.15 }}
      className="bg-card rounded-2xl p-5 shadow-card"
      aria-label="Subscription audit and negotiator"
    >
      <div className="flex items-center justify-between mb-1">
        <div className="flex items-center gap-2">
          <CreditCard className="w-5 h-5 text-primary" />
          <h2 className="text-lg font-display font-bold text-foreground">
            Subscription Audit
          </h2>
        </div>
        <button className="text-xs font-medium text-primary flex items-center gap-0.5">
          Manage <ChevronRight className="w-3 h-3" />
        </button>
      </div>
      <p className="text-xs text-muted-foreground mb-4">
        ₹{totalMonthly}/mo total · Save up to{" "}
        <span className="text-accent font-semibold">₹{totalSavings}/mo</span>
      </p>

      <div className="space-y-2">
        {subscriptions.map((sub, index) => (
          <motion.div
            key={sub.id}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.08 }}
            className="p-3 rounded-xl border border-border bg-muted/30"
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">{sub.emoji}</span>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-foreground">{sub.name}</span>
                  {sub.usage === "none" && (
                    <span className="text-[10px] bg-coral/10 text-coral px-1.5 py-0.5 rounded-full font-medium">
                      Unused
                    </span>
                  )}
                  {sub.usage === "low" && (
                    <span className="text-[10px] bg-warning/10 text-warning px-1.5 py-0.5 rounded-full font-medium">
                      Low use
                    </span>
                  )}
                </div>
                <span className="text-xs text-muted-foreground">₹{sub.amount}/mo</span>
              </div>
              <div className="flex gap-1.5">
                {sub.potentialSaving > 0 && (
                  <>
                    <button
                      className="w-8 h-8 rounded-lg bg-coral/10 flex items-center justify-center text-coral hover:bg-coral/20 transition-colors"
                      aria-label={`Cancel ${sub.name}`}
                    >
                      <X className="w-4 h-4" />
                    </button>
                    <button
                      className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 transition-colors"
                      aria-label={`Negotiate ${sub.name}`}
                    >
                      <MessageSquare className="w-4 h-4" />
                    </button>
                  </>
                )}
              </div>
            </div>
            {sub.savingTip && (
              <div className="mt-2 flex items-start gap-2 p-2 rounded-lg bg-accent/5 border border-accent/10">
                <TrendingDown className="w-3.5 h-3.5 text-accent mt-0.5 flex-shrink-0" />
                <p className="text-[11px] text-accent leading-tight">{sub.savingTip}</p>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default SubscriptionAudit;
