# Feishu API Required Scope Index

- APIs: 1432
- APIs with required scopes: 1421
- Distinct required scope names: 662

- DELETE /open-apis/acs/v1/rule_external | 删除权限组
  required: acs:device:write, acs:users
  tokens: user_access_token
- DELETE /open-apis/acs/v1/visitors/:visitor_id | 删除访客
  required: acs:users
  tokens: user_access_token
- DELETE /open-apis/admin/v1/badges/:badge_id/grants/:grant_id | 删除授予名单
  required: admin:badge.grant
  tokens: tenant_access_token
- DELETE /open-apis/aily/v1/apps/:app_id/data_assets/:data_asset_id | 删除数据知识
  required: aily:data_asset:write
  tokens: tenant_access_token, user_access_token
- DELETE /open-apis/aily/v1/sessions/:aily_session_id | 删除会话
  required: aily:session:write
  tokens: tenant_access_token, user_access_token
- DELETE /open-apis/apaas/v1/applications/:namespace/objects/:object_api_name/records/:id | 删除记录
  required: app_engine:object.record:write
  tokens: tenant_access_token
- DELETE /open-apis/apaas/v1/applications/:namespace/objects/:object_api_name/records/batch_delete | 批量删除记录
  required: app_engine:object.record:write
  tokens: tenant_access_token
- DELETE /open-apis/apaas/v1/workspaces/:workspace_id/tables/:table_name/records | 删除数据表中的记录
  required: app_engine:workspace.table.record:write
  tokens: user_access_token
- DELETE /open-apis/approval/v4/instances/:instance_id/comments/:comment_id | 删除评论
  required: approval:approval, approval:instance.comment
  tokens: tenant_access_token
- DELETE /open-apis/attendance/v1/groups/:group_id | 删除考勤组
  required: attendance:rule
  tokens: tenant_access_token
- DELETE /open-apis/attendance/v1/shifts/:shift_id | 删除班次
  required: attendance:rule
  tokens: tenant_access_token
- DELETE /open-apis/bitable/v1/apps/:app_token/roles/:role_id | 删除自定义角色
  required: base:role:delete, bitable:app
  tokens: tenant_access_token, user_access_token
- DELETE /open-apis/bitable/v1/apps/:app_token/roles/:role_id/members/:member_id | 删除协作者
  required: base:collaborator:delete, bitable:app
  tokens: tenant_access_token, user_access_token
- DELETE /open-apis/bitable/v1/apps/:app_token/tables/:table_id | 删除一个数据表
  required: base:table:delete, bitable:app
  tokens: tenant_access_token, user_access_token
- DELETE /open-apis/bitable/v1/apps/:app_token/tables/:table_id/fields/:field_id | 删除字段
  required: base:field:delete, bitable:app
  tokens: tenant_access_token, user_access_token
- DELETE /open-apis/bitable/v1/apps/:app_token/tables/:table_id/records/:record_id | 删除记录
  required: base:record:delete, bitable:app
  tokens: tenant_access_token, user_access_token
- DELETE /open-apis/bitable/v1/apps/:app_token/tables/:table_id/views/:view_id | 删除视图
  required: base:view:write_only, bitable:app
  tokens: tenant_access_token, user_access_token
- DELETE /open-apis/calendar/v4/calendars/:calendar_id | 删除共享日历
  required: calendar:calendar, calendar:calendar:delete
  tokens: tenant_access_token, user_access_token
- DELETE /open-apis/calendar/v4/calendars/:calendar_id/acls/:acl_id | 删除访问控制
  required: calendar:calendar, calendar:calendar.acl:delete
  tokens: tenant_access_token, user_access_token
- DELETE /open-apis/calendar/v4/calendars/:calendar_id/events/:event_id | 删除日程
  required: calendar:calendar, calendar:calendar.event:delete, calendar:calendar.event:writeonly
  tokens: tenant_access_token, user_access_token
- DELETE /open-apis/calendar/v4/calendars/:calendar_id/events/:event_id/meeting_chat | 解绑会议群
  required: calendar:calendar, calendar:calendar.event:update
  tokens: tenant_access_token, user_access_token
- DELETE /open-apis/calendar/v4/exchange_bindings/:exchange_binding_id | 解除 Exchange 账户绑定
  required: calendar:calendar, calendar:exchange.bindings:delete
  tokens: user_access_token
- DELETE /open-apis/calendar/v4/timeoff_events/:timeoff_event_id | 删除请假日程
  required: calendar:time_off:delete, calendar:timeoff
  tokens: tenant_access_token
- DELETE /open-apis/cardkit/v1/cards/:card_id/elements/:element_id | 删除组件
  required: cardkit:card:write
  tokens: tenant_access_token
- DELETE /open-apis/contact/v3/departments/:department_id | 删除部门
  required: contact:contact
  tokens: tenant_access_token
- DELETE /open-apis/contact/v3/employee_type_enums/:enum_id | 删除人员类型
  required: contact:contact
  tokens: tenant_access_token
- DELETE /open-apis/contact/v3/functional_roles/:role_id | 删除角色
  required: contact:functional_role
  tokens: tenant_access_token
- DELETE /open-apis/contact/v3/group/:group_id | 删除用户组
  required: contact:group
  tokens: tenant_access_token
- DELETE /open-apis/contact/v3/job_families/:job_family_id | 删除序列
  required: contact:contact, contact:job_family
  tokens: tenant_access_token
- DELETE /open-apis/contact/v3/job_levels/:job_level_id | 删除职级
  required: contact:contact, contact:job_level
  tokens: tenant_access_token
- DELETE /open-apis/contact/v3/unit/:unit_id | 删除单位
  required: contact:unit
  tokens: tenant_access_token
- DELETE /open-apis/contact/v3/users/:user_id | 删除用户
  required: contact:contact
  tokens: tenant_access_token
- DELETE /open-apis/corehr/v1/companies/:company_id | 删除公司
  required: corehr:corehr
  tokens: tenant_access_token
- DELETE /open-apis/corehr/v1/contracts/:contract_id | 删除合同
  required: corehr:corehr
  tokens: tenant_access_token
- DELETE /open-apis/corehr/v1/departments/:department_id | 删除部门
  required: corehr:corehr, corehr:department:write
  tokens: tenant_access_token
- DELETE /open-apis/corehr/v1/employee_types/:employee_type_id | 删除人员类型
  required: corehr:common_data.preset_data:write, corehr:corehr
  tokens: tenant_access_token
- DELETE /open-apis/corehr/v1/employments/:employment_id | 删除雇佣信息
  required: corehr:corehr, corehr:employment:write
  tokens: tenant_access_token
- DELETE /open-apis/corehr/v1/job_datas/:job_data_id | 删除任职信息
  required: corehr:corehr, corehr:job_data:write
  tokens: tenant_access_token
- DELETE /open-apis/corehr/v1/job_families/:job_family_id | 删除序列
  required: corehr:corehr, corehr:job_family:write
  tokens: tenant_access_token
- DELETE /open-apis/corehr/v1/job_levels/:job_level_id | 删除职级
  required: corehr:corehr, corehr:job_level:write
  tokens: tenant_access_token
- DELETE /open-apis/corehr/v1/jobs/:job_id | 删除职务
  required: corehr:corehr, corehr:job:write
  tokens: tenant_access_token
- DELETE /open-apis/corehr/v1/leave_granting_records/:leave_granting_record_id | 删除假期发放记录
  required: corehr:corehr, corehr:leave_granting_record:write
  tokens: tenant_access_token
- DELETE /open-apis/corehr/v1/locations/:location_id | 删除地点
  required: corehr:corehr, corehr:locations:write
  tokens: tenant_access_token
- DELETE /open-apis/corehr/v1/national_id_types/:national_id_type_id | 删除国家证件类型
  required: corehr:common_data.preset_data:write, corehr:corehr
  tokens: tenant_access_token
- DELETE /open-apis/corehr/v1/persons/:person_id | 删除个人信息
  required: corehr:corehr, corehr:person:write
  tokens: tenant_access_token
- DELETE /open-apis/corehr/v1/pre_hires/:pre_hire_id | 删除待入职（不推荐）
  required: corehr:corehr, corehr:pre_hire:write
  tokens: tenant_access_token
- DELETE /open-apis/corehr/v1/working_hours_types/:working_hours_type_id | 删除工时制度
  required: corehr:common_data.preset_data:write, corehr:corehr
  tokens: tenant_access_token
- DELETE /open-apis/corehr/v2/cost_centers/:cost_center_id | 删除成本中心
  required: corehr:cost_center:write
  tokens: tenant_access_token
- DELETE /open-apis/corehr/v2/cost_centers/:cost_center_id/versions/:version_id | 撤销成本中心版本
  required: corehr:cost_center:write
  tokens: tenant_access_token
- DELETE /open-apis/corehr/v2/departments/:department_id | 删除部门 V2
  required: corehr:corehr, corehr:department:write
  tokens: tenant_access_token
- DELETE /open-apis/corehr/v2/employees/additional_jobs/:additional_job_id | 删除兼职
  required: corehr:additional_job:write
  tokens: tenant_access_token
- DELETE /open-apis/corehr/v2/employees/international_assignments/:international_assignment_id | 删除外派信息
  required: corehr:employees.international_assignment:write
  tokens: tenant_access_token
- DELETE /open-apis/corehr/v2/job_grades/:job_grade_id | 删除职等
  required: corehr:job_grade:write
  tokens: tenant_access_token
- DELETE /open-apis/corehr/v2/locations/:location_id/addresses/:address_id | 删除地点地址
  required: corehr:locations:write
  tokens: tenant_access_token
- DELETE /open-apis/corehr/v2/pathways/:pathway_id | 删除通道
  required: corehr:pathway:write
  tokens: tenant_access_token
- DELETE /open-apis/corehr/v2/pre_hires/:pre_hire_id | 删除待入职信息
  required: corehr:pre_hire:delete
  tokens: tenant_access_token
- DELETE /open-apis/corehr/v2/probation/assessments/:assessment_id | 删除试用期考核信息
  required: corehr:probation.assessment:write
  tokens: tenant_access_token
- DELETE /open-apis/directory/v1/collaboration_rules/:collaboration_rule_id | 删除可搜可见规则
  required: trust_party:collaboration_rule:write
  tokens: tenant_access_token, user_access_token
- DELETE /open-apis/directory/v1/departments/:department_id | 删除部门
  required: directory:department.delete:write, directory:department:write
  tokens: tenant_access_token, user_access_token
- DELETE /open-apis/directory/v1/employees/:employee_id | 离职员工
  required: directory:employee.resign:write, directory:employee:write
  tokens: tenant_access_token, user_access_token
- DELETE /open-apis/docx/v1/chats/:chat_id/announcement/blocks/:block_id/children/batch_delete | 删除群公告中的块
  required: im:chat.announcement:write_only
  tokens: tenant_access_token, user_access_token
- DELETE /open-apis/docx/v1/documents/:document_id/blocks/:block_id/children/batch_delete | 删除块
  required: docx:document, docx:document:write_only
  tokens: tenant_access_token, user_access_token
- DELETE /open-apis/drive/v1/files/:file_token | 删除文件或文件夹
  required: drive:drive, space:document:delete
  tokens: tenant_access_token, user_access_token
- DELETE /open-apis/drive/v1/files/:file_token/versions/:version_id | 删除文档版本
  required: drive:drive:version
  tokens: tenant_access_token, user_access_token
- DELETE /open-apis/drive/v1/permissions/:token/members/:member_id | 移除云文档协作者权限
  required: bitable:app, bitable:bitable, docs:doc, docs:permission.member:delete, drive:drive, drive:file, sheets:spreadsheet, wiki:wiki
  tokens: tenant_access_token, user_access_token
- DELETE /open-apis/drive/v1/permissions/:token/public/password | 停用云文档密码
  required: bitable:bitable, docs:doc, docs:permission.setting:write_only, drive:drive, sheets:spreadsheet, wiki:wiki
  tokens: tenant_access_token, user_access_token
- DELETE /open-apis/drive/v1/user/remove_subscription | 取消用户云文档事件订阅
  required: docs:event:subscribe
  tokens: tenant_access_token, user_access_token
- DELETE /open-apis/helpdesk/v1/agent_skills/:agent_skill_id | 删除客服技能
  required: helpdesk:all
  tokens: user_access_token
- DELETE /open-apis/helpdesk/v1/agents/:agent_id/schedules | 删除客服工作日程
  required: helpdesk:all
  tokens: user_access_token
- DELETE /open-apis/helpdesk/v1/categories/:id | 删除知识库分类详情
  required: helpdesk:all
  tokens: user_access_token
- DELETE /open-apis/helpdesk/v1/faqs/:id | 删除知识库
  required: helpdesk:all
  tokens: user_access_token
- DELETE /open-apis/helpdesk/v1/ticket_customized_fields/:ticket_customized_field_id | 删除工单自定义字段
  required: helpdesk:all
  tokens: user_access_token
- DELETE /open-apis/hire/v1/external_applications/:external_application_id | 删除外部投递
  required: hire:external_application
  tokens: tenant_access_token
- DELETE /open-apis/hire/v1/external_background_checks/:external_background_check_id | 删除外部背调
  required: hire:external_application
  tokens: tenant_access_token
- DELETE /open-apis/hire/v1/external_interviews/:external_interview_id | 删除外部面试
  required: hire:external_application
  tokens: tenant_access_token
- DELETE /open-apis/hire/v1/external_offers/:external_offer_id | 删除外部 Offer
  required: hire:external_offer
  tokens: tenant_access_token
- DELETE /open-apis/hire/v1/external_referral_rewards/:external_referral_reward_id | 删除外部内推奖励
  required: hire:external_referral_reward
  tokens: tenant_access_token
- DELETE /open-apis/hire/v1/job_requirements/:job_requirement_id | 删除招聘需求
  required: hire:job_requirement
  tokens: tenant_access_token
- DELETE /open-apis/hire/v1/notes/:note_id | 删除备注
  required: hire:note
  tokens: tenant_access_token
- DELETE /open-apis/hire/v1/tripartite_agreements/:tripartite_agreement_id | 删除三方协议
  required: hire:tripartite_agreement
  tokens: tenant_access_token
- DELETE /open-apis/hire/v1/websites/:website_id/channels/:channel_id | 删除招聘官网推广渠道
  required: hire:site
  tokens: tenant_access_token
- DELETE /open-apis/im/v1/batch_messages/:batch_message_id | 批量撤回消息
  required: im:message:send_multi_depts, im:message:send_multi_users
  tokens: tenant_access_token
- DELETE /open-apis/im/v1/chats/:chat_id | 解散群
  required: im:chat, im:chat:delete
  tokens: tenant_access_token, user_access_token
- DELETE /open-apis/im/v1/chats/:chat_id/chat_tabs/delete_tabs | 删除会话标签页
  required: im:chat, im:chat.tabs:write_only
  tokens: tenant_access_token, user_access_token
- DELETE /open-apis/im/v1/chats/:chat_id/members | 将用户或机器人移出群聊
  required: im:chat, im:chat.members:write_only
  tokens: tenant_access_token, user_access_token
- DELETE /open-apis/im/v1/chats/:chat_id/menu_tree | 删除群菜单
  required: im:chat, im:chat.menu_tree:write_only
  tokens: tenant_access_token
- DELETE /open-apis/im/v1/messages/:message_id | 撤回消息
  required: im:message, im:message:recall, im:message:send_as_bot
  tokens: tenant_access_token, user_access_token
- DELETE /open-apis/im/v1/messages/:message_id/reactions/:reaction_id | 删除消息表情回复
  required: im:message, im:message.reactions:write_only
  tokens: tenant_access_token, user_access_token
- DELETE /open-apis/im/v1/pins/:message_id | 移除 Pin 消息
  required: im:message, im:message.pins:write_only, im:message:send_as_bot
  tokens: tenant_access_token, user_access_token
- DELETE /open-apis/im/v2/app_feed_card/batch | 删除应用消息流卡片
  required: im:app_feed_card:write
  tokens: tenant_access_token
- DELETE /open-apis/lingo/v1/entities/:entity_id | 删除免审词条
  required: baike:entity:exempt_delete
  tokens: tenant_access_token
- DELETE /open-apis/mail/v1/mailgroups/:mailgroup_id | 删除邮件组
  required: mail:mailgroup
  tokens: tenant_access_token
- DELETE /open-apis/mail/v1/mailgroups/:mailgroup_id/aliases/:alias_id | 删除邮件组别名
  required: mail:mailgroup
  tokens: tenant_access_token
- DELETE /open-apis/mail/v1/mailgroups/:mailgroup_id/members/:member_id | 删除邮件组成员
  required: mail:mailgroup
  tokens: tenant_access_token
- DELETE /open-apis/mail/v1/mailgroups/:mailgroup_id/members/batch_delete | 批量删除邮件组成员
  required: mail:mailgroup
  tokens: tenant_access_token
- DELETE /open-apis/mail/v1/mailgroups/:mailgroup_id/permission_members/:permission_member_id | 删除邮件组权限成员
  required: mail:mailgroup
  tokens: tenant_access_token
- DELETE /open-apis/mail/v1/mailgroups/:mailgroup_id/permission_members/batch_delete | 批量删除邮件组权限成员
  required: mail:mailgroup
  tokens: tenant_access_token
- DELETE /open-apis/mail/v1/public_mailboxes/:public_mailbox_id | 永久删除公共邮箱
  required: mail:public_mailbox
  tokens: tenant_access_token
- DELETE /open-apis/mail/v1/public_mailboxes/:public_mailbox_id/aliases/:alias_id | 删除公共邮箱别名
  required: mail:public_mailbox
  tokens: tenant_access_token
- DELETE /open-apis/mail/v1/public_mailboxes/:public_mailbox_id/members/:member_id | 删除公共邮箱单个成员
  required: mail:public_mailbox
  tokens: tenant_access_token
- DELETE /open-apis/mail/v1/public_mailboxes/:public_mailbox_id/members/batch_delete | 批量删除公共邮箱成员
  required: mail:public_mailbox
  tokens: tenant_access_token
- DELETE /open-apis/mail/v1/public_mailboxes/:public_mailbox_id/remove_to_recycle_bin | 将公共邮箱移至回收站
  required: mail:public_mailbox
  tokens: tenant_access_token
- DELETE /open-apis/mail/v1/user_mailboxes/:user_mailbox_id | 从回收站删除用户邮箱地址
  required: mail:user_mailbox
  tokens: tenant_access_token
- DELETE /open-apis/mail/v1/user_mailboxes/:user_mailbox_id/aliases/:alias_id | 删除用户邮箱别名
  required: mail:user_mailbox
  tokens: tenant_access_token
- DELETE /open-apis/mail/v1/user_mailboxes/:user_mailbox_id/folders/:folder_id | 删除邮箱文件夹
  required: mail:user_mailbox.folder:write
  tokens: tenant_access_token, user_access_token
- DELETE /open-apis/mail/v1/user_mailboxes/:user_mailbox_id/mail_contacts/:mail_contact_id | 删除邮箱联系人
  required: mail:user_mailbox.mail_contact:write
  tokens: tenant_access_token, user_access_token
- DELETE /open-apis/mail/v1/user_mailboxes/:user_mailbox_id/rules/:rule_id | 删除收信规则
  required: mail:user_mailbox.rule:write
  tokens: tenant_access_token, user_access_token
- DELETE /open-apis/okr/v1/progress_records/:progress_id | 删除 OKR 进展记录
  required: okr:okr, okr:okr.progress:delete
  tokens: tenant_access_token, user_access_token
- DELETE /open-apis/performance/v2/additional_informations/batch | 批量删除补充信息
  required: performance:performance, performance:semester_activity:write
  tokens: tenant_access_token
- DELETE /open-apis/personal_settings/v1/system_statuses/:system_status_id | 删除系统状态
  required: personal_settings:status:system_status_update
  tokens: tenant_access_token
- DELETE /open-apis/search/v2/data_sources/:data_source_id | 删除数据源
  required: search:data_source, search:data_source:delete
  tokens: tenant_access_token
- DELETE /open-apis/search/v2/data_sources/:data_source_id/items/:item_id | 删除数据项
  required: search:data_item:delete, search:data_source
  tokens: tenant_access_token
- DELETE /open-apis/search/v2/schemas/:schema_id | 删除数据范式
  required: search:data_schemas:delete, search:data_source, search:data_source:readonly
  tokens: tenant_access_token
- DELETE /open-apis/security_and_compliance/v2/device_records/:device_record_id | 删除设备
  required: security_and_compliance:device_record:write
  tokens: tenant_access_token
- DELETE /open-apis/sheets/v3/spreadsheets/:spreadsheet_token/sheets/:sheet_id/filter | 删除筛选
  required: drive:drive, sheets:spreadsheet, sheets:spreadsheet:write_only
  tokens: tenant_access_token, user_access_token
- DELETE /open-apis/sheets/v3/spreadsheets/:spreadsheet_token/sheets/:sheet_id/filter_views/:filter_view_id | 删除筛选视图
  required: drive:drive, sheets:spreadsheet, sheets:spreadsheet:write_only
  tokens: tenant_access_token, user_access_token
- DELETE /open-apis/sheets/v3/spreadsheets/:spreadsheet_token/sheets/:sheet_id/filter_views/:filter_view_id/conditions/:condition_id | 删除筛选条件
  required: drive:drive, sheets:spreadsheet, sheets:spreadsheet:write_only
  tokens: tenant_access_token, user_access_token
- DELETE /open-apis/sheets/v3/spreadsheets/:spreadsheet_token/sheets/:sheet_id/float_images/:float_image_id | 删除浮动图片
  required: drive:drive, sheets:spreadsheet, sheets:spreadsheet:write_only
  tokens: tenant_access_token, user_access_token
- DELETE /open-apis/spark/v1/apps/:app_id/tables/:table_name/records | 删除数据表中的记录
  required: spark:app.table.record:write
  tokens: user_access_token
- DELETE /open-apis/task/v2/attachments/:attachment_guid | 删除附件
  required: task:attachment:delete, task:attachment:write
  tokens: tenant_access_token, user_access_token
- DELETE /open-apis/task/v2/comments/:comment_id | 删除评论
  required: task:comment:delete, task:comment:write
  tokens: tenant_access_token, user_access_token
- DELETE /open-apis/task/v2/sections/:section_guid | 删除自定义分组
  required: task:section:delete, task:section:write
  tokens: tenant_access_token, user_access_token
- DELETE /open-apis/task/v2/tasklists/:tasklist_guid | 删除清单
  required: task:tasklist:delete, task:tasklist:write
  tokens: tenant_access_token, user_access_token
- DELETE /open-apis/task/v2/tasklists/:tasklist_guid/activity_subscriptions/:activity_subscription_guid | 删除动态订阅
  required: task:tasklist:delete, task:tasklist:write
  tokens: tenant_access_token, user_access_token
- DELETE /open-apis/task/v2/tasks/:task_guid | 删除任务
  required: task:task:delete, task:task:write
  tokens: tenant_access_token, user_access_token
- DELETE /open-apis/vc/v1/reserves/:reserve_id | 删除预约
  required: vc:reserve
  tokens: tenant_access_token, user_access_token
- DELETE /open-apis/vc/v1/rooms/:room_id | 删除会议室
  required: vc:room, vc:rooms.room:delete
  tokens: tenant_access_token
- DELETE /open-apis/wiki/v2/spaces/:space_id/members/:member_id | 删除知识空间成员
  required: wiki:member:update, wiki:wiki
  tokens: tenant_access_token, user_access_token
- GET /open-apis/acs/v1/access_records | 获取门禁记录列表
  required: acs:access_record:readonly
  tokens: tenant_access_token
- GET /open-apis/acs/v1/access_records/:access_record_id/access_photo | 下载开门时的人脸识别图片
  required: acs:users
  tokens: tenant_access_token
- GET /open-apis/acs/v1/devices | 获取门禁设备列表
  required: acs:devices:readonly
  tokens: tenant_access_token
- GET /open-apis/acs/v1/rule_external | 获取权限组信息
  required: acs:devices:readonly, acs:users
  tokens: user_access_token
- GET /open-apis/acs/v1/users | 获取用户列表
  required: acs:users
  tokens: tenant_access_token
- GET /open-apis/acs/v1/users/:user_id | 获取单个用户信息
  required: acs:users
  tokens: tenant_access_token
- GET /open-apis/acs/v1/users/:user_id/face | 下载人脸图片
  required: acs:users
  tokens: tenant_access_token
- GET /open-apis/admin/v1/admin_dept_stats | 获取部门维度的用户活跃和功能使用数据
  required: admin:admin_dept_stat:readonly
  tokens: tenant_access_token
- GET /open-apis/admin/v1/admin_user_stats | 获取用户维度的用户活跃和功能使用数据
  required: admin:admin_user_stat:readonly
  tokens: tenant_access_token
- GET /open-apis/admin/v1/audit_infos | 获取行为审计日志数据
  required: admin:audit_info:readonly
  tokens: tenant_access_token
- GET /open-apis/admin/v1/badges | 获取勋章列表
  required: admin:badge
  tokens: tenant_access_token
- GET /open-apis/admin/v1/badges/:badge_id | 获取勋章详情
  required: admin:badge
  tokens: tenant_access_token
- GET /open-apis/admin/v1/badges/:badge_id/grants | 获取授予名单列表
  required: admin:badge.grant
  tokens: tenant_access_token
- GET /open-apis/admin/v1/badges/:badge_id/grants/:grant_id | 获取授予名单详情
  required: admin:badge.grant
  tokens: tenant_access_token
- GET /open-apis/aily/v1/apps/:app_id/data_asset_tags | 获取数据知识分类列表
  required: aily:data_asset:read
  tokens: tenant_access_token, user_access_token
- GET /open-apis/aily/v1/apps/:app_id/data_assets | 查询数据知识列表
  required: aily:data_asset:read
  tokens: tenant_access_token, user_access_token
- GET /open-apis/aily/v1/apps/:app_id/data_assets/:data_asset_id | 获取数据知识
  required: aily:data_asset:read
  tokens: tenant_access_token, user_access_token
- GET /open-apis/aily/v1/apps/:app_id/skills | 查询技能列表
  required: aily:skill:read
  tokens: tenant_access_token, user_access_token
- GET /open-apis/aily/v1/apps/:app_id/skills/:skill_id | 获取技能信息
  required: aily:skill:read
  tokens: tenant_access_token, user_access_token
- GET /open-apis/aily/v1/sessions/:aily_session_id | 获取会话
  required: aily:session:read
  tokens: tenant_access_token, user_access_token
- GET /open-apis/aily/v1/sessions/:aily_session_id/messages | 列出 Aily 消息
  required: aily:message:read
  tokens: tenant_access_token, user_access_token
- GET /open-apis/aily/v1/sessions/:aily_session_id/messages/:aily_message_id | 获取 Aily 消息
  required: aily:message:read
  tokens: tenant_access_token, user_access_token
- GET /open-apis/aily/v1/sessions/:aily_session_id/runs | 列出运行
  required: aily:run:read
  tokens: tenant_access_token, user_access_token
- GET /open-apis/aily/v1/sessions/:aily_session_id/runs/:run_id | 获取运行
  required: aily:run:read
  tokens: tenant_access_token, user_access_token
- GET /open-apis/apaas/v1/applications/:namespace/audit_log | 查询审计日志详情
  required: app_engine:security.audit_log:read
  tokens: user_access_token
- GET /open-apis/apaas/v1/applications/:namespace/audit_log/audit_log_list | 查询审计日志列表
  required: app_engine:security.audit_log:read
  tokens: user_access_token
- GET /open-apis/apaas/v1/applications/:namespace/audit_log/data_change_log_detail | 查询数据变更日志详情
  required: app_engine:security.audit_log:read
  tokens: user_access_token
- GET /open-apis/apaas/v1/applications/:namespace/audit_log/data_change_logs_list | 查询数据变更日志列表
  required: app_engine:security.audit_log:read
  tokens: user_access_token
- GET /open-apis/apaas/v1/applications/:namespace/environment_variables/:environment_variable_api_name | 查询环境变量详情
  required: app_engine:application.environment_variable:read
  tokens: tenant_access_token
- GET /open-apis/apaas/v1/applications/:namespace/roles/:role_api_name/member | 查询角色成员信息
  required: app_engine:role:read
  tokens: tenant_access_token
- GET /open-apis/apaas/v1/apps | 查看应用基本信息
  required: app_engine:apps:read
  tokens: user_access_token
- GET /open-apis/apaas/v1/seat_activities | 查询席位活跃详情
  required: app_engine:seat_activities:read
  tokens: user_access_token
- GET /open-apis/apaas/v1/seat_assignments | 查询席位分配详情
  required: app_engine:seat_assignments:read
  tokens: user_access_token
- GET /open-apis/apaas/v1/workspaces/:workspace_id/enums | 获取工作空间下的自定义枚举列表
  required: app_engine:workspace.table:read, app_engine:workspace.table:write
  tokens: user_access_token
- GET /open-apis/apaas/v1/workspaces/:workspace_id/enums/:enum_name | 获取自定义枚举详细信息
  required: app_engine:workspace.table:read, app_engine:workspace.table:write
  tokens: user_access_token
- GET /open-apis/apaas/v1/workspaces/:workspace_id/tables | 获取工作空间下的数据表列表
  required: app_engine:workspace.table:read, app_engine:workspace.table:write
  tokens: user_access_token
- GET /open-apis/apaas/v1/workspaces/:workspace_id/tables/:table_name | 获取数据表详细信息
  required: app_engine:workspace.table:read, app_engine:workspace.table:write
  tokens: user_access_token
- GET /open-apis/apaas/v1/workspaces/:workspace_id/tables/:table_name/records | 查询数据表数据记录
  required: app_engine:workspace.table.record:read, app_engine:workspace.table.record:write
  tokens: user_access_token
- GET /open-apis/apaas/v1/workspaces/:workspace_id/views/:view_name/records | 查询视图数据记录
  required: app_engine:workspace.table.record:read, app_engine:workspace.table.record:write
  tokens: user_access_token
- GET /open-apis/application/v5/applications/favourite | 获取用户自定义常用的应用
  required: admin:app.info:readonly
  tokens: user_access_token
- GET /open-apis/application/v5/applications/recommend | 获取管理员推荐的应用
  required: admin:app.info:readonly
  tokens: user_access_token
- GET /open-apis/application/v6/app_recommend_rules | 获取当前设置的推荐规则列表
  required: application:app_recommend_rule:readonly
  tokens: tenant_access_token
- GET /open-apis/application/v6/applications | 获取企业安装的应用
  required: admin:app.info:readonly
  tokens: tenant_access_token
- GET /open-apis/application/v6/applications/:app_id | 获取应用信息
  required: admin:app.info:readonly, application:application:self_manage
  tokens: tenant_access_token
- GET /open-apis/application/v6/applications/:app_id/app_versions | 获取应用版本列表
  required: application:application.app_version:readonly, application:application:self_manage
  tokens: tenant_access_token
- GET /open-apis/application/v6/applications/:app_id/app_versions/:version_id | 获取应用版本信息
  required: application:application.app_version:readonly, application:application:self_manage
  tokens: tenant_access_token
- GET /open-apis/application/v6/applications/:app_id/app_versions/:version_id/contacts_range_suggest | 获取应用版本中开发者申请的通讯录权限范围
  required: application:application.app_version:readonly, application:application:self_manage
  tokens: tenant_access_token
- GET /open-apis/application/v6/applications/:app_id/collaborators | 获取应用协作者列表
  required: admin:app.info:readonly, application:application:self_manage
  tokens: tenant_access_token, user_access_token
- GET /open-apis/application/v6/applications/:app_id/contacts_range_configuration | 获取应用通讯录权限范围配置
  required: admin:app.info:readonly
  tokens: tenant_access_token
