import { motion } from "framer-motion";
import { Bell, Search } from "lucide-react";
import SafeToSpendCard from "@/components/SafeToSpendCard";
import SpendingBreakdown from "@/components/SpendingBreakdown";
import SavingStreaks from "@/components/SavingStreaks";
import AutomationCard from "@/components/AutomationCard";
import SubscriptionAudit from "@/components/SubscriptionAudit";
import LeaderboardCard from "@/components/LeaderboardCard";
import piggyBank from "@/assets/piggy-bank.png";

const Dashboard = () => {
  return (
    <main className="min-h-screen bg-background pb-24">
      {/* Header */}
      <header className="sticky top-0 z-30 bg-background/80 backdrop-blur-lg border-b border-border/50">
        <div className="max-w-lg mx-auto flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2.5">
            <img
              src={piggyBank}
              alt="SpendSmart piggy bank logo"
              className="w-9 h-9"
            />
            <div>
              <h1 className="text-lg font-display font-bold text-foreground leading-none">
                SpendSmart
              </h1>
              <p className="text-[10px] text-muted-foreground">
                Track Expenses via SMS
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              className="w-9 h-9 rounded-xl bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Search"
            >
              <Search className="w-4 h-4" />
            </button>
            <button
              className="w-9 h-9 rounded-xl bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors relative"
              aria-label="Notifications"
            >
              <Bell className="w-4 h-4" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-coral" />
            </button>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-lg mx-auto px-4 py-4 space-y-4">
        {/* Greeting */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center justify-between"
        >
          <div>
            <p className="text-sm text-muted-foreground">Good morning ☀️</p>
            <h2 className="text-xl font-display font-bold text-foreground">
              Welcome back!
            </h2>
          </div>
          <div className="text-right">
            <p className="text-[10px] text-muted-foreground">SMS synced</p>
            <p className="text-xs font-medium text-accent">● Up to date</p>
          </div>
        </motion.div>

        <SafeToSpendCard />
        <SpendingBreakdown />
        <AutomationCard />
        <SubscriptionAudit />
        <SavingStreaks />
        <LeaderboardCard />
      </div>
    </main>
  );
};

export default Dashboard;
