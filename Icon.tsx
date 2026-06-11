type P = {className?: string; stroke?: string};

export const Mark = ({className = 'w-[18px] h-[18px]', stroke = 'currentColor'}: P) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 13l8-2 4-7 1 0-2 8 6 2-1 2-6-1-3 5-1 0 0-5-4-1z" />
  </svg>
);

export const Globe = ({className = 'w-[15px] h-[15px]'}: P) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
  </svg>
);

export const Wifi = ({className = 'w-8 h-8'}: P) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12.5a10 10 0 0 1 14 0" /><path d="M8 15.5a6 6 0 0 1 8 0" /><circle cx="12" cy="19" r="1" />
  </svg>
);

export const Bed = ({className = 'w-8 h-8'}: P) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 18v-5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5" /><path d="M3 18h18" /><path d="M6 11V8a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v3" />
  </svg>
);

export const Ticket = ({className = 'w-8 h-8'}: P) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2 2 2 0 0 0 0 4 2 2 0 0 1-2 2H6a2 2 0 0 1-2-2 2 2 0 0 0 0-4z" /><path d="M14 6v12" />
  </svg>
);

export const Plane = Mark;
