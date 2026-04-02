# docx API Inventory

- Canonical methods: 22
- Event handles: 0

## Canonical Methods

- docx.chatAnnouncement.get -> GET ${this.domain}/open-apis/docx/v1/chats/:chat_id/announcement [custom_params_serializer] aliases: docx.chatAnnouncement.get, docx.v1.chatAnnouncement.get
- docx.chatAnnouncementBlock.batchUpdate -> PATCH ${this.domain}/open-apis/docx/v1/chats/:chat_id/announcement/blocks/batch_update [custom_params_serializer] aliases: docx.chatAnnouncementBlock.batchUpdate, docx.v1.chatAnnouncementBlock.batchUpdate
- docx.chatAnnouncementBlock.get -> GET ${this.domain}/open-apis/docx/v1/chats/:chat_id/announcement/blocks/:block_id [custom_params_serializer] aliases: docx.chatAnnouncementBlock.get, docx.v1.chatAnnouncementBlock.get
- docx.chatAnnouncementBlock.list -> GET ${this.domain}/open-apis/docx/v1/chats/:chat_id/announcement/blocks [custom_params_serializer] aliases: docx.chatAnnouncementBlock.list, docx.v1.chatAnnouncementBlock.list
- docx.chatAnnouncementBlock.listWithIterator -> GET ${this.domain}/open-apis/docx/v1/chats/:chat_id/announcement/blocks [custom_params_serializer, iterator_helper] aliases: docx.chatAnnouncementBlock.listWithIterator, docx.v1.chatAnnouncementBlock.listWithIterator
- docx.chatAnnouncementBlockChildren.batchDelete -> DELETE ${this.domain}/open-apis/docx/v1/chats/:chat_id/announcement/blocks/:block_id/children/batch_delete [custom_params_serializer] aliases: docx.chatAnnouncementBlockChildren.batchDelete, docx.v1.chatAnnouncementBlockChildren.batchDelete
- docx.chatAnnouncementBlockChildren.create -> POST ${this.domain}/open-apis/docx/v1/chats/:chat_id/announcement/blocks/:block_id/children [custom_params_serializer] aliases: docx.chatAnnouncementBlockChildren.create, docx.v1.chatAnnouncementBlockChildren.create
- docx.chatAnnouncementBlockChildren.get -> GET ${this.domain}/open-apis/docx/v1/chats/:chat_id/announcement/blocks/:block_id/children [custom_params_serializer] aliases: docx.chatAnnouncementBlockChildren.get, docx.v1.chatAnnouncementBlockChildren.get
- docx.document.convert -> POST ${this.domain}/open-apis/docx/v1/documents/blocks/convert [custom_params_serializer] aliases: docx.document.convert, docx.v1.document.convert
- docx.document.create -> POST ${this.domain}/open-apis/docx/v1/documents [custom_params_serializer] aliases: docx.document.create, docx.v1.document.create
- docx.document.get -> GET ${this.domain}/open-apis/docx/v1/documents/:document_id [custom_params_serializer] aliases: docx.document.get, docx.v1.document.get
- docx.document.rawContent -> GET ${this.domain}/open-apis/docx/v1/documents/:document_id/raw_content [custom_params_serializer] aliases: docx.document.rawContent, docx.v1.document.rawContent
- docx.documentBlock.batchUpdate -> PATCH ${this.domain}/open-apis/docx/v1/documents/:document_id/blocks/batch_update [custom_params_serializer] aliases: docx.documentBlock.batchUpdate, docx.v1.documentBlock.batchUpdate
- docx.documentBlock.get -> GET ${this.domain}/open-apis/docx/v1/documents/:document_id/blocks/:block_id [custom_params_serializer] aliases: docx.documentBlock.get, docx.v1.documentBlock.get
- docx.documentBlock.list -> GET ${this.domain}/open-apis/docx/v1/documents/:document_id/blocks [custom_params_serializer] aliases: docx.documentBlock.list, docx.v1.documentBlock.list
- docx.documentBlock.listWithIterator -> GET ${this.domain}/open-apis/docx/v1/documents/:document_id/blocks [custom_params_serializer, iterator_helper] aliases: docx.documentBlock.listWithIterator, docx.v1.documentBlock.listWithIterator
- docx.documentBlock.patch -> PATCH ${this.domain}/open-apis/docx/v1/documents/:document_id/blocks/:block_id [custom_params_serializer] aliases: docx.documentBlock.patch, docx.v1.documentBlock.patch
- docx.documentBlockChildren.batchDelete -> DELETE ${this.domain}/open-apis/docx/v1/documents/:document_id/blocks/:block_id/children/batch_delete [custom_params_serializer] aliases: docx.documentBlockChildren.batchDelete, docx.v1.documentBlockChildren.batchDelete
- docx.documentBlockChildren.create -> POST ${this.domain}/open-apis/docx/v1/documents/:document_id/blocks/:block_id/children [custom_params_serializer] aliases: docx.documentBlockChildren.create, docx.v1.documentBlockChildren.create
- docx.documentBlockChildren.get -> GET ${this.domain}/open-apis/docx/v1/documents/:document_id/blocks/:block_id/children [custom_params_serializer] aliases: docx.documentBlockChildren.get, docx.v1.documentBlockChildren.get
- docx.documentBlockChildren.getWithIterator -> GET ${this.domain}/open-apis/docx/v1/documents/:document_id/blocks/:block_id/children [custom_params_serializer, iterator_helper] aliases: docx.documentBlockChildren.getWithIterator, docx.v1.documentBlockChildren.getWithIterator
- docx.documentBlockDescendant.create -> POST ${this.domain}/open-apis/docx/v1/documents/:document_id/blocks/:block_id/descendant [custom_params_serializer] aliases: docx.documentBlockDescendant.create, docx.v1.documentBlockDescendant.create

## Event Handles


