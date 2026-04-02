# Feishu Scope To API Index

- Scopes: 949

- acs:access_record:readonly
  tokens: tenant_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- acs:device:write
  tokens: user_access_token
  requiredBy: 3
  fieldRequiredBy: 0
- acs:devices:readonly
  tokens: tenant_access_token, user_access_token
  requiredBy: 2
  fieldRequiredBy: 0
- acs:users
  tokens: tenant_access_token, user_access_token
  requiredBy: 12
  fieldRequiredBy: 0
- admin:admin_dept_stat:readonly
  tokens: tenant_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- admin:admin_user_stat:readonly
  tokens: tenant_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- admin:app.category:update
  tokens: tenant_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- admin:app.enable:write
  tokens: tenant_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- admin:app.info:readonly
  tokens: tenant_access_token, user_access_token
  requiredBy: 8
  fieldRequiredBy: 0
- admin:app.visibility
  tokens: tenant_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- admin:audit_info:readonly
  tokens: tenant_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- admin:badge
  tokens: tenant_access_token
  requiredBy: 5
  fieldRequiredBy: 0
- admin:badge.grant
  tokens: tenant_access_token
  requiredBy: 5
  fieldRequiredBy: 0
- admin:ent_email_password
  tokens: tenant_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- aily:data_asset:read
  tokens: tenant_access_token, user_access_token
  requiredBy: 3
  fieldRequiredBy: 0
- aily:data_asset:upload_file
  tokens: tenant_access_token, user_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- aily:data_asset:write
  tokens: tenant_access_token, user_access_token
  requiredBy: 2
  fieldRequiredBy: 0
- aily:knowledge:ask
  tokens: tenant_access_token, user_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- aily:message:read
  tokens: tenant_access_token, user_access_token
  requiredBy: 2
  fieldRequiredBy: 0
- aily:message:write
  tokens: tenant_access_token, user_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- aily:run:read
  tokens: tenant_access_token, user_access_token
  requiredBy: 2
  fieldRequiredBy: 0
- aily:run:write
  tokens: tenant_access_token, user_access_token
  requiredBy: 2
  fieldRequiredBy: 0
- aily:session:read
  tokens: tenant_access_token, user_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- aily:session:write
  tokens: tenant_access_token, user_access_token
  requiredBy: 3
  fieldRequiredBy: 0
- aily:skill:read
  tokens: tenant_access_token, user_access_token
  requiredBy: 2
  fieldRequiredBy: 0
- aily:skill:write
  tokens: tenant_access_token, user_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- app_engine:application.environment_variable:read
  tokens: tenant_access_token
  requiredBy: 2
  fieldRequiredBy: 0
- app_engine:application.function:write
  tokens: tenant_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- app_engine:approval:read
  tokens: tenant_access_token
  requiredBy: 2
  fieldRequiredBy: 0
- app_engine:approval:write
  tokens: tenant_access_token
  requiredBy: 9
  fieldRequiredBy: 0
- app_engine:apps:read
  tokens: user_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- app_engine:flow:write
  tokens: tenant_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- app_engine:object.record:read
  tokens: tenant_access_token
  requiredBy: 4
  fieldRequiredBy: 0
- app_engine:object.record:write
  tokens: tenant_access_token
  requiredBy: 7
  fieldRequiredBy: 0
- app_engine:record_permission.member:write
  tokens: tenant_access_token
  requiredBy: 2
  fieldRequiredBy: 0
- app_engine:role:read
  tokens: tenant_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- app_engine:role.member:write
  tokens: tenant_access_token
  requiredBy: 2
  fieldRequiredBy: 0
- app_engine:seat_activities:read
  tokens: user_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- app_engine:seat_assignments:read
  tokens: user_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- app_engine:security.audit_log:read
  tokens: user_access_token
  requiredBy: 4
  fieldRequiredBy: 0
- app_engine:workspace.sql_commands:write
  tokens: user_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- app_engine:workspace.table:read
  tokens: user_access_token
  requiredBy: 4
  fieldRequiredBy: 0
- app_engine:workspace.table:write
  tokens: user_access_token
  requiredBy: 4
  fieldRequiredBy: 0
- app_engine:workspace.table.record:read
  tokens: user_access_token
  requiredBy: 2
  fieldRequiredBy: 0
- app_engine:workspace.table.record:write
  tokens: user_access_token
  requiredBy: 6
  fieldRequiredBy: 0
- application:app_recommend_rule:readonly
  tokens: tenant_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- application:application
  tokens: tenant_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- application:application:patch
  tokens: tenant_access_token, user_access_token
  requiredBy: 5
  fieldRequiredBy: 0
- application:application:self_manage
  tokens: tenant_access_token, user_access_token
  requiredBy: 6
  fieldRequiredBy: 0
- application:application.app_message_stats.overview:readonly
  tokens: tenant_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- application:application.app_usage_stats.overview:readonly
  tokens: tenant_access_token
  requiredBy: 2
  fieldRequiredBy: 0
- application:application.app_version
  tokens: tenant_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- application:application.app_version:readonly
  tokens: tenant_access_token
  requiredBy: 3
  fieldRequiredBy: 0
- application:application.collaborators:write
  tokens: tenant_access_token, user_access_token
  requiredBy: 2
  fieldRequiredBy: 0
- application:application.contacts_range:write
  tokens: tenant_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- application:application.feedback.feedback_info
  tokens: tenant_access_token
  requiredBy: 2
  fieldRequiredBy: 0
- approval:approval
  tokens: tenant_access_token, user_access_token
  requiredBy: 27
  fieldRequiredBy: 0
- approval:approval:readonly
  tokens: tenant_access_token, user_access_token
  requiredBy: 19
  fieldRequiredBy: 0
- approval:approval.list:readonly
  tokens: tenant_access_token
  requiredBy: 3
  fieldRequiredBy: 0
- approval:definition
  tokens: tenant_access_token
  requiredBy: 4
  fieldRequiredBy: 0
- approval:external_approval
  tokens: tenant_access_token
  requiredBy: 2
  fieldRequiredBy: 0
- approval:external_instance
  tokens: tenant_access_token
  requiredBy: 2
  fieldRequiredBy: 0
- approval:external_task
  tokens: tenant_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- approval:instance
  tokens: tenant_access_token
  requiredBy: 6
  fieldRequiredBy: 0
- approval:instance.comment
  tokens: tenant_access_token
  requiredBy: 4
  fieldRequiredBy: 0
- approval:task
  tokens: tenant_access_token
  requiredBy: 6
  fieldRequiredBy: 0
- approval:task:list_by_user
  tokens: tenant_access_token, user_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- attendance:rule
  tokens: tenant_access_token, user_access_token
  requiredBy: 16
  fieldRequiredBy: 0
- attendance:rule:readonly
  tokens: tenant_access_token, user_access_token
  requiredBy: 8
  fieldRequiredBy: 0
- attendance:task
  tokens: tenant_access_token, user_access_token
  requiredBy: 13
  fieldRequiredBy: 0
- attendance:task:readonly
  tokens: tenant_access_token, user_access_token
  requiredBy: 12
  fieldRequiredBy: 0
- baike:entity
  tokens: tenant_access_token, user_access_token
  requiredBy: 22
  fieldRequiredBy: 0
- baike:entity:exempt_delete
  tokens: tenant_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- baike:entity:exempt_review
  tokens: tenant_access_token, user_access_token
  requiredBy: 26
  fieldRequiredBy: 0
- baike:entity:readonly
  tokens: tenant_access_token, user_access_token
  requiredBy: 16
  fieldRequiredBy: 0
- base:app:copy
  tokens: tenant_access_token, user_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- base:app:create
  tokens: tenant_access_token, user_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- base:app:read
  tokens: tenant_access_token, user_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- base:app:update
  tokens: tenant_access_token, user_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- base:collaborator:create
  tokens: tenant_access_token, user_access_token
  requiredBy: 2
  fieldRequiredBy: 0
- base:collaborator:delete
  tokens: tenant_access_token, user_access_token
  requiredBy: 2
  fieldRequiredBy: 0
- base:collaborator:read
  tokens: tenant_access_token, user_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- base:dashboard:copy
  tokens: tenant_access_token, user_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- base:dashboard:read
  tokens: tenant_access_token, user_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- base:field_group:create
  tokens: tenant_access_token, user_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- base:field:create
  tokens: tenant_access_token, user_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- base:field:delete
  tokens: tenant_access_token, user_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- base:field:read
  tokens: tenant_access_token, user_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- base:field:update
  tokens: tenant_access_token, user_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- base:form:read
  tokens: tenant_access_token, user_access_token
  requiredBy: 2
  fieldRequiredBy: 0
- base:form:update
  tokens: tenant_access_token, user_access_token
  requiredBy: 3
  fieldRequiredBy: 0
- base:record:create
  tokens: tenant_access_token, user_access_token
  requiredBy: 2
  fieldRequiredBy: 0
- base:record:delete
  tokens: tenant_access_token, user_access_token
  requiredBy: 2
  fieldRequiredBy: 0
- base:record:read
  tokens: tenant_access_token, user_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- base:record:retrieve
  tokens: tenant_access_token, user_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- base:record:update
  tokens: tenant_access_token, user_access_token
  requiredBy: 2
  fieldRequiredBy: 0
- base:role:create
  tokens: tenant_access_token, user_access_token
  requiredBy: 2
  fieldRequiredBy: 0
- base:role:delete
  tokens: tenant_access_token, user_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- base:role:read
  tokens: tenant_access_token, user_access_token
  requiredBy: 2
  fieldRequiredBy: 0
- base:role:update
  tokens: tenant_access_token, user_access_token
  requiredBy: 2
  fieldRequiredBy: 0
- base:table:create
  tokens: tenant_access_token, user_access_token
  requiredBy: 2
  fieldRequiredBy: 0
- base:table:delete
  tokens: tenant_access_token, user_access_token
  requiredBy: 2
  fieldRequiredBy: 0
- base:table:read
  tokens: tenant_access_token, user_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- base:table:update
  tokens: tenant_access_token, user_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- base:view:read
  tokens: tenant_access_token, user_access_token
  requiredBy: 2
  fieldRequiredBy: 0
- base:view:write_only
  tokens: tenant_access_token, user_access_token
  requiredBy: 3
  fieldRequiredBy: 0
- base:workflow:read
  tokens: tenant_access_token, user_access_token
  requiredBy: 2
  fieldRequiredBy: 0
- base:workflow:write
  tokens: tenant_access_token, user_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- bitable:app
  tokens: tenant_access_token, user_access_token
  requiredBy: 57
  fieldRequiredBy: 0
- bitable:app:readonly
  tokens: tenant_access_token, user_access_token
  requiredBy: 15
  fieldRequiredBy: 0
- bitable:bitable
  tokens: tenant_access_token, user_access_token
  requiredBy: 11
  fieldRequiredBy: 0
- board:whiteboard:node:create
  tokens: tenant_access_token, user_access_token
  requiredBy: 2
  fieldRequiredBy: 0
