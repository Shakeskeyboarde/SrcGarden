import { type MarkedExtension } from 'marked';

export const markedTasks = (): MarkedExtension => {
  return {
    renderer: {
      listitem: (text: string, task, checked) => {
        const classes = [task && 'task', checked && 'checked'].filter(Boolean).join(' ');
        // Adding a "task" class to allow for custom styling.
        return `<li ${classes ? `class="${classes}"` : ''}>${text}</li>`;
      },
      checkbox: () => {
        // Don't render a checkboxes. CSS can add the checkbox.
        return '';
      },
    },
  };
};
