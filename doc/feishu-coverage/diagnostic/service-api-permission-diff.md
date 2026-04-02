# Feishu API Permission Source Diff

- APIs: 1432
- Old APIs excluded: 110
- History/deprecated APIs excluded: 68
- APIs with any diff: 194
- Required-scope diffs: 148
- Field-scope diffs: 42
- Token-type diffs: 8

## Field Scope Diffs

- DELETE /open-apis/directory/v1/departments/:department_id | 删除部门
  markdownOnly: directory:employee.base.external_id:read
  explorerOnly: (none)
- DELETE /open-apis/directory/v1/employees/:employee_id | 离职员工
  markdownOnly: directory:employee.base.external_id:read
  explorerOnly: (none)
- GET /open-apis/application/v6/applications/:app_id/feedbacks | 获取应用反馈列表
  markdownOnly: (none)
  explorerOnly: directory:employee.base.email:read
- GET /open-apis/authen/v1/user_info | 获取用户信息
  markdownOnly: (none)
  explorerOnly: directory:employee.base.email:read
- GET /open-apis/calendar/v4/exchange_bindings/:exchange_binding_id | 查询 Exchange 账户的绑定状态
  markdownOnly: (none)
  explorerOnly: directory:employee.base.email:read
- GET /open-apis/contact/v3/users/:user_id | 获取单个用户信息
  markdownOnly: (none)
  explorerOnly: contact:user.union_id:readonly, directory:employee.base.email:read
- GET /open-apis/contact/v3/users/batch | 批量获取用户信息
  markdownOnly: (none)
  explorerOnly: contact:user.union_id:readonly, directory:employee.base.email:read
- GET /open-apis/contact/v3/users/find_by_department | 获取部门直属用户列表
  markdownOnly: (none)
  explorerOnly: contact:user.union_id:readonly, directory:employee.base.email:read
- GET /open-apis/corehr/v2/signature_template_info_with_thumbnails | 获取电子签模板列表
  markdownOnly: (none)
  explorerOnly: contact:user.employee_id:readonly
- GET /open-apis/drive/v1/files/:file_token/view_records | 获取文件访问记录
  markdownOnly: (none)
  explorerOnly: contact:user.employee_id:readonly
- GET /open-apis/mail/v1/user_mailboxes/:user_mailbox_id/messages/:message_id | 获取邮件详情
  markdownOnly: (none)
  explorerOnly: myai:myai
- PATCH /open-apis/contact/v3/users/:user_id | 修改用户部分信息
  markdownOnly: (none)
  explorerOnly: contact:user.union_id:readonly
- PATCH /open-apis/corehr/v1/employments/:employment_id | 更新雇佣信息
  markdownOnly: (none)
  explorerOnly: corehr:job_data.compensation_type:read, corehr:job_data.service_company:read, corehr:job_data.work_shift:read
- PATCH /open-apis/corehr/v2/employees/international_assignments/:international_assignment_id | 更新外派信息
  markdownOnly: (none)
  explorerOnly: corehr:employment.international_assignment.accommodation:write, corehr:employment.international_assignment.international_assignment_allowance:write
- PATCH /open-apis/corehr/v2/persons/:person_id | 更新个人信息
  markdownOnly: (none)
  explorerOnly: corehr:person.nationality:read, corehr:person.nationality:write
- PATCH /open-apis/directory/v1/departments/:department_id | 更新部门
  markdownOnly: directory:employee.base.external_id:read
  explorerOnly: (none)
- PATCH /open-apis/directory/v1/employees/:employee_id | 更新员工信息
  markdownOnly: directory:employee.base.external_id:read
  explorerOnly: (none)
- PATCH /open-apis/directory/v1/employees/:employee_id/regular | 更新待离职成员为在职
  markdownOnly: directory:employee.base.external_id:read
  explorerOnly: (none)
- PATCH /open-apis/directory/v1/employees/:employee_id/to_be_resigned | 更新在职员工为待离职
  markdownOnly: directory:employee.base.external_id:read
  explorerOnly: (none)
- POST /open-apis/approval/v4/instances/preview | 预览审批流程
  markdownOnly: (none)
  explorerOnly: contact:user.employee_id:readonly
- POST /open-apis/bitable/v1/apps/:app_token/tables/batch_create | 新增多个数据表
  markdownOnly: contact:user.employee_id:readonly
  explorerOnly: (none)
- POST /open-apis/calendar/v4/exchange_bindings | 将 Exchange 账户绑定到飞书账户
  markdownOnly: (none)
  explorerOnly: directory:employee.base.email:read