- GET /open-apis/application/v6/applications/:app_id/feedbacks | 获取应用反馈列表
  required: application:application.feedback.feedback_info
  tokens: tenant_access_token
- GET /open-apis/application/v6/applications/underauditlist | 查看待审核的应用列表
  required: admin:app.info:readonly
  tokens: tenant_access_token
- GET /open-apis/application/v6/scopes | 查询租户授权状态
  required: (none)
  tokens: tenant_access_token
- GET /open-apis/approval/v4/approvals/:approval_id | 查看指定审批定义
  required: approval:approval, approval:approval:readonly, approval:definition
  tokens: tenant_access_token
- GET /open-apis/approval/v4/districts | 查询地理库信息
  required: approval:approval, approval:approval:readonly
  tokens: tenant_access_token, user_access_token
- GET /open-apis/approval/v4/external_approvals/:approval_code | 查看指定三方审批定义
  required: approval:approval, approval:external_approval
  tokens: tenant_access_token
- GET /open-apis/approval/v4/external_tasks | 获取三方审批任务状态
  required: approval:approval, approval:approval:readonly, approval:external_task
  tokens: tenant_access_token
- GET /open-apis/approval/v4/instances | 批量获取审批实例 ID
  required: approval:approval, approval:approval:readonly, approval:instance
  tokens: tenant_access_token
- GET /open-apis/approval/v4/instances/:instance_id | 获取单个审批实例详情
  required: approval:approval, approval:approval:readonly, approval:instance
  tokens: tenant_access_token
- GET /open-apis/approval/v4/instances/:instance_id/comments | 获取评论
  required: approval:approval, approval:approval:readonly, approval:instance.comment
  tokens: tenant_access_token
- GET /open-apis/approval/v4/tasks/query | 查询用户的任务列表
  required: approval:approval:readonly, approval:task:list_by_user
  tokens: tenant_access_token, user_access_token
- GET /open-apis/attendance/v1/archive_rule | 查询所有归档规则
  required: attendance:task:readonly
  tokens: tenant_access_token, user_access_token
- GET /open-apis/attendance/v1/files/:file_id/download | 下载用户人脸识别照片
  required: attendance:rule:readonly
  tokens: tenant_access_token
- GET /open-apis/attendance/v1/groups | 查询所有考勤组
  required: attendance:rule, attendance:rule:readonly
  tokens: tenant_access_token
- GET /open-apis/attendance/v1/groups/:group_id | 按 ID 查询考勤组
  required: attendance:rule, attendance:rule:readonly
  tokens: tenant_access_token
- GET /open-apis/attendance/v1/groups/:group_id/list_user | 查询考勤组下所有成员
  required: attendance:rule, attendance:rule:readonly
  tokens: tenant_access_token, user_access_token
- GET /open-apis/attendance/v1/leave_employ_expire_records/:leave_id | 通过过期时间获取发放记录
  required: attendance:rule
  tokens: tenant_access_token
- GET /open-apis/attendance/v1/shifts | 查询所有班次
  required: attendance:rule, attendance:rule:readonly
  tokens: tenant_access_token
- GET /open-apis/attendance/v1/shifts/:shift_id | 按 ID 查询班次
  required: attendance:rule, attendance:rule:readonly
  tokens: tenant_access_token
- GET /open-apis/attendance/v1/user_flows/:user_flow_id | 查询打卡流水
  required: attendance:task, attendance:task:readonly
  tokens: tenant_access_token
- GET /open-apis/attendance/v1/user_settings/query | 批量查询用户人脸识别信息
  required: attendance:rule:readonly
  tokens: tenant_access_token
- GET /open-apis/authen/v1/user_info | 获取用户信息
  required: (none)
  tokens: user_access_token
- GET /open-apis/baike/v1/classifications | 获取词典分类
  required: baike:entity, baike:entity:exempt_review, baike:entity:readonly
  tokens: tenant_access_token, user_access_token
- GET /open-apis/baike/v1/entities | 获取词条列表
  required: baike:entity, baike:entity:exempt_review, baike:entity:readonly
  tokens: tenant_access_token, user_access_token
- GET /open-apis/baike/v1/entities/:entity_id | 获取词条详情
  required: baike:entity, baike:entity:exempt_review, baike:entity:readonly
  tokens: tenant_access_token, user_access_token
- GET /open-apis/baike/v1/files/:file_token/download | 下载图片
  required: baike:entity, baike:entity:exempt_review, baike:entity:readonly
  tokens: tenant_access_token, user_access_token
- GET /open-apis/base/v2/apps/:app_token/roles | 列出自定义角色
  required: base:role:read
  tokens: tenant_access_token, user_access_token
- GET /open-apis/bitable/v1/apps/:app_token | 获取多维表格元数据
  required: base:app:read, bitable:app, bitable:app:readonly
  tokens: tenant_access_token, user_access_token
- GET /open-apis/bitable/v1/apps/:app_token/block_workflows | 列出工作流
  required: base:workflow:read, bitable:app
  tokens: tenant_access_token, user_access_token
- GET /open-apis/bitable/v1/apps/:app_token/dashboards | 列出仪表盘
  required: base:dashboard:read, bitable:app, bitable:app:readonly
  tokens: tenant_access_token, user_access_token
- GET /open-apis/bitable/v1/apps/:app_token/roles | 列出自定义角色
  required: base:role:read, bitable:app, bitable:app:readonly
  tokens: tenant_access_token, user_access_token
- GET /open-apis/bitable/v1/apps/:app_token/roles/:role_id/members | 列出协作者
  required: base:collaborator:read, bitable:app, bitable:app:readonly
  tokens: tenant_access_token, user_access_token
- GET /open-apis/bitable/v1/apps/:app_token/tables | 列出数据表
  required: base:table:read, bitable:app, bitable:app:readonly
  tokens: tenant_access_token, user_access_token
- GET /open-apis/bitable/v1/apps/:app_token/tables/:table_id/fields | 列出字段
  required: base:field:read, bitable:app, bitable:app:readonly
  tokens: tenant_access_token, user_access_token
- GET /open-apis/bitable/v1/apps/:app_token/tables/:table_id/forms/:form_id | 获取表单元数据
  required: base:form:read, bitable:app, bitable:app:readonly
  tokens: tenant_access_token, user_access_token
- GET /open-apis/bitable/v1/apps/:app_token/tables/:table_id/forms/:form_id/fields | 列出表单问题
  required: base:form:read, bitable:app, bitable:app:readonly
  tokens: tenant_access_token, user_access_token
- GET /open-apis/bitable/v1/apps/:app_token/tables/:table_id/views | 列出视图
  required: base:view:read, bitable:app, bitable:app:readonly
  tokens: tenant_access_token, user_access_token
- GET /open-apis/bitable/v1/apps/:app_token/tables/:table_id/views/:view_id | 获取视图
  required: base:view:read, bitable:app, bitable:app:readonly
  tokens: tenant_access_token, user_access_token
- GET /open-apis/bitable/v1/apps/:app_token/workflows | 列出自动化流程
  required: base:workflow:read, bitable:app, bitable:app:readonly
  tokens: tenant_access_token, user_access_token
- GET /open-apis/board/v1/whiteboards/:whiteboard_id/download_as_image | 获取画板缩略图片
  required: board:whiteboard:node:read
  tokens: tenant_access_token, user_access_token
- GET /open-apis/board/v1/whiteboards/:whiteboard_id/nodes | 获取所有节点
  required: board:whiteboard:node:read
  tokens: tenant_access_token, user_access_token
- GET /open-apis/board/v1/whiteboards/:whiteboard_id/theme | 获取画板主题
  required: board:whiteboard:node:read
  tokens: tenant_access_token, user_access_token
- GET /open-apis/calendar/v4/calendars | 查询日历列表
  required: calendar:calendar, calendar:calendar.calendar:readonly, calendar:calendar:read, calendar:calendar:readonly
  tokens: tenant_access_token, user_access_token
- GET /open-apis/calendar/v4/calendars/:calendar_id | 查询日历信息
  required: calendar:calendar, calendar:calendar:read, calendar:calendar:readonly
  tokens: tenant_access_token, user_access_token
- GET /open-apis/calendar/v4/calendars/:calendar_id/acls | 获取访问控制列表
  required: calendar:calendar, calendar:calendar.acl:read, calendar:calendar:readonly
  tokens: tenant_access_token, user_access_token
- GET /open-apis/calendar/v4/calendars/:calendar_id/events | 获取日程列表
  required: calendar:calendar, calendar:calendar.event:read, calendar:calendar:readonly
  tokens: tenant_access_token, user_access_token
- GET /open-apis/calendar/v4/calendars/:calendar_id/events/:event_id | 获取日程
  required: calendar:calendar, calendar:calendar.event:read, calendar:calendar:readonly
  tokens: tenant_access_token, user_access_token
- GET /open-apis/calendar/v4/calendars/:calendar_id/events/:event_id/attendees | 获取日程参与人列表
  required: calendar:calendar, calendar:calendar.event:read, calendar:calendar:readonly
  tokens: tenant_access_token, user_access_token
- GET /open-apis/calendar/v4/calendars/:calendar_id/events/:event_id/attendees/:attendee_id/chat_members | 获取日程参与群成员列表
  required: calendar:calendar, calendar:calendar.event:read, calendar:calendar:readonly
  tokens: tenant_access_token, user_access_token
- GET /open-apis/calendar/v4/calendars/:calendar_id/events/:event_id/instances | 获取重复日程实例
  required: calendar:calendar, calendar:calendar.event:read, calendar:calendar:readonly
  tokens: tenant_access_token, user_access_token
- GET /open-apis/calendar/v4/calendars/:calendar_id/events/instance_view | 查询日程视图
  required: calendar:calendar, calendar:calendar.event:read, calendar:calendar:readonly
  tokens: tenant_access_token, user_access_token
- GET /open-apis/calendar/v4/exchange_bindings/:exchange_binding_id | 查询 Exchange 账户的绑定状态
  required: calendar:calendar:readonly, calendar:exchange.bindings:read
  tokens: user_access_token
- GET /open-apis/compensation/v1/change_reasons | 批量查询定调薪原因
  required: corehr:compensation_change_reason:read
  tokens: tenant_access_token
- GET /open-apis/compensation/v1/indicators | 批量查询薪资统计指标
  required: corehr:compensation_indicator:read
  tokens: tenant_access_token
- GET /open-apis/compensation/v1/item_categories | 批量获取薪资项分类信息
  required: corehr:compensation_item_category:read
  tokens: tenant_access_token
- GET /open-apis/compensation/v1/items | 批量查询薪资项
  required: corehr:compensation_item:read
  tokens: tenant_access_token
- GET /open-apis/compensation/v1/plans | 批量查询薪资方案
  required: corehr:compensation_plan:read
  tokens: tenant_access_token
- GET /open-apis/compensation/v1/social_insurances | 获取险种配置列表
  required: corehr:compensation.insurance:read
  tokens: tenant_access_token
- GET /open-apis/compensation/v1/social_plans | 根据生效日期分页查询参保方案
  required: corehr:compensation.social_plan:read
  tokens: tenant_access_token
- GET /open-apis/contact/v3/custom_attrs | 获取企业自定义用户字段
  required: contact:contact.base:readonly, contact:contact:readonly_as_app
  tokens: tenant_access_token
- GET /open-apis/contact/v3/departments/:department_id | 获取单个部门信息
  required: contact:contact.base:readonly, contact:contact:access_as_app, contact:contact:readonly, contact:contact:readonly_as_app
  tokens: tenant_access_token, user_access_token
- GET /open-apis/contact/v3/departments/:department_id/children | 获取子部门列表
  required: contact:contact.base:readonly, contact:contact:access_as_app, contact:contact:readonly, contact:contact:readonly_as_app, contact:department.organize:readonly
  tokens: tenant_access_token, user_access_token
- GET /open-apis/contact/v3/departments/batch | 批量获取部门信息
  required: contact:contact.base:readonly
  tokens: tenant_access_token, user_access_token
- GET /open-apis/contact/v3/departments/parent | 获取父部门信息
  required: contact:contact.base:readonly, contact:contact:access_as_app, contact:contact:readonly, contact:contact:readonly_as_app, contact:department.organize:readonly
  tokens: tenant_access_token, user_access_token
- GET /open-apis/contact/v3/employee_type_enums | 查询人员类型
  required: contact:contact.base:readonly, contact:contact:access_as_app, contact:contact:readonly_as_app
  tokens: tenant_access_token
- GET /open-apis/contact/v3/functional_roles/:role_id/members | 查询角色下的所有成员信息
  required: contact:functional_role, contact:functional_role:readonly
  tokens: tenant_access_token
- GET /open-apis/contact/v3/functional_roles/:role_id/members/:member_id | 查询角色下某个成员的管理范围
  required: contact:functional_role, contact:functional_role:readonly
  tokens: tenant_access_token
- GET /open-apis/contact/v3/group/:group_id | 查询指定用户组
  required: contact:group:readonly
  tokens: tenant_access_token
- GET /open-apis/contact/v3/group/:group_id/member/simplelist | 查询用户组成员列表
  required: contact:group:readonly
  tokens: tenant_access_token
- GET /open-apis/contact/v3/group/member_belong | 查询用户所属用户组
  required: contact:group:readonly
  tokens: tenant_access_token
- GET /open-apis/contact/v3/group/simplelist | 查询用户组列表
  required: contact:group:readonly
  tokens: tenant_access_token
- GET /open-apis/contact/v3/job_families | 获取租户序列列表
  required: contact:contact:readonly_as_app, contact:job_family, contact:job_family:readonly
  tokens: tenant_access_token
- GET /open-apis/contact/v3/job_families/:job_family_id | 获取单个序列信息
  required: contact:contact:readonly_as_app, contact:job_family, contact:job_family:readonly
  tokens: tenant_access_token
- GET /open-apis/contact/v3/job_levels | 获取租户职级列表
  required: contact:contact:readonly_as_app, contact:job_level, contact:job_level:readonly
  tokens: tenant_access_token
- GET /open-apis/contact/v3/job_levels/:job_level_id | 获取单个职级信息
  required: contact:contact:readonly_as_app, contact:job_level, contact:job_level:readonly
  tokens: tenant_access_token
- GET /open-apis/contact/v3/job_titles | 获取租户职务列表
  required: contact:contact:access_as_user, contact:contact:readonly_as_app, contact:job_title:readonly
  tokens: tenant_access_token, user_access_token
- GET /open-apis/contact/v3/job_titles/:job_title_id | 获取单个职务信息
  required: contact:contact:access_as_user, contact:contact:readonly_as_app, contact:job_title:readonly
  tokens: tenant_access_token, user_access_token
- GET /open-apis/contact/v3/scopes | 获取通讯录授权范围
  required: contact:contact.base:readonly, contact:contact:access_as_app, contact:contact:readonly_as_app
  tokens: tenant_access_token
- GET /open-apis/contact/v3/unit | 获取单位列表
  required: contact:unit:readonly
  tokens: tenant_access_token
- GET /open-apis/contact/v3/unit/:unit_id | 获取单位信息
  required: contact:unit:readonly
  tokens: tenant_access_token
- GET /open-apis/contact/v3/unit/list_department | 获取单位绑定的部门列表
  required: contact:unit:readonly
  tokens: tenant_access_token
- GET /open-apis/contact/v3/users/:user_id | 获取单个用户信息
  required: contact:contact.base:readonly, contact:contact:access_as_app, contact:contact:readonly, contact:contact:readonly_as_app
  tokens: tenant_access_token, user_access_token
- GET /open-apis/contact/v3/users/batch | 批量获取用户信息
  required: contact:contact.base:readonly
  tokens: tenant_access_token, user_access_token
- GET /open-apis/contact/v3/users/find_by_department | 获取部门直属用户列表
  required: contact:contact.base:readonly, contact:contact:access_as_app, contact:contact:readonly, contact:contact:readonly_as_app, contact:department.organize:readonly
  tokens: tenant_access_token, user_access_token
- GET /open-apis/contact/v3/work_cities | 获取租户工作城市列表
  required: contact:contact:access_as_user, contact:contact:readonly_as_app, contact:work_city:readonly
  tokens: tenant_access_token, user_access_token
- GET /open-apis/contact/v3/work_cities/:work_city_id | 获取单个工作城市信息
  required: contact:contact:access_as_user, contact:contact:readonly_as_app, contact:work_city:readonly
  tokens: tenant_access_token, user_access_token
- GET /open-apis/corehr/v1/authorizations/get_by_param | 查询单个用户授权
  required: corehr:authorization:write, corehr:corehr, corehr:corehr:readonly
  tokens: tenant_access_token
- GET /open-apis/corehr/v1/authorizations/query | 批量查询用户授权
  required: corehr:authorization:read, corehr:authorization:write, corehr:corehr, corehr:corehr:readonly
  tokens: tenant_access_token
- GET /open-apis/corehr/v1/companies | 批量查询公司
  required: corehr:company:read, corehr:corehr, corehr:corehr:readonly
  tokens: tenant_access_token
- GET /open-apis/corehr/v1/companies/:company_id | 查询单个公司
  required: corehr:company:read, corehr:corehr, corehr:corehr:readonly
  tokens: tenant_access_token
- GET /open-apis/corehr/v1/compensation_standards/match | 获取员工薪资标准
  required: corehr:compensation_standards:read
  tokens: tenant_access_token, user_access_token
- GET /open-apis/corehr/v1/contracts | 批量查询合同
  required: corehr:corehr, corehr:corehr:readonly
  tokens: tenant_access_token
- GET /open-apis/corehr/v1/contracts/:contract_id | 查询单个合同
  required: corehr:corehr, corehr:corehr:readonly
  tokens: tenant_access_token
- GET /open-apis/corehr/v1/country_regions | 批量查询国家/地区信息
  required: corehr:common_data.basic_data:read, corehr:corehr, corehr:corehr:readonly
  tokens: tenant_access_token
- GET /open-apis/corehr/v1/country_regions/:country_region_id | 查询单条国家/地区信息
  required: corehr:common_data.basic_data:read, corehr:corehr, corehr:corehr:readonly
  tokens: tenant_access_token
- GET /open-apis/corehr/v1/currencies | 批量查询货币信息
  required: corehr:common_data.basic_data:read, corehr:corehr, corehr:corehr:readonly
  tokens: tenant_access_token
- GET /open-apis/corehr/v1/currencies/:currency_id | 查询单个货币信息
  required: corehr:common_data.basic_data:read, corehr:corehr, corehr:corehr:readonly
  tokens: tenant_access_token
- GET /open-apis/corehr/v1/custom_fields/get_by_param | 获取字段详情
  required: corehr:common_data.meta_data:read, corehr:corehr, corehr:corehr:readonly
  tokens: tenant_access_token
- GET /open-apis/corehr/v1/custom_fields/list_object_api_name | 获取飞书人事对象列表
  required: corehr:common_data.meta_data:read, corehr:corehr, corehr:corehr:readonly
  tokens: tenant_access_token
- GET /open-apis/corehr/v1/custom_fields/query | 获取自定义字段列表
  required: corehr:common_data.meta_data:read, corehr:corehr, corehr:corehr:readonly
  tokens: tenant_access_token
- GET /open-apis/corehr/v1/departments | 批量查询部门
  required: corehr:corehr, corehr:corehr:readonly
  tokens: tenant_access_token
- GET /open-apis/corehr/v1/departments/:department_id | 查询单个部门
  required: corehr:corehr, corehr:corehr:readonly
  tokens: tenant_access_token
- GET /open-apis/corehr/v1/employee_types | 批量查询人员类型
  required: corehr:common_data.preset_data:read, corehr:common_data.preset_data:write, corehr:corehr, corehr:corehr:readonly
  tokens: tenant_access_token
- GET /open-apis/corehr/v1/employee_types/:employee_type_id | 查询单个人员类型
  required: corehr:common_data.preset_data:read, corehr:common_data.preset_data:write, corehr:corehr, corehr:corehr:readonly
  tokens: tenant_access_token
- GET /open-apis/corehr/v1/files/:id | 下载文件
  required: corehr:file:read, corehr:file:write
  tokens: tenant_access_token
- GET /open-apis/corehr/v1/job_families | 批量查询序列
  required: corehr:corehr, corehr:corehr:readonly, corehr:job_family:read, corehr:job_family:write
  tokens: tenant_access_token
- GET /open-apis/corehr/v1/job_families/:job_family_id | 查询单个序列
  required: corehr:corehr, corehr:corehr:readonly, corehr:job_family:read, corehr:job_family:write
  tokens: tenant_access_token
- GET /open-apis/corehr/v1/job_levels | 批量查询职级
  required: corehr:corehr, corehr:corehr:readonly, corehr:job_level:read, corehr:job_level:write
  tokens: tenant_access_token
- GET /open-apis/corehr/v1/job_levels/:job_level_id | 查询单个职级
  required: corehr:corehr, corehr:corehr:readonly, corehr:job_level:read, corehr:job_level:write
  tokens: tenant_access_token
- GET /open-apis/corehr/v1/jobs | 批量查询职务
  required: corehr:corehr, corehr:corehr:readonly, corehr:job:read, corehr:job:write
  tokens: tenant_access_token
- GET /open-apis/corehr/v1/jobs/:job_id | 查询单个职务
  required: corehr:corehr, corehr:corehr:readonly, corehr:job:read, corehr:job:write
  tokens: tenant_access_token
- GET /open-apis/corehr/v1/leaves/calendar_by_scope | 根据适用条件获取工作日历 ID
  required: corehr:corehr:readonly, corehr:leave:read, corehr:work_calendar:read
  tokens: tenant_access_token, user_access_token
- GET /open-apis/corehr/v1/leaves/leave_balances | 批量查询员工假期余额
  required: corehr:corehr, corehr:corehr:readonly, corehr:leave:read
  tokens: tenant_access_token
- GET /open-apis/corehr/v1/leaves/leave_request_history | 批量查询员工请假记录
  required: corehr:corehr, corehr:corehr:readonly, corehr:leave:read
  tokens: tenant_access_token
- GET /open-apis/corehr/v1/leaves/leave_types | 获取假期类型列表
  required: corehr:common_data.preset_data:read, corehr:corehr, corehr:corehr:readonly, corehr:leave:read
  tokens: tenant_access_token
- GET /open-apis/corehr/v1/locations | 批量分页查询地点信息
  required: corehr:corehr, corehr:corehr:readonly, corehr:locations:read, corehr:locations:write
  tokens: tenant_access_token
- GET /open-apis/corehr/v1/locations/:location_id | 查询单个地点
  required: corehr:corehr, corehr:corehr:readonly, corehr:locations:read, corehr:locations:write
  tokens: tenant_access_token
- GET /open-apis/corehr/v1/national_id_types | 批量查询国家证件类型
  required: corehr:common_data.preset_data:read, corehr:common_data.preset_data:write, corehr:corehr, corehr:corehr:readonly
  tokens: tenant_access_token
- GET /open-apis/corehr/v1/national_id_types/:national_id_type_id | 查询单个国家证件类型
  required: corehr:common_data.preset_data:read, corehr:common_data.preset_data:write, corehr:corehr, corehr:corehr:readonly
  tokens: tenant_access_token
- GET /open-apis/corehr/v1/persons/:person_id | 查询单个个人信息
  required: corehr:corehr, corehr:corehr:readonly, corehr:person:read, corehr:person:write
  tokens: tenant_access_token
- GET /open-apis/corehr/v1/pre_hires | 批量查询待入职信息
  required: corehr:corehr, corehr:corehr:readonly, corehr:pre_hire:read, corehr:pre_hire:write
  tokens: tenant_access_token
- GET /open-apis/corehr/v1/pre_hires/:pre_hire_id | 查询单个待入职信息
  required: corehr:corehr, corehr:corehr:readonly, corehr:pre_hire:read, corehr:pre_hire:write
  tokens: tenant_access_token
- GET /open-apis/corehr/v1/processes/:process_id/form_variable_data | 获取流程表单数据
  required: corehr:corehr, corehr:corehr:readonly, corehr:process:read
  tokens: tenant_access_token
- GET /open-apis/corehr/v1/security_groups | 批量获取角色列表
  required: corehr:corehr, corehr:corehr:readonly, corehr:security_group:read
  tokens: tenant_access_token
- GET /open-apis/corehr/v1/subdivisions | 批量查询省份/行政区信息
  required: corehr:common_data.basic_data:read, corehr:corehr, corehr:corehr:readonly
  tokens: tenant_access_token
- GET /open-apis/corehr/v1/subdivisions/:subdivision_id | 查询单条省份/行政区信息
  required: corehr:common_data.basic_data:read, corehr:corehr, corehr:corehr:readonly
  tokens: tenant_access_token
- GET /open-apis/corehr/v1/subregions | 批量查询城市/区域信息
  required: corehr:common_data.basic_data:read, corehr:corehr, corehr:corehr:readonly
  tokens: tenant_access_token
- GET /open-apis/corehr/v1/subregions/:subregion_id | 查询单条城市/区域信息
  required: corehr:common_data.basic_data:read, corehr:corehr, corehr:corehr:readonly
  tokens: tenant_access_token
- GET /open-apis/corehr/v1/transfer_reasons/query | 获取异动原因列表
  required: corehr:common_data.preset_data:read, corehr:common_data.preset_data:write, corehr:corehr, corehr:corehr:readonly, corehr:transfer_reason:read
  tokens: tenant_access_token
- GET /open-apis/corehr/v1/transfer_types/query | 获取异动类型列表
  required: corehr:common_data.preset_data:read, corehr:common_data.preset_data:write, corehr:corehr, corehr:corehr:readonly, corehr:transfer_type:readonly
  tokens: tenant_access_token
- GET /open-apis/corehr/v1/working_hours_types | 批量查询工时制度
  required: corehr:common_data.preset_data:read, corehr:common_data.preset_data:write, corehr:corehr, corehr:corehr:readonly
  tokens: tenant_access_token
- GET /open-apis/corehr/v1/working_hours_types/:working_hours_type_id | 查询单个工时制度
  required: corehr:common_data.preset_data:read, corehr:common_data.preset_data:write, corehr:corehr, corehr:corehr:readonly
  tokens: tenant_access_token
- GET /open-apis/corehr/v2/approvers | 获取指定人员审批任务列表
  required: corehr:process:read
  tokens: tenant_access_token
- GET /open-apis/corehr/v2/bps | 获取 HRBP 列表
  required: corehr:bp.list:read
  tokens: tenant_access_token
- GET /open-apis/corehr/v2/companies/query_recent_change | 查询当前生效信息变更公司
  required: corehr:company:read, corehr:company:write
  tokens: tenant_access_token
- GET /open-apis/corehr/v2/cost_centers/query_recent_change | 查询当前生效信息发生变更的成本中心
  required: corehr:cost_center:read, corehr:cost_center:write
  tokens: tenant_access_token
- GET /open-apis/corehr/v2/custom_org/employment_custom_org_record | 批量查询人员自定义组织变更记录
  required: corehr:employment.custom_org:read, corehr:employment.custom_org:write
  tokens: tenant_access_token
- GET /open-apis/corehr/v2/custom_org/querybyid | 查询单个人员自定义组织变更记录
  required: corehr:employment.custom_org:read, corehr:employment.custom_org:write
  tokens: tenant_access_token
- GET /open-apis/corehr/v2/custom_orgs/query_recent_change | 查询当前生效信息变更的自定义组织
  required: corehr:custom_org:read, corehr:custom_org:write
  tokens: tenant_access_token
- GET /open-apis/corehr/v2/departments/query_recent_change | 查询生效信息变更部门
  required: corehr:department:read, corehr:department:write
  tokens: tenant_access_token
- GET /open-apis/corehr/v2/drafts/:draft_id | 根据组织架构调整 ID 查询发起的流程信息
  required: corehr:draft:read
  tokens: tenant_access_token
- GET /open-apis/corehr/v2/employees/international_assignments | 批量查询外派信息
  required: corehr:employees.international_assignment:read, corehr:employees.international_assignment:write
  tokens: tenant_access_token
- GET /open-apis/corehr/v2/job_families/query_recent_change | 查询当前生效信息发生变更的序列
  required: corehr:job_family:read, corehr:job_family:write
  tokens: tenant_access_token
- GET /open-apis/corehr/v2/job_grades/query_recent_change | 查询当前生效信息发生变更的职等
  required: corehr:job_grade:read, corehr:job_grade:write
  tokens: tenant_access_token
- GET /open-apis/corehr/v2/job_levels/query_recent_change | 查询当前生效信息发生变更的职级
  required: corehr:job_level:read, corehr:job_level:write
  tokens: tenant_access_token
- GET /open-apis/corehr/v2/jobs | 批量查询职务
  required: corehr:corehr, corehr:corehr:readonly, corehr:job.only:read, corehr:job:read, corehr:job:write
  tokens: tenant_access_token
- GET /open-apis/corehr/v2/jobs/:job_id | 查询单个职务
  required: corehr:corehr, corehr:corehr:readonly, corehr:job.only:read, corehr:job:read, corehr:job:write
  tokens: tenant_access_token
- GET /open-apis/corehr/v2/jobs/query_recent_change | 查询当前生效信息发生变更的职务
  required: corehr:job:read, corehr:job:write
  tokens: tenant_access_token
- GET /open-apis/corehr/v2/locations/query_recent_change | 查询当前生效信息发生变更的地点
  required: corehr:locations:read, corehr:locations:write
  tokens: tenant_access_token
- GET /open-apis/corehr/v2/positions/query_recent_change | 查询指定时范围内当前版本信息发生变更的岗位
  required: corehr:position:read, corehr:position:write
  tokens: tenant_access_token
- GET /open-apis/corehr/v2/processes | 查询流程实例列表
  required: corehr:process:read
  tokens: tenant_access_token
- GET /open-apis/corehr/v2/processes/:process_id | 获取单个流程详情
  required: corehr:process:read
  tokens: tenant_access_token
- GET /open-apis/corehr/v2/processes/:process_id/flow_variable_data | 获取流程数据
  required: corehr:process:read
  tokens: tenant_access_token
- GET /open-apis/corehr/v2/signature_files | 获取电子签文件列表
  required: corehr:signature_file.pre_hire:read, corehr:signature_file:read
  tokens: tenant_access_token
- GET /open-apis/corehr/v2/signature_files/list_by_biz_id | 根据流程获取电子签文件信息
  required: corehr:signature.file:read
  tokens: tenant_access_token
- GET /open-apis/corehr/v2/signature_nodes/list_by_file_id | 获取文件签署节点信息
  required: corehr:signature.file:read
  tokens: tenant_access_token
- GET /open-apis/corehr/v2/signature_template_info_with_thumbnails | 获取电子签模板列表
  required: corehr:signature_template:read
  tokens: tenant_access_token
- GET /open-apis/corehr/v2/signature_templates/search | 获取电子签模板内容
  required: corehr:signature_template:read
  tokens: tenant_access_token
- GET /open-apis/corehr/v2/workforce_plans | 查询编制规划方案
  required: corehr:workforce_plan:read
  tokens: tenant_access_token
- GET /open-apis/directory/v1/collaboration_rules | 查询可搜可见规则
  required: trust_party:collaboration_rule:read
  tokens: tenant_access_token, user_access_token
- GET /open-apis/directory/v1/collaboration_tenants | 管理员获取所有关联组织列表
  required: trust_party:collaboration_rule:read
  tokens: tenant_access_token, user_access_token
- GET /open-apis/directory/v1/share_entities | 获取关联组织双方共享成员范围
  required: trust_party:collaboration_rule:read
  tokens: tenant_access_token, user_access_token
- GET /open-apis/docs/v1/content | 获取云文档内容
  required: docs:document.content:read
  tokens: tenant_access_token, user_access_token
- GET /open-apis/docx/v1/chats/:chat_id/announcement | 获取群公告基本信息
  required: im:chat.announcement:read
  tokens: tenant_access_token, user_access_token
