import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { of } from 'rxjs';
import { TableService } from '../../../services/table.service';
import { LandifyModalPostComponent } from './landify-modal-post.component';

describe('LandifyModalPostComponent', () => {
  let component: LandifyModalPostComponent;
  let fixture: ComponentFixture<LandifyModalPostComponent>;
  let tableServiceSpy: jasmine.SpyObj<TableService>;
  let dialogRefSpy: jasmine.SpyObj<MatDialogRef<LandifyModalPostComponent>>;

  beforeEach(() => {
    const tableServiceSpyObj = jasmine.createSpyObj('TableService', ['postPost']);
    const dialogRefSpyObj = jasmine.createSpyObj('MatDialogRef', ['close']);

    TestBed.configureTestingModule({
      declarations: [LandifyModalPostComponent],
      providers: [
        FormBuilder,
        { provide: TableService, useValue: tableServiceSpyObj },
        { provide: MatDialogRef, useValue: dialogRefSpyObj },
        { provide: MAT_DIALOG_DATA, useValue: { idUser: 1 } },
      ],
    });

    fixture = TestBed.createComponent(LandifyModalPostComponent);
    component = fixture.componentInstance;
    tableServiceSpy = TestBed.inject(TableService) as jasmine.SpyObj<TableService>;
    dialogRefSpy = TestBed.inject(MatDialogRef) as jasmine.SpyObj<MatDialogRef<LandifyModalPostComponent>>;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the form', () => {
    component.ngOnInit();
    expect(component.formPost).toBeDefined();
  });

  it('should save post if form is valid', () => {
    const mockFormValue = { title: 'Test Title', description: 'Test Description' };
    component.formPost.setValue(mockFormValue);
    tableServiceSpy.postPost.and.returnValue(of({}));

    component.savePost();

    expect(tableServiceSpy.postPost).toHaveBeenCalledWith({
      title: mockFormValue.title,
      body: mockFormValue.description,
      userId: TestBed.inject(MAT_DIALOG_DATA).idUser,
    });
    expect(dialogRefSpy.close).toHaveBeenCalled();
  });

  it('should show alert if form is invalid', () => {
    spyOn(window, 'alert');
    component.savePost();

    expect(window.alert).toHaveBeenCalledWith('ambos campos son obligatorios');
    expect(tableServiceSpy.postPost).not.toHaveBeenCalled();
    expect(dialogRefSpy.close).not.toHaveBeenCalled();
  });

  it('should close dialog', () => {
    component.closeDialog();
    expect(dialogRefSpy.close).toHaveBeenCalled();
  });
});
