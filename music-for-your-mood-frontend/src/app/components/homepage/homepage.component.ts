import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Mood } from 'src/app/shared/data-types/mood';
import { Song } from 'src/app/shared/data-types/song';
import { MoodService } from 'src/app/shared/services/mood.service';
import { PopDialogService } from 'src/app/shared/services/pop-dialog.service';
import { SongService } from 'src/app/shared/services/song.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  moods?: Mood[];
  public currentMood?: Mood;
  public dataSource: Song[] = [];

  constructor(private router: Router,
              private moodService: MoodService,
              private songService: SongService,
              private popDialogService: PopDialogService) { }

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

  seeAllSongs(): void {
    this.router.navigate(["all-songs"]);
  }

  signOutListener(): void {
    this.router.navigate(["login"]);
  }

  modalSignOut(): void {
    this.popDialogService.openModal("Sign out", "Are you sure you want to sign out?", () => {
      this.signOutListener();
    }, () => {
      null;
    });
  }
  
}