- GET /open-apis/docx/v1/documents/:document_id | 获取文档基本信息
  required: docx:document, docx:document:readonly
  tokens: tenant_access_token, user_access_token
- GET /open-apis/docx/v1/documents/:document_id/raw_content | 获取文档纯文本内容
  required: docx:document, docx:document:readonly
  tokens: tenant_access_token, user_access_token
- GET /open-apis/drive/export_tasks/file/:file_token/download | 下载导出文件
  required: docs:document:export, drive:export:readonly
  tokens: tenant_access_token, user_access_token
- GET /open-apis/drive/v1/files | 获取文件夹中的文件清单
  required: drive:drive, drive:drive:readonly, space:document:retrieve
  tokens: tenant_access_token, user_access_token
- GET /open-apis/drive/v1/files/:file_token/download | 下载文件
  required: drive:drive, drive:drive:readonly, drive:file, drive:file:download, drive:file:readonly
  tokens: tenant_access_token, user_access_token
- GET /open-apis/drive/v1/files/:file_token/statistics | 获取文件统计信息
  required: drive:drive, drive:drive.metadata:readonly, drive:drive:readonly
  tokens: tenant_access_token, user_access_token
- GET /open-apis/drive/v1/files/:file_token/subscriptions/:subscription_id | 获取订阅状态
  required: docs:document.subscription:read, drive:drive, drive:drive:readonly
  tokens: user_access_token
- GET /open-apis/drive/v1/files/:file_token/versions | 获取文档版本列表
  required: drive:drive:version, drive:drive:version:readonly
  tokens: tenant_access_token, user_access_token
- GET /open-apis/drive/v1/files/:file_token/versions/:version_id | 获取文档版本信息
  required: drive:drive:version, drive:drive:version:readonly
  tokens: tenant_access_token, user_access_token
- GET /open-apis/drive/v1/files/:file_token/view_records | 获取文件访问记录
  required: contact:user.base:readonly, drive:file:view_record:readonly
  tokens: tenant_access_token, user_access_token
- GET /open-apis/drive/v1/files/task_check | 查询异步任务状态
  required: drive:drive, drive:drive.metadata:readonly, drive:drive:readonly
  tokens: tenant_access_token, user_access_token
- GET /open-apis/drive/v1/import_tasks/:ticket | 查询导入任务结果
  required: docs:document:import, drive:drive, drive:drive:readonly
  tokens: tenant_access_token, user_access_token
- GET /open-apis/drive/v1/medias/:file_token/download | 下载素材
  required: bitable:app, bitable:app:readonly, docs:doc, docs:doc:readonly, docs:document.media:download, drive:drive, drive:drive:readonly, moments:moments, moments:moments:readonly, sheets:spreadsheet, sheets:spreadsheet:readonly, vc:material, vc:material:readonly
  tokens: tenant_access_token, user_access_token
- GET /open-apis/drive/v1/medias/batch_get_tmp_download_url | 获取素材临时下载链接
  required: bitable:app, bitable:app:readonly, docs:doc, docs:doc:readonly, docs:document.media:download, drive:drive, drive:drive:readonly, moments:moments, moments:moments:readonly, sheets:spreadsheet, sheets:spreadsheet:readonly, vc:material, vc:material:readonly
  tokens: tenant_access_token, user_access_token
- GET /open-apis/drive/v1/permissions/:token/members | 获取云文档协作者
  required: bitable:app, bitable:bitable, docs:doc, docs:permission.member:retrieve, drive:drive, sheets:spreadsheet, wiki:wiki
  tokens: tenant_access_token, user_access_token
- GET /open-apis/drive/v1/permissions/:token/members/auth | 判断用户云文档权限
  required: bitable:app, bitable:bitable, docs:doc, docs:permission.member:auth, drive:drive, sheets:spreadsheet, wiki:wiki
  tokens: tenant_access_token, user_access_token
- GET /open-apis/drive/v1/user/subscription_status | 查询用户云文档事件订阅状态
  required: docs:event:subscribe
  tokens: tenant_access_token, user_access_token
- GET /open-apis/drive/v2/files/:file_token/likes | 获取云文档的点赞者列表
  required: drive:file.like:readonly
  tokens: tenant_access_token, user_access_token
- GET /open-apis/drive/v2/permissions/:token/public | 获取云文档权限设置
  required: bitable:bitable, docs:doc, docs:permission.setting:read, docx:document, drive:drive, drive:drive:readonly, drive:file, sheets:spreadsheet, wiki:wiki
  tokens: tenant_access_token, user_access_token
- GET /open-apis/ehr/v1/attachments/:token | 下载人员的附件
  required: ehr:attachment:readonly
  tokens: tenant_access_token
- GET /open-apis/ehr/v1/employees | 批量获取员工花名册信息
  required: ehr:employee:readonly
  tokens: tenant_access_token
- GET /open-apis/event/v1/outbound_ip | 获取事件出口 IP
  required: event:ip_list
  tokens: tenant_access_token
- GET /open-apis/helpdesk/v1/agent_emails | 获取客服邮箱
  required: helpdesk:all:readonly
  tokens: tenant_access_token
- GET /open-apis/helpdesk/v1/agent_schedules | 查询全部客服工作日程
  required: helpdesk:all:readonly
  tokens: tenant_access_token
- GET /open-apis/helpdesk/v1/agent_skill_rules | 获取客服技能列表
  required: helpdesk:all:readonly
  tokens: tenant_access_token
- GET /open-apis/helpdesk/v1/agent_skills | 查询全部客服技能
  required: helpdesk:all:readonly
  tokens: tenant_access_token
- GET /open-apis/helpdesk/v1/agent_skills/:agent_skill_id | 查询指定客服技能
  required: helpdesk:all:readonly
  tokens: tenant_access_token
- GET /open-apis/helpdesk/v1/agents/:agent_id/schedules | 查询指定客服工作日程
  required: helpdesk:all:readonly
  tokens: tenant_access_token
- GET /open-apis/helpdesk/v1/categories | 获取全部知识库分类
  required: helpdesk:all:readonly
  tokens: tenant_access_token
- GET /open-apis/helpdesk/v1/categories/:id | 获取知识库分类
  required: helpdesk:all:readonly
  tokens: tenant_access_token
- GET /open-apis/helpdesk/v1/customized_fields | 获取服务台自定义字段
  required: helpdesk:all:readonly
  tokens: tenant_access_token
- GET /open-apis/helpdesk/v1/faqs | 获取全部知识库详情
  required: helpdesk:all:readonly
  tokens: tenant_access_token
- GET /open-apis/helpdesk/v1/faqs/:id | 获取指定知识库详情
  required: helpdesk:all:readonly
  tokens: tenant_access_token
- GET /open-apis/helpdesk/v1/faqs/:id/image/:image_key | 获取知识库图像
  required: helpdesk:all:readonly
  tokens: tenant_access_token
- GET /open-apis/helpdesk/v1/faqs/search | 搜索知识库
  required: helpdesk:all:readonly
  tokens: tenant_access_token
- GET /open-apis/helpdesk/v1/notifications/:notification_id | 查询推送
  required: helpdesk:all:readonly
  tokens: user_access_token
- GET /open-apis/helpdesk/v1/ticket_customized_fields | 获取全部工单自定义字段
  required: helpdesk:all:readonly
  tokens: tenant_access_token
- GET /open-apis/helpdesk/v1/ticket_customized_fields/:ticket_customized_field_id | 获取指定工单自定义字段
  required: helpdesk:all:readonly
  tokens: tenant_access_token
- GET /open-apis/helpdesk/v1/ticket_images | 获取工单内图像
  required: helpdesk:all:readonly
  tokens: tenant_access_token
- GET /open-apis/helpdesk/v1/tickets | 查询全部工单详情
  required: helpdesk:all:readonly
  tokens: tenant_access_token
- GET /open-apis/helpdesk/v1/tickets/:ticket_id | 查询指定工单详情
  required: helpdesk:all:readonly
  tokens: tenant_access_token
- GET /open-apis/helpdesk/v1/tickets/:ticket_id/messages | 获取工单消息详情
  required: helpdesk:all:readonly
  tokens: tenant_access_token
- GET /open-apis/hire/v1/agencies/:agency_id | 获取猎头供应商信息
  required: hire:agency, hire:agency:readonly
  tokens: tenant_access_token
- GET /open-apis/hire/v1/agencies/query | 查询猎头供应商信息
  required: hire:agency, hire:agency:readonly
  tokens: tenant_access_token
- GET /open-apis/hire/v1/applications | 获取投递列表
  required: hire:application, hire:application:readonly
  tokens: tenant_access_token
- GET /open-apis/hire/v1/applications/:application_id | 获取投递信息
  required: hire:application, hire:application:readonly
  tokens: tenant_access_token
- GET /open-apis/hire/v1/applications/:application_id/get_detail | 获取投递详情
  required: hire:application, hire:application:readonly
  tokens: tenant_access_token
- GET /open-apis/hire/v1/applications/:application_id/offer | 获取 Offer 信息
  required: hire:application, hire:application:readonly
  tokens: tenant_access_token
- GET /open-apis/hire/v1/attachments/:attachment_id | 获取附件信息
  required: hire:attachment, hire:attachment:readonly
  tokens: tenant_access_token
- GET /open-apis/hire/v1/attachments/:attachment_id/preview | 获取附件 PDF 格式下载链接
  required: hire:attachment
  tokens: tenant_access_token
- GET /open-apis/hire/v1/background_check_orders | 获取背调信息列表
  required: hire:background_check_order, hire:background_check_order:readonly
  tokens: tenant_access_token
- GET /open-apis/hire/v1/evaluation_tasks | 获取简历评估任务列表
  required: hire:evaluation:readonly
  tokens: tenant_access_token
- GET /open-apis/hire/v1/evaluations | 获取简历评估信息列表
  required: hire:evaluation:readonly
  tokens: tenant_access_token
- GET /open-apis/hire/v1/exam_marking_tasks | 获取笔试阅卷任务列表
  required: hire:exam:readonly
  tokens: tenant_access_token
- GET /open-apis/hire/v1/external_applications | 查询外部投递列表
  required: hire:external_application
  tokens: tenant_access_token
- GET /open-apis/hire/v1/interview_records | 批量获取面试评价详细信息
  required: hire:interview, hire:interview:readonly
  tokens: tenant_access_token
- GET /open-apis/hire/v1/interview_records/:interview_record_id | 获取面试评价详细信息
  required: hire:interview, hire:interview:readonly
  tokens: tenant_access_token
- GET /open-apis/hire/v1/interview_records/attachments | 获取面试记录附件
  required: hire:interview, hire:interview:readonly
  tokens: tenant_access_token
- GET /open-apis/hire/v1/interview_registration_schemas | 获取面试登记表列表
  required: hire:interview, hire:interview:readonly
  tokens: tenant_access_token
- GET /open-apis/hire/v1/interview_round_types | 获取面试轮次类型列表
  required: hire:interview, hire:interview:readonly
  tokens: tenant_access_token
- GET /open-apis/hire/v1/interview_tasks | 获取面试任务列表
  required: hire:interview:readonly
  tokens: tenant_access_token
- GET /open-apis/hire/v1/interviewers | 查询面试官信息列表
  required: hire:interviewer, hire:interviewer:readonly
  tokens: tenant_access_token
- GET /open-apis/hire/v1/interviews | 获取面试信息
  required: hire:interview, hire:interview:readonly
  tokens: tenant_access_token
- GET /open-apis/hire/v1/interviews/get_by_talent | 获取人才面试信息
  required: hire:interview, hire:interview:readonly
  tokens: tenant_access_token
- GET /open-apis/hire/v1/job_functions | 获取职能分类列表
  required: hire:job:readonly
  tokens: tenant_access_token
- GET /open-apis/hire/v1/job_processes | 获取招聘流程信息
  required: hire:job_process:readonly
  tokens: tenant_access_token
- GET /open-apis/hire/v1/job_requirement_schemas | 获取招聘需求模板列表
  required: hire:job_requirement, hire:job_requirement:readonly
  tokens: tenant_access_token
- GET /open-apis/hire/v1/job_requirements | 获取招聘需求列表
  required: hire:job_requirement, hire:job_requirement:readonly
  tokens: tenant_access_token
- GET /open-apis/hire/v1/job_schemas | 获取职位模板
  required: hire:job:readonly
  tokens: tenant_access_token
- GET /open-apis/hire/v1/job_types | 获取职位类别列表
  required: hire:job:readonly
  tokens: tenant_access_token
- GET /open-apis/hire/v1/jobs | 获取职位列表
  required: hire:job:readonly
  tokens: tenant_access_token
- GET /open-apis/hire/v1/jobs/:job_id | 获取职位信息
  required: hire:job:readonly
  tokens: tenant_access_token
- GET /open-apis/hire/v1/jobs/:job_id/config | 获取职位设置
  required: hire:job:readonly
  tokens: tenant_access_token
- GET /open-apis/hire/v1/jobs/:job_id/get_detail | 获取职位详情
  required: hire:job.composite_info:readonly
  tokens: tenant_access_token
- GET /open-apis/hire/v1/jobs/:job_id/managers/:manager_id | 获取职位上的招聘人员信息
  required: hire:job:readonly
  tokens: tenant_access_token
- GET /open-apis/hire/v1/jobs/:job_id/recruiter | 获取职位上的招聘人员信息
  required: hire:job:readonly
  tokens: tenant_access_token
- GET /open-apis/hire/v1/locations | 获取地址列表
  required: hire:location:readonly
  tokens: tenant_access_token
- GET /open-apis/hire/v1/minutes | 获取面试速记明细
  required: hire:interview, hire:interview:readonly
  tokens: tenant_access_token
- GET /open-apis/hire/v1/notes | 获取备注列表
  required: hire:note, hire:note:readonly
  tokens: tenant_access_token
- GET /open-apis/hire/v1/notes/:note_id | 获取备注
  required: hire:note, hire:note:readonly
  tokens: tenant_access_token
- GET /open-apis/hire/v1/offer_application_forms | 获取 Offer 申请表列表
  required: hire:offer_schema:readonly
  tokens: tenant_access_token
- GET /open-apis/hire/v1/offer_application_forms/:offer_application_form_id | 获取 Offer 申请表信息
  required: hire:offer_schema:readonly
  tokens: tenant_access_token
- GET /open-apis/hire/v1/offers | 获取 Offer 列表
  required: hire:offer, hire:offer:readonly
  tokens: tenant_access_token
- GET /open-apis/hire/v1/offers/:offer_id | 获取 Offer 详情
  required: hire:offer, hire:offer:low_sensitive_info:readonly, hire:offer:readonly
  tokens: tenant_access_token
- GET /open-apis/hire/v1/portal_apply_schemas | 获取申请表模板列表
  required: hire:site, hire:site:readonly
  tokens: tenant_access_token, user_access_token
- GET /open-apis/hire/v1/questionnaires | 获取面试满意度问卷列表
  required: hire:questionnaire, hire:questionnaire:readonly
  tokens: tenant_access_token
- GET /open-apis/hire/v1/referral_account/get_account_assets | 查询内推账户
  required: hire:referral_account, hire:referral_account:readonly
  tokens: tenant_access_token
- GET /open-apis/hire/v1/referral_websites/job_posts | 获取内推官网下职位广告列表
  required: hire:referral_website:readonly
  tokens: tenant_access_token
- GET /open-apis/hire/v1/referral_websites/job_posts/:job_post_id | 获取内推官网下职位广告详情
  required: hire:referral_website:readonly
  tokens: tenant_access_token
- GET /open-apis/hire/v1/referrals/get_by_application | 获取内推信息
  required: hire:referral, hire:referral:readonly
  tokens: tenant_access_token
- GET /open-apis/hire/v1/registration_schemas | 获取信息登记表列表
  required: hire:talent, hire:talent:readonly
  tokens: tenant_access_token
- GET /open-apis/hire/v1/resume_sources | 获取简历来源列表
  required: hire:talent, hire:talent:readonly
  tokens: tenant_access_token
- GET /open-apis/hire/v1/roles | 获取角色列表
  required: hire:auth, hire:auth:readonly
  tokens: tenant_access_token
- GET /open-apis/hire/v1/roles/:role_id | 获取角色详情
  required: hire:auth, hire:auth:readonly
  tokens: tenant_access_token
- GET /open-apis/hire/v1/subjects | 获取项目列表
  required: hire:subject:readonly
  tokens: tenant_access_token
- GET /open-apis/hire/v1/talent_folders | 获取人才文件夹列表
  required: hire:talent_folder, hire:talent_folder:readonly
  tokens: tenant_access_token
- GET /open-apis/hire/v1/talent_objects/query | 获取人才字段
  required: hire:talent, hire:talent:readonly
  tokens: tenant_access_token
- GET /open-apis/hire/v1/talent_pools | 获取人才库列表
  required: hire:talent_folder, hire:talent_folder:readonly
  tokens: tenant_access_token
- GET /open-apis/hire/v1/talent_tags | 获取人才标签信息列表
  required: hire:talent_tag, hire:talent_tag:readonly
  tokens: tenant_access_token
- GET /open-apis/hire/v1/talents | 获取人才列表
  required: hire:talent, hire:talent:readonly
  tokens: tenant_access_token
- GET /open-apis/hire/v1/talents/:talent_id | 获取人才信息
  required: hire:talent, hire:talent:readonly
  tokens: tenant_access_token
- GET /open-apis/hire/v1/termination_reasons | 获取终止投递原因
  required: hire:application, hire:application:readonly
  tokens: tenant_access_token
- GET /open-apis/hire/v1/todos | 批量获取待办事项
  required: hire:todo:readonly
  tokens: user_access_token
- GET /open-apis/hire/v1/tripartite_agreements | 获取三方协议
  required: hire:tripartite_agreement, hire:tripartite_agreement:readonly
  tokens: tenant_access_token
- GET /open-apis/hire/v1/user_roles | 获取用户角色列表
  required: hire:auth, hire:auth:readonly
  tokens: tenant_access_token
- GET /open-apis/hire/v1/websites | 获取招聘官网列表
  required: hire:site, hire:site:readonly
  tokens: tenant_access_token
- GET /open-apis/hire/v1/websites/:website_id/channels | 获取招聘官网推广渠道列表
  required: hire:site, hire:site:readonly
  tokens: tenant_access_token
- GET /open-apis/hire/v1/websites/:website_id/delivery_tasks/:delivery_task_id | 获取招聘官网投递任务结果
  required: hire:site_application, hire:site_application:readonly
  tokens: tenant_access_token
- GET /open-apis/hire/v1/websites/:website_id/job_posts | 获取招聘官网下的职位广告列表
  required: hire:site_job_post:readonly
  tokens: tenant_access_token
- GET /open-apis/hire/v1/websites/:website_id/job_posts/:job_post_id | 获取招聘官网下职位广告详情
  required: hire:site_job_post:readonly
  tokens: tenant_access_token
- GET /open-apis/hire/v2/interview_records | 批量获取面试评价详细信息（新版）
  required: hire:interview, hire:interview:readonly
  tokens: tenant_access_token, user_access_token
- GET /open-apis/hire/v2/interview_records/:interview_record_id | 获取面试评价详细信息（新版）
  required: hire:interview, hire:interview:readonly
  tokens: tenant_access_token, user_access_token
- GET /open-apis/hire/v2/talents/:talent_id | 获取人才详情
  required: hire:talent, hire:talent:readonly
  tokens: tenant_access_token
- GET /open-apis/im/v1/batch_messages/:batch_message_id/get_progress | 查询批量消息整体进度
  required: im:message:send_multi_depts, im:message:send_multi_users
  tokens: tenant_access_token
- GET /open-apis/im/v1/batch_messages/:batch_message_id/read_user | 查询批量消息推送和阅读人数
  required: im:message:send_multi_depts, im:message:send_multi_users
  tokens: tenant_access_token
- GET /open-apis/im/v1/chats/:chat_id | 获取群信息
  required: im:chat, im:chat:read, im:chat:readonly
  tokens: tenant_access_token, user_access_token
- GET /open-apis/im/v1/chats/:chat_id/announcement | 获取群公告信息
  required: im:chat, im:chat.announcement:read, im:chat:readonly
  tokens: tenant_access_token, user_access_token
- GET /open-apis/im/v1/chats/:chat_id/chat_tabs/list_tabs | 拉取会话标签页
  required: im:chat, im:chat.tabs:read, im:chat:readonly
  tokens: tenant_access_token, user_access_token
- GET /open-apis/im/v1/chats/:chat_id/menu_tree | 获取群菜单
  required: im:chat, im:chat.menu_tree:read, im:chat:readonly
  tokens: tenant_access_token
- GET /open-apis/im/v1/chats/:chat_id/moderation | 获取群成员发言权限
  required: im:chat, im:chat.moderation:read, im:chat:readonly
  tokens: tenant_access_token, user_access_token
- GET /open-apis/im/v1/files/:file_key | 下载文件
  required: (none)
  tokens: tenant_access_token
- GET /open-apis/im/v1/images/:image_key | 下载图片
  required: (none)
  tokens: tenant_access_token
- GET /open-apis/im/v1/messages | 获取会话历史消息
  required: im:message, im:message.history:readonly, im:message:readonly
  tokens: tenant_access_token
- GET /open-apis/im/v1/messages/:message_id | 获取指定消息的内容
  required: im:message, im:message:readonly
  tokens: tenant_access_token
- GET /open-apis/im/v1/messages/:message_id/reactions | 获取消息表情回复
  required: im:message.reactions:read, im:message:readonly
  tokens: tenant_access_token, user_access_token
- GET /open-apis/im/v1/messages/:message_id/read_users | 查询消息已读信息
  required: im:message, im:message:basic, im:message:readonly
  tokens: tenant_access_token
- GET /open-apis/im/v1/messages/:message_id/resources/:file_key | 获取消息中的资源文件
  required: im:message, im:message.history:readonly, im:message:readonly
  tokens: tenant_access_token, user_access_token
- GET /open-apis/im/v1/pins | 获取群内 Pin 消息
  required: im:message, im:message.pins:read, im:message:readonly
  tokens: tenant_access_token, user_access_token
- GET /open-apis/im/v2/biz_entity_tag_relation | 查询实体与标签的绑定关系
  required: im:biz_entity_tag_relation:read, im:tag:read
  tokens: tenant_access_token
- GET /open-apis/lingo/v1/classifications | 获取词典分类
  required: baike:entity, baike:entity:exempt_review, baike:entity:readonly
  tokens: tenant_access_token, user_access_token
- GET /open-apis/lingo/v1/entities | 获取词条列表
  required: baike:entity, baike:entity:exempt_review, baike:entity:readonly
  tokens: tenant_access_token, user_access_token
- GET /open-apis/lingo/v1/entities/:entity_id | 获取词条详情
  required: baike:entity, baike:entity:exempt_review, baike:entity:readonly
  tokens: tenant_access_token, user_access_token
- GET /open-apis/lingo/v1/files/:file_token/download | 下载图片
  required: baike:entity, baike:entity:exempt_review, baike:entity:readonly
  tokens: tenant_access_token, user_access_token
- GET /open-apis/lingo/v1/repos | 获取词库列表
  required: baike:entity, baike:entity:exempt_review, baike:entity:readonly
  tokens: tenant_access_token, user_access_token
- GET /open-apis/mail/v1/mailgroups | 批量获取邮件组
  required: mail:mailgroup, mail:mailgroup:readonly
  tokens: tenant_access_token
- GET /open-apis/mail/v1/mailgroups/:mailgroup_id | 查询指定邮件组
  required: mail:mailgroup, mail:mailgroup:readonly
  tokens: tenant_access_token
- GET /open-apis/mail/v1/mailgroups/:mailgroup_id/aliases | 获取邮件组所有别名
  required: mail:mailgroup, mail:mailgroup:readonly
  tokens: tenant_access_token
- GET /open-apis/mail/v1/mailgroups/:mailgroup_id/managers | 批量获取邮件组管理员
  required: mail:mailgroup, mail:mailgroup:readonly
  tokens: tenant_access_token
- GET /open-apis/mail/v1/mailgroups/:mailgroup_id/members | 获取所有邮件组成员
  required: mail:mailgroup, mail:mailgroup:readonly
  tokens: tenant_access_token
- GET /open-apis/mail/v1/mailgroups/:mailgroup_id/members/:member_id | 查询指定邮件组成员
  required: mail:mailgroup, mail:mailgroup:readonly
  tokens: tenant_access_token
- GET /open-apis/mail/v1/mailgroups/:mailgroup_id/permission_members | 批量获取邮件组权限成员
  required: mail:mailgroup, mail:mailgroup:readonly
  tokens: tenant_access_token
- GET /open-apis/mail/v1/mailgroups/:mailgroup_id/permission_members/:permission_member_id | 获取邮件组权限成员
  required: mail:mailgroup, mail:mailgroup:readonly
  tokens: tenant_access_token
- GET /open-apis/mail/v1/public_mailboxes | 查询所有公共邮箱
  required: mail:public_mailbox, mail:public_mailbox:readonly
  tokens: tenant_access_token, user_access_token
- GET /open-apis/mail/v1/public_mailboxes/:public_mailbox_id | 查询指定公共邮箱
  required: mail:public_mailbox, mail:public_mailbox:readonly
  tokens: tenant_access_token
- GET /open-apis/mail/v1/public_mailboxes/:public_mailbox_id/aliases | 查询公共邮箱的所有别名
  required: mail:public_mailbox, mail:public_mailbox:readonly
  tokens: tenant_access_token
- GET /open-apis/mail/v1/public_mailboxes/:public_mailbox_id/members | 查询所有公共邮箱成员信息
  required: mail:public_mailbox, mail:public_mailbox:readonly
  tokens: tenant_access_token
- GET /open-apis/mail/v1/public_mailboxes/:public_mailbox_id/members/:member_id | 查询指定公共邮箱成员信息
  required: mail:public_mailbox, mail:public_mailbox:readonly
  tokens: tenant_access_token
- GET /open-apis/mail/v1/user_mailboxes/:user_mailbox_id/aliases | 获取用户邮箱所有别名
  required: mail:user_mailbox, mail:user_mailbox:readonly
  tokens: tenant_access_token
- GET /open-apis/mail/v1/user_mailboxes/:user_mailbox_id/event/subscription | 获取订阅状态
  required: mail:event
  tokens: user_access_token
- GET /open-apis/mail/v1/user_mailboxes/:user_mailbox_id/folders | 列出邮箱文件夹
  required: mail:user_mailbox.folder:read, mail:user_mailbox.folder:write
  tokens: tenant_access_token, user_access_token
- GET /open-apis/mail/v1/user_mailboxes/:user_mailbox_id/mail_contacts | 列出邮箱联系人
  required: mail:user_mailbox.mail_contact:read, mail:user_mailbox.mail_contact:write
  tokens: tenant_access_token, user_access_token
- GET /open-apis/mail/v1/user_mailboxes/:user_mailbox_id/messages | 列出邮件
  required: mail:user_mailbox.message:readonly
  tokens: tenant_access_token, user_access_token
- GET /open-apis/mail/v1/user_mailboxes/:user_mailbox_id/messages/:message_id | 获取邮件详情
  required: mail:user_mailbox.message:readonly
  tokens: tenant_access_token, user_access_token
- GET /open-apis/mail/v1/user_mailboxes/:user_mailbox_id/messages/:message_id/attachments/download_url | 获取附件下载链接
  required: mail:user_mailbox.message.body:read
  tokens: tenant_access_token, user_access_token
- GET /open-apis/mail/v1/user_mailboxes/:user_mailbox_id/messages/get_by_card | 获取邮件卡片的邮件列表
  required: mail:user_mailbox.message:readonly
  tokens: tenant_access_token, user_access_token
- GET /open-apis/mail/v1/user_mailboxes/:user_mailbox_id/rules | 列出收信规则
  required: mail:user_mailbox.rule:read, mail:user_mailbox.rule:write
  tokens: tenant_access_token, user_access_token
- GET /open-apis/mdm/v3/batch_country_region | 根据主数据编码批量查询国家/地区
  required: mdm:country_region:read
  tokens: tenant_access_token
- GET /open-apis/mdm/v3/country_regions | 分页批量查询国家/地区
  required: mdm:country_region:read
  tokens: tenant_access_token
- GET /open-apis/minutes/v1/minutes/:minute_token | 获取妙记信息
  required: minutes:minutes, minutes:minutes.basic:read, minutes:minutes:readonly
  tokens: tenant_access_token, user_access_token
- GET /open-apis/minutes/v1/minutes/:minute_token/artifacts | 获取妙记AI产物
  required: minutes:minutes.artifacts:read
  tokens: tenant_access_token, user_access_token
- GET /open-apis/minutes/v1/minutes/:minute_token/media | 下载妙记音视频文件
  required: minutes:minute:download, minutes:minutes.media:export
  tokens: tenant_access_token, user_access_token
- GET /open-apis/minutes/v1/minutes/:minute_token/statistics | 获取妙记统计数据
  required: minutes:minutes, minutes:minutes.statistics:read, minutes:minutes:readonly
  tokens: tenant_access_token, user_access_token
- GET /open-apis/minutes/v1/minutes/:minute_token/transcript | 导出妙记文字记录
  required: minutes:minute:download, minutes:minutes.transcript:export
  tokens: tenant_access_token, user_access_token
- GET /open-apis/moments/v1/posts/:post_id | 查询帖子信息
  required: moments:moments:access_all, moments:moments:readonly
  tokens: tenant_access_token
- GET /open-apis/okr/v1/okrs/batch_get | 批量获取 OKR
  required: okr:okr, okr:okr.content:readonly, okr:okr:readonly
  tokens: tenant_access_token, user_access_token
- GET /open-apis/okr/v1/period_rules | 获取 OKR 周期规则
  required: okr:okr, okr:okr.period:readonly, okr:okr:readonly
  tokens: tenant_access_token
- GET /open-apis/okr/v1/periods | 获取 OKR 周期列表
  required: okr:okr, okr:okr.period:readonly, okr:okr:readonly
  tokens: tenant_access_token
- GET /open-apis/okr/v1/progress_records/:progress_id | 获取 OKR 进展记录
  required: okr:okr, okr:okr.progress:readonly, okr:okr:readonly
  tokens: tenant_access_token, user_access_token
- GET /open-apis/okr/v1/reviews/query | 查询复盘信息
  required: okr:okr, okr:okr.review:readonly, okr:okr:readonly
  tokens: tenant_access_token
- GET /open-apis/okr/v1/users/:user_id/okrs | 获取用户的 OKR 列表
  required: okr:okr, okr:okr.content:readonly, okr:okr:readonly
  tokens: tenant_access_token, user_access_token
- GET /open-apis/payroll/v1/acct_items | 批量查询算薪项
  required: payroll:payroll_calculation_item:read
  tokens: tenant_access_token, user_access_token
- GET /open-apis/payroll/v1/cost_allocation_details | 查询成本分摊报表明细
  required: payroll:cost_allocation_details:read
  tokens: tenant_access_token, user_access_token
- GET /open-apis/payroll/v1/cost_allocation_plans | 批量查询成本分摊方案
  required: payroll:cost_allocation_plan:read
  tokens: tenant_access_token
- GET /open-apis/payroll/v1/cost_allocation_reports | 查询成本分摊报表汇总数据
  required: payroll:cost_allocation_report:read
  tokens: tenant_access_token
- GET /open-apis/payroll/v1/datasources | 获取外部数据源配置信息
  required: payroll:external_datasource_configuration:read
  tokens: tenant_access_token, user_access_token
- GET /open-apis/payroll/v1/paygroups | 获取薪资组基本信息
  required: payroll:pay_groups:read
  tokens: tenant_access_token
- GET /open-apis/payroll/v1/payment_activity_details | 查询发薪活动明细列表
  required: payroll:payment_activity_details:read
  tokens: tenant_access_token, user_access_token
