import { Injectable } from "@angular/core";
// import { IziToast, IziToastSettings } from "izitoast";
import { Ng2IzitoastService } from "ng2-izitoast";
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: "root"
})
export class SharedServiceService {
  iziToastModel = {
    timeout: 3000,
    close: true,
    pauseOnHover: true,
    theme: "light",
    position: "topCenter",
    progressBar: true,
    progressBarEasing: "linear",
    maxWidth: "500px",
    layout: 2,
    message: ""
  };
  constructor(private toastService: Ng2IzitoastService, private toastr:ToastrService) {}

  showSuccessMessage(msg) {
    this.iziToastModel.message = msg;
    this.toastService.success(this.iziToastModel);
  }
  showWarnMessage(msg) {
    this.iziToastModel.message = msg;
    this.iziToastModel["backgroundColor"] = "#FFA726";
    this.iziToastModel["progressBarColor"] = "#E65100";
    this.toastService.warning(this.iziToastModel);
  }
  showErrorMessage(msg) {
    this.iziToastModel.message = msg;
    this.toastService.error(this.iziToastModel);
  }
  showInfoMessage(msg) {
    this.iziToastModel.message = msg;
    this.iziToastModel["backgroundColor"] = "#fffffff0";
    this.iziToastModel["progressBarColor"] = "#00bcd4";
    this.toastService.info(this.iziToastModel);
  }

  showSuccess(msg) {
    this.toastr.success(msg);
  }
}
