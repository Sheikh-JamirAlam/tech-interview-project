export function SearchMenu({ className }: { className?: string }) {
  return (
    <svg className={className} width="25" height="27" viewBox="0 0 25 27" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="10.1404" cy="10.1404" r="9.39035" stroke="currentColor" strokeWidth="1.5"/>
      <line x1="16.0391" y1="17.3644" x2="24.39" y2="25.7153" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  );
}

export function InboxMenu({ className }: { className?: string }) {
  return (
    <svg className={className} width="33" height="23" viewBox="0 0 33 23" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.75" y="0.75" width="30.7105" height="21.1667" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M3.57898 4.77197L15.5088 13.7193L28.6316 4.77197" stroke="currentColor" strokeWidth="1.5"/>
    </svg>

  );
}

export function HamburgerhMenu({ className }: { className?: string }) {
  return (
    <svg className={className} width="32" height="23" viewBox="0 0 32 23" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line y1="0.75" x2="31.0175" y2="0.75" stroke="currentColor" strokeWidth="1.5"/>
      <line y1="11.4868" x2="31.0175" y2="11.4868" stroke="currentColor" strokeWidth="1.5"/>
      <line y1="22.2236" x2="31.0175" y2="22.2236" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  );
}