- POST /open-apis/contact/v3/users | 创建用户
  markdownOnly: (none)
  explorerOnly: contact:user.union_id:readonly, directory:employee.base.email:read
- POST /open-apis/corehr/v1/job_changes | 发起员工异动(不推荐)
  markdownOnly: (none)
  explorerOnly: corehr:job_change.pathway:read, corehr:job_change.pathway:write
- POST /open-apis/corehr/v2/employees/batch_get | 批量查询员工信息
  markdownOnly: (none)
  explorerOnly: corehr:employment.individuals_with_headcount_or_not:read, corehr:employment.is_direct_leader:read, corehr:employment.is_dotted_leader:read
- POST /open-apis/corehr/v2/employees/international_assignments | 创建外派信息
  markdownOnly: (none)
  explorerOnly: corehr:employment.international_assignment.accommodation:write, corehr:employment.international_assignment.international_assignment_allowance:write
- POST /open-apis/corehr/v2/employees/search | 搜索员工信息
  markdownOnly: corehr:person.additional_name:read, corehr:person.additional_name:write
  explorerOnly: corehr:employment.individuals_with_headcount_or_not:read, corehr:employment.is_direct_leader:read, corehr:employment.is_dotted_leader:read
- POST /open-apis/corehr/v2/persons | 创建个人信息
  markdownOnly: (none)
  explorerOnly: corehr:person.nationality:read, corehr:person.nationality:write
- POST /open-apis/directory/v1/departments | 创建部门
  markdownOnly: directory:employee.base.external_id:read
  explorerOnly: (none)
- POST /open-apis/directory/v1/departments/filter | 获取部门列表
  markdownOnly: directory:employee.base.external_id:read
  explorerOnly: (none)
- POST /open-apis/directory/v1/departments/mget | 批量获取部门信息
  markdownOnly: directory:employee.base.external_id:read
  explorerOnly: (none)
- POST /open-apis/directory/v1/departments/search | 搜索部门
  markdownOnly: directory:employee.base.external_id:read
  explorerOnly: (none)
- POST /open-apis/directory/v1/employees | 创建员工
  markdownOnly: directory:employee.base.external_id:read
  explorerOnly: (none)
- POST /open-apis/directory/v1/employees/:employee_id/resurrect | 恢复离职员工
  markdownOnly: directory:employee.base.external_id:read
  explorerOnly: (none)
- POST /open-apis/directory/v1/employees/filter | 批量获取员工列表
  markdownOnly: directory:employee.base.external_id:read
  explorerOnly: (none)
- POST /open-apis/directory/v1/employees/mget | 批量获取员工信息
  markdownOnly: directory:employee.base.external_id:read
  explorerOnly: (none)
- POST /open-apis/directory/v1/employees/search | 搜索员工信息
  markdownOnly: directory:employee.base.external_id:read
  explorerOnly: (none)
- POST /open-apis/hire/v1/referral_account | 注册内推账户
  markdownOnly: (none)
  explorerOnly: contact:user.employee_id:readonly
- POST /open-apis/hire/v1/referral_account/:referral_account_id/deactivate | 停用内推账户
  markdownOnly: (none)
  explorerOnly: contact:user.employee_id:readonly
- POST /open-apis/hire/v1/referral_account/enable | 启用内推账户
  markdownOnly: (none)
  explorerOnly: contact:user.employee_id:readonly
- POST /open-apis/im/v1/messages/:message_id/forward | 转发消息
  markdownOnly: (none)
  explorerOnly: contact:user.employee_id:readonly
- POST /open-apis/im/v1/messages/merge_forward | 合并转发消息
  markdownOnly: (none)
  explorerOnly: contact:user.employee_id:readonly

## Other Source Diffs

- DELETE /open-apis/calendar/v4/calendars/:calendar_id/events/:event_id | 删除日程
  required markdownOnly: (none)
  required explorerOnly: calendar:calendar.event:writeonly
- DELETE /open-apis/docx/v1/documents/:document_id/blocks/:block_id/children/batch_delete | 删除块
  required markdownOnly: (none)
  required explorerOnly: docx:document:write_only
- DELETE /open-apis/search/v2/data_sources/:data_source_id | 删除数据源
  required markdownOnly: (none)
  required explorerOnly: search:data_source:delete
- DELETE /open-apis/search/v2/data_sources/:data_source_id/items/:item_id | 删除数据项
  required markdownOnly: (none)
  required explorerOnly: search:data_item:delete
- DELETE /open-apis/search/v2/schemas/:schema_id | 删除数据范式
  required markdownOnly: (none)
  required explorerOnly: search:data_schemas:delete
