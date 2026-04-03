# admin API Inventory

- Canonical methods: 17
- Event handles: 0

## Canonical Methods

- admin.adminDeptStat.list -> GET ${this.domain}/open-apis/admin/v1/admin_dept_stats [custom_params_serializer] aliases: admin.adminDeptStat.list, admin.v1.adminDeptStat.list
- admin.adminUserStat.list -> GET ${this.domain}/open-apis/admin/v1/admin_user_stats [custom_params_serializer] aliases: admin.adminUserStat.list, admin.v1.adminUserStat.list
- admin.auditInfo.list -> GET ${this.domain}/open-apis/admin/v1/audit_infos [custom_params_serializer] aliases: admin.auditInfo.list, admin.v1.auditInfo.list
- admin.auditInfo.listWithIterator -> GET ${this.domain}/open-apis/admin/v1/audit_infos [custom_params_serializer, iterator_helper] aliases: admin.auditInfo.listWithIterator, admin.v1.auditInfo.listWithIterator
- admin.badge.create -> POST ${this.domain}/open-apis/admin/v1/badges [custom_params_serializer] aliases: admin.badge.create, admin.v1.badge.create
- admin.badge.get -> GET ${this.domain}/open-apis/admin/v1/badges/:badge_id [custom_params_serializer] aliases: admin.badge.get, admin.v1.badge.get
- admin.badge.list -> GET ${this.domain}/open-apis/admin/v1/badges [custom_params_serializer] aliases: admin.badge.list, admin.v1.badge.list
- admin.badge.listWithIterator -> GET ${this.domain}/open-apis/admin/v1/badges [custom_params_serializer, iterator_helper] aliases: admin.badge.listWithIterator, admin.v1.badge.listWithIterator
- admin.badge.update -> PUT ${this.domain}/open-apis/admin/v1/badges/:badge_id [custom_params_serializer] aliases: admin.badge.update, admin.v1.badge.update
- admin.badgeGrant.create -> POST ${this.domain}/open-apis/admin/v1/badges/:badge_id/grants [custom_params_serializer] aliases: admin.badgeGrant.create, admin.v1.badgeGrant.create
- admin.badgeGrant.delete -> DELETE ${this.domain}/open-apis/admin/v1/badges/:badge_id/grants/:grant_id [custom_params_serializer] aliases: admin.badgeGrant.delete, admin.v1.badgeGrant.delete
- admin.badgeGrant.get -> GET ${this.domain}/open-apis/admin/v1/badges/:badge_id/grants/:grant_id [custom_params_serializer] aliases: admin.badgeGrant.get, admin.v1.badgeGrant.get
- admin.badgeGrant.list -> GET ${this.domain}/open-apis/admin/v1/badges/:badge_id/grants [custom_params_serializer] aliases: admin.badgeGrant.list, admin.v1.badgeGrant.list
- admin.badgeGrant.listWithIterator -> GET ${this.domain}/open-apis/admin/v1/badges/:badge_id/grants [custom_params_serializer, iterator_helper] aliases: admin.badgeGrant.listWithIterator, admin.v1.badgeGrant.listWithIterator
- admin.badgeGrant.update -> PUT ${this.domain}/open-apis/admin/v1/badges/:badge_id/grants/:grant_id [custom_params_serializer] aliases: admin.badgeGrant.update, admin.v1.badgeGrant.update
- admin.badgeImage.create -> POST ${this.domain}/open-apis/admin/v1/badge_images [custom_params_serializer] aliases: admin.badgeImage.create, admin.v1.badgeImage.create
- admin.password.reset -> POST ${this.domain}/open-apis/admin/v1/password/reset [custom_params_serializer] aliases: admin.password.reset, admin.v1.password.reset

## Event Handles


