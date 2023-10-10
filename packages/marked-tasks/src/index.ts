import { type MarkedExtension } from 'marked';

export const markedTasks = (): MarkedExtension => {
  return {
    renderer: {
      listitem: (text: string, task, checkbox) => {
        return `<li ${task ? `class="task ${checkbox ? 'task-complete' : 'task-incomplete'}"` : ''}>${text}</li>`;
      },
      checkbox: () => {
        return '';
      },
    },
  };
};
