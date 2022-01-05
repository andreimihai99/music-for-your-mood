import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Mood } from 'src/app/shared/data-types/mood';
import { Song } from 'src/app/shared/data-types/song';
import { MoodService } from 'src/app/shared/services/mood.service';
import { SongService } from 'src/app/shared/services/song.service';

@Component({
  selector: 'app-all-songs',
  templateUrl: './all-songs.component.html',
  styleUrls: ['./all-songs.component.scss']
})
export class AllSongsComponent implements OnInit {
  name?: string;

  constructor(private route: ActivatedRoute,
              private songService: SongService,
              private moodService: MoodService,
              private router: Router) { }


  public displayedColumns = ["title", "artist", "duration", "link"];
  public dataSource:Song[] = [];
  public dataSourceUpdated:MatTableDataSource<Song> = new MatTableDataSource<Song>();



  ngOnInit(): void {
    this.songService.findAll().subscribe(
      data => {
          this.dataSource = data;
          this.dataSourceUpdated.data = this.dataSource;
      }
    )
  }
}