- GET /open-apis/payroll/v1/payment_activitys | 查询发薪活动列表
  required: payroll:payment_activity:read
  tokens: tenant_access_token, user_access_token
- GET /open-apis/performance/v1/semesters | 获取周期列表
  required: performance:performance, performance:performance:readonly, performance:semester:read
  tokens: tenant_access_token
- GET /open-apis/performance/v2/metric_tags | 获取指标标签列表
  required: performance:metric:read, performance:metric:write, performance:metric_lib:read
  tokens: tenant_access_token
- GET /open-apis/personal_settings/v1/system_statuses | 获取系统状态
  required: personal_settings:status:system_status_update
  tokens: tenant_access_token
- GET /open-apis/report/v1/rules/query | 查询规则
  required: report:rule:readonly
  tokens: tenant_access_token
- GET /open-apis/search/v2/data_sources | 批量获取数据源
  required: search:data_source, search:data_source:readonly
  tokens: tenant_access_token
- GET /open-apis/search/v2/data_sources/:data_source_id | 获取数据源
  required: search:data_source, search:data_source:readonly
  tokens: tenant_access_token
- GET /open-apis/search/v2/data_sources/:data_source_id/items/:item_id | 查询指定数据项
  required: search:data_item:readonly, search:data_source, search:data_source:readonly
  tokens: tenant_access_token
- GET /open-apis/search/v2/schemas/:schema_id | 获取数据范式
  required: search:data_schemas:readonly, search:data_source, search:data_source:readonly
  tokens: tenant_access_token
- GET /open-apis/security_and_compliance/v1/multi_geo_entity/tenant | 获取地理位置列表
  required: security_and_compliance:multi_geo_entity.tenant:readonly, security_and_compliance:user_migration:multi-geo
  tokens: tenant_access_token, user_access_token
- GET /open-apis/security_and_compliance/v1/user_migrations/:user_id | 获取单个用户迁移状态
  required: security_and_compliance:user_migration, security_and_compliance:user_migration:multi-geo, security_and_compliance:user_migration:readonly
  tokens: tenant_access_token, user_access_token
- GET /open-apis/security_and_compliance/v2/device_records | 查询设备信息
  required: security_and_compliance:device_record:read
  tokens: tenant_access_token
- GET /open-apis/security_and_compliance/v2/device_records/:device_record_id | 获取设备信息
  required: security_and_compliance:device_record:read
  tokens: tenant_access_token
- GET /open-apis/security_and_compliance/v2/device_records/mine | 获取客户端设备认证信息
  required: security_and_compliance:device_record:read
  tokens: user_access_token
- GET /open-apis/sheets/v3/spreadsheets/:spreadsheet_token | 获取电子表格信息
  required: drive:drive, drive:drive:readonly, sheets:spreadsheet, sheets:spreadsheet.meta:read, sheets:spreadsheet:readonly
  tokens: tenant_access_token, user_access_token
- GET /open-apis/sheets/v3/spreadsheets/:spreadsheet_token/sheets/:sheet_id | 查询工作表
  required: drive:drive, drive:drive:readonly, sheets:spreadsheet, sheets:spreadsheet:read, sheets:spreadsheet:readonly
  tokens: tenant_access_token, user_access_token
- GET /open-apis/sheets/v3/spreadsheets/:spreadsheet_token/sheets/:sheet_id/filter | 获取筛选
  required: drive:drive, drive:drive:readonly, sheets:spreadsheet, sheets:spreadsheet:read, sheets:spreadsheet:readonly
  tokens: tenant_access_token, user_access_token
- GET /open-apis/sheets/v3/spreadsheets/:spreadsheet_token/sheets/:sheet_id/filter_views/:filter_view_id | 获取筛选视图
  required: drive:drive, drive:drive:readonly, sheets:spreadsheet, sheets:spreadsheet:read, sheets:spreadsheet:readonly
  tokens: tenant_access_token, user_access_token
- GET /open-apis/sheets/v3/spreadsheets/:spreadsheet_token/sheets/:sheet_id/filter_views/:filter_view_id/conditions/:condition_id | 获取筛选条件
  required: drive:drive, drive:drive:readonly, sheets:spreadsheet, sheets:spreadsheet:read, sheets:spreadsheet:readonly
  tokens: tenant_access_token, user_access_token
- GET /open-apis/sheets/v3/spreadsheets/:spreadsheet_token/sheets/:sheet_id/filter_views/:filter_view_id/conditions/query | 查询筛选条件
  required: drive:drive, drive:drive:readonly, sheets:spreadsheet, sheets:spreadsheet:read, sheets:spreadsheet:readonly
  tokens: tenant_access_token, user_access_token
- GET /open-apis/sheets/v3/spreadsheets/:spreadsheet_token/sheets/:sheet_id/filter_views/query | 查询筛选视图
  required: drive:drive, drive:drive:readonly, sheets:spreadsheet, sheets:spreadsheet:read, sheets:spreadsheet:readonly
  tokens: tenant_access_token, user_access_token
- GET /open-apis/sheets/v3/spreadsheets/:spreadsheet_token/sheets/:sheet_id/float_images/:float_image_id | 获取浮动图片
  required: drive:drive, drive:drive:readonly, sheets:spreadsheet, sheets:spreadsheet:read, sheets:spreadsheet:readonly
  tokens: tenant_access_token, user_access_token
- GET /open-apis/sheets/v3/spreadsheets/:spreadsheet_token/sheets/:sheet_id/float_images/query | 查询浮动图片
  required: drive:drive, drive:drive:readonly, sheets:spreadsheet, sheets:spreadsheet:read, sheets:spreadsheet:readonly
  tokens: tenant_access_token, user_access_token
- GET /open-apis/sheets/v3/spreadsheets/:spreadsheet_token/sheets/query | 获取工作表
  required: drive:drive, drive:drive:readonly, sheets:spreadsheet, sheets:spreadsheet:read, sheets:spreadsheet:readonly
  tokens: tenant_access_token, user_access_token
- GET /open-apis/spark/v1/apps/:app_id/enums | 获取自定义枚举列表
  required: spark:app.table:read, spark:app.table:write
  tokens: user_access_token
- GET /open-apis/spark/v1/apps/:app_id/enums/:enum_name | 获取自定义枚举详细信息
  required: spark:app.table:read, spark:app.table:write
  tokens: user_access_token
- GET /open-apis/spark/v1/apps/:app_id/tables | 获取数据表列表
  required: spark:app.table:read, spark:app.table:write
  tokens: user_access_token
- GET /open-apis/spark/v1/apps/:app_id/tables/:table_name | 获取数据表详细信息
  required: spark:app.table:read, spark:app.table:write
  tokens: user_access_token
- GET /open-apis/spark/v1/apps/:app_id/tables/:table_name/records | 查询数据表数据记录
  required: spark:app.table.record:read, spark:app.table.record:write
  tokens: user_access_token
- GET /open-apis/spark/v1/apps/:app_id/views/:view_name/records | 查询视图数据记录
  required: spark:app.table.record:read, spark:app.table.record:write
  tokens: user_access_token
- GET /open-apis/task/v1/tasks | 查询所有任务
  required: task:task:read, task:task:readonly
  tokens: tenant_access_token, user_access_token
- GET /open-apis/task/v1/tasks/:task_id | 查询指定任务
  required: task:task, task:task:read, task:task:readonly
  tokens: tenant_access_token, user_access_token
- GET /open-apis/task/v1/tasks/:task_id/collaborators | 获取执行者列表
  required: task:personnel:read, task:task, task:task:readonly
  tokens: tenant_access_token, user_access_token
- GET /open-apis/task/v1/tasks/:task_id/followers | 获取关注人列表
  required: task:personnel:read, task:task, task:task:readonly
  tokens: tenant_access_token, user_access_token
- GET /open-apis/task/v2/attachments | 列取附件
  required: task:attachment:read, task:attachment:write
  tokens: tenant_access_token, user_access_token
- GET /open-apis/task/v2/attachments/:attachment_guid | 获取附件
  required: task:attachment:file:download, task:attachment:read, task:attachment:write
  tokens: tenant_access_token, user_access_token
- GET /open-apis/task/v2/comments | 获取评论列表
  required: task:comment:read, task:comment:write
  tokens: tenant_access_token, user_access_token
- GET /open-apis/task/v2/comments/:comment_id | 获取评论详情
  required: task:comment:read, task:comment:write
  tokens: tenant_access_token, user_access_token
- GET /open-apis/task/v2/custom_fields | 列取自定义字段
  required: task:custom_field:read, task:custom_field:write
  tokens: tenant_access_token, user_access_token
- GET /open-apis/task/v2/custom_fields/:custom_field_guid | 获取自定义字段
  required: task:custom_field:read, task:custom_field:write
  tokens: tenant_access_token, user_access_token
- GET /open-apis/task/v2/sections | 获取自定义分组列表
  required: task:section:read, task:section:write
  tokens: tenant_access_token, user_access_token
- GET /open-apis/task/v2/sections/:section_guid | 获取自定义分组详情
  required: task:section:read, task:section:write
  tokens: tenant_access_token, user_access_token
- GET /open-apis/task/v2/sections/:section_guid/tasks | 获取自定义分组任务列表
  required: task:section:read, task:section:write
  tokens: tenant_access_token, user_access_token
- GET /open-apis/task/v2/tasklists | 获取清单列表
  required: task:tasklist:read, task:tasklist:write
  tokens: tenant_access_token, user_access_token
- GET /open-apis/task/v2/tasklists/:tasklist_guid | 获取清单详情
  required: task:tasklist:read, task:tasklist:write
  tokens: tenant_access_token, user_access_token
- GET /open-apis/task/v2/tasklists/:tasklist_guid/activity_subscriptions | 列取动态订阅
  required: task:tasklist:read, task:tasklist:write
  tokens: tenant_access_token, user_access_token
- GET /open-apis/task/v2/tasklists/:tasklist_guid/activity_subscriptions/:activity_subscription_guid | 获取动态订阅
  required: task:tasklist:read, task:tasklist:write
  tokens: tenant_access_token, user_access_token
- GET /open-apis/task/v2/tasklists/:tasklist_guid/tasks | 获取清单任务列表
  required: task:tasklist:read, task:tasklist:write
  tokens: tenant_access_token, user_access_token
- GET /open-apis/task/v2/tasks | 列取任务列表
  required: task:task:read, task:task:write
  tokens: user_access_token
- GET /open-apis/task/v2/tasks/:task_guid | 获取任务详情
  required: task:task:read, task:task:write
  tokens: tenant_access_token, user_access_token
- GET /open-apis/task/v2/tasks/:task_guid/subtasks | 获取任务的子任务列表
  required: task:task:read, task:task:write
  tokens: tenant_access_token, user_access_token
- GET /open-apis/task/v2/tasks/:task_guid/tasklists | 列取任务所在清单
  required: task:task:read, task:task:write
  tokens: tenant_access_token, user_access_token
- GET /open-apis/tenant/v2/tenant/assign_info_list/query | 获取企业席位信息接口
  required: tenant:tenant.product_assign_info:read
  tokens: tenant_access_token
- GET /open-apis/tenant/v2/tenant/query | 获取企业信息
  required: tenant:tenant:readonly
  tokens: tenant_access_token
- GET /open-apis/trust_party/v1/collaboration_tenants | 获取可见关联组织的列表
  required: trust_party:collaboration.tenant:readonly
  tokens: tenant_access_token, user_access_token
- GET /open-apis/trust_party/v1/collaboration_tenants/:target_tenant_key | 获取关联组织详情
  required: trust_party:collaboration.tenant:readonly
  tokens: tenant_access_token, user_access_token
- GET /open-apis/trust_party/v1/collaboration_tenants/:target_tenant_key/collaboration_departments/:target_department_id | 获取关联组织部门详情
  required: trust_party:collaboration.tenant:readonly
  tokens: tenant_access_token, user_access_token
- GET /open-apis/trust_party/v1/collaboration_tenants/:target_tenant_key/collaboration_users/:target_user_id | 获取关联组织成员详情
  required: trust_party:collaboration.tenant:readonly
  tokens: tenant_access_token, user_access_token
- GET /open-apis/trust_party/v1/collaboration_tenants/visible_organization | 获取关联组织的部门和成员信息
  required: trust_party:collaboration.tenant:readonly
  tokens: tenant_access_token, user_access_token
- GET /open-apis/vc/v1/alerts | 获取告警记录
  required: vc:alert:readonly
  tokens: tenant_access_token
- GET /open-apis/vc/v1/exports/:task_id | 查询导出任务结果
  required: vc:export, vc:meeting:export
  tokens: tenant_access_token, user_access_token
- GET /open-apis/vc/v1/exports/download | 下载导出文件
  required: vc:export, vc:meeting:export
  tokens: tenant_access_token, user_access_token
- GET /open-apis/vc/v1/meeting_list | 查询会议明细
  required: vc:room:readonly, vc:rooms.room.detailinfo:read
  tokens: tenant_access_token, user_access_token
- GET /open-apis/vc/v1/meetings/:meeting_id | 获取会议详情
  required: vc:meeting.meetingevent:read, vc:meeting:readonly
  tokens: tenant_access_token, user_access_token
- GET /open-apis/vc/v1/meetings/:meeting_id/recording | 获取录制文件
  required: vc:record:readonly
  tokens: tenant_access_token, user_access_token
- GET /open-apis/vc/v1/meetings/list_by_no | 获取与会议号关联的会议列表
  required: vc:meeting.meetingid:read, vc:meeting:readonly
  tokens: tenant_access_token, user_access_token
- GET /open-apis/vc/v1/notes/:note_id | 获取纪要详情
  required: vc:note:read
  tokens: user_access_token
- GET /open-apis/vc/v1/participant_list | 查询参会人明细
  required: vc:room:readonly, vc:rooms.room.detailinfo:read
  tokens: tenant_access_token, user_access_token
- GET /open-apis/vc/v1/participant_quality_list | 查询参会人会议质量数据
  required: vc:room:readonly, vc:rooms.room.detailinfo:read
  tokens: tenant_access_token, user_access_token
- GET /open-apis/vc/v1/reports/get_daily | 获取会议报告
  required: vc:report:readonly
  tokens: tenant_access_token
- GET /open-apis/vc/v1/reports/get_top_user | 获取 Top 用户列表
  required: vc:report:readonly
  tokens: tenant_access_token
- GET /open-apis/vc/v1/reserve_configs/:reserve_config_id/admin | 查询会议室预定管理员
  required: vc:room, vc:room:readonly, vc:rooms.room.basicinfo:read
  tokens: tenant_access_token
- GET /open-apis/vc/v1/reserve_configs/:reserve_config_id/disable_inform | 查询禁用状态变更通知
  required: vc:room, vc:room:readonly, vc:rooms.room.basicinfo:read
  tokens: tenant_access_token
- GET /open-apis/vc/v1/reserve_configs/:reserve_config_id/form | 查询会议室预定表单
  required: vc:room, vc:room:readonly, vc:rooms.room.basicinfo:read
  tokens: tenant_access_token
- GET /open-apis/vc/v1/reserve_configs/reserve_scope | 查询会议室预定限制
  required: vc:room, vc:room:readonly, vc:rooms.room.basicinfo:read
  tokens: tenant_access_token
- GET /open-apis/vc/v1/reserves/:reserve_id | 获取预约
  required: vc:reserve:readonly
  tokens: tenant_access_token, user_access_token
- GET /open-apis/vc/v1/reserves/:reserve_id/get_active_meeting | 获取活跃会议
  required: vc:reserve:readonly
  tokens: tenant_access_token, user_access_token
- GET /open-apis/vc/v1/resource_reservation_list | 查询会议室预定数据
  required: vc:room:readonly, vc:rooms.room.detailinfo:read
  tokens: tenant_access_token, user_access_token
- GET /open-apis/vc/v1/room_configs/query | 查询会议室配置
  required: vc:room:readonly
  tokens: tenant_access_token
- GET /open-apis/vc/v1/room_levels | 查询会议室层级列表
  required: vc:room, vc:room:readonly, vc:rooms.roomlevel:read
  tokens: tenant_access_token
- GET /open-apis/vc/v1/room_levels/:room_level_id | 查询会议室层级详情
  required: vc:room, vc:room:readonly, vc:rooms.roomlevel:read
  tokens: tenant_access_token
- GET /open-apis/vc/v1/room_levels/search | 搜索会议室层级
  required: vc:room, vc:room:readonly, vc:rooms.roomlevel:read
  tokens: tenant_access_token
- GET /open-apis/vc/v1/rooms | 查询会议室列表
  required: vc:room, vc:room:readonly, vc:rooms.room.basicinfo:read
  tokens: tenant_access_token
- GET /open-apis/vc/v1/rooms/:room_id | 查询会议室详情
  required: vc:room, vc:room:readonly, vc:rooms.room.basicinfo:read
  tokens: tenant_access_token
- GET /open-apis/vc/v1/scope_config | 查询会议室配置
  required: vc:room, vc:room:readonly, vc:rooms.room.basicinfo:read
  tokens: tenant_access_token
- GET /open-apis/verification/v1/verification | 获取认证信息
  required: verification:verification_information:readonly
  tokens: tenant_access_token
- GET /open-apis/wiki/v2/spaces | 获取知识空间列表
  required: wiki:space:retrieve, wiki:wiki, wiki:wiki:readonly
  tokens: tenant_access_token, user_access_token
- GET /open-apis/wiki/v2/spaces/:space_id | 获取知识空间信息
  required: wiki:space:read, wiki:wiki, wiki:wiki:readonly
  tokens: tenant_access_token, user_access_token
- GET /open-apis/wiki/v2/spaces/:space_id/members | 获取知识空间成员列表
  required: wiki:member:retrieve, wiki:wiki, wiki:wiki:readonly
  tokens: tenant_access_token, user_access_token
- GET /open-apis/wiki/v2/spaces/:space_id/nodes | 获取知识空间子节点列表
  required: wiki:node:retrieve, wiki:wiki, wiki:wiki:readonly
  tokens: tenant_access_token, user_access_token
- GET /open-apis/wiki/v2/spaces/get_node | 获取知识空间节点信息
  required: wiki:node:read, wiki:wiki, wiki:wiki:readonly
  tokens: tenant_access_token, user_access_token
- GET /open-apis/wiki/v2/tasks/:task_id | 获取任务结果
  required: wiki:space:read, wiki:wiki, wiki:wiki:readonly
  tokens: tenant_access_token, user_access_token
- PATCH /open-apis/acs/v1/users/:user_id | 修改用户部分信息
  required: acs:users
  tokens: tenant_access_token
- PATCH /open-apis/apaas/v1/applications/:namespace/objects/:object_api_name/records/:id | 编辑记录
  required: app_engine:object.record:write
  tokens: tenant_access_token
- PATCH /open-apis/apaas/v1/applications/:namespace/objects/:object_api_name/records/batch_update | 批量编辑记录
  required: app_engine:object.record:write
  tokens: tenant_access_token
- PATCH /open-apis/apaas/v1/workspaces/:workspace_id/tables/:table_name/records | 按条件更新数据表中的记录
  required: app_engine:workspace.table.record:write
  tokens: user_access_token
- PATCH /open-apis/apaas/v1/workspaces/:workspace_id/tables/:table_name/records_batch_update | 批量更新数据表中的记录
  required: app_engine:workspace.table.record:write
  tokens: user_access_token
- PATCH /open-apis/application/v6/applications/:app_id | 更新应用分组信息
  required: admin:app.category:update, application:application
  tokens: tenant_access_token
- PATCH /open-apis/application/v6/applications/:app_id/app_versions/:version_id | 更新应用审核状态
  required: application:application.app_version
  tokens: tenant_access_token
- PATCH /open-apis/application/v6/applications/:app_id/contacts_range | 更新应用通讯录权限范围配置
  required: application:application.contacts_range:write
  tokens: tenant_access_token
- PATCH /open-apis/application/v6/applications/:app_id/feedbacks/:feedback_id | 更新应用反馈
  required: application:application.feedback.feedback_info
  tokens: tenant_access_token
- PATCH /open-apis/application/v6/applications/:app_id/visibility | 更新应用可用范围
  required: admin:app.visibility
  tokens: tenant_access_token
- PATCH /open-apis/application/v7/applications/:app_id/ability | 更新应用能力配置
  required: application:application:patch
  tokens: tenant_access_token, user_access_token
- PATCH /open-apis/application/v7/applications/:app_id/base | 更新应用基础信息配置
  required: application:application:patch
  tokens: tenant_access_token, user_access_token
- PATCH /open-apis/application/v7/applications/:app_id/config | 更新应用开发配置
  required: application:application:patch
  tokens: tenant_access_token, user_access_token
- PATCH /open-apis/attendance/v1/leave_accrual_record/:leave_id | 修改发放记录
  required: attendance:rule
  tokens: tenant_access_token
- PATCH /open-apis/bitable/v1/apps/:app_token/tables/:table_id | 更新数据表
  required: base:table:update, bitable:app
  tokens: tenant_access_token, user_access_token
- PATCH /open-apis/bitable/v1/apps/:app_token/tables/:table_id/forms/:form_id | 更新表单元数据
  required: base:form:update, bitable:app
  tokens: tenant_access_token, user_access_token
- PATCH /open-apis/bitable/v1/apps/:app_token/tables/:table_id/forms/:form_id/fields/:field_id | 更新表单问题
  required: base:form:update, bitable:app
  tokens: tenant_access_token, user_access_token
- PATCH /open-apis/bitable/v1/apps/:app_token/tables/:table_id/views/:view_id | 更新视图
  required: base:view:write_only, bitable:app
  tokens: tenant_access_token, user_access_token
- PATCH /open-apis/calendar/v4/calendars/:calendar_id | 更新日历信息
  required: calendar:calendar, calendar:calendar:update
  tokens: tenant_access_token, user_access_token
- PATCH /open-apis/calendar/v4/calendars/:calendar_id/events/:event_id | 更新日程
  required: calendar:calendar, calendar:calendar.event:update
  tokens: tenant_access_token, user_access_token
- PATCH /open-apis/cardkit/v1/cards/:card_id/elements/:element_id | 更新组件属性
  required: cardkit:card:write
  tokens: tenant_access_token
- PATCH /open-apis/cardkit/v1/cards/:card_id/settings | 更新卡片实体配置
  required: cardkit:card:write
  tokens: tenant_access_token
- PATCH /open-apis/contact/v3/departments/:department_id | 修改部门部分信息
  required: contact:contact
  tokens: tenant_access_token
- PATCH /open-apis/contact/v3/departments/:department_id/update_department_id | 更新部门 ID
  required: contact:contact:update_department_id
  tokens: tenant_access_token
- PATCH /open-apis/contact/v3/functional_roles/:role_id/members/batch_delete | 删除角色下的成员
  required: contact:functional_role
  tokens: tenant_access_token
- PATCH /open-apis/contact/v3/functional_roles/:role_id/members/scopes | 批量设置角色成员管理范围
  required: contact:functional_role
  tokens: tenant_access_token
- PATCH /open-apis/contact/v3/group/:group_id | 更新用户组
  required: contact:group
  tokens: tenant_access_token
- PATCH /open-apis/contact/v3/unit/:unit_id | 修改单位信息
  required: contact:unit
  tokens: tenant_access_token
- PATCH /open-apis/contact/v3/users/:user_id | 修改用户部分信息
  required: contact:contact, contact:user.base
  tokens: tenant_access_token, user_access_token
- PATCH /open-apis/contact/v3/users/:user_id/update_user_id | 更新用户 ID
  required: contact:contact:update_user_id
  tokens: tenant_access_token
- PATCH /open-apis/corehr/v1/companies/:company_id | 更新公司
  required: corehr:corehr
  tokens: tenant_access_token, user_access_token
- PATCH /open-apis/corehr/v1/contracts/:contract_id | 更新合同
  required: corehr:corehr
  tokens: tenant_access_token
- PATCH /open-apis/corehr/v1/departments/:department_id | 更新部门
  required: corehr:corehr, corehr:department:write
  tokens: tenant_access_token
- PATCH /open-apis/corehr/v1/employee_types/:employee_type_id | 更新人员类型
  required: corehr:common_data.preset_data:write, corehr:corehr
  tokens: tenant_access_token
- PATCH /open-apis/corehr/v1/employments/:employment_id | 更新雇佣信息
  required: corehr:corehr, corehr:employment.patch:write, corehr:employment:write
  tokens: tenant_access_token
- PATCH /open-apis/corehr/v1/job_datas/:job_data_id | 更新任职信息
  required: corehr:corehr, corehr:job_data:write
  tokens: tenant_access_token
- PATCH /open-apis/corehr/v1/job_families/:job_family_id | 更新序列
  required: corehr:corehr, corehr:job_family:write
  tokens: tenant_access_token
- PATCH /open-apis/corehr/v1/job_levels/:job_level_id | 更新单个职级
  required: corehr:corehr, corehr:job_level:write
  tokens: tenant_access_token
- PATCH /open-apis/corehr/v1/jobs/:job_id | 更新职务
  required: corehr:corehr, corehr:job:write
  tokens: tenant_access_token
- PATCH /open-apis/corehr/v1/national_id_types/:national_id_type_id | 更新国家证件类型
  required: corehr:common_data.preset_data:write, corehr:corehr
  tokens: tenant_access_token
- PATCH /open-apis/corehr/v1/persons/:person_id | 更新个人信息
  required: corehr:corehr
  tokens: tenant_access_token
- PATCH /open-apis/corehr/v1/pre_hires/:pre_hire_id | 更新待入职信息（不推荐）
  required: corehr:corehr, corehr:pre_hire:write
  tokens: tenant_access_token
- PATCH /open-apis/corehr/v1/working_hours_types/:working_hours_type_id | 更新工时制度
  required: corehr:common_data.preset_data:write, corehr:corehr
  tokens: tenant_access_token
- PATCH /open-apis/corehr/v2/cost_centers/:cost_center_id | 启用 / 停用成本中心
  required: corehr:cost_center:write
  tokens: tenant_access_token
- PATCH /open-apis/corehr/v2/cost_centers/:cost_center_id/versions/:version_id | 更正成本中心版本
  required: corehr:cost_center:write
  tokens: tenant_access_token
- PATCH /open-apis/corehr/v2/custom_orgs/:org_id | 更新自定义组织信息
  required: corehr:custom_org:write
  tokens: tenant_access_token
- PATCH /open-apis/corehr/v2/departments/:department_id | 更新部门
  required: corehr:corehr, corehr:department:write
  tokens: tenant_access_token
- PATCH /open-apis/corehr/v2/employees/additional_jobs/:additional_job_id | 更新兼职
  required: corehr:additional_job:write
  tokens: tenant_access_token
- PATCH /open-apis/corehr/v2/employees/international_assignments/:international_assignment_id | 更新外派信息
  required: corehr:employees.international_assignment:write
  tokens: tenant_access_token
- PATCH /open-apis/corehr/v2/job_grades/:job_grade_id | 更新职等
  required: corehr:job_grade:write
  tokens: tenant_access_token
- PATCH /open-apis/corehr/v2/locations/:location_id | 更新地点
  required: corehr:locations:write
  tokens: tenant_access_token
- PATCH /open-apis/corehr/v2/locations/:location_id/addresses/:address_id | 更新地点地址
  required: corehr:locations:write
  tokens: tenant_access_token
- PATCH /open-apis/corehr/v2/pathways/:pathway_id | 更新通道
  required: corehr:pathway:write
  tokens: tenant_access_token
- PATCH /open-apis/corehr/v2/persons/:person_id | 更新个人信息
  required: corehr:person:write
  tokens: tenant_access_token
- PATCH /open-apis/corehr/v2/positions/:position_id | 更新岗位信息
  required: corehr:position:write
  tokens: tenant_access_token
- PATCH /open-apis/corehr/v2/pre_hires/:pre_hire_id | 更新待入职信息
  required: corehr:pre_hire:update
  tokens: tenant_access_token
- PATCH /open-apis/corehr/v2/probation/assessments/:assessment_id | 更新试用期考核信息
  required: corehr:probation.assessment:write
  tokens: tenant_access_token
- PATCH /open-apis/directory/v1/departments/:department_id | 更新部门
  required: directory:department.update:write, directory:department:write
  tokens: tenant_access_token, user_access_token
- PATCH /open-apis/directory/v1/employees/:employee_id | 更新员工信息
  required: directory:employee.update:write, directory:employee:write
  tokens: tenant_access_token, user_access_token
- PATCH /open-apis/directory/v1/employees/:employee_id/regular | 更新待离职成员为在职
  required: directory:employee.to_be_resigned:write
  tokens: tenant_access_token, user_access_token
- PATCH /open-apis/directory/v1/employees/:employee_id/to_be_resigned | 更新在职员工为待离职
  required: directory:employee.to_be_resigned:write
  tokens: tenant_access_token, user_access_token
- PATCH /open-apis/docx/v1/chats/:chat_id/announcement/blocks/batch_update | 批量更新群公告块的内容
  required: im:chat.announcement:write_only
  tokens: tenant_access_token, user_access_token
- PATCH /open-apis/docx/v1/documents/:document_id/blocks/:block_id | 更新块的内容
  required: docx:document, docx:document:write_only
  tokens: tenant_access_token, user_access_token
- PATCH /open-apis/docx/v1/documents/:document_id/blocks/batch_update | 批量更新块的内容
  required: docx:document, docx:document:write_only
  tokens: tenant_access_token, user_access_token
- PATCH /open-apis/drive/v1/files/:file_token/subscriptions/:subscription_id | 更新订阅状态
  required: docs:document.subscription, drive:drive, drive:drive:readonly
  tokens: user_access_token
- PATCH /open-apis/drive/v2/permissions/:token/public | 更新云文档权限设置
  required: bitable:bitable, docs:doc, docs:permission.setting:write_only, docx:document, drive:drive, drive:file, sheets:spreadsheet, wiki:wiki
  tokens: tenant_access_token, user_access_token
- PATCH /open-apis/helpdesk/v1/agent_skills/:agent_skill_id | 更新客服技能
  required: helpdesk:all
  tokens: user_access_token
- PATCH /open-apis/helpdesk/v1/agents/:agent_id | 更新客服信息
  required: helpdesk:all
  tokens: user_access_token
- PATCH /open-apis/helpdesk/v1/agents/:agent_id/schedules | 更新客服工作日程
  required: helpdesk:all
  tokens: user_access_token
- PATCH /open-apis/helpdesk/v1/categories/:id | 更新知识库分类详情
  required: helpdesk:all
  tokens: user_access_token
- PATCH /open-apis/helpdesk/v1/faqs/:id | 修改知识库
  required: helpdesk:all
  tokens: user_access_token
- PATCH /open-apis/helpdesk/v1/notifications/:notification_id | 更新推送
  required: helpdesk:all
  tokens: user_access_token
- PATCH /open-apis/helpdesk/v1/ticket_customized_fields/:ticket_customized_field_id | 更新工单自定义字段
  required: helpdesk:all
  tokens: user_access_token
- PATCH /open-apis/hire/v1/eco_account_custom_fields/batch_update | 更新账号自定义字段
  required: hire:background_check_order, hire:exam
  tokens: tenant_access_token
- PATCH /open-apis/hire/v1/eco_background_check_custom_fields/batch_update | 更新背调自定义字段
  required: hire:background_check_order
  tokens: tenant_access_token
- PATCH /open-apis/hire/v1/eco_background_check_packages/batch_update | 更新背调套餐和附加调查项
  required: hire:background_check_order
  tokens: tenant_access_token
- PATCH /open-apis/hire/v1/eco_exam_papers/batch_update | 更新试卷列表
  required: hire:exam
  tokens: tenant_access_token
- PATCH /open-apis/hire/v1/ehr_import_tasks/:ehr_import_task_id | 更新 e-HR 导入任务结果
  required: hire:ehr_import
  tokens: tenant_access_token
