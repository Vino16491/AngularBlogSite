import { Injectable } from "@angular/core";
// import { IziToast, IziToastSettings } from "izitoast";
import { Ng2IzitoastService } from "ng2-izitoast";
import { ToastrService } from "ngx-toastr";

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

  /* config for toastr package */
  toastConfig : Object = {
    progressBar: true,
    timeOut: 3000,
    progressAnimation: "decreasing",
    closeButton: true,
    positionClass: "toast-top-center",
  };
  constructor(
    private toastService: Ng2IzitoastService,
    private toastr: ToastrService
  ) {}

  /* izitoast toast message methods */
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

  /* toastr package toast messages methods*/
  showSuccess(title, msg = "") {
    this.toastr.success(msg, title, this.toastConfig);
  }

  showWarn(title, msg = "") {
    this.toastr.warning(msg, title, this.toastConfig );
  }
  showError(title, msg=""){
    this.toastr.error(msg, title, this.toastConfig);
  }
  showInfo(title,msg=""){
    this.toastr.info(msg, title, this.toastConfig);
  }
}
