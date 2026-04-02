# approval API Inventory

- Canonical methods: 32
- Event handles: 1

## Canonical Methods

- approval.approval.create -> POST ${this.domain}/open-apis/approval/v4/approvals [custom_params_serializer] aliases: approval.approval.create, approval.v4.approval.create
- approval.approval.get -> GET ${this.domain}/open-apis/approval/v4/approvals/:approval_code [custom_params_serializer] aliases: approval.approval.get, approval.v4.approval.get
- approval.approval.subscribe -> POST ${this.domain}/open-apis/approval/v4/approvals/:approval_code/subscribe [custom_params_serializer] aliases: approval.approval.subscribe, approval.v4.approval.subscribe
- approval.approval.unsubscribe -> POST ${this.domain}/open-apis/approval/v4/approvals/:approval_code/unsubscribe [custom_params_serializer] aliases: approval.approval.unsubscribe, approval.v4.approval.unsubscribe
- approval.externalApproval.create -> POST ${this.domain}/open-apis/approval/v4/external_approvals [custom_params_serializer] aliases: approval.externalApproval.create, approval.v4.externalApproval.create
- approval.externalApproval.get -> GET ${this.domain}/open-apis/approval/v4/external_approvals/:approval_code [custom_params_serializer] aliases: approval.externalApproval.get, approval.v4.externalApproval.get
- approval.externalInstance.check -> POST ${this.domain}/open-apis/approval/v4/external_instances/check [custom_params_serializer] aliases: approval.externalInstance.check, approval.v4.externalInstance.check
- approval.externalInstance.create -> POST ${this.domain}/open-apis/approval/v4/external_instances [custom_params_serializer] aliases: approval.externalInstance.create, approval.v4.externalInstance.create
- approval.externalTask.list -> GET ${this.domain}/open-apis/approval/v4/external_tasks [custom_params_serializer] aliases: approval.externalTask.list, approval.v4.externalTask.list
- approval.externalTask.listWithIterator -> GET ${this.domain}/open-apis/approval/v4/external_tasks [custom_params_serializer, iterator_helper] aliases: approval.externalTask.listWithIterator, approval.v4.externalTask.listWithIterator
- approval.instance.addSign -> POST ${this.domain}/open-apis/approval/v4/instances/add_sign [custom_params_serializer] aliases: approval.instance.addSign, approval.v4.instance.addSign
- approval.instance.cancel -> POST ${this.domain}/open-apis/approval/v4/instances/cancel [custom_params_serializer] aliases: approval.instance.cancel, approval.v4.instance.cancel
- approval.instance.cc -> POST ${this.domain}/open-apis/approval/v4/instances/cc [custom_params_serializer] aliases: approval.instance.cc, approval.v4.instance.cc
- approval.instance.create -> POST ${this.domain}/open-apis/approval/v4/instances [custom_params_serializer] aliases: approval.instance.create, approval.v4.instance.create
- approval.instance.get -> GET ${this.domain}/open-apis/approval/v4/instances/:instance_id [custom_params_serializer] aliases: approval.instance.get, approval.v4.instance.get
- approval.instance.preview -> POST ${this.domain}/open-apis/approval/v4/instances/preview [custom_params_serializer] aliases: approval.instance.preview, approval.v4.instance.preview
- approval.instance.query -> POST ${this.domain}/open-apis/approval/v4/instances/query [custom_params_serializer] aliases: approval.instance.query, approval.v4.instance.query
- approval.instance.queryWithIterator -> POST ${this.domain}/open-apis/approval/v4/instances/query [custom_params_serializer, iterator_helper] aliases: approval.instance.queryWithIterator, approval.v4.instance.queryWithIterator
- approval.instance.searchCc -> POST ${this.domain}/open-apis/approval/v4/instances/search_cc [custom_params_serializer] aliases: approval.instance.searchCc, approval.v4.instance.searchCc
- approval.instance.specifiedRollback -> POST ${this.domain}/open-apis/approval/v4/instances/specified_rollback [custom_params_serializer] aliases: approval.instance.specifiedRollback, approval.v4.instance.specifiedRollback
- approval.instanceComment.create -> POST ${this.domain}/open-apis/approval/v4/instances/:instance_id/comments [custom_params_serializer] aliases: approval.instanceComment.create, approval.v4.instanceComment.create
- approval.instanceComment.delete -> DELETE ${this.domain}/open-apis/approval/v4/instances/:instance_id/comments/:comment_id [custom_params_serializer] aliases: approval.instanceComment.delete, approval.v4.instanceComment.delete
- approval.instanceComment.list -> GET ${this.domain}/open-apis/approval/v4/instances/:instance_id/comments [custom_params_serializer] aliases: approval.instanceComment.list, approval.v4.instanceComment.list
- approval.instanceComment.listWithIterator -> GET ${this.domain}/open-apis/approval/v4/instances/:instance_id/comments [custom_params_serializer, iterator_helper] aliases: approval.instanceComment.listWithIterator, approval.v4.instanceComment.listWithIterator
- approval.instanceComment.remove -> POST ${this.domain}/open-apis/approval/v4/instances/:instance_id/comments/remove [custom_params_serializer] aliases: approval.instanceComment.remove, approval.v4.instanceComment.remove
- approval.task.approve -> POST ${this.domain}/open-apis/approval/v4/tasks/approve [custom_params_serializer] aliases: approval.task.approve, approval.v4.task.approve
- approval.task.query -> GET ${this.domain}/open-apis/approval/v4/tasks/query [custom_params_serializer] aliases: approval.task.query, approval.v4.task.query
- approval.task.queryWithIterator -> GET ${this.domain}/open-apis/approval/v4/tasks/query [custom_params_serializer, iterator_helper] aliases: approval.task.queryWithIterator, approval.v4.task.queryWithIterator
- approval.task.reject -> POST ${this.domain}/open-apis/approval/v4/tasks/reject [custom_params_serializer] aliases: approval.task.reject, approval.v4.task.reject
- approval.task.resubmit -> POST ${this.domain}/open-apis/approval/v4/tasks/resubmit [custom_params_serializer] aliases: approval.task.resubmit, approval.v4.task.resubmit
- approval.task.search -> POST ${this.domain}/open-apis/approval/v4/tasks/search [custom_params_serializer] aliases: approval.task.search, approval.v4.task.search
- approval.task.transfer -> POST ${this.domain}/open-apis/approval/v4/tasks/transfer [custom_params_serializer] aliases: approval.task.transfer, approval.v4.task.transfer

## Event Handles

- approval.approval.updated_v4

