import { useState, useEffect, useRef } from "react";

export function updateLastSeen() {
  const lastWidth: string = window.innerWidth.toString()
  return lastWidth;
}

export default function useLastSeen(prop: any) {
  const [lastSeen, setLastSeen] = useState('');
  const retrieved = useRef(false); //To get around strict mode running the hook twice
  useEffect(() => {
    if (retrieved.current) return;
    retrieved.current = true;
    setLastSeen(prop());
  }, []);

  return lastSeen;
}
