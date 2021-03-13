export default {
  name: 'reviews',
  type: 'document',
  title: 'Reviews',
  fields: [
    {
      name: 'mainImage',
      type: 'mainImage',
      title: 'Flag image',
    },
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'country',
      type: 'string',
      title: 'Country',
    },
    {
      name: 'excerpt',
      type: 'excerptPortableText',
      title: 'Review',
      description: 'Your Review here.',
    },
    {
      name: 'publishedAt',
      type: 'datetime',
      title: 'Published at',
      description: 'This can be used to schedule post for publishing',
    },
  ],
  orderings: [
    {
      name: 'publishingDateAsc',
      title: 'Publishing date new–>old',
      by: [
        {
          field: 'publishedAt',
          direction: 'asc',
        },
        {
          field: 'title',
          direction: 'asc',
        },
      ],
    },
    {
      name: 'publishingDateDesc',
      title: 'Publishing date old->new',
      by: [
        {
          field: 'publishedAt',
          direction: 'desc',
        },
        {
          field: 'title',
          direction: 'asc',
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
      publishedAt: 'publishedAt',
      media: 'mainImage',
    },
    prepare({ title = 'No title', media }) {
      return {
        title,
        media,
      }
    },
  },
}
