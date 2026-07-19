import { client } from '../sanity/lib/client';
import PortfolioClient from './PortfolioClient';

export const revalidate = 60; // Revalider le cache toutes les 60 secondes

export default async function Home() {
  // Fetch Sanity Data
  const projects = await client.fetch(`*[_type == "project"] | order(date desc)`);
  const skills = await client.fetch(`*[_type == "skill"] | order(order asc)`);
  const stack = await client.fetch(`*[_type == "stack"]`);
  const about = await client.fetch(`*[_type == "about"][0]`);

  return <PortfolioClient projects={projects} skills={skills} stack={stack} about={about} />;
}
