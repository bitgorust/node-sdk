# Feishu Service API Coverage

- Evaluated current APIs: 1432
- Covered by SDK: 1371
- Uncovered by SDK: 61
- Coverage rate: 95.74%
- Old APIs archived separately: 110
- History/deprecated APIs archived separately: 68

## By Project

- acs: 14/14 covered (0 uncovered)
- admin: 14/14 covered (0 uncovered)
- aily: 21/21 covered (0 uncovered)
- apaas: 44/48 covered (4 uncovered)
- application: 25/32 covered (7 uncovered)
- approval: 27/31 covered (4 uncovered)
- attendance: 39/39 covered (0 uncovered)
- auth: 5/5 covered (0 uncovered)
- authen: 1/1 covered (0 uncovered)
- baike: 13/13 covered (0 uncovered)
- base: 3/3 covered (0 uncovered)
- bitable: 44/47 covered (3 uncovered)
- board: 5/5 covered (0 uncovered)
- calendar: 44/44 covered (0 uncovered)
- cardkit: 9/9 covered (0 uncovered)
- compensation: 21/21 covered (0 uncovered)
- contact: 67/68 covered (1 uncovered)
- corehr: 250/260 covered (10 uncovered)
- directory: 21/21 covered (0 uncovered)
- docs: 1/1 covered (0 uncovered)
- document_ai: 18/18 covered (0 uncovered)
- docx: 13/13 covered (0 uncovered)
- drive: 44/47 covered (3 uncovered)
- ehr: 2/2 covered (0 uncovered)
- event: 1/1 covered (0 uncovered)
- helpdesk: 50/50 covered (0 uncovered)
- hire: 175/175 covered (0 uncovered)
- human_authentication: 1/1 covered (0 uncovered)
- im: 64/64 covered (0 uncovered)
- lingo: 14/14 covered (0 uncovered)
- mail: 67/67 covered (0 uncovered)
- mdm: 4/4 covered (0 uncovered)
- minutes: 4/5 covered (1 uncovered)
- moments: 1/1 covered (0 uncovered)
- okr: 12/12 covered (0 uncovered)
- optical_char_recognition: 1/1 covered (0 uncovered)
- passport: 2/2 covered (0 uncovered)
- payroll: 12/12 covered (0 uncovered)
- performance: 16/21 covered (5 uncovered)
- personal_settings: 6/6 covered (0 uncovered)
- report: 3/3 covered (0 uncovered)
- search: 14/15 covered (1 uncovered)
- security_and_compliance: 8/13 covered (5 uncovered)
- sheets: 27/27 covered (0 uncovered)
- spark: 0/12 covered (12 uncovered)
- speech_to_text: 2/2 covered (0 uncovered)
- task: 60/60 covered (0 uncovered)
- tenant: 2/2 covered (0 uncovered)
- translation: 2/2 covered (0 uncovered)
- trust_party: 5/5 covered (0 uncovered)
- vc: 56/58 covered (2 uncovered)
- verification: 1/1 covered (0 uncovered)
- wiki: 16/16 covered (0 uncovered)
- workplace: 0/3 covered (3 uncovered)

## Uncovered APIs

- DELETE /open-apis/drive/v1/user/remove_subscription | 取消用户云文档事件订阅 | drive.user.remove_subscription
  doc: https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/user/remove_subscription.md
  permissions: docs:event:subscribe
  tokens: tenant_access_token, user_access_token
- DELETE /open-apis/spark/v1/apps/:app_id/tables/:table_name/records | 删除数据表中的记录 | spark.app.table.delete_table_records
  doc: https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/spark-v1/app-table/delete_table_records.md
  permissions: spark:app.table.record:write
  tokens: user_access_token
- GET /open-apis/apaas/v1/workspaces/:workspace_id/enums | 获取工作空间下的自定义枚举列表 | apaas.workspace.enum.list
  doc: https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/apaas-v1/workspace-enum/list.md
  permissions: app_engine:workspace.table:read, app_engine:workspace.table:write
  tokens: user_access_token
