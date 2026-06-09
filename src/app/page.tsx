import { SlideContainer } from "@/components/navigation/SlideContainer";
import { HeroSlide } from "@/components/slides/HeroSlide";
import { AboutSlide } from "@/components/slides/AboutSlide";
import { ProjectsSlide } from "@/components/slides/ProjectsSlide";
import { ExperienceSlide } from "@/components/slides/ExperienceSlide";
import { SkillsSlide } from "@/components/slides/SkillsSlide";
import { ContactSlide } from "@/components/slides/ContactSlide";

export default function Home() {
  return (
    <SlideContainer>
      <HeroSlide />
      <AboutSlide />
      <ProjectsSlide />
      <ExperienceSlide />
      <SkillsSlide />
      <ContactSlide />
    </SlideContainer>
  );
}
