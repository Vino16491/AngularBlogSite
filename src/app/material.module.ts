import { NgModule } from "@angular/core";

import { MatButtonModule } from "@angular/material";
import { MatMenuModule } from "@angular/material/menu";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatIconModule } from "@angular/material/icon";
import { MatCardModule } from "@angular/material/card";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatChipsModule } from "@angular/material/chips";
import { MatInputModule } from "@angular/material/input";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatSelectModule } from "@angular/material/select";
import { MatListModule } from "@angular/material/list";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatDialogModule } from "@angular/material/dialog";
@NgModule({
  imports: [
    MatButtonModule,
    MatMenuModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatChipsModule,
    MatInputModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatListModule,
    MatSidenavModule,
    MatDialogModule
  ],
  exports: [
    MatButtonModule,
    MatMenuModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatChipsModule,
    MatInputModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatListModule,
    MatSidenavModule,
    MatDialogModule
  ]
})
export class MaterialModule {}
