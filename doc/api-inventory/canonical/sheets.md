# sheets API Inventory

- Canonical methods: 27
- Event handles: 0

## Canonical Methods

- sheets.spreadsheet.create -> POST ${this.domain}/open-apis/sheets/v3/spreadsheets [custom_params_serializer] aliases: sheets.spreadsheet.create, sheets.v3.spreadsheet.create
- sheets.spreadsheet.get -> GET ${this.domain}/open-apis/sheets/v3/spreadsheets/:spreadsheet_token [custom_params_serializer] aliases: sheets.spreadsheet.get, sheets.v3.spreadsheet.get
- sheets.spreadsheet.patch -> PATCH ${this.domain}/open-apis/sheets/v3/spreadsheets/:spreadsheet_token [custom_params_serializer] aliases: sheets.spreadsheet.patch, sheets.v3.spreadsheet.patch
- sheets.spreadsheetSheet.find -> POST ${this.domain}/open-apis/sheets/v3/spreadsheets/:spreadsheet_token/sheets/:sheet_id/find [custom_params_serializer] aliases: sheets.spreadsheetSheet.find, sheets.v3.spreadsheetSheet.find
- sheets.spreadsheetSheet.get -> GET ${this.domain}/open-apis/sheets/v3/spreadsheets/:spreadsheet_token/sheets/:sheet_id [custom_params_serializer] aliases: sheets.spreadsheetSheet.get, sheets.v3.spreadsheetSheet.get
- sheets.spreadsheetSheet.moveDimension -> POST ${this.domain}/open-apis/sheets/v3/spreadsheets/:spreadsheet_token/sheets/:sheet_id/move_dimension [custom_params_serializer] aliases: sheets.spreadsheetSheet.moveDimension, sheets.v3.spreadsheetSheet.moveDimension
- sheets.spreadsheetSheet.query -> GET ${this.domain}/open-apis/sheets/v3/spreadsheets/:spreadsheet_token/sheets/query [custom_params_serializer] aliases: sheets.spreadsheetSheet.query, sheets.v3.spreadsheetSheet.query
- sheets.spreadsheetSheet.replace -> POST ${this.domain}/open-apis/sheets/v3/spreadsheets/:spreadsheet_token/sheets/:sheet_id/replace [custom_params_serializer] aliases: sheets.spreadsheetSheet.replace, sheets.v3.spreadsheetSheet.replace
- sheets.spreadsheetSheetFilter.create -> POST ${this.domain}/open-apis/sheets/v3/spreadsheets/:spreadsheet_token/sheets/:sheet_id/filter [custom_params_serializer] aliases: sheets.spreadsheetSheetFilter.create, sheets.v3.spreadsheetSheetFilter.create
- sheets.spreadsheetSheetFilter.delete -> DELETE ${this.domain}/open-apis/sheets/v3/spreadsheets/:spreadsheet_token/sheets/:sheet_id/filter [custom_params_serializer] aliases: sheets.spreadsheetSheetFilter.delete, sheets.v3.spreadsheetSheetFilter.delete
- sheets.spreadsheetSheetFilter.get -> GET ${this.domain}/open-apis/sheets/v3/spreadsheets/:spreadsheet_token/sheets/:sheet_id/filter [custom_params_serializer] aliases: sheets.spreadsheetSheetFilter.get, sheets.v3.spreadsheetSheetFilter.get
- sheets.spreadsheetSheetFilter.update -> PUT ${this.domain}/open-apis/sheets/v3/spreadsheets/:spreadsheet_token/sheets/:sheet_id/filter [custom_params_serializer] aliases: sheets.spreadsheetSheetFilter.update, sheets.v3.spreadsheetSheetFilter.update
- sheets.spreadsheetSheetFilterView.create -> POST ${this.domain}/open-apis/sheets/v3/spreadsheets/:spreadsheet_token/sheets/:sheet_id/filter_views [custom_params_serializer] aliases: sheets.spreadsheetSheetFilterView.create, sheets.v3.spreadsheetSheetFilterView.create
- sheets.spreadsheetSheetFilterView.delete -> DELETE ${this.domain}/open-apis/sheets/v3/spreadsheets/:spreadsheet_token/sheets/:sheet_id/filter_views/:filter_view_id [custom_params_serializer] aliases: sheets.spreadsheetSheetFilterView.delete, sheets.v3.spreadsheetSheetFilterView.delete
- sheets.spreadsheetSheetFilterView.get -> GET ${this.domain}/open-apis/sheets/v3/spreadsheets/:spreadsheet_token/sheets/:sheet_id/filter_views/:filter_view_id [custom_params_serializer] aliases: sheets.spreadsheetSheetFilterView.get, sheets.v3.spreadsheetSheetFilterView.get
- sheets.spreadsheetSheetFilterView.patch -> PATCH ${this.domain}/open-apis/sheets/v3/spreadsheets/:spreadsheet_token/sheets/:sheet_id/filter_views/:filter_view_id [custom_params_serializer] aliases: sheets.spreadsheetSheetFilterView.patch, sheets.v3.spreadsheetSheetFilterView.patch
- sheets.spreadsheetSheetFilterView.query -> GET ${this.domain}/open-apis/sheets/v3/spreadsheets/:spreadsheet_token/sheets/:sheet_id/filter_views/query [custom_params_serializer] aliases: sheets.spreadsheetSheetFilterView.query, sheets.v3.spreadsheetSheetFilterView.query
- sheets.spreadsheetSheetFilterViewCondition.create -> POST ${this.domain}/open-apis/sheets/v3/spreadsheets/:spreadsheet_token/sheets/:sheet_id/filter_views/:filter_view_id/conditions [custom_params_serializer] aliases: sheets.spreadsheetSheetFilterViewCondition.create, sheets.v3.spreadsheetSheetFilterViewCondition.create
- sheets.spreadsheetSheetFilterViewCondition.delete -> DELETE ${this.domain}/open-apis/sheets/v3/spreadsheets/:spreadsheet_token/sheets/:sheet_id/filter_views/:filter_view_id/conditions/:condition_id [custom_params_serializer] aliases: sheets.spreadsheetSheetFilterViewCondition.delete, sheets.v3.spreadsheetSheetFilterViewCondition.delete
- sheets.spreadsheetSheetFilterViewCondition.get -> GET ${this.domain}/open-apis/sheets/v3/spreadsheets/:spreadsheet_token/sheets/:sheet_id/filter_views/:filter_view_id/conditions/:condition_id [custom_params_serializer] aliases: sheets.spreadsheetSheetFilterViewCondition.get, sheets.v3.spreadsheetSheetFilterViewCondition.get
- sheets.spreadsheetSheetFilterViewCondition.query -> GET ${this.domain}/open-apis/sheets/v3/spreadsheets/:spreadsheet_token/sheets/:sheet_id/filter_views/:filter_view_id/conditions/query [custom_params_serializer] aliases: sheets.spreadsheetSheetFilterViewCondition.query, sheets.v3.spreadsheetSheetFilterViewCondition.query
- sheets.spreadsheetSheetFilterViewCondition.update -> PUT ${this.domain}/open-apis/sheets/v3/spreadsheets/:spreadsheet_token/sheets/:sheet_id/filter_views/:filter_view_id/conditions/:condition_id [custom_params_serializer] aliases: sheets.spreadsheetSheetFilterViewCondition.update, sheets.v3.spreadsheetSheetFilterViewCondition.update
- sheets.spreadsheetSheetFloatImage.create -> POST ${this.domain}/open-apis/sheets/v3/spreadsheets/:spreadsheet_token/sheets/:sheet_id/float_images [custom_params_serializer] aliases: sheets.spreadsheetSheetFloatImage.create, sheets.v3.spreadsheetSheetFloatImage.create
- sheets.spreadsheetSheetFloatImage.delete -> DELETE ${this.domain}/open-apis/sheets/v3/spreadsheets/:spreadsheet_token/sheets/:sheet_id/float_images/:float_image_id [custom_params_serializer] aliases: sheets.spreadsheetSheetFloatImage.delete, sheets.v3.spreadsheetSheetFloatImage.delete
- sheets.spreadsheetSheetFloatImage.get -> GET ${this.domain}/open-apis/sheets/v3/spreadsheets/:spreadsheet_token/sheets/:sheet_id/float_images/:float_image_id [custom_params_serializer] aliases: sheets.spreadsheetSheetFloatImage.get, sheets.v3.spreadsheetSheetFloatImage.get
- sheets.spreadsheetSheetFloatImage.patch -> PATCH ${this.domain}/open-apis/sheets/v3/spreadsheets/:spreadsheet_token/sheets/:sheet_id/float_images/:float_image_id [custom_params_serializer] aliases: sheets.spreadsheetSheetFloatImage.patch, sheets.v3.spreadsheetSheetFloatImage.patch
- sheets.spreadsheetSheetFloatImage.query -> GET ${this.domain}/open-apis/sheets/v3/spreadsheets/:spreadsheet_token/sheets/:sheet_id/float_images/query [custom_params_serializer] aliases: sheets.spreadsheetSheetFloatImage.query, sheets.v3.spreadsheetSheetFloatImage.query

## Event Handles


