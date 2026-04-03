# Feishu Legacy Service APIs

- APIs in this file are excluded from SDK coverage, definition snapshots, and permission diff analysis.
- Legacy APIs archived: 178

- DELETE /open-apis/drive/explorer/v2/file/docs/:docToken | 删除Doc | ccm_drive_explorer.default.v2/file/docs/:docToken
  legacyReason: old_version
- DELETE /open-apis/drive/explorer/v2/file/spreadsheets/:spreadsheetToken | 删除Sheet | ccm_drive_explorer.default.v2/file/spreadsheets/:spreadsheetToken
  legacyReason: old_version
- DELETE /open-apis/drive/v1/files/:file_token/comments/:comment_id/replies/:reply_id | 删除回复 | drive.file.comment.reply.delete
  legacyReason: history
  markdownHistoryNoticeDetected: true
- DELETE /open-apis/drive/v1/files/:file_token/delete_subscribe | 取消云文档事件订阅 | drive.file.delete_subscribe
  legacyReason: history
  markdownHistoryNoticeDetected: true
- DELETE /open-apis/sheets/v2/spreadsheets/:spreadsheetToken/condition_formats/batch_delete | 批量删除条件格式 | ccm_sheet.default.spreadsheets/:spreadsheetToken/condition_formats/batch_delete
  legacyReason: old_version
- DELETE /open-apis/sheets/v2/spreadsheets/:spreadsheetToken/dataValidation | 删除下拉列表设置 | ccm_sheet.default.delete#spreadsheets/:spreadsheetToken/dataValidation
  legacyReason: old_version
- DELETE /open-apis/sheets/v2/spreadsheets/:spreadsheetToken/dimension_range | 删除行列 | ccm_sheet.default.delete#spreadsheets/:spreadsheetToken/dimension_range
  legacyReason: old_version
- DELETE /open-apis/sheets/v2/spreadsheets/:spreadsheetToken/protected_range_batch_del | 删除保护范围 | ccm_sheet.default.spreadsheets/:spreadsheetToken/protected_range_batch_del
  legacyReason: old_version
- DELETE /open-apis/task/v1/tasks/:task_id | 删除任务 | task.task.delete
  legacyReason: history
  markdownHistoryNoticeDetected: true
- DELETE /open-apis/task/v1/tasks/:task_id/collaborators/:collaborator_id | 删除指定执行者 | task.task.collaborator.delete
  legacyReason: history
  markdownHistoryNoticeDetected: true
- DELETE /open-apis/task/v1/tasks/:task_id/comments/:comment_id | 删除评论 | task.task.comment.delete
  legacyReason: history
  markdownHistoryNoticeDetected: true
- DELETE /open-apis/task/v1/tasks/:task_id/followers/:follower_id | 删除指定关注人 | task.task.follower.delete
  legacyReason: history
  markdownHistoryNoticeDetected: true
- DELETE /open-apis/task/v1/tasks/:task_id/reminders/:reminder_id | 删除提醒时间 | task.task.reminder.delete
  legacyReason: history
  markdownHistoryNoticeDetected: true
- GET /open-apis/application/v1/user/visible_apps | 获取用户可用的应用 | application.default.v1/user/visible_apps
  legacyReason: old_version
- GET /open-apis/application/v2/app/visibility | 获取应用在企业内的可用范围 | application.default.v2/app/visibility
  legacyReason: old_version
- GET /open-apis/application/v3/app/list | 获取企业安装的应用 | application.default.v3/app/list
  legacyReason: old_version
- GET /open-apis/application/v3/is_user_admin | 校验应用管理员 | application.default.v3/is_user_admin
  legacyReason: old_version
- GET /open-apis/authen/v1/index | 获取登录预授权码 | oauth.default.v1/index
  legacyReason: old_version
  markdownHistoryNoticeDetected: true
- GET /open-apis/bitable/v1/apps/:app_token/tables/:table_id/records | 列出记录 | bitable.app.table.record.list
  legacyReason: history
  markdownHistoryNoticeDetected: true
