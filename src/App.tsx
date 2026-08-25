import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DesktopSidebar from "./components/DesktopSidebar";

import Index from "./pages/Index";
import InsightsPage from "./pages/InsightsPage";
import ChatPage from "./pages/ChatPage";
import GoalsPage from "./pages/GoalsPage";
import ProfilePage from "./pages/ProfilePage";

import NotFound from "./pages/NotFound";

import AIChatBubble from "./components/AIChatBubble";
import BottomNav from "./components/BottomNav";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>

    <TooltipProvider>

      <Toaster />
      <Sonner />

      <BrowserRouter>

        <div className="min-h-screen w-full overflow-x-hidden">

          <Routes>

            <Route
              path="/"
              element={<Index />}
            />

            <Route
              path="/insights"
              element={<InsightsPage />}
            />

            <Route
              path="/chat"
              element={<ChatPage />}
            />

            <Route
              path="/goals"
              element={<GoalsPage />}
            />

            <Route
              path="/profile"
              element={<ProfilePage />}
            />

            <Route
              path="*"
              element={<NotFound />}
            />

          </Routes>

          <AIChatBubble />

          <BottomNav />

        </div>

      </BrowserRouter>

    </TooltipProvider>

  </QueryClientProvider>
);

export default App;
