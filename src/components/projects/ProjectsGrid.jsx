import { useContext } from "react";
import { FiSearch } from "react-icons/fi";
import ProjectSingle from "./ProjectSingle";
import { ProjectsContext } from "../../context/ProjectsContext";
import ProjectsFilter from "./ProjectsFilter";

const ProjectsGrid = () => {
  const {
    projects,
  } = useContext(ProjectsContext);

  return (
    <section className="py-5 sm:py-10 mt-5 sm:mt-10">
      <div className="text-center">
        <p className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
          Projects
        </p>
      </div>

      <div className="mt-5 mb-5 sm:mt-8 sm:mb-8">
        <hr />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10">
        {projects.map((project) => (
          <ProjectSingle
            title={project.title}
            category={project.category}
            image={project.img}
            key={project.id}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsGrid;