- DELETE /open-apis/sheets/v3/spreadsheets/:spreadsheet_token/sheets/:sheet_id/filter | 删除筛选
  required markdownOnly: (none)
  required explorerOnly: sheets:spreadsheet:write_only
- DELETE /open-apis/sheets/v3/spreadsheets/:spreadsheet_token/sheets/:sheet_id/filter_views/:filter_view_id | 删除筛选视图
  required markdownOnly: (none)
  required explorerOnly: sheets:spreadsheet:write_only
- DELETE /open-apis/sheets/v3/spreadsheets/:spreadsheet_token/sheets/:sheet_id/filter_views/:filter_view_id/conditions/:condition_id | 删除筛选条件
  required markdownOnly: (none)
  required explorerOnly: sheets:spreadsheet:write_only
- DELETE /open-apis/task/v2/attachments/:attachment_guid | 删除附件
  required markdownOnly: (none)
  required explorerOnly: task:attachment:delete
- DELETE /open-apis/task/v2/comments/:comment_id | 删除评论
  required markdownOnly: (none)
  required explorerOnly: task:comment:delete
- DELETE /open-apis/task/v2/sections/:section_guid | 删除自定义分组
  required markdownOnly: (none)
  required explorerOnly: task:section:delete
- DELETE /open-apis/task/v2/tasklists/:tasklist_guid | 删除清单
  required markdownOnly: (none)
  required explorerOnly: task:tasklist:delete
- DELETE /open-apis/task/v2/tasklists/:tasklist_guid/activity_subscriptions/:activity_subscription_guid | 删除动态订阅
  required markdownOnly: (none)
  required explorerOnly: task:tasklist:delete
- DELETE /open-apis/task/v2/tasks/:task_guid | 删除任务
  required markdownOnly: (none)
  required explorerOnly: task:task:delete
- DELETE /open-apis/vc/v1/rooms/:room_id | 删除会议室
  required markdownOnly: (none)
  required explorerOnly: vc:rooms.room:delete
- GET /open-apis/apaas/v1/workspaces/:workspace_id/views/:view_name/records | 查询视图数据记录
  required markdownOnly: (none)
  required explorerOnly: app_engine:workspace.table.record:write
- GET /open-apis/approval/v4/tasks/query | 查询用户的任务列表
  required markdownOnly: (none)
  required explorerOnly: approval:task:list_by_user
- GET /open-apis/calendar/v4/calendars | 查询日历列表
  required markdownOnly: (none)
  required explorerOnly: calendar:calendar.calendar:readonly
- GET /open-apis/contact/v3/custom_attrs | 获取企业自定义用户字段
  required markdownOnly: (none)
  required explorerOnly: contact:contact:readonly_as_app
- GET /open-apis/corehr/v1/files/:id | 下载文件
  required markdownOnly: (none)
  required explorerOnly: corehr:file:read
- GET /open-apis/corehr/v2/signature_files | 获取电子签文件列表
  required markdownOnly: (none)
  required explorerOnly: corehr:signature_file.pre_hire:read
  token markdownOnly: user_access_token
  token explorerOnly: (none)
- GET /open-apis/drive/v1/medias/:file_token/download | 下载素材
  required markdownOnly: (none)
  required explorerOnly: moments:moments, moments:moments:readonly, vc:material, vc:material:readonly
- GET /open-apis/drive/v1/medias/batch_get_tmp_download_url | 获取素材临时下载链接
  required markdownOnly: (none)
  required explorerOnly: moments:moments, moments:moments:readonly, vc:material, vc:material:readonly
- GET /open-apis/helpdesk/v1/categories | 获取全部知识库分类
  required markdownOnly: (none)
  required explorerOnly: helpdesk:all:readonly
- GET /open-apis/im/v1/messages/:message_id/resources/:file_key | 获取消息中的资源文件
  token markdownOnly: (none)
  token explorerOnly: user_access_token
- GET /open-apis/okr/v1/okrs/batch_get | 批量获取 OKR
  required markdownOnly: (none)
  required explorerOnly: okr:okr.content:readonly
- GET /open-apis/okr/v1/period_rules | 获取 OKR 周期规则
  required markdownOnly: (none)
  required explorerOnly: okr:okr.period:readonly
- GET /open-apis/okr/v1/periods | 获取 OKR 周期列表
  required markdownOnly: (none)
  required explorerOnly: okr:okr.period:readonly
- GET /open-apis/okr/v1/reviews/query | 查询复盘信息
  required markdownOnly: (none)
  required explorerOnly: okr:okr.review:readonly
- GET /open-apis/okr/v1/users/:user_id/okrs | 获取用户的 OKR 列表
  required markdownOnly: (none)
  required explorerOnly: okr:okr.content:readonly
