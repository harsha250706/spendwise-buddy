import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Sparkles } from "lucide-react";
import walletAvatar from "@/assets/wallet-avatar.png";

interface Message {
  id: number;
  text: string;
  sender: "user" | "ai";
}

const quickQueries = [
  "How much on coffee? ☕",
  "This week's spending?",
  "Can I afford dinner out?",
  "Where am I overspending?",
  "Show my subscriptions",
];

const ChatPage = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hey there! 👋 I'm your SpendSmart buddy. Ask me anything about your spending, savings, or goals!",
      sender: "ai",
    },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = (text: string) => {
    if (!text.trim()) return;
    setMessages((prev) => [...prev, { id: Date.now(), text, sender: "user" }]);
    setInput("");

    setTimeout(() => {
      const responses: Record<string, string> = {
        "How much on coffee? ☕":
          "You spent **₹840** on coffee this month ☕ — that's 12 cups! Last month it was ₹720. Want to try the 'Skip a Coffee' challenge to save more?",
        "This week's spending?":
          "You've spent **₹3,200** this week across 14 transactions. That's **15% less** than last week! 🎉 Top categories: Food (₹1,400), Transport (₹800).",
        "Can I afford dinner out?":
          "Based on your Safe-to-Spend of **₹4,500**, yes! 🍽️ Just keep it under ₹800 to stay comfortably in the green zone.",
        "Where am I overspending?":
          "Looking at your patterns... 🔍 **Food delivery** is your biggest leak — ₹4,200 this month vs ₹3,100 last month. Also, your gym membership (₹999) is unused for 45 days!",
        "Show my subscriptions":
          "You have **4 active subscriptions** totaling ₹1,897/mo:\n• Netflix ₹649 (low use)\n• Spotify ₹119 (high use)\n• Cloud ₹130 (low use)\n• Gym ₹999 (unused!)\n\nI can help you save up to **₹1,329/mo**! 💰",
      };
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          text:
            responses[text] ||
            "Let me look into that! 🔍 Based on your recent transactions, you're on track with your budget this month. Anything specific you'd like to know?",
          sender: "ai",
        },
      ]);
    }, 800);
  };

  return (
    <main className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="bg-gradient-hero px-4 pt-12 pb-4">
        <div className="max-w-lg mx-auto flex items-center gap-3">
          <img
            src={walletAvatar}
            alt="SpendSmart AI assistant avatar"
            className="w-12 h-12 rounded-full bg-primary-foreground/20 object-cover"
          />
          <div>
            <h1 className="text-lg font-display font-bold text-primary-foreground">
              SpendSmart AI
            </h1>
            <p className="text-xs text-primary-foreground/70">
              Your smart money buddy 💬
            </p>
          </div>
          <Sparkles className="w-5 h-5 text-primary-foreground/50 ml-auto" />
        </div>
      </header>

      {/* Messages */}
      <div className="flex-1 max-w-lg mx-auto w-full overflow-y-auto px-4 py-4 space-y-3 pb-44">
        {messages.map((msg) => (
          <motion.div
            key={msg.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                msg.sender === "user"
                  ? "bg-primary text-primary-foreground rounded-br-md"
                  : "bg-card text-foreground rounded-bl-md shadow-card border border-border"
              }`}
            >
              {msg.text}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Quick Queries */}
      <div className="fixed bottom-28 left-0 right-0 px-4">
        <div className="max-w-lg mx-auto flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {quickQueries.map((q) => (
            <button
              key={q}
              onClick={() => sendMessage(q)}
              className="flex-shrink-0 text-xs bg-card text-foreground px-3 py-2 rounded-full border border-border shadow-sm hover:border-primary/30 transition-colors"
            >
              {q}
            </button>
          ))}
        </div>
      </div>

      {/* Input */}
      <div className="fixed bottom-16 left-0 right-0 bg-card border-t border-border p-3">
        <div className="max-w-lg mx-auto flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage(input)}
            placeholder="Ask me anything about your money..."
            className="flex-1 bg-muted rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-primary/20"
            aria-label="Type a message to AI assistant"
          />
          <button
            onClick={() => sendMessage(input)}
            className="w-11 h-11 rounded-xl bg-gradient-teal flex items-center justify-center text-primary-foreground flex-shrink-0"
            aria-label="Send message"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </main>
  );
};

export default ChatPage;
