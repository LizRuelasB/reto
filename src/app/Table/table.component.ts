import {Component} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { TableService } from '../../services/table.service';
import { MatDialog } from '@angular/material/dialog';
import { LandifyModalPostComponent } from '../../lib/components/landify-modal-post/landify-modal-post.component';

export interface TablePosts {
  name: string;
  username: string;
  address: string;
  email: string;
  phone: string,
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],

  animations: [
    trigger('detailExpand', [
      state('collapsed,void', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class TableComponent {
  dataSource = [];
  columnsToDisplay = ['name', 'username', 'address', 'email', 'phone'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement: TablePosts | null;
  dataPosts: [];
  id: any;

  constructor(
    private tableService: TableService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.callServiceUsers();
  }

  callServiceUsers(): void {
    this.tableService.getTableData().subscribe((data) => {
      this.dataSource = data.map( item => {
        return {
          name: item.name,
          username: item.username,
          address: `${item.address?.street}, ${item.address?.suite}, ${item.address?.city}`,
          email: item.email,
          phone: item.phone,
          id: item.id
        }
      })
    });
  }


  toggleExpansion(element: any): void {
    this.id = element.id;
    element.expanded = !element.expanded;
    if(element.expanded === true) {
      this.tableService.getPostUser(element?.id).subscribe(dataPosts => {
        this.dataPosts = dataPosts.map(item => {
          return {
            title: item.title,
            description: item.body
          }
        })
      })
    }
  }

  createPost() {
    const dialogRef = this.dialog.open(LandifyModalPostComponent, {
      width: '640px',
      data: { idUser: this.id }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Diálogo cerrado');
    });
  }

}