- GET /open-apis/search/v2/schemas/:schema_id | 获取数据范式
  required markdownOnly: (none)
  required explorerOnly: search:data_schemas:readonly
- GET /open-apis/sheets/v3/spreadsheets/:spreadsheet_token | 获取电子表格信息
  required markdownOnly: (none)
  required explorerOnly: sheets:spreadsheet.meta:read
- GET /open-apis/sheets/v3/spreadsheets/:spreadsheet_token/sheets/:sheet_id | 查询工作表
  required markdownOnly: (none)
  required explorerOnly: sheets:spreadsheet:read
- GET /open-apis/sheets/v3/spreadsheets/:spreadsheet_token/sheets/:sheet_id/filter | 获取筛选
  required markdownOnly: (none)
  required explorerOnly: sheets:spreadsheet:read
- GET /open-apis/sheets/v3/spreadsheets/:spreadsheet_token/sheets/:sheet_id/filter_views/:filter_view_id | 获取筛选视图
  required markdownOnly: (none)
  required explorerOnly: sheets:spreadsheet:read
- GET /open-apis/sheets/v3/spreadsheets/:spreadsheet_token/sheets/:sheet_id/filter_views/:filter_view_id/conditions/:condition_id | 获取筛选条件
  required markdownOnly: (none)
  required explorerOnly: sheets:spreadsheet:read
- GET /open-apis/sheets/v3/spreadsheets/:spreadsheet_token/sheets/:sheet_id/filter_views/:filter_view_id/conditions/query | 查询筛选条件
  required markdownOnly: (none)
  required explorerOnly: sheets:spreadsheet:read
- GET /open-apis/sheets/v3/spreadsheets/:spreadsheet_token/sheets/:sheet_id/filter_views/query | 查询筛选视图
  required markdownOnly: (none)
  required explorerOnly: sheets:spreadsheet:read
- GET /open-apis/sheets/v3/spreadsheets/:spreadsheet_token/sheets/query | 获取工作表
  required markdownOnly: (none)
  required explorerOnly: sheets:spreadsheet:read
- GET /open-apis/task/v1/tasks | 查询所有任务
  required markdownOnly: (none)
  required explorerOnly: task:task:read
- GET /open-apis/task/v1/tasks/:task_id | 查询指定任务
  required markdownOnly: (none)
  required explorerOnly: task:task:read
- GET /open-apis/task/v1/tasks/:task_id/collaborators | 获取执行者列表
  required markdownOnly: (none)
  required explorerOnly: task:personnel:read
- GET /open-apis/task/v1/tasks/:task_id/followers | 获取关注人列表
  required markdownOnly: (none)
  required explorerOnly: task:personnel:read
- GET /open-apis/task/v2/attachments/:attachment_guid | 获取附件
  required markdownOnly: (none)
  required explorerOnly: task:attachment:file:download
- GET /open-apis/vc/v1/exports/:task_id | 查询导出任务结果
  required markdownOnly: (none)
  required explorerOnly: vc:meeting:export
- GET /open-apis/vc/v1/exports/download | 下载导出文件
  required markdownOnly: (none)
  required explorerOnly: vc:meeting:export
- GET /open-apis/vc/v1/participant_quality_list | 查询参会人会议质量数据
  required markdownOnly: (none)
  required explorerOnly: vc:rooms.room.detailinfo:read
- GET /open-apis/vc/v1/reserve_configs/:reserve_config_id/admin | 查询会议室预定管理员
  required markdownOnly: (none)
  required explorerOnly: vc:rooms.room.basicinfo:read
- GET /open-apis/vc/v1/reserve_configs/:reserve_config_id/disable_inform | 查询禁用状态变更通知
  required markdownOnly: (none)
  required explorerOnly: vc:rooms.room.basicinfo:read
- GET /open-apis/vc/v1/reserve_configs/:reserve_config_id/form | 查询会议室预定表单
  required markdownOnly: (none)
  required explorerOnly: vc:rooms.room.basicinfo:read
- GET /open-apis/vc/v1/reserve_configs/reserve_scope | 查询会议室预定限制
  required markdownOnly: (none)
  required explorerOnly: vc:rooms.room.basicinfo:read
- GET /open-apis/vc/v1/resource_reservation_list | 查询会议室预定数据
  required markdownOnly: (none)
  required explorerOnly: vc:rooms.room.detailinfo:read
- GET /open-apis/vc/v1/room_levels | 查询会议室层级列表
  required markdownOnly: (none)
  required explorerOnly: vc:rooms.roomlevel:read
