import { Component, OnInit } from '@angular/core';
import { Launch } from '../interface/launch.interface';
import { LaunchService } from '../service/launch.service';

@Component({
  selector: 'app-launch-view',
  templateUrl: './launch-view.component.html',
  styleUrls: ['./launch-view.component.css']
})

export class LaunchViewComponent implements OnInit {

  launches: Launch[] = [];

  constructor(private service: LaunchService) { }

  ngOnInit(): void {
    this.service.getAllLaunches().subscribe(result => {
      console.log(result);

      this.launches = result as Launch[];

      this.launches.map(launch => {
        console.log(launch.missionName);
      });
    });
  }

}
