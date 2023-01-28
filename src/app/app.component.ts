import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit {
  title = 'community-camping';
  countdown = '25.08. - 03.09.';

  ngOnInit(): void {
    setInterval(() => {
      const now = new Date();
      const camp = new Date(2023, 8, 25);
      const diff = camp.getTime() - now.getTime();
      if (diff > 0) {
        const diffDays = Math.floor(diff / 86400000); // days
        const diffHrs = Math.floor((diff % 86400000) / 3600000); // hours
        const diffMins = Math.round(((diff % 86400000) % 3600000) / 60000); // minutes
        const diffSecs = Math.floor((diff / 1000) % 60);

        let countdown = diffDays ? diffDays + ' Tage ' : '';
        countdown += diffHrs ? diffHrs + ' Stunden ' : '';
        countdown += diffMins ? diffMins + ' Minuten ' : '';
        countdown += diffSecs ? diffSecs + ' Sekunden ' : '';
        this.countdown = countdown;
      }
    }, 1000);
  }
}
