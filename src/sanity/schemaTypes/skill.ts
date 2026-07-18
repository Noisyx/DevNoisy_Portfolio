import {defineField, defineType} from 'sanity'

export const skillType = defineType({
  name: 'skill',
  title: 'Skill',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    // AJOUT : Champ pour trier tes compétences manuellement
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
      description: 'Plus le chiffre est bas, plus la compétence apparaît en haut.',
    }),
    defineField({
      name: 'level',
      title: 'Level',
      type: 'string',
      options: {
        list: [
          {title: 'Beginner', value: 'beginner'},
          {title: 'Intermediate', value: 'intermediate'},
          {title: 'Advanced', value: 'advanced'},
          {title: 'Expert', value: 'expert'},
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Frontend', value: 'frontend'},
          {title: 'Backend', value: 'backend'},
          {title: 'Design', value: 'design'},
          {title: 'Tools', value: 'tools'},
        ],
      },
    }),
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
  // OPTIONNEL : Pour voir l'ordre dans la liste du studio
  preview: {
    select: {
      title: 'name',
      subtitle: 'category',
      media: 'icon',
    },
  },
})