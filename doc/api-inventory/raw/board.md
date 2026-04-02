# board Raw API Inventory

- Raw exported methods: 6

## Raw Exported Methods

- board.v1.whiteboard.downloadAsImage -> GET ${this.domain}/open-apis/board/v1/whiteboards/:whiteboard_id/download_as_image [custom_params_serializer, stream_response, write_file_helper, readable_stream_helper]
- board.v1.whiteboard.theme -> GET ${this.domain}/open-apis/board/v1/whiteboards/:whiteboard_id/theme [custom_params_serializer]
- board.v1.whiteboard.updateTheme -> POST ${this.domain}/open-apis/board/v1/whiteboards/:whiteboard_id/update_theme [custom_params_serializer]
- board.v1.whiteboardNode.create -> POST ${this.domain}/open-apis/board/v1/whiteboards/:whiteboard_id/nodes [custom_params_serializer]
- board.v1.whiteboardNode.createPlantuml -> POST ${this.domain}/open-apis/board/v1/whiteboards/:whiteboard_id/nodes/plantuml [custom_params_serializer]
- board.v1.whiteboardNode.list -> GET ${this.domain}/open-apis/board/v1/whiteboards/:whiteboard_id/nodes [custom_params_serializer]

