import { NgModule } from '@angular/core';
import { NbCardModule } from '@nebular/theme';
import { NbTabsetModule } from '@nebular/theme'
import { NbButtonModule } from '@nebular/theme'
import { NbSelectModule } from '@nebular/theme'
import { NbInputModule, } from '@nebular/theme'
import { ThemeModule } from '../../@theme/theme.module';
import { ReportComponent } from './report.component';

@NgModule({
    imports: [
        NbCardModule,
        ThemeModule,
        NbTabsetModule,
        NbButtonModule,
        NbSelectModule,
        NbInputModule,
    ],
    declarations: [
        ReportComponent,
    ],
})
export class ReportModule { }
