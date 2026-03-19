import { motion } from "framer-motion";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { Utensils, Car, Film, ShoppingBag, Zap, MoreHorizontal } from "lucide-react";

const spendingData = [
  { name: "Food", value: 4200, color: "hsl(190, 72%, 21%)", icon: Utensils, emoji: "🍔" },
  { name: "Transport", value: 2100, color: "hsl(122, 39%, 49%)", icon: Car, emoji: "🚗" },
  { name: "Entertainment", value: 1800, color: "hsl(40, 96%, 56%)", icon: Film, emoji: "🎬" },
  { name: "Shopping", value: 1500, color: "hsl(0, 100%, 70%)", icon: ShoppingBag, emoji: "🛍️" },
  { name: "Bills", value: 3200, color: "hsl(260, 50%, 55%)", icon: Zap, emoji: "⚡" },
  { name: "Others", value: 800, color: "hsl(215, 16%, 60%)", icon: MoreHorizontal, emoji: "📦" },
];

const totalSpent = spendingData.reduce((sum, item) => sum + item.value, 0);

const SpendingBreakdown = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="bg-card rounded-2xl p-5 shadow-card"
      aria-label="Monthly spending breakdown pie chart"
    >
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-display font-bold text-foreground">
          Your Spending Breakdown
        </h2>
        <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-1 rounded-full">
          This Month
        </span>
      </div>

      <div className="flex items-center gap-4">
        {/* Chart */}
        <div className="w-32 h-32 flex-shrink-0">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={spendingData}
                cx="50%"
                cy="50%"
                innerRadius={30}
                outerRadius={55}
                paddingAngle={3}
                dataKey="value"
                strokeWidth={0}
              >
                {spendingData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                formatter={(value: number) => [`₹${value.toLocaleString()}`, ""]}
                contentStyle={{
                  borderRadius: "12px",
                  border: "none",
                  boxShadow: "var(--shadow-card)",
                  fontFamily: "Inter, sans-serif",
                  fontSize: "12px",
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Legend */}
        <div className="flex-1 grid grid-cols-2 gap-2">
          {spendingData.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + index * 0.05 }}
              className="flex items-center gap-2"
            >
              <span className="text-base">{item.emoji}</span>
              <div className="min-w-0">
                <p className="text-xs text-muted-foreground truncate">{item.name}</p>
                <p className="text-xs font-semibold text-foreground">
                  ₹{item.value.toLocaleString()}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-border flex items-center justify-between">
        <span className="text-sm text-muted-foreground">Total Spent</span>
        <span className="text-lg font-display font-bold text-foreground">
          ₹{totalSpent.toLocaleString()}
        </span>
      </div>
    </motion.section>
  );
};

export default SpendingBreakdown;
