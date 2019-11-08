import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'ngx-user-activity',
  styleUrls: ['./user-activity.component.scss'],
  templateUrl: './user-activity.component.html',
})
export class ECommerceUserActivityComponent implements OnInit {

  ngOnInit() {

    $(document).ready(function () {

      $("#file").on("change", function (e) {

        var files = $(this)[0].files;

        if (files.length >= 2) {
          $("#label_span").text(files.length + " files ready to upload");
        } else {
          var filename = e.target.value.split('\\').pop();
          $("#label_span").text(filename);
        }
      });
    });

  }
}
