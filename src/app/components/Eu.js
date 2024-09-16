import courses from "./leads/Courses";
import projects from "./leads/Projects";
import techs from "./leads/Techs";
import certifications from "./leads/Certifications";
import description from "./leads/Description";

const eu = {
  nome: 'Alan Guerra',
  title: 'Engenheiro de Software',
  description: description,
  expYears: '7',
  projects: projects.length,
  techs: techs.length,
  courses: courses.length,
  certifications: certifications.length
}

export default eu;
