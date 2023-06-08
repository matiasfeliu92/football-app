import { apiFootballKey } from "../config/config";
import { axiosHttp } from "./axios";

const apikey = apiFootballKey || process.env.REACT_APP_API_KEY 

export default class DataService {
    getFixtures(from: string, to: string) {
        // return axiosHttp.get(`/?met=Fixtures&APIkey=4f8d87b6501ebe893b4158ed5731fce2a8c30cf834848c58d43151dd7313671b&from=${from}&to=${to}`);
        return axiosHttp.get(`/?met=Fixtures&APIkey=${apikey}&from=${from}&to=${to}`);

    }
}