- GET /open-apis/bitable/v1/apps/:app_token/tables/:table_id/records/:record_id | 检索记录 | bitable.app.table.record.get
  legacyReason: history
  markdownHistoryNoticeDetected: true
- GET /open-apis/contact/v1/user/admin_scope/get | 获取应用管理员管理范围 | contact.default.v1/user/admin_scope/get
  legacyReason: old_version
- GET /open-apis/contact/v2/role/list | 获取角色列表 | contact.default.v2/role/list
  legacyReason: old_version
  tags: history
- GET /open-apis/contact/v2/task/get | 查询批量任务执行状态 | contact.default.v2/task/get
  legacyReason: old_version
  tags: history
  markdownHistoryNoticeDetected: true
- GET /open-apis/contact/v3/departments | 获取部门信息列表 | contact.department.list
  legacyReason: history
  tags: history
  markdownHistoryNoticeDetected: true
- GET /open-apis/contact/v3/users | 获取用户列表 | contact.user.list
  legacyReason: history
  tags: history
  markdownHistoryNoticeDetected: true
- GET /open-apis/corehr/v1/job_datas | 批量查询任职信息 | corehr.job_data.list
  legacyReason: history
  markdownHistoryNoticeDetected: true
- GET /open-apis/corehr/v1/job_datas/:job_data_id | 查询单个任职信息 | corehr.job_data.get
  legacyReason: history
  markdownHistoryNoticeDetected: true
- GET /open-apis/corehr/v2/approval_groups/:process_id | 根据流程 ID 查询组织架构调整记录 | corehr.approval_groups.get
  legacyReason: history
  markdownHistoryNoticeDetected: true
- GET /open-apis/corehr/v2/processes/:process_id/form_variable_data | 获取流程表单数据 | corehr.process.form_variable_data.get
  legacyReason: history
  markdownHistoryNoticeDetected: true
- GET /open-apis/doc/v2/:docToken/content | 获取旧版文档富文本内容 | ccm_doc.default.:docToken/content
  legacyReason: old_version
- GET /open-apis/doc/v2/:docToken/raw_content | 获取旧版文档纯文本内容 | ccm_doc.default.:docToken/raw_content
  legacyReason: old_version
- GET /open-apis/doc/v2/:docToken/sheet_meta | 获取旧版文档中的电子表格元数据 | ccm_doc.default.:docToken/sheet_meta
  legacyReason: old_version
- GET /open-apis/doc/v2/meta/:docToken | 获取旧版文档元信息 | ccm_doc.default.meta/:docToken
  legacyReason: old_version
- GET /open-apis/docx/v1/chats/:chat_id/announcement/blocks | 获取群公告所有块 | docx.chat.announcement.block.list
  legacyReason: history
  markdownHistoryNoticeDetected: true
- GET /open-apis/docx/v1/chats/:chat_id/announcement/blocks/:block_id | 获取群公告块的内容 | docx.chat.announcement.block.get
  legacyReason: history
  markdownHistoryNoticeDetected: true
- GET /open-apis/docx/v1/chats/:chat_id/announcement/blocks/:block_id/children | 获取所有子块 | docx.chat.announcement.block.children.get
  legacyReason: history
  markdownHistoryNoticeDetected: true
- GET /open-apis/docx/v1/documents/:document_id/blocks | 获取文档所有块 | docx.document.block.list
  legacyReason: history
  markdownHistoryNoticeDetected: true
- GET /open-apis/docx/v1/documents/:document_id/blocks/:block_id | 获取块的内容 | docx.document.block.get
  legacyReason: history
  markdownHistoryNoticeDetected: true
- GET /open-apis/docx/v1/documents/:document_id/blocks/:block_id/children | 获取所有子块 | docx.document.block.children.get
  legacyReason: history
  markdownHistoryNoticeDetected: true
- GET /open-apis/drive/explorer/v2/folder/:folderToken/children | 获取文件夹下的文档清单 | ccm_drive_explorer.default.v2/folder/:folderToken/children
  legacyReason: old_version
- GET /open-apis/drive/explorer/v2/folder/:folderToken/meta | 获取文件夹元数据 | ccm_drive_explorer.default.v2/folder/:folderToken/meta
  legacyReason: old_version
