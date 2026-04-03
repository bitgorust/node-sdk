# cardkit API Inventory

- Canonical methods: 10
- Event handles: 0

## Canonical Methods

- cardkit.card.batchUpdate -> POST ${this.domain}/open-apis/cardkit/v1/cards/:card_id/batch_update [custom_params_serializer]
- cardkit.card.create -> POST ${this.domain}/open-apis/cardkit/v1/cards [custom_params_serializer]
- cardkit.card.idConvert -> POST ${this.domain}/open-apis/cardkit/v1/cards/id_convert [custom_params_serializer]
- cardkit.card.settings -> PATCH ${this.domain}/open-apis/cardkit/v1/cards/:card_id/settings [custom_params_serializer]
- cardkit.card.update -> PUT ${this.domain}/open-apis/cardkit/v1/cards/:card_id [custom_params_serializer]
- cardkit.cardElement.content -> PUT ${this.domain}/open-apis/cardkit/v1/cards/:card_id/elements/:element_id/content [custom_params_serializer]
- cardkit.cardElement.create -> POST ${this.domain}/open-apis/cardkit/v1/cards/:card_id/elements [custom_params_serializer]
- cardkit.cardElement.delete -> DELETE ${this.domain}/open-apis/cardkit/v1/cards/:card_id/elements/:element_id [custom_params_serializer]
- cardkit.cardElement.patch -> PATCH ${this.domain}/open-apis/cardkit/v1/cards/:card_id/elements/:element_id [custom_params_serializer]
- cardkit.cardElement.update -> PUT ${this.domain}/open-apis/cardkit/v1/cards/:card_id/elements/:element_id [custom_params_serializer]

## Event Handles


