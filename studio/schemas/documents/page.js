export default {
  type: 'document',
  name: 'page',
  title: 'Page',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'content',
      type: 'array',
      title: 'Page sections',
      description: 'Add, edit, and reorder sections',
      of: [
        { type: 'hero' },
        { type: 'reviewsHome' },
        { type: 'questionsHome' },
        { type: 'uiComponentRef' },
        { type: 'infoRows' },
        { type: 'ctaColumns' },
        { type: 'ctaPlug' },
      ],
    },
  ],
}
