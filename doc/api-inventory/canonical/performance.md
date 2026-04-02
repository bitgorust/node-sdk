# performance API Inventory

- Canonical methods: 21
- Event handles: 2

## Canonical Methods

- performance.activity.query -> POST ${this.domain}/open-apis/performance/v2/activity/query [custom_params_serializer]
- performance.additionalInformation.import -> POST ${this.domain}/open-apis/performance/v2/additional_informations/import [custom_params_serializer]
- performance.additionalInformation.query -> POST ${this.domain}/open-apis/performance/v2/additional_informations/query [custom_params_serializer]
- performance.additionalInformation.queryWithIterator -> POST ${this.domain}/open-apis/performance/v2/additional_informations/query [custom_params_serializer, iterator_helper]
- performance.additionalInformationsBatch.delete -> DELETE ${this.domain}/open-apis/performance/v2/additional_informations/batch [custom_params_serializer]
- performance.indicator.query -> POST ${this.domain}/open-apis/performance/v2/indicators/query [custom_params_serializer]
- performance.indicator.queryWithIterator -> POST ${this.domain}/open-apis/performance/v2/indicators/query [custom_params_serializer, iterator_helper]
- performance.metricDetail.import -> POST ${this.domain}/open-apis/performance/v2/metric_details/import [custom_params_serializer]
- performance.metricDetail.query -> POST ${this.domain}/open-apis/performance/v2/metric_details/query [custom_params_serializer]
- performance.metricField.query -> POST ${this.domain}/open-apis/performance/v2/metric_fields/query [custom_params_serializer]
- performance.metricLib.query -> POST ${this.domain}/open-apis/performance/v2/metric_libs/query [custom_params_serializer]
- performance.metricTag.list -> GET ${this.domain}/open-apis/performance/v2/metric_tags [custom_params_serializer]
- performance.metricTag.listWithIterator -> GET ${this.domain}/open-apis/performance/v2/metric_tags [custom_params_serializer, iterator_helper]
- performance.metricTemplate.query -> POST ${this.domain}/open-apis/performance/v2/metric_templates/query [custom_params_serializer]
- performance.question.query -> POST ${this.domain}/open-apis/performance/v2/questions/query [custom_params_serializer]
- performance.question.queryWithIterator -> POST ${this.domain}/open-apis/performance/v2/questions/query [custom_params_serializer, iterator_helper]
- performance.reviewData.query -> POST ${this.domain}/open-apis/performance/v2/review_datas/query [custom_params_serializer]
- performance.reviewee.query -> POST ${this.domain}/open-apis/performance/v2/reviewees/query [custom_params_serializer]
- performance.reviewTemplate.query -> POST ${this.domain}/open-apis/performance/v2/review_templates/query [custom_params_serializer]
- performance.reviewTemplate.queryWithIterator -> POST ${this.domain}/open-apis/performance/v2/review_templates/query [custom_params_serializer, iterator_helper]
- performance.userGroupUserRel.write -> POST ${this.domain}/open-apis/performance/v2/user_group_user_rels/write [custom_params_serializer]

## Event Handles

- performance.review_data.changed_v2
- performance.stage_task.open_result_v2

