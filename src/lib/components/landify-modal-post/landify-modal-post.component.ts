import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TableService } from '../../../services/table.service';

@Component({
  selector: 'app-landify-modal-post',
  templateUrl: './landify-modal-post.component.html',
  styleUrls: ['./landify-modal-post.component.scss'],
})
export class LandifyModalPostComponent implements OnInit {
  formPost!: FormGroup;

  constructor(
    private tableService: TableService,
    public dialogRef: MatDialogRef<LandifyModalPostComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    console.log(this.data)
    this.initFormPost()
  }

  initFormPost() {
    this.formPost = this.fb.group({
      title: ['', Validators.required],
      description: ['', [Validators.required]],
    });
  }

  savePost(){
    if(this.formPost?.valid) {
      const request = {
        title: this.formPost.value.title ,
        body: this.formPost.value.description,
        userId: this.data.idUser
      }
  
      this.tableService.postPost(request).subscribe((data) => {
        console.log(data)
        alert(JSON.stringify(data))
        this.closeDialog()
      })
    } else {
      alert('ambos campos son obligatorios')
    }
    
  }
  closeDialog(): void {
    this.dialogRef.close();
  }

}
