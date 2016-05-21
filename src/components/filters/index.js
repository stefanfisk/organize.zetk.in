import CallHistoryFilter from './CallHistoryFilter';
import CampaignFilter from './CampaignFilter';
import JoinDateFilter from './JoinDateFilter';
import PersonDataFilter from './PersonDataFilter';

const filterComponents = {
    'call_history': CallHistoryFilter,
    'campaign_participation': CampaignFilter,
    'join_date': JoinDateFilter,
    'person_data': PersonDataFilter
};

export function resolveFilterComponent(type) {
    return filterComponents[type];
}