- GET /open-apis/vc/v1/room_levels/:room_level_id | 查询会议室层级详情
  required markdownOnly: (none)
  required explorerOnly: vc:rooms.roomlevel:read
- GET /open-apis/vc/v1/room_levels/search | 搜索会议室层级
  required markdownOnly: (none)
  required explorerOnly: vc:rooms.roomlevel:read
- GET /open-apis/vc/v1/rooms | 查询会议室列表
  required markdownOnly: (none)
  required explorerOnly: vc:rooms.room.basicinfo:read
- GET /open-apis/vc/v1/rooms/:room_id | 查询会议室详情
  required markdownOnly: (none)
  required explorerOnly: vc:rooms.room.basicinfo:read
- GET /open-apis/vc/v1/scope_config | 查询会议室配置
  required markdownOnly: (none)
  required explorerOnly: vc:rooms.room.basicinfo:read
- PATCH /open-apis/corehr/v1/employments/:employment_id | 更新雇佣信息
  required markdownOnly: (none)
  required explorerOnly: corehr:employment.patch:write
- PATCH /open-apis/okr/v1/periods/:period_id | 修改 OKR 周期状态
  required markdownOnly: (none)
  required explorerOnly: okr:okr.period:writeonly
- PATCH /open-apis/search/v2/data_sources/:data_source_id | 修改数据源
  required markdownOnly: (none)
  required explorerOnly: search:data_source:update
- PATCH /open-apis/search/v2/schemas/:schema_id | 修改数据范式
  required markdownOnly: (none)
  required explorerOnly: search:data_schemas:update
- PATCH /open-apis/sheets/v3/spreadsheets/:spreadsheet_token | 修改电子表格属性
  required markdownOnly: (none)
  required explorerOnly: sheets:spreadsheet.meta:write_only
- PATCH /open-apis/sheets/v3/spreadsheets/:spreadsheet_token/sheets/:sheet_id/filter_views/:filter_view_id | 更新筛选视图
  required markdownOnly: (none)
  required explorerOnly: sheets:spreadsheet:write_only
- PATCH /open-apis/task/v1/tasks/:task_id | 更新任务
  required markdownOnly: (none)
  required explorerOnly: task:task:writeonly
- PATCH /open-apis/task/v2/comments/:comment_id | 更新评论
  required markdownOnly: (none)
  required explorerOnly: task:comment:writeonly
- PATCH /open-apis/task/v2/custom_fields/:custom_field_guid | 更新自定义字段
  required markdownOnly: (none)
  required explorerOnly: task:custom_field:writeonly
- PATCH /open-apis/task/v2/custom_fields/:custom_field_guid/options/:option_guid | 更新自定义字段选项
  required markdownOnly: (none)
  required explorerOnly: task:custom_field:writeonly
- PATCH /open-apis/task/v2/tasklists/:tasklist_guid | 更新清单
  required markdownOnly: (none)
  required explorerOnly: task:tasklist:writeonly
- PATCH /open-apis/task/v2/tasklists/:tasklist_guid/activity_subscriptions/:activity_subscription_guid | 更新动态订阅
  required markdownOnly: (none)
  required explorerOnly: task:tasklist:writeonly
- PATCH /open-apis/vc/v1/meetings/:meeting_id/invite | 邀请参会人
  required markdownOnly: (none)
  required explorerOnly: vc:meeting.participant:write
- PATCH /open-apis/vc/v1/meetings/:meeting_id/set_host | 设置主持人
  required markdownOnly: (none)
  required explorerOnly: vc:meeting.participant:write
- PATCH /open-apis/vc/v1/reserve_configs/:reserve_config_id | 更新会议室预定限制
  required markdownOnly: (none)
  required explorerOnly: vc:rooms.room:update
- PATCH /open-apis/vc/v1/reserve_configs/:reserve_config_id/admin | 更新会议室预定管理员
  required markdownOnly: (none)
  required explorerOnly: vc:rooms.room:update
- PATCH /open-apis/vc/v1/reserve_configs/:reserve_config_id/disable_inform | 更新禁用状态变更通知
  required markdownOnly: (none)
  required explorerOnly: vc:rooms.room:update
- PATCH /open-apis/vc/v1/reserve_configs/:reserve_config_id/form | 更新会议室预定表单
  required markdownOnly: (none)
  required explorerOnly: vc:rooms.room:update
- PATCH /open-apis/vc/v1/room_levels/:room_level_id | 更新会议室层级
  required markdownOnly: (none)
  required explorerOnly: vc:rooms.roomlevel:update
- PATCH /open-apis/vc/v1/rooms/:room_id | 更新会议室
  required markdownOnly: (none)
  required explorerOnly: vc:rooms.room:update