- GET /open-apis/drive/explorer/v2/root_folder/meta | 获取我的空间（根文件夹）元数据 | ccm_drive_explorer.default.v2/root_folder/meta
  legacyReason: old_version
- GET /open-apis/drive/v1/export_tasks/:ticket | 查询导出任务结果 | drive.export_task.get
  legacyReason: history
  markdownHistoryNoticeDetected: true
- GET /open-apis/drive/v1/files/:file_token/comments | 获取云文档所有评论 | drive.file.comment.list
  legacyReason: history
  markdownHistoryNoticeDetected: true
- GET /open-apis/drive/v1/files/:file_token/comments/:comment_id | 获取全文评论 | drive.file.comment.get
  legacyReason: history
  markdownHistoryNoticeDetected: true
- GET /open-apis/drive/v1/files/:file_token/comments/:comment_id/replies | 获取回复信息 | drive.file.comment.reply.list
  legacyReason: history
  markdownHistoryNoticeDetected: true
- GET /open-apis/drive/v1/files/:file_token/get_subscribe | 查询云文档事件订阅状态 | drive.file.get_subscribe
  legacyReason: history
  markdownHistoryNoticeDetected: true
- GET /open-apis/drive/v1/permissions/:token/public | 获取云文档权限设置 | drive.permission.public.get
  legacyReason: history
  markdownHistoryNoticeDetected: true
- GET /open-apis/face_verify/v1/query_auth_result | 查询人脸认证结果 | face_verify.default.v1/query_auth_result
  legacyReason: old_version
- GET /open-apis/hire/v1/applications/:application_id/interviews | 获取面试记录列表 | hire.application.interview.list
  legacyReason: history
  tags: history
- GET /open-apis/hire/v1/employees/:employee_id | 通过员工 ID 获取入职信息 | hire.employee.get
  legacyReason: history
  markdownHistoryNoticeDetected: true
- GET /open-apis/hire/v1/employees/get_by_application | 通过投递 ID 获取入职信息 | hire.employee.get_by_application
  legacyReason: history
  markdownHistoryNoticeDetected: true
- GET /open-apis/hire/v1/interview_feedback_forms | 获取面试评价表列表 | hire.interview_feedback_form.list
  legacyReason: history
  markdownHistoryNoticeDetected: true
- GET /open-apis/hire/v1/offer_approval_templates | 获取 Offer 审批流列表 | hire.offer_approval_template.list
  legacyReason: history
  markdownHistoryNoticeDetected: true
- GET /open-apis/hire/v1/offer_schemas/:offer_schema_id | 获取 Offer 申请表详细信息 | hire.offer_schema.get
  legacyReason: history
  tags: history
- GET /open-apis/im/v1/chats | 获取用户或机器人所在的群列表 | im.chat.list
  legacyReason: history
  markdownHistoryNoticeDetected: true
- GET /open-apis/im/v1/chats/:chat_id/members | 获取群成员列表 | im.chat.members.get
  legacyReason: history
  markdownHistoryNoticeDetected: true
- GET /open-apis/im/v1/chats/:chat_id/members/is_in_chat | 判断用户或机器人是否在群里 | im.chat.members.is_in_chat
  legacyReason: history
  markdownHistoryNoticeDetected: true
- GET /open-apis/im/v1/chats/search | 搜索对用户或机器人可见的群列表 | im.chat.search
  legacyReason: history
  markdownHistoryNoticeDetected: true
- GET /open-apis/meeting_room/building/batch_get | 查询建筑物详情 | vc_meeting.default.building/batch_get
  legacyReason: old_version
- GET /open-apis/meeting_room/building/batch_get_id | 查询建筑物ID | vc_meeting.default.building/batch_get_id
  legacyReason: old_version
- GET /open-apis/meeting_room/building/list | 获取建筑物列表 | vc_meeting.default.building/list
  legacyReason: old_version
- GET /open-apis/meeting_room/country/list | 获取国家地区列表 | vc_meeting.default.country/list
  legacyReason: old_version
- GET /open-apis/meeting_room/district/list | 获取城市列表 | vc_meeting.default.district/list
  legacyReason: old_version
