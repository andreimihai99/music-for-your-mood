import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Song } from 'src/app/shared/data-types/song';
import { GenreService } from 'src/app/shared/services/genre.service';
import { MoodService } from 'src/app/shared/services/mood.service';
import { SongService } from 'src/app/shared/services/song.service';

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

  addSongFormGroup = this.formBuilder.group({
    title: ['', Validators.required],
    artist: ['', Validators.required],
    duration: ['', Validators.required],
    listen_link: ['', Validators.required],
    mood: ['', Validators.required],
    genre: ['', Validators.required]
  });

  constructor(private formBuilder: FormBuilder,
              private moodService: MoodService,
              private genreService: GenreService,
              private songService: SongService) { }

  ngOnInit(): void {
    this.moodService.findAll().subscribe(
      data => {
        for(var object of data) {
          this.moods.push(object.name!);
        }
      }
    )

    this.genreService.findAll().subscribe(
      data => {
        for(var object of data) {
          this.genres.push(object.name!);
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

}
