import { Link, useLocation } from "wouter";
import { useTheme } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Menu, X, BookOpen, MessageSquare, Bot, Cpu } from "lucide-react";
import { useState } from "react";

export function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const { theme, setTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: "Inicio", href: "/", icon: BookOpen },
    { name: "Cómo funciona", href: "/how-it-works", icon: Cpu },
  ];

  const bots = [
    { name: "Senko AI", href: "/bots/senko-ai", icon: MessageSquare, colorClass: "text-bot-senko" },
    { name: "Hatsune MikuWabot", href: "/bots/miku", icon: Bot, colorClass: "text-bot-miku" },
  ];

  const NavLinks = ({ onClick }: { onClick?: () => void }) => (
    <div className="flex flex-col gap-6">
      <div>
        <h4 className="mb-2 px-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Primeros pasos</h4>
        <div className="flex flex-col gap-1">
          {navigation.map((item) => {
            const isActive = location === item.href;
            return (
              <Link key={item.name} href={item.href} onClick={onClick}>
                <div className={`flex items-center gap-3 rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground ${isActive ? "bg-accent text-accent-foreground" : "text-muted-foreground"}`}>
                  <item.icon className="h-4 w-4" />
                  {item.name}
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      <div>
        <h4 className="mb-2 px-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Bots</h4>
        <div className="flex flex-col gap-1">
          {bots.map((item) => {
            const isActive = location === item.href;
            return (
              <Link key={item.name} href={item.href} onClick={onClick}>
                <div className={`flex items-center gap-3 rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground ${isActive ? "bg-accent text-accent-foreground" : "text-muted-foreground"}`}>
                  <item.icon className={`h-4 w-4 ${item.colorClass}`} />
                  {item.name}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      {/* Mobile Navbar */}
      <header className="sticky top-0 z-50 flex h-16 items-center justify-between border-b bg-background/95 px-4 backdrop-blur supports-[backdrop-filter]:bg-background/60 md:hidden">
        <div className="flex items-center gap-2">
          <MessageSquare className="h-6 w-6 text-wa-green" />
          <span className="font-bold text-lg tracking-tight">WA Bots Docs</span>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 mt-16 bg-background p-4 md:hidden">
          <NavLinks onClick={() => setMobileMenuOpen(false)} />
        </div>
      )}

      {/* Desktop Sidebar */}
      <aside className="hidden w-64 flex-col border-r bg-sidebar md:flex fixed h-screen overflow-y-auto">
        <div className="flex h-16 items-center gap-2 border-b px-6">
          <MessageSquare className="h-6 w-6 text-wa-green" />
          <span className="font-bold text-lg tracking-tight">WA Bots Docs</span>
        </div>
        <div className="flex-1 py-6 px-3">
          <NavLinks />
        </div>
        <div className="p-4 border-t">
          <Button variant="outline" className="w-full justify-start gap-2" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            Cambiar tema
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 md:pl-64">
        {children}
      </main>
    </div>
  );
}
