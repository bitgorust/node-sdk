# minutes API Inventory

- Canonical methods: 5
- Event handles: 0

## Canonical Methods

- minutes.minute.artifacts -> GET ${this.domain}/open-apis/minutes/v1/minutes/:minute_token/artifacts [custom_params_serializer]
- minutes.minute.get -> GET ${this.domain}/open-apis/minutes/v1/minutes/:minute_token [custom_params_serializer]
- minutes.minuteMedia.get -> GET ${this.domain}/open-apis/minutes/v1/minutes/:minute_token/media [custom_params_serializer]
- minutes.minuteStatistics.get -> GET ${this.domain}/open-apis/minutes/v1/minutes/:minute_token/statistics [custom_params_serializer]
- minutes.minuteTranscript.get -> GET ${this.domain}/open-apis/minutes/v1/minutes/:minute_token/transcript [custom_params_serializer, readable_stream_helper, stream_response, write_file_helper]

## Event Handles


