@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  color-scheme: light;
}

body {
  @apply bg-porcelain text-ink font-body antialiased;
}

::selection {
  background: theme('colors.gold-soft');
  color: theme('colors.ink');
}

.reveal {
  opacity: 0;
  transform: translateY(16px);
  animation: rise 0.9s cubic-bezier(0.2, 0.7, 0.3, 1) forwards;
}
.d1 { animation-delay: 0.05s; }
.d2 { animation-delay: 0.16s; }
.d3 { animation-delay: 0.27s; }
.d4 { animation-delay: 0.38s; }
.d5 { animation-delay: 0.5s; }
@keyframes rise { to { opacity: 1; transform: none; } }

.signal-bar { animation: sig 1.8s ease-in-out infinite; transform-origin: bottom; }
.signal-bar:nth-child(2) { animation-delay: 0.25s; }
.signal-bar:nth-child(3) { animation-delay: 0.5s; }
@keyframes sig { 0%,100% { opacity: 0.3; transform: scaleY(0.65); } 50% { opacity: 1; transform: scaleY(1); } }

@media (prefers-reduced-motion: reduce) {
  *, ::before, ::after { animation: none !important; transition: none !important; }
  .reveal { opacity: 1; transform: none; }
}