- GET /open-apis/meeting_room/freebusy/batch_get | 查询会议室忙闲 | vc_meeting.default.freebusy/batch_get
  legacyReason: old_version
- GET /open-apis/meeting_room/room/batch_get | 查询会议室详情 | vc_meeting.default.room/batch_get
  legacyReason: old_version
- GET /open-apis/meeting_room/room/batch_get_id | 查询会议室ID | vc_meeting.default.room/batch_get_id
  legacyReason: old_version
- GET /open-apis/meeting_room/room/list | 获取会议室列表 | vc_meeting.default.room/list
  legacyReason: old_version
- GET /open-apis/search/v1/user | 搜索用户 | contact_search.default.v1/user
  legacyReason: old_version
- GET /open-apis/sheets/v2/import/result | 查询导入结果 | ccm_sheet.default.import/result
  legacyReason: old_version
- GET /open-apis/sheets/v2/spreadsheets/:spreadsheetToken/condition_formats | 批量获取条件格式 | ccm_sheet.default.spreadsheets/:spreadsheetToken/condition_formats
  legacyReason: old_version
- GET /open-apis/sheets/v2/spreadsheets/:spreadsheetToken/dataValidation | 查询下拉列表设置 | ccm_sheet.default.get#spreadsheets/:spreadsheetToken/dataValidation
  legacyReason: old_version
- GET /open-apis/sheets/v2/spreadsheets/:spreadsheetToken/metainfo | 获取表格元数据 | ccm_sheet.default.spreadsheets/:spreadsheetToken/metainfo
  legacyReason: old_version
- GET /open-apis/sheets/v2/spreadsheets/:spreadsheetToken/protected_range_batch_get | 获取保护范围 | ccm_sheet.default.spreadsheets/:spreadsheetToken/protected_range_batch_get
  legacyReason: old_version
- GET /open-apis/sheets/v2/spreadsheets/:spreadsheetToken/values_batch_get | 读取多个范围 | ccm_sheet.default.spreadsheets/:spreadsheetToken/values_batch_get
  legacyReason: old_version
- GET /open-apis/sheets/v2/spreadsheets/:spreadsheetToken/values/:range | 读取单个范围 | ccm_sheet.default.spreadsheets/:spreadsheetToken/values/:range
  legacyReason: old_version
- GET /open-apis/task/v1/tasks/:task_id/comments | 获取评论列表 | task.task.comment.list
  legacyReason: history
  markdownHistoryNoticeDetected: true
- GET /open-apis/task/v1/tasks/:task_id/comments/:comment_id | 获取评论详情 | task.task.comment.get
  legacyReason: history
  markdownHistoryNoticeDetected: true
- GET /open-apis/task/v1/tasks/:task_id/reminders | 查询提醒时间列表 | task.task.reminder.list
  legacyReason: history
  markdownHistoryNoticeDetected: true
- GET /open-apis/user/v4/app_admin_user/list | 查询应用管理员列表 | contact_user.default.v4/app_admin_user/list
  legacyReason: old_version
- PATCH /open-apis/drive/v1/files/:file_token/comments/:comment_id | 解决/恢复评论 | drive.file.comment.patch
  legacyReason: history
  markdownHistoryNoticeDetected: true
- PATCH /open-apis/drive/v1/permissions/:token/public | 更新云文档权限设置 | drive.permission.public.patch
  legacyReason: history
  markdownHistoryNoticeDetected: true
- PATCH /open-apis/im/v1/messages/:message_id/urgent_app | 发送应用内加急 | im.message.urgent_app
  legacyReason: history
  markdownHistoryNoticeDetected: true
- PATCH /open-apis/im/v1/messages/:message_id/urgent_phone | 发送电话加急 | im.message.urgent_phone
  legacyReason: history
  markdownHistoryNoticeDetected: true
- PATCH /open-apis/im/v1/messages/:message_id/urgent_sms | 发送短信加急 | im.message.urgent_sms
  legacyReason: history
  markdownHistoryNoticeDetected: true
- POST /approval/openapi/v1/id/get | 查询审批 ID（专用） | approval.default.v1/id/get
  legacyReason: old_version
