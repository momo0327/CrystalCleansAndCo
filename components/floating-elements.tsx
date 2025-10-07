"use client"

export function FloatingElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating particles */}
      <div
        className="absolute top-20 left-10 w-2 h-2 bg-[#f485c7]/30 rounded-full animate-bounce"
        style={{ animationDelay: "0s", animationDuration: "3s" }}
      ></div>
      <div
        className="absolute top-40 right-20 w-3 h-3 bg-[#f485c7]/20 rounded-full animate-bounce"
        style={{ animationDelay: "1s", animationDuration: "4s" }}
      ></div>
      <div
        className="absolute top-60 left-1/4 w-1 h-1 bg-[#f485c7]/40 rounded-full animate-bounce"
        style={{ animationDelay: "2s", animationDuration: "5s" }}
      ></div>
      <div
        className="absolute bottom-40 right-10 w-2 h-2 bg-[#f485c7]/25 rounded-full animate-bounce"
        style={{ animationDelay: "0.5s", animationDuration: "3.5s" }}
      ></div>
      <div
        className="absolute bottom-20 left-1/3 w-3 h-3 bg-[#f485c7]/15 rounded-full animate-bounce"
        style={{ animationDelay: "1.5s", animationDuration: "4.5s" }}
      ></div>

      {/* Floating rings */}
      <div
        className="absolute top-32 right-1/4 w-16 h-16 border border-[#f485c7]/10 rounded-full animate-spin"
        style={{ animationDuration: "20s" }}
      ></div>
      <div
        className="absolute bottom-32 left-1/5 w-12 h-12 border border-[#f485c7]/15 rounded-full animate-spin"
        style={{ animationDuration: "15s", animationDirection: "reverse" }}
      ></div>
    </div>
  )
}
