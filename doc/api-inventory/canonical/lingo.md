# lingo API Inventory

- Canonical methods: 17
- Event handles: 0

## Canonical Methods

- lingo.classification.list -> GET ${this.domain}/open-apis/lingo/v1/classifications [custom_params_serializer]
- lingo.classification.listWithIterator -> GET ${this.domain}/open-apis/lingo/v1/classifications [custom_params_serializer, iterator_helper]
- lingo.draft.create -> POST ${this.domain}/open-apis/lingo/v1/drafts [custom_params_serializer]
- lingo.draft.update -> PUT ${this.domain}/open-apis/lingo/v1/drafts/:draft_id [custom_params_serializer]
- lingo.entity.create -> POST ${this.domain}/open-apis/lingo/v1/entities [custom_params_serializer]
- lingo.entity.delete -> DELETE ${this.domain}/open-apis/lingo/v1/entities/:entity_id [custom_params_serializer]
- lingo.entity.get -> GET ${this.domain}/open-apis/lingo/v1/entities/:entity_id [custom_params_serializer]
- lingo.entity.highlight -> POST ${this.domain}/open-apis/lingo/v1/entities/highlight [custom_params_serializer]
- lingo.entity.list -> GET ${this.domain}/open-apis/lingo/v1/entities [custom_params_serializer]
- lingo.entity.listWithIterator -> GET ${this.domain}/open-apis/lingo/v1/entities [custom_params_serializer, iterator_helper]
- lingo.entity.match -> POST ${this.domain}/open-apis/lingo/v1/entities/match [custom_params_serializer]
- lingo.entity.search -> POST ${this.domain}/open-apis/lingo/v1/entities/search [custom_params_serializer]
- lingo.entity.searchWithIterator -> POST ${this.domain}/open-apis/lingo/v1/entities/search [custom_params_serializer, iterator_helper]
- lingo.entity.update -> PUT ${this.domain}/open-apis/lingo/v1/entities/:entity_id [custom_params_serializer]
- lingo.file.download -> GET ${this.domain}/open-apis/lingo/v1/files/:file_token/download [custom_params_serializer, readable_stream_helper, stream_response, write_file_helper]
- lingo.file.upload -> POST ${this.domain}/open-apis/lingo/v1/files/upload [custom_params_serializer]
- lingo.repo.list -> GET ${this.domain}/open-apis/lingo/v1/repos [custom_params_serializer]

## Event Handles


