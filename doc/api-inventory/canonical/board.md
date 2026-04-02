# board API Inventory

- Canonical methods: 6
- Event handles: 0

## Canonical Methods

- board.whiteboard.downloadAsImage -> GET ${this.domain}/open-apis/board/v1/whiteboards/:whiteboard_id/download_as_image [custom_params_serializer, readable_stream_helper, stream_response, write_file_helper]
- board.whiteboard.theme -> GET ${this.domain}/open-apis/board/v1/whiteboards/:whiteboard_id/theme [custom_params_serializer]
- board.whiteboard.updateTheme -> POST ${this.domain}/open-apis/board/v1/whiteboards/:whiteboard_id/update_theme [custom_params_serializer]
- board.whiteboardNode.create -> POST ${this.domain}/open-apis/board/v1/whiteboards/:whiteboard_id/nodes [custom_params_serializer]
- board.whiteboardNode.createPlantuml -> POST ${this.domain}/open-apis/board/v1/whiteboards/:whiteboard_id/nodes/plantuml [custom_params_serializer]
- board.whiteboardNode.list -> GET ${this.domain}/open-apis/board/v1/whiteboards/:whiteboard_id/nodes [custom_params_serializer]

## Event Handles


