
function ProjectForm({ onAddProject }) {
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    const newProject = {
      id: Date.now(),
      title: formData.get("title"),
      description: formData.get("description"),
      image: formData.get("image"),
    };

    onAddProject(newProject);
    event.target.reset();
  }

  return (
    <section id="add-project" className="container py-4">
      <h2 className="text-center mb-4">Add a New Project</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Project Title</label>
          <input
            name="title"
            type="text"
            className="form-control"
            placeholder="Enter project title"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            name="description"
            className="form-control"
            rows="3"
            placeholder="Enter project description"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Image URL</label>
          <input
            name="image"
            type="url"
            className="form-control"
            placeholder="Enter project image URL"
            required
          />
        </div>

        <button type="submit" className="btn btn-dark">
          Add Project
        </button>
      </form>
    </section>
  );
}

export default ProjectForm;
