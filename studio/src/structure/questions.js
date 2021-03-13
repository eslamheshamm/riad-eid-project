import S from '@sanity/desk-tool/structure-builder'
import {
  GoMegaphone as BlogIcon,
  GoChecklist as ApprovedIcon,
  GoEye as ReviewIcon,
  GoCircleSlash as RejectedIcon,
  GoArchive as AllIcon,
} from 'react-icons/go'

import PreviewIFrame from '../components/previewIFrame'

export const icons = {
  BlogIcon,
  ApprovedIcon,
  ReviewIcon,
  RejectedIcon,
  AllIcon,
}

const questions = S.listItem()
  .title('Questions')
  .icon(BlogIcon)
  .child(
    S.list()
      .title('/questions')
      .items([
        S.listItem()
          .title('Published posts')
          .schemaType('questions')
          .icon(BlogIcon)
          .child(
            S.documentList('post')
              .title('Published posts')
              .menuItems(S.documentTypeList('post').getMenuItems())
              // Only show posts with publish date earlier than now and that is not drafts
              .filter('_type == "questions" && publishedAt < now() && !(_id in path("drafts.**"))')
              .child((documentId) =>
                S.document()
                  .documentId(documentId)
                  .schemaType('questions')
                  .views([S.view.form(), PreviewIFrame()])
              )
          ),
        S.documentTypeListItem('questions').title('All posts').icon(AllIcon),
      ])
  )

export default questions
