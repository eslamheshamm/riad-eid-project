export default {
  name: 'questions',
  type: 'document',
  title: 'Q&A',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'qoustion',
      type: 'string',
      title: 'Question',
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
