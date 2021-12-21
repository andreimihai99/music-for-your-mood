import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Listener } from 'src/app/shared/data-types/listener';
import { Mood } from 'src/app/shared/data-types/mood';
import { Song } from 'src/app/shared/data-types/song';
import { GenreService } from 'src/app/shared/services/genre.service';
import { ListenerService } from 'src/app/shared/services/listener.service';
import { LoginService } from 'src/app/shared/services/login.service';
import { MoodService } from 'src/app/shared/services/mood.service';
import { RegisterService } from 'src/app/shared/services/register.service';
import { SongService } from 'src/app/shared/services/song.service';
import { MatDialog } from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import { PopDialogService } from 'src/app/shared/services/pop-dialog.service';

@Component({
  selector: 'app-homepage-admin',
  templateUrl: './homepage-admin.component.html',
  styleUrls: ['./homepage-admin.component.scss']
})
export class HomepageAdminComponent implements OnInit {

  selectedMood: string = '';
  moods: string[] = [];

  selectedGenre: string = '';
  genres: string[] = [];

  listener?: Listener;
  deletedListener?: Listener;
  deletedSong?: Song;

  mood: Mood = new Mood();

  addSongFormGroup = this.formBuilder.group({
    title: ['', Validators.required],
    artist: ['', Validators.required],
    duration: ['', Validators.required],
    listen_link: ['', Validators.required],
    mood: ['', Validators.required],
    genre: ['', Validators.required]
  });

  makeAdminFormGroup = this.formBuilder.group({
    email: ['', Validators.required]
  })

  unmakeAdminFormGroup = this.formBuilder.group({
    email: ['', Validators.required]
  })

  addMoodFormGroup = this.formBuilder.group({
    name: ['', Validators.required],
    image: ['', Validators.required]
  })

  deleteMoodFormGroup = this.formBuilder.group({
    name: ['', Validators.required]
  })

  deleteListenerFormGroup = this.formBuilder.group({
    email: ['', Validators.required]
  })

  deleteSongFormGroup = this.formBuilder.group({
    title: ['', Validators.required],
    artist: ['', Validators.required]
  })

  constructor(private formBuilder: FormBuilder,
              private genreService: GenreService,
              private songService: SongService,
              private listenerService: ListenerService,
              private loginService: LoginService,
              private moodService: MoodService,
              private popDialogService: PopDialogService,
              private route: ActivatedRoute,
              private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.moodService.findAll().subscribe(
      data => {
        for(var mood of data) {
          this.moods.push(mood.name!);
        }
      }
    )

    this.genreService.findAll().subscribe(
      data => {
        for(var genre of data) {
          this.genres.push(genre.name!);
        }
      }
    )
  }

  onSubmit(): void {
    if(this.addSongFormGroup.status === 'VALID') {
      let song = new Song();

      song = {
        title: this.addSongFormGroup.value.title,
        artist: this.addSongFormGroup.value.artist,
        duration: this.addSongFormGroup.value.duration,
        listenLink: this.addSongFormGroup.value.listen_link,
        mood: this.addSongFormGroup.value.mood,
        genre: this.addSongFormGroup.value.genre
      }

      this.songService.addSong(song).subscribe(
        data => {
          this.addSongFormGroup.reset();
        }
      )
    }
  }

  onSubmitMakeAdmin(): void {
    this.loginService.findListenerByEmail(this.makeAdminFormGroup.value.email).subscribe(
      data => {
        this.listener = data;
        if(this.makeAdminFormGroup.status === 'VALID') {
          this.listenerService.makeAdmin(this.listener).subscribe(
            data => {
              this.makeAdminFormGroup.reset();
              this.openInSnackBar("Admin added", "Dismiss");
            }
          )
        }
      }
    )
  }

  onSubmitAddMood(): void {
    if(this.addMoodFormGroup.status === 'VALID'){
      let mood = new Mood();

      mood = {
        name: this.addMoodFormGroup.value.name,
        coverImage: this.addMoodFormGroup.value.image
      }

      this.moodService.addMood(mood).subscribe(
        data => {
          this.addMoodFormGroup.reset();
          this.openInSnackBar("Mood added", "Dismiss");
        }
      )
    }
  }
      
  onSubmitDeleteMood(): void {
      this.moodService.findByName(this.deleteMoodFormGroup.value.name).subscribe(
        data => {
          this.mood = data;
          if(this.deleteMoodFormGroup.status === 'VALID') {
            this.moodService.deleteMood(this.mood.id).subscribe(
              data => {
                this.deleteMoodFormGroup.reset();
                this.openInSnackBar("Mood deleted", "Dismiss");
              },
              err => {
                console.log(this.mood?.id);
              }
            )
          }
        }
      ) 
  }

  deleteMoodModal() {
    this.popDialogService.openModal("Delete mood", "Are you sure you want to delete this mood?", () => {
      this.onSubmitDeleteMood();
    }, () => {
      null;
    });
  }

  deleteListener(): void {
    this.loginService.findListenerByEmail(this.deleteListenerFormGroup.value.email).subscribe(
      data => {
        this.deletedListener = data;
        if(this.deleteListenerFormGroup.status === 'VALID') {
          this.listenerService.deleteListener(this.deletedListener.id).subscribe(
            data => {
              this.deleteListenerFormGroup.reset();
              this.openInSnackBar("Listener deleted", "Dismiss");
            },
            err => {
              console.log("error");
            }
          )
        }
      }
    )
  }

  deleteListenerModal() {
    this.popDialogService.openModal("Delete listener", "Are you sure you want to delete this listener?", () => {
      this.deleteListener();
    }, () => {
      null;
    });
  }

  deleteSong(): void {
    this.songService.findSongByTitleAndArtist(this.deleteSongFormGroup.value.title,
                                              this.deleteSongFormGroup.value.artist)
      .subscribe(
        data => {
          this.deletedSong = data;
          if(this.deleteSongFormGroup.status === 'VALID') {
            this.songService.deleteSong(this.deletedSong?.id).subscribe(
              data => {
                this.deleteSongFormGroup.reset();
                this.openInSnackBar("Song deleted", "Dismiss");
              }
            )
          }
        }
      )                                  
  }

  deleteSongModal() {
    this.popDialogService.openModal("Delete song", "Are you sure you want to delete this song?", () => {
      this.deleteSong();
    }, () => {
      null;
    });
  }

  onSubmitUnmakeAdmin(): void {
    this.loginService.findListenerByEmail(this.unmakeAdminFormGroup.value.email).subscribe(
      data => {
        this.listener = data;
        if(this.unmakeAdminFormGroup.status === 'VALID') {
          this.listenerService.unmakeAdmin(this.listener).subscribe(
            data => {
              this.makeAdminFormGroup.reset();
              this.openInSnackBar("Removed admin rights", "Dismiss");
            }
          )
        }
      }
    )
  }

  unmakeAdminModal() {
    this.popDialogService.openModal("Unmake admin", "Are you sure you want to take admin rights away from this listener?", () => {
      this.onSubmitMakeAdmin();
    }, () => {
      null;
    });
  }

  openInSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 4000
    });
  }

      
    
}
