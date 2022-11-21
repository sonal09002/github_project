import { Component, OnInit } from '@angular/core';
import { GithubService } from 'src/app/api/github.service';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css'],
})
export class RepoComponent implements OnInit {
  repo: any;
  mapArray: any[] = [];
  page: number = 1;
  totalrecords: any;

  constructor(private service: GithubService) {}

  ngOnInit(): void {
    this.service.getrepoDetail().then((data) => {
      for (let i = 0; i < data.length; i++) {
        this.mapArray.push({
          name: data[i].name,
          visibility: data[i].visibility,
          description: data[i].description,
        });
        this.page = 0;
      }
      console.log('>>>>', this.mapArray);
      this.totalrecords = data.length;
    });
  }
  gty(page: any) {
    console.log(page, '<<');
  }
}