- board:whiteboard:node:read
  tokens: tenant_access_token, user_access_token
  requiredBy: 3
  fieldRequiredBy: 0
- calendar:calendar
  tokens: tenant_access_token, user_access_token
  requiredBy: 38
  fieldRequiredBy: 0
- calendar:calendar:create
  tokens: tenant_access_token, user_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- calendar:calendar:delete
  tokens: tenant_access_token, user_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- calendar:calendar:read
  tokens: tenant_access_token, user_access_token
  requiredBy: 8
  fieldRequiredBy: 0
- calendar:calendar:readonly
  tokens: tenant_access_token, user_access_token
  requiredBy: 24
  fieldRequiredBy: 0
- calendar:calendar:subscribe
  tokens: tenant_access_token, user_access_token
  requiredBy: 2
  fieldRequiredBy: 0
- calendar:calendar:update
  tokens: tenant_access_token, user_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- calendar:calendar.acl:create
  tokens: tenant_access_token, user_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- calendar:calendar.acl:delete
  tokens: tenant_access_token, user_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- calendar:calendar.acl:read
  tokens: tenant_access_token, user_access_token
  requiredBy: 3
  fieldRequiredBy: 0
- calendar:calendar.calendar:readonly
  tokens: tenant_access_token, user_access_token
  requiredBy: 4
  fieldRequiredBy: 0
- calendar:calendar.event:create
  tokens: tenant_access_token, user_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- calendar:calendar.event:delete
  tokens: tenant_access_token, user_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- calendar:calendar.event:read
  tokens: tenant_access_token, user_access_token
  requiredBy: 9
  fieldRequiredBy: 0
- calendar:calendar.event:reply
  tokens: tenant_access_token, user_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- calendar:calendar.event:update
  tokens: tenant_access_token, user_access_token
  requiredBy: 6
  fieldRequiredBy: 0
- calendar:calendar.event:writeonly
  tokens: tenant_access_token, user_access_token
  requiredBy: 3
  fieldRequiredBy: 0
- calendar:calendar.free_busy:read
  tokens: tenant_access_token, user_access_token
  requiredBy: 2
  fieldRequiredBy: 0
- calendar:exchange.bindings:create
  tokens: user_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- calendar:exchange.bindings:delete
  tokens: user_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- calendar:exchange.bindings:read
  tokens: user_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- calendar:setting:generate_caldav_conf
  tokens: user_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- calendar:settings.caldav:create
  tokens: user_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- calendar:time_off:create
  tokens: tenant_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- calendar:time_off:delete
  tokens: tenant_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- calendar:timeoff
  tokens: tenant_access_token
  requiredBy: 2
  fieldRequiredBy: 0
- cardkit:card:write
  tokens: tenant_access_token
  requiredBy: 9
  fieldRequiredBy: 0
- contact:contact
  tokens: tenant_access_token, user_access_token
  requiredBy: 18
  fieldRequiredBy: 0
- contact:contact:access_as_app
  tokens: tenant_access_token, user_access_token
  requiredBy: 8
  fieldRequiredBy: 23
- contact:contact:access_as_user
  tokens: tenant_access_token, user_access_token
  requiredBy: 4
  fieldRequiredBy: 0
- contact:contact:readonly
  tokens: tenant_access_token, user_access_token
  requiredBy: 5
  fieldRequiredBy: 23
- contact:contact:readonly_as_app
  tokens: tenant_access_token, user_access_token
  requiredBy: 17
  fieldRequiredBy: 23
- contact:contact:update_department_id
  tokens: tenant_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- contact:contact:update_user_id
  tokens: tenant_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- contact:contact.base:readonly
  tokens: tenant_access_token, user_access_token
  requiredBy: 11
  fieldRequiredBy: 0
- contact:department.base:readonly
  tokens: tenant_access_token, user_access_token
  requiredBy: 0
  fieldRequiredBy: 8
- contact:department.hrbp:readonly
  tokens: tenant_access_token, user_access_token
  requiredBy: 0
  fieldRequiredBy: 7
- contact:department.organize:readonly
  tokens: tenant_access_token, user_access_token
  requiredBy: 3
  fieldRequiredBy: 8
- contact:functional_role
  tokens: tenant_access_token
  requiredBy: 8
  fieldRequiredBy: 0
- contact:functional_role:readonly
  tokens: tenant_access_token
  requiredBy: 2
  fieldRequiredBy: 0
- contact:group
  tokens: tenant_access_token
  requiredBy: 7
  fieldRequiredBy: 0
- contact:group:readonly
  tokens: tenant_access_token
  requiredBy: 4
  fieldRequiredBy: 0
- contact:job_family
  tokens: tenant_access_token
  requiredBy: 5
  fieldRequiredBy: 0
- contact:job_family:readonly
  tokens: tenant_access_token
  requiredBy: 2
  fieldRequiredBy: 0
- contact:job_level
  tokens: tenant_access_token
  requiredBy: 5
  fieldRequiredBy: 0
- contact:job_level:readonly
  tokens: tenant_access_token
  requiredBy: 2
  fieldRequiredBy: 0
- contact:job_title:readonly
  tokens: tenant_access_token, user_access_token
  requiredBy: 2
  fieldRequiredBy: 0
- contact:unit
  tokens: tenant_access_token
  requiredBy: 5
  fieldRequiredBy: 0
- contact:unit:readonly
  tokens: tenant_access_token
  requiredBy: 3
  fieldRequiredBy: 0
- contact:user.assign_info:read
  tokens: tenant_access_token, user_access_token
  requiredBy: 0
  fieldRequiredBy: 2
- contact:user.base
  tokens: tenant_access_token, user_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- contact:user.base:readonly
  tokens: tenant_access_token, user_access_token
  requiredBy: 1
  fieldRequiredBy: 13
- contact:user.basic_profile:readonly
  tokens: tenant_access_token, user_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- contact:user.department_path:readonly
  tokens: tenant_access_token, user_access_token
  requiredBy: 0
  fieldRequiredBy: 3
- contact:user.department:readonly
  tokens: tenant_access_token, user_access_token
  requiredBy: 0
  fieldRequiredBy: 5
- contact:user.dotted_line_leader_info.read
  tokens: tenant_access_token, user_access_token
  requiredBy: 0
  fieldRequiredBy: 5
- contact:user.email:readonly
  tokens: tenant_access_token, user_access_token
  requiredBy: 0
  fieldRequiredBy: 9
- contact:user.employee_id:readonly
  tokens: tenant_access_token, user_access_token
  requiredBy: 0
  fieldRequiredBy: 464
- contact:user.employee_number:read
  tokens: tenant_access_token, user_access_token
  requiredBy: 0
  fieldRequiredBy: 5
- contact:user.employee:readonly
  tokens: tenant_access_token, user_access_token
  requiredBy: 0
  fieldRequiredBy: 7
- contact:user.gender:readonly
  tokens: tenant_access_token, user_access_token
  requiredBy: 0
  fieldRequiredBy: 5
- contact:user.id:readonly
  tokens: tenant_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- contact:user.job_family:readonly
  tokens: tenant_access_token, user_access_token
  requiredBy: 0
  fieldRequiredBy: 5
- contact:user.job_level:readonly
  tokens: tenant_access_token, user_access_token
  requiredBy: 0
  fieldRequiredBy: 5
- contact:user.phone:readonly
  tokens: tenant_access_token, user_access_token
  requiredBy: 0
  fieldRequiredBy: 7
- contact:user.subscription_ids:write
  tokens: tenant_access_token, user_access_token
  requiredBy: 0
  fieldRequiredBy: 1
- contact:user.union_id:readonly
  tokens: tenant_access_token, user_access_token
  requiredBy: 0
  fieldRequiredBy: 5
- contact:user.user_geo
  tokens: tenant_access_token, user_access_token
  requiredBy: 0
  fieldRequiredBy: 4
- contact:work_city:readonly
  tokens: tenant_access_token, user_access_token
  requiredBy: 2
  fieldRequiredBy: 0
- corehr:additional_job:read
  tokens: tenant_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- corehr:additional_job:write
  tokens: tenant_access_token
  requiredBy: 4
  fieldRequiredBy: 0
- corehr:additional_job.compensation_type:read
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 1
- corehr:additional_job.compensation_type:write
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 3
- corehr:additional_job.job_level:read
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 1
- corehr:additional_job.job_level:write
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 3
- corehr:additional_job.job:read
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 1
- corehr:additional_job.job:write
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 3
- corehr:additional_job.position:read
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 1
- corehr:additional_job.position:write
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 3
- corehr:additional_job.service_company:read
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 1
- corehr:additional_job.service_company:write
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 3
- corehr:additional_job.work_shift:read
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 1
- corehr:additional_job.work_shift:write
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 3
- corehr:approval_groups.orgdraft_department_change:read
  tokens: tenant_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- corehr:approval_groups.orgdraft_job_change:read
  tokens: tenant_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- corehr:approval_groups.orgdraft_position_change:read
  tokens: tenant_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- corehr:authorization:read
  tokens: tenant_access_token
  requiredBy: 3
  fieldRequiredBy: 0
- corehr:authorization:write
  tokens: tenant_access_token
  requiredBy: 5
  fieldRequiredBy: 0
- corehr:authorization.bp:read
  tokens: tenant_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- corehr:bp.get_by_department:read
  tokens: tenant_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- corehr:bp.list:read
  tokens: tenant_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- corehr:common_data.basic_data:read
  tokens: tenant_access_token
  requiredBy: 19
  fieldRequiredBy: 0
- corehr:common_data.id.convert:read
  tokens: tenant_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- corehr:common_data.meta_data:read
  tokens: tenant_access_token
  requiredBy: 4
  fieldRequiredBy: 0
- corehr:common_data.meta_data:write
  tokens: tenant_access_token
  requiredBy: 2
  fieldRequiredBy: 0
- corehr:common_data.preset_data:read
  tokens: tenant_access_token
  requiredBy: 10
  fieldRequiredBy: 0
- corehr:common_data.preset_data:write
  tokens: tenant_access_token
  requiredBy: 18
  fieldRequiredBy: 0
- corehr:company:read
  tokens: tenant_access_token
  requiredBy: 5
  fieldRequiredBy: 0
- corehr:company:write
  tokens: tenant_access_token
  requiredBy: 4
  fieldRequiredBy: 0
- corehr:compensation_archive_detail:read
  tokens: tenant_access_token, user_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- corehr:compensation_archive_detail.change_description:read
  tokens: tenant_access_token, user_access_token
  requiredBy: 0
  fieldRequiredBy: 1
- corehr:compensation_archive_detail.indicators:read
  tokens: tenant_access_token, user_access_token
  requiredBy: 0
  fieldRequiredBy: 1
- corehr:compensation_archive_detail.items:read
  tokens: tenant_access_token, user_access_token
  requiredBy: 0
  fieldRequiredBy: 1
- corehr:compensation_archive_detail.plan:read
  tokens: tenant_access_token, user_access_token
  requiredBy: 0
  fieldRequiredBy: 1
