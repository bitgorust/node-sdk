# payroll API Inventory

- Canonical methods: 20
- Event handles: 2

## Canonical Methods

- payroll.acctItem.list -> GET ${this.domain}/open-apis/payroll/v1/acct_items [custom_params_serializer]
- payroll.acctItem.listWithIterator -> GET ${this.domain}/open-apis/payroll/v1/acct_items [custom_params_serializer, iterator_helper]
- payroll.costAllocationDetail.list -> GET ${this.domain}/open-apis/payroll/v1/cost_allocation_details [custom_params_serializer]
- payroll.costAllocationDetail.listWithIterator -> GET ${this.domain}/open-apis/payroll/v1/cost_allocation_details [custom_params_serializer, iterator_helper]
- payroll.costAllocationPlan.list -> GET ${this.domain}/open-apis/payroll/v1/cost_allocation_plans [custom_params_serializer]
- payroll.costAllocationPlan.listWithIterator -> GET ${this.domain}/open-apis/payroll/v1/cost_allocation_plans [custom_params_serializer, iterator_helper]
- payroll.costAllocationReport.list -> GET ${this.domain}/open-apis/payroll/v1/cost_allocation_reports [custom_params_serializer]
- payroll.costAllocationReport.listWithIterator -> GET ${this.domain}/open-apis/payroll/v1/cost_allocation_reports [custom_params_serializer, iterator_helper]
- payroll.datasource.list -> GET ${this.domain}/open-apis/payroll/v1/datasources [custom_params_serializer]
- payroll.datasource.listWithIterator -> GET ${this.domain}/open-apis/payroll/v1/datasources [custom_params_serializer, iterator_helper]
- payroll.datasourceRecord.query -> POST ${this.domain}/open-apis/payroll/v1/datasource_records/query [custom_params_serializer]
- payroll.datasourceRecord.queryWithIterator -> POST ${this.domain}/open-apis/payroll/v1/datasource_records/query [custom_params_serializer, iterator_helper]
- payroll.datasourceRecord.save -> POST ${this.domain}/open-apis/payroll/v1/datasource_records/save [custom_params_serializer]
- payroll.paygroup.list -> GET ${this.domain}/open-apis/payroll/v1/paygroups [custom_params_serializer]
- payroll.paygroup.listWithIterator -> GET ${this.domain}/open-apis/payroll/v1/paygroups [custom_params_serializer, iterator_helper]
- payroll.paymentActivity.archive -> POST ${this.domain}/open-apis/payroll/v1/payment_activitys/archive [custom_params_serializer]
- payroll.paymentActivity.list -> GET ${this.domain}/open-apis/payroll/v1/payment_activitys [custom_params_serializer]
- payroll.paymentActivity.listWithIterator -> GET ${this.domain}/open-apis/payroll/v1/payment_activitys [custom_params_serializer, iterator_helper]
- payroll.paymentActivityDetail.list -> GET ${this.domain}/open-apis/payroll/v1/payment_activity_details [custom_params_serializer]
- payroll.paymentDetail.query -> POST ${this.domain}/open-apis/payroll/v1/payment_detail/query [custom_params_serializer]

## Event Handles

- payroll.payment_activity.approved_v1
- payroll.payment_activity.status_changed_v1

