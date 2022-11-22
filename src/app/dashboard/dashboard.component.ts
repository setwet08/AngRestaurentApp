import { Component, OnInit } from '@angular/core';
import { Restarent } from '../restarent';
import { RestarentService } from '../restarent.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  allRestarents:Restarent[]=[];
  displayedColumns: string[] = ['id', 'name','owner' ,'mobile', 'email','location'];


constructor(private restarent:RestarentService){}


  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
