import {
  Home,
  BarChart3,
  MessageCircle,
  Target,
  User,
  Wallet,
} from "lucide-react";

import { useLocation, useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <aside
      style={{
        width: "260px",
        position: "fixed",
        left: 0,
        top: 0,
        bottom: 0,
        zIndex: 9999,
      }}
     className="flex flex-col bg-card border-r border-border"
    >

      {/* LOGO */}

      <div className="h-20 flex items-center px-6 border-b border-border">

        <div className="flex items-center gap-3">

          <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">

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


      {/* NAVIGATION */}

      <div className="flex-1 px-4 py-6">

        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground px-3 mb-4">
          Navigation
        </p>

        <div className="space-y-2">

          {navItems.map((item) => {

            const Icon = item.icon;

            const active =
              location.pathname === item.path;

            return (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className={`
                  w-full
                  flex
                  items-center
                  gap-3
                  px-4
                  py-3
                  rounded-xl
                  transition-all
                  text-left
                  ${
                    active
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  }
                `}
              >

                <Icon className="w-5 h-5" />

                <span className="text-sm font-medium">
                  {item.label}
                </span>

              </button>
            );

          })}

        </div>

      </div>


      {/* PROFILE */}

      <div className="p-4 border-t border-border">

        <button
          onClick={() => navigate("/profile")}
          className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-muted transition-colors"
        >

          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
            <User className="w-5 h-5 text-primary" />
          </div>

          <div className="text-left">

            <p className="text-sm font-semibold text-foreground">
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
