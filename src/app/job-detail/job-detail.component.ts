import { data } from './../JobsData';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.scss']
})
export class JobDetailComponent implements OnInit {

  jobs: any = {};
  id: number;
  constructor(private route: ActivatedRoute, private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.params.id);
    this.httpClient.get('assets/data.json').subscribe((res: any) => {
      this.jobs = res.data.find(value => value.id === this.id);
    });
  }

}