- corehr:compensation_archive_detail.salary_level:read
  tokens: tenant_access_token, user_access_token
  requiredBy: 0
  fieldRequiredBy: 1
- corehr:compensation_archive:write
  tokens: tenant_access_token, user_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- corehr:compensation_change_reason:read
  tokens: tenant_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- corehr:compensation_indicator:read
  tokens: tenant_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- corehr:compensation_item_category:read
  tokens: tenant_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- corehr:compensation_item:read
  tokens: tenant_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- corehr:compensation_lump_sum_payment_detail.belong_time:read
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 2
- corehr:compensation_lump_sum_payment.binding_period_offboarding_type:read
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 1
- corehr:compensation_lump_sum_payment.return_amount_after_tax:read
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 1
- corehr:compensation_lump_sum_payment.return_amount_before_tax:read
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 1
- corehr:compensation_plan_detail.indicators:read
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 1
- corehr:compensation_plan_detail.items:read
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 1
- corehr:compensation_plan:read
  tokens: tenant_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- corehr:compensation_standards:read
  tokens: tenant_access_token, user_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- corehr:compensation.insurance:read
  tokens: tenant_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- corehr:compensation.lump_sum_payment:read
  tokens: tenant_access_token
  requiredBy: 2
  fieldRequiredBy: 0
- corehr:compensation.lump_sum_payment:write
  tokens: tenant_access_token
  requiredBy: 3
  fieldRequiredBy: 0
- corehr:compensation.recurring_payment:delete
  tokens: tenant_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- corehr:compensation.recurring_payment:read
  tokens: tenant_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- corehr:compensation.recurring_payment:update
  tokens: tenant_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- corehr:compensation.recurring_payment:write
  tokens: tenant_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- corehr:compensation.social_adjust_record:read
  tokens: tenant_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- corehr:compensation.social_archive:read
  tokens: tenant_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- corehr:compensation.social_plan:read
  tokens: tenant_access_token
  requiredBy: 2
  fieldRequiredBy: 0
- corehr:contract:read
  tokens: tenant_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- corehr:contract:write
  tokens: tenant_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- corehr:contract.company:read
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 3
- corehr:contract.company:write
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 3
- corehr:contract.period:read
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 5
- corehr:contract.period:write
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 5
- corehr:corehr
  tokens: tenant_access_token, user_access_token
  requiredBy: 99
  fieldRequiredBy: 0
- corehr:corehr:readonly
  tokens: tenant_access_token, user_access_token
  requiredBy: 52
  fieldRequiredBy: 0
- corehr:cost_allocation:read
  tokens: tenant_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- corehr:cost_allocation:write
  tokens: tenant_access_token
  requiredBy: 4
  fieldRequiredBy: 0
- corehr:cost_center:read
  tokens: tenant_access_token
  requiredBy: 2
  fieldRequiredBy: 0
- corehr:cost_center:write
  tokens: tenant_access_token
  requiredBy: 7
  fieldRequiredBy: 0
- corehr:custom_org:read
  tokens: tenant_access_token
  requiredBy: 2
  fieldRequiredBy: 0
- corehr:custom_org:write
  tokens: tenant_access_token
  requiredBy: 7
  fieldRequiredBy: 0
- corehr:default_cost_center:read
  tokens: tenant_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- corehr:default_cost_center:write
  tokens: tenant_access_token
  requiredBy: 4
  fieldRequiredBy: 0
- corehr:department:read
  tokens: tenant_access_token
  requiredBy: 4
  fieldRequiredBy: 0
- corehr:department:write
  tokens: tenant_access_token
  requiredBy: 9
  fieldRequiredBy: 0
- corehr:department.cost_center_id:read
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 1
- corehr:department.custom_fields:read
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 3
- corehr:department.manager:read
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 3
- corehr:department.operation_log:read
  tokens: tenant_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- corehr:department.organize:read
  tokens: tenant_access_token
  requiredBy: 2
  fieldRequiredBy: 3
- corehr:draft:read
  tokens: tenant_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- corehr:employee:read
  tokens: tenant_access_token
  requiredBy: 3
  fieldRequiredBy: 0
- corehr:employee:write
  tokens: tenant_access_token
  requiredBy: 2
  fieldRequiredBy: 0
- corehr:employee.add:write
  tokens: tenant_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- corehr:employee.all_bp:read
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 3
- corehr:employee.bp:read
  tokens: tenant_access_token
  requiredBy: 1
  fieldRequiredBy: 2
- corehr:employee.job_data:read
  tokens: tenant_access_token
  requiredBy: 2
  fieldRequiredBy: 0
- corehr:employees.international_assignment:read
  tokens: tenant_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- corehr:employees.international_assignment:write
  tokens: tenant_access_token
  requiredBy: 4
  fieldRequiredBy: 0
- corehr:employment:write
  tokens: tenant_access_token
  requiredBy: 3
  fieldRequiredBy: 0
- corehr:employment.archive_cpst_plan:read
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 2
- corehr:employment.assignment_pay_group:read
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 2
- corehr:employment.assignment:read
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 2
- corehr:employment.contract_type:read
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 2
- corehr:employment.custom_field:read
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 2
- corehr:employment.custom_org_field:read
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 4
- corehr:employment.custom_org_field:write
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 4
- corehr:employment.custom_org:read
  tokens: tenant_access_token
  requiredBy: 2
  fieldRequiredBy: 0
- corehr:employment.custom_org:write
  tokens: tenant_access_token
  requiredBy: 5
  fieldRequiredBy: 0
- corehr:employment.individuals_with_headcount_or_not:read
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 2
- corehr:employment.international_assignment.accommodation:write
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 2
- corehr:employment.international_assignment.compensation_type:read
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 1
- corehr:employment.international_assignment.compensation_type:write
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 3
- corehr:employment.international_assignment.custom_field:read
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 1
- corehr:employment.international_assignment.custom_field:write
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 3
- corehr:employment.international_assignment.international_assignment_allowance:write
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 2
- corehr:employment.international_assignment.job_grade:read
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 1
- corehr:employment.international_assignment.job_grade:write
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 3
- corehr:employment.international_assignment.job_level:read
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 1
- corehr:employment.international_assignment.job_level:write
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 3
- corehr:employment.international_assignment.job:read
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 1
- corehr:employment.international_assignment.job:write
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 3
- corehr:employment.international_assignment.position:read
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 1
- corehr:employment.international_assignment.position:write
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 3
- corehr:employment.international_assignment.service_company:read
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 1
- corehr:employment.international_assignment.service_company:write
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 3
- corehr:employment.international_assignment.weekly_working_hours:read
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 1
- corehr:employment.international_assignment.weekly_working_hours:write
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 3
- corehr:employment.international_assignment.work_calendar:read
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 1
- corehr:employment.international_assignment.work_calendar:write
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 3
- corehr:employment.international_assignment.work_location:read
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 1
- corehr:employment.international_assignment.work_location:write
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 3
- corehr:employment.international_assignment.work_shift:read
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 1
- corehr:employment.international_assignment.work_shift:write
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 3
- corehr:employment.international_assignment.working_hours_type:read
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 1
- corehr:employment.international_assignment.working_hours_type:write
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 3
- corehr:employment.is_direct_leader:read
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 2
- corehr:employment.is_dotted_leader:read
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 2
- corehr:employment.job_grade:read
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 7
- corehr:employment.job_grade:write
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 7
- corehr:employment.job_level:read
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 7
- corehr:employment.job_level:write
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 7
- corehr:employment.job:read
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 7
- corehr:employment.offboarding_reason:read
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 3
- corehr:employment.patch:write
  tokens: tenant_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- corehr:employment.pathway:read
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 6
- corehr:employment.pathway:write
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 6
- corehr:employment.pay_group:read
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 2
- corehr:employment.position:read
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 4
- corehr:employment.position:write
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 4
- corehr:employment.seniority_adjust_information:read
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 2
- corehr:employment.seniority_adjust_information:write
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 2
- corehr:file:read
  tokens: tenant_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- corehr:file:write
  tokens: tenant_access_token
  requiredBy: 2
  fieldRequiredBy: 0
- corehr:job_change:create
  tokens: tenant_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- corehr:job_change:read
  tokens: tenant_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- corehr:job_change:write
  tokens: tenant_access_token
  requiredBy: 3
  fieldRequiredBy: 0
- corehr:job_change.custom_field:read
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 2
- corehr:job_change.employment_custom_field:read
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 3
- corehr:job_change.is_adjust_salary:read
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 2
- corehr:job_change.pathway:read
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 3
- corehr:job_change.pathway:write
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 3
- corehr:job_change.remark:read
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 2
- corehr:job_change.social_security_city:read
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 2
- corehr:job_data:read
  tokens: tenant_access_token
  requiredBy: 2
  fieldRequiredBy: 0
- corehr:job_data:write
  tokens: tenant_access_token
  requiredBy: 5
  fieldRequiredBy: 0
- corehr:job_data.assignment_start_reason:read
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 2
- corehr:job_data.compensation_type:read
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 10
- corehr:job_data.job_data_reason:read
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 2
- corehr:job_data.service_company:read
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 10
- corehr:job_data.work_shift:read
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 7
- corehr:job_family:read
  tokens: tenant_access_token
  requiredBy: 5
  fieldRequiredBy: 0
- corehr:job_family:write
  tokens: tenant_access_token
  requiredBy: 8
  fieldRequiredBy: 0
- corehr:job_grade:read
  tokens: tenant_access_token
  requiredBy: 2
  fieldRequiredBy: 0
- corehr:job_grade:write
  tokens: tenant_access_token
  requiredBy: 5
  fieldRequiredBy: 0
- corehr:job_level:read
  tokens: tenant_access_token
  requiredBy: 4
  fieldRequiredBy: 0
- corehr:job_level:write
  tokens: tenant_access_token
  requiredBy: 7
  fieldRequiredBy: 0
- corehr:job:read
  tokens: tenant_access_token
  requiredBy: 7
  fieldRequiredBy: 0
- corehr:job:write
  tokens: tenant_access_token
  requiredBy: 10
  fieldRequiredBy: 0
- corehr:job.job_level:read
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 6
- corehr:job.only:read
  tokens: tenant_access_token
  requiredBy: 3
  fieldRequiredBy: 0
- corehr:leave_granting_record:write
  tokens: tenant_access_token
  requiredBy: 2
  fieldRequiredBy: 0
- corehr:leave:read
  tokens: tenant_access_token, user_access_token
  requiredBy: 4
  fieldRequiredBy: 0
- corehr:locations:read
  tokens: tenant_access_token
  requiredBy: 5
  fieldRequiredBy: 0
- corehr:locations:write
  tokens: tenant_access_token
  requiredBy: 12
  fieldRequiredBy: 0
- corehr:offboarding:read
  tokens: tenant_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- corehr:offboarding:write
  tokens: tenant_access_token
  requiredBy: 2
  fieldRequiredBy: 0
