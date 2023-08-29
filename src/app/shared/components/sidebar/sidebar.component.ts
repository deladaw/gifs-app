import { Component } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  constructor(private gifsService: GifsService) {}

  public history: string[] = this.gifsService.tagsHistory;

  get tags() {
    return this.gifsService.tagsHistory;
  }

  public historyTags(tag: string): void {
    this.gifsService.searchTag(tag);
  }
}