- POST /open-apis/apaas/v1/approval_instances/:approval_instance_id/cancel | 撤销人工任务
  required markdownOnly: (none)
  required explorerOnly: app_engine:approval:write
- POST /open-apis/apaas/v1/approval_tasks/:approval_task_id/add_assignee | 人工任务加签
  required markdownOnly: (none)
  required explorerOnly: app_engine:approval:write
- POST /open-apis/apaas/v1/approval_tasks/:approval_task_id/agree | 同意人工任务
  required markdownOnly: (none)
  required explorerOnly: app_engine:approval:write
- POST /open-apis/apaas/v1/approval_tasks/:approval_task_id/reject | 拒绝人工任务
  required markdownOnly: (none)
  required explorerOnly: app_engine:approval:write
- POST /open-apis/apaas/v1/approval_tasks/:approval_task_id/transfer | 转交人工任务
  required markdownOnly: (none)
  required explorerOnly: app_engine:approval:write
- POST /open-apis/apaas/v1/user_task/query | 查询人工任务
  required markdownOnly: (none)
  required explorerOnly: app_engine:approval:read
- POST /open-apis/apaas/v1/user_tasks/:task_id/cc | 抄送人工任务
  required markdownOnly: (none)
  required explorerOnly: app_engine:approval:write
- POST /open-apis/apaas/v1/user_tasks/:task_id/chat_group | 基于人工任务发起群聊
  required markdownOnly: (none)
  required explorerOnly: app_engine:approval:write
- POST /open-apis/apaas/v1/user_tasks/:task_id/expediting | 催办人工任务
  required markdownOnly: (none)
  required explorerOnly: app_engine:approval:write
- POST /open-apis/apaas/v1/user_tasks/:task_id/rollback | 退回人工任务
  required markdownOnly: (none)
  required explorerOnly: app_engine:approval:write
- POST /open-apis/apaas/v1/user_tasks/:task_id/rollback_points | 查询人工任务可退回的位置
  required markdownOnly: (none)
  required explorerOnly: app_engine:approval:read
- POST /open-apis/approval/v4/instances/add_sign | 审批任务加签
  required markdownOnly: (none)
  required explorerOnly: approval:approval, approval:task
- POST /open-apis/approval/v4/instances/preview | 预览审批流程
  required markdownOnly: (none)
  required explorerOnly: approval:approval, approval:instance
- POST /open-apis/attendance/v1/archive_rule/upload_report | 写入归档报表结果
  token markdownOnly: user_access_token
  token explorerOnly: (none)
- POST /open-apis/auth/v3/app_access_token | 商店应用获取 app_access_token
  token markdownOnly: app_access_token
  token explorerOnly: (none)
- POST /open-apis/auth/v3/app_access_token/internal | 自建应用获取 app_access_token
  token markdownOnly: app_access_token
  token explorerOnly: (none)
- POST /open-apis/auth/v3/tenant_access_token | 商店应用获取 tenant_access_token
  token markdownOnly: app_access_token, tenant_access_token
  token explorerOnly: (none)
- POST /open-apis/auth/v3/tenant_access_token/internal | 自建应用获取 tenant_access_token
  token markdownOnly: tenant_access_token
  token explorerOnly: (none)
- POST /open-apis/calendar/v4/calendars/:calendar_id/events/:event_id/attendees/batch_delete | 删除日程参与人
  required markdownOnly: (none)
  required explorerOnly: calendar:calendar.event:writeonly
- POST /open-apis/calendar/v4/calendars/mget | 批量查询日历信息
  required markdownOnly: (none)
  required explorerOnly: calendar:calendar.calendar:readonly
- POST /open-apis/calendar/v4/calendars/primary | 查询主日历信息
  required markdownOnly: (none)
  required explorerOnly: calendar:calendar.calendar:readonly
- POST /open-apis/calendar/v4/calendars/primarys | 批量获取主日历信息
  required markdownOnly: (none)
  required explorerOnly: calendar:calendar.calendar:readonly
- POST /open-apis/calendar/v4/settings/generate_caldav_conf | 生成 CalDAV 配置
  required markdownOnly: (none)
  required explorerOnly: calendar:setting:generate_caldav_conf
- POST /open-apis/corehr/v2/employees/additional_jobs/batch | 批量查询兼职信息
  required markdownOnly: (none)
  required explorerOnly: corehr:additional_job:write
- POST /open-apis/drive/v1/medias/upload_all | 上传素材
  required markdownOnly: (none)
  required explorerOnly: moments:moments, vc:material
