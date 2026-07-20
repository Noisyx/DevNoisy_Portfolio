import { type SchemaTypeDefinition } from 'sanity'
import { skillType } from './skill'
import { projectType } from './project'
import { aboutType } from './about'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [skillType, projectType, aboutType],
}
