import { type FC, useEffect } from 'react';

interface Props {
  readonly to: string | URL;
}

export const Redirect: FC<Props> = ({ to }) => {
  const { href } = new URL(to, window.location.href);

  useEffect(() => {
    if (href !== window.location.href) {
      window.location.replace(href);
    }
  }, [href]);

  return (
    <p>
      Redirecting to <a href={href}>{href}</a>...
    </p>
  );
};
