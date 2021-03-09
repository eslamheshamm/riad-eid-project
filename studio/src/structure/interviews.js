import S from '@sanity/desk-tool/structure-builder'
import {
  GoMegaphone as BlogIcon,
  GoChecklist as ApprovedIcon,
  GoEye as ReviewIcon,
  GoCircleSlash as RejectedIcon,
  GoArchive as AllIcon,
} from 'react-icons/go'

import PreviewIFrame from '../../src/components/previewIFrame'

export const icons = {
  BlogIcon,
  ApprovedIcon,
  ReviewIcon,
  RejectedIcon,
  AllIcon,
}

const interviews = S.listItem()
  .title('Interviews')
  .icon(BlogIcon)
  .child(
    S.list()
      .title('/interviews')
      .items([
        S.listItem()
          .title('Published posts')
          .schemaType('interviews')
          .icon(BlogIcon)
          .child(
            S.documentList('post')
              .title('Published posts')
              .menuItems(S.documentTypeList('post').getMenuItems())
              // Only show posts with publish date earlier than now and that is not drafts
              .filter('_type == "interviews" && publishedAt < now() && !(_id in path("drafts.**"))')
              .child((documentId) =>
                S.document()
                  .documentId(documentId)
                  .schemaType('interviews')
                  .views([S.view.form(), PreviewIFrame()])
              )
          ),
        S.documentTypeListItem('interviews').title('All posts').icon(AllIcon),
      ])
  )

export default interviews
