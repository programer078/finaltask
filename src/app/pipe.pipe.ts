import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipe',
  standalone: true
})
export class PipePipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    if (!items || !searchText) {
      return items;  // Return all items if no search text
    }

    searchText = searchText.toLowerCase();  // Convert search text to lowercase
    return items.filter(item => 
      item.lin.toLowerCase().includes(searchText)  // Filter by `lin` property
    );
  }

}
