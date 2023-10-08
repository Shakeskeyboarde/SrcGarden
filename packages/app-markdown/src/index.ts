import { Marked } from 'marked';
import { gfmHeadingId } from 'marked-gfm-heading-id';
import { markedMath } from 'marked-math';
import { markedTasks } from 'marked-tasks';

export class Markdown {
  readonly #marked: Marked;
  constructor() {
    this.#marked = new Marked({ gfm: true }, gfmHeadingId(), markedMath(), markedTasks());
  }

  async parse(src: string): Promise<string> {
    return await this.#marked.parse(src);
  }
}
