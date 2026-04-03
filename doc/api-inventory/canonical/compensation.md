# compensation API Inventory

- Canonical methods: 30
- Event handles: 1

## Canonical Methods

- compensation.archive.create -> POST ${this.domain}/open-apis/compensation/v1/archives [custom_params_serializer]
- compensation.archive.query -> POST ${this.domain}/open-apis/compensation/v1/archives/query [custom_params_serializer]
- compensation.changeReason.list -> GET ${this.domain}/open-apis/compensation/v1/change_reasons [custom_params_serializer]
- compensation.changeReason.listWithIterator -> GET ${this.domain}/open-apis/compensation/v1/change_reasons [custom_params_serializer, iterator_helper]
- compensation.indicator.list -> GET ${this.domain}/open-apis/compensation/v1/indicators [custom_params_serializer]
- compensation.indicator.listWithIterator -> GET ${this.domain}/open-apis/compensation/v1/indicators [custom_params_serializer, iterator_helper]
- compensation.item.list -> GET ${this.domain}/open-apis/compensation/v1/items [custom_params_serializer]
- compensation.item.listWithIterator -> GET ${this.domain}/open-apis/compensation/v1/items [custom_params_serializer, iterator_helper]
- compensation.itemCategory.list -> GET ${this.domain}/open-apis/compensation/v1/item_categories [custom_params_serializer]
- compensation.itemCategory.listWithIterator -> GET ${this.domain}/open-apis/compensation/v1/item_categories [custom_params_serializer, iterator_helper]
- compensation.lumpSumPayment.batchCreate -> POST ${this.domain}/open-apis/compensation/v1/lump_sum_payment/batch_create [custom_params_serializer]
- compensation.lumpSumPayment.batchRemove -> POST ${this.domain}/open-apis/compensation/v1/lump_sum_payment/batch_remove [custom_params_serializer]
- compensation.lumpSumPayment.batchUpdate -> POST ${this.domain}/open-apis/compensation/v1/lump_sum_payment/batch_update [custom_params_serializer]
- compensation.lumpSumPayment.query -> POST ${this.domain}/open-apis/compensation/v1/lump_sum_payment/query [custom_params_serializer]
- compensation.lumpSumPayment.queryDetail -> POST ${this.domain}/open-apis/compensation/v1/lump_sum_payment/query_detail [custom_params_serializer]
- compensation.lumpSumPayment.queryDetailWithIterator -> POST ${this.domain}/open-apis/compensation/v1/lump_sum_payment/query_detail [custom_params_serializer, iterator_helper]
- compensation.lumpSumPayment.queryWithIterator -> POST ${this.domain}/open-apis/compensation/v1/lump_sum_payment/query [custom_params_serializer, iterator_helper]
- compensation.plan.list -> GET ${this.domain}/open-apis/compensation/v1/plans [custom_params_serializer]
- compensation.plan.listWithIterator -> GET ${this.domain}/open-apis/compensation/v1/plans [custom_params_serializer, iterator_helper]
- compensation.recurringPayment.batchCreate -> POST ${this.domain}/open-apis/compensation/v1/recurring_payment/batch_create [custom_params_serializer]
- compensation.recurringPayment.batchRemove -> POST ${this.domain}/open-apis/compensation/v1/recurring_payment/batch_remove [custom_params_serializer]
- compensation.recurringPayment.batchUpdate -> POST ${this.domain}/open-apis/compensation/v1/recurring_payment/batch_update [custom_params_serializer]
- compensation.recurringPayment.query -> POST ${this.domain}/open-apis/compensation/v1/recurring_payment/query [custom_params_serializer]
- compensation.recurringPayment.queryWithIterator -> POST ${this.domain}/open-apis/compensation/v1/recurring_payment/query [custom_params_serializer, iterator_helper]
- compensation.socialArchive.query -> POST ${this.domain}/open-apis/compensation/v1/social_archive/query [custom_params_serializer]
- compensation.socialArchiveAdjustRecord.query -> POST ${this.domain}/open-apis/compensation/v1/social_archive_adjust_record/query [custom_params_serializer]
- compensation.socialInsurance.list -> GET ${this.domain}/open-apis/compensation/v1/social_insurances [custom_params_serializer]
- compensation.socialPlan.list -> GET ${this.domain}/open-apis/compensation/v1/social_plans [custom_params_serializer]
- compensation.socialPlan.listWithIterator -> GET ${this.domain}/open-apis/compensation/v1/social_plans [custom_params_serializer, iterator_helper]
- compensation.socialPlan.query -> POST ${this.domain}/open-apis/compensation/v1/social_plans/query [custom_params_serializer]

## Event Handles

- compensation.archive.changed_v1

