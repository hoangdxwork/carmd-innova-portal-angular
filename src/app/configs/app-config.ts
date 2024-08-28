import { deploy } from "../../environments/deploy";
import { environment } from "../../environments/environment";
import { environment as environmentLive } from "../../environments/environment.live";
import { environment as environmentStaging } from "../../environments/environment.staging";

export class AppConfig {

    private protocol: string;
    public get Protocal(): string {
        return this.protocol;
    }

    private apiUrl: string;
    public get ApiUrl(): string {
        return this.apiUrl;
    }

    private appVersion: string;
    public get AppVersion(): string {
        return this.appVersion;
    }

    constructor() {
        switch (deploy.env) {
            case 'production':
                this.protocol = environmentLive.protocol;
                this.apiUrl = environmentLive.serverApiUrl;
                this.appVersion = environmentLive.appVersion;
                break;
            case 'staging':
                this.protocol = environmentStaging.protocol;
                this.apiUrl = environmentStaging.serverApiUrl;
                this.appVersion = environmentStaging.appVersion;
                break;
            default:
                this.protocol = environment.protocol;
                this.apiUrl = environment.serverApiUrl;
                this.appVersion = environment.appVersion;
                break;
        }
    }
}