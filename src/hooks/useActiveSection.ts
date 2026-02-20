import { useEffect, useState } from 'react'

const useActiveSection = (sectionIds: string[]) => {
  const [activeSection, setActiveSection] = useState<string>('')

  useEffect(() => {
    setActiveSection('home')
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        let maxRatio = 0
        let visibleSection = null

        entries.forEach((entry) => {
          if (entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio
            visibleSection = entry.target.id
          }
        })

        if (visibleSection) {
          setActiveSection(visibleSection)
        }
      },
      {
        threshold: [0.25, 0.5, 0.75],
      },
    )

    sectionIds.forEach((id) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [sectionIds])

  return activeSection
}

export default useActiveSection