- corehr:offboarding.block_list:read
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 1
- corehr:offboarding.block_list:write
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 1
- corehr:offboarding.custom_field:read
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 1
- corehr:offboarding.last_attendance_date:read
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 1
- corehr:offboarding.noncompete_agreement:read
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 1
- corehr:offboarding.retain_account:read
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 1
- corehr:offboarding.retain_account:write
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 1
- corehr:offboarding.revoke:write
  tokens: tenant_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- corehr:offboarding.signature:read
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 1
- corehr:offboarding.social_insurance:read
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 1
- corehr:offboarding.submit:write
  tokens: tenant_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- corehr:offboarding.update:write
  tokens: tenant_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- corehr:orgrole_info:read
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 1
- corehr:pathway:read
  tokens: tenant_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- corehr:pathway:write
  tokens: tenant_access_token
  requiredBy: 5
  fieldRequiredBy: 0
- corehr:person:read
  tokens: tenant_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- corehr:person:write
  tokens: tenant_access_token
  requiredBy: 6
  fieldRequiredBy: 0
- corehr:person.address:read
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 4
- corehr:person.address:write
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 4
- corehr:person.bank_account:read
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 4
- corehr:person.bank_account:write
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 4
- corehr:person.born_country_region:read
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 4
- corehr:person.born_country_region:write
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 4
- corehr:person.custom_field:read
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 4
- corehr:person.custom_field:write
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 4
- corehr:person.date_entered_workforce:read
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 4
- corehr:person.date_entered_workforce:write
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 4
- corehr:person.date_of_birth:read
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 4
- corehr:person.date_of_birth:write
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 4
- corehr:person.dependent:read
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 4
- corehr:person.dependent:write
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 4
- corehr:person.education:read
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 4
- corehr:person.education:write
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 4
- corehr:person.email:read
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 4
- corehr:person.email:write
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 4
- corehr:person.emergency_contact:read
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 4
- corehr:person.emergency_contact:write
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 4
- corehr:person.entry_leave_time:read
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 4
- corehr:person.entry_leave_time:write
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 4
- corehr:person.gender:read
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 4
- corehr:person.gender:write
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 4
- corehr:person.hukou:read
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 4
- corehr:person.hukou:write
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 4
- corehr:person.is_disabled:read
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 4
- corehr:person.is_disabled:write
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 4
- corehr:person.is_old_alone:read
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 4
- corehr:person.is_old_alone:write
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 4
- corehr:person.legal_name:read
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 4
- corehr:person.legal_name:write
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 4
- corehr:person.marital_status:read
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 4
- corehr:person.marital_status:write
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 4
- corehr:person.martyr_family:read
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 4
- corehr:person.martyr_family:write
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 4
- corehr:person.national_id:read
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 4
- corehr:person.national_id:write
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 4
- corehr:person.nationality:read
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 4
- corehr:person.nationality:write
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 4
- corehr:person.native_region:read
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 4
- corehr:person.native_region:write
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 4
- corehr:person.passport_number:read
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 1
- corehr:person.personal_profile:read
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 4
- corehr:person.personal_profile:write
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 4
- corehr:person.phone:read
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 4
- corehr:person.phone:write
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 4
- corehr:person.political_affiliation:read
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 2
- corehr:person.political_affiliation:write
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 2
- corehr:person.race:read
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 4
- corehr:person.religion:read
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 2
- corehr:person.religion:write
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 2
- corehr:person.resident_tax_custom_field:read
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 4
- corehr:person.resident_tax_custom_field:write
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 4
- corehr:person.resident_tax:read
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 4
- corehr:person.resident_tax:write
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 4
- corehr:person.work_experience:read
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 4
- corehr:person.work_experience:write
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 4
- corehr:position:read
  tokens: tenant_access_token
  requiredBy: 2
  fieldRequiredBy: 0
- corehr:position:write
  tokens: tenant_access_token
  requiredBy: 6
  fieldRequiredBy: 0
- corehr:position.direct_leader:read
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 1
- corehr:position.employee_type:read
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 1
- corehr:position.job_family:read
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 1
- corehr:position.job_grade:read
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 1
- corehr:position.job_level:read
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 1
- corehr:position.job:read
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 1
- corehr:position.working_hours_type:read
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 1
- corehr:pre_hire:complete
  tokens: tenant_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- corehr:pre_hire:delete
  tokens: tenant_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- corehr:pre_hire:read
  tokens: tenant_access_token
  requiredBy: 2
  fieldRequiredBy: 0
- corehr:pre_hire:restore_flow_instance
  tokens: tenant_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- corehr:pre_hire:transform_onboarding_task
  tokens: tenant_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- corehr:pre_hire:transit_tasks
  tokens: tenant_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- corehr:pre_hire:update
  tokens: tenant_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- corehr:pre_hire:withdraw_onboarding
  tokens: tenant_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- corehr:pre_hire:write
  tokens: tenant_access_token
  requiredBy: 5
  fieldRequiredBy: 0
- corehr:probation:read
  tokens: tenant_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- corehr:probation:write
  tokens: tenant_access_token
  requiredBy: 4
  fieldRequiredBy: 0
- corehr:probation.assessment:read
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 2
- corehr:probation.assessment:write
  tokens: tenant_access_token
  requiredBy: 4
  fieldRequiredBy: 2
- corehr:probation.custom_field:read
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 2
- corehr:probation.custom_field:write
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 2
- corehr:probation.notes:read
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 2
- corehr:probation.notes:write
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 2
- corehr:probation.probation_outcome:read
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 1
- corehr:probation.probation_outcome:write
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 1
- corehr:probation.self_review:read
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 2
- corehr:probation.self_review:write
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 2
- corehr:process:read
  tokens: tenant_access_token
  requiredBy: 5
  fieldRequiredBy: 0
- corehr:process.instance:write
  tokens: tenant_access_token
  requiredBy: 7
  fieldRequiredBy: 0
- corehr:security_group:read
  tokens: tenant_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- corehr:signature_file:read
  tokens: tenant_access_token
  requiredBy: 2
  fieldRequiredBy: 0
- corehr:signature_file:terminate
  tokens: tenant_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- corehr:signature_file.pre_hire:read
  tokens: tenant_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- corehr:signature_template:read
  tokens: tenant_access_token
  requiredBy: 2
  fieldRequiredBy: 0
- corehr:signature.file:read
  tokens: tenant_access_token
  requiredBy: 3
  fieldRequiredBy: 0
- corehr:transfer_reason:read
  tokens: tenant_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- corehr:transfer_type:readonly
  tokens: tenant_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- corehr:work_calendar:read
  tokens: tenant_access_token, user_access_token
  requiredBy: 3
  fieldRequiredBy: 0
- corehr:workforce_detail:read
  tokens: tenant_access_token
  requiredBy: 2
  fieldRequiredBy: 0
- corehr:workforce_detail:write
  tokens: tenant_access_token
  requiredBy: 2
  fieldRequiredBy: 0
- corehr:workforce_plan_centralized_reporting_project_detail:write
  tokens: tenant_access_token
  requiredBy: 2
  fieldRequiredBy: 0
- corehr:workforce_plan:read
  tokens: tenant_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- directory:department:list
  tokens: tenant_access_token, user_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- directory:department:read
  tokens: tenant_access_token, user_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- directory:department:search
  tokens: tenant_access_token, user_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- directory:department:write
  tokens: tenant_access_token, user_access_token
  requiredBy: 3
  fieldRequiredBy: 0
- directory:department.base:read
  tokens: tenant_access_token, user_access_token
  requiredBy: 0
  fieldRequiredBy: 6
- directory:department.count:read
  tokens: tenant_access_token, user_access_token
  requiredBy: 0
  fieldRequiredBy: 6
- directory:department.create:write
  tokens: tenant_access_token, user_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- directory:department.custom_field:read
  tokens: tenant_access_token, user_access_token
  requiredBy: 0
  fieldRequiredBy: 6
- directory:department.data_source:read
  tokens: tenant_access_token, user_access_token
  requiredBy: 0
  fieldRequiredBy: 6
- directory:department.delete:write
  tokens: tenant_access_token, user_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- directory:department.department_path:read
  tokens: tenant_access_token, user_access_token
  requiredBy: 0
  fieldRequiredBy: 6
- directory:department.external_id:read
  tokens: tenant_access_token, user_access_token
  requiredBy: 0
  fieldRequiredBy: 6
- directory:department.has_child:read
  tokens: tenant_access_token, user_access_token
  requiredBy: 0
  fieldRequiredBy: 6
- directory:department.leader:read
  tokens: tenant_access_token, user_access_token
  requiredBy: 0
  fieldRequiredBy: 6
- directory:department.name:read
  tokens: tenant_access_token, user_access_token
  requiredBy: 0
  fieldRequiredBy: 6
- directory:department.order_weight:read
  tokens: tenant_access_token, user_access_token
  requiredBy: 0
  fieldRequiredBy: 6
- directory:department.organization:read
  tokens: tenant_access_token, user_access_token
  requiredBy: 0
  fieldRequiredBy: 6
- directory:department.parent_id:read
  tokens: tenant_access_token, user_access_token
  requiredBy: 0
  fieldRequiredBy: 6
- directory:department.status:read
  tokens: tenant_access_token, user_access_token
  requiredBy: 0
  fieldRequiredBy: 6
- directory:department.update:write
  tokens: tenant_access_token, user_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- directory:employee:list
  tokens: tenant_access_token, user_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- directory:employee:read
  tokens: tenant_access_token, user_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- directory:employee:search
  tokens: tenant_access_token, user_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- directory:employee:write
  tokens: tenant_access_token, user_access_token
  requiredBy: 4
  fieldRequiredBy: 0
- directory:employee.base.active_status:read
  tokens: tenant_access_token, user_access_token
  requiredBy: 0
  fieldRequiredBy: 3
- directory:employee.base.avatar:read
  tokens: tenant_access_token, user_access_token
  requiredBy: 0
  fieldRequiredBy: 3
- directory:employee.base.background_image:read
  tokens: tenant_access_token, user_access_token
  requiredBy: 0
  fieldRequiredBy: 3
- directory:employee.base.base:read
  tokens: tenant_access_token, user_access_token
  requiredBy: 0
  fieldRequiredBy: 3
- directory:employee.base.custom_field:read
  tokens: tenant_access_token, user_access_token
  requiredBy: 0
  fieldRequiredBy: 3
- directory:employee.base.data_source:read
  tokens: tenant_access_token, user_access_token
  requiredBy: 0
  fieldRequiredBy: 3
- directory:employee.base.department_path:read
  tokens: tenant_access_token, user_access_token
  requiredBy: 0
  fieldRequiredBy: 3
- directory:employee.base.department:read
  tokens: tenant_access_token, user_access_token
  requiredBy: 0
  fieldRequiredBy: 3
- directory:employee.base.dept_order:read
  tokens: tenant_access_token, user_access_token
  requiredBy: 0
  fieldRequiredBy: 3
- directory:employee.base.description:read
  tokens: tenant_access_token, user_access_token
  requiredBy: 0
  fieldRequiredBy: 3