- PATCH /open-apis/hire/v1/employees/:employee_id | 更新员工状态
  required: hire:employee
  tokens: tenant_access_token
- PATCH /open-apis/hire/v1/external_interview_assessments/:external_interview_assessment_id | 更新外部面评
  required: hire:external_application
  tokens: tenant_access_token
- PATCH /open-apis/hire/v1/interviewers/:interviewer_id | 更新面试官信息
  required: hire:interviewer
  tokens: tenant_access_token
- PATCH /open-apis/hire/v1/notes/:note_id | 更新备注
  required: hire:note
  tokens: tenant_access_token
- PATCH /open-apis/hire/v1/offers/:offer_id/offer_status | 更新 Offer 状态
  required: hire:offer
  tokens: tenant_access_token
- PATCH /open-apis/im/v1/chats/:chat_id/announcement | 更新群公告信息
  required: im:chat, im:chat.announcement:write_only
  tokens: tenant_access_token, user_access_token
- PATCH /open-apis/im/v1/chats/:chat_id/members/me_join | 用户或机器人主动加入群聊
  required: im:chat, im:chat.members:write_only
  tokens: tenant_access_token, user_access_token
- PATCH /open-apis/im/v1/chats/:chat_id/menu_items/:menu_item_id | 修改群菜单元信息
  required: im:chat, im:chat.menu_tree:write_only
  tokens: tenant_access_token
- PATCH /open-apis/im/v1/messages/:message_id | 更新已发送的消息卡片
  required: im:message, im:message:send_as_bot, im:message:update
  tokens: tenant_access_token, user_access_token
- PATCH /open-apis/im/v2/feed_cards/:feed_card_id | 即时提醒
  required: im:datasync.feed_card.time_sensitive:write
  tokens: tenant_access_token
- PATCH /open-apis/im/v2/feed_cards/bot_time_sentive | 机器人单聊即时提醒
  required: im:datasync.feed_card.time_sensitive:write
  tokens: tenant_access_token
- PATCH /open-apis/im/v2/tags/:tag_id | 修改标签
  required: im:tag:write
  tokens: tenant_access_token
- PATCH /open-apis/mail/v1/mailgroups/:mailgroup_id | 修改邮件组部分信息
  required: mail:mailgroup
  tokens: tenant_access_token
- PATCH /open-apis/mail/v1/public_mailboxes/:public_mailbox_id | 修改公共邮箱部分信息
  required: mail:public_mailbox
  tokens: tenant_access_token
- PATCH /open-apis/mail/v1/user_mailboxes/:user_mailbox_id/folders/:folder_id | 修改邮箱文件夹
  required: mail:user_mailbox.folder:write
  tokens: tenant_access_token, user_access_token
- PATCH /open-apis/mail/v1/user_mailboxes/:user_mailbox_id/mail_contacts/:mail_contact_id | 修改邮箱联系人信息
  required: mail:user_mailbox.mail_contact:write
  tokens: tenant_access_token, user_access_token
- PATCH /open-apis/okr/v1/periods/:period_id | 修改 OKR 周期状态
  required: okr:okr, okr:okr.period:writeonly
  tokens: tenant_access_token
- PATCH /open-apis/personal_settings/v1/system_statuses/:system_status_id | 修改系统状态
  required: personal_settings:status:system_status_update
  tokens: tenant_access_token
- PATCH /open-apis/search/v2/data_sources/:data_source_id | 修改数据源
  required: search:data_source, search:data_source:update
  tokens: tenant_access_token
- PATCH /open-apis/search/v2/schemas/:schema_id | 修改数据范式
  required: search:data_schemas:update, search:data_source, search:data_source:readonly
  tokens: tenant_access_token
- PATCH /open-apis/sheets/v3/spreadsheets/:spreadsheet_token | 修改电子表格属性
  required: drive:drive, sheets:spreadsheet, sheets:spreadsheet.meta:write_only
  tokens: tenant_access_token, user_access_token
- PATCH /open-apis/sheets/v3/spreadsheets/:spreadsheet_token/sheets/:sheet_id/filter_views/:filter_view_id | 更新筛选视图
  required: drive:drive, sheets:spreadsheet, sheets:spreadsheet:write_only
  tokens: tenant_access_token, user_access_token
- PATCH /open-apis/sheets/v3/spreadsheets/:spreadsheet_token/sheets/:sheet_id/float_images/:float_image_id | 更新浮动图片
  required: drive:drive, sheets:spreadsheet, sheets:spreadsheet:write_only
  tokens: tenant_access_token, user_access_token
- PATCH /open-apis/spark/v1/apps/:app_id/tables/:table_name/records | 按条件更新数据表中的记录
  required: spark:app.table.record:write
  tokens: user_access_token
- PATCH /open-apis/spark/v1/apps/:app_id/tables/:table_name/records_batch_update | 批量更新数据表中的记录
  required: spark:app.table.record:write
  tokens: user_access_token
- PATCH /open-apis/task/v1/tasks/:task_id | 更新任务
  required: task:task, task:task:writeonly
  tokens: tenant_access_token, user_access_token
- PATCH /open-apis/task/v2/comments/:comment_id | 更新评论
  required: task:comment:write, task:comment:writeonly
  tokens: tenant_access_token, user_access_token
- PATCH /open-apis/task/v2/custom_fields/:custom_field_guid | 更新自定义字段
  required: task:custom_field:write, task:custom_field:writeonly
  tokens: tenant_access_token, user_access_token
- PATCH /open-apis/task/v2/custom_fields/:custom_field_guid/options/:option_guid | 更新自定义字段选项
  required: task:custom_field:writeonly, task:tasklist:write
  tokens: tenant_access_token, user_access_token
- PATCH /open-apis/task/v2/sections/:section_guid | 更新自定义分组
  required: task:section:write, task:section:writeonly
  tokens: tenant_access_token, user_access_token
- PATCH /open-apis/task/v2/tasklists/:tasklist_guid | 更新清单
  required: task:tasklist:write, task:tasklist:writeonly
  tokens: tenant_access_token, user_access_token
- PATCH /open-apis/task/v2/tasklists/:tasklist_guid/activity_subscriptions/:activity_subscription_guid | 更新动态订阅
  required: task:tasklist:write, task:tasklist:writeonly
  tokens: tenant_access_token, user_access_token
- PATCH /open-apis/task/v2/tasks/:task_guid | 更新任务
  required: task:task:write, task:task:writeonly
  tokens: tenant_access_token, user_access_token
- PATCH /open-apis/vc/v1/meetings/:meeting_id/end | 结束会议
  required: vc:meeting
  tokens: user_access_token
- PATCH /open-apis/vc/v1/meetings/:meeting_id/invite | 邀请参会人
  required: vc:meeting, vc:meeting.participant:write
  tokens: user_access_token
- PATCH /open-apis/vc/v1/meetings/:meeting_id/recording/set_permission | 授权录制文件
  required: vc:record
  tokens: user_access_token
- PATCH /open-apis/vc/v1/meetings/:meeting_id/recording/start | 开始录制
  required: vc:record
  tokens: user_access_token
- PATCH /open-apis/vc/v1/meetings/:meeting_id/recording/stop | 停止录制
  required: vc:record
  tokens: user_access_token
- PATCH /open-apis/vc/v1/meetings/:meeting_id/set_host | 设置主持人
  required: vc:meeting, vc:meeting.participant:write
  tokens: tenant_access_token, user_access_token
- PATCH /open-apis/vc/v1/reserve_configs/:reserve_config_id | 更新会议室预定限制
  required: vc:room, vc:rooms.room:update
  tokens: tenant_access_token
- PATCH /open-apis/vc/v1/reserve_configs/:reserve_config_id/admin | 更新会议室预定管理员
  required: vc:room, vc:rooms.room:update
  tokens: tenant_access_token
- PATCH /open-apis/vc/v1/reserve_configs/:reserve_config_id/disable_inform | 更新禁用状态变更通知
  required: vc:room, vc:rooms.room:update
  tokens: tenant_access_token
- PATCH /open-apis/vc/v1/reserve_configs/:reserve_config_id/form | 更新会议室预定表单
  required: vc:room, vc:rooms.room:update
  tokens: tenant_access_token
- PATCH /open-apis/vc/v1/room_levels/:room_level_id | 更新会议室层级
  required: vc:room, vc:rooms.roomlevel:update
  tokens: tenant_access_token
- PATCH /open-apis/vc/v1/rooms/:room_id | 更新会议室
  required: vc:room, vc:rooms.room:update
  tokens: tenant_access_token
- POST /open-apis/acs/v1/rule_external | 创建或更新权限组
  required: acs:device:write, acs:users
  tokens: user_access_token
- POST /open-apis/acs/v1/rule_external/device_bind | 设备绑定权限组
  required: acs:device:write, acs:users
  tokens: user_access_token
- POST /open-apis/acs/v1/visitors | 添加访客
  required: acs:users
  tokens: user_access_token
- POST /open-apis/admin/v1/badge_images | 上传勋章图片
  required: admin:badge
  tokens: tenant_access_token
- POST /open-apis/admin/v1/badges | 创建勋章
  required: admin:badge
  tokens: tenant_access_token
- POST /open-apis/admin/v1/badges/:badge_id/grants | 创建授予名单
  required: admin:badge.grant
  tokens: tenant_access_token
- POST /open-apis/admin/v1/password/reset | 重置用户的企业邮箱密码
  required: admin:ent_email_password
  tokens: tenant_access_token
- POST /open-apis/aily/v1/apps/:app_id/data_assets | 创建数据知识
  required: aily:data_asset:write
  tokens: tenant_access_token, user_access_token
- POST /open-apis/aily/v1/apps/:app_id/data_assets/upload_file | 上传文件用于数据知识管理
  required: aily:data_asset:upload_file
  tokens: tenant_access_token, user_access_token
- POST /open-apis/aily/v1/apps/:app_id/knowledges/ask | 执行数据知识问答
  required: aily:knowledge:ask
  tokens: tenant_access_token, user_access_token
- POST /open-apis/aily/v1/apps/:app_id/skills/:skill_id/start | 调用技能
  required: aily:skill:write
  tokens: tenant_access_token, user_access_token
- POST /open-apis/aily/v1/sessions | 创建会话
  required: aily:session:write
  tokens: tenant_access_token, user_access_token
- POST /open-apis/aily/v1/sessions/:aily_session_id/messages | 发送 Aily 消息
  required: aily:message:write
  tokens: tenant_access_token, user_access_token
- POST /open-apis/aily/v1/sessions/:aily_session_id/runs | 创建运行
  required: aily:run:write
  tokens: tenant_access_token, user_access_token
- POST /open-apis/aily/v1/sessions/:aily_session_id/runs/:run_id/cancel | 取消运行
  required: aily:run:write
  tokens: tenant_access_token, user_access_token
- POST /open-apis/apaas/v1/applications/:namespace/environment_variables/query | 查询环境变量列表
  required: app_engine:application.environment_variable:read
  tokens: tenant_access_token
- POST /open-apis/apaas/v1/applications/:namespace/flows/:flow_id/execute | 发起流程
  required: app_engine:flow:write
  tokens: tenant_access_token
- POST /open-apis/apaas/v1/applications/:namespace/functions/:function_api_name/invoke | 执行函数
  required: app_engine:application.function:write
  tokens: tenant_access_token
- POST /open-apis/apaas/v1/applications/:namespace/objects/:object_api_name/records | 新建记录
  required: app_engine:object.record:write
  tokens: tenant_access_token
- POST /open-apis/apaas/v1/applications/:namespace/objects/:object_api_name/records/:id/query | 获取记录详情
  required: app_engine:object.record:read
  tokens: tenant_access_token
- POST /open-apis/apaas/v1/applications/:namespace/objects/:object_api_name/records/batch_create | 批量新建记录
  required: app_engine:object.record:write
  tokens: tenant_access_token
- POST /open-apis/apaas/v1/applications/:namespace/objects/:object_api_name/records/batch_query | 查询记录列表
  required: app_engine:object.record:read
  tokens: tenant_access_token
- POST /open-apis/apaas/v1/applications/:namespace/objects/oql_query | 执行 OQL
  required: app_engine:object.record:read, app_engine:object.record:write
  tokens: tenant_access_token
- POST /open-apis/apaas/v1/applications/:namespace/objects/search | 搜索记录
  required: app_engine:object.record:read
  tokens: tenant_access_token
- POST /open-apis/apaas/v1/applications/:namespace/record_permissions/:record_permission_api_name/member/batch_create_authorization | 批量创建记录权限用户授权
  required: app_engine:record_permission.member:write
  tokens: tenant_access_token
- POST /open-apis/apaas/v1/applications/:namespace/record_permissions/:record_permission_api_name/member/batch_remove_authorization | 批量删除记录权限用户授权
  required: app_engine:record_permission.member:write
  tokens: tenant_access_token
- POST /open-apis/apaas/v1/applications/:namespace/roles/:role_api_name/member/batch_create_authorization | 批量创建角色成员授权
  required: app_engine:role.member:write
  tokens: tenant_access_token
- POST /open-apis/apaas/v1/applications/:namespace/roles/:role_api_name/member/batch_remove_authorization | 批量删除角色成员授权
  required: app_engine:role.member:write
  tokens: tenant_access_token
- POST /open-apis/apaas/v1/approval_instances/:approval_instance_id/cancel | 撤销人工任务
  required: app_engine:approval:write
  tokens: tenant_access_token
- POST /open-apis/apaas/v1/approval_tasks/:approval_task_id/add_assignee | 人工任务加签
  required: app_engine:approval:write
  tokens: tenant_access_token
- POST /open-apis/apaas/v1/approval_tasks/:approval_task_id/agree | 同意人工任务
  required: app_engine:approval:write
  tokens: tenant_access_token
- POST /open-apis/apaas/v1/approval_tasks/:approval_task_id/reject | 拒绝人工任务
  required: app_engine:approval:write
  tokens: tenant_access_token
- POST /open-apis/apaas/v1/approval_tasks/:approval_task_id/transfer | 转交人工任务
  required: app_engine:approval:write
  tokens: tenant_access_token
- POST /open-apis/apaas/v1/user_task/query | 查询人工任务
  required: app_engine:approval:read
  tokens: tenant_access_token
- POST /open-apis/apaas/v1/user_tasks/:task_id/cc | 抄送人工任务
  required: app_engine:approval:write
  tokens: tenant_access_token
- POST /open-apis/apaas/v1/user_tasks/:task_id/chat_group | 基于人工任务发起群聊
  required: app_engine:approval:write
  tokens: tenant_access_token
- POST /open-apis/apaas/v1/user_tasks/:task_id/expediting | 催办人工任务
  required: app_engine:approval:write
  tokens: tenant_access_token
- POST /open-apis/apaas/v1/user_tasks/:task_id/rollback | 退回人工任务
  required: app_engine:approval:write
  tokens: tenant_access_token
- POST /open-apis/apaas/v1/user_tasks/:task_id/rollback_points | 查询人工任务可退回的位置
  required: app_engine:approval:read
  tokens: tenant_access_token
- POST /open-apis/apaas/v1/workspaces/:workspace_id/sql_commands | 执行SQL
  required: app_engine:workspace.sql_commands:write
  tokens: user_access_token
- POST /open-apis/apaas/v1/workspaces/:workspace_id/tables/:table_name/records | 向数据表中添加或更新记录
  required: app_engine:workspace.table.record:write
  tokens: user_access_token
- POST /open-apis/application/v6/app_badge/set | 更新应用红点
  required: (none)
  tokens: tenant_access_token
- POST /open-apis/application/v6/applications/:app_id/app_usage/department_overview | 获取多部门应用使用概览
  required: application:application.app_usage_stats.overview:readonly
  tokens: tenant_access_token
- POST /open-apis/application/v6/applications/:app_id/app_usage/message_push_overview | 获取消息推送概览
  required: application:application.app_message_stats.overview:readonly
  tokens: tenant_access_token
- POST /open-apis/application/v6/applications/:app_id/app_usage/overview | 获取应用使用概览
  required: application:application.app_usage_stats.overview:readonly
  tokens: tenant_access_token
- POST /open-apis/application/v6/applications/:app_id/visibility/check_white_black_list | 查询用户或部门是否在应用的可用或禁用名单
  required: admin:app.info:readonly, application:application:self_manage
  tokens: tenant_access_token
- POST /open-apis/application/v6/scopes/apply | 向管理员申请授权
  required: (none)
  tokens: tenant_access_token
- POST /open-apis/application/v7/app_avatar/upload | 上传应用图标
  required: application:application:patch
  tokens: tenant_access_token, user_access_token
- POST /open-apis/application/v7/applications/:app_id/publish | 提交发布自建应用
  required: application:application:patch
  tokens: tenant_access_token, user_access_token
- POST /open-apis/approval/v4/approvals | 创建审批定义
  required: approval:approval, approval:definition
  tokens: tenant_access_token
- POST /open-apis/approval/v4/approvals/:approval_code/subscribe | 订阅审批事件
  required: approval:approval, approval:definition
  tokens: tenant_access_token
- POST /open-apis/approval/v4/approvals/:approval_code/unsubscribe | 取消订阅审批事件
  required: approval:approval, approval:definition
  tokens: tenant_access_token
- POST /open-apis/approval/v4/districts/search | 搜索地理库信息
  required: approval:approval, approval:approval:readonly
  tokens: tenant_access_token, user_access_token
- POST /open-apis/approval/v4/external_approvals | 创建三方审批定义
  required: approval:approval, approval:external_approval
  tokens: tenant_access_token
- POST /open-apis/approval/v4/external_instances | 同步三方审批实例
  required: approval:approval, approval:external_instance
  tokens: tenant_access_token
- POST /open-apis/approval/v4/external_instances/check | 校验三方审批实例
  required: approval:approval, approval:approval:readonly, approval:external_instance
  tokens: tenant_access_token
- POST /open-apis/approval/v4/instances | 创建审批实例
  required: approval:approval, approval:instance
  tokens: tenant_access_token
- POST /open-apis/approval/v4/instances/:instance_id/comments | 创建评论
  required: approval:approval, approval:instance.comment
  tokens: tenant_access_token
- POST /open-apis/approval/v4/instances/:instance_id/comments/remove | 清空评论
  required: approval:approval, approval:instance.comment
  tokens: tenant_access_token
- POST /open-apis/approval/v4/instances/add_sign | 审批任务加签
  required: approval:approval, approval:approval:readonly, approval:task
  tokens: tenant_access_token
- POST /open-apis/approval/v4/instances/cancel | 撤回审批实例
  required: approval:approval, approval:approval:readonly, approval:instance
  tokens: tenant_access_token
- POST /open-apis/approval/v4/instances/cc | 抄送审批实例
  required: approval:approval, approval:approval:readonly, approval:instance
  tokens: tenant_access_token
- POST /open-apis/approval/v4/instances/preview | 预览审批流程
  required: approval:approval, approval:approval:readonly, approval:instance
  tokens: tenant_access_token
- POST /open-apis/approval/v4/instances/query | 查询实例列表
  required: approval:approval.list:readonly
  tokens: tenant_access_token
- POST /open-apis/approval/v4/instances/search_cc | 查询抄送列表
  required: approval:approval.list:readonly
  tokens: tenant_access_token
- POST /open-apis/approval/v4/instances/specified_rollback | 退回审批任务
  required: approval:approval, approval:approval:readonly, approval:task
  tokens: tenant_access_token
- POST /open-apis/approval/v4/tasks/approve | 同意审批任务
  required: approval:approval, approval:approval:readonly, approval:task
  tokens: tenant_access_token
- POST /open-apis/approval/v4/tasks/reject | 拒绝审批任务
  required: approval:approval, approval:approval:readonly, approval:task
  tokens: tenant_access_token
- POST /open-apis/approval/v4/tasks/resubmit | 重新提交审批任务
  required: approval:approval, approval:approval:readonly, approval:task
  tokens: tenant_access_token
- POST /open-apis/approval/v4/tasks/search | 查询任务列表
  required: approval:approval.list:readonly, approval:approval:readonly
  tokens: tenant_access_token
- POST /open-apis/approval/v4/tasks/transfer | 转交审批任务
  required: approval:approval, approval:approval:readonly, approval:task
  tokens: tenant_access_token
- POST /open-apis/attendance/v1/approval_infos/process | 通知审批状态更新
  required: attendance:task
  tokens: tenant_access_token
- POST /open-apis/attendance/v1/archive_rule/del_report | 删除归档报表行数据
  required: attendance:task
  tokens: tenant_access_token, user_access_token
- POST /open-apis/attendance/v1/archive_rule/upload_report | 写入归档报表结果
  required: attendance:task
  tokens: tenant_access_token
- POST /open-apis/attendance/v1/archive_rule/user_stats_fields_query | 查询归档报表表头
  required: attendance:task
  tokens: tenant_access_token, user_access_token
- POST /open-apis/attendance/v1/files/upload | 上传用户人脸识别照片
  required: attendance:rule
  tokens: tenant_access_token
- POST /open-apis/attendance/v1/groups | 创建或修改考勤组
  required: attendance:rule
  tokens: tenant_access_token
- POST /open-apis/attendance/v1/groups/search | 按名称查询考勤组
  required: attendance:rule, attendance:rule:readonly
  tokens: tenant_access_token
- POST /open-apis/attendance/v1/shifts | 创建班次
  required: attendance:rule
  tokens: tenant_access_token
- POST /open-apis/attendance/v1/shifts/query | 按名称查询班次
  required: attendance:task:readonly
  tokens: tenant_access_token
- POST /open-apis/attendance/v1/user_approvals | 写入审批结果
  required: attendance:task
  tokens: tenant_access_token
- POST /open-apis/attendance/v1/user_approvals/query | 获取审批数据
  required: attendance:task:readonly
  tokens: tenant_access_token
- POST /open-apis/attendance/v1/user_daily_shifts/batch_create | 创建或修改排班表
  required: attendance:rule
  tokens: tenant_access_token
- POST /open-apis/attendance/v1/user_daily_shifts/batch_create_temp | 创建或修改临时排班
  required: attendance:rule
  tokens: tenant_access_token, user_access_token
- POST /open-apis/attendance/v1/user_daily_shifts/query | 查询排班表
  required: attendance:task:readonly
  tokens: tenant_access_token
- POST /open-apis/attendance/v1/user_flows/batch_create | 导入打卡流水
  required: attendance:task
  tokens: tenant_access_token
- POST /open-apis/attendance/v1/user_flows/batch_del | 删除打卡流水
  required: attendance:task
  tokens: tenant_access_token
- POST /open-apis/attendance/v1/user_flows/query | 批量查询打卡流水
  required: attendance:task:readonly
  tokens: tenant_access_token
- POST /open-apis/attendance/v1/user_settings/modify | 修改用户人脸识别信息
  required: attendance:rule
  tokens: tenant_access_token
- POST /open-apis/attendance/v1/user_stats_datas/query | 查询统计数据
  required: attendance:task, attendance:task:readonly
  tokens: tenant_access_token
- POST /open-apis/attendance/v1/user_stats_fields/query | 查询统计表头
  required: attendance:task, attendance:task:readonly
  tokens: tenant_access_token
- POST /open-apis/attendance/v1/user_stats_views/query | 查询统计设置
  required: attendance:task, attendance:task:readonly
  tokens: tenant_access_token
- POST /open-apis/attendance/v1/user_task_remedys | 通知补卡审批发起
  required: attendance:task
  tokens: tenant_access_token
- POST /open-apis/attendance/v1/user_task_remedys/query | 获取补卡记录
  required: attendance:task:readonly
  tokens: tenant_access_token
- POST /open-apis/attendance/v1/user_task_remedys/query_user_allowed_remedys | 获取可补卡时间
  required: attendance:task:readonly
  tokens: tenant_access_token
- POST /open-apis/attendance/v1/user_tasks/query | 查询打卡结果
  required: attendance:task:readonly
  tokens: tenant_access_token
- POST /open-apis/auth/v3/app_access_token | 商店应用获取 app_access_token
  required: (none)
- POST /open-apis/auth/v3/app_access_token/internal | 自建应用获取 app_access_token
  required: (none)
- POST /open-apis/auth/v3/app_ticket/resend | 重新获取 app_ticket
  required: (none)
- POST /open-apis/auth/v3/tenant_access_token | 商店应用获取 tenant_access_token
  required: (none)
- POST /open-apis/auth/v3/tenant_access_token/internal | 自建应用获取 tenant_access_token
  required: (none)
- POST /open-apis/baike/v1/drafts | 创建草稿
  required: baike:entity, baike:entity:exempt_review
  tokens: tenant_access_token, user_access_token
- POST /open-apis/baike/v1/entities | 创建免审词条
  required: baike:entity:exempt_review
  tokens: tenant_access_token, user_access_token
- POST /open-apis/baike/v1/entities/extract | 提取潜在的词条
  required: baike:entity, baike:entity:exempt_review, baike:entity:readonly
  tokens: tenant_access_token, user_access_token
- POST /open-apis/baike/v1/entities/highlight | 词条高亮
  required: baike:entity, baike:entity:exempt_review, baike:entity:readonly
  tokens: tenant_access_token, user_access_token
- POST /open-apis/baike/v1/entities/match | 精准搜索词条
  required: baike:entity, baike:entity:exempt_review, baike:entity:readonly
  tokens: tenant_access_token, user_access_token
- POST /open-apis/baike/v1/entities/search | 模糊搜索词条
  required: baike:entity, baike:entity:exempt_review, baike:entity:readonly
  tokens: tenant_access_token, user_access_token
- POST /open-apis/baike/v1/files/upload | 上传图片
  required: baike:entity, baike:entity:exempt_review
  tokens: tenant_access_token, user_access_token
- POST /open-apis/base/v2/apps/:app_token/roles | 新增自定义角色
  required: base:role:create
  tokens: tenant_access_token, user_access_token
- POST /open-apis/bitable/v1/apps | 创建多维表格
  required: base:app:create, bitable:app
  tokens: tenant_access_token, user_access_token
- POST /open-apis/bitable/v1/apps/:app_token/copy | 复制多维表格
  required: base:app:copy, bitable:app
  tokens: tenant_access_token, user_access_token
- POST /open-apis/bitable/v1/apps/:app_token/dashboards/:block_id/copy | 复制仪表盘
  required: base:dashboard:copy, bitable:app
  tokens: tenant_access_token, user_access_token
- POST /open-apis/bitable/v1/apps/:app_token/roles | 新增自定义角色
  required: base:role:create, bitable:app
  tokens: tenant_access_token, user_access_token
- POST /open-apis/bitable/v1/apps/:app_token/roles/:role_id/members | 新增协作者
  required: base:collaborator:create, bitable:app
  tokens: tenant_access_token, user_access_token
- POST /open-apis/bitable/v1/apps/:app_token/roles/:role_id/members/batch_create | 批量新增协作者
  required: base:collaborator:create, bitable:app
  tokens: tenant_access_token, user_access_token
- POST /open-apis/bitable/v1/apps/:app_token/roles/:role_id/members/batch_delete | 批量删除协作者
  required: base:collaborator:delete, bitable:app
  tokens: tenant_access_token, user_access_token
- POST /open-apis/bitable/v1/apps/:app_token/tables | 新增一个数据表
  required: base:table:create, bitable:app
  tokens: tenant_access_token, user_access_token
- POST /open-apis/bitable/v1/apps/:app_token/tables/:table_id/field_groups | 创建字段编组
  required: base:field_group:create
  tokens: tenant_access_token, user_access_token
- POST /open-apis/bitable/v1/apps/:app_token/tables/:table_id/fields | 新增字段
  required: base:field:create, bitable:app
  tokens: tenant_access_token, user_access_token
- POST /open-apis/bitable/v1/apps/:app_token/tables/:table_id/forms/:form_id/upgrade | 升级表单
  required: base:form:update
  tokens: tenant_access_token, user_access_token
- POST /open-apis/bitable/v1/apps/:app_token/tables/:table_id/records | 新增记录
  required: base:record:create, bitable:app
  tokens: tenant_access_token, user_access_token
- POST /open-apis/bitable/v1/apps/:app_token/tables/:table_id/records/batch_create | 新增多条记录
  required: base:record:create, bitable:app
  tokens: tenant_access_token, user_access_token
- POST /open-apis/bitable/v1/apps/:app_token/tables/:table_id/records/batch_delete | 删除多条记录
  required: base:record:delete, bitable:app
  tokens: tenant_access_token, user_access_token
- POST /open-apis/bitable/v1/apps/:app_token/tables/:table_id/records/batch_get | 批量获取记录
  required: base:record:read, bitable:app, bitable:app:readonly
  tokens: tenant_access_token, user_access_token
- POST /open-apis/bitable/v1/apps/:app_token/tables/:table_id/records/batch_update | 更新多条记录
  required: base:record:update, bitable:app
  tokens: tenant_access_token, user_access_token
- POST /open-apis/bitable/v1/apps/:app_token/tables/:table_id/records/search | 查询记录
  required: base:record:retrieve, bitable:app, bitable:app:readonly
  tokens: tenant_access_token, user_access_token
- POST /open-apis/bitable/v1/apps/:app_token/tables/:table_id/views | 新增视图
  required: base:view:write_only, bitable:app
  tokens: tenant_access_token, user_access_token
- POST /open-apis/bitable/v1/apps/:app_token/tables/batch_create | 新增多个数据表
  required: base:table:create, bitable:app
  tokens: tenant_access_token, user_access_token
- POST /open-apis/bitable/v1/apps/:app_token/tables/batch_delete | 删除多个数据表
  required: base:table:delete, bitable:app
  tokens: tenant_access_token, user_access_token
- POST /open-apis/board/v1/whiteboards/:whiteboard_id/nodes/plantuml | 解析画板语法
  required: board:whiteboard:node:create
  tokens: tenant_access_token, user_access_token
- POST /open-apis/board/v1/whiteboards/:whiteboard_id/update_theme | 更新画板主题
  required: board:whiteboard:node:create
  tokens: tenant_access_token, user_access_token
- POST /open-apis/calendar/v4/calendars | 创建共享日历
  required: calendar:calendar, calendar:calendar:create
  tokens: tenant_access_token, user_access_token
- POST /open-apis/calendar/v4/calendars/:calendar_id/acls | 创建访问控制
  required: calendar:calendar, calendar:calendar.acl:create
  tokens: tenant_access_token, user_access_token
- POST /open-apis/calendar/v4/calendars/:calendar_id/acls/subscription | 订阅日历访问控制变更事件
  required: calendar:calendar, calendar:calendar.acl:read, calendar:calendar:readonly
  tokens: user_access_token
- POST /open-apis/calendar/v4/calendars/:calendar_id/acls/unsubscription | 取消订阅日历访问控制变更事件
  required: calendar:calendar, calendar:calendar.acl:read, calendar:calendar:readonly
  tokens: user_access_token
- POST /open-apis/calendar/v4/calendars/:calendar_id/events | 创建日程
  required: calendar:calendar, calendar:calendar.event:create
  tokens: tenant_access_token, user_access_token
- POST /open-apis/calendar/v4/calendars/:calendar_id/events/:event_id/attendees | 添加日程参与人
  required: calendar:calendar, calendar:calendar.event:update
  tokens: tenant_access_token, user_access_token
- POST /open-apis/calendar/v4/calendars/:calendar_id/events/:event_id/attendees/batch_delete | 删除日程参与人
  required: calendar:calendar, calendar:calendar.event:update, calendar:calendar.event:writeonly
  tokens: tenant_access_token, user_access_token
- POST /open-apis/calendar/v4/calendars/:calendar_id/events/:event_id/meeting_chat | 创建会议群
  required: calendar:calendar, calendar:calendar.event:update
  tokens: tenant_access_token, user_access_token