- POST /approval/openapi/v1/message/send | 发送审批 Bot 消息 | approval.default.v1/message/send
  legacyReason: old_version
- POST /approval/openapi/v1/message/update | 更新审批 Bot 消息 | approval.default.v1/message/update
  legacyReason: old_version
- POST /approval/openapi/v2/approval/create | 创建审批定义 | approval.default.v2/approval/create
  legacyReason: old_version
- POST /approval/openapi/v2/approval/get | 查看审批定义 | approval.default.v2/approval/get
  legacyReason: old_version
- POST /approval/openapi/v2/cc/search | 抄送列表查询 | approval.default.v2/cc/search
  legacyReason: old_version
- POST /approval/openapi/v2/external/instance/create | 三方审批实例同步 | approval.default.v2/external/instance/create
  legacyReason: old_version
- POST /approval/openapi/v2/external/instanceOperate | 三方快捷审批回调 | approval.default.v2/external/instanceOperate
  legacyReason: old_version
- POST /approval/openapi/v2/external/list | 获取三方审批任务状态 | approval.default.v2/external/list
  legacyReason: old_version
- POST /approval/openapi/v2/file/upload | 上传文件 | approval.default.v2/file/upload
  legacyReason: old_version
- POST /approval/openapi/v2/instance/approve | 审批任务同意 | approval.default.v2/instance/approve
  legacyReason: old_version
- POST /approval/openapi/v2/instance/cancel | 审批实例撤回 | approval.default.v2/instance/cancel
  legacyReason: old_version
- POST /approval/openapi/v2/instance/cc | 审批实例抄送 | approval.default.v2/instance/cc
  legacyReason: old_version
- POST /approval/openapi/v2/instance/create | 创建审批实例 | approval.default.v2/instance/create
  legacyReason: old_version
- POST /approval/openapi/v2/instance/get | 获取单个审批实例详情 | approval.default.v2/instance/get
  legacyReason: old_version
- POST /approval/openapi/v2/instance/list | 批量获取审批实例ID | approval.default.v2/instance/list
  legacyReason: old_version
- POST /approval/openapi/v2/instance/reject | 审批任务拒绝 | approval.default.v2/instance/reject
  legacyReason: old_version
- POST /approval/openapi/v2/instance/search | 实例列表查询 | approval.default.v2/instance/search
  legacyReason: old_version
- POST /approval/openapi/v2/instance/transfer | 审批任务转交 | approval.default.v2/instance/transfer
  legacyReason: old_version
- POST /approval/openapi/v2/subscription/subscribe | 订阅审批事件 | approval.default.v2/subscription/subscribe
  legacyReason: old_version
- POST /approval/openapi/v2/subscription/unsubscribe | 取消订阅审批事件 | approval.default.v2/subscription/unsubscribe
  legacyReason: old_version
- POST /approval/openapi/v2/task/search | 任务列表查询 | approval.default.v2/task/search
  legacyReason: old_version
- POST /approval/openapi/v3/external/approval/create | 三方审批定义创建 | approval.default.v3/external/approval/create
  legacyReason: old_version
- POST /approval/openapi/v3/external/instance/check | 三方审批实例校验 | approval.default.v3/external/instance/check
  legacyReason: old_version
- POST /open-apis/application/v3/app/update_visibility | 更新应用可用范围 | application.default.v3/app/update_visibility
  legacyReason: old_version
- POST /open-apis/authen/v1/access_token | 获取 user_access_token（v1 版本） | authen.access_token.create
  legacyReason: history
  markdownHistoryNoticeDetected: true
- POST /open-apis/authen/v1/oidc/access_token | 获取 user_access_token | authen.oidc.access_token.create
  legacyReason: history
  markdownHistoryNoticeDetected: true
- POST /open-apis/authen/v1/oidc/refresh_access_token | 刷新 user_access_token | authen.oidc.refresh_access_token.create
  legacyReason: history
  markdownHistoryNoticeDetected: true
- POST /open-apis/authen/v1/refresh_access_token | 刷新 user_access_token（v1 版本） | authen.refresh_access_token.create
  legacyReason: history
  markdownHistoryNoticeDetected: true
