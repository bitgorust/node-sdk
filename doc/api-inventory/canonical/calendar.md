# calendar API Inventory

- Canonical methods: 49
- Event handles: 4

## Canonical Methods

- calendar.calendar.create -> POST ${this.domain}/open-apis/calendar/v4/calendars [custom_params_serializer] aliases: calendar.calendar.create, calendar.v4.calendar.create
- calendar.calendar.delete -> DELETE ${this.domain}/open-apis/calendar/v4/calendars/:calendar_id [custom_params_serializer] aliases: calendar.calendar.delete, calendar.v4.calendar.delete
- calendar.calendar.get -> GET ${this.domain}/open-apis/calendar/v4/calendars/:calendar_id [custom_params_serializer] aliases: calendar.calendar.get, calendar.v4.calendar.get
- calendar.calendar.list -> GET ${this.domain}/open-apis/calendar/v4/calendars [custom_params_serializer] aliases: calendar.calendar.list, calendar.v4.calendar.list
- calendar.calendar.mget -> POST ${this.domain}/open-apis/calendar/v4/calendars/mget [custom_params_serializer] aliases: calendar.calendar.mget, calendar.v4.calendar.mget
- calendar.calendar.patch -> PATCH ${this.domain}/open-apis/calendar/v4/calendars/:calendar_id [custom_params_serializer] aliases: calendar.calendar.patch, calendar.v4.calendar.patch
- calendar.calendar.primary -> POST ${this.domain}/open-apis/calendar/v4/calendars/primary [custom_params_serializer] aliases: calendar.calendar.primary, calendar.v4.calendar.primary
- calendar.calendar.primarys -> POST ${this.domain}/open-apis/calendar/v4/calendars/primarys [custom_params_serializer] aliases: calendar.calendar.primarys, calendar.v4.calendar.primarys
- calendar.calendar.search -> POST ${this.domain}/open-apis/calendar/v4/calendars/search [custom_params_serializer] aliases: calendar.calendar.search, calendar.v4.calendar.search
- calendar.calendar.searchWithIterator -> POST ${this.domain}/open-apis/calendar/v4/calendars/search [custom_params_serializer, iterator_helper] aliases: calendar.calendar.searchWithIterator, calendar.v4.calendar.searchWithIterator
- calendar.calendar.subscribe -> POST ${this.domain}/open-apis/calendar/v4/calendars/:calendar_id/subscribe [custom_params_serializer] aliases: calendar.calendar.subscribe, calendar.v4.calendar.subscribe
- calendar.calendar.subscription -> POST ${this.domain}/open-apis/calendar/v4/calendars/subscription [custom_params_serializer] aliases: calendar.calendar.subscription, calendar.v4.calendar.subscription
- calendar.calendar.unsubscribe -> POST ${this.domain}/open-apis/calendar/v4/calendars/:calendar_id/unsubscribe [custom_params_serializer] aliases: calendar.calendar.unsubscribe, calendar.v4.calendar.unsubscribe
- calendar.calendar.unsubscription -> POST ${this.domain}/open-apis/calendar/v4/calendars/unsubscription [custom_params_serializer] aliases: calendar.calendar.unsubscription, calendar.v4.calendar.unsubscription
- calendar.calendarAcl.create -> POST ${this.domain}/open-apis/calendar/v4/calendars/:calendar_id/acls [custom_params_serializer] aliases: calendar.calendarAcl.create, calendar.v4.calendarAcl.create
- calendar.calendarAcl.delete -> DELETE ${this.domain}/open-apis/calendar/v4/calendars/:calendar_id/acls/:acl_id [custom_params_serializer] aliases: calendar.calendarAcl.delete, calendar.v4.calendarAcl.delete
- calendar.calendarAcl.list -> GET ${this.domain}/open-apis/calendar/v4/calendars/:calendar_id/acls [custom_params_serializer] aliases: calendar.calendarAcl.list, calendar.v4.calendarAcl.list
- calendar.calendarAcl.listWithIterator -> GET ${this.domain}/open-apis/calendar/v4/calendars/:calendar_id/acls [custom_params_serializer, iterator_helper] aliases: calendar.calendarAcl.listWithIterator, calendar.v4.calendarAcl.listWithIterator
- calendar.calendarAcl.subscription -> POST ${this.domain}/open-apis/calendar/v4/calendars/:calendar_id/acls/subscription [custom_params_serializer] aliases: calendar.calendarAcl.subscription, calendar.v4.calendarAcl.subscription
- calendar.calendarAcl.unsubscription -> POST ${this.domain}/open-apis/calendar/v4/calendars/:calendar_id/acls/unsubscription [custom_params_serializer] aliases: calendar.calendarAcl.unsubscription, calendar.v4.calendarAcl.unsubscription
- calendar.calendarEvent.create -> POST ${this.domain}/open-apis/calendar/v4/calendars/:calendar_id/events [custom_params_serializer] aliases: calendar.calendarEvent.create, calendar.v4.calendarEvent.create
- calendar.calendarEvent.delete -> DELETE ${this.domain}/open-apis/calendar/v4/calendars/:calendar_id/events/:event_id [custom_params_serializer] aliases: calendar.calendarEvent.delete, calendar.v4.calendarEvent.delete
- calendar.calendarEvent.get -> GET ${this.domain}/open-apis/calendar/v4/calendars/:calendar_id/events/:event_id [custom_params_serializer] aliases: calendar.calendarEvent.get, calendar.v4.calendarEvent.get
- calendar.calendarEvent.instances -> GET ${this.domain}/open-apis/calendar/v4/calendars/:calendar_id/events/:event_id/instances [custom_params_serializer] aliases: calendar.calendarEvent.instances, calendar.v4.calendarEvent.instances
- calendar.calendarEvent.instanceView -> GET ${this.domain}/open-apis/calendar/v4/calendars/:calendar_id/events/instance_view [custom_params_serializer] aliases: calendar.calendarEvent.instanceView, calendar.v4.calendarEvent.instanceView
- calendar.calendarEvent.list -> GET ${this.domain}/open-apis/calendar/v4/calendars/:calendar_id/events [custom_params_serializer] aliases: calendar.calendarEvent.list, calendar.v4.calendarEvent.list
- calendar.calendarEvent.patch -> PATCH ${this.domain}/open-apis/calendar/v4/calendars/:calendar_id/events/:event_id [custom_params_serializer] aliases: calendar.calendarEvent.patch, calendar.v4.calendarEvent.patch
- calendar.calendarEvent.reply -> POST ${this.domain}/open-apis/calendar/v4/calendars/:calendar_id/events/:event_id/reply [custom_params_serializer] aliases: calendar.calendarEvent.reply, calendar.v4.calendarEvent.reply
- calendar.calendarEvent.search -> POST ${this.domain}/open-apis/calendar/v4/calendars/:calendar_id/events/search [custom_params_serializer] aliases: calendar.calendarEvent.search, calendar.v4.calendarEvent.search
- calendar.calendarEvent.searchWithIterator -> POST ${this.domain}/open-apis/calendar/v4/calendars/:calendar_id/events/search [custom_params_serializer, iterator_helper] aliases: calendar.calendarEvent.searchWithIterator, calendar.v4.calendarEvent.searchWithIterator
- calendar.calendarEvent.subscription -> POST ${this.domain}/open-apis/calendar/v4/calendars/:calendar_id/events/subscription [custom_params_serializer] aliases: calendar.calendarEvent.subscription, calendar.v4.calendarEvent.subscription
- calendar.calendarEvent.unsubscription -> POST ${this.domain}/open-apis/calendar/v4/calendars/:calendar_id/events/unsubscription [custom_params_serializer] aliases: calendar.calendarEvent.unsubscription, calendar.v4.calendarEvent.unsubscription
- calendar.calendarEventAttendee.batchDelete -> POST ${this.domain}/open-apis/calendar/v4/calendars/:calendar_id/events/:event_id/attendees/batch_delete [custom_params_serializer] aliases: calendar.calendarEventAttendee.batchDelete, calendar.v4.calendarEventAttendee.batchDelete
- calendar.calendarEventAttendee.create -> POST ${this.domain}/open-apis/calendar/v4/calendars/:calendar_id/events/:event_id/attendees [custom_params_serializer] aliases: calendar.calendarEventAttendee.create, calendar.v4.calendarEventAttendee.create
- calendar.calendarEventAttendee.list -> GET ${this.domain}/open-apis/calendar/v4/calendars/:calendar_id/events/:event_id/attendees [custom_params_serializer] aliases: calendar.calendarEventAttendee.list, calendar.v4.calendarEventAttendee.list
- calendar.calendarEventAttendee.listWithIterator -> GET ${this.domain}/open-apis/calendar/v4/calendars/:calendar_id/events/:event_id/attendees [custom_params_serializer, iterator_helper] aliases: calendar.calendarEventAttendee.listWithIterator, calendar.v4.calendarEventAttendee.listWithIterator
- calendar.calendarEventAttendeeChatMember.list -> GET ${this.domain}/open-apis/calendar/v4/calendars/:calendar_id/events/:event_id/attendees/:attendee_id/chat_members [custom_params_serializer] aliases: calendar.calendarEventAttendeeChatMember.list, calendar.v4.calendarEventAttendeeChatMember.list
- calendar.calendarEventAttendeeChatMember.listWithIterator -> GET ${this.domain}/open-apis/calendar/v4/calendars/:calendar_id/events/:event_id/attendees/:attendee_id/chat_members [custom_params_serializer, iterator_helper] aliases: calendar.calendarEventAttendeeChatMember.listWithIterator, calendar.v4.calendarEventAttendeeChatMember.listWithIterator
- calendar.calendarEventMeetingChat.create -> POST ${this.domain}/open-apis/calendar/v4/calendars/:calendar_id/events/:event_id/meeting_chat [custom_params_serializer] aliases: calendar.calendarEventMeetingChat.create, calendar.v4.calendarEventMeetingChat.create
- calendar.calendarEventMeetingChat.delete -> DELETE ${this.domain}/open-apis/calendar/v4/calendars/:calendar_id/events/:event_id/meeting_chat [custom_params_serializer] aliases: calendar.calendarEventMeetingChat.delete, calendar.v4.calendarEventMeetingChat.delete
- calendar.calendarEventMeetingMinute.create -> POST ${this.domain}/open-apis/calendar/v4/calendars/:calendar_id/events/:event_id/meeting_minute [custom_params_serializer] aliases: calendar.calendarEventMeetingMinute.create, calendar.v4.calendarEventMeetingMinute.create
- calendar.exchangeBinding.create -> POST ${this.domain}/open-apis/calendar/v4/exchange_bindings [custom_params_serializer] aliases: calendar.exchangeBinding.create, calendar.v4.exchangeBinding.create
- calendar.exchangeBinding.delete -> DELETE ${this.domain}/open-apis/calendar/v4/exchange_bindings/:exchange_binding_id [custom_params_serializer] aliases: calendar.exchangeBinding.delete, calendar.v4.exchangeBinding.delete
- calendar.exchangeBinding.get -> GET ${this.domain}/open-apis/calendar/v4/exchange_bindings/:exchange_binding_id [custom_params_serializer] aliases: calendar.exchangeBinding.get, calendar.v4.exchangeBinding.get
- calendar.freebusy.batch -> POST ${this.domain}/open-apis/calendar/v4/freebusy/batch [custom_params_serializer] aliases: calendar.freebusy.batch, calendar.v4.freebusy.batch
- calendar.freebusy.list -> POST ${this.domain}/open-apis/calendar/v4/freebusy/list [custom_params_serializer] aliases: calendar.freebusy.list, calendar.v4.freebusy.list
- calendar.setting.generateCaldavConf -> POST ${this.domain}/open-apis/calendar/v4/settings/generate_caldav_conf [custom_params_serializer] aliases: calendar.setting.generateCaldavConf, calendar.v4.setting.generateCaldavConf
- calendar.timeoffEvent.create -> POST ${this.domain}/open-apis/calendar/v4/timeoff_events [custom_params_serializer] aliases: calendar.timeoffEvent.create, calendar.v4.timeoffEvent.create
- calendar.timeoffEvent.delete -> DELETE ${this.domain}/open-apis/calendar/v4/timeoff_events/:timeoff_event_id [custom_params_serializer] aliases: calendar.timeoffEvent.delete, calendar.v4.timeoffEvent.delete

## Event Handles

- calendar.calendar.acl.created_v4
- calendar.calendar.acl.deleted_v4
- calendar.calendar.changed_v4
- calendar.calendar.event.changed_v4

