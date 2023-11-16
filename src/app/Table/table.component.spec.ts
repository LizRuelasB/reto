import { ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialog } from '@angular/material/dialog';
import { of } from 'rxjs';

import { LandifyModalPostComponent } from '../../lib/components/landify-modal-post/landify-modal-post.component';
import { TableComponent } from './table.component';
import { TableService } from '../../services/table.service';

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;
  let tableServiceSpy: jasmine.SpyObj<TableService>;
  let matDialogSpy: jasmine.SpyObj<MatDialog>;

  beforeEach(() => {
    const tableServiceSpyObj = jasmine.createSpyObj('TableService', ['getTableData', 'getPostUser']);
    const matDialogSpyObj = jasmine.createSpyObj('MatDialog', ['open']);

    TestBed.configureTestingModule({
      declarations: [TableComponent],
      imports: [BrowserAnimationsModule],
      providers: [
        { provide: TableService, useValue: tableServiceSpyObj },
        { provide: MatDialog, useValue: matDialogSpyObj },
      ],
    });

    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    tableServiceSpy = TestBed.inject(TableService) as jasmine.SpyObj<TableService>;
    matDialogSpy = TestBed.inject(MatDialog) as jasmine.SpyObj<MatDialog>;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call service to get table data on init', fakeAsync(() => {
    const mockData: any[] = [{ }];
    tableServiceSpy.getTableData.and.returnValue(of(mockData));

    component.ngOnInit();
    tick();

    expect(tableServiceSpy.getTableData).toHaveBeenCalledWith();
    expect(component.dataSource).toEqual({} as any);
  }));

  it('should toggle expansion and call service to get post data', fakeAsync(() => {
    const mockElement: TableService = {} as any;
    const mockPostData: any[] = [{  }];
    tableServiceSpy.getPostUser.and.returnValue(of(mockPostData));

    component.toggleExpansion(mockElement);
    tick();

    expect(component.id).toBe(1);
 
    expect(tableServiceSpy.getPostUser).toHaveBeenCalledWith(1);
    expect(component.dataPosts).toEqual({} as any);
  }));

  it('should open modal when creating post', () => {
    const mockDialogRef = jasmine.createSpyObj('MatDialogRef', ['afterClosed']);
    matDialogSpy.open.and.returnValue(mockDialogRef);

    component.createPost();

    expect(matDialogSpy.open).toHaveBeenCalledWith(LandifyModalPostComponent, {
      width: '640px',
      data: { idUser: component.id },
    });
  });
});