- GET /open-apis/apaas/v1/workspaces/:workspace_id/enums/:enum_name | 获取自定义枚举详细信息 | apaas.workspace.enum.enum_get
  doc: https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/apaas-v1/workspace-enum/enum_get.md
  permissions: app_engine:workspace.table:read, app_engine:workspace.table:write
  tokens: user_access_token
- GET /open-apis/apaas/v1/workspaces/:workspace_id/tables | 获取工作空间下的数据表列表 | apaas.workspace.table.list
  doc: https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/apaas-v1/workspace-table/list.md
  permissions: app_engine:workspace.table:read, app_engine:workspace.table:write
  tokens: user_access_token
- GET /open-apis/apaas/v1/workspaces/:workspace_id/tables/:table_name | 获取数据表详细信息 | apaas.workspace.table.table_get
  doc: https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/apaas-v1/workspace-table/table_get.md
  permissions: app_engine:workspace.table:read, app_engine:workspace.table:write
  tokens: user_access_token
- GET /open-apis/application/v5/applications/favourite | 获取用户自定义常用的应用 | application.application.favourite
  doc: https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/application-v5/application/favourite.md
  permissions: admin:app.info:readonly
  tokens: user_access_token
- GET /open-apis/application/v5/applications/recommend | 获取管理员推荐的应用 | application.application.recommend
  doc: https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/application-v5/application/recommend.md
  permissions: admin:app.info:readonly
  tokens: user_access_token
- GET /open-apis/approval/v4/approvals/:approval_id | 查看指定审批定义 | approval.approval.get
  doc: https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/approval-v4/approval/get.md
  permissions: approval:approval, approval:approval:readonly, approval:definition
  tokens: tenant_access_token
- GET /open-apis/approval/v4/districts | 查询地理库信息 | approval.district.list
  doc: https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/approval-v4/district/list.md
  permissions: approval:approval, approval:approval:readonly
  tokens: tenant_access_token, user_access_token
- GET /open-apis/approval/v4/instances | 批量获取审批实例 ID | approval.instance.list
  doc: https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/approval-v4/instance/list.md
  permissions: approval:approval, approval:approval:readonly, approval:instance
  tokens: tenant_access_token
- GET /open-apis/bitable/v1/apps/:app_token/block_workflows | 列出工作流 | bitable.app.block_workflow.list
  doc: https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-block_workflow/list.md
  permissions: base:workflow:read, bitable:app
  tokens: tenant_access_token, user_access_token
- GET /open-apis/corehr/v2/custom_org/employment_custom_org_record | 批量查询人员自定义组织变更记录 | corehr.employee.custom_org.employment_custom_org_record
  doc: https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/corehr-v2/employee-custom_org/employment_custom_org_record.md
  permissions: corehr:employment.custom_org:read, corehr:employment.custom_org:write
  tokens: tenant_access_token
- GET /open-apis/corehr/v2/custom_org/querybyid | 查询单个人员自定义组织变更记录 | corehr.employee.custom_org.querybyid
  doc: https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/corehr-v2/employee-custom_org/querybyid.md
  permissions: corehr:employment.custom_org:read, corehr:employment.custom_org:write
  tokens: tenant_access_token
- GET /open-apis/drive/v1/user/subscription_status | 查询用户云文档事件订阅状态 | drive.user.subscription_status
  doc: https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/user/subscription_status.md
  permissions: docs:event:subscribe
  tokens: tenant_access_token, user_access_token
- GET /open-apis/minutes/v1/minutes/:minute_token/artifacts | 获取妙记AI产物 | minutes.minute.artifacts
  doc: https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/minutes-v1/minute/artifacts.md
  permissions: minutes:minutes.artifacts:read
  tokens: tenant_access_token, user_access_token
- GET /open-apis/performance/v1/semesters | 获取周期列表 | performance.semester.list
  doc: https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/performance-v1/semester/list.md
  permissions: performance:performance, performance:performance:readonly, performance:semester:read
  tokens: tenant_access_token
- GET /open-apis/security_and_compliance/v1/multi_geo_entity/tenant | 获取地理位置列表 | security_and_compliance.multi_geo_entity.tenant.get
  doc: https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/security_and_compliance-v1/multi_geo_entity-tenant/get.md
  permissions: security_and_compliance:multi_geo_entity.tenant:readonly, security_and_compliance:user_migration:multi-geo
  tokens: tenant_access_token, user_access_token
