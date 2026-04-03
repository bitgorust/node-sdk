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
import verification from "./verification";

// auto gen
export default abstract class Client extends verification {
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
         */
    miaoda = {
        app: {
            enum: {
                get_enum_list: async (
                    payload?: {
                        params?: {
                            page_size?: string;
                            page_token?: string;
                            env?: string;
                        };
                        path: { app_id: string };
                    },
                    options?: IRequestOptions
                ) => {
                    const { headers, params, data, path } =
                        await this.formatPayload(payload, options);

                    return this.httpInstance
                        .request<any, any>({
                            url: fillApiPath(
                                `${this.domain}/open-apis/spark/v1/apps/:app_id/enums`,
                                path
                            ),
                            method: "GET",
                            headers: pickBy(headers, identity),
                            params: pickBy(params, identity),
                            data,
                            paramsSerializer: (params) =>
                                stringify(params, { arrayFormat: "repeat" }),
                        })
                        .catch((e) => {
                            this.logger.error(formatErrors(e));
                            throw e;
                        });
                },
                get_enum_detail: async (
                    payload?: {
                        params?: { env?: string };
                        path: { app_id: string; enum_name: string };
                    },
                    options?: IRequestOptions
                ) => {
                    const { headers, params, data, path } =
                        await this.formatPayload(payload, options);

                    return this.httpInstance
                        .request<any, any>({
                            url: fillApiPath(
                                `${this.domain}/open-apis/spark/v1/apps/:app_id/enums/:enum_name`,
                                path
                            ),
                            method: "GET",
                            headers: pickBy(headers, identity),
                            params: pickBy(params, identity),
                            data,
                            paramsSerializer: (params) =>
                                stringify(params, { arrayFormat: "repeat" }),
                        })
                        .catch((e) => {
                            this.logger.error(formatErrors(e));
                            throw e;
                        });
                },
            },
            table: {
                get_table_list: async (
                    payload?: {
                        params?: {
                            page_size?: string;
                            page_token?: string;
                            env?: string;
                        };
                        path: { app_id: string };
                    },
                    options?: IRequestOptions
                ) => {
                    const { headers, params, data, path } =
                        await this.formatPayload(payload, options);

                    return this.httpInstance
                        .request<any, any>({
                            url: fillApiPath(
                                `${this.domain}/open-apis/spark/v1/apps/:app_id/tables`,
                                path
                            ),
                            method: "GET",
                            headers: pickBy(headers, identity),
                            params: pickBy(params, identity),
                            data,
                            paramsSerializer: (params) =>
                                stringify(params, { arrayFormat: "repeat" }),
                        })
                        .catch((e) => {
                            this.logger.error(formatErrors(e));
                            throw e;
                        });
                },
                get_table_detail: async (
                    payload?: {
                        params?: { env?: string };
                        path: { app_id: string; table_name: string };
                    },
                    options?: IRequestOptions
                ) => {
                    const { headers, params, data, path } =
                        await this.formatPayload(payload, options);

                    return this.httpInstance
                        .request<any, any>({
                            url: fillApiPath(
                                `${this.domain}/open-apis/spark/v1/apps/:app_id/tables/:table_name`,
                                path
                            ),
                            method: "GET",
                            headers: pickBy(headers, identity),
                            params: pickBy(params, identity),
                            data,
                            paramsSerializer: (params) =>
                                stringify(params, { arrayFormat: "repeat" }),
                        })
                        .catch((e) => {
                            this.logger.error(formatErrors(e));
                            throw e;
                        });
                },
                get_table_record_list: async (
                    payload?: {
                        params?: {
                            page_size?: string;
                            page_token?: string;
                            select?: string;
                            filter?: string;
                            order?: string;
                            env?: string;
                            user_identifier_type?: string;
                        };
                        path: { app_id: string; table_name: string };
                    },
                    options?: IRequestOptions
                ) => {
                    const { headers, params, data, path } =
                        await this.formatPayload(payload, options);

                    return this.httpInstance
                        .request<any, any>({
                            url: fillApiPath(
                                `${this.domain}/open-apis/spark/v1/apps/:app_id/tables/:table_name/records`,
                                path
                            ),
                            method: "GET",
                            headers: pickBy(headers, identity),
                            params: pickBy(params, identity),
                            data,
                            paramsSerializer: (params) =>
                                stringify(params, { arrayFormat: "repeat" }),
                        })
                        .catch((e) => {
                            this.logger.error(formatErrors(e));
                            throw e;
                        });
                },
                delete_table_records: async (
                    payload?: {
                        params?: { filter?: string; env?: string };
                        path: { app_id: string; table_name: string };
                    },
                    options?: IRequestOptions
                ) => {
                    const { headers, params, data, path } =
                        await this.formatPayload(payload, options);

                    return this.httpInstance
                        .request<any, any>({
                            url: fillApiPath(
                                `${this.domain}/open-apis/spark/v1/apps/:app_id/tables/:table_name/records`,
                                path
                            ),
                            method: "DELETE",
                            headers: pickBy(headers, identity),
                            params: pickBy(params, identity),
                            data,
                            paramsSerializer: (params) =>
                                stringify(params, { arrayFormat: "repeat" }),
                        })
                        .catch((e) => {
                            this.logger.error(formatErrors(e));
                            throw e;
                        });
                },
                patch_table_records: async (
                    payload?: {
                        params?: {
                            filter?: string;
                            env?: string;
                            user_identifier_type?: string;
                        };
                        data?: { record?: any };
                        path: { app_id: string; table_name: string };
                    },
                    options?: IRequestOptions
                ) => {
                    const { headers, params, data, path } =
                        await this.formatPayload(payload, options);

                    return this.httpInstance
                        .request<any, any>({
                            url: fillApiPath(
                                `${this.domain}/open-apis/spark/v1/apps/:app_id/tables/:table_name/records`,
                                path
                            ),
                            method: "PATCH",
                            headers: pickBy(headers, identity),
                            params: pickBy(params, identity),
                            data,
                            paramsSerializer: (params) =>
                                stringify(params, { arrayFormat: "repeat" }),
                        })
                        .catch((e) => {
                            this.logger.error(formatErrors(e));
                            throw e;
                        });
                },
                batch_update_table_records: async (
                    payload?: {
                        params?: {
                            env?: string;
                            user_identifier_type?: string;
                        };
                        data?: { records?: Array<any> };
                        path: { app_id: string; table_name: string };
                    },
                    options?: IRequestOptions
                ) => {
                    const { headers, params, data, path } =
                        await this.formatPayload(payload, options);

                    return this.httpInstance
                        .request<any, any>({
                            url: fillApiPath(
                                `${this.domain}/open-apis/spark/v1/apps/:app_id/tables/:table_name/records_batch_update`,
                                path
                            ),
                            method: "PATCH",
                            headers: pickBy(headers, identity),
                            params: pickBy(params, identity),
                            data,
                            paramsSerializer: (params) =>
                                stringify(params, { arrayFormat: "repeat" }),
                        })
                        .catch((e) => {
                            this.logger.error(formatErrors(e));
                            throw e;
                        });
                },
                post_table_records: async (
                    payload?: {
                        params?: {
                            columns?: string;
                            on_conflict?: string;
                            env?: string;
                            user_identifier_type?: string;
                        };
                        data?: { records?: Array<any> };
                        path: { app_id: string; table_name: string };
                    },
                    options?: IRequestOptions
                ) => {
                    const { headers, params, data, path } =
                        await this.formatPayload(payload, options);

                    return this.httpInstance
                        .request<any, any>({
                            url: fillApiPath(
                                `${this.domain}/open-apis/spark/v1/apps/:app_id/tables/:table_name/records`,
                                path
                            ),
                            method: "POST",
                            headers: pickBy(headers, identity),
                            params: pickBy(params, identity),
                            data,
                            paramsSerializer: (params) =>
                                stringify(params, { arrayFormat: "repeat" }),
                        })
                        .catch((e) => {
                            this.logger.error(formatErrors(e));
                            throw e;
                        });
                },
            },
            view: {
                get_view_record_list: async (
                    payload?: {
                        params?: {
                            page_size?: string;
                            page_token?: string;
                            select?: string;
                            filter?: string;
                            order?: string;
                            env?: string;
                            user_identifier_type?: string;
                        };
                        path: { app_id: string; view_name: string };
                    },
                    options?: IRequestOptions
                ) => {
                    const { headers, params, data, path } =
                        await this.formatPayload(payload, options);

                    return this.httpInstance
                        .request<any, any>({
                            url: fillApiPath(
                                `${this.domain}/open-apis/spark/v1/apps/:app_id/views/:view_name/records`,
                                path
                            ),
                            method: "GET",
                            headers: pickBy(headers, identity),
                            params: pickBy(params, identity),
                            data,
                            paramsSerializer: (params) =>
                                stringify(params, { arrayFormat: "repeat" }),
                        })
                        .catch((e) => {
                            this.logger.error(formatErrors(e));
                            throw e;
                        });
                },
            },
            sql_commands: async (
                payload?: {
                    params?: { env?: string };
                    path: { app_id: string };
                    data?: { sql?: string };
                },
                options?: IRequestOptions
            ) => {
                const { headers, params, data, path } =
                    await this.formatPayload(payload, options);

                return this.httpInstance
                    .request<any, any>({
                        url: fillApiPath(
                            `${this.domain}/open-apis/spark/v1/apps/:app_id/sql_commands`,
                            path
                        ),
                        method: "POST",
                        headers: pickBy(headers, identity),
                        params: pickBy(params, identity),
                        data,
                        paramsSerializer: (params) =>
                            stringify(params, { arrayFormat: "repeat" }),
                    })
                    .catch((e) => {
                        this.logger.error(formatErrors(e));
                        throw e;
                    });
            },
        },
        directory: {
            user: {
                id_convert: async (
                    payload?: {
                        params?: { env?: string };
                        data?: {
                            id_convert_type?: string;
                            ids?: Array<string>;
                        };
                    },
                    options?: IRequestOptions
                ) => {
                    const { headers, params, data, path } =
                        await this.formatPayload(payload, options);

                    return this.httpInstance
                        .request<any, any>({
                            url: fillApiPath(
                                `${this.domain}/open-apis/spark/v1/directory/user/id_convert`,
                                path
                            ),
                            method: "POST",
                            headers: pickBy(headers, identity),
                            params: pickBy(params, identity),
                            data,
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