- POST /open-apis/drive/v1/medias/upload_finish | 分片上传素材-完成上传
  required markdownOnly: (none)
  required explorerOnly: moments:moments, vc:material
- POST /open-apis/drive/v1/medias/upload_part | 分片上传素材-上传分片
  required markdownOnly: (none)
  required explorerOnly: moments:moments, vc:material
- POST /open-apis/drive/v1/medias/upload_prepare | 分片上传素材-预上传
  required markdownOnly: (none)
  required explorerOnly: moments:moments, vc:material
- POST /open-apis/im/v1/chats | 创建群
  required markdownOnly: (none)
  required explorerOnly: im:chat:create_by_user
  token markdownOnly: (none)
  token explorerOnly: user_access_token
- POST /open-apis/okr/v1/periods | 创建 OKR 周期
  required markdownOnly: (none)
  required explorerOnly: okr:okr.period:writeonly
- POST /open-apis/performance/v1/stage_tasks/find_by_page | 获取周期任务（全部用户）
  required markdownOnly: (none)
  required explorerOnly: performance:semester:read
- POST /open-apis/performance/v1/stage_tasks/find_by_user_list | 获取周期任务（指定用户）
  required markdownOnly: (none)
  required explorerOnly: performance:semester:read
- POST /open-apis/search/v2/data_sources | 创建数据源
  required markdownOnly: (none)
  required explorerOnly: search:data_source:create
- POST /open-apis/search/v2/data_sources/:data_source_id/items | 为指定数据项创建索引
  required markdownOnly: (none)
  required explorerOnly: search:data_item:create
- POST /open-apis/search/v2/schemas | 创建数据范式
  required markdownOnly: (none)
  required explorerOnly: search:data_schemas:create
- POST /open-apis/sheets/v3/spreadsheets/:spreadsheet_token/sheets/:sheet_id/filter | 创建筛选
  required markdownOnly: (none)
  required explorerOnly: sheets:spreadsheet:write_only
- POST /open-apis/sheets/v3/spreadsheets/:spreadsheet_token/sheets/:sheet_id/filter_views | 创建筛选视图
  required markdownOnly: (none)
  required explorerOnly: sheets:spreadsheet:write_only
- POST /open-apis/sheets/v3/spreadsheets/:spreadsheet_token/sheets/:sheet_id/filter_views/:filter_view_id/conditions | 创建筛选条件
  required markdownOnly: (none)
  required explorerOnly: sheets:spreadsheet:write_only
- POST /open-apis/sheets/v3/spreadsheets/:spreadsheet_token/sheets/:sheet_id/find | 查找单元格
  required markdownOnly: (none)
  required explorerOnly: sheets:spreadsheet:read
- POST /open-apis/sheets/v3/spreadsheets/:spreadsheet_token/sheets/:sheet_id/move_dimension | 移动行列
  required markdownOnly: (none)
  required explorerOnly: sheets:spreadsheet:write_only
- POST /open-apis/sheets/v3/spreadsheets/:spreadsheet_token/sheets/:sheet_id/replace | 替换单元格
  required markdownOnly: (none)
  required explorerOnly: sheets:spreadsheet:write_only
- POST /open-apis/task/v1/tasks | 创建任务
  required markdownOnly: (none)
  required explorerOnly: task:task:writeonly
- POST /open-apis/task/v1/tasks/:task_id/batch_delete_collaborator | 批量删除执行者
  required markdownOnly: (none)
  required explorerOnly: task:personnel:writeonly
- POST /open-apis/task/v1/tasks/:task_id/collaborators | 新增执行者
  required markdownOnly: (none)
  required explorerOnly: task:personnel:writeonly
- POST /open-apis/task/v2/attachments/upload | 上传附件
  required markdownOnly: (none)
  required explorerOnly: task:attachment:upload
- POST /open-apis/task/v2/comments | 创建评论
  required markdownOnly: (none)
  required explorerOnly: task:comment:writeonly
- POST /open-apis/task/v2/custom_fields | 创建自定义字段
  required markdownOnly: (none)
  required explorerOnly: task:custom_field:writeonly
- POST /open-apis/task/v2/custom_fields/:custom_field_guid/options | 创建自定义任务选项
  required markdownOnly: (none)
  required explorerOnly: task:custom_field:writeonly
- POST /open-apis/task/v2/custom_fields/:custom_field_guid/remove | 将自定义字段移出资源
  required markdownOnly: (none)
  required explorerOnly: task:custom_field:writeonly
- POST /open-apis/task/v2/sections | 创建自定义分组
  required markdownOnly: (none)
  required explorerOnly: task:section:writeonly
