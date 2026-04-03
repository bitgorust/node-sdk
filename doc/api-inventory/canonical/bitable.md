# bitable API Inventory

- Canonical methods: 59
- Event handles: 0

## Canonical Methods

- bitable.app.copy -> POST ${this.domain}/open-apis/bitable/v1/apps/:app_token/copy [custom_params_serializer] aliases: bitable.app.copy, bitable.v1.app.copy
- bitable.app.create -> POST ${this.domain}/open-apis/bitable/v1/apps [custom_params_serializer] aliases: bitable.app.create, bitable.v1.app.create
- bitable.app.get -> GET ${this.domain}/open-apis/bitable/v1/apps/:app_token [custom_params_serializer] aliases: bitable.app.get, bitable.v1.app.get
- bitable.app.update -> PUT ${this.domain}/open-apis/bitable/v1/apps/:app_token [custom_params_serializer] aliases: bitable.app.update, bitable.v1.app.update
- bitable.appBlockWorkflow.list -> GET ${this.domain}/open-apis/bitable/v1/apps/:app_token/block_workflows [custom_params_serializer]
- bitable.appDashboard.copy -> POST ${this.domain}/open-apis/bitable/v1/apps/:app_token/dashboards/:block_id/copy [custom_params_serializer] aliases: bitable.appDashboard.copy, bitable.v1.appDashboard.copy
- bitable.appDashboard.list -> GET ${this.domain}/open-apis/bitable/v1/apps/:app_token/dashboards [custom_params_serializer] aliases: bitable.appDashboard.list, bitable.v1.appDashboard.list
- bitable.appDashboard.listWithIterator -> GET ${this.domain}/open-apis/bitable/v1/apps/:app_token/dashboards [custom_params_serializer, iterator_helper] aliases: bitable.appDashboard.listWithIterator, bitable.v1.appDashboard.listWithIterator
- bitable.appRole.create -> POST ${this.domain}/open-apis/bitable/v1/apps/:app_token/roles [custom_params_serializer] aliases: bitable.appRole.create, bitable.v1.appRole.create
- bitable.appRole.delete -> DELETE ${this.domain}/open-apis/bitable/v1/apps/:app_token/roles/:role_id [custom_params_serializer] aliases: bitable.appRole.delete, bitable.v1.appRole.delete
- bitable.appRole.list -> GET ${this.domain}/open-apis/bitable/v1/apps/:app_token/roles [custom_params_serializer] aliases: bitable.appRole.list, bitable.v1.appRole.list
- bitable.appRole.listWithIterator -> GET ${this.domain}/open-apis/bitable/v1/apps/:app_token/roles [custom_params_serializer, iterator_helper] aliases: bitable.appRole.listWithIterator, bitable.v1.appRole.listWithIterator
- bitable.appRole.update -> PUT ${this.domain}/open-apis/bitable/v1/apps/:app_token/roles/:role_id [custom_params_serializer] aliases: bitable.appRole.update, bitable.v1.appRole.update
- bitable.appRoleMember.batchCreate -> POST ${this.domain}/open-apis/bitable/v1/apps/:app_token/roles/:role_id/members/batch_create [custom_params_serializer] aliases: bitable.appRoleMember.batchCreate, bitable.v1.appRoleMember.batchCreate
- bitable.appRoleMember.batchDelete -> POST ${this.domain}/open-apis/bitable/v1/apps/:app_token/roles/:role_id/members/batch_delete [custom_params_serializer] aliases: bitable.appRoleMember.batchDelete, bitable.v1.appRoleMember.batchDelete
- bitable.appRoleMember.create -> POST ${this.domain}/open-apis/bitable/v1/apps/:app_token/roles/:role_id/members [custom_params_serializer] aliases: bitable.appRoleMember.create, bitable.v1.appRoleMember.create
- bitable.appRoleMember.delete -> DELETE ${this.domain}/open-apis/bitable/v1/apps/:app_token/roles/:role_id/members/:member_id [custom_params_serializer] aliases: bitable.appRoleMember.delete, bitable.v1.appRoleMember.delete
- bitable.appRoleMember.list -> GET ${this.domain}/open-apis/bitable/v1/apps/:app_token/roles/:role_id/members [custom_params_serializer] aliases: bitable.appRoleMember.list, bitable.v1.appRoleMember.list
- bitable.appRoleMember.listWithIterator -> GET ${this.domain}/open-apis/bitable/v1/apps/:app_token/roles/:role_id/members [custom_params_serializer, iterator_helper] aliases: bitable.appRoleMember.listWithIterator, bitable.v1.appRoleMember.listWithIterator
- bitable.appTable.batchCreate -> POST ${this.domain}/open-apis/bitable/v1/apps/:app_token/tables/batch_create [custom_params_serializer] aliases: bitable.appTable.batchCreate, bitable.v1.appTable.batchCreate
- bitable.appTable.batchDelete -> POST ${this.domain}/open-apis/bitable/v1/apps/:app_token/tables/batch_delete [custom_params_serializer] aliases: bitable.appTable.batchDelete, bitable.v1.appTable.batchDelete
- bitable.appTable.create -> POST ${this.domain}/open-apis/bitable/v1/apps/:app_token/tables [custom_params_serializer] aliases: bitable.appTable.create, bitable.v1.appTable.create
- bitable.appTable.delete -> DELETE ${this.domain}/open-apis/bitable/v1/apps/:app_token/tables/:table_id [custom_params_serializer] aliases: bitable.appTable.delete, bitable.v1.appTable.delete
- bitable.appTable.list -> GET ${this.domain}/open-apis/bitable/v1/apps/:app_token/tables [custom_params_serializer] aliases: bitable.appTable.list, bitable.v1.appTable.list
- bitable.appTable.listWithIterator -> GET ${this.domain}/open-apis/bitable/v1/apps/:app_token/tables [custom_params_serializer, iterator_helper] aliases: bitable.appTable.listWithIterator, bitable.v1.appTable.listWithIterator
- bitable.appTable.patch -> PATCH ${this.domain}/open-apis/bitable/v1/apps/:app_token/tables/:table_id [custom_params_serializer] aliases: bitable.appTable.patch, bitable.v1.appTable.patch
- bitable.appTableField.create -> POST ${this.domain}/open-apis/bitable/v1/apps/:app_token/tables/:table_id/fields [custom_params_serializer] aliases: bitable.appTableField.create, bitable.v1.appTableField.create
- bitable.appTableField.delete -> DELETE ${this.domain}/open-apis/bitable/v1/apps/:app_token/tables/:table_id/fields/:field_id [custom_params_serializer] aliases: bitable.appTableField.delete, bitable.v1.appTableField.delete
- bitable.appTableField.list -> GET ${this.domain}/open-apis/bitable/v1/apps/:app_token/tables/:table_id/fields [custom_params_serializer] aliases: bitable.appTableField.list, bitable.v1.appTableField.list
- bitable.appTableField.listWithIterator -> GET ${this.domain}/open-apis/bitable/v1/apps/:app_token/tables/:table_id/fields [custom_params_serializer, iterator_helper] aliases: bitable.appTableField.listWithIterator, bitable.v1.appTableField.listWithIterator
- bitable.appTableField.update -> PUT ${this.domain}/open-apis/bitable/v1/apps/:app_token/tables/:table_id/fields/:field_id [custom_params_serializer] aliases: bitable.appTableField.update, bitable.v1.appTableField.update
- bitable.appTableFieldGroup.create -> POST ${this.domain}/open-apis/bitable/v1/apps/:app_token/tables/:table_id/field_groups [custom_params_serializer] aliases: bitable.appTableFieldGroup.create, bitable.v1.appTableFieldGroup.create
- bitable.appTableForm.get -> GET ${this.domain}/open-apis/bitable/v1/apps/:app_token/tables/:table_id/forms/:form_id [custom_params_serializer] aliases: bitable.appTableForm.get, bitable.v1.appTableForm.get
- bitable.appTableForm.patch -> PATCH ${this.domain}/open-apis/bitable/v1/apps/:app_token/tables/:table_id/forms/:form_id [custom_params_serializer] aliases: bitable.appTableForm.patch, bitable.v1.appTableForm.patch
- bitable.appTableForm.upgrade -> POST ${this.domain}/open-apis/bitable/v1/apps/:app_token/tables/:table_id/forms/:form_id/upgrade [custom_params_serializer] aliases: bitable.appTableForm.upgrade, bitable.v1.appTableForm.upgrade
- bitable.appTableFormField.list -> GET ${this.domain}/open-apis/bitable/v1/apps/:app_token/tables/:table_id/forms/:form_id/fields [custom_params_serializer] aliases: bitable.appTableFormField.list, bitable.v1.appTableFormField.list
- bitable.appTableFormField.listWithIterator -> GET ${this.domain}/open-apis/bitable/v1/apps/:app_token/tables/:table_id/forms/:form_id/fields [custom_params_serializer, iterator_helper] aliases: bitable.appTableFormField.listWithIterator, bitable.v1.appTableFormField.listWithIterator
- bitable.appTableFormField.patch -> PATCH ${this.domain}/open-apis/bitable/v1/apps/:app_token/tables/:table_id/forms/:form_id/fields/:field_id [custom_params_serializer] aliases: bitable.appTableFormField.patch, bitable.v1.appTableFormField.patch
- bitable.appTableRecord.batchCreate -> POST ${this.domain}/open-apis/bitable/v1/apps/:app_token/tables/:table_id/records/batch_create [custom_params_serializer] aliases: bitable.appTableRecord.batchCreate, bitable.v1.appTableRecord.batchCreate
- bitable.appTableRecord.batchDelete -> POST ${this.domain}/open-apis/bitable/v1/apps/:app_token/tables/:table_id/records/batch_delete [custom_params_serializer] aliases: bitable.appTableRecord.batchDelete, bitable.v1.appTableRecord.batchDelete
- bitable.appTableRecord.batchGet -> POST ${this.domain}/open-apis/bitable/v1/apps/:app_token/tables/:table_id/records/batch_get [custom_params_serializer] aliases: bitable.appTableRecord.batchGet, bitable.v1.appTableRecord.batchGet
- bitable.appTableRecord.batchUpdate -> POST ${this.domain}/open-apis/bitable/v1/apps/:app_token/tables/:table_id/records/batch_update [custom_params_serializer] aliases: bitable.appTableRecord.batchUpdate, bitable.v1.appTableRecord.batchUpdate
- bitable.appTableRecord.create -> POST ${this.domain}/open-apis/bitable/v1/apps/:app_token/tables/:table_id/records [custom_params_serializer] aliases: bitable.appTableRecord.create, bitable.v1.appTableRecord.create
- bitable.appTableRecord.delete -> DELETE ${this.domain}/open-apis/bitable/v1/apps/:app_token/tables/:table_id/records/:record_id [custom_params_serializer] aliases: bitable.appTableRecord.delete, bitable.v1.appTableRecord.delete
- bitable.appTableRecord.get -> GET ${this.domain}/open-apis/bitable/v1/apps/:app_token/tables/:table_id/records/:record_id [custom_params_serializer] aliases: bitable.appTableRecord.get, bitable.v1.appTableRecord.get
- bitable.appTableRecord.list -> GET ${this.domain}/open-apis/bitable/v1/apps/:app_token/tables/:table_id/records [custom_params_serializer] aliases: bitable.appTableRecord.list, bitable.v1.appTableRecord.list
- bitable.appTableRecord.listWithIterator -> GET ${this.domain}/open-apis/bitable/v1/apps/:app_token/tables/:table_id/records [custom_params_serializer, iterator_helper] aliases: bitable.appTableRecord.listWithIterator, bitable.v1.appTableRecord.listWithIterator
- bitable.appTableRecord.search -> POST ${this.domain}/open-apis/bitable/v1/apps/:app_token/tables/:table_id/records/search [custom_params_serializer] aliases: bitable.appTableRecord.search, bitable.v1.appTableRecord.search
- bitable.appTableRecord.searchWithIterator -> POST ${this.domain}/open-apis/bitable/v1/apps/:app_token/tables/:table_id/records/search [custom_params_serializer, iterator_helper] aliases: bitable.appTableRecord.searchWithIterator, bitable.v1.appTableRecord.searchWithIterator
- bitable.appTableRecord.update -> PUT ${this.domain}/open-apis/bitable/v1/apps/:app_token/tables/:table_id/records/:record_id [custom_params_serializer] aliases: bitable.appTableRecord.update, bitable.v1.appTableRecord.update
- bitable.appTableView.create -> POST ${this.domain}/open-apis/bitable/v1/apps/:app_token/tables/:table_id/views [custom_params_serializer] aliases: bitable.appTableView.create, bitable.v1.appTableView.create
- bitable.appTableView.delete -> DELETE ${this.domain}/open-apis/bitable/v1/apps/:app_token/tables/:table_id/views/:view_id [custom_params_serializer] aliases: bitable.appTableView.delete, bitable.v1.appTableView.delete
- bitable.appTableView.get -> GET ${this.domain}/open-apis/bitable/v1/apps/:app_token/tables/:table_id/views/:view_id [custom_params_serializer] aliases: bitable.appTableView.get, bitable.v1.appTableView.get
- bitable.appTableView.list -> GET ${this.domain}/open-apis/bitable/v1/apps/:app_token/tables/:table_id/views [custom_params_serializer] aliases: bitable.appTableView.list, bitable.v1.appTableView.list
- bitable.appTableView.listWithIterator -> GET ${this.domain}/open-apis/bitable/v1/apps/:app_token/tables/:table_id/views [custom_params_serializer, iterator_helper] aliases: bitable.appTableView.listWithIterator, bitable.v1.appTableView.listWithIterator
- bitable.appTableView.patch -> PATCH ${this.domain}/open-apis/bitable/v1/apps/:app_token/tables/:table_id/views/:view_id [custom_params_serializer] aliases: bitable.appTableView.patch, bitable.v1.appTableView.patch
- bitable.appWorkflow.list -> GET ${this.domain}/open-apis/bitable/v1/apps/:app_token/workflows [custom_params_serializer] aliases: bitable.appWorkflow.list, bitable.v1.appWorkflow.list
- bitable.appWorkflow.listWithIterator -> GET ${this.domain}/open-apis/bitable/v1/apps/:app_token/workflows [custom_params_serializer, iterator_helper] aliases: bitable.appWorkflow.listWithIterator, bitable.v1.appWorkflow.listWithIterator
- bitable.appWorkflow.update -> PUT ${this.domain}/open-apis/bitable/v1/apps/:app_token/workflows/:workflow_id [custom_params_serializer] aliases: bitable.appWorkflow.update, bitable.v1.appWorkflow.update

## Event Handles


