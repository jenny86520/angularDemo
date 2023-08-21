import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css'],
})
export class DefaultComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    /** 路徑 */
    // 快照取值（路徑一進來就快照）
    console.log('snapshot.params: ', this.route.snapshot.params);
    console.log(
      'snapshot.paramMap.get: ',
      this.route.snapshot.paramMap.get('id')
    );
    // 訂閱取值（會不停觸發）
    this.route.params.subscribe((params) => {
      console.log('params.subscribe: ', params);
    });
    this.route.paramMap.subscribe((params) => {
      console.log('paramMap.subscribe get: ', params.get('id'));
    });

    /** 查詢字串 */
    // 快照取值（路徑一進來就快照）
    console.log('snapshot.params: ', this.route.snapshot.queryParams);
    console.log(
      'snapshot.queryParamMap.get: ',
      this.route.snapshot.queryParamMap.get('id')
    );
    // 訂閱取值（會不停觸發）
    this.route.queryParams.subscribe((queryParams) => {
      console.log('queryParams.subscribe: ', queryParams);
    });
    this.route.queryParamMap.subscribe((queryParams) => {
      console.log('queryParamMap.subscribe get: ', queryParams.get('id'));
    });
  }
}
