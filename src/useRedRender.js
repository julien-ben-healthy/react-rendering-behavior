import { useEffect, useRef } from "react";

const WAIT = 120;

const redFlash = (ref, cb) => {
  ref.current.classList.add("red");
  setTimeout(() => {
    ref.current.classList.remove("red");
    setTimeout(() => cb?.(ref), WAIT);
  }, WAIT);
};

const useIsMount = () => {
  const isMountRef = useRef(true);
  useEffect(() => {
    isMountRef.current = false;
  }, []);
  return isMountRef.current;
};

export const useRedRender = () => {
  const isMount = useIsMount();
  const ref = useRef();

  useEffect(() => {
    if (!isMount) redFlash(ref, redFlash);
  });

  return ref;
};
