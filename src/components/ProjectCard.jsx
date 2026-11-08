
export default function ProjectCard({ project }) {
  return (
    <div className="border-bottom py-3">
      <div className="d-flex align-items-center gap-3">

        <img
          src={project.image}
          alt={project.title}
          className="rounded border"
          style={{
            width: "100px",
            height: "80px",
            objectFit: "cover",
          }}
        />

        <div>
          <h5 className="mb-1">{project.title}</h5>
          <p className="text-secondary mb-0">
            {project.description}
          </p>
        </div>

      </div>
    </div>
  );
}
