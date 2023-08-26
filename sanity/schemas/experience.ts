import {defineField, defineType} from 'sanity';

export default defineType({
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    defineField({
      name: 'jobRole',
      title: 'Job Role',
      type: 'string',
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
      name: 'company',
      title: 'Company',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
    }),
    defineField({
      name: 'index',
      title: 'Index',
      type: 'number',
    }),
    defineField({
      name: 'techStack',
      title: 'Tech Stack',
      type: 'array',
      of: [{type: 'reference', to: {type: "skills"}}],
    }),
    defineField({
      name: 'start',
      title: 'Start Date',
      type: 'date',
    }),
    defineField({
      name: 'end',
      title: 'End Date',
      type: 'date',
    }),
  ],
});
