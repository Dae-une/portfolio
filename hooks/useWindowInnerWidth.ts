import { useMemo, useSyncExternalStore } from "react";

const useWindowInnerWidth = (serverFallback: number) => {
  const getServerSnapShot = () => serverFallback;

  const [getSnapShot, subscribe] = useMemo(() => {
    return [
      () => window.innerWidth,
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
    typeof window !== "undefined" ? getSnapShot : getServerSnapShot,
    getServerSnapShot,
  );
};

export default useWindowInnerWidth;
