# attendance API Inventory

- Canonical methods: 42
- Event handles: 0

## Canonical Methods

- attendance.approvalInfo.process -> POST ${this.domain}/open-apis/attendance/v1/approval_infos/process [custom_params_serializer] aliases: attendance.approvalInfo.process, attendance.v1.approvalInfo.process
- attendance.archiveRule.delReport -> POST ${this.domain}/open-apis/attendance/v1/archive_rule/del_report [custom_params_serializer] aliases: attendance.archiveRule.delReport, attendance.v1.archiveRule.delReport
- attendance.archiveRule.list -> GET ${this.domain}/open-apis/attendance/v1/archive_rule [custom_params_serializer] aliases: attendance.archiveRule.list, attendance.v1.archiveRule.list
- attendance.archiveRule.listWithIterator -> GET ${this.domain}/open-apis/attendance/v1/archive_rule [custom_params_serializer, iterator_helper] aliases: attendance.archiveRule.listWithIterator, attendance.v1.archiveRule.listWithIterator
- attendance.archiveRule.uploadReport -> POST ${this.domain}/open-apis/attendance/v1/archive_rule/upload_report [custom_params_serializer] aliases: attendance.archiveRule.uploadReport, attendance.v1.archiveRule.uploadReport
- attendance.archiveRule.userStatsFieldsQuery -> POST ${this.domain}/open-apis/attendance/v1/archive_rule/user_stats_fields_query [custom_params_serializer] aliases: attendance.archiveRule.userStatsFieldsQuery, attendance.v1.archiveRule.userStatsFieldsQuery
- attendance.file.download -> GET ${this.domain}/open-apis/attendance/v1/files/:file_id/download [custom_params_serializer, readable_stream_helper, stream_response, write_file_helper] aliases: attendance.file.download, attendance.v1.file.download
- attendance.file.upload -> POST ${this.domain}/open-apis/attendance/v1/files/upload [custom_params_serializer] aliases: attendance.file.upload, attendance.v1.file.upload
- attendance.group.create -> POST ${this.domain}/open-apis/attendance/v1/groups [custom_params_serializer] aliases: attendance.group.create, attendance.v1.group.create
- attendance.group.delete -> DELETE ${this.domain}/open-apis/attendance/v1/groups/:group_id [custom_params_serializer] aliases: attendance.group.delete, attendance.v1.group.delete
- attendance.group.get -> GET ${this.domain}/open-apis/attendance/v1/groups/:group_id [custom_params_serializer] aliases: attendance.group.get, attendance.v1.group.get
- attendance.group.list -> GET ${this.domain}/open-apis/attendance/v1/groups [custom_params_serializer] aliases: attendance.group.list, attendance.v1.group.list
- attendance.group.listUser -> GET ${this.domain}/open-apis/attendance/v1/groups/:group_id/list_user [custom_params_serializer] aliases: attendance.group.listUser, attendance.v1.group.listUser
- attendance.group.listWithIterator -> GET ${this.domain}/open-apis/attendance/v1/groups [custom_params_serializer, iterator_helper] aliases: attendance.group.listWithIterator, attendance.v1.group.listWithIterator
- attendance.group.search -> POST ${this.domain}/open-apis/attendance/v1/groups/search [custom_params_serializer] aliases: attendance.group.search, attendance.v1.group.search
- attendance.leaveAccrualRecord.patch -> PATCH ${this.domain}/open-apis/attendance/v1/leave_accrual_record/:leave_id [custom_params_serializer] aliases: attendance.leaveAccrualRecord.patch, attendance.v1.leaveAccrualRecord.patch
- attendance.leaveEmployExpireRecord.get -> GET ${this.domain}/open-apis/attendance/v1/leave_employ_expire_records/:leave_id [custom_params_serializer] aliases: attendance.leaveEmployExpireRecord.get, attendance.v1.leaveEmployExpireRecord.get
- attendance.shift.create -> POST ${this.domain}/open-apis/attendance/v1/shifts [custom_params_serializer] aliases: attendance.shift.create, attendance.v1.shift.create
- attendance.shift.delete -> DELETE ${this.domain}/open-apis/attendance/v1/shifts/:shift_id [custom_params_serializer] aliases: attendance.shift.delete, attendance.v1.shift.delete
- attendance.shift.get -> GET ${this.domain}/open-apis/attendance/v1/shifts/:shift_id [custom_params_serializer] aliases: attendance.shift.get, attendance.v1.shift.get
- attendance.shift.list -> GET ${this.domain}/open-apis/attendance/v1/shifts [custom_params_serializer] aliases: attendance.shift.list, attendance.v1.shift.list
- attendance.shift.listWithIterator -> GET ${this.domain}/open-apis/attendance/v1/shifts [custom_params_serializer, iterator_helper] aliases: attendance.shift.listWithIterator, attendance.v1.shift.listWithIterator
- attendance.shift.query -> POST ${this.domain}/open-apis/attendance/v1/shifts/query [custom_params_serializer] aliases: attendance.shift.query, attendance.v1.shift.query
- attendance.userApproval.create -> POST ${this.domain}/open-apis/attendance/v1/user_approvals [custom_params_serializer] aliases: attendance.userApproval.create, attendance.v1.userApproval.create
- attendance.userApproval.query -> POST ${this.domain}/open-apis/attendance/v1/user_approvals/query [custom_params_serializer] aliases: attendance.userApproval.query, attendance.v1.userApproval.query
- attendance.userDailyShift.batchCreate -> POST ${this.domain}/open-apis/attendance/v1/user_daily_shifts/batch_create [custom_params_serializer] aliases: attendance.userDailyShift.batchCreate, attendance.v1.userDailyShift.batchCreate
- attendance.userDailyShift.batchCreateTemp -> POST ${this.domain}/open-apis/attendance/v1/user_daily_shifts/batch_create_temp [custom_params_serializer] aliases: attendance.userDailyShift.batchCreateTemp, attendance.v1.userDailyShift.batchCreateTemp
- attendance.userDailyShift.query -> POST ${this.domain}/open-apis/attendance/v1/user_daily_shifts/query [custom_params_serializer] aliases: attendance.userDailyShift.query, attendance.v1.userDailyShift.query
- attendance.userFlow.batchCreate -> POST ${this.domain}/open-apis/attendance/v1/user_flows/batch_create [custom_params_serializer] aliases: attendance.userFlow.batchCreate, attendance.v1.userFlow.batchCreate
- attendance.userFlow.batchDel -> POST ${this.domain}/open-apis/attendance/v1/user_flows/batch_del [custom_params_serializer] aliases: attendance.userFlow.batchDel, attendance.v1.userFlow.batchDel
- attendance.userFlow.get -> GET ${this.domain}/open-apis/attendance/v1/user_flows/:user_flow_id [custom_params_serializer] aliases: attendance.userFlow.get, attendance.v1.userFlow.get
- attendance.userFlow.query -> POST ${this.domain}/open-apis/attendance/v1/user_flows/query [custom_params_serializer] aliases: attendance.userFlow.query, attendance.v1.userFlow.query
- attendance.userSetting.modify -> POST ${this.domain}/open-apis/attendance/v1/user_settings/modify [custom_params_serializer] aliases: attendance.userSetting.modify, attendance.v1.userSetting.modify
- attendance.userSetting.query -> GET ${this.domain}/open-apis/attendance/v1/user_settings/query [custom_params_serializer] aliases: attendance.userSetting.query, attendance.v1.userSetting.query
- attendance.userStatsData.query -> POST ${this.domain}/open-apis/attendance/v1/user_stats_datas/query [custom_params_serializer] aliases: attendance.userStatsData.query, attendance.v1.userStatsData.query
- attendance.userStatsField.query -> POST ${this.domain}/open-apis/attendance/v1/user_stats_fields/query [custom_params_serializer] aliases: attendance.userStatsField.query, attendance.v1.userStatsField.query
- attendance.userStatsView.query -> POST ${this.domain}/open-apis/attendance/v1/user_stats_views/query [custom_params_serializer] aliases: attendance.userStatsView.query, attendance.v1.userStatsView.query
- attendance.userStatsView.update -> PUT ${this.domain}/open-apis/attendance/v1/user_stats_views/:user_stats_view_id [custom_params_serializer] aliases: attendance.userStatsView.update, attendance.v1.userStatsView.update
- attendance.userTask.query -> POST ${this.domain}/open-apis/attendance/v1/user_tasks/query [custom_params_serializer] aliases: attendance.userTask.query, attendance.v1.userTask.query
- attendance.userTaskRemedy.create -> POST ${this.domain}/open-apis/attendance/v1/user_task_remedys [custom_params_serializer] aliases: attendance.userTaskRemedy.create, attendance.v1.userTaskRemedy.create
- attendance.userTaskRemedy.query -> POST ${this.domain}/open-apis/attendance/v1/user_task_remedys/query [custom_params_serializer] aliases: attendance.userTaskRemedy.query, attendance.v1.userTaskRemedy.query
- attendance.userTaskRemedy.queryUserAllowedRemedys -> POST ${this.domain}/open-apis/attendance/v1/user_task_remedys/query_user_allowed_remedys [custom_params_serializer] aliases: attendance.userTaskRemedy.queryUserAllowedRemedys, attendance.v1.userTaskRemedy.queryUserAllowedRemedys

## Event Handles


