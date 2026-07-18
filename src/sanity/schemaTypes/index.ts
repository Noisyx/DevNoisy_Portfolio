import { type SchemaTypeDefinition } from 'sanity'
import { skillType } from './skill'
import { projectType } from './project'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [skillType, projectType],
}
