# directory API Inventory

- Canonical methods: 26
- Event handles: 9

## Canonical Methods

- directory.collaborationRule.create -> POST ${this.domain}/open-apis/directory/v1/collaboration_rules [custom_params_serializer]
- directory.collaborationRule.delete -> DELETE ${this.domain}/open-apis/directory/v1/collaboration_rules/:collaboration_rule_id [custom_params_serializer]
- directory.collaborationRule.list -> GET ${this.domain}/open-apis/directory/v1/collaboration_rules [custom_params_serializer]
- directory.collaborationRule.listWithIterator -> GET ${this.domain}/open-apis/directory/v1/collaboration_rules [custom_params_serializer, iterator_helper]
- directory.collaborationRule.update -> PUT ${this.domain}/open-apis/directory/v1/collaboration_rules/:collaboration_rule_id [custom_params_serializer]
- directory.collaborationTenant.list -> GET ${this.domain}/open-apis/directory/v1/collaboration_tenants [custom_params_serializer]
- directory.collaborationTenant.listWithIterator -> GET ${this.domain}/open-apis/directory/v1/collaboration_tenants [custom_params_serializer, iterator_helper]
- directory.collborationShareEntity.list -> GET ${this.domain}/open-apis/directory/v1/share_entities [custom_params_serializer]
- directory.collborationShareEntity.listWithIterator -> GET ${this.domain}/open-apis/directory/v1/share_entities [custom_params_serializer, iterator_helper]
- directory.department.create -> POST ${this.domain}/open-apis/directory/v1/departments [custom_params_serializer]
- directory.department.delete -> DELETE ${this.domain}/open-apis/directory/v1/departments/:department_id [custom_params_serializer]
- directory.department.filter -> POST ${this.domain}/open-apis/directory/v1/departments/filter [custom_params_serializer]
- directory.department.idconvert -> POST ${this.domain}/open-apis/directory/v1/departments/idconvert [custom_params_serializer]
- directory.department.mget -> POST ${this.domain}/open-apis/directory/v1/departments/mget [custom_params_serializer]
- directory.department.patch -> PATCH ${this.domain}/open-apis/directory/v1/departments/:department_id [custom_params_serializer]
- directory.department.search -> POST ${this.domain}/open-apis/directory/v1/departments/search [custom_params_serializer]
- directory.employee.create -> POST ${this.domain}/open-apis/directory/v1/employees [custom_params_serializer]
- directory.employee.delete -> DELETE ${this.domain}/open-apis/directory/v1/employees/:employee_id [custom_params_serializer]
- directory.employee.filter -> POST ${this.domain}/open-apis/directory/v1/employees/filter [custom_params_serializer]
- directory.employee.idconvert -> POST ${this.domain}/open-apis/directory/v1/employees/idconvert [custom_params_serializer]
- directory.employee.mget -> POST ${this.domain}/open-apis/directory/v1/employees/mget [custom_params_serializer]
- directory.employee.patch -> PATCH ${this.domain}/open-apis/directory/v1/employees/:employee_id [custom_params_serializer]
- directory.employee.regular -> PATCH ${this.domain}/open-apis/directory/v1/employees/:employee_id/regular [custom_params_serializer]
- directory.employee.resurrect -> POST ${this.domain}/open-apis/directory/v1/employees/:employee_id/resurrect [custom_params_serializer]
- directory.employee.search -> POST ${this.domain}/open-apis/directory/v1/employees/search [custom_params_serializer]
- directory.employee.toBeResigned -> PATCH ${this.domain}/open-apis/directory/v1/employees/:employee_id/to_be_resigned [custom_params_serializer]

## Event Handles

- directory.department.created_v1
- directory.department.deleted_v1
- directory.department.updated_v1
- directory.employee.created_v1
- directory.employee.regular_v1
- directory.employee.resigned_v1
- directory.employee.resurrect_v1
- directory.employee.to_be_resigned_v1
- directory.employee.updated_v1