- POST /open-apis/calendar/v4/calendars/:calendar_id/events/:event_id/meeting_minute | 创建会议纪要
  required: calendar:calendar, calendar:calendar.event:update
  tokens: tenant_access_token, user_access_token
- POST /open-apis/calendar/v4/calendars/:calendar_id/events/:event_id/reply | 回复日程
  required: calendar:calendar, calendar:calendar.event:reply, calendar:calendar.event:writeonly
  tokens: tenant_access_token, user_access_token
- POST /open-apis/calendar/v4/calendars/:calendar_id/events/search | 搜索日程
  required: calendar:calendar, calendar:calendar.event:read, calendar:calendar:readonly
  tokens: tenant_access_token, user_access_token
- POST /open-apis/calendar/v4/calendars/:calendar_id/events/subscription | 订阅日程变更事件
  required: calendar:calendar, calendar:calendar.event:read, calendar:calendar:readonly
  tokens: user_access_token
- POST /open-apis/calendar/v4/calendars/:calendar_id/events/unsubscription | 取消订阅日程变更事件
  required: calendar:calendar, calendar:calendar.event:read, calendar:calendar:readonly
  tokens: user_access_token
- POST /open-apis/calendar/v4/calendars/:calendar_id/subscribe | 订阅日历
  required: calendar:calendar, calendar:calendar:subscribe
  tokens: tenant_access_token, user_access_token
- POST /open-apis/calendar/v4/calendars/:calendar_id/unsubscribe | 取消订阅日历
  required: calendar:calendar, calendar:calendar:subscribe
  tokens: tenant_access_token, user_access_token
- POST /open-apis/calendar/v4/calendars/mget | 批量查询日历信息
  required: calendar:calendar.calendar:readonly, calendar:calendar:read, calendar:calendar:readonly
  tokens: tenant_access_token, user_access_token
- POST /open-apis/calendar/v4/calendars/primary | 查询主日历信息
  required: calendar:calendar.calendar:readonly, calendar:calendar:read, calendar:calendar:readonly
  tokens: tenant_access_token, user_access_token
- POST /open-apis/calendar/v4/calendars/primarys | 批量获取主日历信息
  required: calendar:calendar.calendar:readonly, calendar:calendar:read, calendar:calendar:readonly
  tokens: tenant_access_token, user_access_token
- POST /open-apis/calendar/v4/calendars/search | 搜索日历
  required: calendar:calendar, calendar:calendar:read, calendar:calendar:readonly
  tokens: tenant_access_token, user_access_token
- POST /open-apis/calendar/v4/calendars/subscription | 订阅日历变更事件
  required: calendar:calendar, calendar:calendar:read, calendar:calendar:readonly
  tokens: user_access_token
- POST /open-apis/calendar/v4/calendars/unsubscription | 取消订阅日历变更事件
  required: calendar:calendar, calendar:calendar:read, calendar:calendar:readonly
  tokens: user_access_token
- POST /open-apis/calendar/v4/exchange_bindings | 将 Exchange 账户绑定到飞书账户
  required: calendar:calendar, calendar:calendar:readonly, calendar:exchange.bindings:create
  tokens: user_access_token
- POST /open-apis/calendar/v4/freebusy/batch | 批量查询主日历日程忙闲信息
  required: calendar:calendar, calendar:calendar.free_busy:read, calendar:calendar:readonly
  tokens: tenant_access_token, user_access_token
- POST /open-apis/calendar/v4/freebusy/list | 查询主日历日程忙闲信息
  required: calendar:calendar, calendar:calendar.free_busy:read, calendar:calendar:readonly
  tokens: tenant_access_token, user_access_token
- POST /open-apis/calendar/v4/settings/generate_caldav_conf | 生成 CalDAV 配置
  required: calendar:calendar, calendar:setting:generate_caldav_conf, calendar:settings.caldav:create
  tokens: user_access_token
- POST /open-apis/calendar/v4/timeoff_events | 创建请假日程
  required: calendar:time_off:create, calendar:timeoff
  tokens: tenant_access_token
- POST /open-apis/cardkit/v1/cards | 创建卡片实体
  required: cardkit:card:write
  tokens: tenant_access_token
- POST /open-apis/cardkit/v1/cards/:card_id/batch_update | 局部更新卡片实体
  required: cardkit:card:write
  tokens: tenant_access_token
- POST /open-apis/cardkit/v1/cards/:card_id/elements | 新增组件
  required: cardkit:card:write
  tokens: tenant_access_token
- POST /open-apis/compensation/v1/archives | 创建薪资档案
  required: corehr:compensation_archive:write
  tokens: tenant_access_token, user_access_token
- POST /open-apis/compensation/v1/archives/query | 批量查询员工薪资档案
  required: corehr:compensation_archive_detail:read
  tokens: tenant_access_token, user_access_token
- POST /open-apis/compensation/v1/lump_sum_payment/batch_create | 批量创建一次性支付记录
  required: corehr:compensation.lump_sum_payment:write
  tokens: tenant_access_token
- POST /open-apis/compensation/v1/lump_sum_payment/batch_remove | 批量删除一次性支付记录
  required: corehr:compensation.lump_sum_payment:write
  tokens: tenant_access_token
- POST /open-apis/compensation/v1/lump_sum_payment/batch_update | 批量更正一次性支付记录
  required: corehr:compensation.lump_sum_payment:write
  tokens: tenant_access_token
- POST /open-apis/compensation/v1/lump_sum_payment/query | 查询一次性支付授予记录
  required: corehr:compensation.lump_sum_payment:read
  tokens: tenant_access_token
- POST /open-apis/compensation/v1/lump_sum_payment/query_detail | 查询一次性支付授予明细
  required: corehr:compensation.lump_sum_payment:read
  tokens: tenant_access_token
- POST /open-apis/compensation/v1/recurring_payment/batch_create | 批量创建经常性支付记录
  required: corehr:compensation.recurring_payment:write
  tokens: tenant_access_token
- POST /open-apis/compensation/v1/recurring_payment/batch_remove | 批量删除经常性支付记录
  required: corehr:compensation.recurring_payment:delete
  tokens: tenant_access_token
- POST /open-apis/compensation/v1/recurring_payment/batch_update | 批量更正经常性支付记录
  required: corehr:compensation.recurring_payment:update
  tokens: tenant_access_token
- POST /open-apis/compensation/v1/recurring_payment/query | 查询经常性支付记录
  required: corehr:compensation.recurring_payment:read
  tokens: tenant_access_token
- POST /open-apis/compensation/v1/social_archive_adjust_record/query | 通过员工ID批量获取社保增减员记录
  required: corehr:compensation.social_adjust_record:read
  tokens: tenant_access_token
- POST /open-apis/compensation/v1/social_archive/query | 批量获取员工参保档案
  required: corehr:compensation.social_archive:read
  tokens: tenant_access_token
- POST /open-apis/compensation/v1/social_plans/query | 根据方案ID和生效日期批量查询参保方案
  required: corehr:compensation.social_plan:read
  tokens: tenant_access_token
- POST /open-apis/contact/v3/departments | 创建部门
  required: contact:contact
  tokens: tenant_access_token
- POST /open-apis/contact/v3/departments/search | 搜索部门
  required: contact:contact.base:readonly, contact:contact:access_as_app, contact:contact:readonly_as_app, search:department:read
  tokens: user_access_token
- POST /open-apis/contact/v3/departments/unbind_department_chat | 部门群转为普通群
  required: contact:contact
  tokens: tenant_access_token
- POST /open-apis/contact/v3/employee_type_enums | 新增人员类型
  required: contact:contact
  tokens: tenant_access_token
- POST /open-apis/contact/v3/functional_roles | 创建角色
  required: contact:functional_role
  tokens: tenant_access_token
- POST /open-apis/contact/v3/functional_roles/:role_id/members/batch_create | 批量添加角色成员
  required: contact:functional_role
  tokens: tenant_access_token
- POST /open-apis/contact/v3/group | 创建用户组
  required: contact:group
  tokens: tenant_access_token
- POST /open-apis/contact/v3/group/:group_id/member/add | 添加用户组成员
  required: contact:group
  tokens: tenant_access_token
- POST /open-apis/contact/v3/group/:group_id/member/batch_add | 批量添加用户组成员
  required: contact:group
  tokens: tenant_access_token
- POST /open-apis/contact/v3/group/:group_id/member/batch_remove | 批量移除用户组成员
  required: contact:group
  tokens: tenant_access_token
- POST /open-apis/contact/v3/group/:group_id/member/remove | 移除用户组成员
  required: contact:group
  tokens: tenant_access_token
- POST /open-apis/contact/v3/job_families | 创建序列
  required: contact:contact, contact:job_family
  tokens: tenant_access_token
- POST /open-apis/contact/v3/job_levels | 创建职级
  required: contact:contact, contact:job_level
  tokens: tenant_access_token
- POST /open-apis/contact/v3/unit | 创建单位
  required: contact:unit
  tokens: tenant_access_token
- POST /open-apis/contact/v3/unit/bind_department | 建立部门与单位的绑定关系
  required: contact:unit
  tokens: tenant_access_token
- POST /open-apis/contact/v3/unit/unbind_department | 解除部门与单位的绑定关系
  required: contact:unit
  tokens: tenant_access_token
- POST /open-apis/contact/v3/users | 创建用户
  required: contact:contact
  tokens: tenant_access_token
- POST /open-apis/contact/v3/users/:user_id/resurrect | 恢复已删除用户
  required: contact:contact
  tokens: tenant_access_token
- POST /open-apis/contact/v3/users/basic_batch | 通过 ID 获取用户姓名
  required: contact:user.basic_profile:readonly
  tokens: tenant_access_token, user_access_token
- POST /open-apis/contact/v3/users/batch_get_id | 通过手机号或邮箱获取用户 ID
  required: contact:user.id:readonly
  tokens: tenant_access_token
- POST /open-apis/corehr/departments/query_operation_logs | 批量查询部门操作日志
  required: corehr:department.operation_log:read
  tokens: tenant_access_token
- POST /open-apis/corehr/v1/assigned_users/search | 获取组织类角色授权列表
  required: corehr:authorization:read, corehr:corehr, corehr:corehr:readonly
  tokens: tenant_access_token
- POST /open-apis/corehr/v1/authorizations/add_role_assign | 为用户授权角色
  required: corehr:authorization:write
  tokens: tenant_access_token
- POST /open-apis/corehr/v1/authorizations/remove_role_assign | 移除用户被授权的角色
  required: corehr:authorization:write
  tokens: tenant_access_token
- POST /open-apis/corehr/v1/authorizations/update_role_assign | 更新用户被授权的数据范围
  required: corehr:authorization:write
  tokens: tenant_access_token
- POST /open-apis/corehr/v1/common_data/id/convert | ID 转换
  required: corehr:common_data.id.convert:read
  tokens: tenant_access_token
- POST /open-apis/corehr/v1/common_data/meta_data/add_enum_option | 增加字段枚举值选项
  required: corehr:common_data.meta_data:write
  tokens: tenant_access_token
- POST /open-apis/corehr/v1/common_data/meta_data/edit_enum_option | 修改字段枚举值选项
  required: corehr:common_data.meta_data:write
  tokens: tenant_access_token
- POST /open-apis/corehr/v1/companies | 创建公司
  required: corehr:corehr
  tokens: tenant_access_token
- POST /open-apis/corehr/v1/contracts | 新建合同
  required: corehr:corehr
  tokens: tenant_access_token
- POST /open-apis/corehr/v1/departments | 创建部门
  required: corehr:corehr, corehr:department:write
  tokens: tenant_access_token
- POST /open-apis/corehr/v1/employee_types | 创建人员类型
  required: corehr:common_data.preset_data:write, corehr:corehr
  tokens: tenant_access_token
- POST /open-apis/corehr/v1/employments | 创建雇佣信息
  required: corehr:corehr, corehr:employment:write
  tokens: tenant_access_token
- POST /open-apis/corehr/v1/job_changes | 发起员工异动(不推荐)
  required: corehr:corehr, corehr:job_change:write
  tokens: tenant_access_token
- POST /open-apis/corehr/v1/job_datas | 创建任职信息
  required: corehr:corehr, corehr:job_data:write
  tokens: tenant_access_token
- POST /open-apis/corehr/v1/job_families | 创建序列
  required: corehr:corehr, corehr:job_family:write
  tokens: tenant_access_token
- POST /open-apis/corehr/v1/job_levels | 新建职级
  required: corehr:corehr, corehr:job_level:write
  tokens: tenant_access_token
- POST /open-apis/corehr/v1/jobs | 创建职务
  required: corehr:corehr, corehr:job:write
  tokens: tenant_access_token
- POST /open-apis/corehr/v1/leave_granting_records | 创建假期发放记录
  required: corehr:corehr, corehr:leave_granting_record:write
  tokens: tenant_access_token
- POST /open-apis/corehr/v1/leaves/work_calendar | 获取工作日历
  required: corehr:common_data.basic_data:read, corehr:corehr:readonly, corehr:employee:read, corehr:work_calendar:read
  tokens: tenant_access_token
- POST /open-apis/corehr/v1/leaves/work_calendar_date | 获取工作日历日期详情
  required: corehr:corehr, corehr:corehr:readonly, corehr:work_calendar:read
  tokens: tenant_access_token, user_access_token
- POST /open-apis/corehr/v1/locations | 创建地点
  required: corehr:corehr, corehr:locations:write
  tokens: tenant_access_token
- POST /open-apis/corehr/v1/national_id_types | 创建国家证件类型
  required: corehr:common_data.preset_data:write, corehr:corehr
  tokens: tenant_access_token
- POST /open-apis/corehr/v1/offboardings/query | 查询员工离职原因列表
  required: corehr:common_data.preset_data:read, corehr:common_data.preset_data:write, corehr:corehr, corehr:corehr:readonly
  tokens: tenant_access_token
- POST /open-apis/corehr/v1/offboardings/search | 搜索离职信息
  required: corehr:offboarding:read, corehr:offboarding:write
  tokens: tenant_access_token
- POST /open-apis/corehr/v1/offboardings/submit | 操作员工离职
  required: corehr:corehr, corehr:offboarding:write
  tokens: tenant_access_token
- POST /open-apis/corehr/v1/persons | 创建个人信息
  required: corehr:corehr, corehr:person:write
  tokens: tenant_access_token
- POST /open-apis/corehr/v1/persons/upload | 上传文件
  required: corehr:corehr, corehr:file:write, corehr:person:write
  tokens: tenant_access_token
- POST /open-apis/corehr/v1/security_groups/query | 查询部门 / 地点的 HRBP / 属地 BP
  required: corehr:authorization.bp:read, corehr:authorization:read, corehr:corehr, corehr:corehr:readonly
  tokens: tenant_access_token
- POST /open-apis/corehr/v1/working_hours_types | 创建工时制度
  required: corehr:common_data.preset_data:write, corehr:corehr
  tokens: tenant_access_token
- POST /open-apis/corehr/v2/approval_groups/open_query_department_change_list_by_ids | 批量查询部门调整内容
  required: corehr:approval_groups.orgdraft_department_change:read
  tokens: tenant_access_token
- POST /open-apis/corehr/v2/approval_groups/open_query_job_change_list_by_ids | 批量查询人员调整内容
  required: corehr:approval_groups.orgdraft_job_change:read
  tokens: tenant_access_token
- POST /open-apis/corehr/v2/approval_groups/open_query_position_change_list_by_ids | 批量查询岗位调整内容
  required: corehr:approval_groups.orgdraft_position_change:read
  tokens: tenant_access_token
- POST /open-apis/corehr/v2/basic_info/bank_branchs/search | 查询支行信息
  required: corehr:common_data.basic_data:read
  tokens: tenant_access_token
- POST /open-apis/corehr/v2/basic_info/banks/search | 查询银行信息
  required: corehr:common_data.basic_data:read
  tokens: tenant_access_token
- POST /open-apis/corehr/v2/basic_info/cities/search | 查询城市信息
  required: corehr:common_data.basic_data:read
  tokens: tenant_access_token
- POST /open-apis/corehr/v2/basic_info/country_region_subdivisions/search | 查询省份/主要行政区信息
  required: corehr:common_data.basic_data:read
  tokens: tenant_access_token
- POST /open-apis/corehr/v2/basic_info/country_regions/search | 查询国家/地区信息
  required: corehr:common_data.basic_data:read
  tokens: tenant_access_token
- POST /open-apis/corehr/v2/basic_info/currencies/search | 查询货币信息
  required: corehr:common_data.basic_data:read
  tokens: tenant_access_token
- POST /open-apis/corehr/v2/basic_info/districts/search | 查询区/县信息
  required: corehr:common_data.basic_data:read
  tokens: tenant_access_token
- POST /open-apis/corehr/v2/basic_info/languages/search | 查询语言信息
  required: corehr:common_data.basic_data:read
  tokens: tenant_access_token
- POST /open-apis/corehr/v2/basic_info/nationalities/search | 查询国籍信息
  required: corehr:common_data.basic_data:read
  tokens: tenant_access_token
- POST /open-apis/corehr/v2/basic_info/time_zones/search | 查询时区信息
  required: corehr:common_data.basic_data:read
  tokens: tenant_access_token
- POST /open-apis/corehr/v2/bps/get_by_department | 查询部门 HRBP
  required: corehr:bp.get_by_department:read
  tokens: tenant_access_token
- POST /open-apis/corehr/v2/companies/active | 启用/停用公司
  required: corehr:company:write
  tokens: tenant_access_token
- POST /open-apis/corehr/v2/companies/batch_get | 通过公司 ID 批量获取公司信息
  required: corehr:company:read, corehr:company:write
  tokens: tenant_access_token
- POST /open-apis/corehr/v2/companies/query_multi_timeline | 查询指定时间范围公司版本
  required: corehr:company:read, corehr:company:write
  tokens: tenant_access_token
- POST /open-apis/corehr/v2/contracts/search | 搜索合同
  required: corehr:contract:read, corehr:contract:write
  tokens: tenant_access_token
- POST /open-apis/corehr/v2/cost_allocations/batch_query | 查询成本分摊
  required: corehr:cost_allocation:read, corehr:cost_allocation:write
  tokens: tenant_access_token
- POST /open-apis/corehr/v2/cost_allocations/create_version | 创建成本分摊
  required: corehr:cost_allocation:write
  tokens: tenant_access_token
- POST /open-apis/corehr/v2/cost_allocations/remove_version | 删除成本分摊
  required: corehr:cost_allocation:write
  tokens: tenant_access_token
- POST /open-apis/corehr/v2/cost_allocations/update_version | 更新成本分摊
  required: corehr:cost_allocation:write
  tokens: tenant_access_token
- POST /open-apis/corehr/v2/cost_centers | 创建成本中心
  required: corehr:cost_center:write
  tokens: tenant_access_token
- POST /open-apis/corehr/v2/cost_centers/:cost_center_id/versions | 创建成本中心版本
  required: corehr:cost_center:write
  tokens: tenant_access_token
- POST /open-apis/corehr/v2/cost_centers/search | 搜索成本中心信息
  required: corehr:cost_center:read
  tokens: tenant_access_token
- POST /open-apis/corehr/v2/custom_org/create_emp_custom_org | 新增人员自定义组织变更记录
  required: corehr:employment.custom_org:write
  tokens: tenant_access_token
- POST /open-apis/corehr/v2/custom_org/del | 删除人员自定义组织变更记录
  required: corehr:employment.custom_org:write
  tokens: tenant_access_token
- POST /open-apis/corehr/v2/custom_org/edit_emp_custom_org | 更新人员自定义组织变更记录
  required: corehr:employment.custom_org:write
  tokens: tenant_access_token
- POST /open-apis/corehr/v2/custom_orgs | 创建自定义组织
  required: corehr:custom_org:write
  tokens: tenant_access_token
- POST /open-apis/corehr/v2/custom_orgs/active | 启用/停用自定义组织
  required: corehr:custom_org:write
  tokens: tenant_access_token
- POST /open-apis/corehr/v2/custom_orgs/delete_org | 删除自定义组织
  required: corehr:custom_org:write
  tokens: tenant_access_token
- POST /open-apis/corehr/v2/custom_orgs/query | 查询自定义组织信息
  required: corehr:custom_org:read, corehr:custom_org:write
  tokens: tenant_access_token
- POST /open-apis/corehr/v2/custom_orgs/update_rule | 更新自定义组织的匹配规则
  required: corehr:custom_org:write
  tokens: tenant_access_token
- POST /open-apis/corehr/v2/default_cost_centers/batch_query | 查询默认成本中心
  required: corehr:default_cost_center:read, corehr:default_cost_center:write
  tokens: tenant_access_token
- POST /open-apis/corehr/v2/default_cost_centers/create_version | 添加默认成本中心
  required: corehr:default_cost_center:write
  tokens: tenant_access_token
- POST /open-apis/corehr/v2/default_cost_centers/remove_version | 删除默认成本中心
  required: corehr:default_cost_center:write
  tokens: tenant_access_token
- POST /open-apis/corehr/v2/default_cost_centers/update_version | 更新默认成本中心
  required: corehr:default_cost_center:write
  tokens: tenant_access_token
- POST /open-apis/corehr/v2/departments/parents | 获取父部门信息
  required: corehr:department.organize:read
  tokens: tenant_access_token
- POST /open-apis/corehr/v2/departments/query_multi_timeline | 批量查询部门版本信息
  required: corehr:department:read, corehr:department:write
  tokens: tenant_access_token
- POST /open-apis/corehr/v2/departments/query_timeline | 查询指定生效日期的部门基本信息
  required: corehr:department:read, corehr:department:write
  tokens: tenant_access_token
- POST /open-apis/corehr/v2/departments/search | 搜索部门信息
  required: corehr:department:read, corehr:department:write
  tokens: tenant_access_token
- POST /open-apis/corehr/v2/departments/tree | 查询指定生效日期的部门架构树
  required: corehr:department.organize:read
  tokens: tenant_access_token
- POST /open-apis/corehr/v2/employees | 添加人员
  required: corehr:employee.add:write
  tokens: tenant_access_token
- POST /open-apis/corehr/v2/employees/additional_jobs | 创建兼职
  required: corehr:additional_job:write
  tokens: tenant_access_token
- POST /open-apis/corehr/v2/employees/additional_jobs/batch | 批量查询兼职信息
  required: corehr:additional_job:read, corehr:additional_job:write
  tokens: tenant_access_token
- POST /open-apis/corehr/v2/employees/batch_get | 批量查询员工信息
  required: corehr:employee:read, corehr:employee:write
  tokens: tenant_access_token
- POST /open-apis/corehr/v2/employees/bps/batch_get | 查询员工 HRBP / 属地 BP
  required: corehr:employee.bp:read
  tokens: tenant_access_token
- POST /open-apis/corehr/v2/employees/international_assignments | 创建外派信息
  required: corehr:employees.international_assignment:write
  tokens: tenant_access_token
- POST /open-apis/corehr/v2/employees/job_datas/batch_get | 批量查询员工任职信息
  required: corehr:employee.job_data:read, corehr:job_data:read, corehr:job_data:write
  tokens: tenant_access_token
- POST /open-apis/corehr/v2/employees/job_datas/query | 获取任职信息列表
  required: corehr:employee.job_data:read, corehr:job_data:read, corehr:job_data:write
  tokens: tenant_access_token
- POST /open-apis/corehr/v2/employees/search | 搜索员工信息
  required: corehr:employee:read, corehr:employee:write
  tokens: tenant_access_token
- POST /open-apis/corehr/v2/enums/search | 查询枚举信息
  required: corehr:common_data.meta_data:read
  tokens: tenant_access_token
- POST /open-apis/corehr/v2/job_changes | 发起员工异动
  required: corehr:job_change:create
  tokens: tenant_access_token
- POST /open-apis/corehr/v2/job_changes/:job_change_id/revoke | 撤销异动
  required: corehr:corehr, corehr:job_change:write
  tokens: tenant_access_token
- POST /open-apis/corehr/v2/job_changes/search | 搜索员工异动信息
  required: corehr:job_change:read, corehr:job_change:write
  tokens: tenant_access_token
- POST /open-apis/corehr/v2/job_families/batch_get | 根据条件批量获取序列信息
  required: corehr:job_family:read, corehr:job_family:write
  tokens: tenant_access_token
- POST /open-apis/corehr/v2/job_families/query_multi_timeline | 查询指定时间范围序列版本
  required: corehr:job_family:read, corehr:job_family:write
  tokens: tenant_access_token
- POST /open-apis/corehr/v2/job_grades | 创建职等
  required: corehr:job_grade:write
  tokens: tenant_access_token
- POST /open-apis/corehr/v2/job_grades/query | 查询职等
  required: corehr:corehr, corehr:corehr:readonly, corehr:job_grade:read, corehr:job_grade:write
  tokens: tenant_access_token
- POST /open-apis/corehr/v2/job_levels/batch_get | 根据条件批量获取职级信息
  required: corehr:job_level:read, corehr:job_level:write
  tokens: tenant_access_token
- POST /open-apis/corehr/v2/jobs/batch_get | 根据条件批量获取职务
  required: corehr:job.only:read, corehr:job:read, corehr:job:write
  tokens: tenant_access_token
- POST /open-apis/corehr/v2/jobs/query_multi_timeline | 查询指定时间范围职务版本
  required: corehr:job:read, corehr:job:write
  tokens: tenant_access_token
- POST /open-apis/corehr/v2/locations/:location_id/addresses | 添加地点地址
  required: corehr:locations:write
  tokens: tenant_access_token
- POST /open-apis/corehr/v2/locations/active | 启用/停用地点
  required: corehr:locations:write
  tokens: tenant_access_token
- POST /open-apis/corehr/v2/locations/batch_get | 通过地点 ID 批量获取地点信息
  required: corehr:locations:read, corehr:locations:write
  tokens: tenant_access_token
- POST /open-apis/corehr/v2/locations/query_multi_timeline | 查询指定时间范围地点版本
  required: corehr:locations:read, corehr:locations:write
  tokens: tenant_access_token
- POST /open-apis/corehr/v2/offboardings/edit | 编辑离职信息
  required: corehr:offboarding.update:write
  tokens: tenant_access_token
- POST /open-apis/corehr/v2/offboardings/revoke | 撤销离职
  required: corehr:offboarding.revoke:write
  tokens: tenant_access_token
- POST /open-apis/corehr/v2/offboardings/submit_v2 | 操作员工离职
  required: corehr:offboarding.submit:write
  tokens: tenant_access_token
- POST /open-apis/corehr/v2/pathways | 创建通道
  required: corehr:pathway:write
  tokens: tenant_access_token
- POST /open-apis/corehr/v2/pathways/active | 启停用通道
  required: corehr:pathway:write
  tokens: tenant_access_token
- POST /open-apis/corehr/v2/pathways/batch_get | 获取通道信息
  required: corehr:pathway:read, corehr:pathway:write
  tokens: tenant_access_token
- POST /open-apis/corehr/v2/persons | 创建个人信息
  required: corehr:person:write
  tokens: tenant_access_token
- POST /open-apis/corehr/v2/positions | 创建岗位信息
  required: corehr:position:write
  tokens: tenant_access_token
- POST /open-apis/corehr/v2/positions/active | 启停用岗位
  required: corehr:position:write
  tokens: tenant_access_token
- POST /open-apis/corehr/v2/positions/del_position | 删除岗位
  required: corehr:position:write
  tokens: tenant_access_token
- POST /open-apis/corehr/v2/positions/query | 查询岗位信息
  required: corehr:position:read, corehr:position:write
  tokens: tenant_access_token
- POST /open-apis/corehr/v2/pre_hires | 直接创建待入职
  required: corehr:corehr, corehr:pre_hire:write
  tokens: tenant_access_token
- POST /open-apis/corehr/v2/pre_hires/:pre_hire_id/complete | 操作员工完成入职
  required: corehr:pre_hire:complete
  tokens: tenant_access_token
- POST /open-apis/corehr/v2/pre_hires/:pre_hire_id/transit_task | 流转入职任务
  required: corehr:pre_hire:transit_tasks
  tokens: tenant_access_token
- POST /open-apis/corehr/v2/pre_hires/restore_flow_instance | 恢复入职
  required: corehr:pre_hire:restore_flow_instance
  tokens: tenant_access_token
- POST /open-apis/corehr/v2/pre_hires/transform_onboarding_task | 流转入职任务
  required: corehr:pre_hire:transform_onboarding_task
  tokens: tenant_access_token
- POST /open-apis/corehr/v2/pre_hires/withdraw_onboarding | 撤销入职
  required: corehr:pre_hire:withdraw_onboarding
  tokens: tenant_access_token
- POST /open-apis/corehr/v2/probation/assessments | 新增试用期考核信息
  required: corehr:probation.assessment:write
  tokens: tenant_access_token
- POST /open-apis/corehr/v2/probation/edit | 编辑试用期
  required: corehr:probation:write
  tokens: tenant_access_token
- POST /open-apis/corehr/v2/probation/enable_disable_assessment | 启用/停用试用期考核功能
  required: corehr:probation.assessment:write
  tokens: tenant_access_token
- POST /open-apis/corehr/v2/probation/search | 搜索试用期信息
  required: corehr:probation:read, corehr:probation:write
  tokens: tenant_access_token
- POST /open-apis/corehr/v2/probation/submit | 发起转正
  required: corehr:probation:write
  tokens: tenant_access_token
- POST /open-apis/corehr/v2/probation/withdraw | 撤销转正
  required: corehr:probation:write
  tokens: tenant_access_token
- POST /open-apis/corehr/v2/process_start | 发起流程
  required: corehr:process.instance:write
  tokens: tenant_access_token
- POST /open-apis/corehr/v2/query_flow_data_template | 查询流程数据参数模板
  required: corehr:process.instance:write
  tokens: tenant_access_token
- POST /open-apis/corehr/v2/report_detail_row/batchDelete | 批量删除填报行
  required: corehr:workforce_plan_centralized_reporting_project_detail:write
  tokens: tenant_access_token
- POST /open-apis/corehr/v2/report_detail_row/batchSave | 批量创建/更新填报行
  required: corehr:workforce_plan_centralized_reporting_project_detail:write
  tokens: tenant_access_token
- POST /open-apis/corehr/v2/signature_files/:signature_file_id/download | 下载电子签文件
  required: corehr:signature_file:read
  tokens: tenant_access_token
- POST /open-apis/corehr/v2/signature_files/query | 查询电子签文件详情
  required: corehr:signature.file:read
  tokens: tenant_access_token
- POST /open-apis/corehr/v2/signature_files/terminate | 终止电子签文件
  required: corehr:signature_file:terminate
  tokens: tenant_access_token
- POST /open-apis/corehr/v2/workforce_plan_detail_row/batchDelete | 批量删除明细行
  required: corehr:workforce_detail:write
  tokens: tenant_access_token
- POST /open-apis/corehr/v2/workforce_plan_detail_row/batchSave | 批量创建/更新明细行
  required: corehr:workforce_detail:write
  tokens: tenant_access_token
- POST /open-apis/corehr/v2/workforce_plan_details/batch | 查询编制规划明细信息（不支持自定义组织）
  required: corehr:workforce_detail:read
  tokens: tenant_access_token
- POST /open-apis/corehr/v2/workforce_plan_details/batch_v2 | 查询编制规划明细信息（支持自定义组织）
  required: corehr:workforce_detail:read
  tokens: tenant_access_token
- POST /open-apis/directory/v1/collaboration_rules | 新增可搜可见规则
  required: trust_party:collaboration_rule:write
  tokens: tenant_access_token, user_access_token
- POST /open-apis/directory/v1/departments | 创建部门
  required: directory:department.create:write, directory:department:write
  tokens: tenant_access_token, user_access_token
- POST /open-apis/directory/v1/departments/filter | 获取部门列表
  required: directory:department:list
  tokens: tenant_access_token, user_access_token
