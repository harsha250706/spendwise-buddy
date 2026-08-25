import { motion } from "framer-motion";
import { Star } from "lucide-react";

const streakData = {
  currentStreak: 7,
  longestStreak: 14,
  points: 340,
};

const dailyQuests = [
  {
    id: 1,
    title: "Skip one coffee ☕",
    points: 10,
    completed: true,
    emoji: "☕",
  },
  {
    id: 2,
    title: "No impulse buys today",
    points: 15,
    completed: false,
    emoji: "🛒",
  },
  {
    id: 3,
    title: "Cook at home 🍳",
    points: 20,
    completed: false,
    emoji: "🍳",
  },
];

const SavingStreaks = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: 0.2,
      }}
      className="bg-card rounded-2xl p-4 sm:p-5 shadow-card w-full"
      aria-label="Saving streaks and daily challenges"
    >

      {/* Header */}
      <div className="flex items-center justify-between gap-3 mb-4">

        <h2 className="text-base sm:text-lg font-display font-bold text-foreground">
          Saving Streaks 🔥
        </h2>

        <div className="flex items-center gap-1 bg-warning/10 text-warning px-2 py-1 rounded-full flex-shrink-0">

          <Star className="w-3 h-3" />

          <span className="text-xs font-semibold">
            {streakData.points} pts
          </span>

        </div>

      </div>

      {/* Streak counter */}
      <div className="flex items-center gap-4 mb-5">

        <motion.div
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            repeatDelay: 1.5,
          }}
          className="text-4xl flex-shrink-0"
        >
          🔥
        </motion.div>

        <div className="min-w-0">

          <div className="flex items-baseline gap-1 flex-wrap">

            <span className="text-3xl font-display font-bold text-foreground">
              {streakData.currentStreak}
            </span>

            <span className="text-sm text-muted-foreground">
              day streak!
            </span>

          </div>

          <p className="text-xs text-muted-foreground">
            Best: {streakData.longestStreak} days · Keep it going! 💪
          </p>

        </div>

      </div>

      {/* Quests */}
      <h3 className="text-sm font-display font-semibold text-foreground mb-3">
        Daily Quests
      </h3>

      <div className="space-y-2">

        {dailyQuests.map((quest, index) => (

          <motion.div
            key={quest.id}
            initial={{
              opacity: 0,
              x: -10,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: 0.4 + index * 0.1,
            }}
            className={`flex items-center justify-between gap-3 p-3 rounded-xl border transition-all ${
              quest.completed
                ? "bg-success/5 border-success/20"
                : "bg-muted/50 border-border hover:border-primary/20"
            }`}
          >

            <div className="flex items-center gap-3 min-w-0">

              <span className="text-lg flex-shrink-0">
                {quest.emoji}
              </span>

              <span
                className={`text-sm font-medium ${
                  quest.completed
                    ? "line-through text-muted-foreground"
                    : "text-foreground"
                }`}
              >
                {quest.title}
              </span>

            </div>

            <div className="flex items-center gap-2 flex-shrink-0">

              <span className="text-xs font-semibold text-accent">
                +{quest.points}
              </span>

              {quest.completed && (
                <motion.span
                  initial={{
                    scale: 0,
                  }}
                  animate={{
                    scale: 1,
                  }}
                  className="text-success text-lg"
                >
                  ✅
                </motion.span>
              )}

            </div>

          </motion.div>

        ))}

      </div>

    </motion.section>
  );
};

export default SavingStreaks;
