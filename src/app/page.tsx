import { client } from '../sanity/lib/client';
import PortfolioClient from './PortfolioClient';

export const revalidate = 60; // Revalider le cache toutes les 60 secondes

export default async function Home() {
  // Fetch Sanity Data
  const projects = await client.fetch(`*[_type == "project"] | order(date desc)`);
  const skills = await client.fetch(`*[_type == "skill"] | order(order asc)`);

  return <PortfolioClient projects={projects} skills={skills} />;
}
