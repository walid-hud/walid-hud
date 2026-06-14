import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import type { SectionKey } from "@/store/static";
import { useActiveSectionStore } from "@/store/store";

type Props = {
  id: SectionKey;
  children: React.ReactNode;
};

const ObservedSection = ({ id, children }: Props) => {
  const setActiveSection = useActiveSectionStore(
    (state) => state.setActiveSection,
  );
  const { inView, ref } = useInView({
    threshold: 0.2
  });

  useEffect(() => {
    if (inView) {
      setActiveSection(id);
    }
  }, [inView, id, setActiveSection]);
  return (
    <div id={id} ref={ref} className="observed-section">
      {children}
    </div>
  );
};

export default ObservedSection;
