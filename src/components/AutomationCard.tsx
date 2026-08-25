import { motion } from "framer-motion";
import { Zap, ChevronRight } from "lucide-react";
import { useState } from "react";

const automations = [
  {
    id: 1,
    title: "Food order → Save ₹50",
    description:
      "Auto-transfer ₹50 to emergency fund on every food order",
    emoji: "🍕",
    active: true,
    saved: 650,
  },
  {
    id: 2,
    title: "Weekend splurge guard",
    description:
      "Get a nudge when weekend spending exceeds ₹1,000",
    emoji: "🛡️",
    active: true,
    saved: 2200,
  },
  {
    id: 3,
    title: "Round-up savings",
    description:
      "Round up every purchase to the nearest ₹10",
    emoji: "🪙",
    active: false,
    saved: 0,
  },
];

const AutomationCard = () => {
  const [automationStates, setAutomationStates] = useState(
    automations.reduce(
      (acc, a) => ({
        ...acc,
        [a.id]: a.active,
      }),
      {} as Record<number, boolean>
    )
  );

  const toggleAutomation = (id: number) => {
    setAutomationStates((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: 0.3,
      }}
      className="bg-card rounded-2xl p-4 sm:p-5 shadow-card w-full"
      aria-label="Behavior-based automation rules"
    >

      {/* Header */}
      <div className="flex items-center justify-between gap-3 mb-4">

        <div className="flex items-center gap-2 min-w-0">

          <Zap className="w-5 h-5 text-warning flex-shrink-0" />

          <h2 className="text-base sm:text-lg font-display font-bold text-foreground truncate">
            Smart Automations
          </h2>

        </div>

        <button className="text-xs font-medium text-primary flex items-center gap-0.5 flex-shrink-0">
          See All
          <ChevronRight className="w-3 h-3" />
        </button>

      </div>

      {/* Automation list */}
      <div className="space-y-3">

        {automations.map((auto, index) => (

          <motion.div
            key={auto.id}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: 0.4 + index * 0.1,
            }}
            className="flex items-start gap-3 p-3 rounded-xl bg-muted/50 border border-border"
          >

            <span className="text-2xl flex-shrink-0">
              {auto.emoji}
            </span>

            <div className="flex-1 min-w-0">

              <p className="text-sm font-semibold text-foreground">
                {auto.title}
              </p>

              <p className="text-xs text-muted-foreground leading-relaxed mt-0.5">
                {auto.description}
              </p>

              {automationStates[auto.id] &&
                auto.saved > 0 && (
                  <p className="text-xs text-accent font-medium mt-1">
                    Saved ₹{auto.saved} so far ✨
                  </p>
                )}

            </div>

            {/* Toggle */}
            <button
              onClick={() =>
                toggleAutomation(auto.id)
              }
              className={`relative w-11 h-6 rounded-full transition-colors duration-300 flex-shrink-0 ${
                automationStates[auto.id]
                  ? "bg-accent"
                  : "bg-muted-foreground/30"
              }`}
              role="switch"
              aria-checked={
                automationStates[auto.id]
              }
              aria-label={`Toggle ${auto.title}`}
            >

              <motion.div
                animate={{
                  x: automationStates[auto.id]
                    ? 20
                    : 2,
                }}
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 30,
                }}
                className="absolute top-1 w-4 h-4 rounded-full bg-card shadow-sm"
              />

            </button>

          </motion.div>

        ))}

      </div>

    </motion.section>
  );
};

export default AutomationCard;
