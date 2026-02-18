import {useEffect, useState } from "react"

const useActiveSection = (sectionIds:string[]) => {
    const [activeSection, setActiveSection] = useState<string>("")

useEffect(() => {
  setActiveSection("home");
}, []);

    useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      let visibleSection = "";

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          visibleSection = entry.target.id;
        }
      });

      if (visibleSection) {
        setActiveSection(visibleSection);
      }
    },
    {
      rootMargin: "-80px 0px -50% 0px",
      threshold: 0.3,
    }
  );

  sectionIds.forEach((id) => {
    const element = document.getElementById(id);
    if (element) observer.observe(element);
  });

  return () => observer.disconnect();
}, [sectionIds]);

    return activeSection
}

export default useActiveSection