export default {
  type: 'object',
  name: 'questionsHome',
  title: 'Questions',
  fields: [
    {
      type: 'string',
      name: 'title',
    },
    {
      name: 'description',
      type: 'string',
    },
    {
      type: 'array',
      name: 'rows',
      title: 'Questions',
      of: [
        {
          type: 'questionsRef',
        },
      ],
    },
  ],
}