- POST /open-apis/board/v1/whiteboards/:whiteboard_id/nodes | 创建节点 | board.whiteboard.node.create
  legacyReason: history
  markdownHistoryNoticeDetected: true
- POST /open-apis/cardkit/v1/cards/id_convert | 转换 ID | cardkit.card.id_convert
  legacyReason: history
  markdownHistoryNoticeDetected: true
- POST /open-apis/contact/v2/department/batch_add | 批量新增部门 | contact.default.v2/department/batch_add
  legacyReason: old_version
  tags: history
  markdownHistoryNoticeDetected: true
- POST /open-apis/contact/v2/user/batch_add | 批量新增用户 | contact.default.v2/user/batch_add
  legacyReason: old_version
  tags: history
  markdownHistoryNoticeDetected: true
- POST /open-apis/corehr/v2/departments/batch_get | 批量查询部门 | corehr.department.batch_get
  legacyReason: history
  markdownHistoryNoticeDetected: true
- POST /open-apis/corehr/v2/pre_hires/query | 查询待入职信息 | corehr.pre_hire.query
  legacyReason: history
  markdownHistoryNoticeDetected: true
- POST /open-apis/corehr/v2/pre_hires/search | 搜索待入职信息 | corehr.pre_hire.search
  legacyReason: history
  markdownHistoryNoticeDetected: true
- POST /open-apis/doc/v2/:docToken/batch_update | 编辑旧版文档内容 | ccm_doc.default.:docToken/batch_update
  legacyReason: old_version
- POST /open-apis/doc/v2/create | 创建旧版文档 | ccm_doc.default.create
  legacyReason: old_version
- POST /open-apis/drive/explorer/v2/file/:folderToken | 新建文件 | ccm_drive_explorer.default.v2/file/:folderToken
  legacyReason: old_version
  markdownHistoryNoticeDetected: true
- POST /open-apis/drive/explorer/v2/file/copy/files/:fileToken | 复制文档 | ccm_drive_explorer.default.v2/file/copy/files/:fileToken
  legacyReason: old_version
- POST /open-apis/drive/explorer/v2/folder/:folderToken | 新建文件夹 | ccm_drive_explorer.default.v2/folder/:folderToken
  legacyReason: old_version
- POST /open-apis/drive/v1/export_tasks | 创建导出任务 | drive.export_task.create
  legacyReason: history
  markdownHistoryNoticeDetected: true
- POST /open-apis/drive/v1/files/:file_token/comments | 添加全文评论 | drive.file.comment.create
  legacyReason: history
  markdownHistoryNoticeDetected: true
- POST /open-apis/drive/v1/files/:file_token/comments/batch_query | 批量获取评论 | drive.file.comment.batch_query
  legacyReason: history
  markdownHistoryNoticeDetected: true
- POST /open-apis/drive/v1/files/:file_token/subscribe | 订阅云文档事件 | drive.file.subscribe
  legacyReason: history
  markdownHistoryNoticeDetected: true
- POST /open-apis/ephemeral/v1/delete | 删除仅特定人可见的消息卡片 | im_ephemeral.default.v1/delete
  legacyReason: old_version
- POST /open-apis/ephemeral/v1/send | 发送仅特定人可见的消息卡片 | im_ephemeral.default.v1/send
  legacyReason: old_version
- POST /open-apis/face_verify/v1/crop_face_image | 裁剪人脸图片 | face_verify.default.v1/crop_face_image
  legacyReason: old_version
- POST /open-apis/face_verify/v1/upload_face_image | 上传人脸基准图片 | face_verify.default.v1/upload_face_image
  legacyReason: old_version
- POST /open-apis/hire/v1/attachments | 创建附件 | hire.attachment.create
  legacyReason: history
  tags: history
- POST /open-apis/interactive/v1/card/update | 延时更新消息卡片 | card.default.v1/card/update
  legacyReason: old_version
- POST /open-apis/meeting_room/building/create | 创建建筑物 | vc_meeting.default.building/create
  legacyReason: old_version
