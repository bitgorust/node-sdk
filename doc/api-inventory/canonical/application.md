# application API Inventory

- Canonical methods: 29
- Event handles: 8

## Canonical Methods

- application.appBadge.set -> POST ${this.domain}/open-apis/application/v6/app_badge/set [custom_params_serializer] aliases: application.appBadge.set, application.v6.appBadge.set
- application.application.contactsRangeConfiguration -> GET ${this.domain}/open-apis/application/v6/applications/:app_id/contacts_range_configuration [custom_params_serializer] aliases: application.application.contactsRangeConfiguration, application.v6.application.contactsRangeConfiguration
- application.application.get -> GET ${this.domain}/open-apis/application/v6/applications/:app_id [custom_params_serializer] aliases: application.application.get, application.v6.application.get
- application.application.list -> GET ${this.domain}/open-apis/application/v6/applications [custom_params_serializer] aliases: application.application.list, application.v6.application.list
- application.application.listWithIterator -> GET ${this.domain}/open-apis/application/v6/applications [custom_params_serializer, iterator_helper] aliases: application.application.listWithIterator, application.v6.application.listWithIterator
- application.application.patch -> PATCH ${this.domain}/open-apis/application/v6/applications/:app_id [custom_params_serializer] aliases: application.application.patch, application.v6.application.patch
- application.application.underauditlist -> GET ${this.domain}/open-apis/application/v6/applications/underauditlist [custom_params_serializer] aliases: application.application.underauditlist, application.v6.application.underauditlist
- application.application.underauditlistWithIterator -> GET ${this.domain}/open-apis/application/v6/applications/underauditlist [custom_params_serializer, iterator_helper] aliases: application.application.underauditlistWithIterator, application.v6.application.underauditlistWithIterator
- application.applicationAppUsage.departmentOverview -> POST ${this.domain}/open-apis/application/v6/applications/:app_id/app_usage/department_overview [custom_params_serializer] aliases: application.applicationAppUsage.departmentOverview, application.v6.applicationAppUsage.departmentOverview
- application.applicationAppUsage.messagePushOverview -> POST ${this.domain}/open-apis/application/v6/applications/:app_id/app_usage/message_push_overview [custom_params_serializer] aliases: application.applicationAppUsage.messagePushOverview, application.v6.applicationAppUsage.messagePushOverview
- application.applicationAppUsage.overview -> POST ${this.domain}/open-apis/application/v6/applications/:app_id/app_usage/overview [custom_params_serializer] aliases: application.applicationAppUsage.overview, application.v6.applicationAppUsage.overview
- application.applicationAppVersion.contactsRangeSuggest -> GET ${this.domain}/open-apis/application/v6/applications/:app_id/app_versions/:version_id/contacts_range_suggest [custom_params_serializer] aliases: application.applicationAppVersion.contactsRangeSuggest, application.v6.applicationAppVersion.contactsRangeSuggest
- application.applicationAppVersion.get -> GET ${this.domain}/open-apis/application/v6/applications/:app_id/app_versions/:version_id [custom_params_serializer] aliases: application.applicationAppVersion.get, application.v6.applicationAppVersion.get
- application.applicationAppVersion.list -> GET ${this.domain}/open-apis/application/v6/applications/:app_id/app_versions [custom_params_serializer] aliases: application.applicationAppVersion.list, application.v6.applicationAppVersion.list
- application.applicationAppVersion.listWithIterator -> GET ${this.domain}/open-apis/application/v6/applications/:app_id/app_versions [custom_params_serializer, iterator_helper] aliases: application.applicationAppVersion.listWithIterator, application.v6.applicationAppVersion.listWithIterator
- application.applicationAppVersion.patch -> PATCH ${this.domain}/open-apis/application/v6/applications/:app_id/app_versions/:version_id [custom_params_serializer] aliases: application.applicationAppVersion.patch, application.v6.applicationAppVersion.patch
- application.applicationCollaborators.get -> GET ${this.domain}/open-apis/application/v6/applications/:app_id/collaborators [custom_params_serializer] aliases: application.applicationCollaborators.get, application.v6.applicationCollaborators.get
- application.applicationCollaborators.update -> PUT ${this.domain}/open-apis/application/v6/applications/:app_id/collaborators [custom_params_serializer] aliases: application.applicationCollaborators.update, application.v6.applicationCollaborators.update
- application.applicationContactsRange.patch -> PATCH ${this.domain}/open-apis/application/v6/applications/:app_id/contacts_range [custom_params_serializer] aliases: application.applicationContactsRange.patch, application.v6.applicationContactsRange.patch
- application.applicationFeedback.list -> GET ${this.domain}/open-apis/application/v6/applications/:app_id/feedbacks [custom_params_serializer] aliases: application.applicationFeedback.list, application.v6.applicationFeedback.list
- application.applicationFeedback.patch -> PATCH ${this.domain}/open-apis/application/v6/applications/:app_id/feedbacks/:feedback_id [custom_params_serializer] aliases: application.applicationFeedback.patch, application.v6.applicationFeedback.patch
- application.applicationManagement.update -> PUT ${this.domain}/open-apis/application/v6/applications/:app_id/management [custom_params_serializer] aliases: application.applicationManagement.update, application.v6.applicationManagement.update
- application.applicationOwner.update -> PUT ${this.domain}/open-apis/application/v6/applications/:app_id/owner [custom_params_serializer] aliases: application.applicationOwner.update, application.v6.applicationOwner.update
- application.applicationVisibility.checkWhiteBlackList -> POST ${this.domain}/open-apis/application/v6/applications/:app_id/visibility/check_white_black_list [custom_params_serializer] aliases: application.applicationVisibility.checkWhiteBlackList, application.v6.applicationVisibility.checkWhiteBlackList
- application.applicationVisibility.patch -> PATCH ${this.domain}/open-apis/application/v6/applications/:app_id/visibility [custom_params_serializer] aliases: application.applicationVisibility.patch, application.v6.applicationVisibility.patch
- application.appRecommendRule.list -> GET ${this.domain}/open-apis/application/v6/app_recommend_rules [custom_params_serializer] aliases: application.appRecommendRule.list, application.v6.appRecommendRule.list
- application.appRecommendRule.listWithIterator -> GET ${this.domain}/open-apis/application/v6/app_recommend_rules [custom_params_serializer, iterator_helper] aliases: application.appRecommendRule.listWithIterator, application.v6.appRecommendRule.listWithIterator
- application.scope.apply -> POST ${this.domain}/open-apis/application/v6/scopes/apply [custom_params_serializer] aliases: application.scope.apply, application.v6.scope.apply
- application.scope.list -> GET ${this.domain}/open-apis/application/v6/scopes [custom_params_serializer] aliases: application.scope.list, application.v6.scope.list

## Event Handles

- application.application.app_version.audit_v6
- application.application.app_version.publish_apply_v6
- application.application.app_version.publish_revoke_v6
- application.application.created_v6
- application.application.feedback.created_v6
- application.application.feedback.updated_v6
- application.application.visibility.added_v6
- application.bot.menu_v6