- directory:employee.base.dotted_line_leaders:read
  tokens: tenant_access_token, user_access_token
  requiredBy: 0
  fieldRequiredBy: 3
- directory:employee.base.email:read
  tokens: tenant_access_token, user_access_token
  requiredBy: 0
  fieldRequiredBy: 12
- directory:employee.base.enterprise_email_alias:read
  tokens: tenant_access_token, user_access_token
  requiredBy: 0
  fieldRequiredBy: 3
- directory:employee.base.enterprise_email:read
  tokens: tenant_access_token, user_access_token
  requiredBy: 0
  fieldRequiredBy: 3
- directory:employee.base.gender:read
  tokens: tenant_access_token, user_access_token
  requiredBy: 0
  fieldRequiredBy: 3
- directory:employee.base.geo:read
  tokens: tenant_access_token, user_access_token
  requiredBy: 0
  fieldRequiredBy: 3
- directory:employee.base.is_admin:read
  tokens: tenant_access_token, user_access_token
  requiredBy: 0
  fieldRequiredBy: 3
- directory:employee.base.is_primary_admin:read
  tokens: tenant_access_token, user_access_token
  requiredBy: 0
  fieldRequiredBy: 3
- directory:employee.base.is_resigned:read
  tokens: tenant_access_token, user_access_token
  requiredBy: 0
  fieldRequiredBy: 3
- directory:employee.base.leader_id:read
  tokens: tenant_access_token, user_access_token
  requiredBy: 0
  fieldRequiredBy: 3
- directory:employee.base.leader:read
  tokens: tenant_access_token, user_access_token
  requiredBy: 0
  fieldRequiredBy: 3
- directory:employee.base.mobile:read
  tokens: tenant_access_token, user_access_token
  requiredBy: 0
  fieldRequiredBy: 3
- directory:employee.base.name.another_name:read
  tokens: tenant_access_token, user_access_token
  requiredBy: 0
  fieldRequiredBy: 3
- directory:employee.base.name.name:read
  tokens: tenant_access_token, user_access_token
  requiredBy: 0
  fieldRequiredBy: 3
- directory:employee.base.resign_time:read
  tokens: tenant_access_token, user_access_token
  requiredBy: 0
  fieldRequiredBy: 3
- directory:employee.base.role:read
  tokens: tenant_access_token, user_access_token
  requiredBy: 0
  fieldRequiredBy: 3
- directory:employee.base.status:read
  tokens: tenant_access_token, user_access_token
  requiredBy: 0
  fieldRequiredBy: 3
- directory:employee.base.subscription_ids:read
  tokens: tenant_access_token, user_access_token
  requiredBy: 0
  fieldRequiredBy: 3
- directory:employee.create:write
  tokens: tenant_access_token, user_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- directory:employee.resign:write
  tokens: tenant_access_token, user_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- directory:employee.resurrect:write
  tokens: tenant_access_token, user_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- directory:employee.to_be_resigned:write
  tokens: tenant_access_token, user_access_token
  requiredBy: 2
  fieldRequiredBy: 0
- directory:employee.update:write
  tokens: tenant_access_token, user_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- directory:employee.work.base_work:read
  tokens: tenant_access_token, user_access_token
  requiredBy: 0
  fieldRequiredBy: 3
- directory:employee.work.employment_type:read
  tokens: tenant_access_token, user_access_token
  requiredBy: 0
  fieldRequiredBy: 3
- directory:employee.work.employment:read
  tokens: tenant_access_token, user_access_token
  requiredBy: 0
  fieldRequiredBy: 3
- directory:employee.work.extension_number:read
  tokens: tenant_access_token, user_access_token
  requiredBy: 0
  fieldRequiredBy: 3
- directory:employee.work.job_family:read
  tokens: tenant_access_token, user_access_token
  requiredBy: 0
  fieldRequiredBy: 3
- directory:employee.work.job_level:read
  tokens: tenant_access_token, user_access_token
  requiredBy: 0
  fieldRequiredBy: 3
- directory:employee.work.job_number:read
  tokens: tenant_access_token, user_access_token
  requiredBy: 0
  fieldRequiredBy: 3
- directory:employee.work.job_title:read
  tokens: tenant_access_token, user_access_token
  requiredBy: 0
  fieldRequiredBy: 3
- directory:employee.work.join_date:read
  tokens: tenant_access_token, user_access_token
  requiredBy: 0
  fieldRequiredBy: 3
- directory:employee.work.resign_date:read
  tokens: tenant_access_token, user_access_token
  requiredBy: 0
  fieldRequiredBy: 3
- directory:employee.work.resign_reason:read
  tokens: tenant_access_token, user_access_token
  requiredBy: 0
  fieldRequiredBy: 3
- directory:employee.work.resign_remark:read
  tokens: tenant_access_token, user_access_token
  requiredBy: 0
  fieldRequiredBy: 3
- directory:employee.work.resign_type:read
  tokens: tenant_access_token, user_access_token
  requiredBy: 0
  fieldRequiredBy: 3
- directory:employee.work.staff_status:read
  tokens: tenant_access_token, user_access_token
  requiredBy: 0
  fieldRequiredBy: 3
- directory:employee.work.work_country_or_region:read
  tokens: tenant_access_token, user_access_token
  requiredBy: 0
  fieldRequiredBy: 3
- directory:employee.work.work_place:read
  tokens: tenant_access_token, user_access_token
  requiredBy: 0
  fieldRequiredBy: 3
- directory:employee.work.work_station:read
  tokens: tenant_access_token, user_access_token
  requiredBy: 0
  fieldRequiredBy: 3
- directory:job_family.base:read
  tokens: tenant_access_token, user_access_token
  requiredBy: 0
  fieldRequiredBy: 3
- directory:job_family.path:read
  tokens: tenant_access_token, user_access_token
  requiredBy: 0
  fieldRequiredBy: 3
- directory:job_family.status:read
  tokens: tenant_access_token, user_access_token
  requiredBy: 0
  fieldRequiredBy: 3
- directory:job_level.base:read
  tokens: tenant_access_token, user_access_token
  requiredBy: 0
  fieldRequiredBy: 3
- directory:job_level.order:read
  tokens: tenant_access_token, user_access_token
  requiredBy: 0
  fieldRequiredBy: 3
- directory:job_level.status:read
  tokens: tenant_access_token, user_access_token
  requiredBy: 0
  fieldRequiredBy: 3
- directory:job_title.base:read
  tokens: tenant_access_token, user_access_token
  requiredBy: 0
  fieldRequiredBy: 3
- directory:job_title.status:read
  tokens: tenant_access_token, user_access_token
  requiredBy: 0
  fieldRequiredBy: 3
- directory:place.base:read
  tokens: tenant_access_token, user_access_token
  requiredBy: 0
  fieldRequiredBy: 3
- directory:place.status:read
  tokens: tenant_access_token, user_access_token
  requiredBy: 0
  fieldRequiredBy: 3
- docs:doc
  tokens: tenant_access_token, user_access_token
  requiredBy: 17
  fieldRequiredBy: 0
- docs:doc:readonly
  tokens: tenant_access_token, user_access_token
  requiredBy: 2
  fieldRequiredBy: 0
- docs:document:copy
  tokens: tenant_access_token, user_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- docs:document:export
  tokens: tenant_access_token, user_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- docs:document:import
  tokens: tenant_access_token, user_access_token
  requiredBy: 2
  fieldRequiredBy: 0
- docs:document.content:read
  tokens: tenant_access_token, user_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- docs:document.media:download
  tokens: tenant_access_token, user_access_token
  requiredBy: 2
  fieldRequiredBy: 0
- docs:document.media:upload
  tokens: tenant_access_token, user_access_token
  requiredBy: 4
  fieldRequiredBy: 0
- docs:document.subscription
  tokens: user_access_token
  requiredBy: 2
  fieldRequiredBy: 0
- docs:document.subscription:read
  tokens: user_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- docs:event:subscribe
  tokens: tenant_access_token, user_access_token
  requiredBy: 3
  fieldRequiredBy: 0
- docs:permission.member
  tokens: tenant_access_token, user_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- docs:permission.member:auth
  tokens: tenant_access_token, user_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- docs:permission.member:create
  tokens: tenant_access_token, user_access_token
  requiredBy: 2
  fieldRequiredBy: 0
- docs:permission.member:delete
  tokens: tenant_access_token, user_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- docs:permission.member:retrieve
  tokens: tenant_access_token, user_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- docs:permission.member:transfer
  tokens: tenant_access_token, user_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- docs:permission.member:update
  tokens: tenant_access_token, user_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- docs:permission.setting:read
  tokens: tenant_access_token, user_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- docs:permission.setting:write_only
  tokens: tenant_access_token, user_access_token
  requiredBy: 4
  fieldRequiredBy: 0
- document_ai:bank_card:recognize
  tokens: tenant_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- document_ai:business_card:recognize
  tokens: tenant_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- document_ai:business_license:recognize
  tokens: tenant_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- document_ai:chinese_passport:recognize
  tokens: tenant_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- document_ai:contract:field_extract
  tokens: tenant_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- document_ai:driving_license:recognize
  tokens: tenant_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- document_ai:food_manage_license:recognize
  tokens: tenant_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- document_ai:food_produce_license:recoginze
  tokens: tenant_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- document_ai:health_certificate:recognize
  tokens: tenant_access_token, user_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- document_ai:hkm_mainland_travel_permit:recognize
  tokens: tenant_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- document_ai:id_card:recognize
  tokens: tenant_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- document_ai:resume:recognize
  tokens: tenant_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- document_ai:taxi_invoice:recognize
  tokens: tenant_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- document_ai:train_invoice:recognize
  tokens: tenant_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- document_ai:tw_mainland_travel_permit:recognize
  tokens: tenant_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- document_ai:vat_invoice:recognize
  tokens: tenant_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- document_ai:vehicle_invoice:recognize
  tokens: tenant_access_token, user_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- document_ai:vehicle_license:recognize
  tokens: tenant_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- docx:document
  tokens: tenant_access_token, user_access_token
  requiredBy: 10
  fieldRequiredBy: 0
- docx:document:create
  tokens: tenant_access_token, user_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- docx:document:readonly
  tokens: tenant_access_token, user_access_token
  requiredBy: 2
  fieldRequiredBy: 0
- docx:document:write_only
  tokens: tenant_access_token, user_access_token
  requiredBy: 5
  fieldRequiredBy: 0
- docx:document.block:convert
  tokens: tenant_access_token, user_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- drive:drive
  tokens: tenant_access_token, user_access_token
  requiredBy: 63
  fieldRequiredBy: 0
- drive:drive:readonly
  tokens: tenant_access_token, user_access_token
  requiredBy: 22
  fieldRequiredBy: 0
- drive:drive:version
  tokens: tenant_access_token, user_access_token
  requiredBy: 4
  fieldRequiredBy: 0
- drive:drive:version:readonly
  tokens: tenant_access_token, user_access_token
  requiredBy: 2
  fieldRequiredBy: 0
