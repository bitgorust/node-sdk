# Feishu Event Coverage

- Evaluated events: 204
- Covered by SDK: 181
- Uncovered by SDK: 23
- Coverage rate: 88.73%

## By Project

- acs: 2/2 covered (0 uncovered)
- apaas: 0/1 covered (1 uncovered)
- application: 8/13 covered (5 uncovered)
- approval: 1/7 covered (6 uncovered)
- auth: 0/1 covered (1 uncovered)
- calendar: 4/4 covered (0 uncovered)
- compensation: 1/1 covered (0 uncovered)
- contact: 13/17 covered (4 uncovered)
- corehr: 73/73 covered (0 uncovered)
- drive: 11/12 covered (1 uncovered)
- elearning: 0/3 covered (3 uncovered)
- helpdesk: 4/4 covered (0 uncovered)
- hire: 12/12 covered (0 uncovered)
- im: 13/13 covered (0 uncovered)
- im_chat: 0/1 covered (1 uncovered)
- mail: 1/1 covered (0 uncovered)
- meeting_room: 4/4 covered (0 uncovered)
- moments: 7/7 covered (0 uncovered)
- payroll: 2/2 covered (0 uncovered)
- performance: 2/2 covered (0 uncovered)
- security_and_compliance: 2/2 covered (0 uncovered)
- task: 3/3 covered (0 uncovered)
- vc: 18/18 covered (0 uncovered)
- vc_meeting: 0/1 covered (1 uncovered)

## Uncovered Events

- apaas.workspace.record_change_v1 | 数据记录变更
  doc: https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/apaas-v1/workspace/events/record_change.md
  permissions: app_engine:data.record.change:read
- application.default.app_open_old | 首次启用应用
  doc: https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/application-v6/event/app-first-enabled.md
- application.default.app_status_change_old | 应用停启用
  doc: https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/application-v6/event/app-enabled-or-disabled.md
- application.default.app_ticket_old | app_ticket 事件
  doc: https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/application-v6/event/app_ticket-events.md
- application.default.app_uninstalled_old | 应用卸载
  doc: https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/application-v6/event/app-uninstalled.md
- application.default.order_paid_old | 应用商店应用购买
  doc: https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/application-v6/event/public-app-purchase.md
- approval.instance.remedy_group_update_v4 | 补卡审批
  doc: https://open.feishu.cn/document/ukTMukTMukTM/uIDO24iM4YjLygjN/event/attendance-record-correction.md
  permissions: approval:approval:readonly, approval:approval
- approval.instance.trip_group_update_v4 | 出差审批
  doc: https://open.feishu.cn/document/ukTMukTMukTM/uIDO24iM4YjLygjN/event/business-trip.md
  permissions: approval:approval:readonly, approval:approval
- auth.user_access_token.revoked_v4 | 撤销用户授权事件
  doc: https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/authentication-management/auth-v4/user_access_token/events/revoked.md
  permissions: auth:user_access_token:read
- contact.default.contact_scope_change_old | 授权范围变更
  doc: https://open.feishu.cn/document/ukTMukTMukTM/uETNz4SM1MjLxUzM/event/scope-change.md
- contact.default.dept_add_old | 部门变更
  doc: https://open.feishu.cn/document/ukTMukTMukTM/uETNz4SM1MjLxUzM/event/department-update.md
- contact.default.user_add_old | 员工变更
  doc: https://open.feishu.cn/document/ukTMukTMukTM/uETNz4SM1MjLxUzM/event/employee-change.md
- contact.default.user_status_change_old | 用户状态变更
  doc: https://open.feishu.cn/document/ukTMukTMukTM/uETNz4SM1MjLxUzM/event/user-status-changed.md
- drive.notice.comment_add_v1 | 添加评论、回复通知事件
  doc: https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/drive-v1/notice/events/comment_add.md
  permissions: docs:document.comment:read
- elearning.course_registration.created_v2 | 课程学习进度新增事件
  doc: https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/elearning-v2/course_registration/events/created.md
  permissions: elearning:course_learner_data, elearning:course_learner_data:readonly, elearning:course_learner_data:write
- elearning.course_registration.deleted_v2 | 课程学习进度删除事件
  doc: https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/elearning-v2/course_registration/events/deleted.md
  permissions: elearning:course_learner_data, elearning:course_learner_data:readonly, elearning:course_learner_data:write
- elearning.course_registration.updated_v2 | 课程学习进度更新事件
  doc: https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/elearning-v2/course_registration/events/updated.md
  permissions: elearning:course_learner_data, elearning:course_learner_data:readonly, elearning:course_learner_data:write
- leave_approval | 请假审批
  doc: https://open.feishu.cn/document/ukTMukTMukTM/uIDO24iM4YjLygjN/event/leave.md
  permissions: approval:approval:readonly, approval:approval
- out_approval | 外出审批
  doc: https://open.feishu.cn/document/ukTMukTMukTM/uIDO24iM4YjLygjN/event/out-of-office.md
  permissions: approval:approval:readonly, approval:approval
- p2p_chat_create | 用户和机器人的会话首次被创建
  doc: https://open.feishu.cn/document/ukTMukTMukTM/uYDNxYjL2QTM24iN0EjN/bot-events.md
- shift_approval | 换班审批
  doc: https://open.feishu.cn/document/ukTMukTMukTM/uIDO24iM4YjLygjN/event/shift-change.md
  permissions: approval:approval:readonly, approval:approval
- third_party_meeting_room_event_created | 第三方会议室日程变动
  doc: https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/meeting_room-v1/event/third-room-event-changes.md
- work_approval | 加班审批
  doc: https://open.feishu.cn/document/ukTMukTMukTM/uIDO24iM4YjLygjN/event/overtime.md
  permissions: approval:approval:readonly, approval:approval

