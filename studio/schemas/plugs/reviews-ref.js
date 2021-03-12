export default {
  name: 'reviewsRef',
  type: 'object',
  title: 'Reviews',
  fields: [
    {
      type: 'illustration',
      name: 'illustration',
    },
    {
      name: 'title',
      type: 'string',
      title: 'Question',
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
