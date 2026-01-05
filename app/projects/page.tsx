import { Metadata } from 'next';
import { getAllProjects, getAllTags } from '@/lib/projects';
import ProjectsClient from './ProjectsClient';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Browse my portfolio of UI/UX design, user research, and development projects',
};

export default function ProjectsPage() {
  const projects = getAllProjects();
  const allTags = getAllTags();

  return <ProjectsClient projects={projects} allTags={allTags} />;
}
