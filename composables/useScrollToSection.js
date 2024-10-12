export const useScrollToSection = () => {
    // Función para desplazarse a una sección específica basada en el ID o ref
    const scrollToSection = (sectionRef) => {
      const section = document.getElementById(sectionRef);
      if (section) {
        section.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      } else {
        console.warn(`La sección con el id ${sectionRef} no se encontró.`);
      }
    };
  
    return { scrollToSection };
  };
  