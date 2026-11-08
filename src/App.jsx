
import { useState } from "react";

import portfolioData from "./data";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";

export default function App() {
  const [projects, setProjects] = useState(
    portfolioData.developer.projects
  );

  const [searchTerm, setSearchTerm] = useState("");

  function handleAddProject(newProject) {
    setProjects((previousProjects) => [
      ...previousProjects,
      newProject,
    ]);
  }

  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Header />

      <main className="container py-4">
        <ProjectForm onAddProject={handleAddProject} />

        <section className="mt-5">
          <SearchBar
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
          />

          <ProjectList projects={filteredProjects} />
        </section>
      </main>
    </>
  );
}
