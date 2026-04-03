# lingo Raw API Inventory

- Raw exported methods: 17

## Raw Exported Methods

- lingo.v1.classification.list -> GET ${this.domain}/open-apis/lingo/v1/classifications [custom_params_serializer]
- lingo.v1.classification.listWithIterator -> GET ${this.domain}/open-apis/lingo/v1/classifications [custom_params_serializer, iterator_helper]
- lingo.v1.draft.create -> POST ${this.domain}/open-apis/lingo/v1/drafts [custom_params_serializer]
- lingo.v1.draft.update -> PUT ${this.domain}/open-apis/lingo/v1/drafts/:draft_id [custom_params_serializer]
- lingo.v1.entity.create -> POST ${this.domain}/open-apis/lingo/v1/entities [custom_params_serializer]
- lingo.v1.entity.delete -> DELETE ${this.domain}/open-apis/lingo/v1/entities/:entity_id [custom_params_serializer]
- lingo.v1.entity.get -> GET ${this.domain}/open-apis/lingo/v1/entities/:entity_id [custom_params_serializer]
- lingo.v1.entity.highlight -> POST ${this.domain}/open-apis/lingo/v1/entities/highlight [custom_params_serializer]
- lingo.v1.entity.list -> GET ${this.domain}/open-apis/lingo/v1/entities [custom_params_serializer]
- lingo.v1.entity.listWithIterator -> GET ${this.domain}/open-apis/lingo/v1/entities [custom_params_serializer, iterator_helper]
- lingo.v1.entity.match -> POST ${this.domain}/open-apis/lingo/v1/entities/match [custom_params_serializer]
- lingo.v1.entity.search -> POST ${this.domain}/open-apis/lingo/v1/entities/search [custom_params_serializer]
- lingo.v1.entity.searchWithIterator -> POST ${this.domain}/open-apis/lingo/v1/entities/search [custom_params_serializer, iterator_helper]
- lingo.v1.entity.update -> PUT ${this.domain}/open-apis/lingo/v1/entities/:entity_id [custom_params_serializer]
- lingo.v1.file.download -> GET ${this.domain}/open-apis/lingo/v1/files/:file_token/download [custom_params_serializer, stream_response, write_file_helper, readable_stream_helper]
- lingo.v1.file.upload -> POST ${this.domain}/open-apis/lingo/v1/files/upload [custom_params_serializer]
- lingo.v1.repo.list -> GET ${this.domain}/open-apis/lingo/v1/repos [custom_params_serializer]

