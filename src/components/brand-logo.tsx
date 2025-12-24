interface BrandLogoProps {
  className?: string;
  showText?: boolean;
}

export function BrandLogo({ className = "", showText = true }: BrandLogoProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <span className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-white shadow border-[5px] border-solid border-[black]">
        <img
          src="img/logo.svg"
          alt="Cosmo Studio Logo"
          className="object-contain rounded-full"
          style={{ background: 'transparent' }}
        />
      </span>
      {showText && <span className="text-xl font-bold tracking-tight">Cosmo Studio</span>}
    </div>
  );
}
