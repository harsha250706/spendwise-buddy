import { motion } from "framer-motion";
import { User, Settings, ChevronRight, LogOut, Shield, Bell, HelpCircle, Award } from "lucide-react";
import piggyBank from "@/assets/piggy-bank.png";

const menuItems = [
  { icon: Bell, label: "Notifications", badge: "3" },
  { icon: Shield, label: "SMS Permissions" },
  { icon: Award, label: "Badges & Rewards" },
  { icon: Settings, label: "Settings" },
  { icon: HelpCircle, label: "Help & Support" },
];

const ProfilePage = () => {
  return (
    <main className="min-h-screen bg-background pb-24">
      <header className="bg-gradient-hero px-4 pt-12 pb-8">
        <div className="max-w-lg mx-auto flex flex-col items-center">
          <div className="w-20 h-20 rounded-full bg-primary-foreground/20 flex items-center justify-center mb-3 border-2 border-primary-foreground/30">
            <User className="w-10 h-10 text-primary-foreground" />
          </div>
          <h1 className="text-xl font-display font-bold text-primary-foreground">
            Smart Saver
          </h1>
          <p className="text-sm text-primary-foreground/70">Level 5 · 340 points</p>
        </div>
      </header>

      <div className="max-w-lg mx-auto px-4 -mt-4 space-y-4">
        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-card rounded-2xl p-4 shadow-card grid grid-cols-3 gap-3"
        >
          <div className="text-center">
            <p className="text-xl font-display font-bold text-foreground">7</p>
            <p className="text-[10px] text-muted-foreground">Day Streak</p>
          </div>
          <div className="text-center border-x border-border">
            <p className="text-xl font-display font-bold text-foreground">₹3.2K</p>
            <p className="text-[10px] text-muted-foreground">Saved</p>
          </div>
          <div className="text-center">
            <p className="text-xl font-display font-bold text-foreground">#1</p>
            <p className="text-[10px] text-muted-foreground">Rank</p>
          </div>
        </motion.div>

        {/* Menu */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-card rounded-2xl shadow-card overflow-hidden"
        >
          {menuItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <button
                key={item.label}
                className="w-full flex items-center gap-3 px-5 py-3.5 hover:bg-muted/50 transition-colors border-b border-border last:border-0"
              >
                <Icon className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-foreground flex-1 text-left">
                  {item.label}
                </span>
                {item.badge && (
                  <span className="text-[10px] bg-coral text-coral-foreground px-1.5 py-0.5 rounded-full font-bold">
                    {item.badge}
                  </span>
                )}
                <ChevronRight className="w-4 h-4 text-muted-foreground" />
              </button>
            );
          })}
        </motion.div>

        {/* Logout */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="w-full flex items-center justify-center gap-2 py-3 text-coral text-sm font-medium"
        >
          <LogOut className="w-4 h-4" />
          Sign Out
        </motion.button>

        {/* Footer */}
        <div className="flex items-center justify-center gap-2 pb-4">
          <img src={piggyBank} alt="SpendSmart logo" className="w-6 h-6" />
          <span className="text-xs text-muted-foreground">SpendSmart v1.0</span>
        </div>
      </div>
    </main>
  );
};

export default ProfilePage;
