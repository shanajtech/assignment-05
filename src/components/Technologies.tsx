import TechnologyCard from "./TechnologyCard";
import StackSidebar from "./StackSidebar";

interface Technology {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: string;
  rating: number;
  difficulty: string;
  badge: string;
}

interface TechnologiesProps {
  technologies: Technology[];
  selectedTechnologies: Technology[];
  handleAddTechnology: (technology: Technology) => void;
  handleRemoveTechnology: (technology: Technology) => void;
  handleRemoveAll: () => void;
}

const Technologies = ({
  technologies,
  selectedTechnologies,
  handleAddTechnology,
  handleRemoveTechnology,
  handleRemoveAll,
}: TechnologiesProps) => {
  return (
    <section id="technologies" className="bg-white py-14">
      <div className="container-main">
        <h2 className="font-['Inter'] text-[28px] font-extrabold text-[#0F172A] md:text-[34px]">
          Explore the{" "}
          <span className="gradient-text">
            Technologies
          </span>
        </h2>

        <p className="mt-2 text-[13px] font-medium text-[#64748B]">
          Pick one technology per category to build your ideal stack.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-[1fr_280px]">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {technologies.map((technology) => {
              const isAdded = selectedTechnologies.some(
                (item) => item.id === technology.id
              );

              return (
                <TechnologyCard
                  key={technology.id}
                  technology={technology}
                  isAdded={isAdded}
                  handleAddTechnology={handleAddTechnology}
                />
              );
            })}
          </div>

          <StackSidebar
            selectedTechnologies={selectedTechnologies}
            handleRemoveTechnology={handleRemoveTechnology}
            handleRemoveAll={handleRemoveAll}
          />
        </div>
      </div>
    </section>
  );
};

export default Technologies;