import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Mood } from 'src/app/shared/data-types/mood';
import { Song } from 'src/app/shared/data-types/song';
import { MoodService } from 'src/app/shared/services/mood.service';
import { SongService } from 'src/app/shared/services/song.service';
import { HomepageComponent } from '../homepage/homepage.component';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.scss']
})
export class SongsComponent implements OnInit {
  name?: string;
  mood?: Mood;

  constructor(private route: ActivatedRoute,
              private songService: SongService,
              private moodService: MoodService,
              private router: Router) { }


  public displayedColumns = ["title", "artist", "duration", "link"];
  public dataSource:Song[] = [];
  public dataSourceUpdated:MatTableDataSource<Song> = new MatTableDataSource<Song>();
  id: number = this.route.snapshot.params.id;


  ngOnInit(): void {
    this.songService.findAllByMoodId(this.route.snapshot.params.id).subscribe(
      data => {
        this.dataSource = data;
        this.dataSourceUpdated.data = this.dataSource;
      },
      err => {
        console.log(err);
      }
    )

    this.moodService.findById(this.route.snapshot.params.id).subscribe(
      data => {
        this.mood = data;
        this.name = data.name; 
      }
    )
  }

}
