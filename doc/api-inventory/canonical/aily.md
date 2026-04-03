# aily API Inventory

- Canonical methods: 26
- Event handles: 0

## Canonical Methods

- aily.ailySession.create -> POST ${this.domain}/open-apis/aily/v1/sessions [custom_params_serializer]
- aily.ailySession.delete -> DELETE ${this.domain}/open-apis/aily/v1/sessions/:aily_session_id [custom_params_serializer]
- aily.ailySession.get -> GET ${this.domain}/open-apis/aily/v1/sessions/:aily_session_id [custom_params_serializer]
- aily.ailySession.update -> PUT ${this.domain}/open-apis/aily/v1/sessions/:aily_session_id [custom_params_serializer]
- aily.ailySessionAilyMessage.create -> POST ${this.domain}/open-apis/aily/v1/sessions/:aily_session_id/messages [custom_params_serializer]
- aily.ailySessionAilyMessage.get -> GET ${this.domain}/open-apis/aily/v1/sessions/:aily_session_id/messages/:aily_message_id [custom_params_serializer]
- aily.ailySessionAilyMessage.list -> GET ${this.domain}/open-apis/aily/v1/sessions/:aily_session_id/messages [custom_params_serializer]
- aily.ailySessionAilyMessage.listWithIterator -> GET ${this.domain}/open-apis/aily/v1/sessions/:aily_session_id/messages [custom_params_serializer, iterator_helper]
- aily.ailySessionRun.cancel -> POST ${this.domain}/open-apis/aily/v1/sessions/:aily_session_id/runs/:run_id/cancel [custom_params_serializer]
- aily.ailySessionRun.create -> POST ${this.domain}/open-apis/aily/v1/sessions/:aily_session_id/runs [custom_params_serializer]
- aily.ailySessionRun.get -> GET ${this.domain}/open-apis/aily/v1/sessions/:aily_session_id/runs/:run_id [custom_params_serializer]
- aily.ailySessionRun.list -> GET ${this.domain}/open-apis/aily/v1/sessions/:aily_session_id/runs [custom_params_serializer]
- aily.ailySessionRun.listWithIterator -> GET ${this.domain}/open-apis/aily/v1/sessions/:aily_session_id/runs [custom_params_serializer, iterator_helper]
- aily.appDataAsset.create -> POST ${this.domain}/open-apis/aily/v1/apps/:app_id/data_assets [custom_params_serializer]
- aily.appDataAsset.delete -> DELETE ${this.domain}/open-apis/aily/v1/apps/:app_id/data_assets/:data_asset_id [custom_params_serializer]
- aily.appDataAsset.get -> GET ${this.domain}/open-apis/aily/v1/apps/:app_id/data_assets/:data_asset_id [custom_params_serializer]
- aily.appDataAsset.list -> GET ${this.domain}/open-apis/aily/v1/apps/:app_id/data_assets [custom_params_serializer]
- aily.appDataAsset.listWithIterator -> GET ${this.domain}/open-apis/aily/v1/apps/:app_id/data_assets [custom_params_serializer, iterator_helper]
- aily.appDataAsset.uploadFile -> POST ${this.domain}/open-apis/aily/v1/apps/:app_id/data_assets/upload_file [custom_params_serializer]
- aily.appDataAssetTag.list -> GET ${this.domain}/open-apis/aily/v1/apps/:app_id/data_asset_tags [custom_params_serializer]
- aily.appDataAssetTag.listWithIterator -> GET ${this.domain}/open-apis/aily/v1/apps/:app_id/data_asset_tags [custom_params_serializer, iterator_helper]
- aily.appKnowledge.ask -> POST ${this.domain}/open-apis/aily/v1/apps/:app_id/knowledges/ask [custom_params_serializer]
- aily.appSkill.get -> GET ${this.domain}/open-apis/aily/v1/apps/:app_id/skills/:skill_id [custom_params_serializer]
- aily.appSkill.list -> GET ${this.domain}/open-apis/aily/v1/apps/:app_id/skills [custom_params_serializer]
- aily.appSkill.listWithIterator -> GET ${this.domain}/open-apis/aily/v1/apps/:app_id/skills [custom_params_serializer, iterator_helper]
- aily.appSkill.start -> POST ${this.domain}/open-apis/aily/v1/apps/:app_id/skills/:skill_id/start [custom_params_serializer]

## Event Handles


