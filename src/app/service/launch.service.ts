import { Injectable } from "@angular/core";
import {HttpClient, HttpParams, HttpHeaders} from "@angular/common/http";
import { Observable } from "rxjs";
import { Launch } from "../interface/launch.interface";

@Injectable()
export class LaunchService {
    // testing
    //flightNumber: number = 1;

    constructor(private http:HttpClient) {}

    getAllLaunches(): Observable<Launch[]> {
        // const httpOptions = {
        //     headers: new HttpHeaders({
        //         'Authorization': 'AUTHORIZATION_CODE'
        //     })
        // };

        // https://api.spacexdata.com/v3/launches
        return this.http.get<Launch[]>(`https://api.spacexdata.com/v3/launches`)
    }
}