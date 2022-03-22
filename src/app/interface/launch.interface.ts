export interface Launch {
    //mission
    flightNumber: number,   //for testing
    missionName: string,
    upcoming: boolean,
    dateLocal: string,
    launchSuccess: boolean,
    details: string,
    //  rocket
    rocketName: string,
    rocketType: string,
    //      fairings
    recovered: boolean,
    //  launch_site
    siteName: string
}