- drive:drive.metadata:readonly
  tokens: tenant_access_token, user_access_token
  requiredBy: 3
  fieldRequiredBy: 0
- drive:export:readonly
  tokens: tenant_access_token, user_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- drive:file
  tokens: tenant_access_token, user_access_token
  requiredBy: 10
  fieldRequiredBy: 0
- drive:file:download
  tokens: tenant_access_token, user_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- drive:file:readonly
  tokens: tenant_access_token, user_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- drive:file:upload
  tokens: tenant_access_token, user_access_token
  requiredBy: 4
  fieldRequiredBy: 0
- drive:file:view_record:readonly
  tokens: tenant_access_token, user_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- drive:file.like:readonly
  tokens: tenant_access_token, user_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- drive:file.meta.sec_label.read_only
  tokens: tenant_access_token, user_access_token
  requiredBy: 0
  fieldRequiredBy: 1
- ehr:attachment:readonly
  tokens: tenant_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- ehr:employee:readonly
  tokens: tenant_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- event:ip_list
  tokens: tenant_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- helpdesk:all
  tokens: tenant_access_token, user_access_token
  requiredBy: 26
  fieldRequiredBy: 0
- helpdesk:all:readonly
  tokens: tenant_access_token, user_access_token
  requiredBy: 23
  fieldRequiredBy: 0
- helpdesk:helpdesk:access
  tokens: tenant_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- hire:advertisement
  tokens: tenant_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- hire:agency
  tokens: tenant_access_token
  requiredBy: 5
  fieldRequiredBy: 1
- hire:agency_account
  tokens: tenant_access_token
  requiredBy: 2
  fieldRequiredBy: 0
- hire:agency_account:readonly
  tokens: tenant_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- hire:agency_salary:readonly
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 1
- hire:agency:readonly
  tokens: tenant_access_token
  requiredBy: 4
  fieldRequiredBy: 1
- hire:agency.email:readonly
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 2
- hire:agency.mobile:readonly
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 1
- hire:application
  tokens: tenant_access_token
  requiredBy: 11
  fieldRequiredBy: 0
- hire:application:readonly
  tokens: tenant_access_token
  requiredBy: 5
  fieldRequiredBy: 0
- hire:attachment
  tokens: tenant_access_token
  requiredBy: 2
  fieldRequiredBy: 0
- hire:attachment:readonly
  tokens: tenant_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- hire:auth
  tokens: tenant_access_token
  requiredBy: 3
  fieldRequiredBy: 0
- hire:auth:readonly
  tokens: tenant_access_token
  requiredBy: 3
  fieldRequiredBy: 0
- hire:background_check_order
  tokens: tenant_access_token
  requiredBy: 14
  fieldRequiredBy: 0
- hire:background_check_order:readonly
  tokens: tenant_access_token
  requiredBy: 2
  fieldRequiredBy: 0
- hire:ehr_import
  tokens: tenant_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- hire:employee
  tokens: tenant_access_token
  requiredBy: 1
  fieldRequiredBy: 1
- hire:employee:readonly
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 1
- hire:employee.email:readonly
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 2
- hire:employee.mobile:readonly
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 2
- hire:evaluation:readonly
  tokens: tenant_access_token
  requiredBy: 2
  fieldRequiredBy: 1
- hire:exam
  tokens: tenant_access_token
  requiredBy: 10
  fieldRequiredBy: 0
- hire:exam:readonly
  tokens: tenant_access_token
  requiredBy: 4
  fieldRequiredBy: 0
- hire:external_application
  tokens: tenant_access_token
  requiredBy: 14
  fieldRequiredBy: 0
- hire:external_application:readonly
  tokens: tenant_access_token
  requiredBy: 2
  fieldRequiredBy: 0
- hire:external_offer
  tokens: tenant_access_token
  requiredBy: 4
  fieldRequiredBy: 0
- hire:external_offer:readonly
  tokens: tenant_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- hire:external_referral_reward
  tokens: tenant_access_token
  requiredBy: 2
  fieldRequiredBy: 0
- hire:interview
  tokens: tenant_access_token, user_access_token
  requiredBy: 10
  fieldRequiredBy: 1
- hire:interview:readonly
  tokens: tenant_access_token, user_access_token
  requiredBy: 11
  fieldRequiredBy: 1
- hire:interviewer
  tokens: tenant_access_token
  requiredBy: 2
  fieldRequiredBy: 0
- hire:interviewer:readonly
  tokens: tenant_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- hire:job
  tokens: tenant_access_token
  requiredBy: 7
  fieldRequiredBy: 1
- hire:job_process:readonly
  tokens: tenant_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- hire:job_requirement
  tokens: tenant_access_token
  requiredBy: 6
  fieldRequiredBy: 0
- hire:job_requirement:readonly
  tokens: tenant_access_token
  requiredBy: 3
  fieldRequiredBy: 0
- hire:job:readonly
  tokens: tenant_access_token
  requiredBy: 9
  fieldRequiredBy: 1
- hire:job.composite_info:readonly
  tokens: tenant_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- hire:location:readonly
  tokens: tenant_access_token
  requiredBy: 2
  fieldRequiredBy: 0
- hire:note
  tokens: tenant_access_token
  requiredBy: 5
  fieldRequiredBy: 1
- hire:note:readonly
  tokens: tenant_access_token
  requiredBy: 2
  fieldRequiredBy: 1
- hire:offer
  tokens: tenant_access_token
  requiredBy: 6
  fieldRequiredBy: 2
- hire:offer_salary:readonly
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 1
- hire:offer_schema:readonly
  tokens: tenant_access_token
  requiredBy: 2
  fieldRequiredBy: 0
- hire:offer_selection_object
  tokens: tenant_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- hire:offer:low_sensitive_info:readonly
  tokens: tenant_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- hire:offer:readonly
  tokens: tenant_access_token
  requiredBy: 2
  fieldRequiredBy: 2
- hire:questionnaire
  tokens: tenant_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- hire:questionnaire:readonly
  tokens: tenant_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- hire:referral
  tokens: tenant_access_token
  requiredBy: 2
  fieldRequiredBy: 1
- hire:referral_account
  tokens: tenant_access_token
  requiredBy: 6
  fieldRequiredBy: 0
- hire:referral_account:readonly
  tokens: tenant_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- hire:referral_website:readonly
  tokens: tenant_access_token
  requiredBy: 2
  fieldRequiredBy: 0
- hire:referral:readonly
  tokens: tenant_access_token
  requiredBy: 2
  fieldRequiredBy: 1
- hire:site
  tokens: tenant_access_token, user_access_token
  requiredBy: 7
  fieldRequiredBy: 1
- hire:site_application
  tokens: tenant_access_token
  requiredBy: 3
  fieldRequiredBy: 0
- hire:site_application:readonly
  tokens: tenant_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- hire:site_job_post:readonly
  tokens: tenant_access_token
  requiredBy: 3
  fieldRequiredBy: 0
- hire:site:readonly
  tokens: tenant_access_token, user_access_token
  requiredBy: 3
  fieldRequiredBy: 1
- hire:subject:readonly
  tokens: tenant_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- hire:talent
  tokens: tenant_access_token
  requiredBy: 16
  fieldRequiredBy: 1
- hire:talent_blocklist
  tokens: tenant_access_token
  requiredBy: 1
  fieldRequiredBy: 1
- hire:talent_blocklist:readonly
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 1
- hire:talent_folder
  tokens: tenant_access_token
  requiredBy: 4
  fieldRequiredBy: 1
- hire:talent_folder_association
  tokens: tenant_access_token
  requiredBy: 2
  fieldRequiredBy: 0
- hire:talent_folder:readonly
  tokens: tenant_access_token
  requiredBy: 2
  fieldRequiredBy: 1
- hire:talent_onboard_status:readonly
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 1
- hire:talent_tag
  tokens: tenant_access_token
  requiredBy: 1
  fieldRequiredBy: 1
- hire:talent_tag:readonly
  tokens: tenant_access_token
  requiredBy: 1
  fieldRequiredBy: 1
- hire:talent:readonly
  tokens: tenant_access_token
  requiredBy: 9
  fieldRequiredBy: 1
- hire:talent.email:readonly
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 1
- hire:talent.mobile:readonly
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 1
- hire:todo:readonly
  tokens: user_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- hire:tripartite_agreement
  tokens: tenant_access_token
  requiredBy: 4
  fieldRequiredBy: 0
- hire:tripartite_agreement:readonly
  tokens: tenant_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- human_authentication:identity
  tokens: tenant_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- im:app_feed_card:write
  tokens: tenant_access_token
  requiredBy: 4
  fieldRequiredBy: 0
- im:biz_entity_tag_relation:read
  tokens: tenant_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- im:biz_entity_tag_relation:write
  tokens: tenant_access_token
  requiredBy: 2
  fieldRequiredBy: 0
- im:chat
  tokens: tenant_access_token, user_access_token
  requiredBy: 26
  fieldRequiredBy: 0
- im:chat:create
  tokens: tenant_access_token, user_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- im:chat:create_by_user
  tokens: tenant_access_token, user_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- im:chat:delete
  tokens: tenant_access_token, user_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- im:chat:moderation:write_only
  tokens: tenant_access_token, user_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- im:chat:read
  tokens: tenant_access_token, user_access_token
  requiredBy: 2
  fieldRequiredBy: 0
- im:chat:readonly
  tokens: tenant_access_token, user_access_token
  requiredBy: 6
  fieldRequiredBy: 0
- im:chat:update
  tokens: tenant_access_token, user_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- im:chat.announcement:read
  tokens: tenant_access_token, user_access_token
  requiredBy: 2
  fieldRequiredBy: 0
- im:chat.announcement:write_only
  tokens: tenant_access_token, user_access_token
  requiredBy: 4
  fieldRequiredBy: 0
- im:chat.managers:write_only
  tokens: tenant_access_token, user_access_token
  requiredBy: 2
  fieldRequiredBy: 0
- im:chat.members:write_only
  tokens: tenant_access_token, user_access_token
  requiredBy: 3
  fieldRequiredBy: 0
- im:chat.menu_tree:read
  tokens: tenant_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- im:chat.menu_tree:write_only
  tokens: tenant_access_token
  requiredBy: 4
  fieldRequiredBy: 0
- im:chat.moderation:read
  tokens: tenant_access_token, user_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- im:chat.tabs:read
  tokens: tenant_access_token, user_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- im:chat.tabs:write_only
  tokens: tenant_access_token, user_access_token
  requiredBy: 4
  fieldRequiredBy: 0
- im:chat.top_notice:write_only
  tokens: tenant_access_token, user_access_token
  requiredBy: 2
  fieldRequiredBy: 0
- im:datasync.feed_card.time_sensitive:write
  tokens: tenant_access_token
  requiredBy: 2
  fieldRequiredBy: 0
- im:message
  tokens: tenant_access_token, user_access_token
  requiredBy: 18
  fieldRequiredBy: 0
- im:message:basic
  tokens: tenant_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- im:message:readonly
  tokens: tenant_access_token, user_access_token
  requiredBy: 6
  fieldRequiredBy: 0
