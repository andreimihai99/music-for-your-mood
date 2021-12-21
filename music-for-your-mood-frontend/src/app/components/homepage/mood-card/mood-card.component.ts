import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Mood } from 'src/app/shared/data-types/mood';
import { Song } from 'src/app/shared/data-types/song';
import { MoodService } from 'src/app/shared/services/mood.service';

@Component({
  selector: 'app-mood-card',
  templateUrl: './mood-card.component.html',
  styleUrls: ['./mood-card.component.scss']
})
export class MoodCardComponent implements OnInit {

  constructor(private moodService: MoodService,
              private router: Router) { }

  name: string = "";
  coverImage: string = "";
  moodId: number = 1;

  mood?: Mood = {
    name: "ceva",
    coverImage: "imagine"
  };

  ngOnInit(): void {
    // this.moodService.findById(1).subscribe(
    //   data => {
    //     this.mood = data;
    //   }
    // )
   // this.mood?.name
  }


  goToSongs(): void {
    this.router.navigate(["songs"]);
  }

}
