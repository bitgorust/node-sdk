# helpdesk API Inventory

- Canonical methods: 53
- Event handles: 4

## Canonical Methods

- helpdesk.agent.agentEmail -> GET ${this.domain}/open-apis/helpdesk/v1/agent_emails [custom_params_serializer] aliases: helpdesk.agent.agentEmail, helpdesk.v1.agent.agentEmail
- helpdesk.agent.patch -> PATCH ${this.domain}/open-apis/helpdesk/v1/agents/:agent_id [custom_params_serializer] aliases: helpdesk.agent.patch, helpdesk.v1.agent.patch
- helpdesk.agentSchedule.create -> POST ${this.domain}/open-apis/helpdesk/v1/agent_schedules [custom_params_serializer] aliases: helpdesk.agentSchedule.create, helpdesk.v1.agentSchedule.create
- helpdesk.agentSchedule.list -> GET ${this.domain}/open-apis/helpdesk/v1/agent_schedules [custom_params_serializer] aliases: helpdesk.agentSchedule.list, helpdesk.v1.agentSchedule.list
- helpdesk.agentSchedules.delete -> DELETE ${this.domain}/open-apis/helpdesk/v1/agents/:agent_id/schedules [custom_params_serializer] aliases: helpdesk.agentSchedules.delete, helpdesk.v1.agentSchedules.delete
- helpdesk.agentSchedules.get -> GET ${this.domain}/open-apis/helpdesk/v1/agents/:agent_id/schedules [custom_params_serializer] aliases: helpdesk.agentSchedules.get, helpdesk.v1.agentSchedules.get
- helpdesk.agentSchedules.patch -> PATCH ${this.domain}/open-apis/helpdesk/v1/agents/:agent_id/schedules [custom_params_serializer] aliases: helpdesk.agentSchedules.patch, helpdesk.v1.agentSchedules.patch
- helpdesk.agentSkill.create -> POST ${this.domain}/open-apis/helpdesk/v1/agent_skills [custom_params_serializer] aliases: helpdesk.agentSkill.create, helpdesk.v1.agentSkill.create
- helpdesk.agentSkill.delete -> DELETE ${this.domain}/open-apis/helpdesk/v1/agent_skills/:agent_skill_id [custom_params_serializer] aliases: helpdesk.agentSkill.delete, helpdesk.v1.agentSkill.delete
- helpdesk.agentSkill.get -> GET ${this.domain}/open-apis/helpdesk/v1/agent_skills/:agent_skill_id [custom_params_serializer] aliases: helpdesk.agentSkill.get, helpdesk.v1.agentSkill.get
- helpdesk.agentSkill.list -> GET ${this.domain}/open-apis/helpdesk/v1/agent_skills [custom_params_serializer] aliases: helpdesk.agentSkill.list, helpdesk.v1.agentSkill.list
- helpdesk.agentSkill.patch -> PATCH ${this.domain}/open-apis/helpdesk/v1/agent_skills/:agent_skill_id [custom_params_serializer] aliases: helpdesk.agentSkill.patch, helpdesk.v1.agentSkill.patch
- helpdesk.agentSkillRule.list -> GET ${this.domain}/open-apis/helpdesk/v1/agent_skill_rules [custom_params_serializer] aliases: helpdesk.agentSkillRule.list, helpdesk.v1.agentSkillRule.list
- helpdesk.botMessage.create -> POST ${this.domain}/open-apis/helpdesk/v1/message [custom_params_serializer] aliases: helpdesk.botMessage.create, helpdesk.v1.botMessage.create
- helpdesk.category.create -> POST ${this.domain}/open-apis/helpdesk/v1/categories [custom_params_serializer] aliases: helpdesk.category.create, helpdesk.v1.category.create
- helpdesk.category.delete -> DELETE ${this.domain}/open-apis/helpdesk/v1/categories/:id [custom_params_serializer] aliases: helpdesk.category.delete, helpdesk.v1.category.delete
- helpdesk.category.get -> GET ${this.domain}/open-apis/helpdesk/v1/categories/:id [custom_params_serializer] aliases: helpdesk.category.get, helpdesk.v1.category.get
- helpdesk.category.list -> GET ${this.domain}/open-apis/helpdesk/v1/categories [custom_params_serializer] aliases: helpdesk.category.list, helpdesk.v1.category.list
- helpdesk.category.patch -> PATCH ${this.domain}/open-apis/helpdesk/v1/categories/:id [custom_params_serializer] aliases: helpdesk.category.patch, helpdesk.v1.category.patch
- helpdesk.event.subscribe -> POST ${this.domain}/open-apis/helpdesk/v1/events/subscribe [custom_params_serializer] aliases: helpdesk.event.subscribe, helpdesk.v1.event.subscribe
- helpdesk.event.unsubscribe -> POST ${this.domain}/open-apis/helpdesk/v1/events/unsubscribe [custom_params_serializer] aliases: helpdesk.event.unsubscribe, helpdesk.v1.event.unsubscribe
- helpdesk.faq.create -> POST ${this.domain}/open-apis/helpdesk/v1/faqs [custom_params_serializer] aliases: helpdesk.faq.create, helpdesk.v1.faq.create
- helpdesk.faq.delete -> DELETE ${this.domain}/open-apis/helpdesk/v1/faqs/:id [custom_params_serializer] aliases: helpdesk.faq.delete, helpdesk.v1.faq.delete
- helpdesk.faq.faqImage -> GET ${this.domain}/open-apis/helpdesk/v1/faqs/:id/image/:image_key [custom_params_serializer, readable_stream_helper, stream_response, write_file_helper] aliases: helpdesk.faq.faqImage, helpdesk.v1.faq.faqImage
- helpdesk.faq.get -> GET ${this.domain}/open-apis/helpdesk/v1/faqs/:id [custom_params_serializer] aliases: helpdesk.faq.get, helpdesk.v1.faq.get
- helpdesk.faq.list -> GET ${this.domain}/open-apis/helpdesk/v1/faqs [custom_params_serializer] aliases: helpdesk.faq.list, helpdesk.v1.faq.list
- helpdesk.faq.listWithIterator -> GET ${this.domain}/open-apis/helpdesk/v1/faqs [custom_params_serializer, iterator_helper] aliases: helpdesk.faq.listWithIterator, helpdesk.v1.faq.listWithIterator
- helpdesk.faq.patch -> PATCH ${this.domain}/open-apis/helpdesk/v1/faqs/:id [custom_params_serializer] aliases: helpdesk.faq.patch, helpdesk.v1.faq.patch
- helpdesk.faq.search -> GET ${this.domain}/open-apis/helpdesk/v1/faqs/search [custom_params_serializer] aliases: helpdesk.faq.search, helpdesk.v1.faq.search
- helpdesk.faq.searchWithIterator -> GET ${this.domain}/open-apis/helpdesk/v1/faqs/search [custom_params_serializer, iterator_helper] aliases: helpdesk.faq.searchWithIterator, helpdesk.v1.faq.searchWithIterator
- helpdesk.notification.cancelApprove -> POST ${this.domain}/open-apis/helpdesk/v1/notifications/:notification_id/cancel_approve [custom_params_serializer] aliases: helpdesk.notification.cancelApprove, helpdesk.v1.notification.cancelApprove
- helpdesk.notification.cancelSend -> POST ${this.domain}/open-apis/helpdesk/v1/notifications/:notification_id/cancel_send [custom_params_serializer] aliases: helpdesk.notification.cancelSend, helpdesk.v1.notification.cancelSend
- helpdesk.notification.create -> POST ${this.domain}/open-apis/helpdesk/v1/notifications [custom_params_serializer] aliases: helpdesk.notification.create, helpdesk.v1.notification.create
- helpdesk.notification.executeSend -> POST ${this.domain}/open-apis/helpdesk/v1/notifications/:notification_id/execute_send [custom_params_serializer] aliases: helpdesk.notification.executeSend, helpdesk.v1.notification.executeSend
- helpdesk.notification.get -> GET ${this.domain}/open-apis/helpdesk/v1/notifications/:notification_id [custom_params_serializer] aliases: helpdesk.notification.get, helpdesk.v1.notification.get
- helpdesk.notification.patch -> PATCH ${this.domain}/open-apis/helpdesk/v1/notifications/:notification_id [custom_params_serializer] aliases: helpdesk.notification.patch, helpdesk.v1.notification.patch
- helpdesk.notification.preview -> POST ${this.domain}/open-apis/helpdesk/v1/notifications/:notification_id/preview [custom_params_serializer] aliases: helpdesk.notification.preview, helpdesk.v1.notification.preview
- helpdesk.notification.submitApprove -> POST ${this.domain}/open-apis/helpdesk/v1/notifications/:notification_id/submit_approve [custom_params_serializer] aliases: helpdesk.notification.submitApprove, helpdesk.v1.notification.submitApprove
- helpdesk.ticket.answerUserQuery -> POST ${this.domain}/open-apis/helpdesk/v1/tickets/:ticket_id/answer_user_query [custom_params_serializer] aliases: helpdesk.ticket.answerUserQuery, helpdesk.v1.ticket.answerUserQuery
- helpdesk.ticket.customizedFields -> GET ${this.domain}/open-apis/helpdesk/v1/customized_fields [custom_params_serializer] aliases: helpdesk.ticket.customizedFields, helpdesk.v1.ticket.customizedFields
- helpdesk.ticket.get -> GET ${this.domain}/open-apis/helpdesk/v1/tickets/:ticket_id [custom_params_serializer] aliases: helpdesk.ticket.get, helpdesk.v1.ticket.get
- helpdesk.ticket.list -> GET ${this.domain}/open-apis/helpdesk/v1/tickets [custom_params_serializer] aliases: helpdesk.ticket.list, helpdesk.v1.ticket.list
- helpdesk.ticket.startService -> POST ${this.domain}/open-apis/helpdesk/v1/start_service [custom_params_serializer] aliases: helpdesk.ticket.startService, helpdesk.v1.ticket.startService
- helpdesk.ticket.ticketImage -> GET ${this.domain}/open-apis/helpdesk/v1/ticket_images [custom_params_serializer, readable_stream_helper, stream_response, write_file_helper] aliases: helpdesk.ticket.ticketImage, helpdesk.v1.ticket.ticketImage
- helpdesk.ticket.update -> PUT ${this.domain}/open-apis/helpdesk/v1/tickets/:ticket_id [custom_params_serializer] aliases: helpdesk.ticket.update, helpdesk.v1.ticket.update
- helpdesk.ticketCustomizedField.create -> POST ${this.domain}/open-apis/helpdesk/v1/ticket_customized_fields [custom_params_serializer] aliases: helpdesk.ticketCustomizedField.create, helpdesk.v1.ticketCustomizedField.create
- helpdesk.ticketCustomizedField.delete -> DELETE ${this.domain}/open-apis/helpdesk/v1/ticket_customized_fields/:ticket_customized_field_id [custom_params_serializer] aliases: helpdesk.ticketCustomizedField.delete, helpdesk.v1.ticketCustomizedField.delete
- helpdesk.ticketCustomizedField.get -> GET ${this.domain}/open-apis/helpdesk/v1/ticket_customized_fields/:ticket_customized_field_id [custom_params_serializer] aliases: helpdesk.ticketCustomizedField.get, helpdesk.v1.ticketCustomizedField.get
- helpdesk.ticketCustomizedField.list -> GET ${this.domain}/open-apis/helpdesk/v1/ticket_customized_fields [custom_params_serializer] aliases: helpdesk.ticketCustomizedField.list, helpdesk.v1.ticketCustomizedField.list
- helpdesk.ticketCustomizedField.listWithIterator -> GET ${this.domain}/open-apis/helpdesk/v1/ticket_customized_fields [custom_params_serializer, iterator_helper] aliases: helpdesk.ticketCustomizedField.listWithIterator, helpdesk.v1.ticketCustomizedField.listWithIterator
- helpdesk.ticketCustomizedField.patch -> PATCH ${this.domain}/open-apis/helpdesk/v1/ticket_customized_fields/:ticket_customized_field_id [custom_params_serializer] aliases: helpdesk.ticketCustomizedField.patch, helpdesk.v1.ticketCustomizedField.patch
- helpdesk.ticketMessage.create -> POST ${this.domain}/open-apis/helpdesk/v1/tickets/:ticket_id/messages [custom_params_serializer] aliases: helpdesk.ticketMessage.create, helpdesk.v1.ticketMessage.create
- helpdesk.ticketMessage.list -> GET ${this.domain}/open-apis/helpdesk/v1/tickets/:ticket_id/messages [custom_params_serializer] aliases: helpdesk.ticketMessage.list, helpdesk.v1.ticketMessage.list

## Event Handles

- helpdesk.notification.approve_v1
- helpdesk.ticket.created_v1
- helpdesk.ticket.updated_v1
- helpdesk.ticket_message.created_v1