- POST /open-apis/task/v2/tasklists | 创建清单
  required markdownOnly: (none)
  required explorerOnly: task:tasklist:writeonly
- POST /open-apis/task/v2/tasklists/:tasklist_guid/activity_subscriptions | 创建动态订阅
  required markdownOnly: (none)
  required explorerOnly: task:tasklist:writeonly
- POST /open-apis/task/v2/tasklists/:tasklist_guid/add_members | 添加清单成员
  required markdownOnly: (none)
  required explorerOnly: task:tasklist:writeonly
- POST /open-apis/task/v2/tasklists/:tasklist_guid/remove_members | 移除清单成员
  required markdownOnly: (none)
  required explorerOnly: task:tasklist:writeonly
- POST /open-apis/task/v2/tasks/:task_guid/add_dependencies | 添加依赖
  required markdownOnly: (none)
  required explorerOnly: task:task:writeonly
- POST /open-apis/task/v2/tasks/:task_guid/add_reminders | 添加任务提醒
  required markdownOnly: (none)
  required explorerOnly: task:task:writeonly
- POST /open-apis/task/v2/tasks/:task_guid/remove_dependencies | 移除依赖
  required markdownOnly: (none)
  required explorerOnly: task:task:writeonly
- POST /open-apis/task/v2/tasks/:task_guid/remove_members | 移除任务成员
  required markdownOnly: (none)
  required explorerOnly: task:personnel:writeonly
- POST /open-apis/task/v2/tasks/:task_guid/remove_reminders | 移除任务提醒
  required markdownOnly: (none)
  required explorerOnly: task:task:writeonly
- POST /open-apis/task/v2/tasks/:task_guid/remove_tasklist | 任务移出清单
  required markdownOnly: (none)
  required explorerOnly: task:task:writeonly
- POST /open-apis/task/v2/tasks/:task_guid/subtasks | 创建子任务
  required markdownOnly: (none)
  required explorerOnly: task:task:writeonly
- POST /open-apis/vc/v1/exports/meeting_list | 导出会议明细
  required markdownOnly: (none)
  required explorerOnly: vc:meeting:export
- POST /open-apis/vc/v1/exports/participant_list | 导出参会人明细
  required markdownOnly: (none)
  required explorerOnly: vc:meeting:export
- POST /open-apis/vc/v1/exports/participant_quality_list | 导出参会人会议质量数据
  required markdownOnly: (none)
  required explorerOnly: vc:meeting:export
- POST /open-apis/vc/v1/exports/resource_reservation_list | 导出会议室预定数据
  required markdownOnly: (none)
  required explorerOnly: vc:meeting:export
- POST /open-apis/vc/v1/meetings/:meeting_id/kickout | 移除参会人
  required markdownOnly: (none)
  required explorerOnly: vc:meeting.participant:write
- POST /open-apis/vc/v1/room_levels | 创建会议室层级
  required markdownOnly: (none)
  required explorerOnly: vc:rooms.roomlevel:create
- POST /open-apis/vc/v1/room_levels/del | 删除会议室层级
  required markdownOnly: (none)
  required explorerOnly: vc:rooms.roomlevel:delete
- POST /open-apis/vc/v1/room_levels/mget | 批量查询会议室层级详情
  required markdownOnly: (none)
  required explorerOnly: vc:rooms.roomlevel:read
- POST /open-apis/vc/v1/rooms | 创建会议室
  required markdownOnly: (none)
  required explorerOnly: vc:rooms.room:create
- POST /open-apis/vc/v1/rooms/mget | 批量查询会议室详情
  required markdownOnly: (none)
  required explorerOnly: vc:rooms.room.basicinfo:read
- POST /open-apis/vc/v1/rooms/search | 搜索会议室
  required markdownOnly: (none)
  required explorerOnly: vc:rooms.room.basicinfo:read
- POST /open-apis/vc/v1/scope_config | 设置会议室配置
  required markdownOnly: (none)
  required explorerOnly: vc:rooms.room:update
- POST /open-apis/wiki/v1/nodes/search | 搜索 Wiki
  required markdownOnly: (none)
  required explorerOnly: search:docs:read, wiki:wiki, wiki:wiki:readonly
- PUT /open-apis/sheets/v3/spreadsheets/:spreadsheet_token/sheets/:sheet_id/filter | 更新筛选
  required markdownOnly: (none)
  required explorerOnly: sheets:spreadsheet:write_only
- PUT /open-apis/sheets/v3/spreadsheets/:spreadsheet_token/sheets/:sheet_id/filter_views/:filter_view_id/conditions/:condition_id | 更新筛选条件
  required markdownOnly: (none)
  required explorerOnly: sheets:spreadsheet:write_only