- GET /open-apis/security_and_compliance/v1/user_migrations/:user_id | 获取单个用户迁移状态 | security_and_compliance.user_migration.get
  doc: https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/security_and_compliance-v1/user_migration/get.md
  permissions: security_and_compliance:user_migration, security_and_compliance:user_migration:multi-geo, security_and_compliance:user_migration:readonly
  tokens: tenant_access_token, user_access_token
- GET /open-apis/spark/v1/apps/:app_id/enums | 获取自定义枚举列表 | spark.app.enum.get_enum_list
  doc: https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/spark-v1/app-enum/get_enum_list.md
  permissions: spark:app.table:read, spark:app.table:write
  tokens: user_access_token
- GET /open-apis/spark/v1/apps/:app_id/enums/:enum_name | 获取自定义枚举详细信息 | spark.app.enum.get_enum_detail
  doc: https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/spark-v1/app-enum/get_enum_detail.md
  permissions: spark:app.table:read, spark:app.table:write
  tokens: user_access_token
- GET /open-apis/spark/v1/apps/:app_id/tables | 获取数据表列表 | spark.app.table.get_table_list
  doc: https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/spark-v1/app-table/get_table_list.md
  permissions: spark:app.table:read, spark:app.table:write
  tokens: user_access_token
- GET /open-apis/spark/v1/apps/:app_id/tables/:table_name | 获取数据表详细信息 | spark.app.table.get_table_detail
  doc: https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/spark-v1/app-table/get_table_detail.md
  permissions: spark:app.table:read, spark:app.table:write
  tokens: user_access_token
- GET /open-apis/spark/v1/apps/:app_id/tables/:table_name/records | 查询数据表数据记录 | spark.app.table.get_table_record_list
  doc: https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/spark-v1/app-table/get_table_record_list.md
  permissions: spark:app.table.record:read, spark:app.table.record:write
  tokens: user_access_token
- GET /open-apis/spark/v1/apps/:app_id/views/:view_name/records | 查询视图数据记录 | spark.app.view.get_view_record_list
  doc: https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/spark-v1/app-view/get_view_record_list.md
  permissions: spark:app.table.record:read, spark:app.table.record:write
  tokens: user_access_token
- GET /open-apis/vc/v1/notes/:note_id | 获取纪要详情 | vc.note.get
  doc: https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/note/get.md
  permissions: vc:note:read
  tokens: user_access_token
- PATCH /open-apis/application/v7/applications/:app_id/ability | 更新应用能力配置 | application.application.ability.patch
  doc: https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/application-v7/application-v7/application-ability/patch.md
  permissions: application:application:patch
  tokens: tenant_access_token, user_access_token
- PATCH /open-apis/application/v7/applications/:app_id/base | 更新应用基础信息配置 | application.application.base.patch
  doc: https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/application-v7/application-v7/application-base/patch.md
  permissions: application:application:patch
  tokens: tenant_access_token, user_access_token
- PATCH /open-apis/application/v7/applications/:app_id/config | 更新应用开发配置 | application.application.config.patch
  doc: https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/application-v7/application-v7/application-config/patch.md
  permissions: application:application:patch
  tokens: tenant_access_token, user_access_token
- PATCH /open-apis/spark/v1/apps/:app_id/tables/:table_name/records | 按条件更新数据表中的记录 | spark.app.table.patch_table_records
  doc: https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/spark-v1/app-table/patch_table_records.md
  permissions: spark:app.table.record:write
  tokens: user_access_token
- PATCH /open-apis/spark/v1/apps/:app_id/tables/:table_name/records_batch_update | 批量更新数据表中的记录 | spark.app.table.batch_update_table_records
  doc: https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/spark-v1/app-table/batch_update_table_records.md
  permissions: spark:app.table.record:write
  tokens: user_access_token
- POST /open-apis/application/v7/app_avatar/upload | 上传应用图标 | application.app_avatar.upload.create
  doc: https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/application-v7/application-v7/app_avatar-upload/create.md
  permissions: application:application:patch
  tokens: tenant_access_token, user_access_token
