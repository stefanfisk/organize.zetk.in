import * as types from '.';

export function createSmsDistribution(data, paneId) {
    return ({ dispatch, getState, z }) => {
        let orgId = getState().org.activeId;

        dispatch({
            type: types.CREATE_SMS_DISTRIBUTION,
            meta: { paneId },
            payload: {
                promise: z.resource('orgs', orgId, 'sms_distributions')
                    .post(data)
            },
        });
    };
}

export function retrieveSmsDistributions() {
    return ({ dispatch, getState, z }) => {
        let orgId = getState().org.activeId;

        dispatch({
            type: types.RETRIEVE_SMS_DISTRIBUTIONS,
            payload: {
                promise: z.resource('orgs', orgId, 'sms_distributions').get(),
            },
        });
    };
}
