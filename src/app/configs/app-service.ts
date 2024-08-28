import { AppConfig } from "./app-config";

export class AppService {
    public static appConfig: AppConfig = new AppConfig();

    public static getVersion() {
        return this.appConfig.AppVersion;
    }

    public static getPath(value: string) {
        const apiCluster: string = this.appConfig.Protocal + this.appConfig.ApiUrl;
        return apiCluster + value;
    }
}