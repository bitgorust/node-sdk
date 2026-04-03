# wiki API Inventory

- Canonical methods: 19
- Event handles: 0

## Canonical Methods

- wiki.node.search -> POST ${this.domain}/open-apis/wiki/v1/nodes/search [custom_params_serializer]
- wiki.node.searchWithIterator -> POST ${this.domain}/open-apis/wiki/v1/nodes/search [custom_params_serializer, iterator_helper]
- wiki.space.create -> POST ${this.domain}/open-apis/wiki/v2/spaces [custom_params_serializer] aliases: wiki.space.create, wiki.v2.space.create
- wiki.space.get -> GET ${this.domain}/open-apis/wiki/v2/spaces/:space_id [custom_params_serializer] aliases: wiki.space.get, wiki.v2.space.get
- wiki.space.getNode -> GET ${this.domain}/open-apis/wiki/v2/spaces/get_node [custom_params_serializer] aliases: wiki.space.getNode, wiki.v2.space.getNode
- wiki.space.list -> GET ${this.domain}/open-apis/wiki/v2/spaces [custom_params_serializer] aliases: wiki.space.list, wiki.v2.space.list
- wiki.space.listWithIterator -> GET ${this.domain}/open-apis/wiki/v2/spaces [custom_params_serializer, iterator_helper] aliases: wiki.space.listWithIterator, wiki.v2.space.listWithIterator
- wiki.spaceMember.create -> POST ${this.domain}/open-apis/wiki/v2/spaces/:space_id/members [custom_params_serializer] aliases: wiki.spaceMember.create, wiki.v2.spaceMember.create
- wiki.spaceMember.delete -> DELETE ${this.domain}/open-apis/wiki/v2/spaces/:space_id/members/:member_id [custom_params_serializer] aliases: wiki.spaceMember.delete, wiki.v2.spaceMember.delete
- wiki.spaceMember.list -> GET ${this.domain}/open-apis/wiki/v2/spaces/:space_id/members [custom_params_serializer] aliases: wiki.spaceMember.list, wiki.v2.spaceMember.list
- wiki.spaceNode.copy -> POST ${this.domain}/open-apis/wiki/v2/spaces/:space_id/nodes/:node_token/copy [custom_params_serializer] aliases: wiki.spaceNode.copy, wiki.v2.spaceNode.copy
- wiki.spaceNode.create -> POST ${this.domain}/open-apis/wiki/v2/spaces/:space_id/nodes [custom_params_serializer] aliases: wiki.spaceNode.create, wiki.v2.spaceNode.create
- wiki.spaceNode.list -> GET ${this.domain}/open-apis/wiki/v2/spaces/:space_id/nodes [custom_params_serializer] aliases: wiki.spaceNode.list, wiki.v2.spaceNode.list
- wiki.spaceNode.listWithIterator -> GET ${this.domain}/open-apis/wiki/v2/spaces/:space_id/nodes [custom_params_serializer, iterator_helper] aliases: wiki.spaceNode.listWithIterator, wiki.v2.spaceNode.listWithIterator
- wiki.spaceNode.move -> POST ${this.domain}/open-apis/wiki/v2/spaces/:space_id/nodes/:node_token/move [custom_params_serializer] aliases: wiki.spaceNode.move, wiki.v2.spaceNode.move
- wiki.spaceNode.moveDocsToWiki -> POST ${this.domain}/open-apis/wiki/v2/spaces/:space_id/nodes/move_docs_to_wiki [custom_params_serializer] aliases: wiki.spaceNode.moveDocsToWiki, wiki.v2.spaceNode.moveDocsToWiki
- wiki.spaceNode.updateTitle -> POST ${this.domain}/open-apis/wiki/v2/spaces/:space_id/nodes/:node_token/update_title [custom_params_serializer] aliases: wiki.spaceNode.updateTitle, wiki.v2.spaceNode.updateTitle
- wiki.spaceSetting.update -> PUT ${this.domain}/open-apis/wiki/v2/spaces/:space_id/setting [custom_params_serializer] aliases: wiki.spaceSetting.update, wiki.v2.spaceSetting.update
- wiki.task.get -> GET ${this.domain}/open-apis/wiki/v2/tasks/:task_id [custom_params_serializer] aliases: wiki.task.get, wiki.v2.task.get

## Event Handles


