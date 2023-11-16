import logo from '/guara-logo.png'; 

interface LogoProps {
    className?: string
}

export function Logo({className}: LogoProps) {
  return <img src={logo} className={`md:h-16 max-md:h-10 ${className}`} alt="Guará Junior Logo" />;
}

