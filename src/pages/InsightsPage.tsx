import { motion } from "framer-motion";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  AreaChart,
  Area,
} from "recharts";
import { TrendingUp, TrendingDown, Calendar } from "lucide-react";

const weeklyData = [
  { day: "Mon", amount: 450 },
  { day: "Tue", amount: 320 },
  { day: "Wed", amount: 680 },
  { day: "Thu", amount: 150 },
  { day: "Fri", amount: 890 },
  { day: "Sat", amount: 1200 },
  { day: "Sun", amount: 540 },
];

const monthlyTrend = [
  { month: "Jan", amount: 12500 },
  { month: "Feb", amount: 11800 },
  { month: "Mar", amount: 13200 },
  { month: "Apr", amount: 10900 },
  { month: "May", amount: 9800 },
  { month: "Jun", amount: 11200 },
];

const insights = [
  {
    emoji: "☕",
    text: "Coffee spending is up 23% this month",
    trend: "up",
  },
  {
    emoji: "🍕",
    text: "Food orders dropped by 15% — great job!",
    trend: "down",
  },
  {
    emoji: "🎬",
    text: "Entertainment is within budget",
    trend: "neutral",
  },
];

const InsightsPage = () => {
  return (
    <main className="min-h-screen bg-background pb-24">
      {/* Header */}
      <header className="bg-gradient-hero px-4 pt-12 pb-6">
        <div className="w-full max-w-7xl mx-auto">
          <h1 className="text-2xl font-display font-bold text-primary-foreground">
            Spending Insights
          </h1>

          <p className="text-sm text-primary-foreground/70 mt-1">
            Understand where your money goes 📊
          </p>
        </div>
      </header>

      {/* Main Content */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-2 py-4 lg:py-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-6">

          {/* Weekly Bar Chart */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-card rounded-2xl p-5 shadow-card"
            aria-label="Weekly spending bar chart"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-base font-display font-bold text-foreground">
                This Week
              </h2>

              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <Calendar className="w-3 h-3" />
                <span>Mar 10 – 16</span>
              </div>
            </div>

            <div className="h-40">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={weeklyData}>
                  <XAxis
                    dataKey="day"
                    axisLine={false}
                    tickLine={false}
                    tick={{
                      fontSize: 11,
                      fill: "hsl(215, 16%, 47%)",
                    }}
                  />

                  <YAxis hide />

                  <Tooltip
                    formatter={(value: number) => [
                      `₹${value}`,
                      "Spent",
                    ]}
                    contentStyle={{
                      borderRadius: "12px",
                      border: "none",
                      boxShadow: "var(--shadow-card)",
                      fontSize: "12px",
                    }}
                  />

                  <Bar
                    dataKey="amount"
                    fill="hsl(190, 72%, 21%)"
                    radius={[6, 6, 0, 0]}
                    maxBarSize={32}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.section>

          {/* Monthly Trend */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-card rounded-2xl p-5 shadow-card"
            aria-label="Monthly spending trend chart"
          >
            <h2 className="text-base font-display font-bold text-foreground mb-4">
              6-Month Trend
            </h2>

            <div className="h-32">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={monthlyTrend}>
                  <defs>
                    <linearGradient
                      id="tealGradient"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop
                        offset="0%"
                        stopColor="hsl(190, 72%, 21%)"
                        stopOpacity={0.3}
                      />

                      <stop
                        offset="100%"
                        stopColor="hsl(190, 72%, 21%)"
                        stopOpacity={0}
                      />
                    </linearGradient>
                  </defs>

                  <XAxis
                    dataKey="month"
                    axisLine={false}
                    tickLine={false}
                    tick={{
                      fontSize: 11,
                      fill: "hsl(215, 16%, 47%)",
                    }}
                  />

                  <YAxis hide />

                  <Tooltip
                    formatter={(value: number) => [
                      `₹${value.toLocaleString()}`,
                      "Total",
                    ]}
                    contentStyle={{
                      borderRadius: "12px",
                      border: "none",
                      boxShadow: "var(--shadow-card)",
                      fontSize: "12px",
                    }}
                  />

                  <Area
                    type="monotone"
                    dataKey="amount"
                    stroke="hsl(190, 72%, 21%)"
                    fill="url(#tealGradient)"
                    strokeWidth={2}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </motion.section>

          {/* AI Insights */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-card rounded-2xl p-5 shadow-card lg:col-span-2"
          >
            <h2 className="text-base font-display font-bold text-foreground mb-3">
              AI Insights ✨
            </h2>

            <div className="space-y-2.5">
              {insights.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-3 rounded-xl bg-muted/50"
                >
                  <span className="text-xl">
                    {item.emoji}
                  </span>

                  <span className="text-sm text-foreground flex-1">
                    {item.text}
                  </span>

                  {item.trend === "up" && (
                    <TrendingUp className="w-4 h-4 text-coral" />
                  )}

                  {item.trend === "down" && (
                    <TrendingDown className="w-4 h-4 text-accent" />
                  )}
                </div>
              ))}
            </div>
          </motion.section>

        </div>
      </div>
    </main>
  );
};

export default InsightsPage;