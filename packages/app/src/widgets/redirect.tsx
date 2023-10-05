import { type FC, useEffect } from 'react';

interface Props {
  readonly to: string | URL;
  readonly replace?: boolean;
}

export const Redirect: FC<Props> = ({ to, replace = false }) => {
  const { href } = new URL(to, window.location.href);

  useEffect(() => {
    if (href !== window.location.href) {
      if (replace) {
        window.location.replace(href);
      } else {
        window.location.assign(href);
      }
    }
  }, [href, replace]);

  return (
    <p>
      Redirecting to <a href={href}>{href}</a>...
    </p>
  );
};
