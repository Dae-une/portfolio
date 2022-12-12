import { useMemo, useSyncExternalStore } from "react";

function useWindowInnerHeight(serverFallback: number) {
  const getServerSnapshot = () => serverFallback;

  const [getSnapshot, subscribe] = useMemo(() => {
    return [
      () => window.innerHeight,
      (notify: () => void) => {
        window.addEventListener("resize", notify);
        return () => {
          window.removeEventListener("resize", notify);
        };
      },
    ];
  }, []);

  return useSyncExternalStore(
    subscribe,
    typeof window !== "undefined" ? getSnapshot : getServerSnapshot,
    getServerSnapshot,
  );
}

export default useWindowInnerHeight;
