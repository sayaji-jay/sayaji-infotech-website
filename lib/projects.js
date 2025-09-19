import fs from 'fs';
import path from 'path';
import {
  ShoppingCart,
  Heart,
  Users,
  Smartphone,
  Globe,
  Database,
  Activity,
  Building,
  Wifi,
  Settings,
  FileSearch,
  Zap
} from 'lucide-react';

const projectsDirectory = path.join(process.cwd(), 'data/projects');

const iconMap = {
  ShoppingCart,
  Heart,
  Users,
  Smartphone,
  Globe,
  Database,
  Activity,
  Building,
  Wifi,
  Settings,
  FileSearch,
  Zap
};

export function getProjectSlugs() {
  try {
    const files = fs.readdirSync(projectsDirectory);
    return files
      .filter(file => file.endsWith('.json'))
      .map(file => file.replace(/\.json$/, ''));
  } catch (error) {
    console.error('Error reading project directory:', error);
    return [];
  }
}

// Helper function to convert filename to title
function generateTitleFromSlug(slug) {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export function getProjectBySlug(slug) {
  try {
    const fullPath = path.join(projectsDirectory, `${slug}.json`);

    if (!fs.existsSync(fullPath)) {
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const projectData = JSON.parse(fileContents);

    const iconComponent = iconMap[projectData.icon] || Database;
    const title = projectData.title || generateTitleFromSlug(slug);

    return {
      ...projectData,
      slug,
      title,
      icon: iconComponent,
    };
  } catch (error) {
    console.error(`Error reading project file ${slug}:`, error);
    return null;
  }
}

export function getAllProjects() {
  const slugs = getProjectSlugs();
  const projects = slugs
    .map((slug) => getProjectBySlug(slug))
    .filter(Boolean)
    .sort((a, b) => {
      if (a.date && b.date) {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      }
      return a.id - b.id;
    });

  return projects;
}