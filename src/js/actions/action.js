import { Actions } from 'flummox';
import Z from 'zetkin';


export default class ActionActions extends Actions {
    constructor(flux) {
        super();

        this.flux = flux;
    }

    retrieveAllActions() {
        var orgId = this.flux.getStore('org').getActiveId();
        return Z.resource('orgs', orgId, 'actions').get();
    }
}