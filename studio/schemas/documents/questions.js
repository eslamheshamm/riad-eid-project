export default {
  name: 'questions',
  type: 'document',
  title: 'Q&A',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Question',
      description: 'Ask',
    },
    {
      name: 'excerpt',
      type: 'excerptPortableText',
      title: 'Answers',
      description: 'Your Ansower here.',
    },
    {
      name: 'publishedAt',
      type: 'datetime',
      title: 'Published at',
      description: 'This can be used to schedule post for publishing',
    },
    {
      name: 'body',
      type: 'bodyPortableText',
      title: 'Body',
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
      slug: 'slug',
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
