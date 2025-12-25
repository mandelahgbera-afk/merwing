"use client"

import { useState, useEffect } from "react"
import { Dashboard } from "@/components/dashboard"

export default function Page() {
  const [blurState, setBlurState] = useState<"light" | "heavy">("light")
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    // Show modal after 2.5 seconds and trigger heavy blur
    const timer = setTimeout(() => {
      setShowModal(true)
      setBlurState("heavy")
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative overflow-hidden bg-black">
      {/* Dashboard starts with light blur */}
      <Dashboard blurState={blurState} />

      {/* Modal Overlay */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 modal-overlay animate-in fade-in duration-500">
          <div className="w-full max-w-lg overflow-hidden rounded-3xl bg-white border border-zinc-200 shadow-2xl animate-in zoom-in-95 duration-500">
            <iframe src="/modal.html" className="w-full h-[600px] border-none" title="Meta Win MWC Access" />
            <div className="p-4 bg-zinc-50 border-t border-zinc-100 flex justify-center">
              <button
                onClick={() => {
                  setShowModal(false)
                  setBlurState("light") // return to light blur on close
                }}
                className="text-xs font-semibold text-zinc-400 hover:text-zinc-600 transition-colors uppercase tracking-widest"
              >
                Close Invitation
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
