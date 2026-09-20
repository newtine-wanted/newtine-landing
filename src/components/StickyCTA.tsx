import { useEffect, useState } from "react";
import { StartLink } from "./StartLink";
export function StickyCTA() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) return;
    const observer = new IntersectionObserver(([entry]) =>
      setVisible(!entry.isIntersecting && entry.boundingClientRect.bottom <= 0),
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);
  return (
    <div className="sticky-cta" hidden={!visible}>
      <StartLink className="button" destination="serviceUrl">
        바로 체험하기
      </StartLink>
    </div>
  );
}
