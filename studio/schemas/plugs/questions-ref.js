export default {
  name: 'questionsRef',
  type: 'object',
  title: 'Questions',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Questions',
      validation: (Rule) => Rule.error('You have to fill this out.').required(),
    },
    {
      type: 'simpleBlockContent',
      name: 'text',
      validation: (Rule) => Rule.error('You have to fill this out.').required(),
    },
    {
      name: 'publishedAt',
      type: 'datetime',
      title: 'Published at',
      validation: (Rule) => Rule.error('You have to fill this out.').required(),
    },
  ],
}
