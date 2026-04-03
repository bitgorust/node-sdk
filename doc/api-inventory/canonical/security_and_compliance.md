# security_and_compliance API Inventory

- Canonical methods: 14
- Event handles: 2

## Canonical Methods

- security_and_compliance.deviceApplyRecord.update -> PUT ${this.domain}/open-apis/security_and_compliance/v2/device_apply_records/:device_apply_record_id [custom_params_serializer]
- security_and_compliance.deviceRecord.create -> POST ${this.domain}/open-apis/security_and_compliance/v2/device_records [custom_params_serializer]
- security_and_compliance.deviceRecord.delete -> DELETE ${this.domain}/open-apis/security_and_compliance/v2/device_records/:device_record_id [custom_params_serializer]
- security_and_compliance.deviceRecord.get -> GET ${this.domain}/open-apis/security_and_compliance/v2/device_records/:device_record_id [custom_params_serializer]
- security_and_compliance.deviceRecord.list -> GET ${this.domain}/open-apis/security_and_compliance/v2/device_records [custom_params_serializer]
- security_and_compliance.deviceRecord.listWithIterator -> GET ${this.domain}/open-apis/security_and_compliance/v2/device_records [custom_params_serializer, iterator_helper]
- security_and_compliance.deviceRecord.mine -> GET ${this.domain}/open-apis/security_and_compliance/v2/device_records/mine [custom_params_serializer]
- security_and_compliance.deviceRecord.update -> PUT ${this.domain}/open-apis/security_and_compliance/v2/device_records/:device_record_id [custom_params_serializer]
- security_and_compliance.multiGeoEntity.tenant.get -> GET ${this.domain}/open-apis/security_and_compliance/v1/multi_geo_entity/tenant [custom_params_serializer]
- security_and_compliance.openapiLog.listData -> POST ${this.domain}/open-apis/security_and_compliance/v1/openapi_logs/list_data [custom_params_serializer] aliases: security_and_compliance.openapiLog.listData, security_and_compliance.v1.openapiLog.listData
- security_and_compliance.userMigration.cancel -> POST ${this.domain}/open-apis/security_and_compliance/v1/user_migrations/cancel [custom_params_serializer]
- security_and_compliance.userMigration.create -> POST ${this.domain}/open-apis/security_and_compliance/v1/user_migrations [custom_params_serializer]
- security_and_compliance.userMigration.get -> GET ${this.domain}/open-apis/security_and_compliance/v1/user_migrations/:user_id [custom_params_serializer]
- security_and_compliance.userMigration.search -> POST ${this.domain}/open-apis/security_and_compliance/v1/user_migrations/search [custom_params_serializer]

## Event Handles

- security_and_compliance.device_apply_record.device_apply_event_v2
- security_and_compliance.device_record.device_change_event_v2

