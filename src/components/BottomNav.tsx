import {
  Home,
  BarChart3,
  MessageCircle,
  Target,
  User,
} from "lucide-react";

import {
  useLocation,
  useNavigate,
} from "react-router-dom";

import { motion } from "framer-motion";

const navItems = [
  {
    icon: Home,
    label: "Home",
    path: "/",
  },
  {
    icon: BarChart3,
    label: "Insights",
    path: "/insights",
  },
  {
    icon: MessageCircle,
    label: "AI Chat",
    path: "/chat",
    isCenter: true,
  },
  {
    icon: Target,
    label: "Goals",
    path: "/goals",
  },
  {
    icon: User,
    label: "Profile",
    path: "/profile",
  },
];

const BottomNav = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50 bg-card border-t border-border shadow-float lg:hidden"
      role="navigation"
      aria-label="Main navigation"
    >

      <div className="flex items-center justify-around w-full max-w-lg mx-auto px-1 sm:px-2 py-1">

        {navItems.map((item) => {

          const isActive =
            location.pathname === item.path;

          const Icon = item.icon;

          if (item.isCenter) {

            return (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className="relative -mt-6 flex flex-col items-center"
                aria-label={item.label}
                aria-current={
                  isActive
                    ? "page"
                    : undefined
                }
              >

                <motion.div
                  whileTap={{
                    scale: 0.9,
                  }}
                  className="w-14 h-14 rounded-full flex items-center justify-center shadow-float bg-gradient-teal"
                >

                  <Icon className="w-6 h-6 text-primary-foreground" />

                </motion.div>

                <span className="text-[10px] font-medium mt-1 text-muted-foreground">
                  {item.label}
                </span>

              </button>
            );

          }

          return (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className="relative flex flex-col items-center py-2 px-2 sm:px-3 min-w-[52px]"
              aria-label={item.label}
              aria-current={
                isActive
                  ? "page"
                  : undefined
              }
            >

              <motion.div
                whileTap={{
                  scale: 0.9,
                }}
              >

                <Icon
                  className={`w-5 h-5 transition-colors ${
                    isActive
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                />

              </motion.div>

              <span
                className={`text-[10px] mt-1 font-medium transition-colors ${
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                {item.label}
              </span>

              {isActive && (
                <motion.div
                  layoutId="nav-indicator"
                  className="absolute top-0 w-8 h-0.5 rounded-full bg-primary"
                />
              )}

            </button>
          );

        })}

      </div>

    </nav>
  );
};

export default BottomNav;
