import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Mood } from 'src/app/shared/data-types/mood';
import { MoodService } from 'src/app/shared/services/mood.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  moods?: Mood[];
  public currentMood?: Mood;

  constructor(private router: Router,
              private moodService: MoodService) { }

  ngOnInit(): void {
    this.moodService.findAll().subscribe(
      data => {
        this.moods = data;
      }
    )
  }

  goToSongs(mood: Mood): void {
    this.currentMood = mood;
    console.log(this.currentMood.name);
  }

  
}
