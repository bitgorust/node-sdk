# aily Raw API Inventory

- Raw exported methods: 26

## Raw Exported Methods

- aily.v1.ailySession.create -> POST ${this.domain}/open-apis/aily/v1/sessions [custom_params_serializer]
- aily.v1.ailySession.delete -> DELETE ${this.domain}/open-apis/aily/v1/sessions/:aily_session_id [custom_params_serializer]
- aily.v1.ailySession.get -> GET ${this.domain}/open-apis/aily/v1/sessions/:aily_session_id [custom_params_serializer]
- aily.v1.ailySession.update -> PUT ${this.domain}/open-apis/aily/v1/sessions/:aily_session_id [custom_params_serializer]
- aily.v1.ailySessionAilyMessage.create -> POST ${this.domain}/open-apis/aily/v1/sessions/:aily_session_id/messages [custom_params_serializer]
- aily.v1.ailySessionAilyMessage.get -> GET ${this.domain}/open-apis/aily/v1/sessions/:aily_session_id/messages/:aily_message_id [custom_params_serializer]
- aily.v1.ailySessionAilyMessage.list -> GET ${this.domain}/open-apis/aily/v1/sessions/:aily_session_id/messages [custom_params_serializer]
- aily.v1.ailySessionAilyMessage.listWithIterator -> GET ${this.domain}/open-apis/aily/v1/sessions/:aily_session_id/messages [custom_params_serializer, iterator_helper]
- aily.v1.ailySessionRun.cancel -> POST ${this.domain}/open-apis/aily/v1/sessions/:aily_session_id/runs/:run_id/cancel [custom_params_serializer]
- aily.v1.ailySessionRun.create -> POST ${this.domain}/open-apis/aily/v1/sessions/:aily_session_id/runs [custom_params_serializer]
- aily.v1.ailySessionRun.get -> GET ${this.domain}/open-apis/aily/v1/sessions/:aily_session_id/runs/:run_id [custom_params_serializer]
- aily.v1.ailySessionRun.list -> GET ${this.domain}/open-apis/aily/v1/sessions/:aily_session_id/runs [custom_params_serializer]
- aily.v1.ailySessionRun.listWithIterator -> GET ${this.domain}/open-apis/aily/v1/sessions/:aily_session_id/runs [custom_params_serializer, iterator_helper]
- aily.v1.appDataAsset.create -> POST ${this.domain}/open-apis/aily/v1/apps/:app_id/data_assets [custom_params_serializer]
- aily.v1.appDataAsset.delete -> DELETE ${this.domain}/open-apis/aily/v1/apps/:app_id/data_assets/:data_asset_id [custom_params_serializer]
- aily.v1.appDataAsset.get -> GET ${this.domain}/open-apis/aily/v1/apps/:app_id/data_assets/:data_asset_id [custom_params_serializer]
- aily.v1.appDataAsset.list -> GET ${this.domain}/open-apis/aily/v1/apps/:app_id/data_assets [custom_params_serializer]
- aily.v1.appDataAsset.listWithIterator -> GET ${this.domain}/open-apis/aily/v1/apps/:app_id/data_assets [custom_params_serializer, iterator_helper]
- aily.v1.appDataAsset.uploadFile -> POST ${this.domain}/open-apis/aily/v1/apps/:app_id/data_assets/upload_file [custom_params_serializer]
- aily.v1.appDataAssetTag.list -> GET ${this.domain}/open-apis/aily/v1/apps/:app_id/data_asset_tags [custom_params_serializer]
- aily.v1.appDataAssetTag.listWithIterator -> GET ${this.domain}/open-apis/aily/v1/apps/:app_id/data_asset_tags [custom_params_serializer, iterator_helper]
- aily.v1.appKnowledge.ask -> POST ${this.domain}/open-apis/aily/v1/apps/:app_id/knowledges/ask [custom_params_serializer]
- aily.v1.appSkill.get -> GET ${this.domain}/open-apis/aily/v1/apps/:app_id/skills/:skill_id [custom_params_serializer]
- aily.v1.appSkill.list -> GET ${this.domain}/open-apis/aily/v1/apps/:app_id/skills [custom_params_serializer]
- aily.v1.appSkill.listWithIterator -> GET ${this.domain}/open-apis/aily/v1/apps/:app_id/skills [custom_params_serializer, iterator_helper]
- aily.v1.appSkill.start -> POST ${this.domain}/open-apis/aily/v1/apps/:app_id/skills/:skill_id/start [custom_params_serializer]

