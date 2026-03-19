import { motion } from "framer-motion";
import { Trophy, Medal, Users, Share2 } from "lucide-react";

const leaderboard = [
  { rank: 1, name: "You", points: 340, avatar: "🧑", isUser: true },
  { rank: 2, name: "Priya", points: 310, avatar: "👩" },
  { rank: 3, name: "Rahul", points: 285, avatar: "👨" },
  { rank: 4, name: "Sneha", points: 240, avatar: "👩‍💼" },
  { rank: 5, name: "Amit", points: 195, avatar: "🧑‍💻" },
];

const groupChallenges = [
  {
    id: 1,
    title: "No-Eat-Out Week",
    emoji: "🏠",
    participants: 4,
    daysLeft: 3,
    progress: 57,
  },
  {
    id: 2,
    title: "₹500 Challenge",
    emoji: "💰",
    participants: 6,
    daysLeft: 5,
    progress: 35,
  },
];

const LeaderboardCard = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.25 }}
      className="bg-card rounded-2xl p-5 shadow-card"
      aria-label="Leaderboard and social goals"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Trophy className="w-5 h-5 text-warning" />
          <h2 className="text-lg font-display font-bold text-foreground">
            Leaderboard
          </h2>
        </div>
        <button className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
          <Share2 className="w-4 h-4" />
        </button>
      </div>

      {/* Rankings */}
      <div className="space-y-2 mb-5">
        {leaderboard.map((user, index) => (
          <motion.div
            key={user.rank}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + index * 0.06 }}
            className={`flex items-center gap-3 p-2.5 rounded-xl transition-colors ${
              user.isUser
                ? "bg-primary/5 border border-primary/20"
                : "hover:bg-muted/50"
            }`}
          >
            <span className="text-sm font-bold text-muted-foreground w-5 text-center">
              {user.rank === 1 ? "🥇" : user.rank === 2 ? "🥈" : user.rank === 3 ? "🥉" : `#${user.rank}`}
            </span>
            <span className="text-xl">{user.avatar}</span>
            <span className={`text-sm font-medium flex-1 ${user.isUser ? "text-primary font-bold" : "text-foreground"}`}>
              {user.name}
            </span>
            <span className="text-xs font-semibold text-accent">{user.points} pts</span>
          </motion.div>
        ))}
      </div>

      {/* Group Challenges */}
      <h3 className="text-sm font-display font-semibold text-foreground mb-3 flex items-center gap-2">
        <Users className="w-4 h-4 text-primary" />
        Group Challenges
      </h3>
      <div className="flex gap-3 overflow-x-auto pb-1 -mx-1 px-1">
        {groupChallenges.map((challenge) => (
          <div
            key={challenge.id}
            className="flex-shrink-0 w-44 p-3 rounded-xl border border-border bg-muted/30"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="text-lg">{challenge.emoji}</span>
              <span className="text-xs font-semibold text-foreground">{challenge.title}</span>
            </div>
            <div className="h-1.5 rounded-full bg-muted overflow-hidden mb-2">
              <div
                className="h-full rounded-full bg-gradient-success transition-all"
                style={{ width: `${challenge.progress}%` }}
              />
            </div>
            <div className="flex items-center justify-between text-[10px] text-muted-foreground">
              <span>{challenge.participants} friends</span>
              <span>{challenge.daysLeft} days left</span>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default LeaderboardCard;
