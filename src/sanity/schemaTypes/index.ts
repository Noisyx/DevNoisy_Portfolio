import { type SchemaTypeDefinition } from 'sanity'
import { skillType } from './skill'
import { projectType } from './project'
import { stackType } from './stack'
import { aboutType } from './about'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [skillType, projectType, stackType, aboutType],
}
