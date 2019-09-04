import { NgModule } from '@angular/core';
import { MatButtonModule, MatToolbarModule, MatIconModule, MatSidenavModule, MatFormFieldModule, MatInputModule, MatTableModule } from '@angular/material';

const Material = [
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatFormFieldModule,
  MatInputModule,
  MatTableModule
];

@NgModule({
  imports: [Material],
  exports: [Material]
})
export class MaterialModule { }
