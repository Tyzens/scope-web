import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  NbButtonModule,
  NbInputModule,
  NbCardModule,
  NbProgressBarModule,
  NbTabsetModule,
  NbUserModule,
  NbIconModule,
  NbSelectModule,
  NbListModule,
} from '@nebular/theme';
import { CodemirrorModule } from '@ctrl/ngx-codemirror';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ThemeModule } from '../../@theme/theme.module';
import { ECommerceComponent } from './e-commerce.component';
import { ChartModule } from 'angular2-chartjs';
import { ECommerceUserActivityComponent } from './user-activity/user-activity.component';
import { CountryOrdersComponent } from './country-orders/country-orders.component';
import { CountryOrdersMapComponent } from './country-orders/map/country-orders-map.component';
import { CountryOrdersMapService } from './country-orders/map/country-orders-map.service';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { CountryOrdersChartComponent } from './country-orders/chart/country-orders-chart.component';

@NgModule({
  imports: [
    ThemeModule,
    NbCardModule,
    NbUserModule,
    NbButtonModule,
    NbIconModule,
    NbTabsetModule,
    NbSelectModule,
    NbInputModule,
    NbListModule,
    ChartModule,
    NbProgressBarModule,
    NgxEchartsModule,
    NgxChartsModule,
    LeafletModule,
    FormsModule,
    CodemirrorModule
  ],
  declarations: [
    ECommerceComponent,
    CountryOrdersComponent,
    CountryOrdersMapComponent,
    CountryOrdersChartComponent,
    ECommerceUserActivityComponent
  ],
  providers: [
    CountryOrdersMapService,
  ],
})
export class ECommerceModule { }
