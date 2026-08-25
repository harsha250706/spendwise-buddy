import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import BottomNav from "@/components/BottomNav";
import DesktopSidebar from "@/components/DesktopSidebar";
import AIChatBubble from "@/components/AIChatBubble";

import Index from "./pages/Index.tsx";
import InsightsPage from "./pages/InsightsPage.tsx";
import ChatPage from "./pages/ChatPage.tsx";
import GoalsPage from "./pages/GoalsPage.tsx";
import ProfilePage from "./pages/ProfilePage.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>

    <TooltipProvider>

      <Toaster />
      <Sonner />

      <BrowserRouter>

        {/* DESKTOP SIDEBAR */}
        <DesktopSidebar />

        {/* MAIN CONTENT */}
        <main className="min-h-screen lg:ml-[260px]">

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

        </main>

        {/* AI CHAT */}
        <AIChatBubble />

        {/* MOBILE BOTTOM NAVIGATION */}
        <BottomNav />

      </BrowserRouter>

    </TooltipProvider>

  </QueryClientProvider>
);

export default App;
