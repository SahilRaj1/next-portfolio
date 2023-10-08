import {defineField, defineType} from 'sanity';

export default defineType({
  name: 'skills',
  title: 'Skills',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          {title: 'Language', value: 'language'},
          {title: 'Frontend', value: 'frontend'},
          {title: 'Backend', value: 'backend'},
          {title: 'Database', value: 'database'},
          {title: 'Machine Learning', value: 'ml'},
          {title: 'Others', value: 'others'},
        ]
      }
    }),
    defineField({
      name: 'rating',
      title: 'rating',
      type: 'string',
      options: {
        list: [
          {title: 'Proficient', value: 'proficient'},
          {title: 'Intermediate', value: 'intemediate'},
          {title: 'Amateur', value: 'amateur'},
        ]
      }
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'index',
      title: 'index',
      type: 'number',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
    }),
    defineField({
      name: 'projects',
      title: 'Projects',
      type: 'array',
      of: [{type: 'reference', to:{type: "project"}}],
    }),
  ],
});
