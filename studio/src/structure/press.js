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

const press = S.listItem()
  .title('Press')
  .icon(BlogIcon)
  .child(
    S.list()
      .title('/press')
      .items([
        S.listItem()
          .title('Published posts')
          .schemaType('press')
          .icon(BlogIcon)
          .child(
            S.documentList('post')
              .title('Published posts')
              .menuItems(S.documentTypeList('post').getMenuItems())
              // Only show posts with publish date earlier than now and that is not drafts
              .filter('_type == "press" && publishedAt < now() && !(_id in path("drafts.**"))')
              .child((documentId) =>
                S.document()
                  .documentId(documentId)
                  .schemaType('press')
                  .views([S.view.form(), PreviewIFrame()])
              )
          ),
        S.documentTypeListItem('press').title('All posts').icon(AllIcon),
      ])
  )

export default press
