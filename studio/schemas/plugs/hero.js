export default {
  type: 'object',
  name: 'hero',
  title: 'Hero',
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Heading',
    },
    {
      title: 'Heading Size',
      name: 'size',
      type: 'string',
      options: {
        layout: 'radio',
        list: ['small', 'big'],
      },
    },
    {
      name: 'tagline',
      type: 'simpleBlockContent',
    },
    {
      name: 'illustration',
      type: 'illustration',
    },
    {
      name: 'cta',
      type: 'cta',
    },
  ],
  preview: {
    select: {
      title: 'heading',
      disabled: 'disabled',
    },
    prepare({ title, disabled }) {
      return {
        title: `Hero: ${disabled ? 'DISABLED' : title}`,
      }
    },
  },
}
