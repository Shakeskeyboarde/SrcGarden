import { type MarkedExtension } from 'marked';

export const markedTasks = (): MarkedExtension => {
  return {
    renderer: {
      listitem: (text: string, task) => {
        return `<li ${task ? `class="task"` : ''}>${text}</li>`;
      },
      checkbox: (checked) => {
        return `<input type="checkbox" class="task-checkbox" disabled ${checked ? 'checked' : ''} />`;
      },
    },
  };
};
