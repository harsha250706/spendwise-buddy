import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Sparkles } from "lucide-react";
import walletAvatar from "@/assets/wallet-avatar.png";

interface Message {
  id: number;
  text: string;
  sender: "user" | "ai";
}

const quickQueries = [
  "How much on coffee?",
  "This week's spending?",
  "Can I afford dinner out?",
];

const AIChatBubble = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hey there! 👋 I'm your SpendSmart buddy. Ask me anything about your spending!",
      sender: "ai",
    },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = (text: string) => {
    if (!text.trim()) return;
    const userMsg: Message = { id: Date.now(), text, sender: "user" };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    // Simulated AI response
    setTimeout(() => {
      const responses: Record<string, string> = {
        "How much on coffee?": "You spent ₹840 on coffee this month ☕ — that's 12 cups! Want to try the 'Skip a Coffee' challenge?",
        "This week's spending?": "You've spent ₹3,200 this week. That's 15% less than last week! 🎉 Keep it up!",
        "Can I afford dinner out?": "Based on your Safe-to-Spend of ₹4,500, yes! Just keep it under ₹800 to stay on track 🍽️",
      };
      const aiMsg: Message = {
        id: Date.now() + 1,
        text: responses[text] || "Great question! Let me check your spending data... You're doing well this month! 📊",
        sender: "ai",
      };
      setMessages((prev) => [...prev, aiMsg]);
    }, 800);
  };

  return (
    <>
      {/* Floating Button - hidden when on /chat route or when open */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-20 right-4 z-40 w-14 h-14 rounded-full bg-gradient-teal shadow-float flex items-center justify-center"
            aria-label="Open AI chat assistant"
          >
            <Sparkles className="w-6 h-6 text-primary-foreground" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.9 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-x-3 bottom-16 top-20 z-50 bg-card rounded-2xl shadow-float border border-border flex flex-col overflow-hidden md:left-auto md:right-4 md:w-96 md:top-auto md:h-[520px]"
          >
            {/* Header */}
            <div className="bg-gradient-teal p-4 flex items-center gap-3">
              <img
                src={walletAvatar}
                alt="SpendSmart AI assistant avatar"
                className="w-10 h-10 rounded-full bg-primary-foreground/20 object-cover"
              />
              <div className="flex-1">
                <h3 className="text-sm font-display font-bold text-primary-foreground">
                  SpendSmart AI
                </h3>
                <p className="text-xs text-primary-foreground/70">Your smart money buddy</p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-lg bg-primary-foreground/10 flex items-center justify-center text-primary-foreground"
                aria-label="Close chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm ${
                      msg.sender === "user"
                        ? "bg-primary text-primary-foreground rounded-br-md"
                        : "bg-muted text-foreground rounded-bl-md"
                    }`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick Queries */}
            <div className="px-4 pb-2 flex gap-2 overflow-x-auto">
              {quickQueries.map((q) => (
                <button
                  key={q}
                  onClick={() => sendMessage(q)}
                  className="flex-shrink-0 text-xs bg-muted text-foreground px-3 py-1.5 rounded-full border border-border hover:border-primary/30 transition-colors"
                >
                  {q}
                </button>
              ))}
            </div>

            {/* Input */}
            <div className="p-3 border-t border-border flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage(input)}
                placeholder="Ask me anything..."
                className="flex-1 bg-muted rounded-xl px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-primary/20"
                aria-label="Type a message to AI assistant"
              />
              <button
                onClick={() => sendMessage(input)}
                className="w-10 h-10 rounded-xl bg-gradient-teal flex items-center justify-center text-primary-foreground"
                aria-label="Send message"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIChatBubble;
