# acs API Inventory

- Canonical methods: 16
- Event handles: 2

## Canonical Methods

- acs.accessRecord.list -> GET ${this.domain}/open-apis/acs/v1/access_records [custom_params_serializer] aliases: acs.accessRecord.list, acs.v1.accessRecord.list
- acs.accessRecord.listWithIterator -> GET ${this.domain}/open-apis/acs/v1/access_records [custom_params_serializer, iterator_helper] aliases: acs.accessRecord.listWithIterator, acs.v1.accessRecord.listWithIterator
- acs.accessRecordAccessPhoto.get -> GET ${this.domain}/open-apis/acs/v1/access_records/:access_record_id/access_photo [custom_params_serializer, readable_stream_helper, stream_response, write_file_helper] aliases: acs.accessRecordAccessPhoto.get, acs.v1.accessRecordAccessPhoto.get
- acs.device.list -> GET ${this.domain}/open-apis/acs/v1/devices [custom_params_serializer] aliases: acs.device.list, acs.v1.device.list
- acs.ruleExternal.create -> POST ${this.domain}/open-apis/acs/v1/rule_external [custom_params_serializer] aliases: acs.ruleExternal.create, acs.v1.ruleExternal.create
- acs.ruleExternal.delete -> DELETE ${this.domain}/open-apis/acs/v1/rule_external [custom_params_serializer] aliases: acs.ruleExternal.delete, acs.v1.ruleExternal.delete
- acs.ruleExternal.deviceBind -> POST ${this.domain}/open-apis/acs/v1/rule_external/device_bind [custom_params_serializer] aliases: acs.ruleExternal.deviceBind, acs.v1.ruleExternal.deviceBind
- acs.ruleExternal.get -> GET ${this.domain}/open-apis/acs/v1/rule_external [custom_params_serializer] aliases: acs.ruleExternal.get, acs.v1.ruleExternal.get
- acs.user.get -> GET ${this.domain}/open-apis/acs/v1/users/:user_id [custom_params_serializer] aliases: acs.user.get, acs.v1.user.get
- acs.user.list -> GET ${this.domain}/open-apis/acs/v1/users [custom_params_serializer] aliases: acs.user.list, acs.v1.user.list
- acs.user.listWithIterator -> GET ${this.domain}/open-apis/acs/v1/users [custom_params_serializer, iterator_helper] aliases: acs.user.listWithIterator, acs.v1.user.listWithIterator
- acs.user.patch -> PATCH ${this.domain}/open-apis/acs/v1/users/:user_id [custom_params_serializer] aliases: acs.user.patch, acs.v1.user.patch
- acs.userFace.get -> GET ${this.domain}/open-apis/acs/v1/users/:user_id/face [custom_params_serializer, readable_stream_helper, stream_response, write_file_helper] aliases: acs.userFace.get, acs.v1.userFace.get
- acs.userFace.update -> PUT ${this.domain}/open-apis/acs/v1/users/:user_id/face [custom_params_serializer] aliases: acs.userFace.update, acs.v1.userFace.update
- acs.visitor.create -> POST ${this.domain}/open-apis/acs/v1/visitors [custom_params_serializer] aliases: acs.v1.visitor.create, acs.visitor.create
- acs.visitor.delete -> DELETE ${this.domain}/open-apis/acs/v1/visitors/:visitor_id [custom_params_serializer] aliases: acs.v1.visitor.delete, acs.visitor.delete

## Event Handles

- acs.access_record.created_v1
- acs.user.updated_v1

