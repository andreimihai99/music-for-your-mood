import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Listener } from 'src/app/shared/data-types/listener';
import { ListenerService } from 'src/app/shared/services/listener.service';
import { LoginService } from 'src/app/shared/services/login.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.scss']
})
export class AllUsersComponent implements OnInit {

  constructor(private listenerService: LoginService) { }

  public displayedColumns = ["forename", "surname", "email", "is admin"];
  public dataSource:Listener[] = [];
  public dataSourceUpdated:MatTableDataSource<Listener> = new MatTableDataSource<Listener>();

  ngOnInit(): void {
    this.listenerService.findAll().subscribe(
      data => {
        this.dataSource = data;
        this.dataSourceUpdated.data = this.dataSource;
      }
    )
  }

}