- POST /open-apis/meeting_room/building/delete | 删除建筑物 | vc_meeting.default.building/delete
  legacyReason: old_version
- POST /open-apis/meeting_room/building/update | 更新建筑物 | vc_meeting.default.building/update
  legacyReason: old_version
- POST /open-apis/meeting_room/instance/reply | 回复会议室日程实例 | vc_meeting.default.instance/reply
  legacyReason: old_version
- POST /open-apis/meeting_room/room/create | 创建会议室 | vc_meeting.default.room/create
  legacyReason: old_version
- POST /open-apis/meeting_room/room/delete | 删除会议室 | vc_meeting.default.room/delete
  legacyReason: old_version
- POST /open-apis/meeting_room/room/update | 更新会议室 | vc_meeting.default.room/update
  legacyReason: old_version
- POST /open-apis/meeting_room/summary/batch_get | 查询会议室日程主题和会议详情 | vc_meeting.default.summary/batch_get
  legacyReason: old_version
- POST /open-apis/message/v4/batch_send | 批量发送消息 | im_message.default.v4/batch_send/
  legacyReason: old_version
- POST /open-apis/sheets/v2/import | 导入表格 | ccm_sheet.default.import
  legacyReason: old_version
- POST /open-apis/sheets/v2/spreadsheets/:spreadsheetToken/condition_formats/batch_create | 批量创建条件格式 | ccm_sheet.default.spreadsheets/:spreadsheetToken/condition_formats/batch_create
  legacyReason: old_version
- POST /open-apis/sheets/v2/spreadsheets/:spreadsheetToken/condition_formats/batch_update | 批量更新条件格式 | ccm_sheet.default.spreadsheets/:spreadsheetToken/condition_formats/batch_update
  legacyReason: old_version
- POST /open-apis/sheets/v2/spreadsheets/:spreadsheetToken/dataValidation | 设置下拉列表 | ccm_sheet.default.post#spreadsheets/:spreadsheetToken/dataValidation
  legacyReason: old_version
- POST /open-apis/sheets/v2/spreadsheets/:spreadsheetToken/dimension_range | 增加行列 | ccm_sheet.default.post#spreadsheets/:spreadsheetToken/dimension_range
  legacyReason: old_version
- POST /open-apis/sheets/v2/spreadsheets/:spreadsheetToken/insert_dimension_range | 插入行列 | ccm_sheet.default.spreadsheets/:spreadsheetToken/insert_dimension_range
  legacyReason: old_version
- POST /open-apis/sheets/v2/spreadsheets/:spreadsheetToken/merge_cells | 合并单元格 | ccm_sheet.default.spreadsheets/:spreadsheetToken/merge_cells
  legacyReason: old_version
- POST /open-apis/sheets/v2/spreadsheets/:spreadsheetToken/protected_dimension | 增加保护范围 | ccm_sheet.default.spreadsheets/:spreadsheetToken/protected_dimension
  legacyReason: old_version
  markdownHistoryNoticeDetected: true
- POST /open-apis/sheets/v2/spreadsheets/:spreadsheetToken/protected_range_batch_update | 修改保护范围 | ccm_sheet.default.spreadsheets/:spreadsheetToken/protected_range_batch_update
  legacyReason: old_version
- POST /open-apis/sheets/v2/spreadsheets/:spreadsheetToken/sheets_batch_update | 操作工作表 | ccm_sheet.default.spreadsheets/:spreadsheetToken/sheets_batch_update
  legacyReason: old_version
- POST /open-apis/sheets/v2/spreadsheets/:spreadsheetToken/sheets_batch_update | 更新工作表属性 | ccm_sheet.default.spreadsheets/:spreadsheetToken/sheets_batch_update
  legacyReason: old_version
- POST /open-apis/sheets/v2/spreadsheets/:spreadsheetToken/unmerge_cells | 拆分单元格 | ccm_sheet.default.spreadsheets/:spreadsheetToken/unmerge_cells
  legacyReason: old_version
- POST /open-apis/sheets/v2/spreadsheets/:spreadsheetToken/values_append | 追加数据 | ccm_sheet.default.spreadsheets/:spreadsheetToken/values_append
  legacyReason: old_version
