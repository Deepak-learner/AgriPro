import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from "rxjs/operators";
import { WeedserviceService } from '../weedservice.service';


@Component({
  selector: 'app-addweed',
  templateUrl: './addweed.component.html',
  styleUrls: ['./addweed.component.css']
})
export class AddweedComponent implements OnInit {


  imgSrc: string;
  selectedImage: any = null;
  isSubmitted: boolean;

  formTemplate = new FormGroup({
    name: new FormControl('', Validators.required),
    type: new FormControl('', Validators.required),
    appearance: new FormControl('', Validators.required),
    control: new FormControl('', Validators.required),
    imageUrl: new FormControl('', Validators.required)
  })

  constructor(private storage: AngularFireStorage, private weedService: WeedserviceService) { }

  ngOnInit() {
    this.resetForm();
  }

  showPreview(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => this.imgSrc = e.target.result;
      reader.readAsDataURL(event.target.files[0]);
      this.selectedImage = event.target.files[0];
      console.log(this.selectedImage);
    }
    else {
      this.imgSrc = '/assets/img/image_placeholder.jpg';
      this.selectedImage = null;
    }
  }

  onSubmit(formValue) {
    console
    this.isSubmitted = true;
    if (this.formTemplate.valid) {
      var filePath = `weeds/${this.selectedImage.name.split('.').slice(0, -1).join('.')}_${new Date().getTime()}`;
      const fileRef = this.storage.ref(filePath);
      this.storage.upload(filePath, this.selectedImage).snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe((url) => {
            formValue['imageUrl'] = url;
            this.weedService.insertWeedDetails(formValue);
            this.resetForm();
          })
        })
      ).subscribe();
    }
  }

  get formControls() {
    return this.formTemplate['controls'];
  }

  resetForm() {
    this.formTemplate.reset();
    this.formTemplate.setValue({
      imageUrl: '',
      name: '',
      type: '',
      appearance: '',
      control: ''

    });
    this.imgSrc = '/assets/img/image_placeholder.jpg';
    this.selectedImage = null;
    this.isSubmitted = false;
  }
}