- im:message:recall
  tokens: tenant_access_token, user_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- im:message:send
  tokens: tenant_access_token
  requiredBy: 2
  fieldRequiredBy: 0
- im:message:send_as_bot
  tokens: tenant_access_token, user_access_token
  requiredBy: 11
  fieldRequiredBy: 0
- im:message:send_multi_depts
  tokens: tenant_access_token
  requiredBy: 3
  fieldRequiredBy: 0
- im:message:send_multi_users
  tokens: tenant_access_token
  requiredBy: 3
  fieldRequiredBy: 0
- im:message:update
  tokens: tenant_access_token, user_access_token
  requiredBy: 2
  fieldRequiredBy: 0
- im:message.history:readonly
  tokens: tenant_access_token, user_access_token
  requiredBy: 2
  fieldRequiredBy: 0
- im:message.pins:read
  tokens: tenant_access_token, user_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- im:message.pins:write_only
  tokens: tenant_access_token, user_access_token
  requiredBy: 2
  fieldRequiredBy: 0
- im:message.reactions:read
  tokens: tenant_access_token, user_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- im:message.reactions:write_only
  tokens: tenant_access_token, user_access_token
  requiredBy: 2
  fieldRequiredBy: 0
- im:resource
  tokens: tenant_access_token
  requiredBy: 2
  fieldRequiredBy: 0
- im:resource:upload
  tokens: tenant_access_token
  requiredBy: 2
  fieldRequiredBy: 0
- im:tag:read
  tokens: tenant_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- im:tag:write
  tokens: tenant_access_token
  requiredBy: 2
  fieldRequiredBy: 0
- im:url_preview.update
  tokens: tenant_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- mail:event
  tokens: user_access_token
  requiredBy: 3
  fieldRequiredBy: 0
- mail:mailgroup
  tokens: tenant_access_token
  requiredBy: 24
  fieldRequiredBy: 0
- mail:mailgroup:readonly
  tokens: tenant_access_token
  requiredBy: 8
  fieldRequiredBy: 0
- mail:public_mailbox
  tokens: tenant_access_token, user_access_token
  requiredBy: 17
  fieldRequiredBy: 0
- mail:public_mailbox:readonly
  tokens: tenant_access_token, user_access_token
  requiredBy: 5
  fieldRequiredBy: 0
- mail:public_mailbox.public_mailbox_geo
  tokens: tenant_access_token, user_access_token
  requiredBy: 0
  fieldRequiredBy: 3
- mail:user_mailbox
  tokens: tenant_access_token
  requiredBy: 5
  fieldRequiredBy: 0
- mail:user_mailbox:readonly
  tokens: tenant_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- mail:user_mailbox.folder:read
  tokens: tenant_access_token, user_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- mail:user_mailbox.folder:write
  tokens: tenant_access_token, user_access_token
  requiredBy: 4
  fieldRequiredBy: 0
- mail:user_mailbox.mail_contact:read
  tokens: tenant_access_token, user_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- mail:user_mailbox.mail_contact:write
  tokens: tenant_access_token, user_access_token
  requiredBy: 4
  fieldRequiredBy: 0
- mail:user_mailbox.mail_contact.mail_address:read
  tokens: tenant_access_token, user_access_token
  requiredBy: 0
  fieldRequiredBy: 2
- mail:user_mailbox.mail_contact.phone:read
  tokens: tenant_access_token, user_access_token
  requiredBy: 0
  fieldRequiredBy: 2
- mail:user_mailbox.message:readonly
  tokens: tenant_access_token, user_access_token
  requiredBy: 3
  fieldRequiredBy: 0
- mail:user_mailbox.message:send
  tokens: user_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- mail:user_mailbox.message.address:read
  tokens: tenant_access_token, user_access_token
  requiredBy: 0
  fieldRequiredBy: 1
- mail:user_mailbox.message.body:read
  tokens: tenant_access_token, user_access_token
  requiredBy: 1
  fieldRequiredBy: 1
- mail:user_mailbox.message.subject:read
  tokens: tenant_access_token, user_access_token
  requiredBy: 0
  fieldRequiredBy: 1
- mail:user_mailbox.rule:read
  tokens: tenant_access_token, user_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- mail:user_mailbox.rule:write
  tokens: tenant_access_token, user_access_token
  requiredBy: 5
  fieldRequiredBy: 0
- mdm:country_region:read
  tokens: tenant_access_token
  requiredBy: 2
  fieldRequiredBy: 0
- mdm:user_auth
  tokens: tenant_access_token
  requiredBy: 2
  fieldRequiredBy: 0
- minutes:minute:download
  tokens: tenant_access_token, user_access_token
  requiredBy: 2
  fieldRequiredBy: 0
- minutes:minutes
  tokens: tenant_access_token, user_access_token
  requiredBy: 2
  fieldRequiredBy: 0
- minutes:minutes:readonly
  tokens: tenant_access_token, user_access_token
  requiredBy: 2
  fieldRequiredBy: 0
- minutes:minutes.artifacts:read
  tokens: tenant_access_token, user_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- minutes:minutes.basic:read
  tokens: tenant_access_token, user_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- minutes:minutes.media:export
  tokens: tenant_access_token, user_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- minutes:minutes.statistics:read
  tokens: tenant_access_token, user_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- minutes:minutes.transcript:export
  tokens: tenant_access_token, user_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- moments:moments
  tokens: tenant_access_token, user_access_token
  requiredBy: 6
  fieldRequiredBy: 0
- moments:moments:access_all
  tokens: tenant_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- moments:moments:readonly
  tokens: tenant_access_token, user_access_token
  requiredBy: 3
  fieldRequiredBy: 0
- myai:myai
  tokens: tenant_access_token, user_access_token
  requiredBy: 0
  fieldRequiredBy: 1
- okr:okr
  tokens: tenant_access_token, user_access_token
  requiredBy: 12
  fieldRequiredBy: 0
- okr:okr:readonly
  tokens: tenant_access_token, user_access_token
  requiredBy: 6
  fieldRequiredBy: 0
- okr:okr.content:readonly
  tokens: tenant_access_token, user_access_token
  requiredBy: 2
  fieldRequiredBy: 0
- okr:okr.period:readonly
  tokens: tenant_access_token
  requiredBy: 2
  fieldRequiredBy: 0
- okr:okr.period:writeonly
  tokens: tenant_access_token
  requiredBy: 2
  fieldRequiredBy: 0
- okr:okr.progress:delete
  tokens: tenant_access_token, user_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- okr:okr.progress:readonly
  tokens: tenant_access_token, user_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- okr:okr.progress:writeonly
  tokens: tenant_access_token, user_access_token
  requiredBy: 2
  fieldRequiredBy: 0
- okr:okr.progress.file:upload
  tokens: tenant_access_token, user_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- okr:okr.review:readonly
  tokens: tenant_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- optical_char_recognition:image
  tokens: tenant_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- passport:session_mask:readonly
  tokens: tenant_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- passport:session:logout
  tokens: tenant_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- payroll:cost_allocation_details:read
  tokens: tenant_access_token, user_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- payroll:cost_allocation_plan:read
  tokens: tenant_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- payroll:cost_allocation_report:read
  tokens: tenant_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- payroll:external_datasource_configuration:read
  tokens: tenant_access_token, user_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- payroll:external_datasource_record:read
  tokens: tenant_access_token, user_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- payroll:external_datasource_record:write
  tokens: tenant_access_token, user_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- payroll:pay_groups:read
  tokens: tenant_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- payroll:payment_activity_details:read
  tokens: tenant_access_token, user_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- payroll:payment_activity:archive
  tokens: tenant_access_token, user_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- payroll:payment_activity:read
  tokens: tenant_access_token, user_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- payroll:payment_details:read
  tokens: tenant_access_token, user_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- payroll:payroll_calculation_item:read
  tokens: tenant_access_token, user_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- performance:metric_lib:read
  tokens: tenant_access_token
  requiredBy: 4
  fieldRequiredBy: 0
- performance:metric:read
  tokens: tenant_access_token
  requiredBy: 5
  fieldRequiredBy: 0
- performance:metric:write
  tokens: tenant_access_token
  requiredBy: 6
  fieldRequiredBy: 0
- performance:performance
  tokens: tenant_access_token, user_access_token
  requiredBy: 14
  fieldRequiredBy: 0
- performance:performance:readonly
  tokens: tenant_access_token, user_access_token
  requiredBy: 12
  fieldRequiredBy: 0
- performance:review_template:read
  tokens: tenant_access_token
  requiredBy: 3
  fieldRequiredBy: 0
- performance:semester_activity:read
  tokens: tenant_access_token
  requiredBy: 2
  fieldRequiredBy: 0
- performance:semester_activity:write
  tokens: tenant_access_token
  requiredBy: 4
  fieldRequiredBy: 0
- performance:semester_user:read
  tokens: tenant_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- performance:semester:read
  tokens: tenant_access_token, user_access_token
  requiredBy: 3
  fieldRequiredBy: 0
- performance:user_snapshot.department:read
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 1
- performance:user_snapshot.direct_leader:read
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 1
- performance:user_snapshot.job_family:read
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 1
- performance:user_snapshot.job_level:read
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 1
- personal_settings:status:system_status_operate
  tokens: tenant_access_token
  requiredBy: 2
  fieldRequiredBy: 0
- personal_settings:status:system_status_update
  tokens: tenant_access_token
  requiredBy: 4
  fieldRequiredBy: 0
- report:report
  tokens: tenant_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- report:rule:readonly
  tokens: tenant_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- report:task:readonly
  tokens: tenant_access_token, user_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- search:app
  tokens: user_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- search:data_item:create
  tokens: tenant_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- search:data_item:delete
  tokens: tenant_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- search:data_item:readonly
  tokens: tenant_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- search:data_schemas:create
  tokens: tenant_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- search:data_schemas:delete
  tokens: tenant_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- search:data_schemas:readonly
  tokens: tenant_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- search:data_schemas:update
  tokens: tenant_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- search:data_source
  tokens: tenant_access_token
  requiredBy: 12
  fieldRequiredBy: 0
- search:data_source:create
  tokens: tenant_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- search:data_source:delete
  tokens: tenant_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- search:data_source:readonly
  tokens: tenant_access_token
  requiredBy: 7
  fieldRequiredBy: 0
- search:data_source:update
  tokens: tenant_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- search:department:read
  tokens: user_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- search:docs:read
  tokens: user_access_token
  requiredBy: 2
  fieldRequiredBy: 0
- search:message
  tokens: user_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- security_and_compliance:audit_log.openapi_log:readonly
  tokens: tenant_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- security_and_compliance:device_apply_record:write
  tokens: tenant_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- security_and_compliance:device_record:read
  tokens: tenant_access_token, user_access_token
  requiredBy: 3
  fieldRequiredBy: 0
- security_and_compliance:device_record:write
  tokens: tenant_access_token
  requiredBy: 3
  fieldRequiredBy: 0
