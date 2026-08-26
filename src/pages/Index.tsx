import { motion } from "framer-motion";
import { Bell, Search } from "lucide-react";
import SEO from "@/components/SEO";
import SafeToSpendCard from "@/components/SafeToSpendCard";
import SpendingBreakdown from "@/components/SpendingBreakdown";
import SavingStreaks from "@/components/SavingStreaks";
import AutomationCard from "@/components/AutomationCard";
import SubscriptionAudit from "@/components/SubscriptionAudit";
import LeaderboardCard from "@/components/LeaderboardCard";

import piggyBank from "@/assets/piggy-bank.png";

const Dashboard = () => {
  return (
    <SEO
  title="SpendWise – Personal Finance Dashboard"
  description="Track your expenses, monitor your budget, manage your money, and build better financial habits with SpendWise."
/>
    <main className="min-h-screen w-full bg-background pb-24 overflow-x-hidden">

      {/* HEADER */}
      <header className="sticky top-0 z-30 bg-background/80 backdrop-blur-lg border-b border-border/50">

        <div className="w-full max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3">

          {/* Logo */}
          <div className="flex items-center gap-2.5 min-w-0">

            <img
              src={piggyBank}
              alt="SpendSmart piggy bank logo"
              className="w-9 h-9 flex-shrink-0"
            />

            <div className="min-w-0">
              <h1>
  Your Financial Dashboard
</h1>
              <p>
  Track your spending, manage your budget, and build better money habits.
</p>
            </div>

          </div>

          {/* Header buttons */}
          <div className="flex items-center gap-2 flex-shrink-0">

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

      {/* MAIN CONTENT */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">

        {/* Greeting */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-5"
        >

          <div>
            <p className="text-sm text-muted-foreground">
              Good morning ☀️
            </p>

            <h2 className="text-xl sm:text-2xl lg:text-3xl font-display font-bold text-foreground">
              Welcome back!
            </h2>
          </div>

          <div className="text-left sm:text-right">
            <p className="text-[10px] text-muted-foreground">
              SMS synced
            </p>

            <p className="text-xs font-medium text-accent">
              ● Up to date
            </p>
          </div>

        </motion.div>

        {/* SAFE TO SPEND */}
        <div className="mb-5">
          <SafeToSpendCard />
        </div>

        {/* DESKTOP DASHBOARD GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-6">

          {/* Spending */}
          <div className="min-w-0">
            <SpendingBreakdown />
          </div>

          {/* Automation */}
          <div className="min-w-0">
            <AutomationCard />
          </div>

          {/* Subscription */}
          <div className="min-w-0">
            <SubscriptionAudit />
          </div>

          {/* Saving Streaks */}
          <div className="min-w-0">
            <SavingStreaks />
          </div>

          {/* Leaderboard */}
          <div className="min-w-0 lg:col-span-2">
            <LeaderboardCard />
          </div>

        </div>

      </div>

    </main>
  );
};

export default Dashboard;
