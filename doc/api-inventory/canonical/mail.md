# mail API Inventory

- Canonical methods: 76
- Event handles: 1

## Canonical Methods

- mail.mailgroup.create -> POST ${this.domain}/open-apis/mail/v1/mailgroups [custom_params_serializer] aliases: mail.mailgroup.create, mail.v1.mailgroup.create
- mail.mailgroup.delete -> DELETE ${this.domain}/open-apis/mail/v1/mailgroups/:mailgroup_id [custom_params_serializer] aliases: mail.mailgroup.delete, mail.v1.mailgroup.delete
- mail.mailgroup.get -> GET ${this.domain}/open-apis/mail/v1/mailgroups/:mailgroup_id [custom_params_serializer] aliases: mail.mailgroup.get, mail.v1.mailgroup.get
- mail.mailgroup.list -> GET ${this.domain}/open-apis/mail/v1/mailgroups [custom_params_serializer] aliases: mail.mailgroup.list, mail.v1.mailgroup.list
- mail.mailgroup.listWithIterator -> GET ${this.domain}/open-apis/mail/v1/mailgroups [custom_params_serializer, iterator_helper] aliases: mail.mailgroup.listWithIterator, mail.v1.mailgroup.listWithIterator
- mail.mailgroup.patch -> PATCH ${this.domain}/open-apis/mail/v1/mailgroups/:mailgroup_id [custom_params_serializer] aliases: mail.mailgroup.patch, mail.v1.mailgroup.patch
- mail.mailgroup.update -> PUT ${this.domain}/open-apis/mail/v1/mailgroups/:mailgroup_id [custom_params_serializer] aliases: mail.mailgroup.update, mail.v1.mailgroup.update
- mail.mailgroupAlias.create -> POST ${this.domain}/open-apis/mail/v1/mailgroups/:mailgroup_id/aliases [custom_params_serializer] aliases: mail.mailgroupAlias.create, mail.v1.mailgroupAlias.create
- mail.mailgroupAlias.delete -> DELETE ${this.domain}/open-apis/mail/v1/mailgroups/:mailgroup_id/aliases/:alias_id [custom_params_serializer] aliases: mail.mailgroupAlias.delete, mail.v1.mailgroupAlias.delete
- mail.mailgroupAlias.list -> GET ${this.domain}/open-apis/mail/v1/mailgroups/:mailgroup_id/aliases [custom_params_serializer] aliases: mail.mailgroupAlias.list, mail.v1.mailgroupAlias.list
- mail.mailgroupManager.batchCreate -> POST ${this.domain}/open-apis/mail/v1/mailgroups/:mailgroup_id/managers/batch_create [custom_params_serializer] aliases: mail.mailgroupManager.batchCreate, mail.v1.mailgroupManager.batchCreate
- mail.mailgroupManager.batchDelete -> POST ${this.domain}/open-apis/mail/v1/mailgroups/:mailgroup_id/managers/batch_delete [custom_params_serializer] aliases: mail.mailgroupManager.batchDelete, mail.v1.mailgroupManager.batchDelete
- mail.mailgroupManager.list -> GET ${this.domain}/open-apis/mail/v1/mailgroups/:mailgroup_id/managers [custom_params_serializer] aliases: mail.mailgroupManager.list, mail.v1.mailgroupManager.list
- mail.mailgroupManager.listWithIterator -> GET ${this.domain}/open-apis/mail/v1/mailgroups/:mailgroup_id/managers [custom_params_serializer, iterator_helper] aliases: mail.mailgroupManager.listWithIterator, mail.v1.mailgroupManager.listWithIterator
- mail.mailgroupMember.batchCreate -> POST ${this.domain}/open-apis/mail/v1/mailgroups/:mailgroup_id/members/batch_create [custom_params_serializer] aliases: mail.mailgroupMember.batchCreate, mail.v1.mailgroupMember.batchCreate
- mail.mailgroupMember.batchDelete -> DELETE ${this.domain}/open-apis/mail/v1/mailgroups/:mailgroup_id/members/batch_delete [custom_params_serializer] aliases: mail.mailgroupMember.batchDelete, mail.v1.mailgroupMember.batchDelete
- mail.mailgroupMember.create -> POST ${this.domain}/open-apis/mail/v1/mailgroups/:mailgroup_id/members [custom_params_serializer] aliases: mail.mailgroupMember.create, mail.v1.mailgroupMember.create
- mail.mailgroupMember.delete -> DELETE ${this.domain}/open-apis/mail/v1/mailgroups/:mailgroup_id/members/:member_id [custom_params_serializer] aliases: mail.mailgroupMember.delete, mail.v1.mailgroupMember.delete
- mail.mailgroupMember.get -> GET ${this.domain}/open-apis/mail/v1/mailgroups/:mailgroup_id/members/:member_id [custom_params_serializer] aliases: mail.mailgroupMember.get, mail.v1.mailgroupMember.get
- mail.mailgroupMember.list -> GET ${this.domain}/open-apis/mail/v1/mailgroups/:mailgroup_id/members [custom_params_serializer] aliases: mail.mailgroupMember.list, mail.v1.mailgroupMember.list
- mail.mailgroupMember.listWithIterator -> GET ${this.domain}/open-apis/mail/v1/mailgroups/:mailgroup_id/members [custom_params_serializer, iterator_helper] aliases: mail.mailgroupMember.listWithIterator, mail.v1.mailgroupMember.listWithIterator
- mail.mailgroupPermissionMember.batchCreate -> POST ${this.domain}/open-apis/mail/v1/mailgroups/:mailgroup_id/permission_members/batch_create [custom_params_serializer] aliases: mail.mailgroupPermissionMember.batchCreate, mail.v1.mailgroupPermissionMember.batchCreate
- mail.mailgroupPermissionMember.batchDelete -> DELETE ${this.domain}/open-apis/mail/v1/mailgroups/:mailgroup_id/permission_members/batch_delete [custom_params_serializer] aliases: mail.mailgroupPermissionMember.batchDelete, mail.v1.mailgroupPermissionMember.batchDelete
- mail.mailgroupPermissionMember.create -> POST ${this.domain}/open-apis/mail/v1/mailgroups/:mailgroup_id/permission_members [custom_params_serializer] aliases: mail.mailgroupPermissionMember.create, mail.v1.mailgroupPermissionMember.create
- mail.mailgroupPermissionMember.delete -> DELETE ${this.domain}/open-apis/mail/v1/mailgroups/:mailgroup_id/permission_members/:permission_member_id [custom_params_serializer] aliases: mail.mailgroupPermissionMember.delete, mail.v1.mailgroupPermissionMember.delete
- mail.mailgroupPermissionMember.get -> GET ${this.domain}/open-apis/mail/v1/mailgroups/:mailgroup_id/permission_members/:permission_member_id [custom_params_serializer] aliases: mail.mailgroupPermissionMember.get, mail.v1.mailgroupPermissionMember.get
- mail.mailgroupPermissionMember.list -> GET ${this.domain}/open-apis/mail/v1/mailgroups/:mailgroup_id/permission_members [custom_params_serializer] aliases: mail.mailgroupPermissionMember.list, mail.v1.mailgroupPermissionMember.list
- mail.mailgroupPermissionMember.listWithIterator -> GET ${this.domain}/open-apis/mail/v1/mailgroups/:mailgroup_id/permission_members [custom_params_serializer, iterator_helper] aliases: mail.mailgroupPermissionMember.listWithIterator, mail.v1.mailgroupPermissionMember.listWithIterator
- mail.publicMailbox.create -> POST ${this.domain}/open-apis/mail/v1/public_mailboxes [custom_params_serializer] aliases: mail.publicMailbox.create, mail.v1.publicMailbox.create
- mail.publicMailbox.delete -> DELETE ${this.domain}/open-apis/mail/v1/public_mailboxes/:public_mailbox_id [custom_params_serializer] aliases: mail.publicMailbox.delete, mail.v1.publicMailbox.delete
- mail.publicMailbox.get -> GET ${this.domain}/open-apis/mail/v1/public_mailboxes/:public_mailbox_id [custom_params_serializer] aliases: mail.publicMailbox.get, mail.v1.publicMailbox.get
- mail.publicMailbox.list -> GET ${this.domain}/open-apis/mail/v1/public_mailboxes [custom_params_serializer] aliases: mail.publicMailbox.list, mail.v1.publicMailbox.list
- mail.publicMailbox.listWithIterator -> GET ${this.domain}/open-apis/mail/v1/public_mailboxes [custom_params_serializer, iterator_helper] aliases: mail.publicMailbox.listWithIterator, mail.v1.publicMailbox.listWithIterator
- mail.publicMailbox.patch -> PATCH ${this.domain}/open-apis/mail/v1/public_mailboxes/:public_mailbox_id [custom_params_serializer] aliases: mail.publicMailbox.patch, mail.v1.publicMailbox.patch
- mail.publicMailbox.removeToRecycleBin -> DELETE ${this.domain}/open-apis/mail/v1/public_mailboxes/:public_mailbox_id/remove_to_recycle_bin [custom_params_serializer] aliases: mail.publicMailbox.removeToRecycleBin, mail.v1.publicMailbox.removeToRecycleBin
- mail.publicMailbox.update -> PUT ${this.domain}/open-apis/mail/v1/public_mailboxes/:public_mailbox_id [custom_params_serializer] aliases: mail.publicMailbox.update, mail.v1.publicMailbox.update
- mail.publicMailboxAlias.create -> POST ${this.domain}/open-apis/mail/v1/public_mailboxes/:public_mailbox_id/aliases [custom_params_serializer] aliases: mail.publicMailboxAlias.create, mail.v1.publicMailboxAlias.create
- mail.publicMailboxAlias.delete -> DELETE ${this.domain}/open-apis/mail/v1/public_mailboxes/:public_mailbox_id/aliases/:alias_id [custom_params_serializer] aliases: mail.publicMailboxAlias.delete, mail.v1.publicMailboxAlias.delete
- mail.publicMailboxAlias.list -> GET ${this.domain}/open-apis/mail/v1/public_mailboxes/:public_mailbox_id/aliases [custom_params_serializer] aliases: mail.publicMailboxAlias.list, mail.v1.publicMailboxAlias.list
- mail.publicMailboxMember.batchCreate -> POST ${this.domain}/open-apis/mail/v1/public_mailboxes/:public_mailbox_id/members/batch_create [custom_params_serializer] aliases: mail.publicMailboxMember.batchCreate, mail.v1.publicMailboxMember.batchCreate
- mail.publicMailboxMember.batchDelete -> DELETE ${this.domain}/open-apis/mail/v1/public_mailboxes/:public_mailbox_id/members/batch_delete [custom_params_serializer] aliases: mail.publicMailboxMember.batchDelete, mail.v1.publicMailboxMember.batchDelete
- mail.publicMailboxMember.clear -> POST ${this.domain}/open-apis/mail/v1/public_mailboxes/:public_mailbox_id/members/clear [custom_params_serializer] aliases: mail.publicMailboxMember.clear, mail.v1.publicMailboxMember.clear
- mail.publicMailboxMember.create -> POST ${this.domain}/open-apis/mail/v1/public_mailboxes/:public_mailbox_id/members [custom_params_serializer] aliases: mail.publicMailboxMember.create, mail.v1.publicMailboxMember.create
- mail.publicMailboxMember.delete -> DELETE ${this.domain}/open-apis/mail/v1/public_mailboxes/:public_mailbox_id/members/:member_id [custom_params_serializer] aliases: mail.publicMailboxMember.delete, mail.v1.publicMailboxMember.delete
- mail.publicMailboxMember.get -> GET ${this.domain}/open-apis/mail/v1/public_mailboxes/:public_mailbox_id/members/:member_id [custom_params_serializer] aliases: mail.publicMailboxMember.get, mail.v1.publicMailboxMember.get
- mail.publicMailboxMember.list -> GET ${this.domain}/open-apis/mail/v1/public_mailboxes/:public_mailbox_id/members [custom_params_serializer] aliases: mail.publicMailboxMember.list, mail.v1.publicMailboxMember.list
- mail.publicMailboxMember.listWithIterator -> GET ${this.domain}/open-apis/mail/v1/public_mailboxes/:public_mailbox_id/members [custom_params_serializer, iterator_helper] aliases: mail.publicMailboxMember.listWithIterator, mail.v1.publicMailboxMember.listWithIterator
- mail.user.query -> POST ${this.domain}/open-apis/mail/v1/users/query [custom_params_serializer] aliases: mail.user.query, mail.v1.user.query
- mail.userMailbox.delete -> DELETE ${this.domain}/open-apis/mail/v1/user_mailboxes/:user_mailbox_id [custom_params_serializer] aliases: mail.userMailbox.delete, mail.v1.userMailbox.delete
- mail.userMailboxAlias.create -> POST ${this.domain}/open-apis/mail/v1/user_mailboxes/:user_mailbox_id/aliases [custom_params_serializer] aliases: mail.userMailboxAlias.create, mail.v1.userMailboxAlias.create
- mail.userMailboxAlias.delete -> DELETE ${this.domain}/open-apis/mail/v1/user_mailboxes/:user_mailbox_id/aliases/:alias_id [custom_params_serializer] aliases: mail.userMailboxAlias.delete, mail.v1.userMailboxAlias.delete
- mail.userMailboxAlias.list -> GET ${this.domain}/open-apis/mail/v1/user_mailboxes/:user_mailbox_id/aliases [custom_params_serializer] aliases: mail.userMailboxAlias.list, mail.v1.userMailboxAlias.list
- mail.userMailboxAlias.listWithIterator -> GET ${this.domain}/open-apis/mail/v1/user_mailboxes/:user_mailbox_id/aliases [custom_params_serializer, iterator_helper] aliases: mail.userMailboxAlias.listWithIterator, mail.v1.userMailboxAlias.listWithIterator
- mail.userMailboxEvent.subscribe -> POST ${this.domain}/open-apis/mail/v1/user_mailboxes/:user_mailbox_id/event/subscribe [custom_params_serializer] aliases: mail.userMailboxEvent.subscribe, mail.v1.userMailboxEvent.subscribe
- mail.userMailboxEvent.subscription -> GET ${this.domain}/open-apis/mail/v1/user_mailboxes/:user_mailbox_id/event/subscription [custom_params_serializer] aliases: mail.userMailboxEvent.subscription, mail.v1.userMailboxEvent.subscription
- mail.userMailboxEvent.unsubscribe -> POST ${this.domain}/open-apis/mail/v1/user_mailboxes/:user_mailbox_id/event/unsubscribe [custom_params_serializer] aliases: mail.userMailboxEvent.unsubscribe, mail.v1.userMailboxEvent.unsubscribe
- mail.userMailboxFolder.create -> POST ${this.domain}/open-apis/mail/v1/user_mailboxes/:user_mailbox_id/folders [custom_params_serializer] aliases: mail.userMailboxFolder.create, mail.v1.userMailboxFolder.create
- mail.userMailboxFolder.delete -> DELETE ${this.domain}/open-apis/mail/v1/user_mailboxes/:user_mailbox_id/folders/:folder_id [custom_params_serializer] aliases: mail.userMailboxFolder.delete, mail.v1.userMailboxFolder.delete
- mail.userMailboxFolder.list -> GET ${this.domain}/open-apis/mail/v1/user_mailboxes/:user_mailbox_id/folders [custom_params_serializer] aliases: mail.userMailboxFolder.list, mail.v1.userMailboxFolder.list
- mail.userMailboxFolder.patch -> PATCH ${this.domain}/open-apis/mail/v1/user_mailboxes/:user_mailbox_id/folders/:folder_id [custom_params_serializer] aliases: mail.userMailboxFolder.patch, mail.v1.userMailboxFolder.patch
- mail.userMailboxMailContact.create -> POST ${this.domain}/open-apis/mail/v1/user_mailboxes/:user_mailbox_id/mail_contacts [custom_params_serializer] aliases: mail.userMailboxMailContact.create, mail.v1.userMailboxMailContact.create
- mail.userMailboxMailContact.delete -> DELETE ${this.domain}/open-apis/mail/v1/user_mailboxes/:user_mailbox_id/mail_contacts/:mail_contact_id [custom_params_serializer] aliases: mail.userMailboxMailContact.delete, mail.v1.userMailboxMailContact.delete
- mail.userMailboxMailContact.list -> GET ${this.domain}/open-apis/mail/v1/user_mailboxes/:user_mailbox_id/mail_contacts [custom_params_serializer] aliases: mail.userMailboxMailContact.list, mail.v1.userMailboxMailContact.list
- mail.userMailboxMailContact.listWithIterator -> GET ${this.domain}/open-apis/mail/v1/user_mailboxes/:user_mailbox_id/mail_contacts [custom_params_serializer, iterator_helper] aliases: mail.userMailboxMailContact.listWithIterator, mail.v1.userMailboxMailContact.listWithIterator
- mail.userMailboxMailContact.patch -> PATCH ${this.domain}/open-apis/mail/v1/user_mailboxes/:user_mailbox_id/mail_contacts/:mail_contact_id [custom_params_serializer] aliases: mail.userMailboxMailContact.patch, mail.v1.userMailboxMailContact.patch
- mail.userMailboxMessage.get -> GET ${this.domain}/open-apis/mail/v1/user_mailboxes/:user_mailbox_id/messages/:message_id [custom_params_serializer] aliases: mail.userMailboxMessage.get, mail.v1.userMailboxMessage.get
- mail.userMailboxMessage.getByCard -> GET ${this.domain}/open-apis/mail/v1/user_mailboxes/:user_mailbox_id/messages/get_by_card [custom_params_serializer] aliases: mail.userMailboxMessage.getByCard, mail.v1.userMailboxMessage.getByCard
- mail.userMailboxMessage.list -> GET ${this.domain}/open-apis/mail/v1/user_mailboxes/:user_mailbox_id/messages [custom_params_serializer] aliases: mail.userMailboxMessage.list, mail.v1.userMailboxMessage.list
- mail.userMailboxMessage.listWithIterator -> GET ${this.domain}/open-apis/mail/v1/user_mailboxes/:user_mailbox_id/messages [custom_params_serializer, iterator_helper] aliases: mail.userMailboxMessage.listWithIterator, mail.v1.userMailboxMessage.listWithIterator
- mail.userMailboxMessage.send -> POST ${this.domain}/open-apis/mail/v1/user_mailboxes/:user_mailbox_id/messages/send [custom_params_serializer] aliases: mail.userMailboxMessage.send, mail.v1.userMailboxMessage.send
- mail.userMailboxMessageAttachment.downloadUrl -> GET ${this.domain}/open-apis/mail/v1/user_mailboxes/:user_mailbox_id/messages/:message_id/attachments/download_url [custom_params_serializer] aliases: mail.userMailboxMessageAttachment.downloadUrl, mail.v1.userMailboxMessageAttachment.downloadUrl
- mail.userMailboxRule.create -> POST ${this.domain}/open-apis/mail/v1/user_mailboxes/:user_mailbox_id/rules [custom_params_serializer] aliases: mail.userMailboxRule.create, mail.v1.userMailboxRule.create
- mail.userMailboxRule.delete -> DELETE ${this.domain}/open-apis/mail/v1/user_mailboxes/:user_mailbox_id/rules/:rule_id [custom_params_serializer] aliases: mail.userMailboxRule.delete, mail.v1.userMailboxRule.delete
- mail.userMailboxRule.list -> GET ${this.domain}/open-apis/mail/v1/user_mailboxes/:user_mailbox_id/rules [custom_params_serializer] aliases: mail.userMailboxRule.list, mail.v1.userMailboxRule.list
- mail.userMailboxRule.reorder -> POST ${this.domain}/open-apis/mail/v1/user_mailboxes/:user_mailbox_id/rules/reorder [custom_params_serializer] aliases: mail.userMailboxRule.reorder, mail.v1.userMailboxRule.reorder
- mail.userMailboxRule.update -> PUT ${this.domain}/open-apis/mail/v1/user_mailboxes/:user_mailbox_id/rules/:rule_id [custom_params_serializer] aliases: mail.userMailboxRule.update, mail.v1.userMailboxRule.update

## Event Handles

- mail.user_mailbox.event.message_received_v1