- security_and_compliance:multi_geo_entity.tenant:readonly
  tokens: tenant_access_token, user_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- security_and_compliance:user_migration
  tokens: tenant_access_token, user_access_token
  requiredBy: 4
  fieldRequiredBy: 0
- security_and_compliance:user_migration:multi-geo
  tokens: tenant_access_token, user_access_token
  requiredBy: 5
  fieldRequiredBy: 0
- security_and_compliance:user_migration:readonly
  tokens: tenant_access_token, user_access_token
  requiredBy: 2
  fieldRequiredBy: 0
- sheets:spreadsheet
  tokens: tenant_access_token, user_access_token
  requiredBy: 44
  fieldRequiredBy: 0
- sheets:spreadsheet:create
  tokens: tenant_access_token, user_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- sheets:spreadsheet:read
  tokens: tenant_access_token, user_access_token
  requiredBy: 10
  fieldRequiredBy: 0
- sheets:spreadsheet:readonly
  tokens: tenant_access_token, user_access_token
  requiredBy: 13
  fieldRequiredBy: 0
- sheets:spreadsheet:write_only
  tokens: tenant_access_token, user_access_token
  requiredBy: 14
  fieldRequiredBy: 0
- sheets:spreadsheet.meta:read
  tokens: tenant_access_token, user_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- sheets:spreadsheet.meta:write_only
  tokens: tenant_access_token, user_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- space:document:delete
  tokens: tenant_access_token, user_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- space:document:move
  tokens: tenant_access_token, user_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- space:document:retrieve
  tokens: tenant_access_token, user_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- space:document:shortcut
  tokens: tenant_access_token, user_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- space:folder:create
  tokens: tenant_access_token, user_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- spark:app.sql_commands:write
  tokens: user_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- spark:app.table:read
  tokens: user_access_token
  requiredBy: 4
  fieldRequiredBy: 0
- spark:app.table:write
  tokens: user_access_token
  requiredBy: 4
  fieldRequiredBy: 0
- spark:app.table.record:read
  tokens: user_access_token
  requiredBy: 2
  fieldRequiredBy: 0
- spark:app.table.record:write
  tokens: user_access_token
  requiredBy: 6
  fieldRequiredBy: 0
- spark:directory.user.id_convert:read
  tokens: tenant_access_token, user_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- speech_to_text:speech
  tokens: tenant_access_token
  requiredBy: 2
  fieldRequiredBy: 0
- task:attachment:delete
  tokens: tenant_access_token, user_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- task:attachment:file:download
  tokens: tenant_access_token, user_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- task:attachment:read
  tokens: tenant_access_token, user_access_token
  requiredBy: 2
  fieldRequiredBy: 0
- task:attachment:upload
  tokens: tenant_access_token, user_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- task:attachment:write
  tokens: tenant_access_token, user_access_token
  requiredBy: 4
  fieldRequiredBy: 0
- task:comment:delete
  tokens: tenant_access_token, user_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- task:comment:read
  tokens: tenant_access_token, user_access_token
  requiredBy: 2
  fieldRequiredBy: 0
- task:comment:write
  tokens: tenant_access_token, user_access_token
  requiredBy: 5
  fieldRequiredBy: 0
- task:comment:writeonly
  tokens: tenant_access_token, user_access_token
  requiredBy: 2
  fieldRequiredBy: 0
- task:custom_field:read
  tokens: tenant_access_token, user_access_token
  requiredBy: 2
  fieldRequiredBy: 0
- task:custom_field:write
  tokens: tenant_access_token, user_access_token
  requiredBy: 6
  fieldRequiredBy: 0
- task:custom_field:writeonly
  tokens: tenant_access_token, user_access_token
  requiredBy: 6
  fieldRequiredBy: 0
- task:personnel:read
  tokens: tenant_access_token, user_access_token
  requiredBy: 2
  fieldRequiredBy: 0
- task:personnel:writeonly
  tokens: tenant_access_token, user_access_token
  requiredBy: 4
  fieldRequiredBy: 0
- task:section:delete
  tokens: tenant_access_token, user_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- task:section:read
  tokens: tenant_access_token, user_access_token
  requiredBy: 3
  fieldRequiredBy: 0
- task:section:write
  tokens: tenant_access_token, user_access_token
  requiredBy: 6
  fieldRequiredBy: 0
- task:section:writeonly
  tokens: tenant_access_token, user_access_token
  requiredBy: 2
  fieldRequiredBy: 0
- task:task
  tokens: tenant_access_token, user_access_token
  requiredBy: 7
  fieldRequiredBy: 0
- task:task:delete
  tokens: tenant_access_token, user_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- task:task:read
  tokens: tenant_access_token, user_access_token
  requiredBy: 6
  fieldRequiredBy: 0
- task:task:readonly
  tokens: tenant_access_token, user_access_token
  requiredBy: 4
  fieldRequiredBy: 0
- task:task:write
  tokens: tenant_access_token, user_access_token
  requiredBy: 16
  fieldRequiredBy: 0
- task:task:writeonly
  tokens: tenant_access_token, user_access_token
  requiredBy: 10
  fieldRequiredBy: 0
- task:tasklist:delete
  tokens: tenant_access_token, user_access_token
  requiredBy: 2
  fieldRequiredBy: 0
- task:tasklist:read
  tokens: tenant_access_token, user_access_token
  requiredBy: 6
  fieldRequiredBy: 0
- task:tasklist:write
  tokens: tenant_access_token, user_access_token
  requiredBy: 15
  fieldRequiredBy: 0
- task:tasklist:writeonly
  tokens: tenant_access_token, user_access_token
  requiredBy: 6
  fieldRequiredBy: 0
- tenant:tenant:readonly
  tokens: tenant_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- tenant:tenant.domain:read
  tokens: tenant_access_token
  requiredBy: 0
  fieldRequiredBy: 1
- tenant:tenant.product_assign_info:read
  tokens: tenant_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- translation:text
  tokens: tenant_access_token
  requiredBy: 2
  fieldRequiredBy: 0
- trust_party:collaboration_rule:read
  tokens: tenant_access_token, user_access_token
  requiredBy: 3
  fieldRequiredBy: 0
- trust_party:collaboration_rule:write
  tokens: tenant_access_token, user_access_token
  requiredBy: 3
  fieldRequiredBy: 0
- trust_party:collaboration.tenant:readonly
  tokens: tenant_access_token, user_access_token
  requiredBy: 5
  fieldRequiredBy: 0
- vc:alert:readonly
  tokens: tenant_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- vc:export
  tokens: tenant_access_token, user_access_token
  requiredBy: 6
  fieldRequiredBy: 0
- vc:material
  tokens: tenant_access_token, user_access_token
  requiredBy: 6
  fieldRequiredBy: 0
- vc:material:readonly
  tokens: tenant_access_token, user_access_token
  requiredBy: 2
  fieldRequiredBy: 0
- vc:meeting
  tokens: tenant_access_token, user_access_token
  requiredBy: 4
  fieldRequiredBy: 0
- vc:meeting:export
  tokens: tenant_access_token, user_access_token
  requiredBy: 6
  fieldRequiredBy: 0
- vc:meeting:readonly
  tokens: tenant_access_token, user_access_token
  requiredBy: 2
  fieldRequiredBy: 0
- vc:meeting.artifact.note:read
  tokens: tenant_access_token, user_access_token
  requiredBy: 0
  fieldRequiredBy: 1
- vc:meeting.artifact.verbatim:read
  tokens: tenant_access_token, user_access_token
  requiredBy: 0
  fieldRequiredBy: 1
- vc:meeting.meetingevent:read
  tokens: tenant_access_token, user_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- vc:meeting.meetingid:read
  tokens: tenant_access_token, user_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- vc:meeting.participant:write
  tokens: tenant_access_token, user_access_token
  requiredBy: 3
  fieldRequiredBy: 0
- vc:meeting.search:read
  tokens: user_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- vc:note:read
  tokens: user_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- vc:record
  tokens: user_access_token
  requiredBy: 3
  fieldRequiredBy: 0
- vc:record:readonly
  tokens: tenant_access_token, user_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- vc:report:readonly
  tokens: tenant_access_token
  requiredBy: 2
  fieldRequiredBy: 0
- vc:reserve
  tokens: tenant_access_token, user_access_token
  requiredBy: 3
  fieldRequiredBy: 0
- vc:reserve:readonly
  tokens: tenant_access_token, user_access_token
  requiredBy: 2
  fieldRequiredBy: 0
- vc:room
  tokens: tenant_access_token, user_access_token
  requiredBy: 27
  fieldRequiredBy: 0
- vc:room:readonly
  tokens: tenant_access_token, user_access_token
  requiredBy: 18
  fieldRequiredBy: 0
- vc:rooms.room:create
  tokens: tenant_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- vc:rooms.room:delete
  tokens: tenant_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- vc:rooms.room:update
  tokens: tenant_access_token
  requiredBy: 6
  fieldRequiredBy: 0
- vc:rooms.room.basicinfo:read
  tokens: tenant_access_token, user_access_token
  requiredBy: 9
  fieldRequiredBy: 0
- vc:rooms.room.detailinfo:read
  tokens: tenant_access_token, user_access_token
  requiredBy: 4
  fieldRequiredBy: 0
- vc:rooms.roomlevel:create
  tokens: tenant_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- vc:rooms.roomlevel:delete
  tokens: tenant_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- vc:rooms.roomlevel:read
  tokens: tenant_access_token
  requiredBy: 4
  fieldRequiredBy: 0
- vc:rooms.roomlevel:update
  tokens: tenant_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- verification:verification_information:readonly
  tokens: tenant_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- wiki:member:create
  tokens: tenant_access_token, user_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- wiki:member:retrieve
  tokens: tenant_access_token, user_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- wiki:member:update
  tokens: tenant_access_token, user_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- wiki:node:copy
  tokens: tenant_access_token, user_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- wiki:node:create
  tokens: tenant_access_token, user_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- wiki:node:move
  tokens: tenant_access_token, user_access_token
  requiredBy: 2
  fieldRequiredBy: 0
- wiki:node:read
  tokens: tenant_access_token, user_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- wiki:node:retrieve
  tokens: tenant_access_token, user_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- wiki:node:update
  tokens: tenant_access_token, user_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- wiki:setting:write_only
  tokens: tenant_access_token, user_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- wiki:space:read
  tokens: tenant_access_token, user_access_token
  requiredBy: 2
  fieldRequiredBy: 0
- wiki:space:retrieve
  tokens: tenant_access_token, user_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- wiki:space:write_only
  tokens: user_access_token
  requiredBy: 1
  fieldRequiredBy: 0
- wiki:wiki
  tokens: tenant_access_token, user_access_token
  requiredBy: 27
  fieldRequiredBy: 0
- wiki:wiki:readonly
  tokens: tenant_access_token, user_access_token
  requiredBy: 8
  fieldRequiredBy: 0
- workplace:workplace_using_data:read
  tokens: tenant_access_token
  requiredBy: 3
  fieldRequiredBy: 0

