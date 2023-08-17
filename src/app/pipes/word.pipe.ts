import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'word',
  // pure: false,
})
export class WordPipe implements PipeTransform {
  transform(value: string, ...args: string[]): string {
    return value.substring(0, 3) + `${args[0] || '...'}`;
  }
}