- POST /open-apis/application/v7/applications/:app_id/publish | 提交发布自建应用 | application.application.publish.create
  doc: https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/application-v7/application-v7/application-publish/create.md
  permissions: application:application:patch
  tokens: tenant_access_token, user_access_token
- POST /open-apis/approval/v4/districts/search | 搜索地理库信息 | approval.district.search
  doc: https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/approval-v4/district/search.md
  permissions: approval:approval, approval:approval:readonly
  tokens: tenant_access_token, user_access_token
- POST /open-apis/bitable/v1/apps/:app_token/tables/:table_id/field_groups | 创建字段编组 | bitable.app.table.field_group.create
  doc: https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-table-field_group/create.md
  permissions: base:field_group:create
  tokens: tenant_access_token, user_access_token
- POST /open-apis/bitable/v1/apps/:app_token/tables/:table_id/forms/:form_id/upgrade | 升级表单 | bitable.app.table.form.upgrade
  doc: https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/bitable-v1/app-table-form/upgrade.md
  permissions: base:form:update
  tokens: tenant_access_token, user_access_token
- POST /open-apis/contact/v3/users/basic_batch | 通过 ID 获取用户姓名 | contact.user.basic_batch
  doc: https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/user/basic_batch.md
  permissions: contact:user.basic_profile:readonly
  tokens: tenant_access_token, user_access_token
- POST /open-apis/corehr/v2/companies/query_multi_timeline | 查询指定时间范围公司版本 | corehr.company.query_multi_timeline
  doc: https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/corehr-v2/company/query_multi_timeline.md
  permissions: corehr:company:read, corehr:company:write
  tokens: tenant_access_token
- POST /open-apis/corehr/v2/custom_org/create_emp_custom_org | 新增人员自定义组织变更记录 | corehr.employee.custom_org.create_emp_custom_org
  doc: https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/corehr-v2/employee-custom_org/create_emp_custom_org.md
  permissions: corehr:employment.custom_org:write
  tokens: tenant_access_token
- POST /open-apis/corehr/v2/custom_org/del | 删除人员自定义组织变更记录 | corehr.employee.custom_org.del
  doc: https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/corehr-v2/employee-custom_org/del.md
  permissions: corehr:employment.custom_org:write
  tokens: tenant_access_token
- POST /open-apis/corehr/v2/custom_org/edit_emp_custom_org | 更新人员自定义组织变更记录 | corehr.employee.custom_org.edit_emp_custom_org
  doc: https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/corehr-v2/employee-custom_org/edit_emp_custom_org.md
  permissions: corehr:employment.custom_org:write
  tokens: tenant_access_token
- POST /open-apis/corehr/v2/locations/query_multi_timeline | 查询指定时间范围地点版本 | corehr.location.query_multi_timeline
  doc: https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/corehr-v2/location/query_multi_timeline.md
  permissions: corehr:locations:read, corehr:locations:write
  tokens: tenant_access_token
- POST /open-apis/corehr/v2/probation/edit | 编辑试用期 | corehr.probation.edit
  doc: https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/corehr-v2/probation/edit.md
  permissions: corehr:probation:write
  tokens: tenant_access_token
- POST /open-apis/corehr/v2/process_start | 发起流程 | corehr.process_start.create
  doc: https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/corehr-v2/process_start/create.md
  permissions: corehr:process.instance:write
  tokens: tenant_access_token
- POST /open-apis/corehr/v2/query_flow_data_template | 查询流程数据参数模板 | corehr.process.query_flow_data_template.create
  doc: https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/corehr-v2/process-query_flow_data_template/create.md
  permissions: corehr:process.instance:write
  tokens: tenant_access_token
- POST /open-apis/drive/v1/user/subscription | 订阅用户云文档事件 | drive.user.subscription
  doc: https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/user/subscription.md
  permissions: docs:event:subscribe
  tokens: tenant_access_token, user_access_token
- POST /open-apis/performance/v1/review_datas/query | 获取绩效结果 | performance.review_data.query
  doc: https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/performance-v1/review_data/query.md
  permissions: performance:performance, performance:performance:readonly
  tokens: tenant_access_token, user_access_token
