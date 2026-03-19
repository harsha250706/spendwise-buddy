import { motion } from "framer-motion";
import { Target, Plus, TrendingUp } from "lucide-react";
import SavingStreaks from "@/components/SavingStreaks";
import LeaderboardCard from "@/components/LeaderboardCard";

const goals = [
  {
    id: 1,
    title: "Emergency Fund",
    emoji: "🏦",
    target: 50000,
    current: 18500,
    deadline: "Dec 2025",
  },
  {
    id: 2,
    title: "New Laptop",
    emoji: "💻",
    target: 75000,
    current: 32000,
    deadline: "Mar 2026",
  },
  {
    id: 3,
    title: "Weekend Getaway",
    emoji: "🏖️",
    target: 15000,
    current: 12800,
    deadline: "Apr 2025",
  },
];

const GoalsPage = () => {
  return (
    <main className="min-h-screen bg-background pb-24">
      <header className="bg-gradient-hero px-4 pt-12 pb-6">
        <div className="max-w-lg mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-display font-bold text-primary-foreground">
              Goals & Streaks
            </h1>
            <p className="text-sm text-primary-foreground/70 mt-1">
              Stay on track, earn rewards 🎯
            </p>
          </div>
          <button className="w-10 h-10 rounded-xl bg-primary-foreground/10 flex items-center justify-center text-primary-foreground">
            <Plus className="w-5 h-5" />
          </button>
        </div>
      </header>

      <div className="max-w-lg mx-auto px-4 -mt-2 space-y-4">
        {/* Savings Goals */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-card rounded-2xl p-5 shadow-card"
        >
          <div className="flex items-center gap-2 mb-4">
            <Target className="w-5 h-5 text-primary" />
            <h2 className="text-base font-display font-bold text-foreground">
              Savings Goals
            </h2>
          </div>
          <div className="space-y-4">
            {goals.map((goal, i) => {
              const progress = (goal.current / goal.target) * 100;
              return (
                <motion.div
                  key={goal.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.08 }}
                  className="p-3 rounded-xl border border-border"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">{goal.emoji}</span>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-foreground">{goal.title}</p>
                      <p className="text-xs text-muted-foreground">by {goal.deadline}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-bold text-foreground">
                        ₹{goal.current.toLocaleString()}
                      </p>
                      <p className="text-[10px] text-muted-foreground">
                        of ₹{goal.target.toLocaleString()}
                      </p>
                    </div>
                  </div>
                  <div className="h-2 rounded-full bg-muted overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 1, delay: 0.3 + i * 0.1 }}
                      className="h-full rounded-full bg-gradient-success"
                    />
                  </div>
                  <p className="text-[10px] text-accent font-medium mt-1.5">
                    {progress.toFixed(0)}% complete
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        <SavingStreaks />
        <LeaderboardCard />
      </div>
    </main>
  );
};

export default GoalsPage;
