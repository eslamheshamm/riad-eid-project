export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '603d6989e2d59d2a877b319e',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-6tgjicjp',
                  apiId: '67581c06-e629-4c0b-8b93-f499f00e3d08'
                },
                {
                  buildHookId: '603d698ae2d59d2ed97b2f98',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-fibgjnm6',
                  apiId: '46e27a25-ef45-483a-aa5d-9f45af39f652'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/eslamheshamm/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-fibgjnm6.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