- POST /open-apis/performance/v1/stage_tasks/find_by_page | 获取周期任务（全部用户） | performance.stage_task.find_by_page
  doc: https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/performance-v1/stage_task/find_by_page.md
  permissions: performance:performance, performance:performance:readonly, performance:semester:read
  tokens: tenant_access_token
- POST /open-apis/performance/v1/stage_tasks/find_by_user_list | 获取周期任务（指定用户） | performance.stage_task.find_by_user_list
  doc: https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/performance-v1/stage_task/find_by_user_list.md
  permissions: performance:performance, performance:performance:readonly, performance:semester:read
  tokens: tenant_access_token, user_access_token
- POST /open-apis/performance/v2/user_info/query | 获取绩效周期的人员信息 | performance.user_info.query
  doc: https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/performance-v2/user_info/query.md
  permissions: performance:performance, performance:performance:readonly
  tokens: tenant_access_token
- POST /open-apis/search/v2/doc_wiki/search | 搜索文档 | search.doc_wiki.search
  doc: https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/search-v2/doc_wiki/search.md
  permissions: search:docs:read
  tokens: user_access_token
- POST /open-apis/security_and_compliance/v1/user_migrations | 迁移用户 | security_and_compliance.user_migration.create
  doc: https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/security_and_compliance-v1/user_migration/create.md
  permissions: security_and_compliance:user_migration, security_and_compliance:user_migration:multi-geo
  tokens: tenant_access_token, user_access_token
- POST /open-apis/security_and_compliance/v1/user_migrations/cancel | 取消用户迁移 | security_and_compliance.user_migration.cancel
  doc: https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/security_and_compliance-v1/user_migration/cancel.md
  permissions: security_and_compliance:user_migration, security_and_compliance:user_migration:multi-geo
  tokens: tenant_access_token, user_access_token
- POST /open-apis/security_and_compliance/v1/user_migrations/search | 批量获取用户迁移状态 | security_and_compliance.user_migration.search
  doc: https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/security_and_compliance-v1/user_migration/search.md
  permissions: security_and_compliance:user_migration, security_and_compliance:user_migration:multi-geo, security_and_compliance:user_migration:readonly
  tokens: tenant_access_token, user_access_token
- POST /open-apis/spark/v1/apps/:app_id/sql_commands | 执行 SQL | spark.app.sql_commands
  doc: https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/spark-v1/app/sql_commands.md
  permissions: spark:app.sql_commands:write
  tokens: user_access_token
- POST /open-apis/spark/v1/apps/:app_id/tables/:table_name/records | 向数据表中添加或更新记录 | spark.app.table.post_table_records
  doc: https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/spark-v1/app-table/post_table_records.md
  permissions: spark:app.table.record:write
  tokens: user_access_token
- POST /open-apis/spark/v1/directory/user/id_convert | 妙搭和飞书用户 ID 转换 | spark.directory.user.id_convert
  doc: https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/spark-v1/directory-user/id_convert.md
  permissions: spark:directory.user.id_convert:read
  tokens: tenant_access_token, user_access_token
- POST /open-apis/vc/v1/meetings/search | 搜索会议记录 | vc.meeting.search
  doc: https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/vc-v1/meeting/search.md
  permissions: vc:meeting.search:read
  tokens: user_access_token
- POST /open-apis/workplace/v1/custom_workplace_access_data/search | 获取定制工作台访问数据 | workplace.custom_workplace_access_data.search
  doc: https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/workplace-v1/custom_workplace_access_data/search.md
  permissions: workplace:workplace_using_data:read
  tokens: tenant_access_token
- POST /open-apis/workplace/v1/workplace_access_data/search | 获取工作台访问数据 | workplace.workplace_access_data.search
  doc: https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/workplace-v1/workplace_access_data/search.md
  permissions: workplace:workplace_using_data:read
  tokens: tenant_access_token
- POST /open-apis/workplace/v1/workplace_block_access_data/search | 获取定制工作台小组件访问数据 | workplace.workplace_block_access_data.search
  doc: https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/workplace-v1/workplace_block_access_data/search.md
  permissions: workplace:workplace_using_data:read
  tokens: tenant_access_token