- POST /open-apis/directory/v1/departments/mget | 批量获取部门信息
  required: directory:department:read
  tokens: tenant_access_token, user_access_token
- POST /open-apis/directory/v1/departments/search | 搜索部门
  required: directory:department:search
  tokens: tenant_access_token, user_access_token
- POST /open-apis/directory/v1/employees | 创建员工
  required: directory:employee.create:write, directory:employee:write
  tokens: tenant_access_token, user_access_token
- POST /open-apis/directory/v1/employees/:employee_id/resurrect | 恢复离职员工
  required: directory:employee.resurrect:write, directory:employee:write
  tokens: tenant_access_token, user_access_token
- POST /open-apis/directory/v1/employees/filter | 批量获取员工列表
  required: directory:employee:list
  tokens: tenant_access_token, user_access_token
- POST /open-apis/directory/v1/employees/mget | 批量获取员工信息
  required: directory:employee:read
  tokens: tenant_access_token, user_access_token
- POST /open-apis/directory/v1/employees/search | 搜索员工信息
  required: directory:employee:search
  tokens: tenant_access_token, user_access_token
- POST /open-apis/document_ai/v1/bank_card/recognize | 识别文件中的银行卡
  required: document_ai:bank_card:recognize
  tokens: tenant_access_token
- POST /open-apis/document_ai/v1/business_card/recognize | 识别文件中的名片
  required: document_ai:business_card:recognize
  tokens: tenant_access_token
- POST /open-apis/document_ai/v1/business_license/recognize | 识别文件中的营业执照
  required: document_ai:business_license:recognize
  tokens: tenant_access_token
- POST /open-apis/document_ai/v1/chinese_passport/recognize | 识别文件中的中国护照
  required: document_ai:chinese_passport:recognize
  tokens: tenant_access_token
- POST /open-apis/document_ai/v1/contract/field_extraction | 提取文件中的合同字段
  required: document_ai:contract:field_extract
  tokens: tenant_access_token
- POST /open-apis/document_ai/v1/driving_license/recognize | 识别文件中的驾驶证
  required: document_ai:driving_license:recognize
  tokens: tenant_access_token
- POST /open-apis/document_ai/v1/food_manage_license/recognize | 识别文件中的食品经营许可证
  required: document_ai:food_manage_license:recognize
  tokens: tenant_access_token
- POST /open-apis/document_ai/v1/food_produce_license/recognize | 识别文件中的食品生产许可证
  required: document_ai:food_produce_license:recoginze
  tokens: tenant_access_token
- POST /open-apis/document_ai/v1/health_certificate/recognize | 识别文件中的健康证
  required: document_ai:health_certificate:recognize
  tokens: tenant_access_token, user_access_token
- POST /open-apis/document_ai/v1/hkm_mainland_travel_permit/recognize | 识别文件中的港澳居民来往内地通行证
  required: document_ai:hkm_mainland_travel_permit:recognize
  tokens: tenant_access_token
- POST /open-apis/document_ai/v1/id_card/recognize | 识别文件中的身份证
  required: document_ai:id_card:recognize
  tokens: tenant_access_token
- POST /open-apis/document_ai/v1/resume/parse | 识别文件中的简历信息
  required: document_ai:resume:recognize
  tokens: tenant_access_token
- POST /open-apis/document_ai/v1/taxi_invoice/recognize | 识别文件中的出租车发票
  required: document_ai:taxi_invoice:recognize
  tokens: tenant_access_token
- POST /open-apis/document_ai/v1/train_invoice/recognize | 识别文件中的火车票
  required: document_ai:train_invoice:recognize
  tokens: tenant_access_token
- POST /open-apis/document_ai/v1/tw_mainland_travel_permit/recognize | 识别文件中的台湾居民来往大陆通行证
  required: document_ai:tw_mainland_travel_permit:recognize
  tokens: tenant_access_token
- POST /open-apis/document_ai/v1/vat_invoice/recognize | 识别文件中的增值税发票
  required: document_ai:vat_invoice:recognize
  tokens: tenant_access_token
- POST /open-apis/document_ai/v1/vehicle_invoice/recognize | 识别文件中的机动车发票
  required: document_ai:vehicle_invoice:recognize
  tokens: tenant_access_token, user_access_token
- POST /open-apis/document_ai/v1/vehicle_license/recognize | 识别文件中的行驶证
  required: document_ai:vehicle_license:recognize
  tokens: tenant_access_token
- POST /open-apis/docx/documents/blocks/convert | Markdown/HTML 内容转换为文档块
  required: docx:document.block:convert
  tokens: tenant_access_token, user_access_token
- POST /open-apis/docx/v1/chats/:chat_id/announcement/blocks/:block_id/children | 在群公告中创建块
  required: im:chat.announcement:write_only
  tokens: tenant_access_token, user_access_token
- POST /open-apis/docx/v1/documents | 创建文档
  required: docx:document, docx:document:create
  tokens: tenant_access_token, user_access_token
- POST /open-apis/docx/v1/documents/:document_id/blocks/:block_id/children | 创建块
  required: docx:document, docx:document:write_only
  tokens: tenant_access_token, user_access_token
- POST /open-apis/docx/v1/documents/:document_id/blocks/:block_id/descendant | 创建嵌套块
  required: docx:document, docx:document:write_only
  tokens: tenant_access_token, user_access_token
- POST /open-apis/drive/v1/files/:file_token/copy | 复制文件
  required: docs:document:copy, drive:drive
  tokens: tenant_access_token, user_access_token
- POST /open-apis/drive/v1/files/:file_token/move | 移动文件或文件夹
  required: drive:drive, space:document:move
  tokens: tenant_access_token, user_access_token
- POST /open-apis/drive/v1/files/:file_token/subscriptions | 创建订阅
  required: docs:document.subscription, drive:drive, drive:drive:readonly
  tokens: user_access_token
- POST /open-apis/drive/v1/files/:file_token/versions | 创建文档版本
  required: drive:drive:version
  tokens: tenant_access_token, user_access_token
- POST /open-apis/drive/v1/files/create_folder | 新建文件夹
  required: drive:drive, space:folder:create
  tokens: tenant_access_token, user_access_token
- POST /open-apis/drive/v1/files/create_shortcut | 创建文件快捷方式
  required: drive:drive, space:document:shortcut
  tokens: tenant_access_token, user_access_token
- POST /open-apis/drive/v1/files/upload_all | 上传文件
  required: drive:drive, drive:file, drive:file:upload
  tokens: tenant_access_token, user_access_token
- POST /open-apis/drive/v1/files/upload_finish | 分片上传文件-完成上传
  required: drive:drive, drive:file, drive:file:upload
  tokens: tenant_access_token, user_access_token
- POST /open-apis/drive/v1/files/upload_part | 分片上传文件-上传分片
  required: drive:drive, drive:file, drive:file:upload
  tokens: tenant_access_token, user_access_token
- POST /open-apis/drive/v1/files/upload_prepare | 分片上传文件-预上传
  required: drive:drive, drive:file, drive:file:upload
  tokens: tenant_access_token, user_access_token
- POST /open-apis/drive/v1/import_tasks | 创建导入任务
  required: docs:document:import, drive:drive
  tokens: tenant_access_token, user_access_token
- POST /open-apis/drive/v1/medias/upload_all | 上传素材
  required: bitable:app, docs:doc, docs:document.media:upload, drive:drive, moments:moments, sheets:spreadsheet, vc:material
  tokens: tenant_access_token, user_access_token
- POST /open-apis/drive/v1/medias/upload_finish | 分片上传素材-完成上传
  required: bitable:app, docs:doc, docs:document.media:upload, drive:drive, moments:moments, sheets:spreadsheet, vc:material
  tokens: tenant_access_token, user_access_token
- POST /open-apis/drive/v1/medias/upload_part | 分片上传素材-上传分片
  required: bitable:app, docs:doc, docs:document.media:upload, drive:drive, moments:moments, sheets:spreadsheet, vc:material
  tokens: tenant_access_token, user_access_token
- POST /open-apis/drive/v1/medias/upload_prepare | 分片上传素材-预上传
  required: bitable:app, docs:doc, docs:document.media:upload, drive:drive, moments:moments, sheets:spreadsheet, vc:material
  tokens: tenant_access_token, user_access_token
- POST /open-apis/drive/v1/metas/batch_query | 获取文件元数据
  required: drive:drive, drive:drive.metadata:readonly
  tokens: tenant_access_token, user_access_token
- POST /open-apis/drive/v1/permissions/:token/members | 增加协作者权限
  required: bitable:app, bitable:bitable, docs:doc, docs:permission.member:create, drive:drive, drive:file, sheets:spreadsheet, wiki:wiki
  tokens: tenant_access_token, user_access_token
- POST /open-apis/drive/v1/permissions/:token/members/batch_create | 批量增加协作者权限
  required: docs:permission.member, docs:permission.member:create
  tokens: tenant_access_token, user_access_token
- POST /open-apis/drive/v1/permissions/:token/members/transfer_owner | 转移云文档所有者
  required: bitable:app, bitable:bitable, docs:doc, docs:permission.member:transfer, drive:drive, sheets:spreadsheet, wiki:wiki
  tokens: tenant_access_token, user_access_token
- POST /open-apis/drive/v1/permissions/:token/public/password | 启用云文档密码
  required: bitable:bitable, docs:doc, docs:permission.setting:write_only, drive:drive, sheets:spreadsheet, wiki:wiki
  tokens: tenant_access_token, user_access_token
- POST /open-apis/drive/v1/user/subscription | 订阅用户云文档事件
  required: docs:event:subscribe
  tokens: tenant_access_token, user_access_token
- POST /open-apis/helpdesk/v1/agent_schedules | 创建客服工作日程
  required: helpdesk:all
  tokens: user_access_token
- POST /open-apis/helpdesk/v1/agent_skills | 创建客服技能
  required: helpdesk:all
  tokens: user_access_token
- POST /open-apis/helpdesk/v1/categories | 创建知识库分类
  required: helpdesk:all
  tokens: user_access_token
- POST /open-apis/helpdesk/v1/events/subscribe | 订阅服务台事件
  required: helpdesk:all:readonly
  tokens: tenant_access_token
- POST /open-apis/helpdesk/v1/events/unsubscribe | 取消订阅服务台事件
  required: helpdesk:all:readonly
  tokens: tenant_access_token
- POST /open-apis/helpdesk/v1/faqs | 创建知识库
  required: helpdesk:all
  tokens: user_access_token
- POST /open-apis/helpdesk/v1/message | 服务台机器人向工单绑定的群内发送消息
  required: helpdesk:all
  tokens: tenant_access_token
- POST /open-apis/helpdesk/v1/notifications | 创建推送
  required: helpdesk:all
  tokens: user_access_token
- POST /open-apis/helpdesk/v1/notifications/:notification_id/cancel_approve | 取消审核
  required: helpdesk:all
  tokens: user_access_token
- POST /open-apis/helpdesk/v1/notifications/:notification_id/cancel_send | 取消推送
  required: helpdesk:all
  tokens: user_access_token
- POST /open-apis/helpdesk/v1/notifications/:notification_id/execute_send | 执行推送
  required: helpdesk:all
  tokens: user_access_token
- POST /open-apis/helpdesk/v1/notifications/:notification_id/preview | 预览推送
  required: helpdesk:all:readonly
  tokens: user_access_token
- POST /open-apis/helpdesk/v1/notifications/:notification_id/submit_approve | 提交审核
  required: helpdesk:all
  tokens: user_access_token
- POST /open-apis/helpdesk/v1/start_service | 创建服务台对话
  required: helpdesk:helpdesk:access
  tokens: tenant_access_token
- POST /open-apis/helpdesk/v1/ticket_customized_fields | 创建工单自定义字段
  required: helpdesk:all
  tokens: user_access_token
- POST /open-apis/helpdesk/v1/tickets/:ticket_id/answer_user_query | 回复用户在工单里的提问
  required: helpdesk:all
  tokens: tenant_access_token
- POST /open-apis/helpdesk/v1/tickets/:ticket_id/messages | 发送工单消息
  required: helpdesk:all
  tokens: tenant_access_token
- POST /open-apis/hire/job_requirements/search | 获取招聘需求信息
  required: hire:job_requirement, hire:job_requirement:readonly
  tokens: tenant_access_token
- POST /open-apis/hire/locations/query | 查询地点列表
  required: hire:location:readonly
  tokens: tenant_access_token
- POST /open-apis/hire/talents/:talent_id/tag | 操作人才标签
  required: hire:talent
  tokens: tenant_access_token
- POST /open-apis/hire/v1/advertisements/:advertisement_id/publish | 发布职位广告
  required: hire:advertisement
  tokens: tenant_access_token
- POST /open-apis/hire/v1/agencies/batch_query | 搜索猎头供应商列表
  required: hire:agency, hire:agency:readonly
  tokens: tenant_access_token
- POST /open-apis/hire/v1/agencies/get_agency_account | 查询猎头供应商下猎头列表
  required: hire:agency_account, hire:agency_account:readonly
  tokens: tenant_access_token
- POST /open-apis/hire/v1/agencies/operate_agency_account | 禁用/取消禁用猎头
  required: hire:agency_account
  tokens: tenant_access_token
- POST /open-apis/hire/v1/agencies/protect | 设置猎头保护期
  required: hire:agency
  tokens: tenant_access_token
- POST /open-apis/hire/v1/agencies/protection_period/search | 查询猎头保护期信息
  required: hire:agency, hire:agency:readonly
  tokens: tenant_access_token
- POST /open-apis/hire/v1/applications | 创建投递
  required: hire:application
  tokens: tenant_access_token
- POST /open-apis/hire/v1/applications/:application_id/cancel_onboard | 取消候选人入职
  required: hire:application
  tokens: tenant_access_token
- POST /open-apis/hire/v1/applications/:application_id/recover | 恢复投递
  required: hire:application
  tokens: tenant_access_token
- POST /open-apis/hire/v1/applications/:application_id/terminate | 终止投递
  required: hire:application
  tokens: tenant_access_token
- POST /open-apis/hire/v1/applications/:application_id/transfer_onboard | 操作候选人入职
  required: hire:application
  tokens: tenant_access_token
- POST /open-apis/hire/v1/applications/:application_id/transfer_stage | 转移投递阶段
  required: hire:application
  tokens: tenant_access_token
- POST /open-apis/hire/v1/applications/diversity_inclusions/search | 获取申请表附加信息
  required: hire:talent, hire:talent:readonly
  tokens: tenant_access_token
- POST /open-apis/hire/v1/background_check_orders/batch_query | 查询背调信息列表
  required: hire:background_check_order, hire:background_check_order:readonly
  tokens: tenant_access_token
- POST /open-apis/hire/v1/eco_account_custom_fields | 创建账号自定义字段
  required: hire:background_check_order, hire:exam
  tokens: tenant_access_token
- POST /open-apis/hire/v1/eco_account_custom_fields/batch_delete | 删除账号自定义字段
  required: hire:background_check_order, hire:exam
  tokens: tenant_access_token
- POST /open-apis/hire/v1/eco_background_check_custom_fields | 创建背调自定义字段
  required: hire:background_check_order
  tokens: tenant_access_token
- POST /open-apis/hire/v1/eco_background_check_custom_fields/batch_delete | 删除背调自定义字段
  required: hire:background_check_order
  tokens: tenant_access_token
- POST /open-apis/hire/v1/eco_background_check_packages | 创建背调套餐和附加调查项
  required: hire:background_check_order
  tokens: tenant_access_token
- POST /open-apis/hire/v1/eco_background_check_packages/batch_delete | 删除背调套餐和附加调查项
  required: hire:background_check_order
  tokens: tenant_access_token
- POST /open-apis/hire/v1/eco_background_checks/cancel | 终止背调订单
  required: hire:background_check_order
  tokens: tenant_access_token
- POST /open-apis/hire/v1/eco_background_checks/update_progress | 更新背调订单进度
  required: hire:background_check_order
  tokens: tenant_access_token
- POST /open-apis/hire/v1/eco_background_checks/update_result | 回传背调订单的最终结果
  required: hire:background_check_order
  tokens: tenant_access_token
- POST /open-apis/hire/v1/eco_exam_papers | 创建试卷列表
  required: hire:exam
  tokens: tenant_access_token
- POST /open-apis/hire/v1/eco_exam_papers/batch_delete | 删除试卷列表
  required: hire:exam
  tokens: tenant_access_token
- POST /open-apis/hire/v1/eco_exams/:exam_id/login_info | 回传笔试安排结果
  required: hire:exam, hire:exam:readonly
  tokens: tenant_access_token
- POST /open-apis/hire/v1/eco_exams/:exam_id/update_result | 回传笔试结果
  required: hire:exam, hire:exam:readonly
  tokens: tenant_access_token
- POST /open-apis/hire/v1/exams | 添加笔试结果
  required: hire:exam
  tokens: tenant_access_token
- POST /open-apis/hire/v1/external_applications | 创建外部投递
  required: hire:external_application
  tokens: tenant_access_token
- POST /open-apis/hire/v1/external_background_checks | 创建外部背调
  required: hire:external_application
  tokens: tenant_access_token
- POST /open-apis/hire/v1/external_background_checks/batch_query | 查询外部背调列表
  required: hire:external_application, hire:external_application:readonly
  tokens: tenant_access_token
- POST /open-apis/hire/v1/external_interview_assessments | 创建外部面评
  required: hire:external_application
  tokens: tenant_access_token
- POST /open-apis/hire/v1/external_interviews | 创建外部面试
  required: hire:external_application
  tokens: tenant_access_token
- POST /open-apis/hire/v1/external_interviews/batch_query | 查询外部面试列表
  required: hire:external_application, hire:external_application:readonly
  tokens: tenant_access_token
- POST /open-apis/hire/v1/external_offers | 创建外部 Offer
  required: hire:external_offer
  tokens: tenant_access_token
- POST /open-apis/hire/v1/external_offers/batch_query | 查询外部 Offer 列表
  required: hire:external_offer, hire:external_offer:readonly
  tokens: tenant_access_token
- POST /open-apis/hire/v1/external_referral_rewards | 导入外部内推奖励
  required: hire:external_referral_reward
  tokens: tenant_access_token
- POST /open-apis/hire/v1/job_publish_records/search | 获取职位广告发布记录
  required: hire:job, hire:job:readonly
  tokens: tenant_access_token
- POST /open-apis/hire/v1/job_requirements | 创建招聘需求
  required: hire:job_requirement
  tokens: tenant_access_token
- POST /open-apis/hire/v1/jobs/:job_id/close | 关闭职位
  required: hire:job
  tokens: tenant_access_token
- POST /open-apis/hire/v1/jobs/:job_id/combined_update | 更新职位
  required: hire:job
  tokens: tenant_access_token
- POST /open-apis/hire/v1/jobs/:job_id/managers/batch_update | 更新职位相关人员
  required: hire:job
  tokens: tenant_access_token
- POST /open-apis/hire/v1/jobs/:job_id/open | 重启职位
  required: hire:job
  tokens: tenant_access_token
- POST /open-apis/hire/v1/jobs/:job_id/update_config | 更新职位设置
  required: hire:job
  tokens: tenant_access_token
- POST /open-apis/hire/v1/jobs/combined_create | 新建职位
  required: hire:job
  tokens: tenant_access_token
- POST /open-apis/hire/v1/notes | 创建备注
  required: hire:note
  tokens: tenant_access_token
- POST /open-apis/hire/v1/offers | 创建 Offer
  required: hire:offer
  tokens: tenant_access_token
- POST /open-apis/hire/v1/offers/:offer_id/intern_offer_status | 更新实习 Offer 入/离职状态
  required: hire:offer
  tokens: tenant_access_token
- POST /open-apis/hire/v1/referral_account | 注册内推账户
  required: hire:referral_account
  tokens: tenant_access_token
- POST /open-apis/hire/v1/referral_account/:referral_account_id/deactivate | 停用内推账户
  required: hire:referral_account
  tokens: tenant_access_token
- POST /open-apis/hire/v1/referral_account/:referral_account_id/withdraw | 全额提取内推账户余额
  required: hire:referral_account
  tokens: tenant_access_token
- POST /open-apis/hire/v1/referral_account/enable | 启用内推账户
  required: hire:referral_account
  tokens: tenant_access_token
- POST /open-apis/hire/v1/referral_account/reconciliation | 内推账户提现数据对账
  required: hire:referral_account
  tokens: tenant_access_token
- POST /open-apis/hire/v1/referrals/search | 查询人才内推信息
  required: hire:referral, hire:referral:readonly
  tokens: tenant_access_token
- POST /open-apis/hire/v1/talent_blocklist/change_talent_block | 加入/移除屏蔽名单
  required: hire:talent_blocklist
  tokens: tenant_access_token
- POST /open-apis/hire/v1/talent_operation_logs/search | 查询人才操作记录
  required: hire:talent, hire:talent:readonly
  tokens: tenant_access_token
- POST /open-apis/hire/v1/talent_pools/:talent_pool_id/batch_change_talent_pool | 批量加入/移除人才库中人才
  required: hire:talent_folder
  tokens: tenant_access_token
- POST /open-apis/hire/v1/talent_pools/:talent_pool_id/talent_relationship | 将人才加入人才库
  required: hire:talent_folder
  tokens: tenant_access_token
- POST /open-apis/hire/v1/talents/:talent_id/external_info | 创建人才外部信息
  required: hire:talent
  tokens: tenant_access_token
- POST /open-apis/hire/v1/talents/:talent_id/onboard_status | 更新人才在职状态
  required: hire:talent
  tokens: tenant_access_token
- POST /open-apis/hire/v1/talents/add_to_folder | 将人才加入指定文件夹
  required: hire:talent, hire:talent_folder_association
  tokens: tenant_access_token
- POST /open-apis/hire/v1/talents/batch_get_id | 批量获取人才ID
  required: hire:talent, hire:talent:readonly
  tokens: tenant_access_token
- POST /open-apis/hire/v1/talents/combined_create | 创建人才
  required: hire:talent
  tokens: tenant_access_token
- POST /open-apis/hire/v1/talents/combined_update | 更新人才
  required: hire:talent
  tokens: tenant_access_token
- POST /open-apis/hire/v1/talents/remove_to_folder | 将人才从指定文件夹移除
  required: hire:talent_folder_association
  tokens: tenant_access_token
- POST /open-apis/hire/v1/tests/search | 获取笔试列表
  required: hire:exam, hire:exam:readonly
  tokens: tenant_access_token
- POST /open-apis/hire/v1/tripartite_agreements | 创建三方协议
  required: hire:tripartite_agreement
  tokens: tenant_access_token
- POST /open-apis/hire/v1/websites/:website_id/channels | 新建招聘官网推广渠道
  required: hire:site
  tokens: tenant_access_token
- POST /open-apis/hire/v1/websites/:website_id/deliveries/create_by_attachment | 根据简历附件创建招聘官网投递任务
  required: hire:site_application
  tokens: tenant_access_token
- POST /open-apis/hire/v1/websites/:website_id/deliveries/create_by_resume | 新建招聘官网投递
  required: hire:site_application
  tokens: tenant_access_token
- POST /open-apis/hire/v1/websites/:website_id/job_posts/search | 搜索招聘官网下的职位广告列表
  required: hire:site_job_post:readonly
  tokens: tenant_access_token
- POST /open-apis/hire/v1/websites/:website_id/site_users | 新建招聘官网用户
  required: hire:site
  tokens: tenant_access_token
- POST /open-apis/human_authentication/v1/identities | 录入身份信息
  required: human_authentication:identity
  tokens: tenant_access_token
- POST /open-apis/im/v1/chats | 创建群
  required: im:chat, im:chat:create, im:chat:create_by_user
  tokens: tenant_access_token, user_access_token
- POST /open-apis/im/v1/chats/:chat_id/chat_tabs | 添加会话标签页
  required: im:chat, im:chat.tabs:write_only
  tokens: tenant_access_token, user_access_token
- POST /open-apis/im/v1/chats/:chat_id/chat_tabs/sort_tabs | 会话标签页排序
  required: im:chat, im:chat.tabs:write_only
  tokens: tenant_access_token, user_access_token
- POST /open-apis/im/v1/chats/:chat_id/chat_tabs/update_tabs | 更新会话标签页
  required: im:chat, im:chat.tabs:write_only
  tokens: tenant_access_token, user_access_token
- POST /open-apis/im/v1/chats/:chat_id/link | 获取群分享链接
  required: im:chat, im:chat:read, im:chat:readonly
  tokens: tenant_access_token, user_access_token
- POST /open-apis/im/v1/chats/:chat_id/managers/add_managers | 指定群管理员
  required: im:chat, im:chat.managers:write_only
  tokens: tenant_access_token, user_access_token
- POST /open-apis/im/v1/chats/:chat_id/managers/delete_managers | 删除群管理员
  required: im:chat, im:chat.managers:write_only
  tokens: tenant_access_token, user_access_token
- POST /open-apis/im/v1/chats/:chat_id/members | 将用户或机器人拉入群聊
  required: im:chat, im:chat.members:write_only
  tokens: tenant_access_token, user_access_token
- POST /open-apis/im/v1/chats/:chat_id/menu_tree | 添加群菜单
  required: im:chat, im:chat.menu_tree:write_only
  tokens: tenant_access_token
- POST /open-apis/im/v1/chats/:chat_id/menu_tree/sort | 排序群菜单
  required: im:chat, im:chat.menu_tree:write_only
  tokens: tenant_access_token
- POST /open-apis/im/v1/chats/:chat_id/top_notice/delete_top_notice | 撤销群置顶
  required: im:chat, im:chat.top_notice:write_only
  tokens: tenant_access_token, user_access_token
- POST /open-apis/im/v1/chats/:chat_id/top_notice/put_top_notice | 更新群置顶
  required: im:chat, im:chat.top_notice:write_only
  tokens: tenant_access_token, user_access_token
- POST /open-apis/im/v1/files | 上传文件
  required: im:resource, im:resource:upload
  tokens: tenant_access_token
- POST /open-apis/im/v1/images | 上传图片
  required: im:resource, im:resource:upload
  tokens: tenant_access_token
- POST /open-apis/im/v1/messages | 发送消息
  required: im:message, im:message:send, im:message:send_as_bot
  tokens: tenant_access_token
- POST /open-apis/im/v1/messages/:message_id/forward | 转发消息
  required: im:message, im:message:send_as_bot
  tokens: tenant_access_token
- POST /open-apis/im/v1/messages/:message_id/push_follow_up | 添加跟随气泡
  required: im:message, im:message:send_as_bot
  tokens: tenant_access_token
- POST /open-apis/im/v1/messages/:message_id/reactions | 添加消息表情回复
  required: im:message, im:message.reactions:write_only
  tokens: tenant_access_token, user_access_token
- POST /open-apis/im/v1/messages/:message_id/reply | 回复消息
  required: im:message, im:message:send, im:message:send_as_bot
  tokens: tenant_access_token
- POST /open-apis/im/v1/messages/merge_forward | 合并转发消息
  required: im:message, im:message:send_as_bot
  tokens: tenant_access_token
- POST /open-apis/im/v1/pins | Pin 消息
  required: im:message, im:message.pins:write_only, im:message:send_as_bot
  tokens: tenant_access_token, user_access_token
- POST /open-apis/im/v1/threads/:thread_id/forward | 转发话题
  required: im:message, im:message:send_as_bot
  tokens: tenant_access_token
- POST /open-apis/im/v2/app_feed_card | 创建应用消息流卡片
  required: im:app_feed_card:write
  tokens: tenant_access_token
- POST /open-apis/im/v2/biz_entity_tag_relation | 绑定标签到群
  required: im:biz_entity_tag_relation:write
  tokens: tenant_access_token
- POST /open-apis/im/v2/tags | 创建标签
  required: im:tag:write
  tokens: tenant_access_token
- POST /open-apis/im/v2/url_previews/batch_update | 更新 URL 预览
  required: im:url_preview.update
  tokens: tenant_access_token
- POST /open-apis/lingo/v1/drafts | 创建草稿
  required: baike:entity, baike:entity:exempt_review
  tokens: tenant_access_token, user_access_token
- POST /open-apis/lingo/v1/entities | 创建免审词条
  required: baike:entity:exempt_review
  tokens: tenant_access_token
- POST /open-apis/lingo/v1/entities/highlight | 词条高亮
  required: baike:entity, baike:entity:exempt_review, baike:entity:readonly
  tokens: tenant_access_token, user_access_token
- POST /open-apis/lingo/v1/entities/match | 精准搜索词条
  required: baike:entity, baike:entity:exempt_review, baike:entity:readonly
  tokens: tenant_access_token, user_access_token
- POST /open-apis/lingo/v1/entities/search | 模糊搜索词条
  required: baike:entity, baike:entity:exempt_review, baike:entity:readonly
  tokens: tenant_access_token, user_access_token
- POST /open-apis/lingo/v1/files/upload | 上传图片
  required: baike:entity, baike:entity:exempt_review
  tokens: tenant_access_token, user_access_token
- POST /open-apis/mail/v1/mailgroups | 创建邮件组
  required: mail:mailgroup
  tokens: tenant_access_token
- POST /open-apis/mail/v1/mailgroups/:mailgroup_id/aliases | 创建邮件组别名
  required: mail:mailgroup
  tokens: tenant_access_token
- POST /open-apis/mail/v1/mailgroups/:mailgroup_id/managers/batch_create | 批量创建邮件组管理员
  required: mail:mailgroup
  tokens: tenant_access_token
- POST /open-apis/mail/v1/mailgroups/:mailgroup_id/managers/batch_delete | 批量删除邮件组管理员
  required: mail:mailgroup
  tokens: tenant_access_token
- POST /open-apis/mail/v1/mailgroups/:mailgroup_id/members | 创建邮件组成员
  required: mail:mailgroup
  tokens: tenant_access_token
- POST /open-apis/mail/v1/mailgroups/:mailgroup_id/members/batch_create | 批量创建邮件组成员
  required: mail:mailgroup
  tokens: tenant_access_token
- POST /open-apis/mail/v1/mailgroups/:mailgroup_id/permission_members | 创建邮件组权限成员
  required: mail:mailgroup
  tokens: tenant_access_token
- POST /open-apis/mail/v1/mailgroups/:mailgroup_id/permission_members/batch_create | 批量创建邮件组权限成员
  required: mail:mailgroup
  tokens: tenant_access_token
- POST /open-apis/mail/v1/public_mailboxes | 创建公共邮箱
  required: mail:public_mailbox
  tokens: tenant_access_token
- POST /open-apis/mail/v1/public_mailboxes/:public_mailbox_id/aliases | 创建公共邮箱别名
  required: mail:public_mailbox
  tokens: tenant_access_token
- POST /open-apis/mail/v1/public_mailboxes/:public_mailbox_id/members | 添加公共邮箱成员
  required: mail:public_mailbox
  tokens: tenant_access_token
- POST /open-apis/mail/v1/public_mailboxes/:public_mailbox_id/members/batch_create | 批量添加公共邮箱成员
  required: mail:public_mailbox
  tokens: tenant_access_token
- POST /open-apis/mail/v1/public_mailboxes/:public_mailbox_id/members/clear | 删除公共邮箱所有成员
  required: mail:public_mailbox
  tokens: tenant_access_token
- POST /open-apis/mail/v1/user_mailboxes/:user_mailbox_id/aliases | 创建用户邮箱别名
  required: mail:user_mailbox
  tokens: tenant_access_token
- POST /open-apis/mail/v1/user_mailboxes/:user_mailbox_id/event/subscribe | 订阅事件
  required: mail:event
  tokens: user_access_token
- POST /open-apis/mail/v1/user_mailboxes/:user_mailbox_id/event/unsubscribe | 取消订阅
  required: mail:event
  tokens: user_access_token
- POST /open-apis/mail/v1/user_mailboxes/:user_mailbox_id/folders | 创建邮箱文件夹
  required: mail:user_mailbox.folder:write
  tokens: tenant_access_token, user_access_token
