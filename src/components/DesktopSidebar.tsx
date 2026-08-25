import {
  Home,
  BarChart3,
  MessageCircle,
  Target,
  User,
  Wallet,
} from "lucide-react";

import {
  useLocation,
  useNavigate,
} from "react-router-dom";

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

const DesktopSidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <aside className="hidden lg:flex fixed left-0 top-0 bottom-0 z-40 w-64 bg-card border-r border-border flex-col">

      {/* Logo */}

      <div className="h-20 flex items-center px-6 border-b border-border">

        <div className="flex items-center gap-3">

          <div className="w-10 h-10 rounded-xl bg-gradient-teal flex items-center justify-center">
            <Wallet className="w-5 h-5 text-primary-foreground" />
          </div>

          <div>
            <h1 className="font-display font-bold text-lg text-foreground">
              SpendSmart
            </h1>

            <p className="text-[10px] text-muted-foreground">
              Smart money management
            </p>
          </div>

        </div>

      </div>

      {/* Navigation */}

      <nav className="flex-1 p-4 space-y-2">

        <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold px-3 mb-3">
          Menu
        </p>

        {navItems.map((item) => {

          const Icon = item.icon;

          const isActive =
            location.pathname === item.path;

          return (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl transition-all ${
                isActive
                  ? "bg-primary/10 text-primary font-semibold"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >

              <Icon className="w-5 h-5 flex-shrink-0" />

              <span className="text-sm">
                {item.label}
              </span>

            </button>
          );

        })}

      </nav>

      {/* Bottom profile section */}

      <div className="p-4 border-t border-border">

        <button
          onClick={() => navigate("/profile")}
          className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-muted transition-colors"
        >

          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-lg">
            👨‍💻
          </div>

          <div className="flex-1 text-left min-w-0">

            <p className="text-sm font-semibold text-foreground truncate">
              Harsha
            </p>

            <p className="text-xs text-muted-foreground">
              View Profile
            </p>

          </div>

        </button>

      </div>

    </aside>
  );
};

export default DesktopSidebar;
