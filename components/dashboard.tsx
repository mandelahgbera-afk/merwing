"use client"

import type React from "react"
import { useState, useEffect } from "react"
import {
  Search,
  LayoutDashboard,
  Wallet,
  Flame,
  Zap,
  Gamepad2,
  Tv,
  Star,
  Gift,
  Waves,
  MessageSquare,
  ChevronRight,
  ChevronLeft,
} from "lucide-react"
import { Button } from "@/components/ui/button"

export function Dashboard({ blurState }: { blurState: "none" | "light" | "heavy" }) {
  const blurClass = blurState === "heavy" ? "dashboard-blur-heavy" : blurState === "light" ? "dashboard-blur-light" : ""
  const [tickerOffset, setTickerOffset] = useState(0)

  // Simulate live ticker movement
  useEffect(() => {
    const interval = setInterval(() => {
      setTickerOffset((prev) => (prev + 1) % 100)
    }, 100)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className={`min-h-screen bg-black text-white ${blurClass} font-sans`}>
      {/* Sidebar - Matches Screenshot */}
      <aside className="fixed left-0 top-0 h-full w-60 border-r border-zinc-900 bg-[#0a0a0a] z-40 hidden lg:flex flex-col">
        <div className="p-6 flex items-center gap-3">
          <div className="h-8 w-8 bg-white rounded flex items-center justify-center">
            <div className="h-4 w-4 bg-black rotate-45" />
          </div>
          <span className="text-xl font-black tracking-tighter italic">METAWIN</span>
        </div>

        <div className="px-3 mb-6 flex gap-2">
          <Button className="flex-1 bg-zinc-900 hover:bg-zinc-800 text-zinc-400 gap-2 h-11 border-none justify-start px-4">
            <LayoutDashboard size={18} />
            <span>Casino</span>
          </Button>
          <Button className="flex-1 bg-zinc-900/50 hover:bg-zinc-800 text-zinc-600 gap-2 h-11 border-none justify-start px-4">
            <Gift size={18} />
            <span>Prizes</span>
          </Button>
        </div>

        <div className="px-4 mb-4">
          <div className="bg-zinc-900/40 rounded-lg p-3 border border-zinc-800">
            <div className="flex justify-between items-center text-[10px] text-zinc-500 font-bold mb-1">
              <span>0 / 10K Rank Points</span>
              <div className="h-2 w-2 bg-amber-600 rotate-45" />
            </div>
            <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
              <div className="h-full w-1/3 bg-zinc-600 rounded-full" />
            </div>
          </div>
        </div>

        <nav className="flex-1 px-2 space-y-0.5 overflow-y-auto custom-scrollbar">
          <NavItem icon={<Flame size={18} />} label="New Releases" />
          <NavItem icon={<Zap size={18} />} label="MetaWin Originals" />
          <NavItem icon={<Waves size={18} />} label="Slots" />
          <NavItem icon={<Gamepad2 size={18} />} label="Live Casino" />
          <NavItem icon={<Tv size={18} />} label="Game Shows" />
          <NavItem icon={<Star size={18} />} label="Exclusives" />
          <NavItem icon={<Gift size={18} />} label="Bonus Buy" />
          <NavItem icon={<Waves size={18} />} label="Fishing" />
          <NavItem icon={<Zap size={18} />} label="Crash" />
        </nav>
      </aside>

      {/* Main Content */}
      <main className="lg:ml-60 min-h-screen">
        {/* Top Nav - Matches Screenshot */}
        <header className="sticky top-0 z-30 bg-black/80 backdrop-blur-md border-b border-zinc-900 px-6 py-3 flex items-center justify-between">
          <div className="flex-1 max-w-xl relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600" size={18} />
            <input
              type="text"
              placeholder="Search any game or provider"
              className="w-full bg-[#161616] border-none rounded-full py-2.5 pl-11 pr-4 text-sm focus:ring-1 focus:ring-zinc-700 transition-all"
            />
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 bg-zinc-900/80 px-3 py-1.5 rounded-lg border border-zinc-800 cursor-pointer hover:bg-zinc-800 transition-colors">
              <span className="text-sm font-bold">$0.00</span>
              <div className="h-4 w-4 bg-blue-500 rounded-full flex items-center justify-center scale-75">
                <div className="h-2 w-2 bg-white" />
              </div>
              <ChevronLeft size={14} className="text-zinc-500 -rotate-90" />
            </div>
            <Button className="bg-[#1475e1] hover:bg-[#1475e1]/90 h-9 px-4 rounded-lg shadow-lg shadow-blue-500/20">
              <Wallet size={18} className="mr-2" />
              <span className="font-bold">Wallet</span>
            </Button>
            <div className="relative h-9 w-9 bg-zinc-900 rounded-lg flex items-center justify-center border border-zinc-800 cursor-pointer">
              <div className="h-5 w-5 bg-zinc-700 rounded" />
              <div className="absolute -top-1 -right-1 h-4 w-4 bg-red-600 rounded-full flex items-center justify-center text-[10px] font-bold">
                1
              </div>
            </div>
            <MessageSquare size={20} className="text-zinc-500 cursor-pointer hover:text-white transition-colors ml-2" />
          </div>
        </header>

        <div className="p-6">
          {/* Hero Section - Matches Screenshot */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 mb-10">
            <div className="relative aspect-[21/9] rounded-2xl overflow-hidden shine-effect group cursor-pointer">
              <img
                src="/placeholder.svg?key=6r6ij"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                alt="Casino"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex flex-col justify-center p-12">
                <h2 className="text-5xl font-black mb-2 italic tracking-tighter">Casino</h2>
                <div className="flex gap-2">
                  <div className="h-1 w-12 bg-[#1475e1] rounded-full" />
                </div>
              </div>
            </div>
            <div className="relative aspect-[21/9] rounded-2xl overflow-hidden shine-effect group cursor-pointer">
              <img
                src="/placeholder.svg?key=l3ycp"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                alt="Prizes"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex flex-col justify-center p-12">
                <h2 className="text-5xl font-black mb-2 italic tracking-tighter">Prizes</h2>
                <div className="flex gap-2">
                  <div className="h-1 w-12 bg-amber-500 rounded-full" />
                </div>
              </div>
            </div>
          </div>

          {/* Trending Games Section */}
          <div className="mb-10">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-black italic tracking-tight">Trending Games</h3>
              <div className="flex gap-2">
                <Button variant="ghost" size="icon" className="h-8 w-8 rounded-lg bg-zinc-900 text-zinc-500">
                  <ChevronLeft size={20} />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8 rounded-lg bg-zinc-900 text-white">
                  <ChevronRight size={20} />
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-3">
              <GameCard title="LEGEND OF TARTARUS" rtp="96.5%" image="/placeholder.svg?key=i1l0e" />
              <GameCard title="BLACKJACK" rtp="99.5%" image="/placeholder.svg?key=o113z" />
              <GameCard title="ALL ABOUT THE FISH" rtp="96.4%" image="/placeholder.svg?key=3meag" />
              <GameCard title="NAVIGATOR" rtp="97.0%" image="/placeholder.svg?key=mati5" />
              <GameCard title="PLINKO" rtp="98.0%" image="/placeholder.svg?key=skbw9" />
              <GameCard title="ROULETTE" rtp="97.3%" image="/placeholder.svg?key=qswzn" />
              <GameCard title="PUMP" rtp="98.0%" image="/placeholder.svg?key=uulgy" />
              <GameCard title="PEARL RIVER" rtp="96.0%" image="/placeholder.svg?key=5m5s8" />
            </div>
          </div>

          {/* Live Winners Ticker */}
          <div className="fixed bottom-6 right-6 z-50">
            <div className="bg-[#1475e1] h-12 w-12 rounded-full flex items-center justify-center shadow-2xl glow-blue cursor-pointer group">
              <MessageSquare size={24} className="group-hover:scale-110 transition-transform" />
            </div>
          </div>

          {/* Live Activity Feed (Simulated) */}
          <div className="mt-12 bg-zinc-900/30 rounded-2xl p-6 border border-zinc-900">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Live Activity</span>
            </div>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="flex items-center justify-between text-sm py-2 border-b border-zinc-800/50 last:border-0"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 bg-zinc-800 rounded-lg flex items-center justify-center text-xs font-bold">
                      U{i}
                    </div>
                    <div>
                      <span className="font-bold">User_842{i}</span>
                      <span className="text-zinc-500 mx-2">won</span>
                      <span className="text-green-400 font-bold">$124.50</span>
                    </div>
                  </div>
                  <span className="text-[10px] text-zinc-600 font-medium">2m ago</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

function NavItem({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <button className="flex items-center gap-3 w-full px-4 py-2.5 rounded-lg transition-all text-zinc-500 hover:text-white hover:bg-zinc-900 group">
      <span className="text-zinc-500 group-hover:text-[#1475e1] transition-colors">{icon}</span>
      <span className="text-[13px] font-bold">{label}</span>
    </button>
  )
}

function GameCard({ title, rtp, image }: { title: string; rtp: string; image: string }) {
  return (
    <div className="group cursor-pointer">
      <div className="relative aspect-[3/4] rounded-xl overflow-hidden mb-2 shadow-xl">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
          <Button size="sm" className="w-full bg-[#1475e1] h-8 text-[10px] font-black italic">
            PLAY NOW
          </Button>
        </div>
      </div>
      <div className="px-1">
        <h4 className="text-[10px] font-black tracking-tighter truncate text-zinc-300 mb-1">{title}</h4>
        <div className="flex items-center gap-2">
          <span className="text-[11px] font-black text-green-500">{rtp}</span>
          <div className="h-3 w-5 relative overflow-hidden">
            <svg viewBox="0 0 20 10" className="w-full h-full">
              <path d="M 2 8 A 8 8 0 0 1 18 8" fill="none" className="gauge-track" strokeWidth="3" />
              <path d="M 2 8 A 8 8 0 0 1 14 3" fill="none" className="gauge-progress" strokeWidth="3" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}
