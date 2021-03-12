export default {
  type: 'object',
  name: 'reviewsHome',
  title: 'Reviews',
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
      title: 'Reviews',
      of: [
        {
          type: 'reviewsRef',
        },
      ],
    },
  ],
}
