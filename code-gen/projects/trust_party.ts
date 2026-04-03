import identity from "lodash.identity";
import pickBy from "lodash.pickby";
import fs from "fs";
import { fillApiPath } from "@node-sdk/utils";
import { Logger } from "@node-sdk/typings";
import { formatErrors } from "@node-sdk/client/utils";
import { IRequestOptions } from "@node-sdk/code-gen/types";
import { IPayload } from "@node-sdk/client/types";
import { HttpInstance } from "@node-sdk/typings/http";
import { Readable } from "stream";
import { stringify } from "qs";
import translation from "./translation";

// auto gen
export default abstract class Client extends translation {
    declare tokenManager;

    declare domain;

    declare logger: Logger;

    declare httpInstance: HttpInstance;

    abstract formatPayload(
        // eslint-disable-next-line no-unused-vars
        payload?: IPayload,
        // eslint-disable-next-line no-unused-vars
        options?: IRequestOptions
    ): Promise<Required<IPayload>>;

    /**
     *
     */
    trustParty = {
        /**
         * collaboration_tenant
         */
        collaborationTenant: {
            /**
             * {@link https://open.feishu.cn/api-explorer?project=trust_party&resource=collaboration_tenant&apiName=list&version=v1 click to debug }
             *
             * {@link https://open.feishu.cn/api-explorer?from=op_doc_tab&apiName=list&project=trust_party&resource=collaboration_tenant&version=v1 document }
             */
            list: async (
                payload?: {
                    params?: {
                        page_token?: string;
                        page_size?: number;
                    };
                },
                options?: IRequestOptions
            ) => {
                const { headers, params, data, path } =
                    await this.formatPayload(payload, options);

                return this.httpInstance
                    .request<
                        any,
                        {
                            code?: number;
                            msg?: string;
                            data?: {
                                target_tenant_list?: Array<{
                                    tenant_key?: string;
                                    tenant_name?: string;
                                    tenant_short_name?: string;
                                    i18n_tenant_name?: {
                                        zh_cn?: string;
                                        ja_jp?: string;
                                        en_us?: string;
                                    };
                                    avatar?: {
                                        avatar_72?: string;
                                        avatar_240?: string;
                                        avatar_640?: string;
                                        avatar_origin?: string;
                                    };
                                    connect_time?: number;
                                }>;
                                has_more?: boolean;
                                page_token?: string;
                            };
                        }
                    >({
                        url: fillApiPath(
                            `${this.domain}/open-apis/trust_party/v1/collaboration_tenants`,
                            path
                        ),
                        method: "GET",
                        data,
                        params,
                        headers,
                        paramsSerializer: (params) =>
                            stringify(params, { arrayFormat: "repeat" }),
                    })
                    .catch((e) => {
                        this.logger.error(formatErrors(e));
                        throw e;
                    });
            },
            /**
             * {@link https://open.feishu.cn/api-explorer?project=trust_party&resource=collaboration_tenant&apiName=get&version=v1 click to debug }
             *
             * {@link https://open.feishu.cn/api-explorer?from=op_doc_tab&apiName=get&project=trust_party&resource=collaboration_tenant&version=v1 document }
             */
            get: async (
                payload?: {
                    path: {
                        target_tenant_key: string;
                    };
                },
                options?: IRequestOptions
            ) => {
                const { headers, params, data, path } =
                    await this.formatPayload(payload, options);

                return this.httpInstance
                    .request<
                        any,
                        {
                            code?: number;
                            msg?: string;
                            data?: {
                                target_tenant?: {
                                    tenant_key?: string;
                                    tenant_name?: string;
                                    tenant_short_name?: string;
                                    i18n_tenant_name?: {
                                        zh_cn?: string;
                                        ja_jp?: string;
                                        en_us?: string;
                                    };
                                    avatar?: {
                                        avatar_72?: string;
                                        avatar_240?: string;
                                        avatar_640?: string;
                                        avatar_origin?: string;
                                    };
                                    brand?: string;
                                };
                            };
                        }
                    >({
                        url: fillApiPath(
                            `${this.domain}/open-apis/trust_party/v1/collaboration_tenants/:target_tenant_key`,
                            path
                        ),
                        method: "GET",
                        data,
                        params,
                        headers,
                        paramsSerializer: (params) =>
                            stringify(params, { arrayFormat: "repeat" }),
                    })
                    .catch((e) => {
                        this.logger.error(formatErrors(e));
                        throw e;
                    });
            },
        },
        /**
         * collaboration_tenant.collaboration_department
         */
        collaborationDepartment: {
            /**
             * {@link https://open.feishu.cn/api-explorer?project=trust_party&resource=collaboration_tenant-collaboration_department&apiName=get&version=v1 click to debug }
             *
             * {@link https://open.feishu.cn/api-explorer?from=op_doc_tab&apiName=get&project=trust_party&resource=collaboration_tenant-collaboration_department&version=v1 document }
             */
            get: async (
                payload?: {
                    path: {
                        target_tenant_key: string;
                        target_department_id: string;
                    };
                    params?: {
                        target_department_id_type?: string;
                    };
                },
                options?: IRequestOptions
            ) => {
                const { headers, params, data, path } =
                    await this.formatPayload(payload, options);

                return this.httpInstance
                    .request<
                        any,
                        {
                            code?: number;
                            msg?: string;
                            data?: {
                                target_department?: {
                                    department_id?: string;
                                    open_department_id?: string;
                                    department_order?: string;
                                    department_name?: string;
                                    i18n_department_name?: {
                                        zh_cn?: string;
                                        ja_jp?: string;
                                        en_us?: string;
                                    };
                                };
                            };
                        }
                    >({
                        url: fillApiPath(
                            `${this.domain}/open-apis/trust_party/v1/collaboration_tenants/:target_tenant_key/collaboration_departments/:target_department_id`,
                            path
                        ),
                        method: "GET",
                        data,
                        params,
                        headers,
                        paramsSerializer: (params) =>
                            stringify(params, { arrayFormat: "repeat" }),
                    })
                    .catch((e) => {
                        this.logger.error(formatErrors(e));
                        throw e;
                    });
            },
        },
        /**
         * collaboration_tenant.collaboration_user
         */
        collaborationUser: {
            /**
             * {@link https://open.feishu.cn/api-explorer?project=trust_party&resource=collaboration_tenant-collaboration_user&apiName=get&version=v1 click to debug }
             *
             * {@link https://open.feishu.cn/api-explorer?from=op_doc_tab&apiName=get&project=trust_party&resource=collaboration_tenant-collaboration_user&version=v1 document }
             */
            get: async (
                payload?: {
                    path: {
                        target_tenant_key: string;
                        target_user_id: string;
                    };
                    params?: {
                        target_user_id_type?: string;
                    };
                },
                options?: IRequestOptions
            ) => {
                const { headers, params, data, path } =
                    await this.formatPayload(payload, options);

                return this.httpInstance
                    .request<
                        any,
                        {
                            code?: number;
                            msg?: string;
                            data?: {
                                target_user?: {
                                    user_id?: string;
                                    open_id?: string;
                                    union_id?: string;
                                    name?: string;
                                    i18n_name?: {
                                        zh_cn?: string;
                                        ja_jp?: string;
                                        en_us?: string;
                                    };
                                    avatar?: {
                                        avatar_72?: string;
                                        avatar_240?: string;
                                        avatar_640?: string;
                                        avatar_origin?: string;
                                    };
                                };
                            };
                        }
                    >({
                        url: fillApiPath(
                            `${this.domain}/open-apis/trust_party/v1/collaboration_tenants/:target_tenant_key/collaboration_users/:target_user_id`,
                            path
                        ),
                        method: "GET",
                        data,
                        params,
                        headers,
                        paramsSerializer: (params) =>
                            stringify(params, { arrayFormat: "repeat" }),
                    })
                    .catch((e) => {
                        this.logger.error(formatErrors(e));
                        throw e;
                    });
            },
        },
        /**
         * collaboration_tenant.visible_organization
         */
        visibleOrganization: {
            /**
             * {@link https://open.feishu.cn/api-explorer?project=trust_party&resource=collaboration_tenant&apiName=visible_organization&version=v1 click to debug }
             *
             * {@link https://open.feishu.cn/api-explorer?from=op_doc_tab&apiName=visible_organization&project=trust_party&resource=collaboration_tenant&version=v1 document }
             */
            get: async (
                payload?: {
                    path: {
                        target_tenant_key: string;
                    };
                    params?: {
                        department_id_type?: string;
                        target_department_id?: string;
                        page_token?: string;
                        page_size?: number;
                        group_id_type?: string;
                        target_group_id?: string;
                    };
                },
                options?: IRequestOptions
            ) => {
                const { headers, params, data, path } =
                    await this.formatPayload(payload, options);

                return this.httpInstance
                    .request<
                        any,
                        {
                            code?: number;
                            msg?: string;
                            data?: {
                                collaboration_entity_list?: Array<{
                                    collaboration_entity_type?: string;
                                    department_id?: string;
                                    open_department_id?: string;
                                    user_id?: string;
                                    open_user_id?: string;
                                    union_user_id?: string;
                                    department_name?: string;
                                    user_name?: string;
                                    group_id?: string;
                                    open_group_id?: string;
                                }>;
                                has_more?: boolean;
                                page_token?: string;
                            };
                        }
                    >({
                        url: fillApiPath(
                            `${this.domain}/open-apis/trust_party/v1/collaboration_tenants/:target_tenant_key/visible_organization`,
                            path
                        ),
                        method: "GET",
                        data,
                        params,
                        headers,
                        paramsSerializer: (params) =>
                            stringify(params, { arrayFormat: "repeat" }),
                    })
                    .catch((e) => {
                        this.logger.error(formatErrors(e));
                        throw e;
                    });
            },
        },
        v1: {
            /**
             * collaboration_tenant
             */
            collaborationTenant: {
                list: async (
                    payload?: {
                        params?: {
                            page_token?: string;
                            page_size?: number;
                        };
                    },
                    options?: IRequestOptions
                ) => {
                    const { headers, params, data, path } =
                        await this.formatPayload(payload, options);

                    return this.httpInstance
                        .request<
                            any,
                            {
                                code?: number;
                                msg?: string;
                                data?: {
                                    target_tenant_list?: Array<{
                                        tenant_key?: string;
                                        tenant_name?: string;
                                        tenant_short_name?: string;
                                        i18n_tenant_name?: {
                                            zh_cn?: string;
                                            ja_jp?: string;
                                            en_us?: string;
                                        };
                                        avatar?: {
                                            avatar_72?: string;
                                            avatar_240?: string;
                                            avatar_640?: string;
                                            avatar_origin?: string;
                                        };
                                        connect_time?: number;
                                    }>;
                                    has_more?: boolean;
                                    page_token?: string;
                                };
                            }
                        >({
                            url: fillApiPath(
                                `${this.domain}/open-apis/trust_party/v1/collaboration_tenants`,
                                path
                            ),
                            method: "GET",
                            data,
                            params,
                            headers,
                            paramsSerializer: (params) =>
                                stringify(params, { arrayFormat: "repeat" }),
                        })
                        .catch((e) => {
                            this.logger.error(formatErrors(e));
                            throw e;
                        });
                },
                get: async (
                    payload?: {
                        path: {
                            target_tenant_key: string;
                        };
                    },
                    options?: IRequestOptions
                ) => {
                    const { headers, params, data, path } =
                        await this.formatPayload(payload, options);

                    return this.httpInstance
                        .request<
                            any,
                            {
                                code?: number;
                                msg?: string;
                                data?: {
                                    target_tenant?: {
                                        tenant_key?: string;
                                        tenant_name?: string;
                                        tenant_short_name?: string;
                                        i18n_tenant_name?: {
                                            zh_cn?: string;
                                            ja_jp?: string;
                                            en_us?: string;
                                        };
                                        avatar?: {
                                            avatar_72?: string;
                                            avatar_240?: string;
                                            avatar_640?: string;
                                            avatar_origin?: string;
                                        };
                                        brand?: string;
                                    };
                                };
                            }
                        >({
                            url: fillApiPath(
                                `${this.domain}/open-apis/trust_party/v1/collaboration_tenants/:target_tenant_key`,
                                path
                            ),
                            method: "GET",
                            data,
                            params,
                            headers,
                            paramsSerializer: (params) =>
                                stringify(params, { arrayFormat: "repeat" }),
                        })
                        .catch((e) => {
                            this.logger.error(formatErrors(e));
                            throw e;
                        });
                },
            },
            /**
             * collaboration_tenant.collaboration_department
             */
            collaborationDepartment: {
                get: async (
                    payload?: {
                        path: {
                            target_tenant_key: string;
                            target_department_id: string;
                        };
                        params?: {
                            target_department_id_type?: string;
                        };
                    },
                    options?: IRequestOptions
                ) => {
                    const { headers, params, data, path } =
                        await this.formatPayload(payload, options);

                    return this.httpInstance
                        .request<
                            any,
                            {
                                code?: number;
                                msg?: string;
                                data?: {
                                    target_department?: {
                                        department_id?: string;
                                        open_department_id?: string;
                                        department_order?: string;
                                        department_name?: string;
                                        i18n_department_name?: {
                                            zh_cn?: string;
                                            ja_jp?: string;
                                            en_us?: string;
                                        };
                                    };
                                };
                            }
                        >({
                            url: fillApiPath(
                                `${this.domain}/open-apis/trust_party/v1/collaboration_tenants/:target_tenant_key/collaboration_departments/:target_department_id`,
                                path
                            ),
                            method: "GET",
                            data,
                            params,
                            headers,
                            paramsSerializer: (params) =>
                                stringify(params, { arrayFormat: "repeat" }),
                        })
                        .catch((e) => {
                            this.logger.error(formatErrors(e));
                            throw e;
                        });
                },
            },
            /**
             * collaboration_tenant.collaboration_user
             */
            collaborationUser: {
                get: async (
                    payload?: {
                        path: {
                            target_tenant_key: string;
                            target_user_id: string;
                        };
                        params?: {
                            target_user_id_type?: string;
                        };
                    },
                    options?: IRequestOptions
                ) => {
                    const { headers, params, data, path } =
                        await this.formatPayload(payload, options);

                    return this.httpInstance
                        .request<
                            any,
                            {
                                code?: number;
                                msg?: string;
                                data?: {
                                    target_user?: {
                                        user_id?: string;
                                        open_id?: string;
                                        union_id?: string;
                                        name?: string;
                                        i18n_name?: {
                                            zh_cn?: string;
                                            ja_jp?: string;
                                            en_us?: string;
                                        };
                                        avatar?: {
                                            avatar_72?: string;
                                            avatar_240?: string;
                                            avatar_640?: string;
                                            avatar_origin?: string;
                                        };
                                    };
                                };
                            }
                        >({
                            url: fillApiPath(
                                `${this.domain}/open-apis/trust_party/v1/collaboration_tenants/:target_tenant_key/collaboration_users/:target_user_id`,
                                path
                            ),
                            method: "GET",
                            data,
                            params,
                            headers,
                            paramsSerializer: (params) =>
                                stringify(params, { arrayFormat: "repeat" }),
                        })
                        .catch((e) => {
                            this.logger.error(formatErrors(e));
                            throw e;
                        });
                },
            },
            /**
             * collaboration_tenant.visible_organization
             */
            visibleOrganization: {
                get: async (
                    payload?: {
                        path: {
                            target_tenant_key: string;
                        };
                        params?: {
                            department_id_type?: string;
                            target_department_id?: string;
                            page_token?: string;
                            page_size?: number;
                            group_id_type?: string;
                            target_group_id?: string;
                        };
                    },
                    options?: IRequestOptions
                ) => {
                    const { headers, params, data, path } =
                        await this.formatPayload(payload, options);

                    return this.httpInstance
                        .request<
                            any,
                            {
                                code?: number;
                                msg?: string;
                                data?: {
                                    collaboration_entity_list?: Array<{
                                        collaboration_entity_type?: string;
                                        department_id?: string;
                                        open_department_id?: string;
                                        user_id?: string;
                                        open_user_id?: string;
                                        union_user_id?: string;
                                        department_name?: string;
                                        user_name?: string;
                                        group_id?: string;
                                        open_group_id?: string;
                                    }>;
                                    has_more?: boolean;
                                    page_token?: string;
                                };
                            }
                        >({
                            url: fillApiPath(
                                `${this.domain}/open-apis/trust_party/v1/collaboration_tenants/:target_tenant_key/visible_organization`,
                                path
                            ),
                            method: "GET",
                            data,
                            params,
                            headers,
                            paramsSerializer: (params) =>
                                stringify(params, { arrayFormat: "repeat" }),
                        })
                        .catch((e) => {
                            this.logger.error(formatErrors(e));
                            throw e;
                        });
                },
            },
        },
    };
}