- POST /open-apis/sheets/v2/spreadsheets/:spreadsheetToken/values_batch_update | 向多个范围写入数据 | ccm_sheet.default.spreadsheets/:spreadsheetToken/values_batch_update
  legacyReason: old_version
- POST /open-apis/sheets/v2/spreadsheets/:spreadsheetToken/values_image | 写入图片 | ccm_sheet.default.spreadsheets/:spreadsheetToken/values_image
  legacyReason: old_version
- POST /open-apis/sheets/v2/spreadsheets/:spreadsheetToken/values_prepend | 插入数据 | ccm_sheet.default.spreadsheets/:spreadsheetToken/values_prepend
  legacyReason: old_version
- POST /open-apis/suite/docs-api/meta | 获取元数据 | ccm_docs.default.docs-api/meta
  legacyReason: old_version
- POST /open-apis/suite/docs-api/search/object | 搜索云文档 | ccm_docs.default.docs-api/search/object
  legacyReason: old_version
- POST /open-apis/task/v1/tasks/:task_id/batch_delete_follower | 批量删除关注人 | task.task.batch_delete_follower
  legacyReason: history
  markdownHistoryNoticeDetected: true
- POST /open-apis/task/v1/tasks/:task_id/comments | 创建评论 | task.task.comment.create
  legacyReason: history
  markdownHistoryNoticeDetected: true
- POST /open-apis/task/v1/tasks/:task_id/complete | 完成任务 | task.task.complete
  legacyReason: history
  markdownHistoryNoticeDetected: true
- POST /open-apis/task/v1/tasks/:task_id/followers | 新增关注人 | task.task.follower.create
  legacyReason: history
  markdownHistoryNoticeDetected: true
- POST /open-apis/task/v1/tasks/:task_id/reminders | 新增提醒时间 | task.task.reminder.create
  legacyReason: history
  markdownHistoryNoticeDetected: true
- POST /open-apis/task/v1/tasks/:task_id/uncomplete | 取消完成任务 | task.task.uncomplete
  legacyReason: history
  markdownHistoryNoticeDetected: true
- PUT /open-apis/contact/v3/users/:user_id | 更新用户所有信息 | contact.user.update
  legacyReason: history
  markdownHistoryNoticeDetected: true
- PUT /open-apis/drive/v1/files/:file_token/comments/:comment_id/replies/:reply_id | 更新回复的内容 | drive.file.comment.reply.update
  legacyReason: history
  markdownHistoryNoticeDetected: true
- PUT /open-apis/sheets/v2/spreadsheets/:spreadsheetToken/dataValidation/:sheetId/:dataValidationId | 更新下拉列表设置 | ccm_sheet.default.spreadsheets/:spreadsheetToken/dataValidation/:sheetId/:dataValidationId
  legacyReason: old_version
- PUT /open-apis/sheets/v2/spreadsheets/:spreadsheetToken/dimension_range | 更新行列 | ccm_sheet.default.put#spreadsheets/:spreadsheetToken/dimension_range
  legacyReason: old_version
- PUT /open-apis/sheets/v2/spreadsheets/:spreadsheetToken/properties | 更新表格属性 | ccm_sheet.default.spreadsheets/:spreadsheetToken/properties
  legacyReason: old_version
- PUT /open-apis/sheets/v2/spreadsheets/:spreadsheetToken/style | 设置单元格样式  | ccm_sheet.default.spreadsheets/:spreadsheetToken/style
  legacyReason: old_version
- PUT /open-apis/sheets/v2/spreadsheets/:spreadsheetToken/styles_batch_update | 批量设置单元格样式  | ccm_sheet.default.spreadsheets/:spreadsheetToken/styles_batch_update
  legacyReason: old_version
- PUT /open-apis/sheets/v2/spreadsheets/:spreadsheetToken/values | 向单个范围写入数据 | ccm_sheet.default.spreadsheets/:spreadsheetToken/values
  legacyReason: old_version
- PUT /open-apis/task/v1/tasks/:task_id/comments/:comment_id | 更新评论 | task.task.comment.update
  legacyReason: history
  markdownHistoryNoticeDetected: true

