# baike API Inventory

- Canonical methods: 16
- Event handles: 0

## Canonical Methods

- baike.classification.list -> GET ${this.domain}/open-apis/baike/v1/classifications [custom_params_serializer] aliases: baike.classification.list, baike.v1.classification.list
- baike.classification.listWithIterator -> GET ${this.domain}/open-apis/baike/v1/classifications [custom_params_serializer, iterator_helper] aliases: baike.classification.listWithIterator, baike.v1.classification.listWithIterator
- baike.draft.create -> POST ${this.domain}/open-apis/baike/v1/drafts [custom_params_serializer] aliases: baike.draft.create, baike.v1.draft.create
- baike.draft.update -> PUT ${this.domain}/open-apis/baike/v1/drafts/:draft_id [custom_params_serializer] aliases: baike.draft.update, baike.v1.draft.update
- baike.entity.create -> POST ${this.domain}/open-apis/baike/v1/entities [custom_params_serializer] aliases: baike.entity.create, baike.v1.entity.create
- baike.entity.extract -> POST ${this.domain}/open-apis/baike/v1/entities/extract [custom_params_serializer] aliases: baike.entity.extract, baike.v1.entity.extract
- baike.entity.get -> GET ${this.domain}/open-apis/baike/v1/entities/:entity_id [custom_params_serializer] aliases: baike.entity.get, baike.v1.entity.get
- baike.entity.highlight -> POST ${this.domain}/open-apis/baike/v1/entities/highlight [custom_params_serializer] aliases: baike.entity.highlight, baike.v1.entity.highlight
- baike.entity.list -> GET ${this.domain}/open-apis/baike/v1/entities [custom_params_serializer] aliases: baike.entity.list, baike.v1.entity.list
- baike.entity.listWithIterator -> GET ${this.domain}/open-apis/baike/v1/entities [custom_params_serializer, iterator_helper] aliases: baike.entity.listWithIterator, baike.v1.entity.listWithIterator
- baike.entity.match -> POST ${this.domain}/open-apis/baike/v1/entities/match [custom_params_serializer] aliases: baike.entity.match, baike.v1.entity.match
- baike.entity.search -> POST ${this.domain}/open-apis/baike/v1/entities/search [custom_params_serializer] aliases: baike.entity.search, baike.v1.entity.search
- baike.entity.searchWithIterator -> POST ${this.domain}/open-apis/baike/v1/entities/search [custom_params_serializer, iterator_helper] aliases: baike.entity.searchWithIterator, baike.v1.entity.searchWithIterator
- baike.entity.update -> PUT ${this.domain}/open-apis/baike/v1/entities/:entity_id [custom_params_serializer] aliases: baike.entity.update, baike.v1.entity.update
- baike.file.download -> GET ${this.domain}/open-apis/baike/v1/files/:file_token/download [custom_params_serializer, readable_stream_helper, stream_response, write_file_helper] aliases: baike.file.download, baike.v1.file.download
- baike.file.upload -> POST ${this.domain}/open-apis/baike/v1/files/upload [custom_params_serializer] aliases: baike.file.upload, baike.v1.file.upload

## Event Handles


