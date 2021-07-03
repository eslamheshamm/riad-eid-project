import S from '@sanity/desk-tool/structure-builder'
import { GoBrowser as PageIcon, GoHome, GoSettings } from 'react-icons/go'
import blog from './src/structure/blog'
import interviews from './src/structure/interviews'
import press from './src/structure/press'
import reviews from './src/structure/reviews'
import questions from './src/structure/questions'
import AskRiadEid from './src/structure/ask-riad-eid'
import landingPages from './src/structure/landingPages'
import PreviewIFrame from './src/components/previewIFrame'

const hiddenDocTypes = (listItem) =>
  ![
    'route',
    'post',
    'page',
    'siteSettings',
    'interviews',
    'press',
    'questions',
    'reviews',
    'ask',
  ].includes(listItem.getId())

export default () =>
  S.list()
    .title('Content')
    .items([
      S.documentListItem()
        .schemaType('siteSettings')
        .title('Site settings')
        .icon(GoSettings)
        .child(
          S.document()
            .schemaType('siteSettings')
            .documentId('siteSettings')
            .views([S.view.form(), PreviewIFrame()])
        ),
      S.documentListItem()
        .title('Frontpage')
        .schemaType('page')
        .icon(GoHome)
        .child(
          S.document()
            .schemaType('page')
            .documentId('frontpage')
            .views([S.view.form(), PreviewIFrame()])
        ),
      blog,
      interviews,
      press,
      questions,
      AskRiadEid,

      reviews,
      landingPages,
      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
      ...S.documentTypeListItems().filter(hiddenDocTypes),
    ])
