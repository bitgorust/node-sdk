# drive API Inventory

- Canonical methods: 68
- Event handles: 11

## Canonical Methods

- drive.exportTask.create -> POST ${this.domain}/open-apis/drive/v1/export_tasks [custom_params_serializer] aliases: drive.exportTask.create, drive.v1.exportTask.create
- drive.exportTask.download -> GET ${this.domain}/open-apis/drive/v1/export_tasks/file/:file_token/download [custom_params_serializer, readable_stream_helper, stream_response, write_file_helper] aliases: drive.exportTask.download, drive.v1.exportTask.download
- drive.exportTask.get -> GET ${this.domain}/open-apis/drive/v1/export_tasks/:ticket [custom_params_serializer] aliases: drive.exportTask.get, drive.v1.exportTask.get
- drive.file.copy -> POST ${this.domain}/open-apis/drive/v1/files/:file_token/copy [custom_params_serializer] aliases: drive.file.copy, drive.v1.file.copy
- drive.file.createFolder -> POST ${this.domain}/open-apis/drive/v1/files/create_folder [custom_params_serializer] aliases: drive.file.createFolder, drive.v1.file.createFolder
- drive.file.createShortcut -> POST ${this.domain}/open-apis/drive/v1/files/create_shortcut [custom_params_serializer] aliases: drive.file.createShortcut, drive.v1.file.createShortcut
- drive.file.delete -> DELETE ${this.domain}/open-apis/drive/v1/files/:file_token [custom_params_serializer] aliases: drive.file.delete, drive.v1.file.delete
- drive.file.deleteSubscribe -> DELETE ${this.domain}/open-apis/drive/v1/files/:file_token/delete_subscribe [custom_params_serializer] aliases: drive.file.deleteSubscribe, drive.v1.file.deleteSubscribe
- drive.file.download -> GET ${this.domain}/open-apis/drive/v1/files/:file_token/download [custom_params_serializer, readable_stream_helper, stream_response, write_file_helper] aliases: drive.file.download, drive.v1.file.download
- drive.file.getSubscribe -> GET ${this.domain}/open-apis/drive/v1/files/:file_token/get_subscribe [custom_params_serializer] aliases: drive.file.getSubscribe, drive.v1.file.getSubscribe
- drive.file.list -> GET ${this.domain}/open-apis/drive/v1/files [custom_params_serializer] aliases: drive.file.list, drive.v1.file.list
- drive.file.listWithIterator -> GET ${this.domain}/open-apis/drive/v1/files [custom_params_serializer, iterator_helper] aliases: drive.file.listWithIterator, drive.v1.file.listWithIterator
- drive.file.move -> POST ${this.domain}/open-apis/drive/v1/files/:file_token/move [custom_params_serializer] aliases: drive.file.move, drive.v1.file.move
- drive.file.subscribe -> POST ${this.domain}/open-apis/drive/v1/files/:file_token/subscribe [custom_params_serializer] aliases: drive.file.subscribe, drive.v1.file.subscribe
- drive.file.taskCheck -> GET ${this.domain}/open-apis/drive/v1/files/task_check [custom_params_serializer] aliases: drive.file.taskCheck, drive.v1.file.taskCheck
- drive.file.uploadAll -> POST ${this.domain}/open-apis/drive/v1/files/upload_all [custom_params_serializer] aliases: drive.file.uploadAll, drive.v1.file.uploadAll
- drive.file.uploadFinish -> POST ${this.domain}/open-apis/drive/v1/files/upload_finish [custom_params_serializer] aliases: drive.file.uploadFinish, drive.v1.file.uploadFinish
- drive.file.uploadPart -> POST ${this.domain}/open-apis/drive/v1/files/upload_part [custom_params_serializer] aliases: drive.file.uploadPart, drive.v1.file.uploadPart
- drive.file.uploadPrepare -> POST ${this.domain}/open-apis/drive/v1/files/upload_prepare [custom_params_serializer] aliases: drive.file.uploadPrepare, drive.v1.file.uploadPrepare
- drive.fileComment.batchQuery -> POST ${this.domain}/open-apis/drive/v1/files/:file_token/comments/batch_query [custom_params_serializer] aliases: drive.fileComment.batchQuery, drive.v1.fileComment.batchQuery
- drive.fileComment.create -> POST ${this.domain}/open-apis/drive/v1/files/:file_token/comments [custom_params_serializer] aliases: drive.fileComment.create, drive.v1.fileComment.create
- drive.fileComment.get -> GET ${this.domain}/open-apis/drive/v1/files/:file_token/comments/:comment_id [custom_params_serializer] aliases: drive.fileComment.get, drive.v1.fileComment.get
- drive.fileComment.list -> GET ${this.domain}/open-apis/drive/v1/files/:file_token/comments [custom_params_serializer] aliases: drive.fileComment.list, drive.v1.fileComment.list
- drive.fileComment.listWithIterator -> GET ${this.domain}/open-apis/drive/v1/files/:file_token/comments [custom_params_serializer, iterator_helper] aliases: drive.fileComment.listWithIterator, drive.v1.fileComment.listWithIterator
- drive.fileComment.patch -> PATCH ${this.domain}/open-apis/drive/v1/files/:file_token/comments/:comment_id [custom_params_serializer] aliases: drive.fileComment.patch, drive.v1.fileComment.patch
- drive.fileCommentReply.delete -> DELETE ${this.domain}/open-apis/drive/v1/files/:file_token/comments/:comment_id/replies/:reply_id [custom_params_serializer] aliases: drive.fileCommentReply.delete, drive.v1.fileCommentReply.delete
- drive.fileCommentReply.list -> GET ${this.domain}/open-apis/drive/v1/files/:file_token/comments/:comment_id/replies [custom_params_serializer] aliases: drive.fileCommentReply.list, drive.v1.fileCommentReply.list
- drive.fileCommentReply.listWithIterator -> GET ${this.domain}/open-apis/drive/v1/files/:file_token/comments/:comment_id/replies [custom_params_serializer, iterator_helper] aliases: drive.fileCommentReply.listWithIterator, drive.v1.fileCommentReply.listWithIterator
- drive.fileCommentReply.update -> PUT ${this.domain}/open-apis/drive/v1/files/:file_token/comments/:comment_id/replies/:reply_id [custom_params_serializer] aliases: drive.fileCommentReply.update, drive.v1.fileCommentReply.update
- drive.fileLike.list -> GET ${this.domain}/open-apis/drive/v2/files/:file_token/likes [custom_params_serializer]
- drive.fileLike.listWithIterator -> GET ${this.domain}/open-apis/drive/v2/files/:file_token/likes [custom_params_serializer, iterator_helper]
- drive.fileStatistics.get -> GET ${this.domain}/open-apis/drive/v1/files/:file_token/statistics [custom_params_serializer] aliases: drive.fileStatistics.get, drive.v1.fileStatistics.get
- drive.fileSubscription.create -> POST ${this.domain}/open-apis/drive/v1/files/:file_token/subscriptions [custom_params_serializer] aliases: drive.fileSubscription.create, drive.v1.fileSubscription.create
- drive.fileSubscription.get -> GET ${this.domain}/open-apis/drive/v1/files/:file_token/subscriptions/:subscription_id [custom_params_serializer] aliases: drive.fileSubscription.get, drive.v1.fileSubscription.get
- drive.fileSubscription.patch -> PATCH ${this.domain}/open-apis/drive/v1/files/:file_token/subscriptions/:subscription_id [custom_params_serializer] aliases: drive.fileSubscription.patch, drive.v1.fileSubscription.patch
- drive.fileVersion.create -> POST ${this.domain}/open-apis/drive/v1/files/:file_token/versions [custom_params_serializer] aliases: drive.fileVersion.create, drive.v1.fileVersion.create
- drive.fileVersion.delete -> DELETE ${this.domain}/open-apis/drive/v1/files/:file_token/versions/:version_id [custom_params_serializer] aliases: drive.fileVersion.delete, drive.v1.fileVersion.delete
- drive.fileVersion.get -> GET ${this.domain}/open-apis/drive/v1/files/:file_token/versions/:version_id [custom_params_serializer] aliases: drive.fileVersion.get, drive.v1.fileVersion.get
- drive.fileVersion.list -> GET ${this.domain}/open-apis/drive/v1/files/:file_token/versions [custom_params_serializer] aliases: drive.fileVersion.list, drive.v1.fileVersion.list
- drive.fileVersion.listWithIterator -> GET ${this.domain}/open-apis/drive/v1/files/:file_token/versions [custom_params_serializer, iterator_helper] aliases: drive.fileVersion.listWithIterator, drive.v1.fileVersion.listWithIterator
- drive.fileViewRecord.list -> GET ${this.domain}/open-apis/drive/v1/files/:file_token/view_records [custom_params_serializer] aliases: drive.fileViewRecord.list, drive.v1.fileViewRecord.list
- drive.fileViewRecord.listWithIterator -> GET ${this.domain}/open-apis/drive/v1/files/:file_token/view_records [custom_params_serializer, iterator_helper] aliases: drive.fileViewRecord.listWithIterator, drive.v1.fileViewRecord.listWithIterator
- drive.importTask.create -> POST ${this.domain}/open-apis/drive/v1/import_tasks [custom_params_serializer] aliases: drive.importTask.create, drive.v1.importTask.create
- drive.importTask.get -> GET ${this.domain}/open-apis/drive/v1/import_tasks/:ticket [custom_params_serializer] aliases: drive.importTask.get, drive.v1.importTask.get
- drive.media.batchGetTmpDownloadUrl -> GET ${this.domain}/open-apis/drive/v1/medias/batch_get_tmp_download_url [custom_params_serializer] aliases: drive.media.batchGetTmpDownloadUrl, drive.v1.media.batchGetTmpDownloadUrl
- drive.media.download -> GET ${this.domain}/open-apis/drive/v1/medias/:file_token/download [custom_params_serializer, readable_stream_helper, stream_response, write_file_helper] aliases: drive.media.download, drive.v1.media.download
- drive.media.uploadAll -> POST ${this.domain}/open-apis/drive/v1/medias/upload_all [custom_params_serializer] aliases: drive.media.uploadAll, drive.v1.media.uploadAll
- drive.media.uploadFinish -> POST ${this.domain}/open-apis/drive/v1/medias/upload_finish [custom_params_serializer] aliases: drive.media.uploadFinish, drive.v1.media.uploadFinish
- drive.media.uploadPart -> POST ${this.domain}/open-apis/drive/v1/medias/upload_part [custom_params_serializer] aliases: drive.media.uploadPart, drive.v1.media.uploadPart
- drive.media.uploadPrepare -> POST ${this.domain}/open-apis/drive/v1/medias/upload_prepare [custom_params_serializer] aliases: drive.media.uploadPrepare, drive.v1.media.uploadPrepare
- drive.meta.batchQuery -> POST ${this.domain}/open-apis/drive/v1/metas/batch_query [custom_params_serializer] aliases: drive.meta.batchQuery, drive.v1.meta.batchQuery
- drive.permissionMember.auth -> GET ${this.domain}/open-apis/drive/v1/permissions/:token/members/auth [custom_params_serializer] aliases: drive.permissionMember.auth, drive.v1.permissionMember.auth
- drive.permissionMember.batchCreate -> POST ${this.domain}/open-apis/drive/v1/permissions/:token/members/batch_create [custom_params_serializer] aliases: drive.permissionMember.batchCreate, drive.v1.permissionMember.batchCreate
- drive.permissionMember.create -> POST ${this.domain}/open-apis/drive/v1/permissions/:token/members [custom_params_serializer] aliases: drive.permissionMember.create, drive.v1.permissionMember.create
- drive.permissionMember.delete -> DELETE ${this.domain}/open-apis/drive/v1/permissions/:token/members/:member_id [custom_params_serializer] aliases: drive.permissionMember.delete, drive.v1.permissionMember.delete
- drive.permissionMember.list -> GET ${this.domain}/open-apis/drive/v1/permissions/:token/members [custom_params_serializer] aliases: drive.permissionMember.list, drive.v1.permissionMember.list
- drive.permissionMember.transferOwner -> POST ${this.domain}/open-apis/drive/v1/permissions/:token/members/transfer_owner [custom_params_serializer] aliases: drive.permissionMember.transferOwner, drive.v1.permissionMember.transferOwner
- drive.permissionMember.update -> PUT ${this.domain}/open-apis/drive/v1/permissions/:token/members/:member_id [custom_params_serializer] aliases: drive.permissionMember.update, drive.v1.permissionMember.update
- drive.permissionPublic.get -> GET ${this.domain}/open-apis/drive/v1/permissions/:token/public [custom_params_serializer] aliases: drive.permissionPublic.get, drive.v1.permissionPublic.get
- drive.permissionPublic.get -> GET ${this.domain}/open-apis/drive/v2/permissions/:token/public [custom_params_serializer]
- drive.permissionPublic.patch -> PATCH ${this.domain}/open-apis/drive/v1/permissions/:token/public [custom_params_serializer] aliases: drive.permissionPublic.patch, drive.v1.permissionPublic.patch
- drive.permissionPublic.patch -> PATCH ${this.domain}/open-apis/drive/v2/permissions/:token/public [custom_params_serializer]
- drive.permissionPublicPassword.create -> POST ${this.domain}/open-apis/drive/v1/permissions/:token/public/password [custom_params_serializer] aliases: drive.permissionPublicPassword.create, drive.v1.permissionPublicPassword.create
- drive.permissionPublicPassword.delete -> DELETE ${this.domain}/open-apis/drive/v1/permissions/:token/public/password [custom_params_serializer] aliases: drive.permissionPublicPassword.delete, drive.v1.permissionPublicPassword.delete
- drive.permissionPublicPassword.update -> PUT ${this.domain}/open-apis/drive/v1/permissions/:token/public/password [custom_params_serializer] aliases: drive.permissionPublicPassword.update, drive.v1.permissionPublicPassword.update
- drive.user.removeSubscription -> DELETE ${this.domain}/open-apis/drive/v1/user/remove_subscription [custom_params_serializer] aliases: drive.user.removeSubscription, drive.v1.user.removeSubscription
- drive.user.subscription -> POST ${this.domain}/open-apis/drive/v1/user/subscription [custom_params_serializer] aliases: drive.user.subscription, drive.v1.user.subscription
- drive.user.subscriptionStatus -> GET ${this.domain}/open-apis/drive/v1/user/subscription_status [custom_params_serializer] aliases: drive.user.subscriptionStatus, drive.v1.user.subscriptionStatus

## Event Handles

- drive.file.bitable_field_changed_v1
- drive.file.bitable_record_changed_v1
- drive.file.created_in_folder_v1
- drive.file.deleted_v1
- drive.file.edit_v1
- drive.file.permission_member_added_v1
- drive.file.permission_member_applied_v1
- drive.file.permission_member_removed_v1
- drive.file.read_v1
- drive.file.title_updated_v1
- drive.file.trashed_v1