- POST /open-apis/mail/v1/user_mailboxes/:user_mailbox_id/mail_contacts | 创建邮箱联系人
  required: mail:user_mailbox.mail_contact:write
  tokens: tenant_access_token, user_access_token
- POST /open-apis/mail/v1/user_mailboxes/:user_mailbox_id/messages/send | 发送邮件
  required: mail:user_mailbox.message:send
  tokens: user_access_token
- POST /open-apis/mail/v1/user_mailboxes/:user_mailbox_id/rules | 创建收信规则
  required: mail:user_mailbox.rule:write
  tokens: tenant_access_token, user_access_token
- POST /open-apis/mail/v1/user_mailboxes/:user_mailbox_id/rules/reorder | 对收信规则进行排序
  required: mail:user_mailbox.rule:write
  tokens: tenant_access_token, user_access_token
- POST /open-apis/mail/v1/users/query | 查询邮箱地址状态
  required: mail:user_mailbox
  tokens: tenant_access_token
- POST /open-apis/mdm/v1/user_auth_data_relations/bind | 用户数据维度绑定
  required: mdm:user_auth
  tokens: tenant_access_token
- POST /open-apis/mdm/v1/user_auth_data_relations/unbind | 用户数据维度解绑
  required: mdm:user_auth
  tokens: tenant_access_token
- POST /open-apis/okr/v1/images/upload | 上传进展记录图片
  required: okr:okr, okr:okr.progress.file:upload
  tokens: tenant_access_token, user_access_token
- POST /open-apis/okr/v1/periods | 创建 OKR 周期
  required: okr:okr, okr:okr.period:writeonly
  tokens: tenant_access_token
- POST /open-apis/okr/v1/progress_records | 创建 OKR 进展记录
  required: okr:okr, okr:okr.progress:writeonly
  tokens: tenant_access_token, user_access_token
- POST /open-apis/optical_char_recognition/v1/image/basic_recognize | 识别图片中的文字
  required: optical_char_recognition:image
  tokens: tenant_access_token
- POST /open-apis/passport/v1/sessions/logout | 退出登录
  required: passport:session:logout
  tokens: tenant_access_token
- POST /open-apis/passport/v1/sessions/query | 批量获取脱敏的用户登录信息
  required: passport:session_mask:readonly
  tokens: tenant_access_token
- POST /open-apis/payroll/v1/datasource_records/query | 批量查询外部算薪数据记录
  required: payroll:external_datasource_record:read
  tokens: tenant_access_token, user_access_token
- POST /open-apis/payroll/v1/datasource_records/save | 创建 / 更新外部算薪数据
  required: payroll:external_datasource_record:write
  tokens: tenant_access_token, user_access_token
- POST /open-apis/payroll/v1/payment_activitys/archive | 封存发薪活动
  required: payroll:payment_activity:archive
  tokens: tenant_access_token, user_access_token
- POST /open-apis/payroll/v1/payment_detail/query | 批量查询发薪明细
  required: payroll:payment_details:read
  tokens: tenant_access_token, user_access_token
- POST /open-apis/performance/v1/review_datas/query | 获取绩效结果
  required: performance:performance, performance:performance:readonly
  tokens: tenant_access_token, user_access_token
- POST /open-apis/performance/v1/stage_tasks/find_by_page | 获取周期任务（全部用户）
  required: performance:performance, performance:performance:readonly, performance:semester:read
  tokens: tenant_access_token
- POST /open-apis/performance/v1/stage_tasks/find_by_user_list | 获取周期任务（指定用户）
  required: performance:performance, performance:performance:readonly, performance:semester:read
  tokens: tenant_access_token, user_access_token
- POST /open-apis/performance/v2/activity/query | 获取项目列表
  required: performance:performance, performance:performance:readonly, performance:semester_activity:read
  tokens: tenant_access_token
- POST /open-apis/performance/v2/additional_informations/import | 批量导入补充信息
  required: performance:performance, performance:semester_activity:write
  tokens: tenant_access_token
- POST /open-apis/performance/v2/additional_informations/query | 批量查询补充信息
  required: performance:performance, performance:performance:readonly, performance:semester_activity:read, performance:semester_activity:write
  tokens: tenant_access_token
- POST /open-apis/performance/v2/indicators/query | 获取评估项列表
  required: performance:performance, performance:performance:readonly, performance:review_template:read
  tokens: tenant_access_token
- POST /open-apis/performance/v2/metric_details/import | 录入被评估人关键指标数据
  required: performance:metric:write
  tokens: tenant_access_token
- POST /open-apis/performance/v2/metric_details/query | 获取被评估人关键指标结果
  required: performance:metric:read, performance:metric:write
  tokens: tenant_access_token
- POST /open-apis/performance/v2/metric_fields/query | 获取指标字段列表
  required: performance:metric:read, performance:metric:write, performance:metric_lib:read
  tokens: tenant_access_token
- POST /open-apis/performance/v2/metric_libs/query | 获取指标列表
  required: performance:metric:read, performance:metric:write, performance:metric_lib:read
  tokens: tenant_access_token
- POST /open-apis/performance/v2/metric_templates/query | 获取指标模板列表
  required: performance:metric:read, performance:metric:write, performance:metric_lib:read
  tokens: tenant_access_token
- POST /open-apis/performance/v2/questions/query | 获取标签填写题配置
  required: performance:performance, performance:performance:readonly, performance:review_template:read
  tokens: tenant_access_token
- POST /open-apis/performance/v2/review_datas/query | 获取绩效详情数据
  required: performance:performance, performance:performance:readonly
  tokens: tenant_access_token
- POST /open-apis/performance/v2/review_templates/query | 获取绩效模板配置
  required: performance:performance, performance:performance:readonly, performance:review_template:read
  tokens: tenant_access_token
- POST /open-apis/performance/v2/reviewees/query | 获取被评估人信息
  required: performance:performance, performance:performance:readonly, performance:semester_user:read
  tokens: tenant_access_token
- POST /open-apis/performance/v2/user_group_user_rels/write | 更新人员组成员
  required: performance:semester_activity:write
  tokens: tenant_access_token
- POST /open-apis/performance/v2/user_info/query | 获取绩效周期的人员信息
  required: performance:performance, performance:performance:readonly
  tokens: tenant_access_token
- POST /open-apis/personal_settings/v1/system_statuses | 创建系统状态
  required: personal_settings:status:system_status_update
  tokens: tenant_access_token
- POST /open-apis/personal_settings/v1/system_statuses/:system_status_id/batch_close | 批量关闭系统状态
  required: personal_settings:status:system_status_operate
  tokens: tenant_access_token
- POST /open-apis/personal_settings/v1/system_statuses/:system_status_id/batch_open | 批量开启系统状态
  required: personal_settings:status:system_status_operate
  tokens: tenant_access_token
- POST /open-apis/report/v1/rules/:rule_id/views/remove | 移除规则看板
  required: report:report
  tokens: tenant_access_token
- POST /open-apis/report/v1/tasks/query | 查询任务
  required: report:task:readonly
  tokens: tenant_access_token, user_access_token
- POST /open-apis/search/v2/app | 搜索应用
  required: search:app
  tokens: user_access_token
- POST /open-apis/search/v2/data_sources | 创建数据源
  required: search:data_source, search:data_source:create
  tokens: tenant_access_token
- POST /open-apis/search/v2/data_sources/:data_source_id/items | 为指定数据项创建索引
  required: search:data_item:create, search:data_source
  tokens: tenant_access_token
- POST /open-apis/search/v2/doc_wiki/search | 搜索文档
  required: search:docs:read
  tokens: user_access_token
- POST /open-apis/search/v2/message | 搜索消息
  required: search:message
  tokens: user_access_token
- POST /open-apis/search/v2/schemas | 创建数据范式
  required: search:data_schemas:create, search:data_source, search:data_source:readonly
  tokens: tenant_access_token
- POST /open-apis/security_and_compliance/v1/openapi_logs/list_data | 获取OpenAPI审计日志数据
  required: security_and_compliance:audit_log.openapi_log:readonly
  tokens: tenant_access_token
- POST /open-apis/security_and_compliance/v1/user_migrations | 迁移用户
  required: security_and_compliance:user_migration, security_and_compliance:user_migration:multi-geo
  tokens: tenant_access_token, user_access_token
- POST /open-apis/security_and_compliance/v1/user_migrations/cancel | 取消用户迁移
  required: security_and_compliance:user_migration, security_and_compliance:user_migration:multi-geo
  tokens: tenant_access_token, user_access_token
- POST /open-apis/security_and_compliance/v1/user_migrations/search | 批量获取用户迁移状态
  required: security_and_compliance:user_migration, security_and_compliance:user_migration:multi-geo, security_and_compliance:user_migration:readonly
  tokens: tenant_access_token, user_access_token
- POST /open-apis/security_and_compliance/v2/device_records | 新增设备
  required: security_and_compliance:device_record:write
  tokens: tenant_access_token
- POST /open-apis/sheets/v3/spreadsheets | 创建电子表格
  required: drive:drive, sheets:spreadsheet, sheets:spreadsheet:create
  tokens: tenant_access_token, user_access_token
- POST /open-apis/sheets/v3/spreadsheets/:spreadsheet_token/sheets/:sheet_id/filter | 创建筛选
  required: drive:drive, sheets:spreadsheet, sheets:spreadsheet:write_only
  tokens: tenant_access_token, user_access_token
- POST /open-apis/sheets/v3/spreadsheets/:spreadsheet_token/sheets/:sheet_id/filter_views | 创建筛选视图
  required: drive:drive, sheets:spreadsheet, sheets:spreadsheet:write_only
  tokens: tenant_access_token, user_access_token
- POST /open-apis/sheets/v3/spreadsheets/:spreadsheet_token/sheets/:sheet_id/filter_views/:filter_view_id/conditions | 创建筛选条件
  required: drive:drive, sheets:spreadsheet, sheets:spreadsheet:write_only
  tokens: tenant_access_token, user_access_token
- POST /open-apis/sheets/v3/spreadsheets/:spreadsheet_token/sheets/:sheet_id/find | 查找单元格
  required: drive:drive, drive:drive:readonly, sheets:spreadsheet, sheets:spreadsheet:read, sheets:spreadsheet:readonly
  tokens: tenant_access_token, user_access_token
- POST /open-apis/sheets/v3/spreadsheets/:spreadsheet_token/sheets/:sheet_id/float_images | 创建浮动图片
  required: drive:drive, sheets:spreadsheet, sheets:spreadsheet:write_only
  tokens: tenant_access_token, user_access_token
- POST /open-apis/sheets/v3/spreadsheets/:spreadsheet_token/sheets/:sheet_id/move_dimension | 移动行列
  required: drive:drive, sheets:spreadsheet, sheets:spreadsheet:write_only
  tokens: tenant_access_token, user_access_token
- POST /open-apis/sheets/v3/spreadsheets/:spreadsheet_token/sheets/:sheet_id/replace | 替换单元格
  required: drive:drive, sheets:spreadsheet, sheets:spreadsheet:write_only
  tokens: tenant_access_token, user_access_token
- POST /open-apis/spark/v1/apps/:app_id/sql_commands | 执行 SQL
  required: spark:app.sql_commands:write
  tokens: user_access_token
- POST /open-apis/spark/v1/apps/:app_id/tables/:table_name/records | 向数据表中添加或更新记录
  required: spark:app.table.record:write
  tokens: user_access_token
- POST /open-apis/spark/v1/directory/user/id_convert | 妙搭和飞书用户 ID 转换
  required: spark:directory.user.id_convert:read
  tokens: tenant_access_token, user_access_token
- POST /open-apis/speech_to_text/v1/speech/file_recognize | 识别语音文件
  required: speech_to_text:speech
  tokens: tenant_access_token
- POST /open-apis/speech_to_text/v1/speech/stream_recognize | 识别流式语音
  required: speech_to_text:speech
  tokens: tenant_access_token
- POST /open-apis/task/v1/tasks | 创建任务
  required: task:task, task:task:writeonly
  tokens: tenant_access_token, user_access_token
- POST /open-apis/task/v1/tasks/:task_id/batch_delete_collaborator | 批量删除执行者
  required: task:personnel:writeonly, task:task
  tokens: tenant_access_token, user_access_token
- POST /open-apis/task/v1/tasks/:task_id/collaborators | 新增执行者
  required: task:personnel:writeonly, task:task
  tokens: tenant_access_token, user_access_token
- POST /open-apis/task/v2/attachments/upload | 上传附件
  required: task:attachment:upload, task:attachment:write
  tokens: tenant_access_token, user_access_token
- POST /open-apis/task/v2/comments | 创建评论
  required: task:comment:write, task:comment:writeonly
  tokens: tenant_access_token, user_access_token
- POST /open-apis/task/v2/custom_fields | 创建自定义字段
  required: task:custom_field:write, task:custom_field:writeonly
  tokens: tenant_access_token, user_access_token
- POST /open-apis/task/v2/custom_fields/:custom_field_guid/add | 将自定义字段加入资源
  required: task:custom_field:write, task:custom_field:writeonly
  tokens: tenant_access_token, user_access_token
- POST /open-apis/task/v2/custom_fields/:custom_field_guid/options | 创建自定义任务选项
  required: task:custom_field:writeonly, task:tasklist:read, task:tasklist:write
  tokens: tenant_access_token, user_access_token
- POST /open-apis/task/v2/custom_fields/:custom_field_guid/remove | 将自定义字段移出资源
  required: task:custom_field:write, task:custom_field:writeonly
  tokens: tenant_access_token, user_access_token
- POST /open-apis/task/v2/sections | 创建自定义分组
  required: task:section:write, task:section:writeonly
  tokens: tenant_access_token, user_access_token
- POST /open-apis/task/v2/tasklists | 创建清单
  required: task:tasklist:write, task:tasklist:writeonly
  tokens: tenant_access_token, user_access_token
- POST /open-apis/task/v2/tasklists/:tasklist_guid/activity_subscriptions | 创建动态订阅
  required: task:tasklist:write, task:tasklist:writeonly
  tokens: tenant_access_token, user_access_token
- POST /open-apis/task/v2/tasklists/:tasklist_guid/add_members | 添加清单成员
  required: task:tasklist:write, task:tasklist:writeonly
  tokens: tenant_access_token, user_access_token
- POST /open-apis/task/v2/tasklists/:tasklist_guid/remove_members | 移除清单成员
  required: task:tasklist:write, task:tasklist:writeonly
  tokens: tenant_access_token, user_access_token
- POST /open-apis/task/v2/tasks | 创建任务
  required: task:task:write, task:task:writeonly
  tokens: tenant_access_token, user_access_token
- POST /open-apis/task/v2/tasks/:task_guid/add_dependencies | 添加依赖
  required: task:task:write, task:task:writeonly
  tokens: tenant_access_token, user_access_token
- POST /open-apis/task/v2/tasks/:task_guid/add_members | 添加任务成员
  required: task:personnel:writeonly, task:task:write
  tokens: tenant_access_token, user_access_token
- POST /open-apis/task/v2/tasks/:task_guid/add_reminders | 添加任务提醒
  required: task:task:write, task:task:writeonly
  tokens: tenant_access_token, user_access_token
- POST /open-apis/task/v2/tasks/:task_guid/add_tasklist | 任务加入清单
  required: task:task:write
  tokens: tenant_access_token, user_access_token
- POST /open-apis/task/v2/tasks/:task_guid/remove_dependencies | 移除依赖
  required: task:task:write, task:task:writeonly
  tokens: tenant_access_token, user_access_token
- POST /open-apis/task/v2/tasks/:task_guid/remove_members | 移除任务成员
  required: task:personnel:writeonly, task:task:write
  tokens: tenant_access_token, user_access_token
- POST /open-apis/task/v2/tasks/:task_guid/remove_reminders | 移除任务提醒
  required: task:task:write, task:task:writeonly
  tokens: tenant_access_token, user_access_token
- POST /open-apis/task/v2/tasks/:task_guid/remove_tasklist | 任务移出清单
  required: task:task:write, task:task:writeonly
  tokens: tenant_access_token, user_access_token
- POST /open-apis/task/v2/tasks/:task_guid/subtasks | 创建子任务
  required: task:task:write, task:task:writeonly
  tokens: tenant_access_token, user_access_token
- POST /open-apis/translation/v1/text/detect | 识别文本语种
  required: translation:text
  tokens: tenant_access_token
- POST /open-apis/translation/v1/text/translate | 翻译文本
  required: translation:text
  tokens: tenant_access_token
- POST /open-apis/vc/v1/exports/meeting_list | 导出会议明细
  required: vc:export, vc:meeting:export
  tokens: tenant_access_token, user_access_token
- POST /open-apis/vc/v1/exports/participant_list | 导出参会人明细
  required: vc:export, vc:meeting:export
  tokens: tenant_access_token, user_access_token
- POST /open-apis/vc/v1/exports/participant_quality_list | 导出参会人会议质量数据
  required: vc:export, vc:meeting:export
  tokens: tenant_access_token, user_access_token
- POST /open-apis/vc/v1/exports/resource_reservation_list | 导出会议室预定数据
  required: vc:export, vc:meeting:export
  tokens: tenant_access_token, user_access_token
- POST /open-apis/vc/v1/meetings/:meeting_id/kickout | 移除参会人
  required: vc:meeting, vc:meeting.participant:write
  tokens: tenant_access_token
- POST /open-apis/vc/v1/meetings/search | 搜索会议记录
  required: vc:meeting.search:read
  tokens: user_access_token
- POST /open-apis/vc/v1/reserves/apply | 预约会议
  required: vc:reserve
  tokens: tenant_access_token, user_access_token
- POST /open-apis/vc/v1/room_configs/set | 设置会议室配置
  required: vc:room
  tokens: tenant_access_token
- POST /open-apis/vc/v1/room_configs/set_checkboard_access_code | 创建签到板部署码
  required: vc:room
  tokens: tenant_access_token
- POST /open-apis/vc/v1/room_configs/set_room_access_code | 创建会议室部署码
  required: vc:room
  tokens: tenant_access_token
- POST /open-apis/vc/v1/room_levels | 创建会议室层级
  required: vc:room, vc:rooms.roomlevel:create
  tokens: tenant_access_token
- POST /open-apis/vc/v1/room_levels/del | 删除会议室层级
  required: vc:room, vc:rooms.roomlevel:delete
  tokens: tenant_access_token
- POST /open-apis/vc/v1/room_levels/mget | 批量查询会议室层级详情
  required: vc:room, vc:room:readonly, vc:rooms.roomlevel:read
  tokens: tenant_access_token
- POST /open-apis/vc/v1/rooms | 创建会议室
  required: vc:room, vc:rooms.room:create
  tokens: tenant_access_token
- POST /open-apis/vc/v1/rooms/mget | 批量查询会议室详情
  required: vc:room, vc:room:readonly, vc:rooms.room.basicinfo:read
  tokens: tenant_access_token
- POST /open-apis/vc/v1/rooms/search | 搜索会议室
  required: vc:room, vc:room:readonly, vc:rooms.room.basicinfo:read
  tokens: user_access_token
- POST /open-apis/vc/v1/scope_config | 设置会议室配置
  required: vc:room, vc:rooms.room:update
  tokens: tenant_access_token
- POST /open-apis/wiki/v1/nodes/search | 搜索 Wiki
  required: search:docs:read, wiki:wiki, wiki:wiki:readonly
  tokens: user_access_token
- POST /open-apis/wiki/v2/spaces | 创建知识空间
  required: wiki:space:write_only, wiki:wiki
  tokens: user_access_token
- POST /open-apis/wiki/v2/spaces/:space_id/members | 添加知识空间成员
  required: wiki:member:create, wiki:wiki
  tokens: tenant_access_token, user_access_token
- POST /open-apis/wiki/v2/spaces/:space_id/nodes | 创建知识空间节点
  required: wiki:node:create, wiki:wiki
  tokens: tenant_access_token, user_access_token
- POST /open-apis/wiki/v2/spaces/:space_id/nodes/:node_token/copy | 创建知识空间节点副本
  required: wiki:node:copy, wiki:wiki
  tokens: tenant_access_token, user_access_token
- POST /open-apis/wiki/v2/spaces/:space_id/nodes/:node_token/move | 移动知识空间节点
  required: wiki:node:move, wiki:wiki, wiki:wiki:readonly
  tokens: tenant_access_token, user_access_token
- POST /open-apis/wiki/v2/spaces/:space_id/nodes/:node_token/update_title | 更新知识空间节点标题
  required: wiki:node:update, wiki:wiki
  tokens: tenant_access_token, user_access_token
- POST /open-apis/wiki/v2/spaces/:space_id/nodes/move_docs_to_wiki | 移动云空间文档至知识空间
  required: wiki:node:move, wiki:wiki
  tokens: tenant_access_token, user_access_token
- POST /open-apis/workplace/v1/custom_workplace_access_data/search | 获取定制工作台访问数据
  required: workplace:workplace_using_data:read
  tokens: tenant_access_token
- POST /open-apis/workplace/v1/workplace_access_data/search | 获取工作台访问数据
  required: workplace:workplace_using_data:read
  tokens: tenant_access_token
- POST /open-apis/workplace/v1/workplace_block_access_data/search | 获取定制工作台小组件访问数据
  required: workplace:workplace_using_data:read
  tokens: tenant_access_token
- PUT /open-apis/acs/v1/users/:user_id/face | 上传人脸图片
  required: acs:users
  tokens: tenant_access_token
- PUT /open-apis/admin/v1/badges/:badge_id | 修改勋章信息
  required: admin:badge
  tokens: tenant_access_token
- PUT /open-apis/admin/v1/badges/:badge_id/grants/:grant_id | 修改授予名单
  required: admin:badge.grant
  tokens: tenant_access_token
- PUT /open-apis/aily/v1/sessions/:aily_session_id | 更新会话
  required: aily:session:write
  tokens: tenant_access_token, user_access_token
- PUT /open-apis/application/v6/applications/:app_id/collaborators | 更新应用协作者
  required: application:application.collaborators:write
  tokens: tenant_access_token, user_access_token
- PUT /open-apis/application/v6/applications/:app_id/management | 启停用应用
  required: admin:app.enable:write
  tokens: tenant_access_token
- PUT /open-apis/application/v6/applications/:app_id/owner | 转移应用所有者
  required: application:application.collaborators:write
  tokens: tenant_access_token, user_access_token
- PUT /open-apis/attendance/v1/user_stats_views/:user_stats_view_id | 更新统计设置
  required: attendance:task
  tokens: tenant_access_token
- PUT /open-apis/baike/v1/drafts/:draft_id | 更新草稿
  required: baike:entity, baike:entity:exempt_review
  tokens: tenant_access_token, user_access_token
- PUT /open-apis/baike/v1/entities/:entity_id | 更新免审词条
  required: baike:entity:exempt_review
  tokens: tenant_access_token, user_access_token
- PUT /open-apis/base/v2/apps/:app_token/roles/:role_id | 更新自定义角色
  required: base:role:update
  tokens: tenant_access_token, user_access_token
- PUT /open-apis/bitable/v1/apps/:app_token | 更新多维表格元数据
  required: base:app:update, bitable:app
  tokens: tenant_access_token, user_access_token
- PUT /open-apis/bitable/v1/apps/:app_token/roles/:role_id | 更新自定义角色
  required: base:role:update, bitable:app
  tokens: tenant_access_token, user_access_token
- PUT /open-apis/bitable/v1/apps/:app_token/tables/:table_id/fields/:field_id | 更新字段
  required: base:field:update, bitable:app
  tokens: tenant_access_token, user_access_token
- PUT /open-apis/bitable/v1/apps/:app_token/tables/:table_id/records/:record_id | 更新记录
  required: base:record:update, bitable:app
  tokens: tenant_access_token, user_access_token
- PUT /open-apis/bitable/v1/apps/:app_token/workflows/:workflow_id | 更新自动化流程状态
  required: base:workflow:write, bitable:app
  tokens: tenant_access_token, user_access_token
- PUT /open-apis/cardkit/v1/cards/:card_id | 全量更新卡片实体
  required: cardkit:card:write
  tokens: tenant_access_token
- PUT /open-apis/cardkit/v1/cards/:card_id/elements/:element_id | 更新组件
  required: cardkit:card:write
  tokens: tenant_access_token
- PUT /open-apis/cardkit/v1/cards/:card_id/elements/:element_id/content | 流式更新文本
  required: cardkit:card:write
  tokens: tenant_access_token
- PUT /open-apis/contact/v3/departments/:department_id | 更新部门所有信息
  required: contact:contact
  tokens: tenant_access_token
- PUT /open-apis/contact/v3/employee_type_enums/:enum_id | 更新人员类型
  required: contact:contact
  tokens: tenant_access_token
- PUT /open-apis/contact/v3/functional_roles/:role_id | 修改角色名称
  required: contact:functional_role
  tokens: tenant_access_token
- PUT /open-apis/contact/v3/job_families/:job_family_id | 更新序列
  required: contact:contact, contact:job_family
  tokens: tenant_access_token
- PUT /open-apis/contact/v3/job_levels/:job_level_id | 更新职级
  required: contact:contact, contact:job_level
  tokens: tenant_access_token
- PUT /open-apis/corehr/v2/process_revoke/:process_id | 撤销流程
  required: corehr:process.instance:write
  tokens: tenant_access_token
- PUT /open-apis/corehr/v2/process_withdraw/:process_id | 撤回流程
  required: corehr:process.instance:write
  tokens: tenant_access_token
- PUT /open-apis/corehr/v2/processes/:process_id/approvers/:approver_id | 通过/拒绝审批任务
  required: corehr:process.instance:write
  tokens: tenant_access_token
- PUT /open-apis/corehr/v2/processes/:process_id/extra | 加签审批任务
  required: corehr:process.instance:write
  tokens: tenant_access_token
- PUT /open-apis/corehr/v2/processes/:process_id/transfer | 转交审批任务
  required: corehr:process.instance:write
  tokens: tenant_access_token
- PUT /open-apis/directory/v1/collaboration_rules/:collaboration_rule_id | 更新可搜可见规则
  required: trust_party:collaboration_rule:write
  tokens: tenant_access_token, user_access_token
- PUT /open-apis/drive/v1/permissions/:token/members/:member_id | 更新协作者权限
  required: bitable:app, bitable:bitable, docs:doc, docs:permission.member:update, drive:drive, drive:file, sheets:spreadsheet, wiki:wiki
  tokens: tenant_access_token, user_access_token
- PUT /open-apis/drive/v1/permissions/:token/public/password | 刷新云文档密码
  required: bitable:bitable, docs:doc, docs:permission.setting:write_only, drive:drive, sheets:spreadsheet, wiki:wiki
  tokens: tenant_access_token, user_access_token
- PUT /open-apis/helpdesk/v1/tickets/:ticket_id | 更新工单详情
  required: helpdesk:all
  tokens: user_access_token
- PUT /open-apis/hire/v1/external_applications/:external_application_id | 更新外部投递
  required: hire:external_application
  tokens: tenant_access_token
- PUT /open-apis/hire/v1/external_background_checks/:external_background_check_id | 更新外部背调
  required: hire:external_application
  tokens: tenant_access_token
- PUT /open-apis/hire/v1/external_interviews/:external_interview_id | 更新外部面试
  required: hire:external_application
  tokens: tenant_access_token
- PUT /open-apis/hire/v1/external_offers/:external_offer_id | 更新外部 Offer
  required: hire:external_offer
  tokens: tenant_access_token
- PUT /open-apis/hire/v1/job_requirements/:job_requirement_id | 更新招聘需求
  required: hire:job_requirement
  tokens: tenant_access_token
- PUT /open-apis/hire/v1/offer_custom_fields/:offer_custom_field_id | 更新 Offer 申请表自定义字段
  required: hire:offer_selection_object
  tokens: tenant_access_token
- PUT /open-apis/hire/v1/offers/:offer_id | 更新 Offer 信息
  required: hire:offer
  tokens: tenant_access_token
- PUT /open-apis/hire/v1/talents/:talent_id/external_info | 更新人才外部信息
  required: hire:talent
  tokens: tenant_access_token
- PUT /open-apis/hire/v1/tripartite_agreements/:tripartite_agreement_id | 更新三方协议
  required: hire:tripartite_agreement
  tokens: tenant_access_token
- PUT /open-apis/hire/v1/websites/:website_id/channels/:channel_id | 更新招聘官网推广渠道
  required: hire:site
  tokens: tenant_access_token
- PUT /open-apis/im/v1/chats/:chat_id | 更新群信息
  required: im:chat, im:chat:update
  tokens: tenant_access_token, user_access_token
- PUT /open-apis/im/v1/chats/:chat_id/moderation | 更新群发言权限
  required: im:chat, im:chat:moderation:write_only
  tokens: tenant_access_token, user_access_token
- PUT /open-apis/im/v1/messages/:message_id | 编辑消息
  required: im:message, im:message:send_as_bot, im:message:update
  tokens: tenant_access_token
- PUT /open-apis/im/v2/app_feed_card/batch | 更新应用消息流卡片
  required: im:app_feed_card:write
  tokens: tenant_access_token
- PUT /open-apis/im/v2/biz_entity_tag_relation | 解绑标签与群
  required: im:biz_entity_tag_relation:write
  tokens: tenant_access_token
- PUT /open-apis/im/v2/chat_button | 更新消息流卡片按钮
  required: im:app_feed_card:write
  tokens: tenant_access_token
- PUT /open-apis/lingo/v1/drafts/:draft_id | 更新草稿
  required: baike:entity, baike:entity:exempt_review
  tokens: tenant_access_token, user_access_token
- PUT /open-apis/lingo/v1/entities/:entity_id | 更新免审词条
  required: baike:entity:exempt_review
  tokens: tenant_access_token
- PUT /open-apis/mail/v1/mailgroups/:mailgroup_id | 修改邮件组全部信息
  required: mail:mailgroup
  tokens: tenant_access_token
- PUT /open-apis/mail/v1/public_mailboxes/:public_mailbox_id | 修改公共邮箱全部信息
  required: mail:public_mailbox
  tokens: tenant_access_token
- PUT /open-apis/mail/v1/user_mailboxes/:user_mailbox_id/rules/:rule_id | 更新收信规则
  required: mail:user_mailbox.rule:write
  tokens: tenant_access_token, user_access_token
- PUT /open-apis/okr/v1/progress_records/:progress_id | 更新 OKR 进展记录
  required: okr:okr, okr:okr.progress:writeonly
  tokens: tenant_access_token, user_access_token
- PUT /open-apis/security_and_compliance/v2/device_apply_records/:device_apply_record_id | 审批设备申报
  required: security_and_compliance:device_apply_record:write
  tokens: tenant_access_token
- PUT /open-apis/security_and_compliance/v2/device_records/:device_record_id | 更新设备
  required: security_and_compliance:device_record:write
  tokens: tenant_access_token
- PUT /open-apis/sheets/v3/spreadsheets/:spreadsheet_token/sheets/:sheet_id/filter | 更新筛选
  required: drive:drive, sheets:spreadsheet, sheets:spreadsheet:write_only
  tokens: tenant_access_token, user_access_token
- PUT /open-apis/sheets/v3/spreadsheets/:spreadsheet_token/sheets/:sheet_id/filter_views/:filter_view_id/conditions/:condition_id | 更新筛选条件
  required: drive:drive, sheets:spreadsheet, sheets:spreadsheet:write_only
  tokens: tenant_access_token, user_access_token
- PUT /open-apis/vc/v1/reserves/:reserve_id | 更新预约
  required: vc:reserve
  tokens: tenant_access_token, user_access_token
- PUT /open-apis/wiki/v2/spaces/:space_id/setting | 更新知识空间设置
  required: wiki:setting:write_only, wiki:wiki
  tokens: tenant_access_token, user_access_token

