
import ProjectCard from "./ProjectCard";

export default function ProjectList({ projects }) {
  return (
    <section id="projects" className="container py-4">

      <h2 className="mb-4">Projects</h2>

      {projects.length > 0 ? (
        projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))
      ) : (
        <p className="text-secondary">
          No projects found.
        </p>
      )}

    </section>
  );
}
