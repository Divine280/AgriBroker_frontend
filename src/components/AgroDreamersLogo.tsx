export function AgroDreamersLogo({ className = "h-10 w-auto" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center bg-gradient-to-br from-[#FFD100] to-[#007749] rounded-lg p-2 ${className}`}>
      <div className="text-white font-bold text-xs text-center leading-tight">
        <div>AGRO</div>
        <div>DREAMERS</div>
      </div>
    </div>
  );
}