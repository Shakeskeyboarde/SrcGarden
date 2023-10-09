/* eslint-disable max-lines, import/no-extraneous-dependencies */
/* Updated: 10/9/2023, 2:11:39 PM */
import { type FC, lazy, type LazyExoticComponent, type SVGProps } from 'react';

type Icon = LazyExoticComponent<FC<SVGProps<SVGSVGElement> & { title?: string | undefined }>>;

export const icons: Record<string, Icon> = {
  '12-hours': lazy(() => {
    return import('@tabler/icons/12-hours.svg?react');
  }),
  '123': lazy(() => {
    return import('@tabler/icons/123.svg?react');
  }),
  '24-hours': lazy(() => {
    return import('@tabler/icons/24-hours.svg?react');
  }),
  '2fa': lazy(() => {
    return import('@tabler/icons/2fa.svg?react');
  }),
  '360-view': lazy(() => {
    return import('@tabler/icons/360-view.svg?react');
  }),
  '360': lazy(() => {
    return import('@tabler/icons/360.svg?react');
  }),
  '3d-cube-sphere-off': lazy(() => {
    return import('@tabler/icons/3d-cube-sphere-off.svg?react');
  }),
  '3d-cube-sphere': lazy(() => {
    return import('@tabler/icons/3d-cube-sphere.svg?react');
  }),
  '3d-rotate': lazy(() => {
    return import('@tabler/icons/3d-rotate.svg?react');
  }),
  'a-b-2': lazy(() => {
    return import('@tabler/icons/a-b-2.svg?react');
  }),
  'a-b-off': lazy(() => {
    return import('@tabler/icons/a-b-off.svg?react');
  }),
  'a-b': lazy(() => {
    return import('@tabler/icons/a-b.svg?react');
  }),
  'abacus-off': lazy(() => {
    return import('@tabler/icons/abacus-off.svg?react');
  }),
  abacus: lazy(() => {
    return import('@tabler/icons/abacus.svg?react');
  }),
  abc: lazy(() => {
    return import('@tabler/icons/abc.svg?react');
  }),
  'access-point-off': lazy(() => {
    return import('@tabler/icons/access-point-off.svg?react');
  }),
  'access-point': lazy(() => {
    return import('@tabler/icons/access-point.svg?react');
  }),
  'accessible-off-filled': lazy(() => {
    return import('@tabler/icons/accessible-off-filled.svg?react');
  }),
  'accessible-off': lazy(() => {
    return import('@tabler/icons/accessible-off.svg?react');
  }),
  accessible: lazy(() => {
    return import('@tabler/icons/accessible.svg?react');
  }),
  'activity-heartbeat': lazy(() => {
    return import('@tabler/icons/activity-heartbeat.svg?react');
  }),
  activity: lazy(() => {
    return import('@tabler/icons/activity.svg?react');
  }),
  'ad-2': lazy(() => {
    return import('@tabler/icons/ad-2.svg?react');
  }),
  'ad-circle-filled': lazy(() => {
    return import('@tabler/icons/ad-circle-filled.svg?react');
  }),
  'ad-circle-off': lazy(() => {
    return import('@tabler/icons/ad-circle-off.svg?react');
  }),
  'ad-circle': lazy(() => {
    return import('@tabler/icons/ad-circle.svg?react');
  }),
  'ad-filled': lazy(() => {
    return import('@tabler/icons/ad-filled.svg?react');
  }),
  'ad-off': lazy(() => {
    return import('@tabler/icons/ad-off.svg?react');
  }),
  ad: lazy(() => {
    return import('@tabler/icons/ad.svg?react');
  }),
  'address-book-off': lazy(() => {
    return import('@tabler/icons/address-book-off.svg?react');
  }),
  'address-book': lazy(() => {
    return import('@tabler/icons/address-book.svg?react');
  }),
  'adjustments-alt': lazy(() => {
    return import('@tabler/icons/adjustments-alt.svg?react');
  }),
  'adjustments-bolt': lazy(() => {
    return import('@tabler/icons/adjustments-bolt.svg?react');
  }),
  'adjustments-cancel': lazy(() => {
    return import('@tabler/icons/adjustments-cancel.svg?react');
  }),
  'adjustments-check': lazy(() => {
    return import('@tabler/icons/adjustments-check.svg?react');
  }),
  'adjustments-code': lazy(() => {
    return import('@tabler/icons/adjustments-code.svg?react');
  }),
  'adjustments-cog': lazy(() => {
    return import('@tabler/icons/adjustments-cog.svg?react');
  }),
  'adjustments-dollar': lazy(() => {
    return import('@tabler/icons/adjustments-dollar.svg?react');
  }),
  'adjustments-down': lazy(() => {
    return import('@tabler/icons/adjustments-down.svg?react');
  }),
  'adjustments-exclamation': lazy(() => {
    return import('@tabler/icons/adjustments-exclamation.svg?react');
  }),
  'adjustments-filled': lazy(() => {
    return import('@tabler/icons/adjustments-filled.svg?react');
  }),
  'adjustments-heart': lazy(() => {
    return import('@tabler/icons/adjustments-heart.svg?react');
  }),
  'adjustments-horizontal': lazy(() => {
    return import('@tabler/icons/adjustments-horizontal.svg?react');
  }),
  'adjustments-minus': lazy(() => {
    return import('@tabler/icons/adjustments-minus.svg?react');
  }),
  'adjustments-off': lazy(() => {
    return import('@tabler/icons/adjustments-off.svg?react');
  }),
  'adjustments-pause': lazy(() => {
    return import('@tabler/icons/adjustments-pause.svg?react');
  }),
  'adjustments-pin': lazy(() => {
    return import('@tabler/icons/adjustments-pin.svg?react');
  }),
  'adjustments-plus': lazy(() => {
    return import('@tabler/icons/adjustments-plus.svg?react');
  }),
  'adjustments-question': lazy(() => {
    return import('@tabler/icons/adjustments-question.svg?react');
  }),
  'adjustments-search': lazy(() => {
    return import('@tabler/icons/adjustments-search.svg?react');
  }),
  'adjustments-share': lazy(() => {
    return import('@tabler/icons/adjustments-share.svg?react');
  }),
  'adjustments-star': lazy(() => {
    return import('@tabler/icons/adjustments-star.svg?react');
  }),
  'adjustments-up': lazy(() => {
    return import('@tabler/icons/adjustments-up.svg?react');
  }),
  'adjustments-x': lazy(() => {
    return import('@tabler/icons/adjustments-x.svg?react');
  }),
  adjustments: lazy(() => {
    return import('@tabler/icons/adjustments.svg?react');
  }),
  'aerial-lift': lazy(() => {
    return import('@tabler/icons/aerial-lift.svg?react');
  }),
  'affiliate-filled': lazy(() => {
    return import('@tabler/icons/affiliate-filled.svg?react');
  }),
  affiliate: lazy(() => {
    return import('@tabler/icons/affiliate.svg?react');
  }),
  'air-balloon': lazy(() => {
    return import('@tabler/icons/air-balloon.svg?react');
  }),
  'air-conditioning-disabled': lazy(() => {
    return import('@tabler/icons/air-conditioning-disabled.svg?react');
  }),
  'air-conditioning': lazy(() => {
    return import('@tabler/icons/air-conditioning.svg?react');
  }),
  'air-traffic-control': lazy(() => {
    return import('@tabler/icons/air-traffic-control.svg?react');
  }),
  'alarm-average': lazy(() => {
    return import('@tabler/icons/alarm-average.svg?react');
  }),
  'alarm-filled': lazy(() => {
    return import('@tabler/icons/alarm-filled.svg?react');
  }),
  'alarm-minus-filled': lazy(() => {
    return import('@tabler/icons/alarm-minus-filled.svg?react');
  }),
  'alarm-minus': lazy(() => {
    return import('@tabler/icons/alarm-minus.svg?react');
  }),
  'alarm-off': lazy(() => {
    return import('@tabler/icons/alarm-off.svg?react');
  }),
  'alarm-plus-filled': lazy(() => {
    return import('@tabler/icons/alarm-plus-filled.svg?react');
  }),
  'alarm-plus': lazy(() => {
    return import('@tabler/icons/alarm-plus.svg?react');
  }),
  'alarm-snooze-filled': lazy(() => {
    return import('@tabler/icons/alarm-snooze-filled.svg?react');
  }),
  'alarm-snooze': lazy(() => {
    return import('@tabler/icons/alarm-snooze.svg?react');
  }),
  alarm: lazy(() => {
    return import('@tabler/icons/alarm.svg?react');
  }),
  'album-off': lazy(() => {
    return import('@tabler/icons/album-off.svg?react');
  }),
  album: lazy(() => {
    return import('@tabler/icons/album.svg?react');
  }),
  'alert-circle-filled': lazy(() => {
    return import('@tabler/icons/alert-circle-filled.svg?react');
  }),
  'alert-circle-off': lazy(() => {
    return import('@tabler/icons/alert-circle-off.svg?react');
  }),
  'alert-circle': lazy(() => {
    return import('@tabler/icons/alert-circle.svg?react');
  }),
  'alert-hexagon-filled': lazy(() => {
    return import('@tabler/icons/alert-hexagon-filled.svg?react');
  }),
  'alert-hexagon-off': lazy(() => {
    return import('@tabler/icons/alert-hexagon-off.svg?react');
  }),
  'alert-hexagon': lazy(() => {
    return import('@tabler/icons/alert-hexagon.svg?react');
  }),
  'alert-octagon-filled': lazy(() => {
    return import('@tabler/icons/alert-octagon-filled.svg?react');
  }),
  'alert-octagon': lazy(() => {
    return import('@tabler/icons/alert-octagon.svg?react');
  }),
  'alert-small-off': lazy(() => {
    return import('@tabler/icons/alert-small-off.svg?react');
  }),
  'alert-small': lazy(() => {
    return import('@tabler/icons/alert-small.svg?react');
  }),
  'alert-square-filled': lazy(() => {
    return import('@tabler/icons/alert-square-filled.svg?react');
  }),
  'alert-square-rounded-filled': lazy(() => {
    return import('@tabler/icons/alert-square-rounded-filled.svg?react');
  }),
  'alert-square-rounded-off': lazy(() => {
    return import('@tabler/icons/alert-square-rounded-off.svg?react');
  }),
  'alert-square-rounded': lazy(() => {
    return import('@tabler/icons/alert-square-rounded.svg?react');
  }),
  'alert-square': lazy(() => {
    return import('@tabler/icons/alert-square.svg?react');
  }),
  'alert-triangle-filled': lazy(() => {
    return import('@tabler/icons/alert-triangle-filled.svg?react');
  }),
  'alert-triangle-off': lazy(() => {
    return import('@tabler/icons/alert-triangle-off.svg?react');
  }),
  'alert-triangle': lazy(() => {
    return import('@tabler/icons/alert-triangle.svg?react');
  }),
  'alien-filled': lazy(() => {
    return import('@tabler/icons/alien-filled.svg?react');
  }),
  alien: lazy(() => {
    return import('@tabler/icons/alien.svg?react');
  }),
  'align-box-bottom-center-filled': lazy(() => {
    return import('@tabler/icons/align-box-bottom-center-filled.svg?react');
  }),
  'align-box-bottom-center': lazy(() => {
    return import('@tabler/icons/align-box-bottom-center.svg?react');
  }),
  'align-box-bottom-left-filled': lazy(() => {
    return import('@tabler/icons/align-box-bottom-left-filled.svg?react');
  }),
  'align-box-bottom-left': lazy(() => {
    return import('@tabler/icons/align-box-bottom-left.svg?react');
  }),
  'align-box-bottom-right-filled': lazy(() => {
    return import('@tabler/icons/align-box-bottom-right-filled.svg?react');
  }),
  'align-box-bottom-right': lazy(() => {
    return import('@tabler/icons/align-box-bottom-right.svg?react');
  }),
  'align-box-center-bottom': lazy(() => {
    return import('@tabler/icons/align-box-center-bottom.svg?react');
  }),
  'align-box-center-middle-filled': lazy(() => {
    return import('@tabler/icons/align-box-center-middle-filled.svg?react');
  }),
  'align-box-center-middle': lazy(() => {
    return import('@tabler/icons/align-box-center-middle.svg?react');
  }),
  'align-box-center-stretch': lazy(() => {
    return import('@tabler/icons/align-box-center-stretch.svg?react');
  }),
  'align-box-center-top': lazy(() => {
    return import('@tabler/icons/align-box-center-top.svg?react');
  }),
  'align-box-left-bottom-filled': lazy(() => {
    return import('@tabler/icons/align-box-left-bottom-filled.svg?react');
  }),
  'align-box-left-bottom': lazy(() => {
    return import('@tabler/icons/align-box-left-bottom.svg?react');
  }),
  'align-box-left-middle-filled': lazy(() => {
    return import('@tabler/icons/align-box-left-middle-filled.svg?react');
  }),
  'align-box-left-middle': lazy(() => {
    return import('@tabler/icons/align-box-left-middle.svg?react');
  }),
  'align-box-left-stretch': lazy(() => {
    return import('@tabler/icons/align-box-left-stretch.svg?react');
  }),
  'align-box-left-top-filled': lazy(() => {
    return import('@tabler/icons/align-box-left-top-filled.svg?react');
  }),
  'align-box-left-top': lazy(() => {
    return import('@tabler/icons/align-box-left-top.svg?react');
  }),
  'align-box-right-bottom-filled': lazy(() => {
    return import('@tabler/icons/align-box-right-bottom-filled.svg?react');
  }),
  'align-box-right-bottom': lazy(() => {
    return import('@tabler/icons/align-box-right-bottom.svg?react');
  }),
  'align-box-right-middle-filled': lazy(() => {
    return import('@tabler/icons/align-box-right-middle-filled.svg?react');
  }),
  'align-box-right-middle': lazy(() => {
    return import('@tabler/icons/align-box-right-middle.svg?react');
  }),
  'align-box-right-stretch': lazy(() => {
    return import('@tabler/icons/align-box-right-stretch.svg?react');
  }),
  'align-box-right-top-filled': lazy(() => {
    return import('@tabler/icons/align-box-right-top-filled.svg?react');
  }),
  'align-box-right-top': lazy(() => {
    return import('@tabler/icons/align-box-right-top.svg?react');
  }),
  'align-box-top-center-filled': lazy(() => {
    return import('@tabler/icons/align-box-top-center-filled.svg?react');
  }),
  'align-box-top-center': lazy(() => {
    return import('@tabler/icons/align-box-top-center.svg?react');
  }),
  'align-box-top-left-filled': lazy(() => {
    return import('@tabler/icons/align-box-top-left-filled.svg?react');
  }),
  'align-box-top-left': lazy(() => {
    return import('@tabler/icons/align-box-top-left.svg?react');
  }),
  'align-box-top-right-filled': lazy(() => {
    return import('@tabler/icons/align-box-top-right-filled.svg?react');
  }),
  'align-box-top-right': lazy(() => {
    return import('@tabler/icons/align-box-top-right.svg?react');
  }),
  'align-center': lazy(() => {
    return import('@tabler/icons/align-center.svg?react');
  }),
  'align-justified': lazy(() => {
    return import('@tabler/icons/align-justified.svg?react');
  }),
  'align-left': lazy(() => {
    return import('@tabler/icons/align-left.svg?react');
  }),
  'align-right': lazy(() => {
    return import('@tabler/icons/align-right.svg?react');
  }),
  alpha: lazy(() => {
    return import('@tabler/icons/alpha.svg?react');
  }),
  'alphabet-cyrillic': lazy(() => {
    return import('@tabler/icons/alphabet-cyrillic.svg?react');
  }),
  'alphabet-greek': lazy(() => {
    return import('@tabler/icons/alphabet-greek.svg?react');
  }),
  'alphabet-latin': lazy(() => {
    return import('@tabler/icons/alphabet-latin.svg?react');
  }),
  alt: lazy(() => {
    return import('@tabler/icons/alt.svg?react');
  }),
  ambulance: lazy(() => {
    return import('@tabler/icons/ambulance.svg?react');
  }),
  ampersand: lazy(() => {
    return import('@tabler/icons/ampersand.svg?react');
  }),
  'analyze-filled': lazy(() => {
    return import('@tabler/icons/analyze-filled.svg?react');
  }),
  'analyze-off': lazy(() => {
    return import('@tabler/icons/analyze-off.svg?react');
  }),
  analyze: lazy(() => {
    return import('@tabler/icons/analyze.svg?react');
  }),
  'anchor-off': lazy(() => {
    return import('@tabler/icons/anchor-off.svg?react');
  }),
  anchor: lazy(() => {
    return import('@tabler/icons/anchor.svg?react');
  }),
  angle: lazy(() => {
    return import('@tabler/icons/angle.svg?react');
  }),
  ankh: lazy(() => {
    return import('@tabler/icons/ankh.svg?react');
  }),
  'antenna-bars-1': lazy(() => {
    return import('@tabler/icons/antenna-bars-1.svg?react');
  }),
  'antenna-bars-2': lazy(() => {
    return import('@tabler/icons/antenna-bars-2.svg?react');
  }),
  'antenna-bars-3': lazy(() => {
    return import('@tabler/icons/antenna-bars-3.svg?react');
  }),
  'antenna-bars-4': lazy(() => {
    return import('@tabler/icons/antenna-bars-4.svg?react');
  }),
  'antenna-bars-5': lazy(() => {
    return import('@tabler/icons/antenna-bars-5.svg?react');
  }),
  'antenna-bars-off': lazy(() => {
    return import('@tabler/icons/antenna-bars-off.svg?react');
  }),
  'antenna-off': lazy(() => {
    return import('@tabler/icons/antenna-off.svg?react');
  }),
  antenna: lazy(() => {
    return import('@tabler/icons/antenna.svg?react');
  }),
  'aperture-off': lazy(() => {
    return import('@tabler/icons/aperture-off.svg?react');
  }),
  aperture: lazy(() => {
    return import('@tabler/icons/aperture.svg?react');
  }),
  'api-app-off': lazy(() => {
    return import('@tabler/icons/api-app-off.svg?react');
  }),
  'api-app': lazy(() => {
    return import('@tabler/icons/api-app.svg?react');
  }),
  'api-off': lazy(() => {
    return import('@tabler/icons/api-off.svg?react');
  }),
  api: lazy(() => {
    return import('@tabler/icons/api.svg?react');
  }),
  'app-window-filled': lazy(() => {
    return import('@tabler/icons/app-window-filled.svg?react');
  }),
  'app-window': lazy(() => {
    return import('@tabler/icons/app-window.svg?react');
  }),
  apple: lazy(() => {
    return import('@tabler/icons/apple.svg?react');
  }),
  'apps-filled': lazy(() => {
    return import('@tabler/icons/apps-filled.svg?react');
  }),
  'apps-off': lazy(() => {
    return import('@tabler/icons/apps-off.svg?react');
  }),
  apps: lazy(() => {
    return import('@tabler/icons/apps.svg?react');
  }),
  'archery-arrow': lazy(() => {
    return import('@tabler/icons/archery-arrow.svg?react');
  }),
  'archive-filled': lazy(() => {
    return import('@tabler/icons/archive-filled.svg?react');
  }),
  'archive-off': lazy(() => {
    return import('@tabler/icons/archive-off.svg?react');
  }),
  archive: lazy(() => {
    return import('@tabler/icons/archive.svg?react');
  }),
  'armchair-2-off': lazy(() => {
    return import('@tabler/icons/armchair-2-off.svg?react');
  }),
  'armchair-2': lazy(() => {
    return import('@tabler/icons/armchair-2.svg?react');
  }),
  'armchair-off': lazy(() => {
    return import('@tabler/icons/armchair-off.svg?react');
  }),
  armchair: lazy(() => {
    return import('@tabler/icons/armchair.svg?react');
  }),
  'arrow-autofit-content-filled': lazy(() => {
    return import('@tabler/icons/arrow-autofit-content-filled.svg?react');
  }),
  'arrow-autofit-content': lazy(() => {
    return import('@tabler/icons/arrow-autofit-content.svg?react');
  }),
  'arrow-autofit-down': lazy(() => {
    return import('@tabler/icons/arrow-autofit-down.svg?react');
  }),
  'arrow-autofit-height': lazy(() => {
    return import('@tabler/icons/arrow-autofit-height.svg?react');
  }),
  'arrow-autofit-left': lazy(() => {
    return import('@tabler/icons/arrow-autofit-left.svg?react');
  }),
  'arrow-autofit-right': lazy(() => {
    return import('@tabler/icons/arrow-autofit-right.svg?react');
  }),
  'arrow-autofit-up': lazy(() => {
    return import('@tabler/icons/arrow-autofit-up.svg?react');
  }),
  'arrow-autofit-width': lazy(() => {
    return import('@tabler/icons/arrow-autofit-width.svg?react');
  }),
  'arrow-back-up-double': lazy(() => {
    return import('@tabler/icons/arrow-back-up-double.svg?react');
  }),
  'arrow-back-up': lazy(() => {
    return import('@tabler/icons/arrow-back-up.svg?react');
  }),
  'arrow-back': lazy(() => {
    return import('@tabler/icons/arrow-back.svg?react');
  }),
  'arrow-badge-down-filled': lazy(() => {
    return import('@tabler/icons/arrow-badge-down-filled.svg?react');
  }),
  'arrow-badge-down': lazy(() => {
    return import('@tabler/icons/arrow-badge-down.svg?react');
  }),
  'arrow-badge-left-filled': lazy(() => {
    return import('@tabler/icons/arrow-badge-left-filled.svg?react');
  }),
  'arrow-badge-left': lazy(() => {
    return import('@tabler/icons/arrow-badge-left.svg?react');
  }),
  'arrow-badge-right-filled': lazy(() => {
    return import('@tabler/icons/arrow-badge-right-filled.svg?react');
  }),
  'arrow-badge-right': lazy(() => {
    return import('@tabler/icons/arrow-badge-right.svg?react');
  }),
  'arrow-badge-up-filled': lazy(() => {
    return import('@tabler/icons/arrow-badge-up-filled.svg?react');
  }),
  'arrow-badge-up': lazy(() => {
    return import('@tabler/icons/arrow-badge-up.svg?react');
  }),
  'arrow-bar-both': lazy(() => {
    return import('@tabler/icons/arrow-bar-both.svg?react');
  }),
  'arrow-bar-down': lazy(() => {
    return import('@tabler/icons/arrow-bar-down.svg?react');
  }),
  'arrow-bar-left': lazy(() => {
    return import('@tabler/icons/arrow-bar-left.svg?react');
  }),
  'arrow-bar-right': lazy(() => {
    return import('@tabler/icons/arrow-bar-right.svg?react');
  }),
  'arrow-bar-to-down': lazy(() => {
    return import('@tabler/icons/arrow-bar-to-down.svg?react');
  }),
  'arrow-bar-to-left': lazy(() => {
    return import('@tabler/icons/arrow-bar-to-left.svg?react');
  }),
  'arrow-bar-to-right': lazy(() => {
    return import('@tabler/icons/arrow-bar-to-right.svg?react');
  }),
  'arrow-bar-to-up': lazy(() => {
    return import('@tabler/icons/arrow-bar-to-up.svg?react');
  }),
  'arrow-bar-up': lazy(() => {
    return import('@tabler/icons/arrow-bar-up.svg?react');
  }),
  'arrow-bear-left-2': lazy(() => {
    return import('@tabler/icons/arrow-bear-left-2.svg?react');
  }),
  'arrow-bear-left': lazy(() => {
    return import('@tabler/icons/arrow-bear-left.svg?react');
  }),
  'arrow-bear-right-2': lazy(() => {
    return import('@tabler/icons/arrow-bear-right-2.svg?react');
  }),
  'arrow-bear-right': lazy(() => {
    return import('@tabler/icons/arrow-bear-right.svg?react');
  }),
  'arrow-big-down-filled': lazy(() => {
    return import('@tabler/icons/arrow-big-down-filled.svg?react');
  }),
  'arrow-big-down-line-filled': lazy(() => {
    return import('@tabler/icons/arrow-big-down-line-filled.svg?react');
  }),
  'arrow-big-down-line': lazy(() => {
    return import('@tabler/icons/arrow-big-down-line.svg?react');
  }),
  'arrow-big-down-lines-filled': lazy(() => {
    return import('@tabler/icons/arrow-big-down-lines-filled.svg?react');
  }),
  'arrow-big-down-lines': lazy(() => {
    return import('@tabler/icons/arrow-big-down-lines.svg?react');
  }),
  'arrow-big-down': lazy(() => {
    return import('@tabler/icons/arrow-big-down.svg?react');
  }),
  'arrow-big-left-filled': lazy(() => {
    return import('@tabler/icons/arrow-big-left-filled.svg?react');
  }),
  'arrow-big-left-line-filled': lazy(() => {
    return import('@tabler/icons/arrow-big-left-line-filled.svg?react');
  }),
  'arrow-big-left-line': lazy(() => {
    return import('@tabler/icons/arrow-big-left-line.svg?react');
  }),
  'arrow-big-left-lines-filled': lazy(() => {
    return import('@tabler/icons/arrow-big-left-lines-filled.svg?react');
  }),
  'arrow-big-left-lines': lazy(() => {
    return import('@tabler/icons/arrow-big-left-lines.svg?react');
  }),
  'arrow-big-left': lazy(() => {
    return import('@tabler/icons/arrow-big-left.svg?react');
  }),
  'arrow-big-right-filled': lazy(() => {
    return import('@tabler/icons/arrow-big-right-filled.svg?react');
  }),
  'arrow-big-right-line-filled': lazy(() => {
    return import('@tabler/icons/arrow-big-right-line-filled.svg?react');
  }),
  'arrow-big-right-line': lazy(() => {
    return import('@tabler/icons/arrow-big-right-line.svg?react');
  }),
  'arrow-big-right-lines-filled': lazy(() => {
    return import('@tabler/icons/arrow-big-right-lines-filled.svg?react');
  }),
  'arrow-big-right-lines': lazy(() => {
    return import('@tabler/icons/arrow-big-right-lines.svg?react');
  }),
  'arrow-big-right': lazy(() => {
    return import('@tabler/icons/arrow-big-right.svg?react');
  }),
  'arrow-big-up-filled': lazy(() => {
    return import('@tabler/icons/arrow-big-up-filled.svg?react');
  }),
  'arrow-big-up-line-filled': lazy(() => {
    return import('@tabler/icons/arrow-big-up-line-filled.svg?react');
  }),
  'arrow-big-up-line': lazy(() => {
    return import('@tabler/icons/arrow-big-up-line.svg?react');
  }),
  'arrow-big-up-lines-filled': lazy(() => {
    return import('@tabler/icons/arrow-big-up-lines-filled.svg?react');
  }),
  'arrow-big-up-lines': lazy(() => {
    return import('@tabler/icons/arrow-big-up-lines.svg?react');
  }),
  'arrow-big-up': lazy(() => {
    return import('@tabler/icons/arrow-big-up.svg?react');
  }),
  'arrow-bounce': lazy(() => {
    return import('@tabler/icons/arrow-bounce.svg?react');
  }),
  'arrow-capsule': lazy(() => {
    return import('@tabler/icons/arrow-capsule.svg?react');
  }),
  'arrow-curve-left': lazy(() => {
    return import('@tabler/icons/arrow-curve-left.svg?react');
  }),
  'arrow-curve-right': lazy(() => {
    return import('@tabler/icons/arrow-curve-right.svg?react');
  }),
  'arrow-down-bar': lazy(() => {
    return import('@tabler/icons/arrow-down-bar.svg?react');
  }),
  'arrow-down-circle': lazy(() => {
    return import('@tabler/icons/arrow-down-circle.svg?react');
  }),
  'arrow-down-left-circle': lazy(() => {
    return import('@tabler/icons/arrow-down-left-circle.svg?react');
  }),
  'arrow-down-left': lazy(() => {
    return import('@tabler/icons/arrow-down-left.svg?react');
  }),
  'arrow-down-rhombus': lazy(() => {
    return import('@tabler/icons/arrow-down-rhombus.svg?react');
  }),
  'arrow-down-right-circle': lazy(() => {
    return import('@tabler/icons/arrow-down-right-circle.svg?react');
  }),
  'arrow-down-right': lazy(() => {
    return import('@tabler/icons/arrow-down-right.svg?react');
  }),
  'arrow-down-square': lazy(() => {
    return import('@tabler/icons/arrow-down-square.svg?react');
  }),
  'arrow-down-tail': lazy(() => {
    return import('@tabler/icons/arrow-down-tail.svg?react');
  }),
  'arrow-down': lazy(() => {
    return import('@tabler/icons/arrow-down.svg?react');
  }),
  'arrow-elbow-left': lazy(() => {
    return import('@tabler/icons/arrow-elbow-left.svg?react');
  }),
  'arrow-elbow-right': lazy(() => {
    return import('@tabler/icons/arrow-elbow-right.svg?react');
  }),
  'arrow-fork': lazy(() => {
    return import('@tabler/icons/arrow-fork.svg?react');
  }),
  'arrow-forward-up-double': lazy(() => {
    return import('@tabler/icons/arrow-forward-up-double.svg?react');
  }),
  'arrow-forward-up': lazy(() => {
    return import('@tabler/icons/arrow-forward-up.svg?react');
  }),
  'arrow-forward': lazy(() => {
    return import('@tabler/icons/arrow-forward.svg?react');
  }),
  'arrow-guide': lazy(() => {
    return import('@tabler/icons/arrow-guide.svg?react');
  }),
  'arrow-iteration': lazy(() => {
    return import('@tabler/icons/arrow-iteration.svg?react');
  }),
  'arrow-left-bar': lazy(() => {
    return import('@tabler/icons/arrow-left-bar.svg?react');
  }),
  'arrow-left-circle': lazy(() => {
    return import('@tabler/icons/arrow-left-circle.svg?react');
  }),
  'arrow-left-rhombus': lazy(() => {
    return import('@tabler/icons/arrow-left-rhombus.svg?react');
  }),
  'arrow-left-right': lazy(() => {
    return import('@tabler/icons/arrow-left-right.svg?react');
  }),
  'arrow-left-square': lazy(() => {
    return import('@tabler/icons/arrow-left-square.svg?react');
  }),
  'arrow-left-tail': lazy(() => {
    return import('@tabler/icons/arrow-left-tail.svg?react');
  }),
  'arrow-left': lazy(() => {
    return import('@tabler/icons/arrow-left.svg?react');
  }),
  'arrow-loop-left-2': lazy(() => {
    return import('@tabler/icons/arrow-loop-left-2.svg?react');
  }),
  'arrow-loop-left': lazy(() => {
    return import('@tabler/icons/arrow-loop-left.svg?react');
  }),
  'arrow-loop-right-2': lazy(() => {
    return import('@tabler/icons/arrow-loop-right-2.svg?react');
  }),
  'arrow-loop-right': lazy(() => {
    return import('@tabler/icons/arrow-loop-right.svg?react');
  }),
  'arrow-merge-alt-left': lazy(() => {
    return import('@tabler/icons/arrow-merge-alt-left.svg?react');
  }),
  'arrow-merge-alt-right': lazy(() => {
    return import('@tabler/icons/arrow-merge-alt-right.svg?react');
  }),
  'arrow-merge-both': lazy(() => {
    return import('@tabler/icons/arrow-merge-both.svg?react');
  }),
  'arrow-merge-left': lazy(() => {
    return import('@tabler/icons/arrow-merge-left.svg?react');
  }),
  'arrow-merge-right': lazy(() => {
    return import('@tabler/icons/arrow-merge-right.svg?react');
  }),
  'arrow-merge': lazy(() => {
    return import('@tabler/icons/arrow-merge.svg?react');
  }),
  'arrow-move-down': lazy(() => {
    return import('@tabler/icons/arrow-move-down.svg?react');
  }),
  'arrow-move-left': lazy(() => {
    return import('@tabler/icons/arrow-move-left.svg?react');
  }),
  'arrow-move-right': lazy(() => {
    return import('@tabler/icons/arrow-move-right.svg?react');
  }),
  'arrow-move-up': lazy(() => {
    return import('@tabler/icons/arrow-move-up.svg?react');
  }),
  'arrow-narrow-down': lazy(() => {
    return import('@tabler/icons/arrow-narrow-down.svg?react');
  }),
  'arrow-narrow-left': lazy(() => {
    return import('@tabler/icons/arrow-narrow-left.svg?react');
  }),
  'arrow-narrow-right': lazy(() => {
    return import('@tabler/icons/arrow-narrow-right.svg?react');
  }),
  'arrow-narrow-up': lazy(() => {
    return import('@tabler/icons/arrow-narrow-up.svg?react');
  }),
  'arrow-ramp-left-2': lazy(() => {
    return import('@tabler/icons/arrow-ramp-left-2.svg?react');
  }),
  'arrow-ramp-left-3': lazy(() => {
    return import('@tabler/icons/arrow-ramp-left-3.svg?react');
  }),
  'arrow-ramp-left': lazy(() => {
    return import('@tabler/icons/arrow-ramp-left.svg?react');
  }),
  'arrow-ramp-right-2': lazy(() => {
    return import('@tabler/icons/arrow-ramp-right-2.svg?react');
  }),
  'arrow-ramp-right-3': lazy(() => {
    return import('@tabler/icons/arrow-ramp-right-3.svg?react');
  }),
  'arrow-ramp-right': lazy(() => {
    return import('@tabler/icons/arrow-ramp-right.svg?react');
  }),
  'arrow-right-bar': lazy(() => {
    return import('@tabler/icons/arrow-right-bar.svg?react');
  }),
  'arrow-right-circle': lazy(() => {
    return import('@tabler/icons/arrow-right-circle.svg?react');
  }),
  'arrow-right-rhombus': lazy(() => {
    return import('@tabler/icons/arrow-right-rhombus.svg?react');
  }),
  'arrow-right-square': lazy(() => {
    return import('@tabler/icons/arrow-right-square.svg?react');
  }),
  'arrow-right-tail': lazy(() => {
    return import('@tabler/icons/arrow-right-tail.svg?react');
  }),
  'arrow-right': lazy(() => {
    return import('@tabler/icons/arrow-right.svg?react');
  }),
  'arrow-rotary-first-left': lazy(() => {
    return import('@tabler/icons/arrow-rotary-first-left.svg?react');
  }),
  'arrow-rotary-first-right': lazy(() => {
    return import('@tabler/icons/arrow-rotary-first-right.svg?react');
  }),
  'arrow-rotary-last-left': lazy(() => {
    return import('@tabler/icons/arrow-rotary-last-left.svg?react');
  }),
  'arrow-rotary-last-right': lazy(() => {
    return import('@tabler/icons/arrow-rotary-last-right.svg?react');
  }),
  'arrow-rotary-left': lazy(() => {
    return import('@tabler/icons/arrow-rotary-left.svg?react');
  }),
  'arrow-rotary-right': lazy(() => {
    return import('@tabler/icons/arrow-rotary-right.svg?react');
  }),
  'arrow-rotary-straight': lazy(() => {
    return import('@tabler/icons/arrow-rotary-straight.svg?react');
  }),
  'arrow-roundabout-left': lazy(() => {
    return import('@tabler/icons/arrow-roundabout-left.svg?react');
  }),
  'arrow-roundabout-right': lazy(() => {
    return import('@tabler/icons/arrow-roundabout-right.svg?react');
  }),
  'arrow-sharp-turn-left': lazy(() => {
    return import('@tabler/icons/arrow-sharp-turn-left.svg?react');
  }),
  'arrow-sharp-turn-right': lazy(() => {
    return import('@tabler/icons/arrow-sharp-turn-right.svg?react');
  }),
  'arrow-up-bar': lazy(() => {
    return import('@tabler/icons/arrow-up-bar.svg?react');
  }),
  'arrow-up-circle': lazy(() => {
    return import('@tabler/icons/arrow-up-circle.svg?react');
  }),
  'arrow-up-left-circle': lazy(() => {
    return import('@tabler/icons/arrow-up-left-circle.svg?react');
  }),
  'arrow-up-left': lazy(() => {
    return import('@tabler/icons/arrow-up-left.svg?react');
  }),
  'arrow-up-rhombus': lazy(() => {
    return import('@tabler/icons/arrow-up-rhombus.svg?react');
  }),
  'arrow-up-right-circle': lazy(() => {
    return import('@tabler/icons/arrow-up-right-circle.svg?react');
  }),
  'arrow-up-right': lazy(() => {
    return import('@tabler/icons/arrow-up-right.svg?react');
  }),
  'arrow-up-square': lazy(() => {
    return import('@tabler/icons/arrow-up-square.svg?react');
  }),
  'arrow-up-tail': lazy(() => {
    return import('@tabler/icons/arrow-up-tail.svg?react');
  }),
  'arrow-up': lazy(() => {
    return import('@tabler/icons/arrow-up.svg?react');
  }),
  'arrow-wave-left-down': lazy(() => {
    return import('@tabler/icons/arrow-wave-left-down.svg?react');
  }),
  'arrow-wave-left-up': lazy(() => {
    return import('@tabler/icons/arrow-wave-left-up.svg?react');
  }),
  'arrow-wave-right-down': lazy(() => {
    return import('@tabler/icons/arrow-wave-right-down.svg?react');
  }),
  'arrow-wave-right-up': lazy(() => {
    return import('@tabler/icons/arrow-wave-right-up.svg?react');
  }),
  'arrow-zig-zag': lazy(() => {
    return import('@tabler/icons/arrow-zig-zag.svg?react');
  }),
  'arrows-cross': lazy(() => {
    return import('@tabler/icons/arrows-cross.svg?react');
  }),
  'arrows-diagonal-2': lazy(() => {
    return import('@tabler/icons/arrows-diagonal-2.svg?react');
  }),
  'arrows-diagonal-minimize-2': lazy(() => {
    return import('@tabler/icons/arrows-diagonal-minimize-2.svg?react');
  }),
  'arrows-diagonal-minimize': lazy(() => {
    return import('@tabler/icons/arrows-diagonal-minimize.svg?react');
  }),
  'arrows-diagonal': lazy(() => {
    return import('@tabler/icons/arrows-diagonal.svg?react');
  }),
  'arrows-diff': lazy(() => {
    return import('@tabler/icons/arrows-diff.svg?react');
  }),
  'arrows-double-ne-sw': lazy(() => {
    return import('@tabler/icons/arrows-double-ne-sw.svg?react');
  }),
  'arrows-double-nw-se': lazy(() => {
    return import('@tabler/icons/arrows-double-nw-se.svg?react');
  }),
  'arrows-double-se-nw': lazy(() => {
    return import('@tabler/icons/arrows-double-se-nw.svg?react');
  }),
  'arrows-double-sw-ne': lazy(() => {
    return import('@tabler/icons/arrows-double-sw-ne.svg?react');
  }),
  'arrows-down-up': lazy(() => {
    return import('@tabler/icons/arrows-down-up.svg?react');
  }),
  'arrows-down': lazy(() => {
    return import('@tabler/icons/arrows-down.svg?react');
  }),
  'arrows-exchange-2': lazy(() => {
    return import('@tabler/icons/arrows-exchange-2.svg?react');
  }),
  'arrows-exchange': lazy(() => {
    return import('@tabler/icons/arrows-exchange.svg?react');
  }),
  'arrows-horizontal': lazy(() => {
    return import('@tabler/icons/arrows-horizontal.svg?react');
  }),
  'arrows-join-2': lazy(() => {
    return import('@tabler/icons/arrows-join-2.svg?react');
  }),
  'arrows-join': lazy(() => {
    return import('@tabler/icons/arrows-join.svg?react');
  }),
  'arrows-left-down': lazy(() => {
    return import('@tabler/icons/arrows-left-down.svg?react');
  }),
  'arrows-left-right': lazy(() => {
    return import('@tabler/icons/arrows-left-right.svg?react');
  }),
  'arrows-left': lazy(() => {
    return import('@tabler/icons/arrows-left.svg?react');
  }),
  'arrows-maximize': lazy(() => {
    return import('@tabler/icons/arrows-maximize.svg?react');
  }),
  'arrows-minimize': lazy(() => {
    return import('@tabler/icons/arrows-minimize.svg?react');
  }),
  'arrows-move-horizontal': lazy(() => {
    return import('@tabler/icons/arrows-move-horizontal.svg?react');
  }),
  'arrows-move-vertical': lazy(() => {
    return import('@tabler/icons/arrows-move-vertical.svg?react');
  }),
  'arrows-move': lazy(() => {
    return import('@tabler/icons/arrows-move.svg?react');
  }),
  'arrows-random': lazy(() => {
    return import('@tabler/icons/arrows-random.svg?react');
  }),
  'arrows-right-down': lazy(() => {
    return import('@tabler/icons/arrows-right-down.svg?react');
  }),
  'arrows-right-left': lazy(() => {
    return import('@tabler/icons/arrows-right-left.svg?react');
  }),
  'arrows-right': lazy(() => {
    return import('@tabler/icons/arrows-right.svg?react');
  }),
  'arrows-shuffle-2': lazy(() => {
    return import('@tabler/icons/arrows-shuffle-2.svg?react');
  }),
  'arrows-shuffle': lazy(() => {
    return import('@tabler/icons/arrows-shuffle.svg?react');
  }),
  'arrows-sort': lazy(() => {
    return import('@tabler/icons/arrows-sort.svg?react');
  }),
  'arrows-split-2': lazy(() => {
    return import('@tabler/icons/arrows-split-2.svg?react');
  }),
  'arrows-split': lazy(() => {
    return import('@tabler/icons/arrows-split.svg?react');
  }),
  'arrows-transfer-down': lazy(() => {
    return import('@tabler/icons/arrows-transfer-down.svg?react');
  }),
  'arrows-transfer-up': lazy(() => {
    return import('@tabler/icons/arrows-transfer-up.svg?react');
  }),
  'arrows-up-down': lazy(() => {
    return import('@tabler/icons/arrows-up-down.svg?react');
  }),
  'arrows-up-left': lazy(() => {
    return import('@tabler/icons/arrows-up-left.svg?react');
  }),
  'arrows-up-right': lazy(() => {
    return import('@tabler/icons/arrows-up-right.svg?react');
  }),
  'arrows-up': lazy(() => {
    return import('@tabler/icons/arrows-up.svg?react');
  }),
  'arrows-vertical': lazy(() => {
    return import('@tabler/icons/arrows-vertical.svg?react');
  }),
  'artboard-filled': lazy(() => {
    return import('@tabler/icons/artboard-filled.svg?react');
  }),
  'artboard-off': lazy(() => {
    return import('@tabler/icons/artboard-off.svg?react');
  }),
  artboard: lazy(() => {
    return import('@tabler/icons/artboard.svg?react');
  }),
  'article-filled-filled': lazy(() => {
    return import('@tabler/icons/article-filled-filled.svg?react');
  }),
  'article-off': lazy(() => {
    return import('@tabler/icons/article-off.svg?react');
  }),
  article: lazy(() => {
    return import('@tabler/icons/article.svg?react');
  }),
  'aspect-ratio-filled': lazy(() => {
    return import('@tabler/icons/aspect-ratio-filled.svg?react');
  }),
  'aspect-ratio-off': lazy(() => {
    return import('@tabler/icons/aspect-ratio-off.svg?react');
  }),
  'aspect-ratio': lazy(() => {
    return import('@tabler/icons/aspect-ratio.svg?react');
  }),
  'assembly-off': lazy(() => {
    return import('@tabler/icons/assembly-off.svg?react');
  }),
  assembly: lazy(() => {
    return import('@tabler/icons/assembly.svg?react');
  }),
  asset: lazy(() => {
    return import('@tabler/icons/asset.svg?react');
  }),
  'asterisk-simple': lazy(() => {
    return import('@tabler/icons/asterisk-simple.svg?react');
  }),
  asterisk: lazy(() => {
    return import('@tabler/icons/asterisk.svg?react');
  }),
  'at-off': lazy(() => {
    return import('@tabler/icons/at-off.svg?react');
  }),
  at: lazy(() => {
    return import('@tabler/icons/at.svg?react');
  }),
  'atom-2-filled': lazy(() => {
    return import('@tabler/icons/atom-2-filled.svg?react');
  }),
  'atom-2': lazy(() => {
    return import('@tabler/icons/atom-2.svg?react');
  }),
  'atom-off': lazy(() => {
    return import('@tabler/icons/atom-off.svg?react');
  }),
  atom: lazy(() => {
    return import('@tabler/icons/atom.svg?react');
  }),
  'augmented-reality-2': lazy(() => {
    return import('@tabler/icons/augmented-reality-2.svg?react');
  }),
  'augmented-reality-off': lazy(() => {
    return import('@tabler/icons/augmented-reality-off.svg?react');
  }),
  'augmented-reality': lazy(() => {
    return import('@tabler/icons/augmented-reality.svg?react');
  }),
  'automatic-gearbox': lazy(() => {
    return import('@tabler/icons/automatic-gearbox.svg?react');
  }),
  'award-filled': lazy(() => {
    return import('@tabler/icons/award-filled.svg?react');
  }),
  'award-off': lazy(() => {
    return import('@tabler/icons/award-off.svg?react');
  }),
  award: lazy(() => {
    return import('@tabler/icons/award.svg?react');
  }),
  axe: lazy(() => {
    return import('@tabler/icons/axe.svg?react');
  }),
  'axis-x': lazy(() => {
    return import('@tabler/icons/axis-x.svg?react');
  }),
  'axis-y': lazy(() => {
    return import('@tabler/icons/axis-y.svg?react');
  }),
  'baby-bottle': lazy(() => {
    return import('@tabler/icons/baby-bottle.svg?react');
  }),
  'baby-carriage': lazy(() => {
    return import('@tabler/icons/baby-carriage.svg?react');
  }),
  backhoe: lazy(() => {
    return import('@tabler/icons/backhoe.svg?react');
  }),
  'backpack-off': lazy(() => {
    return import('@tabler/icons/backpack-off.svg?react');
  }),
  backpack: lazy(() => {
    return import('@tabler/icons/backpack.svg?react');
  }),
  backslash: lazy(() => {
    return import('@tabler/icons/backslash.svg?react');
  }),
  'backspace-filled': lazy(() => {
    return import('@tabler/icons/backspace-filled.svg?react');
  }),
  backspace: lazy(() => {
    return import('@tabler/icons/backspace.svg?react');
  }),
  'badge-3d': lazy(() => {
    return import('@tabler/icons/badge-3d.svg?react');
  }),
  'badge-4k': lazy(() => {
    return import('@tabler/icons/badge-4k.svg?react');
  }),
  'badge-8k': lazy(() => {
    return import('@tabler/icons/badge-8k.svg?react');
  }),
  'badge-ad': lazy(() => {
    return import('@tabler/icons/badge-ad.svg?react');
  }),
  'badge-ar': lazy(() => {
    return import('@tabler/icons/badge-ar.svg?react');
  }),
  'badge-cc': lazy(() => {
    return import('@tabler/icons/badge-cc.svg?react');
  }),
  'badge-filled': lazy(() => {
    return import('@tabler/icons/badge-filled.svg?react');
  }),
  'badge-hd': lazy(() => {
    return import('@tabler/icons/badge-hd.svg?react');
  }),
  'badge-off': lazy(() => {
    return import('@tabler/icons/badge-off.svg?react');
  }),
  'badge-sd': lazy(() => {
    return import('@tabler/icons/badge-sd.svg?react');
  }),
  'badge-tm': lazy(() => {
    return import('@tabler/icons/badge-tm.svg?react');
  }),
  'badge-vo': lazy(() => {
    return import('@tabler/icons/badge-vo.svg?react');
  }),
  'badge-vr': lazy(() => {
    return import('@tabler/icons/badge-vr.svg?react');
  }),
  'badge-wc': lazy(() => {
    return import('@tabler/icons/badge-wc.svg?react');
  }),
  badge: lazy(() => {
    return import('@tabler/icons/badge.svg?react');
  }),
  'badges-filled': lazy(() => {
    return import('@tabler/icons/badges-filled.svg?react');
  }),
  'badges-off': lazy(() => {
    return import('@tabler/icons/badges-off.svg?react');
  }),
  badges: lazy(() => {
    return import('@tabler/icons/badges.svg?react');
  }),
  baguette: lazy(() => {
    return import('@tabler/icons/baguette.svg?react');
  }),
  'ball-american-football-off': lazy(() => {
    return import('@tabler/icons/ball-american-football-off.svg?react');
  }),
  'ball-american-football': lazy(() => {
    return import('@tabler/icons/ball-american-football.svg?react');
  }),
  'ball-baseball': lazy(() => {
    return import('@tabler/icons/ball-baseball.svg?react');
  }),
  'ball-basketball': lazy(() => {
    return import('@tabler/icons/ball-basketball.svg?react');
  }),
  'ball-bowling': lazy(() => {
    return import('@tabler/icons/ball-bowling.svg?react');
  }),
  'ball-football-off': lazy(() => {
    return import('@tabler/icons/ball-football-off.svg?react');
  }),
  'ball-football': lazy(() => {
    return import('@tabler/icons/ball-football.svg?react');
  }),
  'ball-tennis': lazy(() => {
    return import('@tabler/icons/ball-tennis.svg?react');
  }),
  'ball-volleyball': lazy(() => {
    return import('@tabler/icons/ball-volleyball.svg?react');
  }),
  'balloon-filled': lazy(() => {
    return import('@tabler/icons/balloon-filled.svg?react');
  }),
  'balloon-off': lazy(() => {
    return import('@tabler/icons/balloon-off.svg?react');
  }),
  balloon: lazy(() => {
    return import('@tabler/icons/balloon.svg?react');
  }),
  'ballpen-filled': lazy(() => {
    return import('@tabler/icons/ballpen-filled.svg?react');
  }),
  'ballpen-off': lazy(() => {
    return import('@tabler/icons/ballpen-off.svg?react');
  }),
  ballpen: lazy(() => {
    return import('@tabler/icons/ballpen.svg?react');
  }),
  ban: lazy(() => {
    return import('@tabler/icons/ban.svg?react');
  }),
  'bandage-filled': lazy(() => {
    return import('@tabler/icons/bandage-filled.svg?react');
  }),
  'bandage-off': lazy(() => {
    return import('@tabler/icons/bandage-off.svg?react');
  }),
  bandage: lazy(() => {
    return import('@tabler/icons/bandage.svg?react');
  }),
  'barbell-off': lazy(() => {
    return import('@tabler/icons/barbell-off.svg?react');
  }),
  barbell: lazy(() => {
    return import('@tabler/icons/barbell.svg?react');
  }),
  'barcode-off': lazy(() => {
    return import('@tabler/icons/barcode-off.svg?react');
  }),
  barcode: lazy(() => {
    return import('@tabler/icons/barcode.svg?react');
  }),
  'barrel-off': lazy(() => {
    return import('@tabler/icons/barrel-off.svg?react');
  }),
  barrel: lazy(() => {
    return import('@tabler/icons/barrel.svg?react');
  }),
  'barrier-block-off': lazy(() => {
    return import('@tabler/icons/barrier-block-off.svg?react');
  }),
  'barrier-block': lazy(() => {
    return import('@tabler/icons/barrier-block.svg?react');
  }),
  'baseline-density-large': lazy(() => {
    return import('@tabler/icons/baseline-density-large.svg?react');
  }),
  'baseline-density-medium': lazy(() => {
    return import('@tabler/icons/baseline-density-medium.svg?react');
  }),
  'baseline-density-small': lazy(() => {
    return import('@tabler/icons/baseline-density-small.svg?react');
  }),
  baseline: lazy(() => {
    return import('@tabler/icons/baseline.svg?react');
  }),
  'basket-bolt': lazy(() => {
    return import('@tabler/icons/basket-bolt.svg?react');
  }),
  'basket-cancel': lazy(() => {
    return import('@tabler/icons/basket-cancel.svg?react');
  }),
  'basket-check': lazy(() => {
    return import('@tabler/icons/basket-check.svg?react');
  }),
  'basket-code': lazy(() => {
    return import('@tabler/icons/basket-code.svg?react');
  }),
  'basket-cog': lazy(() => {
    return import('@tabler/icons/basket-cog.svg?react');
  }),
  'basket-discount': lazy(() => {
    return import('@tabler/icons/basket-discount.svg?react');
  }),
  'basket-dollar': lazy(() => {
    return import('@tabler/icons/basket-dollar.svg?react');
  }),
  'basket-down': lazy(() => {
    return import('@tabler/icons/basket-down.svg?react');
  }),
  'basket-exclamation': lazy(() => {
    return import('@tabler/icons/basket-exclamation.svg?react');
  }),
  'basket-filled': lazy(() => {
    return import('@tabler/icons/basket-filled.svg?react');
  }),
  'basket-heart': lazy(() => {
    return import('@tabler/icons/basket-heart.svg?react');
  }),
  'basket-minus': lazy(() => {
    return import('@tabler/icons/basket-minus.svg?react');
  }),
  'basket-off': lazy(() => {
    return import('@tabler/icons/basket-off.svg?react');
  }),
  'basket-pause': lazy(() => {
    return import('@tabler/icons/basket-pause.svg?react');
  }),
  'basket-pin': lazy(() => {
    return import('@tabler/icons/basket-pin.svg?react');
  }),
  'basket-plus': lazy(() => {
    return import('@tabler/icons/basket-plus.svg?react');
  }),
  'basket-question': lazy(() => {
    return import('@tabler/icons/basket-question.svg?react');
  }),
  'basket-search': lazy(() => {
    return import('@tabler/icons/basket-search.svg?react');
  }),
  'basket-share': lazy(() => {
    return import('@tabler/icons/basket-share.svg?react');
  }),
  'basket-star': lazy(() => {
    return import('@tabler/icons/basket-star.svg?react');
  }),
  'basket-up': lazy(() => {
    return import('@tabler/icons/basket-up.svg?react');
  }),
  'basket-x': lazy(() => {
    return import('@tabler/icons/basket-x.svg?react');
  }),
  basket: lazy(() => {
    return import('@tabler/icons/basket.svg?react');
  }),
  bat: lazy(() => {
    return import('@tabler/icons/bat.svg?react');
  }),
  'bath-filled': lazy(() => {
    return import('@tabler/icons/bath-filled.svg?react');
  }),
  'bath-off': lazy(() => {
    return import('@tabler/icons/bath-off.svg?react');
  }),
  bath: lazy(() => {
    return import('@tabler/icons/bath.svg?react');
  }),
  'battery-1-filled': lazy(() => {
    return import('@tabler/icons/battery-1-filled.svg?react');
  }),
  'battery-1': lazy(() => {
    return import('@tabler/icons/battery-1.svg?react');
  }),
  'battery-2-filled': lazy(() => {
    return import('@tabler/icons/battery-2-filled.svg?react');
  }),
  'battery-2': lazy(() => {
    return import('@tabler/icons/battery-2.svg?react');
  }),
  'battery-3-filled': lazy(() => {
    return import('@tabler/icons/battery-3-filled.svg?react');
  }),
  'battery-3': lazy(() => {
    return import('@tabler/icons/battery-3.svg?react');
  }),
  'battery-4-filled': lazy(() => {
    return import('@tabler/icons/battery-4-filled.svg?react');
  }),
  'battery-4': lazy(() => {
    return import('@tabler/icons/battery-4.svg?react');
  }),
  'battery-automotive': lazy(() => {
    return import('@tabler/icons/battery-automotive.svg?react');
  }),
  'battery-charging-2': lazy(() => {
    return import('@tabler/icons/battery-charging-2.svg?react');
  }),
  'battery-charging': lazy(() => {
    return import('@tabler/icons/battery-charging.svg?react');
  }),
  'battery-eco': lazy(() => {
    return import('@tabler/icons/battery-eco.svg?react');
  }),
  'battery-filled': lazy(() => {
    return import('@tabler/icons/battery-filled.svg?react');
  }),
  'battery-off': lazy(() => {
    return import('@tabler/icons/battery-off.svg?react');
  }),
  battery: lazy(() => {
    return import('@tabler/icons/battery.svg?react');
  }),
  'beach-off': lazy(() => {
    return import('@tabler/icons/beach-off.svg?react');
  }),
  beach: lazy(() => {
    return import('@tabler/icons/beach.svg?react');
  }),
  'bed-filled': lazy(() => {
    return import('@tabler/icons/bed-filled.svg?react');
  }),
  'bed-flat': lazy(() => {
    return import('@tabler/icons/bed-flat.svg?react');
  }),
  'bed-off': lazy(() => {
    return import('@tabler/icons/bed-off.svg?react');
  }),
  bed: lazy(() => {
    return import('@tabler/icons/bed.svg?react');
  }),
  'beer-filled': lazy(() => {
    return import('@tabler/icons/beer-filled.svg?react');
  }),
  'beer-off': lazy(() => {
    return import('@tabler/icons/beer-off.svg?react');
  }),
  beer: lazy(() => {
    return import('@tabler/icons/beer.svg?react');
  }),
  'bell-bolt': lazy(() => {
    return import('@tabler/icons/bell-bolt.svg?react');
  }),
  'bell-cancel': lazy(() => {
    return import('@tabler/icons/bell-cancel.svg?react');
  }),
  'bell-check': lazy(() => {
    return import('@tabler/icons/bell-check.svg?react');
  }),
  'bell-code': lazy(() => {
    return import('@tabler/icons/bell-code.svg?react');
  }),
  'bell-cog': lazy(() => {
    return import('@tabler/icons/bell-cog.svg?react');
  }),
  'bell-dollar': lazy(() => {
    return import('@tabler/icons/bell-dollar.svg?react');
  }),
  'bell-down': lazy(() => {
    return import('@tabler/icons/bell-down.svg?react');
  }),
  'bell-exclamation': lazy(() => {
    return import('@tabler/icons/bell-exclamation.svg?react');
  }),
  'bell-filled': lazy(() => {
    return import('@tabler/icons/bell-filled.svg?react');
  }),
  'bell-heart': lazy(() => {
    return import('@tabler/icons/bell-heart.svg?react');
  }),
  'bell-minus-filled': lazy(() => {
    return import('@tabler/icons/bell-minus-filled.svg?react');
  }),
  'bell-minus': lazy(() => {
    return import('@tabler/icons/bell-minus.svg?react');
  }),
  'bell-off': lazy(() => {
    return import('@tabler/icons/bell-off.svg?react');
  }),
  'bell-pause': lazy(() => {
    return import('@tabler/icons/bell-pause.svg?react');
  }),
  'bell-pin': lazy(() => {
    return import('@tabler/icons/bell-pin.svg?react');
  }),
  'bell-plus-filled': lazy(() => {
    return import('@tabler/icons/bell-plus-filled.svg?react');
  }),
  'bell-plus': lazy(() => {
    return import('@tabler/icons/bell-plus.svg?react');
  }),
  'bell-question': lazy(() => {
    return import('@tabler/icons/bell-question.svg?react');
  }),
  'bell-ringing-2-filled': lazy(() => {
    return import('@tabler/icons/bell-ringing-2-filled.svg?react');
  }),
  'bell-ringing-2': lazy(() => {
    return import('@tabler/icons/bell-ringing-2.svg?react');
  }),
  'bell-ringing-filled': lazy(() => {
    return import('@tabler/icons/bell-ringing-filled.svg?react');
  }),
  'bell-ringing': lazy(() => {
    return import('@tabler/icons/bell-ringing.svg?react');
  }),
  'bell-school': lazy(() => {
    return import('@tabler/icons/bell-school.svg?react');
  }),
  'bell-search': lazy(() => {
    return import('@tabler/icons/bell-search.svg?react');
  }),
  'bell-share': lazy(() => {
    return import('@tabler/icons/bell-share.svg?react');
  }),
  'bell-star': lazy(() => {
    return import('@tabler/icons/bell-star.svg?react');
  }),
  'bell-up': lazy(() => {
    return import('@tabler/icons/bell-up.svg?react');
  }),
  'bell-x-filled': lazy(() => {
    return import('@tabler/icons/bell-x-filled.svg?react');
  }),
  'bell-x': lazy(() => {
    return import('@tabler/icons/bell-x.svg?react');
  }),
  'bell-z-filled': lazy(() => {
    return import('@tabler/icons/bell-z-filled.svg?react');
  }),
  'bell-z': lazy(() => {
    return import('@tabler/icons/bell-z.svg?react');
  }),
  bell: lazy(() => {
    return import('@tabler/icons/bell.svg?react');
  }),
  beta: lazy(() => {
    return import('@tabler/icons/beta.svg?react');
  }),
  bible: lazy(() => {
    return import('@tabler/icons/bible.svg?react');
  }),
  'bike-off': lazy(() => {
    return import('@tabler/icons/bike-off.svg?react');
  }),
  bike: lazy(() => {
    return import('@tabler/icons/bike.svg?react');
  }),
  'binary-off': lazy(() => {
    return import('@tabler/icons/binary-off.svg?react');
  }),
  'binary-tree-2': lazy(() => {
    return import('@tabler/icons/binary-tree-2.svg?react');
  }),
  'binary-tree': lazy(() => {
    return import('@tabler/icons/binary-tree.svg?react');
  }),
  binary: lazy(() => {
    return import('@tabler/icons/binary.svg?react');
  }),
  'biohazard-off': lazy(() => {
    return import('@tabler/icons/biohazard-off.svg?react');
  }),
  biohazard: lazy(() => {
    return import('@tabler/icons/biohazard.svg?react');
  }),
  'blade-filled': lazy(() => {
    return import('@tabler/icons/blade-filled.svg?react');
  }),
  blade: lazy(() => {
    return import('@tabler/icons/blade.svg?react');
  }),
  'bleach-chlorine': lazy(() => {
    return import('@tabler/icons/bleach-chlorine.svg?react');
  }),
  'bleach-no-chlorine': lazy(() => {
    return import('@tabler/icons/bleach-no-chlorine.svg?react');
  }),
  'bleach-off': lazy(() => {
    return import('@tabler/icons/bleach-off.svg?react');
  }),
  bleach: lazy(() => {
    return import('@tabler/icons/bleach.svg?react');
  }),
  blender: lazy(() => {
    return import('@tabler/icons/blender.svg?react');
  }),
  blockquote: lazy(() => {
    return import('@tabler/icons/blockquote.svg?react');
  }),
  'bluetooth-connected': lazy(() => {
    return import('@tabler/icons/bluetooth-connected.svg?react');
  }),
  'bluetooth-off': lazy(() => {
    return import('@tabler/icons/bluetooth-off.svg?react');
  }),
  'bluetooth-x': lazy(() => {
    return import('@tabler/icons/bluetooth-x.svg?react');
  }),
  bluetooth: lazy(() => {
    return import('@tabler/icons/bluetooth.svg?react');
  }),
  'blur-off': lazy(() => {
    return import('@tabler/icons/blur-off.svg?react');
  }),
  blur: lazy(() => {
    return import('@tabler/icons/blur.svg?react');
  }),
  bmp: lazy(() => {
    return import('@tabler/icons/bmp.svg?react');
  }),
  'body-scan': lazy(() => {
    return import('@tabler/icons/body-scan.svg?react');
  }),
  'bold-off': lazy(() => {
    return import('@tabler/icons/bold-off.svg?react');
  }),
  bold: lazy(() => {
    return import('@tabler/icons/bold.svg?react');
  }),
  'bolt-off': lazy(() => {
    return import('@tabler/icons/bolt-off.svg?react');
  }),
  bolt: lazy(() => {
    return import('@tabler/icons/bolt.svg?react');
  }),
  'bomb-filled': lazy(() => {
    return import('@tabler/icons/bomb-filled.svg?react');
  }),
  bomb: lazy(() => {
    return import('@tabler/icons/bomb.svg?react');
  }),
  'bone-off': lazy(() => {
    return import('@tabler/icons/bone-off.svg?react');
  }),
  bone: lazy(() => {
    return import('@tabler/icons/bone.svg?react');
  }),
  'bong-off': lazy(() => {
    return import('@tabler/icons/bong-off.svg?react');
  }),
  bong: lazy(() => {
    return import('@tabler/icons/bong.svg?react');
  }),
  'book-2': lazy(() => {
    return import('@tabler/icons/book-2.svg?react');
  }),
  'book-download': lazy(() => {
    return import('@tabler/icons/book-download.svg?react');
  }),
  'book-filled': lazy(() => {
    return import('@tabler/icons/book-filled.svg?react');
  }),
  'book-off': lazy(() => {
    return import('@tabler/icons/book-off.svg?react');
  }),
  'book-upload': lazy(() => {
    return import('@tabler/icons/book-upload.svg?react');
  }),
  book: lazy(() => {
    return import('@tabler/icons/book.svg?react');
  }),
  'bookmark-ai': lazy(() => {
    return import('@tabler/icons/bookmark-ai.svg?react');
  }),
  'bookmark-edit': lazy(() => {
    return import('@tabler/icons/bookmark-edit.svg?react');
  }),
  'bookmark-filled': lazy(() => {
    return import('@tabler/icons/bookmark-filled.svg?react');
  }),
  'bookmark-minus': lazy(() => {
    return import('@tabler/icons/bookmark-minus.svg?react');
  }),
  'bookmark-off': lazy(() => {
    return import('@tabler/icons/bookmark-off.svg?react');
  }),
  'bookmark-plus': lazy(() => {
    return import('@tabler/icons/bookmark-plus.svg?react');
  }),
  'bookmark-question': lazy(() => {
    return import('@tabler/icons/bookmark-question.svg?react');
  }),
  bookmark: lazy(() => {
    return import('@tabler/icons/bookmark.svg?react');
  }),
  'bookmarks-filled': lazy(() => {
    return import('@tabler/icons/bookmarks-filled.svg?react');
  }),
  'bookmarks-off': lazy(() => {
    return import('@tabler/icons/bookmarks-off.svg?react');
  }),
  bookmarks: lazy(() => {
    return import('@tabler/icons/bookmarks.svg?react');
  }),
  'books-off': lazy(() => {
    return import('@tabler/icons/books-off.svg?react');
  }),
  books: lazy(() => {
    return import('@tabler/icons/books.svg?react');
  }),
  'border-all': lazy(() => {
    return import('@tabler/icons/border-all.svg?react');
  }),
  'border-bottom': lazy(() => {
    return import('@tabler/icons/border-bottom.svg?react');
  }),
  'border-corners': lazy(() => {
    return import('@tabler/icons/border-corners.svg?react');
  }),
  'border-horizontal': lazy(() => {
    return import('@tabler/icons/border-horizontal.svg?react');
  }),
  'border-inner': lazy(() => {
    return import('@tabler/icons/border-inner.svg?react');
  }),
  'border-left': lazy(() => {
    return import('@tabler/icons/border-left.svg?react');
  }),
  'border-none': lazy(() => {
    return import('@tabler/icons/border-none.svg?react');
  }),
  'border-outer': lazy(() => {
    return import('@tabler/icons/border-outer.svg?react');
  }),
  'border-radius': lazy(() => {
    return import('@tabler/icons/border-radius.svg?react');
  }),
  'border-right': lazy(() => {
    return import('@tabler/icons/border-right.svg?react');
  }),
  'border-sides': lazy(() => {
    return import('@tabler/icons/border-sides.svg?react');
  }),
  'border-style-2': lazy(() => {
    return import('@tabler/icons/border-style-2.svg?react');
  }),
  'border-style': lazy(() => {
    return import('@tabler/icons/border-style.svg?react');
  }),
  'border-top': lazy(() => {
    return import('@tabler/icons/border-top.svg?react');
  }),
  'border-vertical': lazy(() => {
    return import('@tabler/icons/border-vertical.svg?react');
  }),
  'bottle-filled': lazy(() => {
    return import('@tabler/icons/bottle-filled.svg?react');
  }),
  'bottle-off': lazy(() => {
    return import('@tabler/icons/bottle-off.svg?react');
  }),
  bottle: lazy(() => {
    return import('@tabler/icons/bottle.svg?react');
  }),
  'bounce-left-filled': lazy(() => {
    return import('@tabler/icons/bounce-left-filled.svg?react');
  }),
  'bounce-left': lazy(() => {
    return import('@tabler/icons/bounce-left.svg?react');
  }),
  'bounce-right-filled': lazy(() => {
    return import('@tabler/icons/bounce-right-filled.svg?react');
  }),
  'bounce-right': lazy(() => {
    return import('@tabler/icons/bounce-right.svg?react');
  }),
  bow: lazy(() => {
    return import('@tabler/icons/bow.svg?react');
  }),
  'bowl-filled': lazy(() => {
    return import('@tabler/icons/bowl-filled.svg?react');
  }),
  bowl: lazy(() => {
    return import('@tabler/icons/bowl.svg?react');
  }),
  'box-align-bottom-filled': lazy(() => {
    return import('@tabler/icons/box-align-bottom-filled.svg?react');
  }),
  'box-align-bottom-left-filled': lazy(() => {
    return import('@tabler/icons/box-align-bottom-left-filled.svg?react');
  }),
  'box-align-bottom-left': lazy(() => {
    return import('@tabler/icons/box-align-bottom-left.svg?react');
  }),
  'box-align-bottom-right-filled': lazy(() => {
    return import('@tabler/icons/box-align-bottom-right-filled.svg?react');
  }),
  'box-align-bottom-right': lazy(() => {
    return import('@tabler/icons/box-align-bottom-right.svg?react');
  }),
  'box-align-bottom': lazy(() => {
    return import('@tabler/icons/box-align-bottom.svg?react');
  }),
  'box-align-left-filled': lazy(() => {
    return import('@tabler/icons/box-align-left-filled.svg?react');
  }),
  'box-align-left': lazy(() => {
    return import('@tabler/icons/box-align-left.svg?react');
  }),
  'box-align-right-filled': lazy(() => {
    return import('@tabler/icons/box-align-right-filled.svg?react');
  }),
  'box-align-right': lazy(() => {
    return import('@tabler/icons/box-align-right.svg?react');
  }),
  'box-align-top-filled': lazy(() => {
    return import('@tabler/icons/box-align-top-filled.svg?react');
  }),
  'box-align-top-left-filled': lazy(() => {
    return import('@tabler/icons/box-align-top-left-filled.svg?react');
  }),
  'box-align-top-left': lazy(() => {
    return import('@tabler/icons/box-align-top-left.svg?react');
  }),
  'box-align-top-right-filled': lazy(() => {
    return import('@tabler/icons/box-align-top-right-filled.svg?react');
  }),
  'box-align-top-right': lazy(() => {
    return import('@tabler/icons/box-align-top-right.svg?react');
  }),
  'box-align-top': lazy(() => {
    return import('@tabler/icons/box-align-top.svg?react');
  }),
  'box-margin': lazy(() => {
    return import('@tabler/icons/box-margin.svg?react');
  }),
  'box-model-2-off': lazy(() => {
    return import('@tabler/icons/box-model-2-off.svg?react');
  }),
  'box-model-2': lazy(() => {
    return import('@tabler/icons/box-model-2.svg?react');
  }),
  'box-model-off': lazy(() => {
    return import('@tabler/icons/box-model-off.svg?react');
  }),
  'box-model': lazy(() => {
    return import('@tabler/icons/box-model.svg?react');
  }),
  'box-multiple-0': lazy(() => {
    return import('@tabler/icons/box-multiple-0.svg?react');
  }),
  'box-multiple-1': lazy(() => {
    return import('@tabler/icons/box-multiple-1.svg?react');
  }),
  'box-multiple-2': lazy(() => {
    return import('@tabler/icons/box-multiple-2.svg?react');
  }),
  'box-multiple-3': lazy(() => {
    return import('@tabler/icons/box-multiple-3.svg?react');
  }),
  'box-multiple-4': lazy(() => {
    return import('@tabler/icons/box-multiple-4.svg?react');
  }),
  'box-multiple-5': lazy(() => {
    return import('@tabler/icons/box-multiple-5.svg?react');
  }),
  'box-multiple-6': lazy(() => {
    return import('@tabler/icons/box-multiple-6.svg?react');
  }),
  'box-multiple-7': lazy(() => {
    return import('@tabler/icons/box-multiple-7.svg?react');
  }),
  'box-multiple-8': lazy(() => {
    return import('@tabler/icons/box-multiple-8.svg?react');
  }),
  'box-multiple-9': lazy(() => {
    return import('@tabler/icons/box-multiple-9.svg?react');
  }),
  'box-multiple': lazy(() => {
    return import('@tabler/icons/box-multiple.svg?react');
  }),
  'box-off': lazy(() => {
    return import('@tabler/icons/box-off.svg?react');
  }),
  'box-padding': lazy(() => {
    return import('@tabler/icons/box-padding.svg?react');
  }),
  'box-seam': lazy(() => {
    return import('@tabler/icons/box-seam.svg?react');
  }),
  box: lazy(() => {
    return import('@tabler/icons/box.svg?react');
  }),
  'braces-off': lazy(() => {
    return import('@tabler/icons/braces-off.svg?react');
  }),
  braces: lazy(() => {
    return import('@tabler/icons/braces.svg?react');
  }),
  'brackets-angle-off': lazy(() => {
    return import('@tabler/icons/brackets-angle-off.svg?react');
  }),
  'brackets-angle': lazy(() => {
    return import('@tabler/icons/brackets-angle.svg?react');
  }),
  'brackets-contain-end': lazy(() => {
    return import('@tabler/icons/brackets-contain-end.svg?react');
  }),
  'brackets-contain-start': lazy(() => {
    return import('@tabler/icons/brackets-contain-start.svg?react');
  }),
  'brackets-contain': lazy(() => {
    return import('@tabler/icons/brackets-contain.svg?react');
  }),
  'brackets-off': lazy(() => {
    return import('@tabler/icons/brackets-off.svg?react');
  }),
  brackets: lazy(() => {
    return import('@tabler/icons/brackets.svg?react');
  }),
  braille: lazy(() => {
    return import('@tabler/icons/braille.svg?react');
  }),
  brain: lazy(() => {
    return import('@tabler/icons/brain.svg?react');
  }),
  'brand-4chan': lazy(() => {
    return import('@tabler/icons/brand-4chan.svg?react');
  }),
  'brand-abstract': lazy(() => {
    return import('@tabler/icons/brand-abstract.svg?react');
  }),
  'brand-adobe': lazy(() => {
    return import('@tabler/icons/brand-adobe.svg?react');
  }),
  'brand-adonis-js': lazy(() => {
    return import('@tabler/icons/brand-adonis-js.svg?react');
  }),
  'brand-airbnb': lazy(() => {
    return import('@tabler/icons/brand-airbnb.svg?react');
  }),
  'brand-airtable': lazy(() => {
    return import('@tabler/icons/brand-airtable.svg?react');
  }),
  'brand-algolia': lazy(() => {
    return import('@tabler/icons/brand-algolia.svg?react');
  }),
  'brand-alipay': lazy(() => {
    return import('@tabler/icons/brand-alipay.svg?react');
  }),
  'brand-alpine-js': lazy(() => {
    return import('@tabler/icons/brand-alpine-js.svg?react');
  }),
  'brand-amazon': lazy(() => {
    return import('@tabler/icons/brand-amazon.svg?react');
  }),
  'brand-amd': lazy(() => {
    return import('@tabler/icons/brand-amd.svg?react');
  }),
  'brand-amigo': lazy(() => {
    return import('@tabler/icons/brand-amigo.svg?react');
  }),
  'brand-among-us': lazy(() => {
    return import('@tabler/icons/brand-among-us.svg?react');
  }),
  'brand-android': lazy(() => {
    return import('@tabler/icons/brand-android.svg?react');
  }),
  'brand-angular': lazy(() => {
    return import('@tabler/icons/brand-angular.svg?react');
  }),
  'brand-ansible': lazy(() => {
    return import('@tabler/icons/brand-ansible.svg?react');
  }),
  'brand-ao3': lazy(() => {
    return import('@tabler/icons/brand-ao3.svg?react');
  }),
  'brand-appgallery': lazy(() => {
    return import('@tabler/icons/brand-appgallery.svg?react');
  }),
  'brand-apple-arcade': lazy(() => {
    return import('@tabler/icons/brand-apple-arcade.svg?react');
  }),
  'brand-apple-podcast': lazy(() => {
    return import('@tabler/icons/brand-apple-podcast.svg?react');
  }),
  'brand-apple': lazy(() => {
    return import('@tabler/icons/brand-apple.svg?react');
  }),
  'brand-appstore': lazy(() => {
    return import('@tabler/icons/brand-appstore.svg?react');
  }),
  'brand-asana': lazy(() => {
    return import('@tabler/icons/brand-asana.svg?react');
  }),
  'brand-auth0': lazy(() => {
    return import('@tabler/icons/brand-auth0.svg?react');
  }),
  'brand-aws': lazy(() => {
    return import('@tabler/icons/brand-aws.svg?react');
  }),
  'brand-azure': lazy(() => {
    return import('@tabler/icons/brand-azure.svg?react');
  }),
  'brand-backbone': lazy(() => {
    return import('@tabler/icons/brand-backbone.svg?react');
  }),
  'brand-badoo': lazy(() => {
    return import('@tabler/icons/brand-badoo.svg?react');
  }),
  'brand-baidu': lazy(() => {
    return import('@tabler/icons/brand-baidu.svg?react');
  }),
  'brand-bandcamp': lazy(() => {
    return import('@tabler/icons/brand-bandcamp.svg?react');
  }),
  'brand-bandlab': lazy(() => {
    return import('@tabler/icons/brand-bandlab.svg?react');
  }),
  'brand-beats': lazy(() => {
    return import('@tabler/icons/brand-beats.svg?react');
  }),
  'brand-behance': lazy(() => {
    return import('@tabler/icons/brand-behance.svg?react');
  }),
  'brand-bilibili': lazy(() => {
    return import('@tabler/icons/brand-bilibili.svg?react');
  }),
  'brand-binance': lazy(() => {
    return import('@tabler/icons/brand-binance.svg?react');
  }),
  'brand-bing': lazy(() => {
    return import('@tabler/icons/brand-bing.svg?react');
  }),
  'brand-bitbucket': lazy(() => {
    return import('@tabler/icons/brand-bitbucket.svg?react');
  }),
  'brand-blackberry': lazy(() => {
    return import('@tabler/icons/brand-blackberry.svg?react');
  }),
  'brand-blender': lazy(() => {
    return import('@tabler/icons/brand-blender.svg?react');
  }),
  'brand-blogger': lazy(() => {
    return import('@tabler/icons/brand-blogger.svg?react');
  }),
  'brand-booking': lazy(() => {
    return import('@tabler/icons/brand-booking.svg?react');
  }),
  'brand-bootstrap': lazy(() => {
    return import('@tabler/icons/brand-bootstrap.svg?react');
  }),
  'brand-bulma': lazy(() => {
    return import('@tabler/icons/brand-bulma.svg?react');
  }),
  'brand-bumble': lazy(() => {
    return import('@tabler/icons/brand-bumble.svg?react');
  }),
  'brand-bunpo': lazy(() => {
    return import('@tabler/icons/brand-bunpo.svg?react');
  }),
  'brand-c-sharp': lazy(() => {
    return import('@tabler/icons/brand-c-sharp.svg?react');
  }),
  'brand-cake': lazy(() => {
    return import('@tabler/icons/brand-cake.svg?react');
  }),
  'brand-cakephp': lazy(() => {
    return import('@tabler/icons/brand-cakephp.svg?react');
  }),
  'brand-campaignmonitor': lazy(() => {
    return import('@tabler/icons/brand-campaignmonitor.svg?react');
  }),
  'brand-carbon': lazy(() => {
    return import('@tabler/icons/brand-carbon.svg?react');
  }),
  'brand-cashapp': lazy(() => {
    return import('@tabler/icons/brand-cashapp.svg?react');
  }),
  'brand-chrome': lazy(() => {
    return import('@tabler/icons/brand-chrome.svg?react');
  }),
  'brand-cinema-4d': lazy(() => {
    return import('@tabler/icons/brand-cinema-4d.svg?react');
  }),
  'brand-citymapper': lazy(() => {
    return import('@tabler/icons/brand-citymapper.svg?react');
  }),
  'brand-cloudflare': lazy(() => {
    return import('@tabler/icons/brand-cloudflare.svg?react');
  }),
  'brand-codecov': lazy(() => {
    return import('@tabler/icons/brand-codecov.svg?react');
  }),
  'brand-codepen': lazy(() => {
    return import('@tabler/icons/brand-codepen.svg?react');
  }),
  'brand-codesandbox': lazy(() => {
    return import('@tabler/icons/brand-codesandbox.svg?react');
  }),
  'brand-cohost': lazy(() => {
    return import('@tabler/icons/brand-cohost.svg?react');
  }),
  'brand-coinbase': lazy(() => {
    return import('@tabler/icons/brand-coinbase.svg?react');
  }),
  'brand-comedy-central': lazy(() => {
    return import('@tabler/icons/brand-comedy-central.svg?react');
  }),
  'brand-coreos': lazy(() => {
    return import('@tabler/icons/brand-coreos.svg?react');
  }),
  'brand-couchdb': lazy(() => {
    return import('@tabler/icons/brand-couchdb.svg?react');
  }),
  'brand-couchsurfing': lazy(() => {
    return import('@tabler/icons/brand-couchsurfing.svg?react');
  }),
  'brand-cpp': lazy(() => {
    return import('@tabler/icons/brand-cpp.svg?react');
  }),
  'brand-craft': lazy(() => {
    return import('@tabler/icons/brand-craft.svg?react');
  }),
  'brand-crunchbase': lazy(() => {
    return import('@tabler/icons/brand-crunchbase.svg?react');
  }),
  'brand-css3': lazy(() => {
    return import('@tabler/icons/brand-css3.svg?react');
  }),
  'brand-ctemplar': lazy(() => {
    return import('@tabler/icons/brand-ctemplar.svg?react');
  }),
  'brand-cucumber': lazy(() => {
    return import('@tabler/icons/brand-cucumber.svg?react');
  }),
  'brand-cupra': lazy(() => {
    return import('@tabler/icons/brand-cupra.svg?react');
  }),
  'brand-cypress': lazy(() => {
    return import('@tabler/icons/brand-cypress.svg?react');
  }),
  'brand-d3': lazy(() => {
    return import('@tabler/icons/brand-d3.svg?react');
  }),
  'brand-databricks': lazy(() => {
    return import('@tabler/icons/brand-databricks.svg?react');
  }),
  'brand-days-counter': lazy(() => {
    return import('@tabler/icons/brand-days-counter.svg?react');
  }),
  'brand-dcos': lazy(() => {
    return import('@tabler/icons/brand-dcos.svg?react');
  }),
  'brand-debian': lazy(() => {
    return import('@tabler/icons/brand-debian.svg?react');
  }),
  'brand-deezer': lazy(() => {
    return import('@tabler/icons/brand-deezer.svg?react');
  }),
  'brand-deliveroo': lazy(() => {
    return import('@tabler/icons/brand-deliveroo.svg?react');
  }),
  'brand-deno': lazy(() => {
    return import('@tabler/icons/brand-deno.svg?react');
  }),
  'brand-denodo': lazy(() => {
    return import('@tabler/icons/brand-denodo.svg?react');
  }),
  'brand-deviantart': lazy(() => {
    return import('@tabler/icons/brand-deviantart.svg?react');
  }),
  'brand-digg': lazy(() => {
    return import('@tabler/icons/brand-digg.svg?react');
  }),
  'brand-dingtalk': lazy(() => {
    return import('@tabler/icons/brand-dingtalk.svg?react');
  }),
  'brand-discord-filled': lazy(() => {
    return import('@tabler/icons/brand-discord-filled.svg?react');
  }),
  'brand-discord': lazy(() => {
    return import('@tabler/icons/brand-discord.svg?react');
  }),
  'brand-disney': lazy(() => {
    return import('@tabler/icons/brand-disney.svg?react');
  }),
  'brand-disqus': lazy(() => {
    return import('@tabler/icons/brand-disqus.svg?react');
  }),
  'brand-django': lazy(() => {
    return import('@tabler/icons/brand-django.svg?react');
  }),
  'brand-docker': lazy(() => {
    return import('@tabler/icons/brand-docker.svg?react');
  }),
  'brand-doctrine': lazy(() => {
    return import('@tabler/icons/brand-doctrine.svg?react');
  }),
  'brand-dolby-digital': lazy(() => {
    return import('@tabler/icons/brand-dolby-digital.svg?react');
  }),
  'brand-douban': lazy(() => {
    return import('@tabler/icons/brand-douban.svg?react');
  }),
  'brand-dribbble-filled': lazy(() => {
    return import('@tabler/icons/brand-dribbble-filled.svg?react');
  }),
  'brand-dribbble': lazy(() => {
    return import('@tabler/icons/brand-dribbble.svg?react');
  }),
  'brand-drops': lazy(() => {
    return import('@tabler/icons/brand-drops.svg?react');
  }),
  'brand-drupal': lazy(() => {
    return import('@tabler/icons/brand-drupal.svg?react');
  }),
  'brand-edge': lazy(() => {
    return import('@tabler/icons/brand-edge.svg?react');
  }),
  'brand-elastic': lazy(() => {
    return import('@tabler/icons/brand-elastic.svg?react');
  }),
  'brand-electronic-arts': lazy(() => {
    return import('@tabler/icons/brand-electronic-arts.svg?react');
  }),
  'brand-ember': lazy(() => {
    return import('@tabler/icons/brand-ember.svg?react');
  }),
  'brand-envato': lazy(() => {
    return import('@tabler/icons/brand-envato.svg?react');
  }),
  'brand-etsy': lazy(() => {
    return import('@tabler/icons/brand-etsy.svg?react');
  }),
  'brand-evernote': lazy(() => {
    return import('@tabler/icons/brand-evernote.svg?react');
  }),
  'brand-facebook-filled': lazy(() => {
    return import('@tabler/icons/brand-facebook-filled.svg?react');
  }),
  'brand-facebook': lazy(() => {
    return import('@tabler/icons/brand-facebook.svg?react');
  }),
  'brand-feedly': lazy(() => {
    return import('@tabler/icons/brand-feedly.svg?react');
  }),
  'brand-figma': lazy(() => {
    return import('@tabler/icons/brand-figma.svg?react');
  }),
  'brand-filezilla': lazy(() => {
    return import('@tabler/icons/brand-filezilla.svg?react');
  }),
  'brand-finder': lazy(() => {
    return import('@tabler/icons/brand-finder.svg?react');
  }),
  'brand-firebase': lazy(() => {
    return import('@tabler/icons/brand-firebase.svg?react');
  }),
  'brand-firefox': lazy(() => {
    return import('@tabler/icons/brand-firefox.svg?react');
  }),
  'brand-fiverr': lazy(() => {
    return import('@tabler/icons/brand-fiverr.svg?react');
  }),
  'brand-flickr': lazy(() => {
    return import('@tabler/icons/brand-flickr.svg?react');
  }),
  'brand-flightradar24': lazy(() => {
    return import('@tabler/icons/brand-flightradar24.svg?react');
  }),
  'brand-flipboard': lazy(() => {
    return import('@tabler/icons/brand-flipboard.svg?react');
  }),
  'brand-flutter': lazy(() => {
    return import('@tabler/icons/brand-flutter.svg?react');
  }),
  'brand-fortnite': lazy(() => {
    return import('@tabler/icons/brand-fortnite.svg?react');
  }),
  'brand-foursquare': lazy(() => {
    return import('@tabler/icons/brand-foursquare.svg?react');
  }),
  'brand-framer-motion': lazy(() => {
    return import('@tabler/icons/brand-framer-motion.svg?react');
  }),
  'brand-framer': lazy(() => {
    return import('@tabler/icons/brand-framer.svg?react');
  }),
  'brand-funimation': lazy(() => {
    return import('@tabler/icons/brand-funimation.svg?react');
  }),
  'brand-gatsby': lazy(() => {
    return import('@tabler/icons/brand-gatsby.svg?react');
  }),
  'brand-git': lazy(() => {
    return import('@tabler/icons/brand-git.svg?react');
  }),
  'brand-github-copilot': lazy(() => {
    return import('@tabler/icons/brand-github-copilot.svg?react');
  }),
  'brand-github-filled': lazy(() => {
    return import('@tabler/icons/brand-github-filled.svg?react');
  }),
  'brand-github': lazy(() => {
    return import('@tabler/icons/brand-github.svg?react');
  }),
  'brand-gitlab': lazy(() => {
    return import('@tabler/icons/brand-gitlab.svg?react');
  }),
  'brand-gmail': lazy(() => {
    return import('@tabler/icons/brand-gmail.svg?react');
  }),
  'brand-golang': lazy(() => {
    return import('@tabler/icons/brand-golang.svg?react');
  }),
  'brand-google-analytics': lazy(() => {
    return import('@tabler/icons/brand-google-analytics.svg?react');
  }),
  'brand-google-big-query': lazy(() => {
    return import('@tabler/icons/brand-google-big-query.svg?react');
  }),
  'brand-google-drive': lazy(() => {
    return import('@tabler/icons/brand-google-drive.svg?react');
  }),
  'brand-google-fit': lazy(() => {
    return import('@tabler/icons/brand-google-fit.svg?react');
  }),
  'brand-google-home': lazy(() => {
    return import('@tabler/icons/brand-google-home.svg?react');
  }),
  'brand-google-maps': lazy(() => {
    return import('@tabler/icons/brand-google-maps.svg?react');
  }),
  'brand-google-one': lazy(() => {
    return import('@tabler/icons/brand-google-one.svg?react');
  }),
  'brand-google-photos': lazy(() => {
    return import('@tabler/icons/brand-google-photos.svg?react');
  }),
  'brand-google-play': lazy(() => {
    return import('@tabler/icons/brand-google-play.svg?react');
  }),
  'brand-google-podcasts': lazy(() => {
    return import('@tabler/icons/brand-google-podcasts.svg?react');
  }),
  'brand-google': lazy(() => {
    return import('@tabler/icons/brand-google.svg?react');
  }),
  'brand-grammarly': lazy(() => {
    return import('@tabler/icons/brand-grammarly.svg?react');
  }),
  'brand-graphql': lazy(() => {
    return import('@tabler/icons/brand-graphql.svg?react');
  }),
  'brand-gravatar': lazy(() => {
    return import('@tabler/icons/brand-gravatar.svg?react');
  }),
  'brand-grindr': lazy(() => {
    return import('@tabler/icons/brand-grindr.svg?react');
  }),
  'brand-guardian': lazy(() => {
    return import('@tabler/icons/brand-guardian.svg?react');
  }),
  'brand-gumroad': lazy(() => {
    return import('@tabler/icons/brand-gumroad.svg?react');
  }),
  'brand-hbo': lazy(() => {
    return import('@tabler/icons/brand-hbo.svg?react');
  }),
  'brand-headlessui': lazy(() => {
    return import('@tabler/icons/brand-headlessui.svg?react');
  }),
  'brand-hexo': lazy(() => {
    return import('@tabler/icons/brand-hexo.svg?react');
  }),
  'brand-hipchat': lazy(() => {
    return import('@tabler/icons/brand-hipchat.svg?react');
  }),
  'brand-html5': lazy(() => {
    return import('@tabler/icons/brand-html5.svg?react');
  }),
  'brand-inertia': lazy(() => {
    return import('@tabler/icons/brand-inertia.svg?react');
  }),
  'brand-instagram': lazy(() => {
    return import('@tabler/icons/brand-instagram.svg?react');
  }),
  'brand-intercom': lazy(() => {
    return import('@tabler/icons/brand-intercom.svg?react');
  }),
  'brand-itch': lazy(() => {
    return import('@tabler/icons/brand-itch.svg?react');
  }),
  'brand-javascript': lazy(() => {
    return import('@tabler/icons/brand-javascript.svg?react');
  }),
  'brand-juejin': lazy(() => {
    return import('@tabler/icons/brand-juejin.svg?react');
  }),
  'brand-kbin': lazy(() => {
    return import('@tabler/icons/brand-kbin.svg?react');
  }),
  'brand-kick': lazy(() => {
    return import('@tabler/icons/brand-kick.svg?react');
  }),
  'brand-kickstarter': lazy(() => {
    return import('@tabler/icons/brand-kickstarter.svg?react');
  }),
  'brand-kotlin': lazy(() => {
    return import('@tabler/icons/brand-kotlin.svg?react');
  }),
  'brand-laravel': lazy(() => {
    return import('@tabler/icons/brand-laravel.svg?react');
  }),
  'brand-lastfm': lazy(() => {
    return import('@tabler/icons/brand-lastfm.svg?react');
  }),
  'brand-leetcode': lazy(() => {
    return import('@tabler/icons/brand-leetcode.svg?react');
  }),
  'brand-letterboxd': lazy(() => {
    return import('@tabler/icons/brand-letterboxd.svg?react');
  }),
  'brand-line': lazy(() => {
    return import('@tabler/icons/brand-line.svg?react');
  }),
  'brand-linkedin': lazy(() => {
    return import('@tabler/icons/brand-linkedin.svg?react');
  }),
  'brand-linktree': lazy(() => {
    return import('@tabler/icons/brand-linktree.svg?react');
  }),
  'brand-linqpad': lazy(() => {
    return import('@tabler/icons/brand-linqpad.svg?react');
  }),
  'brand-loom': lazy(() => {
    return import('@tabler/icons/brand-loom.svg?react');
  }),
  'brand-mailgun': lazy(() => {
    return import('@tabler/icons/brand-mailgun.svg?react');
  }),
  'brand-mantine': lazy(() => {
    return import('@tabler/icons/brand-mantine.svg?react');
  }),
  'brand-mastercard': lazy(() => {
    return import('@tabler/icons/brand-mastercard.svg?react');
  }),
  'brand-mastodon': lazy(() => {
    return import('@tabler/icons/brand-mastodon.svg?react');
  }),
  'brand-matrix': lazy(() => {
    return import('@tabler/icons/brand-matrix.svg?react');
  }),
  'brand-mcdonalds': lazy(() => {
    return import('@tabler/icons/brand-mcdonalds.svg?react');
  }),
  'brand-medium': lazy(() => {
    return import('@tabler/icons/brand-medium.svg?react');
  }),
  'brand-meetup': lazy(() => {
    return import('@tabler/icons/brand-meetup.svg?react');
  }),
  'brand-mercedes': lazy(() => {
    return import('@tabler/icons/brand-mercedes.svg?react');
  }),
  'brand-messenger': lazy(() => {
    return import('@tabler/icons/brand-messenger.svg?react');
  }),
  'brand-meta': lazy(() => {
    return import('@tabler/icons/brand-meta.svg?react');
  }),
  'brand-minecraft': lazy(() => {
    return import('@tabler/icons/brand-minecraft.svg?react');
  }),
  'brand-miniprogram': lazy(() => {
    return import('@tabler/icons/brand-miniprogram.svg?react');
  }),
  'brand-mixpanel': lazy(() => {
    return import('@tabler/icons/brand-mixpanel.svg?react');
  }),
  'brand-monday': lazy(() => {
    return import('@tabler/icons/brand-monday.svg?react');
  }),
  'brand-mongodb': lazy(() => {
    return import('@tabler/icons/brand-mongodb.svg?react');
  }),
  'brand-my-oppo': lazy(() => {
    return import('@tabler/icons/brand-my-oppo.svg?react');
  }),
  'brand-mysql': lazy(() => {
    return import('@tabler/icons/brand-mysql.svg?react');
  }),
  'brand-national-geographic': lazy(() => {
    return import('@tabler/icons/brand-national-geographic.svg?react');
  }),
  'brand-nem': lazy(() => {
    return import('@tabler/icons/brand-nem.svg?react');
  }),
  'brand-netbeans': lazy(() => {
    return import('@tabler/icons/brand-netbeans.svg?react');
  }),
  'brand-netease-music': lazy(() => {
    return import('@tabler/icons/brand-netease-music.svg?react');
  }),
  'brand-netflix': lazy(() => {
    return import('@tabler/icons/brand-netflix.svg?react');
  }),
  'brand-nexo': lazy(() => {
    return import('@tabler/icons/brand-nexo.svg?react');
  }),
  'brand-nextcloud': lazy(() => {
    return import('@tabler/icons/brand-nextcloud.svg?react');
  }),
  'brand-nextjs': lazy(() => {
    return import('@tabler/icons/brand-nextjs.svg?react');
  }),
  'brand-nodejs': lazy(() => {
    return import('@tabler/icons/brand-nodejs.svg?react');
  }),
  'brand-nord-vpn': lazy(() => {
    return import('@tabler/icons/brand-nord-vpn.svg?react');
  }),
  'brand-notion': lazy(() => {
    return import('@tabler/icons/brand-notion.svg?react');
  }),
  'brand-npm': lazy(() => {
    return import('@tabler/icons/brand-npm.svg?react');
  }),
  'brand-nuxt': lazy(() => {
    return import('@tabler/icons/brand-nuxt.svg?react');
  }),
  'brand-nytimes': lazy(() => {
    return import('@tabler/icons/brand-nytimes.svg?react');
  }),
  'brand-oauth': lazy(() => {
    return import('@tabler/icons/brand-oauth.svg?react');
  }),
  'brand-office': lazy(() => {
    return import('@tabler/icons/brand-office.svg?react');
  }),
  'brand-ok-ru': lazy(() => {
    return import('@tabler/icons/brand-ok-ru.svg?react');
  }),
  'brand-onedrive': lazy(() => {
    return import('@tabler/icons/brand-onedrive.svg?react');
  }),
  'brand-onlyfans': lazy(() => {
    return import('@tabler/icons/brand-onlyfans.svg?react');
  }),
  'brand-open-source': lazy(() => {
    return import('@tabler/icons/brand-open-source.svg?react');
  }),
  'brand-openai': lazy(() => {
    return import('@tabler/icons/brand-openai.svg?react');
  }),
  'brand-openvpn': lazy(() => {
    return import('@tabler/icons/brand-openvpn.svg?react');
  }),
  'brand-opera': lazy(() => {
    return import('@tabler/icons/brand-opera.svg?react');
  }),
  'brand-pagekit': lazy(() => {
    return import('@tabler/icons/brand-pagekit.svg?react');
  }),
  'brand-parsinta': lazy(() => {
    return import('@tabler/icons/brand-parsinta.svg?react');
  }),
  'brand-patreon': lazy(() => {
    return import('@tabler/icons/brand-patreon.svg?react');
  }),
  'brand-paypal-filled': lazy(() => {
    return import('@tabler/icons/brand-paypal-filled.svg?react');
  }),
  'brand-paypal': lazy(() => {
    return import('@tabler/icons/brand-paypal.svg?react');
  }),
  'brand-paypay': lazy(() => {
    return import('@tabler/icons/brand-paypay.svg?react');
  }),
  'brand-peanut': lazy(() => {
    return import('@tabler/icons/brand-peanut.svg?react');
  }),
  'brand-pepsi': lazy(() => {
    return import('@tabler/icons/brand-pepsi.svg?react');
  }),
  'brand-php': lazy(() => {
    return import('@tabler/icons/brand-php.svg?react');
  }),
  'brand-picsart': lazy(() => {
    return import('@tabler/icons/brand-picsart.svg?react');
  }),
  'brand-pinterest': lazy(() => {
    return import('@tabler/icons/brand-pinterest.svg?react');
  }),
  'brand-planetscale': lazy(() => {
    return import('@tabler/icons/brand-planetscale.svg?react');
  }),
  'brand-pocket': lazy(() => {
    return import('@tabler/icons/brand-pocket.svg?react');
  }),
  'brand-polymer': lazy(() => {
    return import('@tabler/icons/brand-polymer.svg?react');
  }),
  'brand-powershell': lazy(() => {
    return import('@tabler/icons/brand-powershell.svg?react');
  }),
  'brand-prisma': lazy(() => {
    return import('@tabler/icons/brand-prisma.svg?react');
  }),
  'brand-producthunt': lazy(() => {
    return import('@tabler/icons/brand-producthunt.svg?react');
  }),
  'brand-pushbullet': lazy(() => {
    return import('@tabler/icons/brand-pushbullet.svg?react');
  }),
  'brand-pushover': lazy(() => {
    return import('@tabler/icons/brand-pushover.svg?react');
  }),
  'brand-python': lazy(() => {
    return import('@tabler/icons/brand-python.svg?react');
  }),
  'brand-qq': lazy(() => {
    return import('@tabler/icons/brand-qq.svg?react');
  }),
  'brand-radix-ui': lazy(() => {
    return import('@tabler/icons/brand-radix-ui.svg?react');
  }),
  'brand-react-native': lazy(() => {
    return import('@tabler/icons/brand-react-native.svg?react');
  }),
  'brand-react': lazy(() => {
    return import('@tabler/icons/brand-react.svg?react');
  }),
  'brand-reason': lazy(() => {
    return import('@tabler/icons/brand-reason.svg?react');
  }),
  'brand-reddit': lazy(() => {
    return import('@tabler/icons/brand-reddit.svg?react');
  }),
  'brand-redhat': lazy(() => {
    return import('@tabler/icons/brand-redhat.svg?react');
  }),
  'brand-redux': lazy(() => {
    return import('@tabler/icons/brand-redux.svg?react');
  }),
  'brand-revolut': lazy(() => {
    return import('@tabler/icons/brand-revolut.svg?react');
  }),
  'brand-rumble': lazy(() => {
    return import('@tabler/icons/brand-rumble.svg?react');
  }),
  'brand-rust': lazy(() => {
    return import('@tabler/icons/brand-rust.svg?react');
  }),
  'brand-safari': lazy(() => {
    return import('@tabler/icons/brand-safari.svg?react');
  }),
  'brand-samsungpass': lazy(() => {
    return import('@tabler/icons/brand-samsungpass.svg?react');
  }),
  'brand-sass': lazy(() => {
    return import('@tabler/icons/brand-sass.svg?react');
  }),
  'brand-sentry': lazy(() => {
    return import('@tabler/icons/brand-sentry.svg?react');
  }),
  'brand-sharik': lazy(() => {
    return import('@tabler/icons/brand-sharik.svg?react');
  }),
  'brand-shazam': lazy(() => {
    return import('@tabler/icons/brand-shazam.svg?react');
  }),
  'brand-shopee': lazy(() => {
    return import('@tabler/icons/brand-shopee.svg?react');
  }),
  'brand-sketch': lazy(() => {
    return import('@tabler/icons/brand-sketch.svg?react');
  }),
  'brand-skype': lazy(() => {
    return import('@tabler/icons/brand-skype.svg?react');
  }),
  'brand-slack': lazy(() => {
    return import('@tabler/icons/brand-slack.svg?react');
  }),
  'brand-snapchat': lazy(() => {
    return import('@tabler/icons/brand-snapchat.svg?react');
  }),
  'brand-snapseed': lazy(() => {
    return import('@tabler/icons/brand-snapseed.svg?react');
  }),
  'brand-snowflake': lazy(() => {
    return import('@tabler/icons/brand-snowflake.svg?react');
  }),
  'brand-socket-io': lazy(() => {
    return import('@tabler/icons/brand-socket-io.svg?react');
  }),
  'brand-solidjs': lazy(() => {
    return import('@tabler/icons/brand-solidjs.svg?react');
  }),
  'brand-soundcloud': lazy(() => {
    return import('@tabler/icons/brand-soundcloud.svg?react');
  }),
  'brand-spacehey': lazy(() => {
    return import('@tabler/icons/brand-spacehey.svg?react');
  }),
  'brand-speedtest': lazy(() => {
    return import('@tabler/icons/brand-speedtest.svg?react');
  }),
  'brand-spotify': lazy(() => {
    return import('@tabler/icons/brand-spotify.svg?react');
  }),
  'brand-stackoverflow': lazy(() => {
    return import('@tabler/icons/brand-stackoverflow.svg?react');
  }),
  'brand-stackshare': lazy(() => {
    return import('@tabler/icons/brand-stackshare.svg?react');
  }),
  'brand-steam': lazy(() => {
    return import('@tabler/icons/brand-steam.svg?react');
  }),
  'brand-storj': lazy(() => {
    return import('@tabler/icons/brand-storj.svg?react');
  }),
  'brand-storybook': lazy(() => {
    return import('@tabler/icons/brand-storybook.svg?react');
  }),
  'brand-storytel': lazy(() => {
    return import('@tabler/icons/brand-storytel.svg?react');
  }),
  'brand-strava': lazy(() => {
    return import('@tabler/icons/brand-strava.svg?react');
  }),
  'brand-stripe': lazy(() => {
    return import('@tabler/icons/brand-stripe.svg?react');
  }),
  'brand-sublime-text': lazy(() => {
    return import('@tabler/icons/brand-sublime-text.svg?react');
  }),
  'brand-sugarizer': lazy(() => {
    return import('@tabler/icons/brand-sugarizer.svg?react');
  }),
  'brand-supabase': lazy(() => {
    return import('@tabler/icons/brand-supabase.svg?react');
  }),
  'brand-superhuman': lazy(() => {
    return import('@tabler/icons/brand-superhuman.svg?react');
  }),
  'brand-supernova': lazy(() => {
    return import('@tabler/icons/brand-supernova.svg?react');
  }),
  'brand-surfshark': lazy(() => {
    return import('@tabler/icons/brand-surfshark.svg?react');
  }),
  'brand-svelte': lazy(() => {
    return import('@tabler/icons/brand-svelte.svg?react');
  }),
  'brand-swift': lazy(() => {
    return import('@tabler/icons/brand-swift.svg?react');
  }),
  'brand-symfony': lazy(() => {
    return import('@tabler/icons/brand-symfony.svg?react');
  }),
  'brand-tabler': lazy(() => {
    return import('@tabler/icons/brand-tabler.svg?react');
  }),
  'brand-tailwind': lazy(() => {
    return import('@tabler/icons/brand-tailwind.svg?react');
  }),
  'brand-taobao': lazy(() => {
    return import('@tabler/icons/brand-taobao.svg?react');
  }),
  'brand-teams': lazy(() => {
    return import('@tabler/icons/brand-teams.svg?react');
  }),
  'brand-ted': lazy(() => {
    return import('@tabler/icons/brand-ted.svg?react');
  }),
  'brand-telegram': lazy(() => {
    return import('@tabler/icons/brand-telegram.svg?react');
  }),
  'brand-terraform': lazy(() => {
    return import('@tabler/icons/brand-terraform.svg?react');
  }),
  'brand-tether': lazy(() => {
    return import('@tabler/icons/brand-tether.svg?react');
  }),
  'brand-threads': lazy(() => {
    return import('@tabler/icons/brand-threads.svg?react');
  }),
  'brand-threejs': lazy(() => {
    return import('@tabler/icons/brand-threejs.svg?react');
  }),
  'brand-tidal': lazy(() => {
    return import('@tabler/icons/brand-tidal.svg?react');
  }),
  'brand-tiktok-filled': lazy(() => {
    return import('@tabler/icons/brand-tiktok-filled.svg?react');
  }),
  'brand-tiktok': lazy(() => {
    return import('@tabler/icons/brand-tiktok.svg?react');
  }),
  'brand-tinder': lazy(() => {
    return import('@tabler/icons/brand-tinder.svg?react');
  }),
  'brand-topbuzz': lazy(() => {
    return import('@tabler/icons/brand-topbuzz.svg?react');
  }),
  'brand-torchain': lazy(() => {
    return import('@tabler/icons/brand-torchain.svg?react');
  }),
  'brand-toyota': lazy(() => {
    return import('@tabler/icons/brand-toyota.svg?react');
  }),
  'brand-trello': lazy(() => {
    return import('@tabler/icons/brand-trello.svg?react');
  }),
  'brand-tripadvisor': lazy(() => {
    return import('@tabler/icons/brand-tripadvisor.svg?react');
  }),
  'brand-tumblr': lazy(() => {
    return import('@tabler/icons/brand-tumblr.svg?react');
  }),
  'brand-twilio': lazy(() => {
    return import('@tabler/icons/brand-twilio.svg?react');
  }),
  'brand-twitch': lazy(() => {
    return import('@tabler/icons/brand-twitch.svg?react');
  }),
  'brand-twitter-filled': lazy(() => {
    return import('@tabler/icons/brand-twitter-filled.svg?react');
  }),
  'brand-twitter': lazy(() => {
    return import('@tabler/icons/brand-twitter.svg?react');
  }),
  'brand-typescript': lazy(() => {
    return import('@tabler/icons/brand-typescript.svg?react');
  }),
  'brand-uber': lazy(() => {
    return import('@tabler/icons/brand-uber.svg?react');
  }),
  'brand-ubuntu': lazy(() => {
    return import('@tabler/icons/brand-ubuntu.svg?react');
  }),
  'brand-unity': lazy(() => {
    return import('@tabler/icons/brand-unity.svg?react');
  }),
  'brand-unsplash': lazy(() => {
    return import('@tabler/icons/brand-unsplash.svg?react');
  }),
  'brand-upwork': lazy(() => {
    return import('@tabler/icons/brand-upwork.svg?react');
  }),
  'brand-valorant': lazy(() => {
    return import('@tabler/icons/brand-valorant.svg?react');
  }),
  'brand-vercel': lazy(() => {
    return import('@tabler/icons/brand-vercel.svg?react');
  }),
  'brand-vimeo': lazy(() => {
    return import('@tabler/icons/brand-vimeo.svg?react');
  }),
  'brand-vinted': lazy(() => {
    return import('@tabler/icons/brand-vinted.svg?react');
  }),
  'brand-visa': lazy(() => {
    return import('@tabler/icons/brand-visa.svg?react');
  }),
  'brand-visual-studio': lazy(() => {
    return import('@tabler/icons/brand-visual-studio.svg?react');
  }),
  'brand-vite': lazy(() => {
    return import('@tabler/icons/brand-vite.svg?react');
  }),
  'brand-vivaldi': lazy(() => {
    return import('@tabler/icons/brand-vivaldi.svg?react');
  }),
  'brand-vk': lazy(() => {
    return import('@tabler/icons/brand-vk.svg?react');
  }),
  'brand-vlc': lazy(() => {
    return import('@tabler/icons/brand-vlc.svg?react');
  }),
  'brand-volkswagen': lazy(() => {
    return import('@tabler/icons/brand-volkswagen.svg?react');
  }),
  'brand-vsco': lazy(() => {
    return import('@tabler/icons/brand-vsco.svg?react');
  }),
  'brand-vscode': lazy(() => {
    return import('@tabler/icons/brand-vscode.svg?react');
  }),
  'brand-vue': lazy(() => {
    return import('@tabler/icons/brand-vue.svg?react');
  }),
  'brand-walmart': lazy(() => {
    return import('@tabler/icons/brand-walmart.svg?react');
  }),
  'brand-waze': lazy(() => {
    return import('@tabler/icons/brand-waze.svg?react');
  }),
  'brand-webflow': lazy(() => {
    return import('@tabler/icons/brand-webflow.svg?react');
  }),
  'brand-wechat': lazy(() => {
    return import('@tabler/icons/brand-wechat.svg?react');
  }),
  'brand-weibo': lazy(() => {
    return import('@tabler/icons/brand-weibo.svg?react');
  }),
  'brand-whatsapp': lazy(() => {
    return import('@tabler/icons/brand-whatsapp.svg?react');
  }),
  'brand-wikipedia': lazy(() => {
    return import('@tabler/icons/brand-wikipedia.svg?react');
  }),
  'brand-windows': lazy(() => {
    return import('@tabler/icons/brand-windows.svg?react');
  }),
  'brand-windy': lazy(() => {
    return import('@tabler/icons/brand-windy.svg?react');
  }),
  'brand-wish': lazy(() => {
    return import('@tabler/icons/brand-wish.svg?react');
  }),
  'brand-wix': lazy(() => {
    return import('@tabler/icons/brand-wix.svg?react');
  }),
  'brand-wordpress': lazy(() => {
    return import('@tabler/icons/brand-wordpress.svg?react');
  }),
  'brand-x-filled': lazy(() => {
    return import('@tabler/icons/brand-x-filled.svg?react');
  }),
  'brand-x': lazy(() => {
    return import('@tabler/icons/brand-x.svg?react');
  }),
  'brand-xamarin': lazy(() => {
    return import('@tabler/icons/brand-xamarin.svg?react');
  }),
  'brand-xbox': lazy(() => {
    return import('@tabler/icons/brand-xbox.svg?react');
  }),
  'brand-xdeep': lazy(() => {
    return import('@tabler/icons/brand-xdeep.svg?react');
  }),
  'brand-xing': lazy(() => {
    return import('@tabler/icons/brand-xing.svg?react');
  }),
  'brand-yahoo': lazy(() => {
    return import('@tabler/icons/brand-yahoo.svg?react');
  }),
  'brand-yandex': lazy(() => {
    return import('@tabler/icons/brand-yandex.svg?react');
  }),
  'brand-yatse': lazy(() => {
    return import('@tabler/icons/brand-yatse.svg?react');
  }),
  'brand-ycombinator': lazy(() => {
    return import('@tabler/icons/brand-ycombinator.svg?react');
  }),
  'brand-youtube-filled': lazy(() => {
    return import('@tabler/icons/brand-youtube-filled.svg?react');
  }),
  'brand-youtube-kids': lazy(() => {
    return import('@tabler/icons/brand-youtube-kids.svg?react');
  }),
  'brand-youtube': lazy(() => {
    return import('@tabler/icons/brand-youtube.svg?react');
  }),
  'brand-zalando': lazy(() => {
    return import('@tabler/icons/brand-zalando.svg?react');
  }),
  'brand-zapier': lazy(() => {
    return import('@tabler/icons/brand-zapier.svg?react');
  }),
  'brand-zeit': lazy(() => {
    return import('@tabler/icons/brand-zeit.svg?react');
  }),
  'brand-zhihu': lazy(() => {
    return import('@tabler/icons/brand-zhihu.svg?react');
  }),
  'brand-zoom': lazy(() => {
    return import('@tabler/icons/brand-zoom.svg?react');
  }),
  'brand-zulip': lazy(() => {
    return import('@tabler/icons/brand-zulip.svg?react');
  }),
  'brand-zwift': lazy(() => {
    return import('@tabler/icons/brand-zwift.svg?react');
  }),
  'bread-off': lazy(() => {
    return import('@tabler/icons/bread-off.svg?react');
  }),
  bread: lazy(() => {
    return import('@tabler/icons/bread.svg?react');
  }),
  'briefcase-2': lazy(() => {
    return import('@tabler/icons/briefcase-2.svg?react');
  }),
  'briefcase-off': lazy(() => {
    return import('@tabler/icons/briefcase-off.svg?react');
  }),
  briefcase: lazy(() => {
    return import('@tabler/icons/briefcase.svg?react');
  }),
  'brightness-2': lazy(() => {
    return import('@tabler/icons/brightness-2.svg?react');
  }),
  'brightness-down-filled': lazy(() => {
    return import('@tabler/icons/brightness-down-filled.svg?react');
  }),
  'brightness-down': lazy(() => {
    return import('@tabler/icons/brightness-down.svg?react');
  }),
  'brightness-half': lazy(() => {
    return import('@tabler/icons/brightness-half.svg?react');
  }),
  'brightness-off': lazy(() => {
    return import('@tabler/icons/brightness-off.svg?react');
  }),
  'brightness-up-filled': lazy(() => {
    return import('@tabler/icons/brightness-up-filled.svg?react');
  }),
  'brightness-up': lazy(() => {
    return import('@tabler/icons/brightness-up.svg?react');
  }),
  brightness: lazy(() => {
    return import('@tabler/icons/brightness.svg?react');
  }),
  'broadcast-off': lazy(() => {
    return import('@tabler/icons/broadcast-off.svg?react');
  }),
  broadcast: lazy(() => {
    return import('@tabler/icons/broadcast.svg?react');
  }),
  'browser-check': lazy(() => {
    return import('@tabler/icons/browser-check.svg?react');
  }),
  'browser-off': lazy(() => {
    return import('@tabler/icons/browser-off.svg?react');
  }),
  'browser-plus': lazy(() => {
    return import('@tabler/icons/browser-plus.svg?react');
  }),
  'browser-x': lazy(() => {
    return import('@tabler/icons/browser-x.svg?react');
  }),
  browser: lazy(() => {
    return import('@tabler/icons/browser.svg?react');
  }),
  'brush-off': lazy(() => {
    return import('@tabler/icons/brush-off.svg?react');
  }),
  brush: lazy(() => {
    return import('@tabler/icons/brush.svg?react');
  }),
  'bucket-droplet': lazy(() => {
    return import('@tabler/icons/bucket-droplet.svg?react');
  }),
  'bucket-off': lazy(() => {
    return import('@tabler/icons/bucket-off.svg?react');
  }),
  bucket: lazy(() => {
    return import('@tabler/icons/bucket.svg?react');
  }),
  'bug-off': lazy(() => {
    return import('@tabler/icons/bug-off.svg?react');
  }),
  bug: lazy(() => {
    return import('@tabler/icons/bug.svg?react');
  }),
  'building-arch': lazy(() => {
    return import('@tabler/icons/building-arch.svg?react');
  }),
  'building-bank': lazy(() => {
    return import('@tabler/icons/building-bank.svg?react');
  }),
  'building-bridge-2': lazy(() => {
    return import('@tabler/icons/building-bridge-2.svg?react');
  }),
  'building-bridge': lazy(() => {
    return import('@tabler/icons/building-bridge.svg?react');
  }),
  'building-broadcast-tower': lazy(() => {
    return import('@tabler/icons/building-broadcast-tower.svg?react');
  }),
  'building-carousel': lazy(() => {
    return import('@tabler/icons/building-carousel.svg?react');
  }),
  'building-castle': lazy(() => {
    return import('@tabler/icons/building-castle.svg?react');
  }),
  'building-church': lazy(() => {
    return import('@tabler/icons/building-church.svg?react');
  }),
  'building-circus': lazy(() => {
    return import('@tabler/icons/building-circus.svg?react');
  }),
  'building-community': lazy(() => {
    return import('@tabler/icons/building-community.svg?react');
  }),
  'building-cottage': lazy(() => {
    return import('@tabler/icons/building-cottage.svg?react');
  }),
  'building-estate': lazy(() => {
    return import('@tabler/icons/building-estate.svg?react');
  }),
  'building-factory-2': lazy(() => {
    return import('@tabler/icons/building-factory-2.svg?react');
  }),
  'building-factory': lazy(() => {
    return import('@tabler/icons/building-factory.svg?react');
  }),
  'building-fortress': lazy(() => {
    return import('@tabler/icons/building-fortress.svg?react');
  }),
  'building-hospital': lazy(() => {
    return import('@tabler/icons/building-hospital.svg?react');
  }),
  'building-lighthouse': lazy(() => {
    return import('@tabler/icons/building-lighthouse.svg?react');
  }),
  'building-monument': lazy(() => {
    return import('@tabler/icons/building-monument.svg?react');
  }),
  'building-mosque': lazy(() => {
    return import('@tabler/icons/building-mosque.svg?react');
  }),
  'building-pavilion': lazy(() => {
    return import('@tabler/icons/building-pavilion.svg?react');
  }),
  'building-skyscraper': lazy(() => {
    return import('@tabler/icons/building-skyscraper.svg?react');
  }),
  'building-stadium': lazy(() => {
    return import('@tabler/icons/building-stadium.svg?react');
  }),
  'building-store': lazy(() => {
    return import('@tabler/icons/building-store.svg?react');
  }),
  'building-tunnel': lazy(() => {
    return import('@tabler/icons/building-tunnel.svg?react');
  }),
  'building-warehouse': lazy(() => {
    return import('@tabler/icons/building-warehouse.svg?react');
  }),
  'building-wind-turbine': lazy(() => {
    return import('@tabler/icons/building-wind-turbine.svg?react');
  }),
  building: lazy(() => {
    return import('@tabler/icons/building.svg?react');
  }),
  'bulb-filled': lazy(() => {
    return import('@tabler/icons/bulb-filled.svg?react');
  }),
  'bulb-off': lazy(() => {
    return import('@tabler/icons/bulb-off.svg?react');
  }),
  bulb: lazy(() => {
    return import('@tabler/icons/bulb.svg?react');
  }),
  bulldozer: lazy(() => {
    return import('@tabler/icons/bulldozer.svg?react');
  }),
  burger: lazy(() => {
    return import('@tabler/icons/burger.svg?react');
  }),
  'bus-off': lazy(() => {
    return import('@tabler/icons/bus-off.svg?react');
  }),
  'bus-stop': lazy(() => {
    return import('@tabler/icons/bus-stop.svg?react');
  }),
  bus: lazy(() => {
    return import('@tabler/icons/bus.svg?react');
  }),
  businessplan: lazy(() => {
    return import('@tabler/icons/businessplan.svg?react');
  }),
  butterfly: lazy(() => {
    return import('@tabler/icons/butterfly.svg?react');
  }),
  'cactus-filled': lazy(() => {
    return import('@tabler/icons/cactus-filled.svg?react');
  }),
  'cactus-off': lazy(() => {
    return import('@tabler/icons/cactus-off.svg?react');
  }),
  cactus: lazy(() => {
    return import('@tabler/icons/cactus.svg?react');
  }),
  'cake-off': lazy(() => {
    return import('@tabler/icons/cake-off.svg?react');
  }),
  cake: lazy(() => {
    return import('@tabler/icons/cake.svg?react');
  }),
  'calculator-filled': lazy(() => {
    return import('@tabler/icons/calculator-filled.svg?react');
  }),
  'calculator-off': lazy(() => {
    return import('@tabler/icons/calculator-off.svg?react');
  }),
  calculator: lazy(() => {
    return import('@tabler/icons/calculator.svg?react');
  }),
  'calendar-bolt': lazy(() => {
    return import('@tabler/icons/calendar-bolt.svg?react');
  }),
  'calendar-cancel': lazy(() => {
    return import('@tabler/icons/calendar-cancel.svg?react');
  }),
  'calendar-check': lazy(() => {
    return import('@tabler/icons/calendar-check.svg?react');
  }),
  'calendar-code': lazy(() => {
    return import('@tabler/icons/calendar-code.svg?react');
  }),
  'calendar-cog': lazy(() => {
    return import('@tabler/icons/calendar-cog.svg?react');
  }),
  'calendar-dollar': lazy(() => {
    return import('@tabler/icons/calendar-dollar.svg?react');
  }),
  'calendar-down': lazy(() => {
    return import('@tabler/icons/calendar-down.svg?react');
  }),
  'calendar-due': lazy(() => {
    return import('@tabler/icons/calendar-due.svg?react');
  }),
  'calendar-event': lazy(() => {
    return import('@tabler/icons/calendar-event.svg?react');
  }),
  'calendar-exclamation': lazy(() => {
    return import('@tabler/icons/calendar-exclamation.svg?react');
  }),
  'calendar-filled': lazy(() => {
    return import('@tabler/icons/calendar-filled.svg?react');
  }),
  'calendar-heart': lazy(() => {
    return import('@tabler/icons/calendar-heart.svg?react');
  }),
  'calendar-minus': lazy(() => {
    return import('@tabler/icons/calendar-minus.svg?react');
  }),
  'calendar-off': lazy(() => {
    return import('@tabler/icons/calendar-off.svg?react');
  }),
  'calendar-pause': lazy(() => {
    return import('@tabler/icons/calendar-pause.svg?react');
  }),
  'calendar-pin': lazy(() => {
    return import('@tabler/icons/calendar-pin.svg?react');
  }),
  'calendar-plus': lazy(() => {
    return import('@tabler/icons/calendar-plus.svg?react');
  }),
  'calendar-question': lazy(() => {
    return import('@tabler/icons/calendar-question.svg?react');
  }),
  'calendar-repeat': lazy(() => {
    return import('@tabler/icons/calendar-repeat.svg?react');
  }),
  'calendar-search': lazy(() => {
    return import('@tabler/icons/calendar-search.svg?react');
  }),
  'calendar-share': lazy(() => {
    return import('@tabler/icons/calendar-share.svg?react');
  }),
  'calendar-star': lazy(() => {
    return import('@tabler/icons/calendar-star.svg?react');
  }),
  'calendar-stats': lazy(() => {
    return import('@tabler/icons/calendar-stats.svg?react');
  }),
  'calendar-time': lazy(() => {
    return import('@tabler/icons/calendar-time.svg?react');
  }),
  'calendar-up': lazy(() => {
    return import('@tabler/icons/calendar-up.svg?react');
  }),
  'calendar-x': lazy(() => {
    return import('@tabler/icons/calendar-x.svg?react');
  }),
  calendar: lazy(() => {
    return import('@tabler/icons/calendar.svg?react');
  }),
  'camera-bolt': lazy(() => {
    return import('@tabler/icons/camera-bolt.svg?react');
  }),
  'camera-cancel': lazy(() => {
    return import('@tabler/icons/camera-cancel.svg?react');
  }),
  'camera-check': lazy(() => {
    return import('@tabler/icons/camera-check.svg?react');
  }),
  'camera-code': lazy(() => {
    return import('@tabler/icons/camera-code.svg?react');
  }),
  'camera-cog': lazy(() => {
    return import('@tabler/icons/camera-cog.svg?react');
  }),
  'camera-dollar': lazy(() => {
    return import('@tabler/icons/camera-dollar.svg?react');
  }),
  'camera-down': lazy(() => {
    return import('@tabler/icons/camera-down.svg?react');
  }),
  'camera-exclamation': lazy(() => {
    return import('@tabler/icons/camera-exclamation.svg?react');
  }),
  'camera-filled': lazy(() => {
    return import('@tabler/icons/camera-filled.svg?react');
  }),
  'camera-heart': lazy(() => {
    return import('@tabler/icons/camera-heart.svg?react');
  }),
  'camera-minus': lazy(() => {
    return import('@tabler/icons/camera-minus.svg?react');
  }),
  'camera-off': lazy(() => {
    return import('@tabler/icons/camera-off.svg?react');
  }),
  'camera-pause': lazy(() => {
    return import('@tabler/icons/camera-pause.svg?react');
  }),
  'camera-pin': lazy(() => {
    return import('@tabler/icons/camera-pin.svg?react');
  }),
  'camera-plus': lazy(() => {
    return import('@tabler/icons/camera-plus.svg?react');
  }),
  'camera-question': lazy(() => {
    return import('@tabler/icons/camera-question.svg?react');
  }),
  'camera-rotate': lazy(() => {
    return import('@tabler/icons/camera-rotate.svg?react');
  }),
  'camera-search': lazy(() => {
    return import('@tabler/icons/camera-search.svg?react');
  }),
  'camera-selfie': lazy(() => {
    return import('@tabler/icons/camera-selfie.svg?react');
  }),
  'camera-share': lazy(() => {
    return import('@tabler/icons/camera-share.svg?react');
  }),
  'camera-star': lazy(() => {
    return import('@tabler/icons/camera-star.svg?react');
  }),
  'camera-up': lazy(() => {
    return import('@tabler/icons/camera-up.svg?react');
  }),
  'camera-x': lazy(() => {
    return import('@tabler/icons/camera-x.svg?react');
  }),
  camera: lazy(() => {
    return import('@tabler/icons/camera.svg?react');
  }),
  camper: lazy(() => {
    return import('@tabler/icons/camper.svg?react');
  }),
  'campfire-filled': lazy(() => {
    return import('@tabler/icons/campfire-filled.svg?react');
  }),
  campfire: lazy(() => {
    return import('@tabler/icons/campfire.svg?react');
  }),
  'candle-filled': lazy(() => {
    return import('@tabler/icons/candle-filled.svg?react');
  }),
  candle: lazy(() => {
    return import('@tabler/icons/candle.svg?react');
  }),
  'candy-off': lazy(() => {
    return import('@tabler/icons/candy-off.svg?react');
  }),
  candy: lazy(() => {
    return import('@tabler/icons/candy.svg?react');
  }),
  cane: lazy(() => {
    return import('@tabler/icons/cane.svg?react');
  }),
  cannabis: lazy(() => {
    return import('@tabler/icons/cannabis.svg?react');
  }),
  'capsule-filled': lazy(() => {
    return import('@tabler/icons/capsule-filled.svg?react');
  }),
  'capsule-horizontal-filled': lazy(() => {
    return import('@tabler/icons/capsule-horizontal-filled.svg?react');
  }),
  'capsule-horizontal': lazy(() => {
    return import('@tabler/icons/capsule-horizontal.svg?react');
  }),
  capsule: lazy(() => {
    return import('@tabler/icons/capsule.svg?react');
  }),
  'capture-filled': lazy(() => {
    return import('@tabler/icons/capture-filled.svg?react');
  }),
  'capture-off': lazy(() => {
    return import('@tabler/icons/capture-off.svg?react');
  }),
  capture: lazy(() => {
    return import('@tabler/icons/capture.svg?react');
  }),
  'car-crane': lazy(() => {
    return import('@tabler/icons/car-crane.svg?react');
  }),
  'car-crash': lazy(() => {
    return import('@tabler/icons/car-crash.svg?react');
  }),
  'car-garage': lazy(() => {
    return import('@tabler/icons/car-garage.svg?react');
  }),
  'car-off': lazy(() => {
    return import('@tabler/icons/car-off.svg?react');
  }),
  'car-suv': lazy(() => {
    return import('@tabler/icons/car-suv.svg?react');
  }),
  'car-turbine': lazy(() => {
    return import('@tabler/icons/car-turbine.svg?react');
  }),
  car: lazy(() => {
    return import('@tabler/icons/car.svg?react');
  }),
  caravan: lazy(() => {
    return import('@tabler/icons/caravan.svg?react');
  }),
  'cardboards-off': lazy(() => {
    return import('@tabler/icons/cardboards-off.svg?react');
  }),
  cardboards: lazy(() => {
    return import('@tabler/icons/cardboards.svg?react');
  }),
  'cards-filled': lazy(() => {
    return import('@tabler/icons/cards-filled.svg?react');
  }),
  cards: lazy(() => {
    return import('@tabler/icons/cards.svg?react');
  }),
  'caret-down-filled': lazy(() => {
    return import('@tabler/icons/caret-down-filled.svg?react');
  }),
  'caret-down': lazy(() => {
    return import('@tabler/icons/caret-down.svg?react');
  }),
  'caret-left-filled': lazy(() => {
    return import('@tabler/icons/caret-left-filled.svg?react');
  }),
  'caret-left-right': lazy(() => {
    return import('@tabler/icons/caret-left-right.svg?react');
  }),
  'caret-left': lazy(() => {
    return import('@tabler/icons/caret-left.svg?react');
  }),
  'caret-right-filled': lazy(() => {
    return import('@tabler/icons/caret-right-filled.svg?react');
  }),
  'caret-right': lazy(() => {
    return import('@tabler/icons/caret-right.svg?react');
  }),
  'caret-up-down': lazy(() => {
    return import('@tabler/icons/caret-up-down.svg?react');
  }),
  'caret-up-filled': lazy(() => {
    return import('@tabler/icons/caret-up-filled.svg?react');
  }),
  'caret-up': lazy(() => {
    return import('@tabler/icons/caret-up.svg?react');
  }),
  'carousel-horizontal-filled': lazy(() => {
    return import('@tabler/icons/carousel-horizontal-filled.svg?react');
  }),
  'carousel-horizontal': lazy(() => {
    return import('@tabler/icons/carousel-horizontal.svg?react');
  }),
  'carousel-vertical-filled': lazy(() => {
    return import('@tabler/icons/carousel-vertical-filled.svg?react');
  }),
  'carousel-vertical': lazy(() => {
    return import('@tabler/icons/carousel-vertical.svg?react');
  }),
  'carrot-off': lazy(() => {
    return import('@tabler/icons/carrot-off.svg?react');
  }),
  carrot: lazy(() => {
    return import('@tabler/icons/carrot.svg?react');
  }),
  'cash-banknote-off': lazy(() => {
    return import('@tabler/icons/cash-banknote-off.svg?react');
  }),
  'cash-banknote': lazy(() => {
    return import('@tabler/icons/cash-banknote.svg?react');
  }),
  'cash-off': lazy(() => {
    return import('@tabler/icons/cash-off.svg?react');
  }),
  cash: lazy(() => {
    return import('@tabler/icons/cash.svg?react');
  }),
  'cast-off': lazy(() => {
    return import('@tabler/icons/cast-off.svg?react');
  }),
  cast: lazy(() => {
    return import('@tabler/icons/cast.svg?react');
  }),
  cat: lazy(() => {
    return import('@tabler/icons/cat.svg?react');
  }),
  'category-2': lazy(() => {
    return import('@tabler/icons/category-2.svg?react');
  }),
  'category-filled': lazy(() => {
    return import('@tabler/icons/category-filled.svg?react');
  }),
  category: lazy(() => {
    return import('@tabler/icons/category.svg?react');
  }),
  'ce-off': lazy(() => {
    return import('@tabler/icons/ce-off.svg?react');
  }),
  ce: lazy(() => {
    return import('@tabler/icons/ce.svg?react');
  }),
  'cell-signal-1': lazy(() => {
    return import('@tabler/icons/cell-signal-1.svg?react');
  }),
  'cell-signal-2': lazy(() => {
    return import('@tabler/icons/cell-signal-2.svg?react');
  }),
  'cell-signal-3': lazy(() => {
    return import('@tabler/icons/cell-signal-3.svg?react');
  }),
  'cell-signal-4': lazy(() => {
    return import('@tabler/icons/cell-signal-4.svg?react');
  }),
  'cell-signal-5': lazy(() => {
    return import('@tabler/icons/cell-signal-5.svg?react');
  }),
  'cell-signal-off': lazy(() => {
    return import('@tabler/icons/cell-signal-off.svg?react');
  }),
  cell: lazy(() => {
    return import('@tabler/icons/cell.svg?react');
  }),
  'certificate-2-off': lazy(() => {
    return import('@tabler/icons/certificate-2-off.svg?react');
  }),
  'certificate-2': lazy(() => {
    return import('@tabler/icons/certificate-2.svg?react');
  }),
  'certificate-off': lazy(() => {
    return import('@tabler/icons/certificate-off.svg?react');
  }),
  certificate: lazy(() => {
    return import('@tabler/icons/certificate.svg?react');
  }),
  'chair-director': lazy(() => {
    return import('@tabler/icons/chair-director.svg?react');
  }),
  'chalkboard-off': lazy(() => {
    return import('@tabler/icons/chalkboard-off.svg?react');
  }),
  chalkboard: lazy(() => {
    return import('@tabler/icons/chalkboard.svg?react');
  }),
  'charging-pile': lazy(() => {
    return import('@tabler/icons/charging-pile.svg?react');
  }),
  'chart-arcs-3': lazy(() => {
    return import('@tabler/icons/chart-arcs-3.svg?react');
  }),
  'chart-arcs': lazy(() => {
    return import('@tabler/icons/chart-arcs.svg?react');
  }),
  'chart-area-filled': lazy(() => {
    return import('@tabler/icons/chart-area-filled.svg?react');
  }),
  'chart-area-line-filled': lazy(() => {
    return import('@tabler/icons/chart-area-line-filled.svg?react');
  }),
  'chart-area-line': lazy(() => {
    return import('@tabler/icons/chart-area-line.svg?react');
  }),
  'chart-area': lazy(() => {
    return import('@tabler/icons/chart-area.svg?react');
  }),
  'chart-arrows-vertical': lazy(() => {
    return import('@tabler/icons/chart-arrows-vertical.svg?react');
  }),
  'chart-arrows': lazy(() => {
    return import('@tabler/icons/chart-arrows.svg?react');
  }),
  'chart-bar-off': lazy(() => {
    return import('@tabler/icons/chart-bar-off.svg?react');
  }),
  'chart-bar': lazy(() => {
    return import('@tabler/icons/chart-bar.svg?react');
  }),
  'chart-bubble-filled': lazy(() => {
    return import('@tabler/icons/chart-bubble-filled.svg?react');
  }),
  'chart-bubble': lazy(() => {
    return import('@tabler/icons/chart-bubble.svg?react');
  }),
  'chart-candle-filled': lazy(() => {
    return import('@tabler/icons/chart-candle-filled.svg?react');
  }),
  'chart-candle': lazy(() => {
    return import('@tabler/icons/chart-candle.svg?react');
  }),
  'chart-circles': lazy(() => {
    return import('@tabler/icons/chart-circles.svg?react');
  }),
  'chart-donut-2': lazy(() => {
    return import('@tabler/icons/chart-donut-2.svg?react');
  }),
  'chart-donut-3': lazy(() => {
    return import('@tabler/icons/chart-donut-3.svg?react');
  }),
  'chart-donut-4': lazy(() => {
    return import('@tabler/icons/chart-donut-4.svg?react');
  }),
  'chart-donut-filled': lazy(() => {
    return import('@tabler/icons/chart-donut-filled.svg?react');
  }),
  'chart-donut': lazy(() => {
    return import('@tabler/icons/chart-donut.svg?react');
  }),
  'chart-dots-2': lazy(() => {
    return import('@tabler/icons/chart-dots-2.svg?react');
  }),
  'chart-dots-3': lazy(() => {
    return import('@tabler/icons/chart-dots-3.svg?react');
  }),
  'chart-dots': lazy(() => {
    return import('@tabler/icons/chart-dots.svg?react');
  }),
  'chart-grid-dots': lazy(() => {
    return import('@tabler/icons/chart-grid-dots.svg?react');
  }),
  'chart-histogram': lazy(() => {
    return import('@tabler/icons/chart-histogram.svg?react');
  }),
  'chart-infographic': lazy(() => {
    return import('@tabler/icons/chart-infographic.svg?react');
  }),
  'chart-line': lazy(() => {
    return import('@tabler/icons/chart-line.svg?react');
  }),
  'chart-pie-2': lazy(() => {
    return import('@tabler/icons/chart-pie-2.svg?react');
  }),
  'chart-pie-3': lazy(() => {
    return import('@tabler/icons/chart-pie-3.svg?react');
  }),
  'chart-pie-4': lazy(() => {
    return import('@tabler/icons/chart-pie-4.svg?react');
  }),
  'chart-pie-filled': lazy(() => {
    return import('@tabler/icons/chart-pie-filled.svg?react');
  }),
  'chart-pie-off': lazy(() => {
    return import('@tabler/icons/chart-pie-off.svg?react');
  }),
  'chart-pie': lazy(() => {
    return import('@tabler/icons/chart-pie.svg?react');
  }),
  'chart-ppf': lazy(() => {
    return import('@tabler/icons/chart-ppf.svg?react');
  }),
  'chart-radar': lazy(() => {
    return import('@tabler/icons/chart-radar.svg?react');
  }),
  'chart-sankey': lazy(() => {
    return import('@tabler/icons/chart-sankey.svg?react');
  }),
  'chart-treemap': lazy(() => {
    return import('@tabler/icons/chart-treemap.svg?react');
  }),
  check: lazy(() => {
    return import('@tabler/icons/check.svg?react');
  }),
  checkbox: lazy(() => {
    return import('@tabler/icons/checkbox.svg?react');
  }),
  checklist: lazy(() => {
    return import('@tabler/icons/checklist.svg?react');
  }),
  checks: lazy(() => {
    return import('@tabler/icons/checks.svg?react');
  }),
  'checkup-list': lazy(() => {
    return import('@tabler/icons/checkup-list.svg?react');
  }),
  cheese: lazy(() => {
    return import('@tabler/icons/cheese.svg?react');
  }),
  'chef-hat-off': lazy(() => {
    return import('@tabler/icons/chef-hat-off.svg?react');
  }),
  'chef-hat': lazy(() => {
    return import('@tabler/icons/chef-hat.svg?react');
  }),
  'cherry-filled': lazy(() => {
    return import('@tabler/icons/cherry-filled.svg?react');
  }),
  cherry: lazy(() => {
    return import('@tabler/icons/cherry.svg?react');
  }),
  'chess-bishop-filled': lazy(() => {
    return import('@tabler/icons/chess-bishop-filled.svg?react');
  }),
  'chess-bishop': lazy(() => {
    return import('@tabler/icons/chess-bishop.svg?react');
  }),
  'chess-filled': lazy(() => {
    return import('@tabler/icons/chess-filled.svg?react');
  }),
  'chess-king-filled': lazy(() => {
    return import('@tabler/icons/chess-king-filled.svg?react');
  }),
  'chess-king': lazy(() => {
    return import('@tabler/icons/chess-king.svg?react');
  }),
  'chess-knight-filled': lazy(() => {
    return import('@tabler/icons/chess-knight-filled.svg?react');
  }),
  'chess-knight': lazy(() => {
    return import('@tabler/icons/chess-knight.svg?react');
  }),
  'chess-queen-filled': lazy(() => {
    return import('@tabler/icons/chess-queen-filled.svg?react');
  }),
  'chess-queen': lazy(() => {
    return import('@tabler/icons/chess-queen.svg?react');
  }),
  'chess-rook-filled': lazy(() => {
    return import('@tabler/icons/chess-rook-filled.svg?react');
  }),
  'chess-rook': lazy(() => {
    return import('@tabler/icons/chess-rook.svg?react');
  }),
  chess: lazy(() => {
    return import('@tabler/icons/chess.svg?react');
  }),
  'chevron-compact-down': lazy(() => {
    return import('@tabler/icons/chevron-compact-down.svg?react');
  }),
  'chevron-compact-left': lazy(() => {
    return import('@tabler/icons/chevron-compact-left.svg?react');
  }),
  'chevron-compact-right': lazy(() => {
    return import('@tabler/icons/chevron-compact-right.svg?react');
  }),
  'chevron-compact-up': lazy(() => {
    return import('@tabler/icons/chevron-compact-up.svg?react');
  }),
  'chevron-down-left': lazy(() => {
    return import('@tabler/icons/chevron-down-left.svg?react');
  }),
  'chevron-down-right': lazy(() => {
    return import('@tabler/icons/chevron-down-right.svg?react');
  }),
  'chevron-down': lazy(() => {
    return import('@tabler/icons/chevron-down.svg?react');
  }),
  'chevron-left-pipe': lazy(() => {
    return import('@tabler/icons/chevron-left-pipe.svg?react');
  }),
  'chevron-left': lazy(() => {
    return import('@tabler/icons/chevron-left.svg?react');
  }),
  'chevron-right-pipe': lazy(() => {
    return import('@tabler/icons/chevron-right-pipe.svg?react');
  }),
  'chevron-right': lazy(() => {
    return import('@tabler/icons/chevron-right.svg?react');
  }),
  'chevron-up-left': lazy(() => {
    return import('@tabler/icons/chevron-up-left.svg?react');
  }),
  'chevron-up-right': lazy(() => {
    return import('@tabler/icons/chevron-up-right.svg?react');
  }),
  'chevron-up': lazy(() => {
    return import('@tabler/icons/chevron-up.svg?react');
  }),
  'chevrons-down-left': lazy(() => {
    return import('@tabler/icons/chevrons-down-left.svg?react');
  }),
  'chevrons-down-right': lazy(() => {
    return import('@tabler/icons/chevrons-down-right.svg?react');
  }),
  'chevrons-down': lazy(() => {
    return import('@tabler/icons/chevrons-down.svg?react');
  }),
  'chevrons-left': lazy(() => {
    return import('@tabler/icons/chevrons-left.svg?react');
  }),
  'chevrons-right': lazy(() => {
    return import('@tabler/icons/chevrons-right.svg?react');
  }),
  'chevrons-up-left': lazy(() => {
    return import('@tabler/icons/chevrons-up-left.svg?react');
  }),
  'chevrons-up-right': lazy(() => {
    return import('@tabler/icons/chevrons-up-right.svg?react');
  }),
  'chevrons-up': lazy(() => {
    return import('@tabler/icons/chevrons-up.svg?react');
  }),
  chisel: lazy(() => {
    return import('@tabler/icons/chisel.svg?react');
  }),
  'christmas-tree-off': lazy(() => {
    return import('@tabler/icons/christmas-tree-off.svg?react');
  }),
  'christmas-tree': lazy(() => {
    return import('@tabler/icons/christmas-tree.svg?react');
  }),
  'circle-0-filled': lazy(() => {
    return import('@tabler/icons/circle-0-filled.svg?react');
  }),
  'circle-1-filled': lazy(() => {
    return import('@tabler/icons/circle-1-filled.svg?react');
  }),
  'circle-2-filled': lazy(() => {
    return import('@tabler/icons/circle-2-filled.svg?react');
  }),
  'circle-3-filled': lazy(() => {
    return import('@tabler/icons/circle-3-filled.svg?react');
  }),
  'circle-4-filled': lazy(() => {
    return import('@tabler/icons/circle-4-filled.svg?react');
  }),
  'circle-5-filled': lazy(() => {
    return import('@tabler/icons/circle-5-filled.svg?react');
  }),
  'circle-6-filled': lazy(() => {
    return import('@tabler/icons/circle-6-filled.svg?react');
  }),
  'circle-7-filled': lazy(() => {
    return import('@tabler/icons/circle-7-filled.svg?react');
  }),
  'circle-8-filled': lazy(() => {
    return import('@tabler/icons/circle-8-filled.svg?react');
  }),
  'circle-9-filled': lazy(() => {
    return import('@tabler/icons/circle-9-filled.svg?react');
  }),
  'circle-arrow-down-filled': lazy(() => {
    return import('@tabler/icons/circle-arrow-down-filled.svg?react');
  }),
  'circle-arrow-down-left-filled': lazy(() => {
    return import('@tabler/icons/circle-arrow-down-left-filled.svg?react');
  }),
  'circle-arrow-down-left': lazy(() => {
    return import('@tabler/icons/circle-arrow-down-left.svg?react');
  }),
  'circle-arrow-down-right-filled': lazy(() => {
    return import('@tabler/icons/circle-arrow-down-right-filled.svg?react');
  }),
  'circle-arrow-down-right': lazy(() => {
    return import('@tabler/icons/circle-arrow-down-right.svg?react');
  }),
  'circle-arrow-down': lazy(() => {
    return import('@tabler/icons/circle-arrow-down.svg?react');
  }),
  'circle-arrow-left-filled': lazy(() => {
    return import('@tabler/icons/circle-arrow-left-filled.svg?react');
  }),
  'circle-arrow-left': lazy(() => {
    return import('@tabler/icons/circle-arrow-left.svg?react');
  }),
  'circle-arrow-right-filled': lazy(() => {
    return import('@tabler/icons/circle-arrow-right-filled.svg?react');
  }),
  'circle-arrow-right': lazy(() => {
    return import('@tabler/icons/circle-arrow-right.svg?react');
  }),
  'circle-arrow-up-filled': lazy(() => {
    return import('@tabler/icons/circle-arrow-up-filled.svg?react');
  }),
  'circle-arrow-up-left-filled': lazy(() => {
    return import('@tabler/icons/circle-arrow-up-left-filled.svg?react');
  }),
  'circle-arrow-up-left': lazy(() => {
    return import('@tabler/icons/circle-arrow-up-left.svg?react');
  }),
  'circle-arrow-up-right-filled': lazy(() => {
    return import('@tabler/icons/circle-arrow-up-right-filled.svg?react');
  }),
  'circle-arrow-up-right': lazy(() => {
    return import('@tabler/icons/circle-arrow-up-right.svg?react');
  }),
  'circle-arrow-up': lazy(() => {
    return import('@tabler/icons/circle-arrow-up.svg?react');
  }),
  'circle-caret-down': lazy(() => {
    return import('@tabler/icons/circle-caret-down.svg?react');
  }),
  'circle-caret-left': lazy(() => {
    return import('@tabler/icons/circle-caret-left.svg?react');
  }),
  'circle-caret-right': lazy(() => {
    return import('@tabler/icons/circle-caret-right.svg?react');
  }),
  'circle-caret-up': lazy(() => {
    return import('@tabler/icons/circle-caret-up.svg?react');
  }),
  'circle-check-filled': lazy(() => {
    return import('@tabler/icons/circle-check-filled.svg?react');
  }),
  'circle-check': lazy(() => {
    return import('@tabler/icons/circle-check.svg?react');
  }),
  'circle-chevron-down': lazy(() => {
    return import('@tabler/icons/circle-chevron-down.svg?react');
  }),
  'circle-chevron-left': lazy(() => {
    return import('@tabler/icons/circle-chevron-left.svg?react');
  }),
  'circle-chevron-right': lazy(() => {
    return import('@tabler/icons/circle-chevron-right.svg?react');
  }),
  'circle-chevron-up': lazy(() => {
    return import('@tabler/icons/circle-chevron-up.svg?react');
  }),
  'circle-chevrons-down': lazy(() => {
    return import('@tabler/icons/circle-chevrons-down.svg?react');
  }),
  'circle-chevrons-left': lazy(() => {
    return import('@tabler/icons/circle-chevrons-left.svg?react');
  }),
  'circle-chevrons-right': lazy(() => {
    return import('@tabler/icons/circle-chevrons-right.svg?react');
  }),
  'circle-chevrons-up': lazy(() => {
    return import('@tabler/icons/circle-chevrons-up.svg?react');
  }),
  'circle-dashed-number-0': lazy(() => {
    return import('@tabler/icons/circle-dashed-number-0.svg?react');
  }),
  'circle-dashed-number-1': lazy(() => {
    return import('@tabler/icons/circle-dashed-number-1.svg?react');
  }),
  'circle-dashed-number-2': lazy(() => {
    return import('@tabler/icons/circle-dashed-number-2.svg?react');
  }),
  'circle-dashed-number-3': lazy(() => {
    return import('@tabler/icons/circle-dashed-number-3.svg?react');
  }),
  'circle-dashed-number-4': lazy(() => {
    return import('@tabler/icons/circle-dashed-number-4.svg?react');
  }),
  'circle-dashed-number-5': lazy(() => {
    return import('@tabler/icons/circle-dashed-number-5.svg?react');
  }),
  'circle-dashed-number-6': lazy(() => {
    return import('@tabler/icons/circle-dashed-number-6.svg?react');
  }),
  'circle-dashed-number-7': lazy(() => {
    return import('@tabler/icons/circle-dashed-number-7.svg?react');
  }),
  'circle-dashed-number-8': lazy(() => {
    return import('@tabler/icons/circle-dashed-number-8.svg?react');
  }),
  'circle-dashed-number-9': lazy(() => {
    return import('@tabler/icons/circle-dashed-number-9.svg?react');
  }),
  'circle-dashed-x': lazy(() => {
    return import('@tabler/icons/circle-dashed-x.svg?react');
  }),
  'circle-dashed': lazy(() => {
    return import('@tabler/icons/circle-dashed.svg?react');
  }),
  'circle-dot-filled': lazy(() => {
    return import('@tabler/icons/circle-dot-filled.svg?react');
  }),
  'circle-dot': lazy(() => {
    return import('@tabler/icons/circle-dot.svg?react');
  }),
  'circle-dotted': lazy(() => {
    return import('@tabler/icons/circle-dotted.svg?react');
  }),
  'circle-filled': lazy(() => {
    return import('@tabler/icons/circle-filled.svg?react');
  }),
  'circle-half-2': lazy(() => {
    return import('@tabler/icons/circle-half-2.svg?react');
  }),
  'circle-half-vertical': lazy(() => {
    return import('@tabler/icons/circle-half-vertical.svg?react');
  }),
  'circle-half': lazy(() => {
    return import('@tabler/icons/circle-half.svg?react');
  }),
  'circle-key-filled': lazy(() => {
    return import('@tabler/icons/circle-key-filled.svg?react');
  }),
  'circle-key': lazy(() => {
    return import('@tabler/icons/circle-key.svg?react');
  }),
  'circle-letter-a': lazy(() => {
    return import('@tabler/icons/circle-letter-a.svg?react');
  }),
  'circle-letter-b': lazy(() => {
    return import('@tabler/icons/circle-letter-b.svg?react');
  }),
  'circle-letter-c': lazy(() => {
    return import('@tabler/icons/circle-letter-c.svg?react');
  }),
  'circle-letter-d': lazy(() => {
    return import('@tabler/icons/circle-letter-d.svg?react');
  }),
  'circle-letter-e': lazy(() => {
    return import('@tabler/icons/circle-letter-e.svg?react');
  }),
  'circle-letter-f': lazy(() => {
    return import('@tabler/icons/circle-letter-f.svg?react');
  }),
  'circle-letter-g': lazy(() => {
    return import('@tabler/icons/circle-letter-g.svg?react');
  }),
  'circle-letter-h': lazy(() => {
    return import('@tabler/icons/circle-letter-h.svg?react');
  }),
  'circle-letter-i': lazy(() => {
    return import('@tabler/icons/circle-letter-i.svg?react');
  }),
  'circle-letter-j': lazy(() => {
    return import('@tabler/icons/circle-letter-j.svg?react');
  }),
  'circle-letter-k': lazy(() => {
    return import('@tabler/icons/circle-letter-k.svg?react');
  }),
  'circle-letter-l': lazy(() => {
    return import('@tabler/icons/circle-letter-l.svg?react');
  }),
  'circle-letter-m': lazy(() => {
    return import('@tabler/icons/circle-letter-m.svg?react');
  }),
  'circle-letter-n': lazy(() => {
    return import('@tabler/icons/circle-letter-n.svg?react');
  }),
  'circle-letter-o': lazy(() => {
    return import('@tabler/icons/circle-letter-o.svg?react');
  }),
  'circle-letter-p': lazy(() => {
    return import('@tabler/icons/circle-letter-p.svg?react');
  }),
  'circle-letter-q': lazy(() => {
    return import('@tabler/icons/circle-letter-q.svg?react');
  }),
  'circle-letter-r': lazy(() => {
    return import('@tabler/icons/circle-letter-r.svg?react');
  }),
  'circle-letter-s': lazy(() => {
    return import('@tabler/icons/circle-letter-s.svg?react');
  }),
  'circle-letter-t': lazy(() => {
    return import('@tabler/icons/circle-letter-t.svg?react');
  }),
  'circle-letter-u': lazy(() => {
    return import('@tabler/icons/circle-letter-u.svg?react');
  }),
  'circle-letter-v': lazy(() => {
    return import('@tabler/icons/circle-letter-v.svg?react');
  }),
  'circle-letter-w': lazy(() => {
    return import('@tabler/icons/circle-letter-w.svg?react');
  }),
  'circle-letter-x': lazy(() => {
    return import('@tabler/icons/circle-letter-x.svg?react');
  }),
  'circle-letter-y': lazy(() => {
    return import('@tabler/icons/circle-letter-y.svg?react');
  }),
  'circle-letter-z': lazy(() => {
    return import('@tabler/icons/circle-letter-z.svg?react');
  }),
  'circle-minus-2': lazy(() => {
    return import('@tabler/icons/circle-minus-2.svg?react');
  }),
  'circle-minus': lazy(() => {
    return import('@tabler/icons/circle-minus.svg?react');
  }),
  'circle-number-0': lazy(() => {
    return import('@tabler/icons/circle-number-0.svg?react');
  }),
  'circle-number-1': lazy(() => {
    return import('@tabler/icons/circle-number-1.svg?react');
  }),
  'circle-number-2': lazy(() => {
    return import('@tabler/icons/circle-number-2.svg?react');
  }),
  'circle-number-3': lazy(() => {
    return import('@tabler/icons/circle-number-3.svg?react');
  }),
  'circle-number-4': lazy(() => {
    return import('@tabler/icons/circle-number-4.svg?react');
  }),
  'circle-number-5': lazy(() => {
    return import('@tabler/icons/circle-number-5.svg?react');
  }),
  'circle-number-6': lazy(() => {
    return import('@tabler/icons/circle-number-6.svg?react');
  }),
  'circle-number-7': lazy(() => {
    return import('@tabler/icons/circle-number-7.svg?react');
  }),
  'circle-number-8': lazy(() => {
    return import('@tabler/icons/circle-number-8.svg?react');
  }),
  'circle-number-9': lazy(() => {
    return import('@tabler/icons/circle-number-9.svg?react');
  }),
  'circle-off': lazy(() => {
    return import('@tabler/icons/circle-off.svg?react');
  }),
  'circle-plus-2': lazy(() => {
    return import('@tabler/icons/circle-plus-2.svg?react');
  }),
  'circle-plus': lazy(() => {
    return import('@tabler/icons/circle-plus.svg?react');
  }),
  'circle-rectangle-off': lazy(() => {
    return import('@tabler/icons/circle-rectangle-off.svg?react');
  }),
  'circle-rectangle': lazy(() => {
    return import('@tabler/icons/circle-rectangle.svg?react');
  }),
  'circle-square': lazy(() => {
    return import('@tabler/icons/circle-square.svg?react');
  }),
  'circle-triangle': lazy(() => {
    return import('@tabler/icons/circle-triangle.svg?react');
  }),
  'circle-x-filled': lazy(() => {
    return import('@tabler/icons/circle-x-filled.svg?react');
  }),
  'circle-x': lazy(() => {
    return import('@tabler/icons/circle-x.svg?react');
  }),
  circle: lazy(() => {
    return import('@tabler/icons/circle.svg?react');
  }),
  'circles-filled': lazy(() => {
    return import('@tabler/icons/circles-filled.svg?react');
  }),
  'circles-relation': lazy(() => {
    return import('@tabler/icons/circles-relation.svg?react');
  }),
  circles: lazy(() => {
    return import('@tabler/icons/circles.svg?react');
  }),
  'circuit-ammeter': lazy(() => {
    return import('@tabler/icons/circuit-ammeter.svg?react');
  }),
  'circuit-battery': lazy(() => {
    return import('@tabler/icons/circuit-battery.svg?react');
  }),
  'circuit-bulb': lazy(() => {
    return import('@tabler/icons/circuit-bulb.svg?react');
  }),
  'circuit-capacitor-polarized': lazy(() => {
    return import('@tabler/icons/circuit-capacitor-polarized.svg?react');
  }),
  'circuit-capacitor': lazy(() => {
    return import('@tabler/icons/circuit-capacitor.svg?react');
  }),
  'circuit-cell-plus': lazy(() => {
    return import('@tabler/icons/circuit-cell-plus.svg?react');
  }),
  'circuit-cell': lazy(() => {
    return import('@tabler/icons/circuit-cell.svg?react');
  }),
  'circuit-changeover': lazy(() => {
    return import('@tabler/icons/circuit-changeover.svg?react');
  }),
  'circuit-diode-zener': lazy(() => {
    return import('@tabler/icons/circuit-diode-zener.svg?react');
  }),
  'circuit-diode': lazy(() => {
    return import('@tabler/icons/circuit-diode.svg?react');
  }),
  'circuit-ground-digital': lazy(() => {
    return import('@tabler/icons/circuit-ground-digital.svg?react');
  }),
  'circuit-ground': lazy(() => {
    return import('@tabler/icons/circuit-ground.svg?react');
  }),
  'circuit-inductor': lazy(() => {
    return import('@tabler/icons/circuit-inductor.svg?react');
  }),
  'circuit-motor': lazy(() => {
    return import('@tabler/icons/circuit-motor.svg?react');
  }),
  'circuit-pushbutton': lazy(() => {
    return import('@tabler/icons/circuit-pushbutton.svg?react');
  }),
  'circuit-resistor': lazy(() => {
    return import('@tabler/icons/circuit-resistor.svg?react');
  }),
  'circuit-switch-closed': lazy(() => {
    return import('@tabler/icons/circuit-switch-closed.svg?react');
  }),
  'circuit-switch-open': lazy(() => {
    return import('@tabler/icons/circuit-switch-open.svg?react');
  }),
  'circuit-voltmeter': lazy(() => {
    return import('@tabler/icons/circuit-voltmeter.svg?react');
  }),
  'clear-all': lazy(() => {
    return import('@tabler/icons/clear-all.svg?react');
  }),
  'clear-formatting': lazy(() => {
    return import('@tabler/icons/clear-formatting.svg?react');
  }),
  click: lazy(() => {
    return import('@tabler/icons/click.svg?react');
  }),
  'clipboard-check': lazy(() => {
    return import('@tabler/icons/clipboard-check.svg?react');
  }),
  'clipboard-copy': lazy(() => {
    return import('@tabler/icons/clipboard-copy.svg?react');
  }),
  'clipboard-data': lazy(() => {
    return import('@tabler/icons/clipboard-data.svg?react');
  }),
  'clipboard-heart': lazy(() => {
    return import('@tabler/icons/clipboard-heart.svg?react');
  }),
  'clipboard-list': lazy(() => {
    return import('@tabler/icons/clipboard-list.svg?react');
  }),
  'clipboard-off': lazy(() => {
    return import('@tabler/icons/clipboard-off.svg?react');
  }),
  'clipboard-plus': lazy(() => {
    return import('@tabler/icons/clipboard-plus.svg?react');
  }),
  'clipboard-text': lazy(() => {
    return import('@tabler/icons/clipboard-text.svg?react');
  }),
  'clipboard-typography': lazy(() => {
    return import('@tabler/icons/clipboard-typography.svg?react');
  }),
  'clipboard-x': lazy(() => {
    return import('@tabler/icons/clipboard-x.svg?react');
  }),
  clipboard: lazy(() => {
    return import('@tabler/icons/clipboard.svg?react');
  }),
  'clock-12': lazy(() => {
    return import('@tabler/icons/clock-12.svg?react');
  }),
  'clock-2': lazy(() => {
    return import('@tabler/icons/clock-2.svg?react');
  }),
  'clock-24': lazy(() => {
    return import('@tabler/icons/clock-24.svg?react');
  }),
  'clock-bolt': lazy(() => {
    return import('@tabler/icons/clock-bolt.svg?react');
  }),
  'clock-cancel': lazy(() => {
    return import('@tabler/icons/clock-cancel.svg?react');
  }),
  'clock-check': lazy(() => {
    return import('@tabler/icons/clock-check.svg?react');
  }),
  'clock-code': lazy(() => {
    return import('@tabler/icons/clock-code.svg?react');
  }),
  'clock-cog': lazy(() => {
    return import('@tabler/icons/clock-cog.svg?react');
  }),
  'clock-dollar': lazy(() => {
    return import('@tabler/icons/clock-dollar.svg?react');
  }),
  'clock-down': lazy(() => {
    return import('@tabler/icons/clock-down.svg?react');
  }),
  'clock-edit': lazy(() => {
    return import('@tabler/icons/clock-edit.svg?react');
  }),
  'clock-exclamation': lazy(() => {
    return import('@tabler/icons/clock-exclamation.svg?react');
  }),
  'clock-filled': lazy(() => {
    return import('@tabler/icons/clock-filled.svg?react');
  }),
  'clock-heart': lazy(() => {
    return import('@tabler/icons/clock-heart.svg?react');
  }),
  'clock-hour-1': lazy(() => {
    return import('@tabler/icons/clock-hour-1.svg?react');
  }),
  'clock-hour-10': lazy(() => {
    return import('@tabler/icons/clock-hour-10.svg?react');
  }),
  'clock-hour-11': lazy(() => {
    return import('@tabler/icons/clock-hour-11.svg?react');
  }),
  'clock-hour-12': lazy(() => {
    return import('@tabler/icons/clock-hour-12.svg?react');
  }),
  'clock-hour-2': lazy(() => {
    return import('@tabler/icons/clock-hour-2.svg?react');
  }),
  'clock-hour-3': lazy(() => {
    return import('@tabler/icons/clock-hour-3.svg?react');
  }),
  'clock-hour-4': lazy(() => {
    return import('@tabler/icons/clock-hour-4.svg?react');
  }),
  'clock-hour-5': lazy(() => {
    return import('@tabler/icons/clock-hour-5.svg?react');
  }),
  'clock-hour-6': lazy(() => {
    return import('@tabler/icons/clock-hour-6.svg?react');
  }),
  'clock-hour-7': lazy(() => {
    return import('@tabler/icons/clock-hour-7.svg?react');
  }),
  'clock-hour-8': lazy(() => {
    return import('@tabler/icons/clock-hour-8.svg?react');
  }),
  'clock-hour-9': lazy(() => {
    return import('@tabler/icons/clock-hour-9.svg?react');
  }),
  'clock-minus': lazy(() => {
    return import('@tabler/icons/clock-minus.svg?react');
  }),
  'clock-off': lazy(() => {
    return import('@tabler/icons/clock-off.svg?react');
  }),
  'clock-pause': lazy(() => {
    return import('@tabler/icons/clock-pause.svg?react');
  }),
  'clock-pin': lazy(() => {
    return import('@tabler/icons/clock-pin.svg?react');
  }),
  'clock-play': lazy(() => {
    return import('@tabler/icons/clock-play.svg?react');
  }),
  'clock-plus': lazy(() => {
    return import('@tabler/icons/clock-plus.svg?react');
  }),
  'clock-question': lazy(() => {
    return import('@tabler/icons/clock-question.svg?react');
  }),
  'clock-record': lazy(() => {
    return import('@tabler/icons/clock-record.svg?react');
  }),
  'clock-search': lazy(() => {
    return import('@tabler/icons/clock-search.svg?react');
  }),
  'clock-share': lazy(() => {
    return import('@tabler/icons/clock-share.svg?react');
  }),
  'clock-shield': lazy(() => {
    return import('@tabler/icons/clock-shield.svg?react');
  }),
  'clock-star': lazy(() => {
    return import('@tabler/icons/clock-star.svg?react');
  }),
  'clock-stop': lazy(() => {
    return import('@tabler/icons/clock-stop.svg?react');
  }),
  'clock-up': lazy(() => {
    return import('@tabler/icons/clock-up.svg?react');
  }),
  'clock-x': lazy(() => {
    return import('@tabler/icons/clock-x.svg?react');
  }),
  clock: lazy(() => {
    return import('@tabler/icons/clock.svg?react');
  }),
  'clothes-rack-off': lazy(() => {
    return import('@tabler/icons/clothes-rack-off.svg?react');
  }),
  'clothes-rack': lazy(() => {
    return import('@tabler/icons/clothes-rack.svg?react');
  }),
  'cloud-bolt': lazy(() => {
    return import('@tabler/icons/cloud-bolt.svg?react');
  }),
  'cloud-cancel': lazy(() => {
    return import('@tabler/icons/cloud-cancel.svg?react');
  }),
  'cloud-check': lazy(() => {
    return import('@tabler/icons/cloud-check.svg?react');
  }),
  'cloud-code': lazy(() => {
    return import('@tabler/icons/cloud-code.svg?react');
  }),
  'cloud-cog': lazy(() => {
    return import('@tabler/icons/cloud-cog.svg?react');
  }),
  'cloud-computing': lazy(() => {
    return import('@tabler/icons/cloud-computing.svg?react');
  }),
  'cloud-data-connection': lazy(() => {
    return import('@tabler/icons/cloud-data-connection.svg?react');
  }),
  'cloud-dollar': lazy(() => {
    return import('@tabler/icons/cloud-dollar.svg?react');
  }),
  'cloud-down': lazy(() => {
    return import('@tabler/icons/cloud-down.svg?react');
  }),
  'cloud-download': lazy(() => {
    return import('@tabler/icons/cloud-download.svg?react');
  }),
  'cloud-exclamation': lazy(() => {
    return import('@tabler/icons/cloud-exclamation.svg?react');
  }),
  'cloud-filled': lazy(() => {
    return import('@tabler/icons/cloud-filled.svg?react');
  }),
  'cloud-fog': lazy(() => {
    return import('@tabler/icons/cloud-fog.svg?react');
  }),
  'cloud-heart': lazy(() => {
    return import('@tabler/icons/cloud-heart.svg?react');
  }),
  'cloud-lock-open': lazy(() => {
    return import('@tabler/icons/cloud-lock-open.svg?react');
  }),
  'cloud-lock': lazy(() => {
    return import('@tabler/icons/cloud-lock.svg?react');
  }),
  'cloud-minus': lazy(() => {
    return import('@tabler/icons/cloud-minus.svg?react');
  }),
  'cloud-network': lazy(() => {
    return import('@tabler/icons/cloud-network.svg?react');
  }),
  'cloud-off': lazy(() => {
    return import('@tabler/icons/cloud-off.svg?react');
  }),
  'cloud-pause': lazy(() => {
    return import('@tabler/icons/cloud-pause.svg?react');
  }),
  'cloud-pin': lazy(() => {
    return import('@tabler/icons/cloud-pin.svg?react');
  }),
  'cloud-plus': lazy(() => {
    return import('@tabler/icons/cloud-plus.svg?react');
  }),
  'cloud-question': lazy(() => {
    return import('@tabler/icons/cloud-question.svg?react');
  }),
  'cloud-rain': lazy(() => {
    return import('@tabler/icons/cloud-rain.svg?react');
  }),
  'cloud-search': lazy(() => {
    return import('@tabler/icons/cloud-search.svg?react');
  }),
  'cloud-share': lazy(() => {
    return import('@tabler/icons/cloud-share.svg?react');
  }),
  'cloud-snow': lazy(() => {
    return import('@tabler/icons/cloud-snow.svg?react');
  }),
  'cloud-star': lazy(() => {
    return import('@tabler/icons/cloud-star.svg?react');
  }),
  'cloud-storm': lazy(() => {
    return import('@tabler/icons/cloud-storm.svg?react');
  }),
  'cloud-up': lazy(() => {
    return import('@tabler/icons/cloud-up.svg?react');
  }),
  'cloud-upload': lazy(() => {
    return import('@tabler/icons/cloud-upload.svg?react');
  }),
  'cloud-x': lazy(() => {
    return import('@tabler/icons/cloud-x.svg?react');
  }),
  cloud: lazy(() => {
    return import('@tabler/icons/cloud.svg?react');
  }),
  'clover-2': lazy(() => {
    return import('@tabler/icons/clover-2.svg?react');
  }),
  clover: lazy(() => {
    return import('@tabler/icons/clover.svg?react');
  }),
  'clubs-filled': lazy(() => {
    return import('@tabler/icons/clubs-filled.svg?react');
  }),
  clubs: lazy(() => {
    return import('@tabler/icons/clubs.svg?react');
  }),
  'code-asterix': lazy(() => {
    return import('@tabler/icons/code-asterix.svg?react');
  }),
  'code-circle-2': lazy(() => {
    return import('@tabler/icons/code-circle-2.svg?react');
  }),
  'code-circle': lazy(() => {
    return import('@tabler/icons/code-circle.svg?react');
  }),
  'code-dots': lazy(() => {
    return import('@tabler/icons/code-dots.svg?react');
  }),
  'code-minus': lazy(() => {
    return import('@tabler/icons/code-minus.svg?react');
  }),
  'code-off': lazy(() => {
    return import('@tabler/icons/code-off.svg?react');
  }),
  'code-plus': lazy(() => {
    return import('@tabler/icons/code-plus.svg?react');
  }),
  code: lazy(() => {
    return import('@tabler/icons/code.svg?react');
  }),
  'coffee-off': lazy(() => {
    return import('@tabler/icons/coffee-off.svg?react');
  }),
  coffee: lazy(() => {
    return import('@tabler/icons/coffee.svg?react');
  }),
  coffin: lazy(() => {
    return import('@tabler/icons/coffin.svg?react');
  }),
  'coin-bitcoin': lazy(() => {
    return import('@tabler/icons/coin-bitcoin.svg?react');
  }),
  'coin-euro': lazy(() => {
    return import('@tabler/icons/coin-euro.svg?react');
  }),
  'coin-monero': lazy(() => {
    return import('@tabler/icons/coin-monero.svg?react');
  }),
  'coin-off': lazy(() => {
    return import('@tabler/icons/coin-off.svg?react');
  }),
  'coin-pound': lazy(() => {
    return import('@tabler/icons/coin-pound.svg?react');
  }),
  'coin-rupee': lazy(() => {
    return import('@tabler/icons/coin-rupee.svg?react');
  }),
  'coin-yen': lazy(() => {
    return import('@tabler/icons/coin-yen.svg?react');
  }),
  'coin-yuan': lazy(() => {
    return import('@tabler/icons/coin-yuan.svg?react');
  }),
  coin: lazy(() => {
    return import('@tabler/icons/coin.svg?react');
  }),
  coins: lazy(() => {
    return import('@tabler/icons/coins.svg?react');
  }),
  'color-filter': lazy(() => {
    return import('@tabler/icons/color-filter.svg?react');
  }),
  'color-picker-off': lazy(() => {
    return import('@tabler/icons/color-picker-off.svg?react');
  }),
  'color-picker': lazy(() => {
    return import('@tabler/icons/color-picker.svg?react');
  }),
  'color-swatch-off': lazy(() => {
    return import('@tabler/icons/color-swatch-off.svg?react');
  }),
  'color-swatch': lazy(() => {
    return import('@tabler/icons/color-swatch.svg?react');
  }),
  'column-insert-left': lazy(() => {
    return import('@tabler/icons/column-insert-left.svg?react');
  }),
  'column-insert-right': lazy(() => {
    return import('@tabler/icons/column-insert-right.svg?react');
  }),
  'column-remove': lazy(() => {
    return import('@tabler/icons/column-remove.svg?react');
  }),
  'columns-1': lazy(() => {
    return import('@tabler/icons/columns-1.svg?react');
  }),
  'columns-2': lazy(() => {
    return import('@tabler/icons/columns-2.svg?react');
  }),
  'columns-3': lazy(() => {
    return import('@tabler/icons/columns-3.svg?react');
  }),
  'columns-off': lazy(() => {
    return import('@tabler/icons/columns-off.svg?react');
  }),
  columns: lazy(() => {
    return import('@tabler/icons/columns.svg?react');
  }),
  comet: lazy(() => {
    return import('@tabler/icons/comet.svg?react');
  }),
  'command-off': lazy(() => {
    return import('@tabler/icons/command-off.svg?react');
  }),
  command: lazy(() => {
    return import('@tabler/icons/command.svg?react');
  }),
  'compass-off': lazy(() => {
    return import('@tabler/icons/compass-off.svg?react');
  }),
  compass: lazy(() => {
    return import('@tabler/icons/compass.svg?react');
  }),
  'components-off': lazy(() => {
    return import('@tabler/icons/components-off.svg?react');
  }),
  components: lazy(() => {
    return import('@tabler/icons/components.svg?react');
  }),
  'cone-2': lazy(() => {
    return import('@tabler/icons/cone-2.svg?react');
  }),
  'cone-off': lazy(() => {
    return import('@tabler/icons/cone-off.svg?react');
  }),
  'cone-plus': lazy(() => {
    return import('@tabler/icons/cone-plus.svg?react');
  }),
  cone: lazy(() => {
    return import('@tabler/icons/cone.svg?react');
  }),
  'confetti-off': lazy(() => {
    return import('@tabler/icons/confetti-off.svg?react');
  }),
  confetti: lazy(() => {
    return import('@tabler/icons/confetti.svg?react');
  }),
  confucius: lazy(() => {
    return import('@tabler/icons/confucius.svg?react');
  }),
  'container-off': lazy(() => {
    return import('@tabler/icons/container-off.svg?react');
  }),
  container: lazy(() => {
    return import('@tabler/icons/container.svg?react');
  }),
  'contrast-2-off': lazy(() => {
    return import('@tabler/icons/contrast-2-off.svg?react');
  }),
  'contrast-2': lazy(() => {
    return import('@tabler/icons/contrast-2.svg?react');
  }),
  'contrast-off': lazy(() => {
    return import('@tabler/icons/contrast-off.svg?react');
  }),
  contrast: lazy(() => {
    return import('@tabler/icons/contrast.svg?react');
  }),
  cooker: lazy(() => {
    return import('@tabler/icons/cooker.svg?react');
  }),
  'cookie-man': lazy(() => {
    return import('@tabler/icons/cookie-man.svg?react');
  }),
  'cookie-off': lazy(() => {
    return import('@tabler/icons/cookie-off.svg?react');
  }),
  cookie: lazy(() => {
    return import('@tabler/icons/cookie.svg?react');
  }),
  'copy-off': lazy(() => {
    return import('@tabler/icons/copy-off.svg?react');
  }),
  copy: lazy(() => {
    return import('@tabler/icons/copy.svg?react');
  }),
  'copyleft-filled': lazy(() => {
    return import('@tabler/icons/copyleft-filled.svg?react');
  }),
  'copyleft-off': lazy(() => {
    return import('@tabler/icons/copyleft-off.svg?react');
  }),
  copyleft: lazy(() => {
    return import('@tabler/icons/copyleft.svg?react');
  }),
  'copyright-filled': lazy(() => {
    return import('@tabler/icons/copyright-filled.svg?react');
  }),
  'copyright-off': lazy(() => {
    return import('@tabler/icons/copyright-off.svg?react');
  }),
  copyright: lazy(() => {
    return import('@tabler/icons/copyright.svg?react');
  }),
  'corner-down-left-double': lazy(() => {
    return import('@tabler/icons/corner-down-left-double.svg?react');
  }),
  'corner-down-left': lazy(() => {
    return import('@tabler/icons/corner-down-left.svg?react');
  }),
  'corner-down-right-double': lazy(() => {
    return import('@tabler/icons/corner-down-right-double.svg?react');
  }),
  'corner-down-right': lazy(() => {
    return import('@tabler/icons/corner-down-right.svg?react');
  }),
  'corner-left-down-double': lazy(() => {
    return import('@tabler/icons/corner-left-down-double.svg?react');
  }),
  'corner-left-down': lazy(() => {
    return import('@tabler/icons/corner-left-down.svg?react');
  }),
  'corner-left-up-double': lazy(() => {
    return import('@tabler/icons/corner-left-up-double.svg?react');
  }),
  'corner-left-up': lazy(() => {
    return import('@tabler/icons/corner-left-up.svg?react');
  }),
  'corner-right-down-double': lazy(() => {
    return import('@tabler/icons/corner-right-down-double.svg?react');
  }),
  'corner-right-down': lazy(() => {
    return import('@tabler/icons/corner-right-down.svg?react');
  }),
  'corner-right-up-double': lazy(() => {
    return import('@tabler/icons/corner-right-up-double.svg?react');
  }),
  'corner-right-up': lazy(() => {
    return import('@tabler/icons/corner-right-up.svg?react');
  }),
  'corner-up-left-double': lazy(() => {
    return import('@tabler/icons/corner-up-left-double.svg?react');
  }),
  'corner-up-left': lazy(() => {
    return import('@tabler/icons/corner-up-left.svg?react');
  }),
  'corner-up-right-double': lazy(() => {
    return import('@tabler/icons/corner-up-right-double.svg?react');
  }),
  'corner-up-right': lazy(() => {
    return import('@tabler/icons/corner-up-right.svg?react');
  }),
  'cpu-2': lazy(() => {
    return import('@tabler/icons/cpu-2.svg?react');
  }),
  'cpu-off': lazy(() => {
    return import('@tabler/icons/cpu-off.svg?react');
  }),
  cpu: lazy(() => {
    return import('@tabler/icons/cpu.svg?react');
  }),
  'crane-off': lazy(() => {
    return import('@tabler/icons/crane-off.svg?react');
  }),
  crane: lazy(() => {
    return import('@tabler/icons/crane.svg?react');
  }),
  'creative-commons-by': lazy(() => {
    return import('@tabler/icons/creative-commons-by.svg?react');
  }),
  'creative-commons-nc': lazy(() => {
    return import('@tabler/icons/creative-commons-nc.svg?react');
  }),
  'creative-commons-nd': lazy(() => {
    return import('@tabler/icons/creative-commons-nd.svg?react');
  }),
  'creative-commons-off': lazy(() => {
    return import('@tabler/icons/creative-commons-off.svg?react');
  }),
  'creative-commons-sa': lazy(() => {
    return import('@tabler/icons/creative-commons-sa.svg?react');
  }),
  'creative-commons-zero': lazy(() => {
    return import('@tabler/icons/creative-commons-zero.svg?react');
  }),
  'creative-commons': lazy(() => {
    return import('@tabler/icons/creative-commons.svg?react');
  }),
  'credit-card-off': lazy(() => {
    return import('@tabler/icons/credit-card-off.svg?react');
  }),
  'credit-card': lazy(() => {
    return import('@tabler/icons/credit-card.svg?react');
  }),
  cricket: lazy(() => {
    return import('@tabler/icons/cricket.svg?react');
  }),
  crop: lazy(() => {
    return import('@tabler/icons/crop.svg?react');
  }),
  'cross-filled': lazy(() => {
    return import('@tabler/icons/cross-filled.svg?react');
  }),
  'cross-off': lazy(() => {
    return import('@tabler/icons/cross-off.svg?react');
  }),
  cross: lazy(() => {
    return import('@tabler/icons/cross.svg?react');
  }),
  crosshair: lazy(() => {
    return import('@tabler/icons/crosshair.svg?react');
  }),
  'crown-off': lazy(() => {
    return import('@tabler/icons/crown-off.svg?react');
  }),
  crown: lazy(() => {
    return import('@tabler/icons/crown.svg?react');
  }),
  'crutches-off': lazy(() => {
    return import('@tabler/icons/crutches-off.svg?react');
  }),
  crutches: lazy(() => {
    return import('@tabler/icons/crutches.svg?react');
  }),
  'crystal-ball': lazy(() => {
    return import('@tabler/icons/crystal-ball.svg?react');
  }),
  csv: lazy(() => {
    return import('@tabler/icons/csv.svg?react');
  }),
  'cube-off': lazy(() => {
    return import('@tabler/icons/cube-off.svg?react');
  }),
  'cube-plus': lazy(() => {
    return import('@tabler/icons/cube-plus.svg?react');
  }),
  'cube-send': lazy(() => {
    return import('@tabler/icons/cube-send.svg?react');
  }),
  'cube-unfolded': lazy(() => {
    return import('@tabler/icons/cube-unfolded.svg?react');
  }),
  cube: lazy(() => {
    return import('@tabler/icons/cube.svg?react');
  }),
  'cup-off': lazy(() => {
    return import('@tabler/icons/cup-off.svg?react');
  }),
  cup: lazy(() => {
    return import('@tabler/icons/cup.svg?react');
  }),
  curling: lazy(() => {
    return import('@tabler/icons/curling.svg?react');
  }),
  'curly-loop': lazy(() => {
    return import('@tabler/icons/curly-loop.svg?react');
  }),
  'currency-afghani': lazy(() => {
    return import('@tabler/icons/currency-afghani.svg?react');
  }),
  'currency-bahraini': lazy(() => {
    return import('@tabler/icons/currency-bahraini.svg?react');
  }),
  'currency-baht': lazy(() => {
    return import('@tabler/icons/currency-baht.svg?react');
  }),
  'currency-bitcoin': lazy(() => {
    return import('@tabler/icons/currency-bitcoin.svg?react');
  }),
  'currency-cent': lazy(() => {
    return import('@tabler/icons/currency-cent.svg?react');
  }),
  'currency-dinar': lazy(() => {
    return import('@tabler/icons/currency-dinar.svg?react');
  }),
  'currency-dirham': lazy(() => {
    return import('@tabler/icons/currency-dirham.svg?react');
  }),
  'currency-dogecoin': lazy(() => {
    return import('@tabler/icons/currency-dogecoin.svg?react');
  }),
  'currency-dollar-australian': lazy(() => {
    return import('@tabler/icons/currency-dollar-australian.svg?react');
  }),
  'currency-dollar-brunei': lazy(() => {
    return import('@tabler/icons/currency-dollar-brunei.svg?react');
  }),
  'currency-dollar-canadian': lazy(() => {
    return import('@tabler/icons/currency-dollar-canadian.svg?react');
  }),
  'currency-dollar-guyanese': lazy(() => {
    return import('@tabler/icons/currency-dollar-guyanese.svg?react');
  }),
  'currency-dollar-off': lazy(() => {
    return import('@tabler/icons/currency-dollar-off.svg?react');
  }),
  'currency-dollar-singapore': lazy(() => {
    return import('@tabler/icons/currency-dollar-singapore.svg?react');
  }),
  'currency-dollar-zimbabwean': lazy(() => {
    return import('@tabler/icons/currency-dollar-zimbabwean.svg?react');
  }),
  'currency-dollar': lazy(() => {
    return import('@tabler/icons/currency-dollar.svg?react');
  }),
  'currency-dong': lazy(() => {
    return import('@tabler/icons/currency-dong.svg?react');
  }),
  'currency-dram': lazy(() => {
    return import('@tabler/icons/currency-dram.svg?react');
  }),
  'currency-ethereum': lazy(() => {
    return import('@tabler/icons/currency-ethereum.svg?react');
  }),
  'currency-euro-off': lazy(() => {
    return import('@tabler/icons/currency-euro-off.svg?react');
  }),
  'currency-euro': lazy(() => {
    return import('@tabler/icons/currency-euro.svg?react');
  }),
  'currency-florin': lazy(() => {
    return import('@tabler/icons/currency-florin.svg?react');
  }),
  'currency-forint': lazy(() => {
    return import('@tabler/icons/currency-forint.svg?react');
  }),
  'currency-frank': lazy(() => {
    return import('@tabler/icons/currency-frank.svg?react');
  }),
  'currency-guarani': lazy(() => {
    return import('@tabler/icons/currency-guarani.svg?react');
  }),
  'currency-hryvnia': lazy(() => {
    return import('@tabler/icons/currency-hryvnia.svg?react');
  }),
  'currency-iranian-rial': lazy(() => {
    return import('@tabler/icons/currency-iranian-rial.svg?react');
  }),
  'currency-kip': lazy(() => {
    return import('@tabler/icons/currency-kip.svg?react');
  }),
  'currency-krone-czech': lazy(() => {
    return import('@tabler/icons/currency-krone-czech.svg?react');
  }),
  'currency-krone-danish': lazy(() => {
    return import('@tabler/icons/currency-krone-danish.svg?react');
  }),
  'currency-krone-swedish': lazy(() => {
    return import('@tabler/icons/currency-krone-swedish.svg?react');
  }),
  'currency-lari': lazy(() => {
    return import('@tabler/icons/currency-lari.svg?react');
  }),
  'currency-leu': lazy(() => {
    return import('@tabler/icons/currency-leu.svg?react');
  }),
  'currency-lira': lazy(() => {
    return import('@tabler/icons/currency-lira.svg?react');
  }),
  'currency-litecoin': lazy(() => {
    return import('@tabler/icons/currency-litecoin.svg?react');
  }),
  'currency-lyd': lazy(() => {
    return import('@tabler/icons/currency-lyd.svg?react');
  }),
  'currency-manat': lazy(() => {
    return import('@tabler/icons/currency-manat.svg?react');
  }),
  'currency-monero': lazy(() => {
    return import('@tabler/icons/currency-monero.svg?react');
  }),
  'currency-naira': lazy(() => {
    return import('@tabler/icons/currency-naira.svg?react');
  }),
  'currency-nano': lazy(() => {
    return import('@tabler/icons/currency-nano.svg?react');
  }),
  'currency-off': lazy(() => {
    return import('@tabler/icons/currency-off.svg?react');
  }),
  'currency-paanga': lazy(() => {
    return import('@tabler/icons/currency-paanga.svg?react');
  }),
  'currency-peso': lazy(() => {
    return import('@tabler/icons/currency-peso.svg?react');
  }),
  'currency-pound-off': lazy(() => {
    return import('@tabler/icons/currency-pound-off.svg?react');
  }),
  'currency-pound': lazy(() => {
    return import('@tabler/icons/currency-pound.svg?react');
  }),
  'currency-quetzal': lazy(() => {
    return import('@tabler/icons/currency-quetzal.svg?react');
  }),
  'currency-real': lazy(() => {
    return import('@tabler/icons/currency-real.svg?react');
  }),
  'currency-renminbi': lazy(() => {
    return import('@tabler/icons/currency-renminbi.svg?react');
  }),
  'currency-ripple': lazy(() => {
    return import('@tabler/icons/currency-ripple.svg?react');
  }),
  'currency-riyal': lazy(() => {
    return import('@tabler/icons/currency-riyal.svg?react');
  }),
  'currency-rubel': lazy(() => {
    return import('@tabler/icons/currency-rubel.svg?react');
  }),
  'currency-rufiyaa': lazy(() => {
    return import('@tabler/icons/currency-rufiyaa.svg?react');
  }),
  'currency-rupee-nepalese': lazy(() => {
    return import('@tabler/icons/currency-rupee-nepalese.svg?react');
  }),
  'currency-rupee': lazy(() => {
    return import('@tabler/icons/currency-rupee.svg?react');
  }),
  'currency-shekel': lazy(() => {
    return import('@tabler/icons/currency-shekel.svg?react');
  }),
  'currency-solana': lazy(() => {
    return import('@tabler/icons/currency-solana.svg?react');
  }),
  'currency-som': lazy(() => {
    return import('@tabler/icons/currency-som.svg?react');
  }),
  'currency-taka': lazy(() => {
    return import('@tabler/icons/currency-taka.svg?react');
  }),
  'currency-tenge': lazy(() => {
    return import('@tabler/icons/currency-tenge.svg?react');
  }),
  'currency-tugrik': lazy(() => {
    return import('@tabler/icons/currency-tugrik.svg?react');
  }),
  'currency-won': lazy(() => {
    return import('@tabler/icons/currency-won.svg?react');
  }),
  'currency-yen-off': lazy(() => {
    return import('@tabler/icons/currency-yen-off.svg?react');
  }),
  'currency-yen': lazy(() => {
    return import('@tabler/icons/currency-yen.svg?react');
  }),
  'currency-yuan': lazy(() => {
    return import('@tabler/icons/currency-yuan.svg?react');
  }),
  'currency-zloty': lazy(() => {
    return import('@tabler/icons/currency-zloty.svg?react');
  }),
  currency: lazy(() => {
    return import('@tabler/icons/currency.svg?react');
  }),
  'current-location-off': lazy(() => {
    return import('@tabler/icons/current-location-off.svg?react');
  }),
  'current-location': lazy(() => {
    return import('@tabler/icons/current-location.svg?react');
  }),
  'cursor-off': lazy(() => {
    return import('@tabler/icons/cursor-off.svg?react');
  }),
  'cursor-text': lazy(() => {
    return import('@tabler/icons/cursor-text.svg?react');
  }),
  cut: lazy(() => {
    return import('@tabler/icons/cut.svg?react');
  }),
  'cylinder-off': lazy(() => {
    return import('@tabler/icons/cylinder-off.svg?react');
  }),
  'cylinder-plus': lazy(() => {
    return import('@tabler/icons/cylinder-plus.svg?react');
  }),
  cylinder: lazy(() => {
    return import('@tabler/icons/cylinder.svg?react');
  }),
  'dashboard-off': lazy(() => {
    return import('@tabler/icons/dashboard-off.svg?react');
  }),
  dashboard: lazy(() => {
    return import('@tabler/icons/dashboard.svg?react');
  }),
  'database-cog': lazy(() => {
    return import('@tabler/icons/database-cog.svg?react');
  }),
  'database-dollar': lazy(() => {
    return import('@tabler/icons/database-dollar.svg?react');
  }),
  'database-edit': lazy(() => {
    return import('@tabler/icons/database-edit.svg?react');
  }),
  'database-exclamation': lazy(() => {
    return import('@tabler/icons/database-exclamation.svg?react');
  }),
  'database-export': lazy(() => {
    return import('@tabler/icons/database-export.svg?react');
  }),
  'database-heart': lazy(() => {
    return import('@tabler/icons/database-heart.svg?react');
  }),
  'database-import': lazy(() => {
    return import('@tabler/icons/database-import.svg?react');
  }),
  'database-leak': lazy(() => {
    return import('@tabler/icons/database-leak.svg?react');
  }),
  'database-minus': lazy(() => {
    return import('@tabler/icons/database-minus.svg?react');
  }),
  'database-off': lazy(() => {
    return import('@tabler/icons/database-off.svg?react');
  }),
  'database-plus': lazy(() => {
    return import('@tabler/icons/database-plus.svg?react');
  }),
  'database-search': lazy(() => {
    return import('@tabler/icons/database-search.svg?react');
  }),
  'database-share': lazy(() => {
    return import('@tabler/icons/database-share.svg?react');
  }),
  'database-star': lazy(() => {
    return import('@tabler/icons/database-star.svg?react');
  }),
  'database-x': lazy(() => {
    return import('@tabler/icons/database-x.svg?react');
  }),
  database: lazy(() => {
    return import('@tabler/icons/database.svg?react');
  }),
  decimal: lazy(() => {
    return import('@tabler/icons/decimal.svg?react');
  }),
  deer: lazy(() => {
    return import('@tabler/icons/deer.svg?react');
  }),
  delta: lazy(() => {
    return import('@tabler/icons/delta.svg?react');
  }),
  'dental-broken': lazy(() => {
    return import('@tabler/icons/dental-broken.svg?react');
  }),
  'dental-off': lazy(() => {
    return import('@tabler/icons/dental-off.svg?react');
  }),
  dental: lazy(() => {
    return import('@tabler/icons/dental.svg?react');
  }),
  deselect: lazy(() => {
    return import('@tabler/icons/deselect.svg?react');
  }),
  'details-off': lazy(() => {
    return import('@tabler/icons/details-off.svg?react');
  }),
  details: lazy(() => {
    return import('@tabler/icons/details.svg?react');
  }),
  'device-airpods-case': lazy(() => {
    return import('@tabler/icons/device-airpods-case.svg?react');
  }),
  'device-airpods': lazy(() => {
    return import('@tabler/icons/device-airpods.svg?react');
  }),
  'device-airtag': lazy(() => {
    return import('@tabler/icons/device-airtag.svg?react');
  }),
  'device-analytics': lazy(() => {
    return import('@tabler/icons/device-analytics.svg?react');
  }),
  'device-audio-tape': lazy(() => {
    return import('@tabler/icons/device-audio-tape.svg?react');
  }),
  'device-camera-phone': lazy(() => {
    return import('@tabler/icons/device-camera-phone.svg?react');
  }),
  'device-cctv-off': lazy(() => {
    return import('@tabler/icons/device-cctv-off.svg?react');
  }),
  'device-cctv': lazy(() => {
    return import('@tabler/icons/device-cctv.svg?react');
  }),
  'device-computer-camera-off': lazy(() => {
    return import('@tabler/icons/device-computer-camera-off.svg?react');
  }),
  'device-computer-camera': lazy(() => {
    return import('@tabler/icons/device-computer-camera.svg?react');
  }),
  'device-desktop-analytics': lazy(() => {
    return import('@tabler/icons/device-desktop-analytics.svg?react');
  }),
  'device-desktop-bolt': lazy(() => {
    return import('@tabler/icons/device-desktop-bolt.svg?react');
  }),
  'device-desktop-cancel': lazy(() => {
    return import('@tabler/icons/device-desktop-cancel.svg?react');
  }),
  'device-desktop-check': lazy(() => {
    return import('@tabler/icons/device-desktop-check.svg?react');
  }),
  'device-desktop-code': lazy(() => {
    return import('@tabler/icons/device-desktop-code.svg?react');
  }),
  'device-desktop-cog': lazy(() => {
    return import('@tabler/icons/device-desktop-cog.svg?react');
  }),
  'device-desktop-dollar': lazy(() => {
    return import('@tabler/icons/device-desktop-dollar.svg?react');
  }),
  'device-desktop-down': lazy(() => {
    return import('@tabler/icons/device-desktop-down.svg?react');
  }),
  'device-desktop-exclamation': lazy(() => {
    return import('@tabler/icons/device-desktop-exclamation.svg?react');
  }),
  'device-desktop-heart': lazy(() => {
    return import('@tabler/icons/device-desktop-heart.svg?react');
  }),
  'device-desktop-minus': lazy(() => {
    return import('@tabler/icons/device-desktop-minus.svg?react');
  }),
  'device-desktop-off': lazy(() => {
    return import('@tabler/icons/device-desktop-off.svg?react');
  }),
  'device-desktop-pause': lazy(() => {
    return import('@tabler/icons/device-desktop-pause.svg?react');
  }),
  'device-desktop-pin': lazy(() => {
    return import('@tabler/icons/device-desktop-pin.svg?react');
  }),
  'device-desktop-plus': lazy(() => {
    return import('@tabler/icons/device-desktop-plus.svg?react');
  }),
  'device-desktop-question': lazy(() => {
    return import('@tabler/icons/device-desktop-question.svg?react');
  }),
  'device-desktop-search': lazy(() => {
    return import('@tabler/icons/device-desktop-search.svg?react');
  }),
  'device-desktop-share': lazy(() => {
    return import('@tabler/icons/device-desktop-share.svg?react');
  }),
  'device-desktop-star': lazy(() => {
    return import('@tabler/icons/device-desktop-star.svg?react');
  }),
  'device-desktop-up': lazy(() => {
    return import('@tabler/icons/device-desktop-up.svg?react');
  }),
  'device-desktop-x': lazy(() => {
    return import('@tabler/icons/device-desktop-x.svg?react');
  }),
  'device-desktop': lazy(() => {
    return import('@tabler/icons/device-desktop.svg?react');
  }),
  'device-floppy': lazy(() => {
    return import('@tabler/icons/device-floppy.svg?react');
  }),
  'device-gamepad-2': lazy(() => {
    return import('@tabler/icons/device-gamepad-2.svg?react');
  }),
  'device-gamepad-3': lazy(() => {
    return import('@tabler/icons/device-gamepad-3.svg?react');
  }),
  'device-gamepad': lazy(() => {
    return import('@tabler/icons/device-gamepad.svg?react');
  }),
  'device-heart-monitor-filled': lazy(() => {
    return import('@tabler/icons/device-heart-monitor-filled.svg?react');
  }),
  'device-heart-monitor': lazy(() => {
    return import('@tabler/icons/device-heart-monitor.svg?react');
  }),
  'device-imac-bolt': lazy(() => {
    return import('@tabler/icons/device-imac-bolt.svg?react');
  }),
  'device-imac-cancel': lazy(() => {
    return import('@tabler/icons/device-imac-cancel.svg?react');
  }),
  'device-imac-check': lazy(() => {
    return import('@tabler/icons/device-imac-check.svg?react');
  }),
  'device-imac-code': lazy(() => {
    return import('@tabler/icons/device-imac-code.svg?react');
  }),
  'device-imac-cog': lazy(() => {
    return import('@tabler/icons/device-imac-cog.svg?react');
  }),
  'device-imac-dollar': lazy(() => {
    return import('@tabler/icons/device-imac-dollar.svg?react');
  }),
  'device-imac-down': lazy(() => {
    return import('@tabler/icons/device-imac-down.svg?react');
  }),
  'device-imac-exclamation': lazy(() => {
    return import('@tabler/icons/device-imac-exclamation.svg?react');
  }),
  'device-imac-heart': lazy(() => {
    return import('@tabler/icons/device-imac-heart.svg?react');
  }),
  'device-imac-minus': lazy(() => {
    return import('@tabler/icons/device-imac-minus.svg?react');
  }),
  'device-imac-off': lazy(() => {
    return import('@tabler/icons/device-imac-off.svg?react');
  }),
  'device-imac-pause': lazy(() => {
    return import('@tabler/icons/device-imac-pause.svg?react');
  }),
  'device-imac-pin': lazy(() => {
    return import('@tabler/icons/device-imac-pin.svg?react');
  }),
  'device-imac-plus': lazy(() => {
    return import('@tabler/icons/device-imac-plus.svg?react');
  }),
  'device-imac-question': lazy(() => {
    return import('@tabler/icons/device-imac-question.svg?react');
  }),
  'device-imac-search': lazy(() => {
    return import('@tabler/icons/device-imac-search.svg?react');
  }),
  'device-imac-share': lazy(() => {
    return import('@tabler/icons/device-imac-share.svg?react');
  }),
  'device-imac-star': lazy(() => {
    return import('@tabler/icons/device-imac-star.svg?react');
  }),
  'device-imac-up': lazy(() => {
    return import('@tabler/icons/device-imac-up.svg?react');
  }),
  'device-imac-x': lazy(() => {
    return import('@tabler/icons/device-imac-x.svg?react');
  }),
  'device-imac': lazy(() => {
    return import('@tabler/icons/device-imac.svg?react');
  }),
  'device-ipad-bolt': lazy(() => {
    return import('@tabler/icons/device-ipad-bolt.svg?react');
  }),
  'device-ipad-cancel': lazy(() => {
    return import('@tabler/icons/device-ipad-cancel.svg?react');
  }),
  'device-ipad-check': lazy(() => {
    return import('@tabler/icons/device-ipad-check.svg?react');
  }),
  'device-ipad-code': lazy(() => {
    return import('@tabler/icons/device-ipad-code.svg?react');
  }),
  'device-ipad-cog': lazy(() => {
    return import('@tabler/icons/device-ipad-cog.svg?react');
  }),
  'device-ipad-dollar': lazy(() => {
    return import('@tabler/icons/device-ipad-dollar.svg?react');
  }),
  'device-ipad-down': lazy(() => {
    return import('@tabler/icons/device-ipad-down.svg?react');
  }),
  'device-ipad-exclamation': lazy(() => {
    return import('@tabler/icons/device-ipad-exclamation.svg?react');
  }),
  'device-ipad-heart': lazy(() => {
    return import('@tabler/icons/device-ipad-heart.svg?react');
  }),
  'device-ipad-horizontal-bolt': lazy(() => {
    return import('@tabler/icons/device-ipad-horizontal-bolt.svg?react');
  }),
  'device-ipad-horizontal-cancel': lazy(() => {
    return import('@tabler/icons/device-ipad-horizontal-cancel.svg?react');
  }),
  'device-ipad-horizontal-check': lazy(() => {
    return import('@tabler/icons/device-ipad-horizontal-check.svg?react');
  }),
  'device-ipad-horizontal-code': lazy(() => {
    return import('@tabler/icons/device-ipad-horizontal-code.svg?react');
  }),
  'device-ipad-horizontal-cog': lazy(() => {
    return import('@tabler/icons/device-ipad-horizontal-cog.svg?react');
  }),
  'device-ipad-horizontal-dollar': lazy(() => {
    return import('@tabler/icons/device-ipad-horizontal-dollar.svg?react');
  }),
  'device-ipad-horizontal-down': lazy(() => {
    return import('@tabler/icons/device-ipad-horizontal-down.svg?react');
  }),
  'device-ipad-horizontal-exclamation': lazy(() => {
    return import('@tabler/icons/device-ipad-horizontal-exclamation.svg?react');
  }),
  'device-ipad-horizontal-heart': lazy(() => {
    return import('@tabler/icons/device-ipad-horizontal-heart.svg?react');
  }),
  'device-ipad-horizontal-minus': lazy(() => {
    return import('@tabler/icons/device-ipad-horizontal-minus.svg?react');
  }),
  'device-ipad-horizontal-off': lazy(() => {
    return import('@tabler/icons/device-ipad-horizontal-off.svg?react');
  }),
  'device-ipad-horizontal-pause': lazy(() => {
    return import('@tabler/icons/device-ipad-horizontal-pause.svg?react');
  }),
  'device-ipad-horizontal-pin': lazy(() => {
    return import('@tabler/icons/device-ipad-horizontal-pin.svg?react');
  }),
  'device-ipad-horizontal-plus': lazy(() => {
    return import('@tabler/icons/device-ipad-horizontal-plus.svg?react');
  }),
  'device-ipad-horizontal-question': lazy(() => {
    return import('@tabler/icons/device-ipad-horizontal-question.svg?react');
  }),
  'device-ipad-horizontal-search': lazy(() => {
    return import('@tabler/icons/device-ipad-horizontal-search.svg?react');
  }),
  'device-ipad-horizontal-share': lazy(() => {
    return import('@tabler/icons/device-ipad-horizontal-share.svg?react');
  }),
  'device-ipad-horizontal-star': lazy(() => {
    return import('@tabler/icons/device-ipad-horizontal-star.svg?react');
  }),
  'device-ipad-horizontal-up': lazy(() => {
    return import('@tabler/icons/device-ipad-horizontal-up.svg?react');
  }),
  'device-ipad-horizontal-x': lazy(() => {
    return import('@tabler/icons/device-ipad-horizontal-x.svg?react');
  }),
  'device-ipad-horizontal': lazy(() => {
    return import('@tabler/icons/device-ipad-horizontal.svg?react');
  }),
  'device-ipad-minus': lazy(() => {
    return import('@tabler/icons/device-ipad-minus.svg?react');
  }),
  'device-ipad-off': lazy(() => {
    return import('@tabler/icons/device-ipad-off.svg?react');
  }),
  'device-ipad-pause': lazy(() => {
    return import('@tabler/icons/device-ipad-pause.svg?react');
  }),
  'device-ipad-pin': lazy(() => {
    return import('@tabler/icons/device-ipad-pin.svg?react');
  }),
  'device-ipad-plus': lazy(() => {
    return import('@tabler/icons/device-ipad-plus.svg?react');
  }),
  'device-ipad-question': lazy(() => {
    return import('@tabler/icons/device-ipad-question.svg?react');
  }),
  'device-ipad-search': lazy(() => {
    return import('@tabler/icons/device-ipad-search.svg?react');
  }),
  'device-ipad-share': lazy(() => {
    return import('@tabler/icons/device-ipad-share.svg?react');
  }),
  'device-ipad-star': lazy(() => {
    return import('@tabler/icons/device-ipad-star.svg?react');
  }),
  'device-ipad-up': lazy(() => {
    return import('@tabler/icons/device-ipad-up.svg?react');
  }),
  'device-ipad-x': lazy(() => {
    return import('@tabler/icons/device-ipad-x.svg?react');
  }),
  'device-ipad': lazy(() => {
    return import('@tabler/icons/device-ipad.svg?react');
  }),
  'device-landline-phone': lazy(() => {
    return import('@tabler/icons/device-landline-phone.svg?react');
  }),
  'device-laptop-off': lazy(() => {
    return import('@tabler/icons/device-laptop-off.svg?react');
  }),
  'device-laptop': lazy(() => {
    return import('@tabler/icons/device-laptop.svg?react');
  }),
  'device-mobile-bolt': lazy(() => {
    return import('@tabler/icons/device-mobile-bolt.svg?react');
  }),
  'device-mobile-cancel': lazy(() => {
    return import('@tabler/icons/device-mobile-cancel.svg?react');
  }),
  'device-mobile-charging': lazy(() => {
    return import('@tabler/icons/device-mobile-charging.svg?react');
  }),
  'device-mobile-check': lazy(() => {
    return import('@tabler/icons/device-mobile-check.svg?react');
  }),
  'device-mobile-code': lazy(() => {
    return import('@tabler/icons/device-mobile-code.svg?react');
  }),
  'device-mobile-cog': lazy(() => {
    return import('@tabler/icons/device-mobile-cog.svg?react');
  }),
  'device-mobile-dollar': lazy(() => {
    return import('@tabler/icons/device-mobile-dollar.svg?react');
  }),
  'device-mobile-down': lazy(() => {
    return import('@tabler/icons/device-mobile-down.svg?react');
  }),
  'device-mobile-exclamation': lazy(() => {
    return import('@tabler/icons/device-mobile-exclamation.svg?react');
  }),
  'device-mobile-filled': lazy(() => {
    return import('@tabler/icons/device-mobile-filled.svg?react');
  }),
  'device-mobile-heart': lazy(() => {
    return import('@tabler/icons/device-mobile-heart.svg?react');
  }),
  'device-mobile-message': lazy(() => {
    return import('@tabler/icons/device-mobile-message.svg?react');
  }),
  'device-mobile-minus': lazy(() => {
    return import('@tabler/icons/device-mobile-minus.svg?react');
  }),
  'device-mobile-off': lazy(() => {
    return import('@tabler/icons/device-mobile-off.svg?react');
  }),
  'device-mobile-pause': lazy(() => {
    return import('@tabler/icons/device-mobile-pause.svg?react');
  }),
  'device-mobile-pin': lazy(() => {
    return import('@tabler/icons/device-mobile-pin.svg?react');
  }),
  'device-mobile-plus': lazy(() => {
    return import('@tabler/icons/device-mobile-plus.svg?react');
  }),
  'device-mobile-question': lazy(() => {
    return import('@tabler/icons/device-mobile-question.svg?react');
  }),
  'device-mobile-rotated': lazy(() => {
    return import('@tabler/icons/device-mobile-rotated.svg?react');
  }),
  'device-mobile-search': lazy(() => {
    return import('@tabler/icons/device-mobile-search.svg?react');
  }),
  'device-mobile-share': lazy(() => {
    return import('@tabler/icons/device-mobile-share.svg?react');
  }),
  'device-mobile-star': lazy(() => {
    return import('@tabler/icons/device-mobile-star.svg?react');
  }),
  'device-mobile-up': lazy(() => {
    return import('@tabler/icons/device-mobile-up.svg?react');
  }),
  'device-mobile-vibration': lazy(() => {
    return import('@tabler/icons/device-mobile-vibration.svg?react');
  }),
  'device-mobile-x': lazy(() => {
    return import('@tabler/icons/device-mobile-x.svg?react');
  }),
  'device-mobile': lazy(() => {
    return import('@tabler/icons/device-mobile.svg?react');
  }),
  'device-nintendo-off': lazy(() => {
    return import('@tabler/icons/device-nintendo-off.svg?react');
  }),
  'device-nintendo': lazy(() => {
    return import('@tabler/icons/device-nintendo.svg?react');
  }),
  'device-projector': lazy(() => {
    return import('@tabler/icons/device-projector.svg?react');
  }),
  'device-remote': lazy(() => {
    return import('@tabler/icons/device-remote.svg?react');
  }),
  'device-sd-card': lazy(() => {
    return import('@tabler/icons/device-sd-card.svg?react');
  }),
  'device-sim-1': lazy(() => {
    return import('@tabler/icons/device-sim-1.svg?react');
  }),
  'device-sim-2': lazy(() => {
    return import('@tabler/icons/device-sim-2.svg?react');
  }),
  'device-sim-3': lazy(() => {
    return import('@tabler/icons/device-sim-3.svg?react');
  }),
  'device-sim': lazy(() => {
    return import('@tabler/icons/device-sim.svg?react');
  }),
  'device-speaker-off': lazy(() => {
    return import('@tabler/icons/device-speaker-off.svg?react');
  }),
  'device-speaker': lazy(() => {
    return import('@tabler/icons/device-speaker.svg?react');
  }),
  'device-tablet-bolt': lazy(() => {
    return import('@tabler/icons/device-tablet-bolt.svg?react');
  }),
  'device-tablet-cancel': lazy(() => {
    return import('@tabler/icons/device-tablet-cancel.svg?react');
  }),
  'device-tablet-check': lazy(() => {
    return import('@tabler/icons/device-tablet-check.svg?react');
  }),
  'device-tablet-code': lazy(() => {
    return import('@tabler/icons/device-tablet-code.svg?react');
  }),
  'device-tablet-cog': lazy(() => {
    return import('@tabler/icons/device-tablet-cog.svg?react');
  }),
  'device-tablet-dollar': lazy(() => {
    return import('@tabler/icons/device-tablet-dollar.svg?react');
  }),
  'device-tablet-down': lazy(() => {
    return import('@tabler/icons/device-tablet-down.svg?react');
  }),
  'device-tablet-exclamation': lazy(() => {
    return import('@tabler/icons/device-tablet-exclamation.svg?react');
  }),
  'device-tablet-filled': lazy(() => {
    return import('@tabler/icons/device-tablet-filled.svg?react');
  }),
  'device-tablet-heart': lazy(() => {
    return import('@tabler/icons/device-tablet-heart.svg?react');
  }),
  'device-tablet-minus': lazy(() => {
    return import('@tabler/icons/device-tablet-minus.svg?react');
  }),
  'device-tablet-off': lazy(() => {
    return import('@tabler/icons/device-tablet-off.svg?react');
  }),
  'device-tablet-pause': lazy(() => {
    return import('@tabler/icons/device-tablet-pause.svg?react');
  }),
  'device-tablet-pin': lazy(() => {
    return import('@tabler/icons/device-tablet-pin.svg?react');
  }),
  'device-tablet-plus': lazy(() => {
    return import('@tabler/icons/device-tablet-plus.svg?react');
  }),
  'device-tablet-question': lazy(() => {
    return import('@tabler/icons/device-tablet-question.svg?react');
  }),
  'device-tablet-search': lazy(() => {
    return import('@tabler/icons/device-tablet-search.svg?react');
  }),
  'device-tablet-share': lazy(() => {
    return import('@tabler/icons/device-tablet-share.svg?react');
  }),
  'device-tablet-star': lazy(() => {
    return import('@tabler/icons/device-tablet-star.svg?react');
  }),
  'device-tablet-up': lazy(() => {
    return import('@tabler/icons/device-tablet-up.svg?react');
  }),
  'device-tablet-x': lazy(() => {
    return import('@tabler/icons/device-tablet-x.svg?react');
  }),
  'device-tablet': lazy(() => {
    return import('@tabler/icons/device-tablet.svg?react');
  }),
  'device-tv-off': lazy(() => {
    return import('@tabler/icons/device-tv-off.svg?react');
  }),
  'device-tv-old': lazy(() => {
    return import('@tabler/icons/device-tv-old.svg?react');
  }),
  'device-tv': lazy(() => {
    return import('@tabler/icons/device-tv.svg?react');
  }),
  'device-usb': lazy(() => {
    return import('@tabler/icons/device-usb.svg?react');
  }),
  'device-vision-pro': lazy(() => {
    return import('@tabler/icons/device-vision-pro.svg?react');
  }),
  'device-watch-bolt': lazy(() => {
    return import('@tabler/icons/device-watch-bolt.svg?react');
  }),
  'device-watch-cancel': lazy(() => {
    return import('@tabler/icons/device-watch-cancel.svg?react');
  }),
  'device-watch-check': lazy(() => {
    return import('@tabler/icons/device-watch-check.svg?react');
  }),
  'device-watch-code': lazy(() => {
    return import('@tabler/icons/device-watch-code.svg?react');
  }),
  'device-watch-cog': lazy(() => {
    return import('@tabler/icons/device-watch-cog.svg?react');
  }),
  'device-watch-dollar': lazy(() => {
    return import('@tabler/icons/device-watch-dollar.svg?react');
  }),
  'device-watch-down': lazy(() => {
    return import('@tabler/icons/device-watch-down.svg?react');
  }),
  'device-watch-exclamation': lazy(() => {
    return import('@tabler/icons/device-watch-exclamation.svg?react');
  }),
  'device-watch-heart': lazy(() => {
    return import('@tabler/icons/device-watch-heart.svg?react');
  }),
  'device-watch-minus': lazy(() => {
    return import('@tabler/icons/device-watch-minus.svg?react');
  }),
  'device-watch-off': lazy(() => {
    return import('@tabler/icons/device-watch-off.svg?react');
  }),
  'device-watch-pause': lazy(() => {
    return import('@tabler/icons/device-watch-pause.svg?react');
  }),
  'device-watch-pin': lazy(() => {
    return import('@tabler/icons/device-watch-pin.svg?react');
  }),
  'device-watch-plus': lazy(() => {
    return import('@tabler/icons/device-watch-plus.svg?react');
  }),
  'device-watch-question': lazy(() => {
    return import('@tabler/icons/device-watch-question.svg?react');
  }),
  'device-watch-search': lazy(() => {
    return import('@tabler/icons/device-watch-search.svg?react');
  }),
  'device-watch-share': lazy(() => {
    return import('@tabler/icons/device-watch-share.svg?react');
  }),
  'device-watch-star': lazy(() => {
    return import('@tabler/icons/device-watch-star.svg?react');
  }),
  'device-watch-stats-2': lazy(() => {
    return import('@tabler/icons/device-watch-stats-2.svg?react');
  }),
  'device-watch-stats': lazy(() => {
    return import('@tabler/icons/device-watch-stats.svg?react');
  }),
  'device-watch-up': lazy(() => {
    return import('@tabler/icons/device-watch-up.svg?react');
  }),
  'device-watch-x': lazy(() => {
    return import('@tabler/icons/device-watch-x.svg?react');
  }),
  'device-watch': lazy(() => {
    return import('@tabler/icons/device-watch.svg?react');
  }),
  'devices-2': lazy(() => {
    return import('@tabler/icons/devices-2.svg?react');
  }),
  'devices-bolt': lazy(() => {
    return import('@tabler/icons/devices-bolt.svg?react');
  }),
  'devices-cancel': lazy(() => {
    return import('@tabler/icons/devices-cancel.svg?react');
  }),
  'devices-check': lazy(() => {
    return import('@tabler/icons/devices-check.svg?react');
  }),
  'devices-code': lazy(() => {
    return import('@tabler/icons/devices-code.svg?react');
  }),
  'devices-cog': lazy(() => {
    return import('@tabler/icons/devices-cog.svg?react');
  }),
  'devices-dollar': lazy(() => {
    return import('@tabler/icons/devices-dollar.svg?react');
  }),
  'devices-down': lazy(() => {
    return import('@tabler/icons/devices-down.svg?react');
  }),
  'devices-exclamation': lazy(() => {
    return import('@tabler/icons/devices-exclamation.svg?react');
  }),
  'devices-heart': lazy(() => {
    return import('@tabler/icons/devices-heart.svg?react');
  }),
  'devices-minus': lazy(() => {
    return import('@tabler/icons/devices-minus.svg?react');
  }),
  'devices-off': lazy(() => {
    return import('@tabler/icons/devices-off.svg?react');
  }),
  'devices-pause': lazy(() => {
    return import('@tabler/icons/devices-pause.svg?react');
  }),
  'devices-pc-off': lazy(() => {
    return import('@tabler/icons/devices-pc-off.svg?react');
  }),
  'devices-pc': lazy(() => {
    return import('@tabler/icons/devices-pc.svg?react');
  }),
  'devices-pin': lazy(() => {
    return import('@tabler/icons/devices-pin.svg?react');
  }),
  'devices-plus': lazy(() => {
    return import('@tabler/icons/devices-plus.svg?react');
  }),
  'devices-question': lazy(() => {
    return import('@tabler/icons/devices-question.svg?react');
  }),
  'devices-search': lazy(() => {
    return import('@tabler/icons/devices-search.svg?react');
  }),
  'devices-share': lazy(() => {
    return import('@tabler/icons/devices-share.svg?react');
  }),
  'devices-star': lazy(() => {
    return import('@tabler/icons/devices-star.svg?react');
  }),
  'devices-up': lazy(() => {
    return import('@tabler/icons/devices-up.svg?react');
  }),
  'devices-x': lazy(() => {
    return import('@tabler/icons/devices-x.svg?react');
  }),
  devices: lazy(() => {
    return import('@tabler/icons/devices.svg?react');
  }),
  'diabolo-off': lazy(() => {
    return import('@tabler/icons/diabolo-off.svg?react');
  }),
  'diabolo-plus': lazy(() => {
    return import('@tabler/icons/diabolo-plus.svg?react');
  }),
  diabolo: lazy(() => {
    return import('@tabler/icons/diabolo.svg?react');
  }),
  'dialpad-filled': lazy(() => {
    return import('@tabler/icons/dialpad-filled.svg?react');
  }),
  'dialpad-off': lazy(() => {
    return import('@tabler/icons/dialpad-off.svg?react');
  }),
  dialpad: lazy(() => {
    return import('@tabler/icons/dialpad.svg?react');
  }),
  'diamond-filled': lazy(() => {
    return import('@tabler/icons/diamond-filled.svg?react');
  }),
  'diamond-off': lazy(() => {
    return import('@tabler/icons/diamond-off.svg?react');
  }),
  diamond: lazy(() => {
    return import('@tabler/icons/diamond.svg?react');
  }),
  'diamonds-filled': lazy(() => {
    return import('@tabler/icons/diamonds-filled.svg?react');
  }),
  diamonds: lazy(() => {
    return import('@tabler/icons/diamonds.svg?react');
  }),
  'dice-1-filled': lazy(() => {
    return import('@tabler/icons/dice-1-filled.svg?react');
  }),
  'dice-1': lazy(() => {
    return import('@tabler/icons/dice-1.svg?react');
  }),
  'dice-2-filled': lazy(() => {
    return import('@tabler/icons/dice-2-filled.svg?react');
  }),
  'dice-2': lazy(() => {
    return import('@tabler/icons/dice-2.svg?react');
  }),
  'dice-3-filled': lazy(() => {
    return import('@tabler/icons/dice-3-filled.svg?react');
  }),
  'dice-3': lazy(() => {
    return import('@tabler/icons/dice-3.svg?react');
  }),
  'dice-4-filled': lazy(() => {
    return import('@tabler/icons/dice-4-filled.svg?react');
  }),
  'dice-4': lazy(() => {
    return import('@tabler/icons/dice-4.svg?react');
  }),
  'dice-5-filled': lazy(() => {
    return import('@tabler/icons/dice-5-filled.svg?react');
  }),
  'dice-5': lazy(() => {
    return import('@tabler/icons/dice-5.svg?react');
  }),
  'dice-6-filled': lazy(() => {
    return import('@tabler/icons/dice-6-filled.svg?react');
  }),
  'dice-6': lazy(() => {
    return import('@tabler/icons/dice-6.svg?react');
  }),
  'dice-filled': lazy(() => {
    return import('@tabler/icons/dice-filled.svg?react');
  }),
  dice: lazy(() => {
    return import('@tabler/icons/dice.svg?react');
  }),
  dimensions: lazy(() => {
    return import('@tabler/icons/dimensions.svg?react');
  }),
  'direction-horizontal': lazy(() => {
    return import('@tabler/icons/direction-horizontal.svg?react');
  }),
  'direction-sign-filled': lazy(() => {
    return import('@tabler/icons/direction-sign-filled.svg?react');
  }),
  'direction-sign-off': lazy(() => {
    return import('@tabler/icons/direction-sign-off.svg?react');
  }),
  'direction-sign': lazy(() => {
    return import('@tabler/icons/direction-sign.svg?react');
  }),
  direction: lazy(() => {
    return import('@tabler/icons/direction.svg?react');
  }),
  'directions-off': lazy(() => {
    return import('@tabler/icons/directions-off.svg?react');
  }),
  directions: lazy(() => {
    return import('@tabler/icons/directions.svg?react');
  }),
  'disabled-2': lazy(() => {
    return import('@tabler/icons/disabled-2.svg?react');
  }),
  'disabled-off': lazy(() => {
    return import('@tabler/icons/disabled-off.svg?react');
  }),
  disabled: lazy(() => {
    return import('@tabler/icons/disabled.svg?react');
  }),
  'disc-golf': lazy(() => {
    return import('@tabler/icons/disc-golf.svg?react');
  }),
  'disc-off': lazy(() => {
    return import('@tabler/icons/disc-off.svg?react');
  }),
  disc: lazy(() => {
    return import('@tabler/icons/disc.svg?react');
  }),
  'discount-2-off': lazy(() => {
    return import('@tabler/icons/discount-2-off.svg?react');
  }),
  'discount-2': lazy(() => {
    return import('@tabler/icons/discount-2.svg?react');
  }),
  'discount-check-filled': lazy(() => {
    return import('@tabler/icons/discount-check-filled.svg?react');
  }),
  'discount-check': lazy(() => {
    return import('@tabler/icons/discount-check.svg?react');
  }),
  'discount-off': lazy(() => {
    return import('@tabler/icons/discount-off.svg?react');
  }),
  discount: lazy(() => {
    return import('@tabler/icons/discount.svg?react');
  }),
  divide: lazy(() => {
    return import('@tabler/icons/divide.svg?react');
  }),
  'dna-2-off': lazy(() => {
    return import('@tabler/icons/dna-2-off.svg?react');
  }),
  'dna-2': lazy(() => {
    return import('@tabler/icons/dna-2.svg?react');
  }),
  'dna-off': lazy(() => {
    return import('@tabler/icons/dna-off.svg?react');
  }),
  dna: lazy(() => {
    return import('@tabler/icons/dna.svg?react');
  }),
  'dog-bowl': lazy(() => {
    return import('@tabler/icons/dog-bowl.svg?react');
  }),
  dog: lazy(() => {
    return import('@tabler/icons/dog.svg?react');
  }),
  'door-enter': lazy(() => {
    return import('@tabler/icons/door-enter.svg?react');
  }),
  'door-exit': lazy(() => {
    return import('@tabler/icons/door-exit.svg?react');
  }),
  'door-off': lazy(() => {
    return import('@tabler/icons/door-off.svg?react');
  }),
  door: lazy(() => {
    return import('@tabler/icons/door.svg?react');
  }),
  'dots-circle-horizontal': lazy(() => {
    return import('@tabler/icons/dots-circle-horizontal.svg?react');
  }),
  'dots-diagonal-2': lazy(() => {
    return import('@tabler/icons/dots-diagonal-2.svg?react');
  }),
  'dots-diagonal': lazy(() => {
    return import('@tabler/icons/dots-diagonal.svg?react');
  }),
  'dots-vertical': lazy(() => {
    return import('@tabler/icons/dots-vertical.svg?react');
  }),
  dots: lazy(() => {
    return import('@tabler/icons/dots.svg?react');
  }),
  'download-off': lazy(() => {
    return import('@tabler/icons/download-off.svg?react');
  }),
  download: lazy(() => {
    return import('@tabler/icons/download.svg?react');
  }),
  'drag-drop-2': lazy(() => {
    return import('@tabler/icons/drag-drop-2.svg?react');
  }),
  'drag-drop': lazy(() => {
    return import('@tabler/icons/drag-drop.svg?react');
  }),
  'drone-off': lazy(() => {
    return import('@tabler/icons/drone-off.svg?react');
  }),
  drone: lazy(() => {
    return import('@tabler/icons/drone.svg?react');
  }),
  'drop-circle': lazy(() => {
    return import('@tabler/icons/drop-circle.svg?react');
  }),
  'droplet-bolt': lazy(() => {
    return import('@tabler/icons/droplet-bolt.svg?react');
  }),
  'droplet-cancel': lazy(() => {
    return import('@tabler/icons/droplet-cancel.svg?react');
  }),
  'droplet-check': lazy(() => {
    return import('@tabler/icons/droplet-check.svg?react');
  }),
  'droplet-code': lazy(() => {
    return import('@tabler/icons/droplet-code.svg?react');
  }),
  'droplet-cog': lazy(() => {
    return import('@tabler/icons/droplet-cog.svg?react');
  }),
  'droplet-dollar': lazy(() => {
    return import('@tabler/icons/droplet-dollar.svg?react');
  }),
  'droplet-down': lazy(() => {
    return import('@tabler/icons/droplet-down.svg?react');
  }),
  'droplet-exclamation': lazy(() => {
    return import('@tabler/icons/droplet-exclamation.svg?react');
  }),
  'droplet-filled': lazy(() => {
    return import('@tabler/icons/droplet-filled.svg?react');
  }),
  'droplet-half-2-filled': lazy(() => {
    return import('@tabler/icons/droplet-half-2-filled.svg?react');
  }),
  'droplet-half-2': lazy(() => {
    return import('@tabler/icons/droplet-half-2.svg?react');
  }),
  'droplet-half-filled': lazy(() => {
    return import('@tabler/icons/droplet-half-filled.svg?react');
  }),
  'droplet-half': lazy(() => {
    return import('@tabler/icons/droplet-half.svg?react');
  }),
  'droplet-heart': lazy(() => {
    return import('@tabler/icons/droplet-heart.svg?react');
  }),
  'droplet-minus': lazy(() => {
    return import('@tabler/icons/droplet-minus.svg?react');
  }),
  'droplet-off': lazy(() => {
    return import('@tabler/icons/droplet-off.svg?react');
  }),
  'droplet-pause': lazy(() => {
    return import('@tabler/icons/droplet-pause.svg?react');
  }),
  'droplet-pin': lazy(() => {
    return import('@tabler/icons/droplet-pin.svg?react');
  }),
  'droplet-plus': lazy(() => {
    return import('@tabler/icons/droplet-plus.svg?react');
  }),
  'droplet-question': lazy(() => {
    return import('@tabler/icons/droplet-question.svg?react');
  }),
  'droplet-search': lazy(() => {
    return import('@tabler/icons/droplet-search.svg?react');
  }),
  'droplet-share': lazy(() => {
    return import('@tabler/icons/droplet-share.svg?react');
  }),
  'droplet-star': lazy(() => {
    return import('@tabler/icons/droplet-star.svg?react');
  }),
  'droplet-up': lazy(() => {
    return import('@tabler/icons/droplet-up.svg?react');
  }),
  'droplet-x': lazy(() => {
    return import('@tabler/icons/droplet-x.svg?react');
  }),
  droplet: lazy(() => {
    return import('@tabler/icons/droplet.svg?react');
  }),
  droplets: lazy(() => {
    return import('@tabler/icons/droplets.svg?react');
  }),
  'dual-screen': lazy(() => {
    return import('@tabler/icons/dual-screen.svg?react');
  }),
  'e-passport': lazy(() => {
    return import('@tabler/icons/e-passport.svg?react');
  }),
  'ear-off': lazy(() => {
    return import('@tabler/icons/ear-off.svg?react');
  }),
  ear: lazy(() => {
    return import('@tabler/icons/ear.svg?react');
  }),
  'ease-in-control-point': lazy(() => {
    return import('@tabler/icons/ease-in-control-point.svg?react');
  }),
  'ease-in-out-control-points': lazy(() => {
    return import('@tabler/icons/ease-in-out-control-points.svg?react');
  }),
  'ease-in-out': lazy(() => {
    return import('@tabler/icons/ease-in-out.svg?react');
  }),
  'ease-in': lazy(() => {
    return import('@tabler/icons/ease-in.svg?react');
  }),
  'ease-out-control-point': lazy(() => {
    return import('@tabler/icons/ease-out-control-point.svg?react');
  }),
  'ease-out': lazy(() => {
    return import('@tabler/icons/ease-out.svg?react');
  }),
  'edit-circle-off': lazy(() => {
    return import('@tabler/icons/edit-circle-off.svg?react');
  }),
  'edit-circle': lazy(() => {
    return import('@tabler/icons/edit-circle.svg?react');
  }),
  'edit-off': lazy(() => {
    return import('@tabler/icons/edit-off.svg?react');
  }),
  edit: lazy(() => {
    return import('@tabler/icons/edit.svg?react');
  }),
  'egg-cracked': lazy(() => {
    return import('@tabler/icons/egg-cracked.svg?react');
  }),
  'egg-filled': lazy(() => {
    return import('@tabler/icons/egg-filled.svg?react');
  }),
  'egg-fried': lazy(() => {
    return import('@tabler/icons/egg-fried.svg?react');
  }),
  'egg-off': lazy(() => {
    return import('@tabler/icons/egg-off.svg?react');
  }),
  egg: lazy(() => {
    return import('@tabler/icons/egg.svg?react');
  }),
  eggs: lazy(() => {
    return import('@tabler/icons/eggs.svg?react');
  }),
  'elevator-off': lazy(() => {
    return import('@tabler/icons/elevator-off.svg?react');
  }),
  elevator: lazy(() => {
    return import('@tabler/icons/elevator.svg?react');
  }),
  'emergency-bed': lazy(() => {
    return import('@tabler/icons/emergency-bed.svg?react');
  }),
  'empathize-off': lazy(() => {
    return import('@tabler/icons/empathize-off.svg?react');
  }),
  empathize: lazy(() => {
    return import('@tabler/icons/empathize.svg?react');
  }),
  emphasis: lazy(() => {
    return import('@tabler/icons/emphasis.svg?react');
  }),
  'engine-off': lazy(() => {
    return import('@tabler/icons/engine-off.svg?react');
  }),
  engine: lazy(() => {
    return import('@tabler/icons/engine.svg?react');
  }),
  'equal-double': lazy(() => {
    return import('@tabler/icons/equal-double.svg?react');
  }),
  'equal-not': lazy(() => {
    return import('@tabler/icons/equal-not.svg?react');
  }),
  equal: lazy(() => {
    return import('@tabler/icons/equal.svg?react');
  }),
  'eraser-off': lazy(() => {
    return import('@tabler/icons/eraser-off.svg?react');
  }),
  eraser: lazy(() => {
    return import('@tabler/icons/eraser.svg?react');
  }),
  'error-404-off': lazy(() => {
    return import('@tabler/icons/error-404-off.svg?react');
  }),
  'error-404': lazy(() => {
    return import('@tabler/icons/error-404.svg?react');
  }),
  'escalator-down': lazy(() => {
    return import('@tabler/icons/escalator-down.svg?react');
  }),
  'escalator-up': lazy(() => {
    return import('@tabler/icons/escalator-up.svg?react');
  }),
  escalator: lazy(() => {
    return import('@tabler/icons/escalator.svg?react');
  }),
  'exchange-off': lazy(() => {
    return import('@tabler/icons/exchange-off.svg?react');
  }),
  exchange: lazy(() => {
    return import('@tabler/icons/exchange.svg?react');
  }),
  'exclamation-circle': lazy(() => {
    return import('@tabler/icons/exclamation-circle.svg?react');
  }),
  'exclamation-mark-off': lazy(() => {
    return import('@tabler/icons/exclamation-mark-off.svg?react');
  }),
  'exclamation-mark': lazy(() => {
    return import('@tabler/icons/exclamation-mark.svg?react');
  }),
  'explicit-off': lazy(() => {
    return import('@tabler/icons/explicit-off.svg?react');
  }),
  explicit: lazy(() => {
    return import('@tabler/icons/explicit.svg?react');
  }),
  'exposure-0': lazy(() => {
    return import('@tabler/icons/exposure-0.svg?react');
  }),
  'exposure-minus-1': lazy(() => {
    return import('@tabler/icons/exposure-minus-1.svg?react');
  }),
  'exposure-minus-2': lazy(() => {
    return import('@tabler/icons/exposure-minus-2.svg?react');
  }),
  'exposure-off': lazy(() => {
    return import('@tabler/icons/exposure-off.svg?react');
  }),
  'exposure-plus-1': lazy(() => {
    return import('@tabler/icons/exposure-plus-1.svg?react');
  }),
  'exposure-plus-2': lazy(() => {
    return import('@tabler/icons/exposure-plus-2.svg?react');
  }),
  exposure: lazy(() => {
    return import('@tabler/icons/exposure.svg?react');
  }),
  'external-link-off': lazy(() => {
    return import('@tabler/icons/external-link-off.svg?react');
  }),
  'external-link': lazy(() => {
    return import('@tabler/icons/external-link.svg?react');
  }),
  'eye-bolt': lazy(() => {
    return import('@tabler/icons/eye-bolt.svg?react');
  }),
  'eye-cancel': lazy(() => {
    return import('@tabler/icons/eye-cancel.svg?react');
  }),
  'eye-check': lazy(() => {
    return import('@tabler/icons/eye-check.svg?react');
  }),
  'eye-closed': lazy(() => {
    return import('@tabler/icons/eye-closed.svg?react');
  }),
  'eye-code': lazy(() => {
    return import('@tabler/icons/eye-code.svg?react');
  }),
  'eye-cog': lazy(() => {
    return import('@tabler/icons/eye-cog.svg?react');
  }),
  'eye-discount': lazy(() => {
    return import('@tabler/icons/eye-discount.svg?react');
  }),
  'eye-dollar': lazy(() => {
    return import('@tabler/icons/eye-dollar.svg?react');
  }),
  'eye-down': lazy(() => {
    return import('@tabler/icons/eye-down.svg?react');
  }),
  'eye-edit': lazy(() => {
    return import('@tabler/icons/eye-edit.svg?react');
  }),
  'eye-exclamation': lazy(() => {
    return import('@tabler/icons/eye-exclamation.svg?react');
  }),
  'eye-filled': lazy(() => {
    return import('@tabler/icons/eye-filled.svg?react');
  }),
  'eye-heart': lazy(() => {
    return import('@tabler/icons/eye-heart.svg?react');
  }),
  'eye-minus': lazy(() => {
    return import('@tabler/icons/eye-minus.svg?react');
  }),
  'eye-off': lazy(() => {
    return import('@tabler/icons/eye-off.svg?react');
  }),
  'eye-pause': lazy(() => {
    return import('@tabler/icons/eye-pause.svg?react');
  }),
  'eye-pin': lazy(() => {
    return import('@tabler/icons/eye-pin.svg?react');
  }),
  'eye-plus': lazy(() => {
    return import('@tabler/icons/eye-plus.svg?react');
  }),
  'eye-question': lazy(() => {
    return import('@tabler/icons/eye-question.svg?react');
  }),
  'eye-search': lazy(() => {
    return import('@tabler/icons/eye-search.svg?react');
  }),
  'eye-share': lazy(() => {
    return import('@tabler/icons/eye-share.svg?react');
  }),
  'eye-star': lazy(() => {
    return import('@tabler/icons/eye-star.svg?react');
  }),
  'eye-table': lazy(() => {
    return import('@tabler/icons/eye-table.svg?react');
  }),
  'eye-up': lazy(() => {
    return import('@tabler/icons/eye-up.svg?react');
  }),
  'eye-x': lazy(() => {
    return import('@tabler/icons/eye-x.svg?react');
  }),
  eye: lazy(() => {
    return import('@tabler/icons/eye.svg?react');
  }),
  'eyeglass-2': lazy(() => {
    return import('@tabler/icons/eyeglass-2.svg?react');
  }),
  'eyeglass-off': lazy(() => {
    return import('@tabler/icons/eyeglass-off.svg?react');
  }),
  eyeglass: lazy(() => {
    return import('@tabler/icons/eyeglass.svg?react');
  }),
  'face-id-error': lazy(() => {
    return import('@tabler/icons/face-id-error.svg?react');
  }),
  'face-id': lazy(() => {
    return import('@tabler/icons/face-id.svg?react');
  }),
  'face-mask-off': lazy(() => {
    return import('@tabler/icons/face-mask-off.svg?react');
  }),
  'face-mask': lazy(() => {
    return import('@tabler/icons/face-mask.svg?react');
  }),
  fall: lazy(() => {
    return import('@tabler/icons/fall.svg?react');
  }),
  'feather-off': lazy(() => {
    return import('@tabler/icons/feather-off.svg?react');
  }),
  feather: lazy(() => {
    return import('@tabler/icons/feather.svg?react');
  }),
  'fence-off': lazy(() => {
    return import('@tabler/icons/fence-off.svg?react');
  }),
  fence: lazy(() => {
    return import('@tabler/icons/fence.svg?react');
  }),
  'fidget-spinner': lazy(() => {
    return import('@tabler/icons/fidget-spinner.svg?react');
  }),
  'file-3d': lazy(() => {
    return import('@tabler/icons/file-3d.svg?react');
  }),
  'file-alert': lazy(() => {
    return import('@tabler/icons/file-alert.svg?react');
  }),
  'file-analytics': lazy(() => {
    return import('@tabler/icons/file-analytics.svg?react');
  }),
  'file-arrow-left': lazy(() => {
    return import('@tabler/icons/file-arrow-left.svg?react');
  }),
  'file-arrow-right': lazy(() => {
    return import('@tabler/icons/file-arrow-right.svg?react');
  }),
  'file-barcode': lazy(() => {
    return import('@tabler/icons/file-barcode.svg?react');
  }),
  'file-broken': lazy(() => {
    return import('@tabler/icons/file-broken.svg?react');
  }),
  'file-certificate': lazy(() => {
    return import('@tabler/icons/file-certificate.svg?react');
  }),
  'file-chart': lazy(() => {
    return import('@tabler/icons/file-chart.svg?react');
  }),
  'file-check': lazy(() => {
    return import('@tabler/icons/file-check.svg?react');
  }),
  'file-code-2': lazy(() => {
    return import('@tabler/icons/file-code-2.svg?react');
  }),
  'file-code': lazy(() => {
    return import('@tabler/icons/file-code.svg?react');
  }),
  'file-cv': lazy(() => {
    return import('@tabler/icons/file-cv.svg?react');
  }),
  'file-database': lazy(() => {
    return import('@tabler/icons/file-database.svg?react');
  }),
  'file-delta': lazy(() => {
    return import('@tabler/icons/file-delta.svg?react');
  }),
  'file-description': lazy(() => {
    return import('@tabler/icons/file-description.svg?react');
  }),
  'file-diff': lazy(() => {
    return import('@tabler/icons/file-diff.svg?react');
  }),
  'file-digit': lazy(() => {
    return import('@tabler/icons/file-digit.svg?react');
  }),
  'file-dislike': lazy(() => {
    return import('@tabler/icons/file-dislike.svg?react');
  }),
  'file-dollar': lazy(() => {
    return import('@tabler/icons/file-dollar.svg?react');
  }),
  'file-dots': lazy(() => {
    return import('@tabler/icons/file-dots.svg?react');
  }),
  'file-download': lazy(() => {
    return import('@tabler/icons/file-download.svg?react');
  }),
  'file-euro': lazy(() => {
    return import('@tabler/icons/file-euro.svg?react');
  }),
  'file-export': lazy(() => {
    return import('@tabler/icons/file-export.svg?react');
  }),
  'file-filled': lazy(() => {
    return import('@tabler/icons/file-filled.svg?react');
  }),
  'file-function': lazy(() => {
    return import('@tabler/icons/file-function.svg?react');
  }),
  'file-horizontal': lazy(() => {
    return import('@tabler/icons/file-horizontal.svg?react');
  }),
  'file-import': lazy(() => {
    return import('@tabler/icons/file-import.svg?react');
  }),
  'file-infinity': lazy(() => {
    return import('@tabler/icons/file-infinity.svg?react');
  }),
  'file-info': lazy(() => {
    return import('@tabler/icons/file-info.svg?react');
  }),
  'file-invoice': lazy(() => {
    return import('@tabler/icons/file-invoice.svg?react');
  }),
  'file-lambda': lazy(() => {
    return import('@tabler/icons/file-lambda.svg?react');
  }),
  'file-like': lazy(() => {
    return import('@tabler/icons/file-like.svg?react');
  }),
  'file-minus': lazy(() => {
    return import('@tabler/icons/file-minus.svg?react');
  }),
  'file-music': lazy(() => {
    return import('@tabler/icons/file-music.svg?react');
  }),
  'file-off': lazy(() => {
    return import('@tabler/icons/file-off.svg?react');
  }),
  'file-orientation': lazy(() => {
    return import('@tabler/icons/file-orientation.svg?react');
  }),
  'file-pencil': lazy(() => {
    return import('@tabler/icons/file-pencil.svg?react');
  }),
  'file-percent': lazy(() => {
    return import('@tabler/icons/file-percent.svg?react');
  }),
  'file-phone': lazy(() => {
    return import('@tabler/icons/file-phone.svg?react');
  }),
  'file-plus': lazy(() => {
    return import('@tabler/icons/file-plus.svg?react');
  }),
  'file-power': lazy(() => {
    return import('@tabler/icons/file-power.svg?react');
  }),
  'file-report': lazy(() => {
    return import('@tabler/icons/file-report.svg?react');
  }),
  'file-rss': lazy(() => {
    return import('@tabler/icons/file-rss.svg?react');
  }),
  'file-scissors': lazy(() => {
    return import('@tabler/icons/file-scissors.svg?react');
  }),
  'file-search': lazy(() => {
    return import('@tabler/icons/file-search.svg?react');
  }),
  'file-settings': lazy(() => {
    return import('@tabler/icons/file-settings.svg?react');
  }),
  'file-shredder': lazy(() => {
    return import('@tabler/icons/file-shredder.svg?react');
  }),
  'file-signal': lazy(() => {
    return import('@tabler/icons/file-signal.svg?react');
  }),
  'file-spreadsheet': lazy(() => {
    return import('@tabler/icons/file-spreadsheet.svg?react');
  }),
  'file-stack': lazy(() => {
    return import('@tabler/icons/file-stack.svg?react');
  }),
  'file-star': lazy(() => {
    return import('@tabler/icons/file-star.svg?react');
  }),
  'file-symlink': lazy(() => {
    return import('@tabler/icons/file-symlink.svg?react');
  }),
  'file-text-ai': lazy(() => {
    return import('@tabler/icons/file-text-ai.svg?react');
  }),
  'file-text': lazy(() => {
    return import('@tabler/icons/file-text.svg?react');
  }),
  'file-time': lazy(() => {
    return import('@tabler/icons/file-time.svg?react');
  }),
  'file-type-bmp': lazy(() => {
    return import('@tabler/icons/file-type-bmp.svg?react');
  }),
  'file-type-css': lazy(() => {
    return import('@tabler/icons/file-type-css.svg?react');
  }),
  'file-type-csv': lazy(() => {
    return import('@tabler/icons/file-type-csv.svg?react');
  }),
  'file-type-doc': lazy(() => {
    return import('@tabler/icons/file-type-doc.svg?react');
  }),
  'file-type-docx': lazy(() => {
    return import('@tabler/icons/file-type-docx.svg?react');
  }),
  'file-type-html': lazy(() => {
    return import('@tabler/icons/file-type-html.svg?react');
  }),
  'file-type-jpg': lazy(() => {
    return import('@tabler/icons/file-type-jpg.svg?react');
  }),
  'file-type-js': lazy(() => {
    return import('@tabler/icons/file-type-js.svg?react');
  }),
  'file-type-jsx': lazy(() => {
    return import('@tabler/icons/file-type-jsx.svg?react');
  }),
  'file-type-pdf': lazy(() => {
    return import('@tabler/icons/file-type-pdf.svg?react');
  }),
  'file-type-php': lazy(() => {
    return import('@tabler/icons/file-type-php.svg?react');
  }),
  'file-type-png': lazy(() => {
    return import('@tabler/icons/file-type-png.svg?react');
  }),
  'file-type-ppt': lazy(() => {
    return import('@tabler/icons/file-type-ppt.svg?react');
  }),
  'file-type-rs': lazy(() => {
    return import('@tabler/icons/file-type-rs.svg?react');
  }),
  'file-type-sql': lazy(() => {
    return import('@tabler/icons/file-type-sql.svg?react');
  }),
  'file-type-svg': lazy(() => {
    return import('@tabler/icons/file-type-svg.svg?react');
  }),
  'file-type-ts': lazy(() => {
    return import('@tabler/icons/file-type-ts.svg?react');
  }),
  'file-type-tsx': lazy(() => {
    return import('@tabler/icons/file-type-tsx.svg?react');
  }),
  'file-type-txt': lazy(() => {
    return import('@tabler/icons/file-type-txt.svg?react');
  }),
  'file-type-vue': lazy(() => {
    return import('@tabler/icons/file-type-vue.svg?react');
  }),
  'file-type-xls': lazy(() => {
    return import('@tabler/icons/file-type-xls.svg?react');
  }),
  'file-type-xml': lazy(() => {
    return import('@tabler/icons/file-type-xml.svg?react');
  }),
  'file-type-zip': lazy(() => {
    return import('@tabler/icons/file-type-zip.svg?react');
  }),
  'file-typography': lazy(() => {
    return import('@tabler/icons/file-typography.svg?react');
  }),
  'file-unknown': lazy(() => {
    return import('@tabler/icons/file-unknown.svg?react');
  }),
  'file-upload': lazy(() => {
    return import('@tabler/icons/file-upload.svg?react');
  }),
  'file-vector': lazy(() => {
    return import('@tabler/icons/file-vector.svg?react');
  }),
  'file-x-filled': lazy(() => {
    return import('@tabler/icons/file-x-filled.svg?react');
  }),
  'file-x': lazy(() => {
    return import('@tabler/icons/file-x.svg?react');
  }),
  'file-zip': lazy(() => {
    return import('@tabler/icons/file-zip.svg?react');
  }),
  file: lazy(() => {
    return import('@tabler/icons/file.svg?react');
  }),
  'files-off': lazy(() => {
    return import('@tabler/icons/files-off.svg?react');
  }),
  files: lazy(() => {
    return import('@tabler/icons/files.svg?react');
  }),
  'filter-bolt': lazy(() => {
    return import('@tabler/icons/filter-bolt.svg?react');
  }),
  'filter-cancel': lazy(() => {
    return import('@tabler/icons/filter-cancel.svg?react');
  }),
  'filter-check': lazy(() => {
    return import('@tabler/icons/filter-check.svg?react');
  }),
  'filter-code': lazy(() => {
    return import('@tabler/icons/filter-code.svg?react');
  }),
  'filter-cog': lazy(() => {
    return import('@tabler/icons/filter-cog.svg?react');
  }),
  'filter-discount': lazy(() => {
    return import('@tabler/icons/filter-discount.svg?react');
  }),
  'filter-dollar': lazy(() => {
    return import('@tabler/icons/filter-dollar.svg?react');
  }),
  'filter-down': lazy(() => {
    return import('@tabler/icons/filter-down.svg?react');
  }),
  'filter-edit': lazy(() => {
    return import('@tabler/icons/filter-edit.svg?react');
  }),
  'filter-exclamation': lazy(() => {
    return import('@tabler/icons/filter-exclamation.svg?react');
  }),
  'filter-filled': lazy(() => {
    return import('@tabler/icons/filter-filled.svg?react');
  }),
  'filter-heart': lazy(() => {
    return import('@tabler/icons/filter-heart.svg?react');
  }),
  'filter-minus': lazy(() => {
    return import('@tabler/icons/filter-minus.svg?react');
  }),
  'filter-off': lazy(() => {
    return import('@tabler/icons/filter-off.svg?react');
  }),
  'filter-pause': lazy(() => {
    return import('@tabler/icons/filter-pause.svg?react');
  }),
  'filter-pin': lazy(() => {
    return import('@tabler/icons/filter-pin.svg?react');
  }),
  'filter-plus': lazy(() => {
    return import('@tabler/icons/filter-plus.svg?react');
  }),
  'filter-question': lazy(() => {
    return import('@tabler/icons/filter-question.svg?react');
  }),
  'filter-search': lazy(() => {
    return import('@tabler/icons/filter-search.svg?react');
  }),
  'filter-share': lazy(() => {
    return import('@tabler/icons/filter-share.svg?react');
  }),
  'filter-star': lazy(() => {
    return import('@tabler/icons/filter-star.svg?react');
  }),
  'filter-up': lazy(() => {
    return import('@tabler/icons/filter-up.svg?react');
  }),
  'filter-x': lazy(() => {
    return import('@tabler/icons/filter-x.svg?react');
  }),
  filter: lazy(() => {
    return import('@tabler/icons/filter.svg?react');
  }),
  filters: lazy(() => {
    return import('@tabler/icons/filters.svg?react');
  }),
  'fingerprint-off': lazy(() => {
    return import('@tabler/icons/fingerprint-off.svg?react');
  }),
  'fingerprint-scan': lazy(() => {
    return import('@tabler/icons/fingerprint-scan.svg?react');
  }),
  fingerprint: lazy(() => {
    return import('@tabler/icons/fingerprint.svg?react');
  }),
  'fire-extinguisher': lazy(() => {
    return import('@tabler/icons/fire-extinguisher.svg?react');
  }),
  'fire-hydrant-off': lazy(() => {
    return import('@tabler/icons/fire-hydrant-off.svg?react');
  }),
  'fire-hydrant': lazy(() => {
    return import('@tabler/icons/fire-hydrant.svg?react');
  }),
  firetruck: lazy(() => {
    return import('@tabler/icons/firetruck.svg?react');
  }),
  'first-aid-kit-off': lazy(() => {
    return import('@tabler/icons/first-aid-kit-off.svg?react');
  }),
  'first-aid-kit': lazy(() => {
    return import('@tabler/icons/first-aid-kit.svg?react');
  }),
  'fish-bone': lazy(() => {
    return import('@tabler/icons/fish-bone.svg?react');
  }),
  'fish-christianity': lazy(() => {
    return import('@tabler/icons/fish-christianity.svg?react');
  }),
  'fish-hook-off': lazy(() => {
    return import('@tabler/icons/fish-hook-off.svg?react');
  }),
  'fish-hook': lazy(() => {
    return import('@tabler/icons/fish-hook.svg?react');
  }),
  'fish-off': lazy(() => {
    return import('@tabler/icons/fish-off.svg?react');
  }),
  fish: lazy(() => {
    return import('@tabler/icons/fish.svg?react');
  }),
  'flag-2-filled': lazy(() => {
    return import('@tabler/icons/flag-2-filled.svg?react');
  }),
  'flag-2-off': lazy(() => {
    return import('@tabler/icons/flag-2-off.svg?react');
  }),
  'flag-2': lazy(() => {
    return import('@tabler/icons/flag-2.svg?react');
  }),
  'flag-3-filled': lazy(() => {
    return import('@tabler/icons/flag-3-filled.svg?react');
  }),
  'flag-3': lazy(() => {
    return import('@tabler/icons/flag-3.svg?react');
  }),
  'flag-bolt': lazy(() => {
    return import('@tabler/icons/flag-bolt.svg?react');
  }),
  'flag-cancel': lazy(() => {
    return import('@tabler/icons/flag-cancel.svg?react');
  }),
  'flag-check': lazy(() => {
    return import('@tabler/icons/flag-check.svg?react');
  }),
  'flag-code': lazy(() => {
    return import('@tabler/icons/flag-code.svg?react');
  }),
  'flag-cog': lazy(() => {
    return import('@tabler/icons/flag-cog.svg?react');
  }),
  'flag-discount': lazy(() => {
    return import('@tabler/icons/flag-discount.svg?react');
  }),
  'flag-dollar': lazy(() => {
    return import('@tabler/icons/flag-dollar.svg?react');
  }),
  'flag-down': lazy(() => {
    return import('@tabler/icons/flag-down.svg?react');
  }),
  'flag-exclamation': lazy(() => {
    return import('@tabler/icons/flag-exclamation.svg?react');
  }),
  'flag-filled': lazy(() => {
    return import('@tabler/icons/flag-filled.svg?react');
  }),
  'flag-heart': lazy(() => {
    return import('@tabler/icons/flag-heart.svg?react');
  }),
  'flag-minus': lazy(() => {
    return import('@tabler/icons/flag-minus.svg?react');
  }),
  'flag-off': lazy(() => {
    return import('@tabler/icons/flag-off.svg?react');
  }),
  'flag-pause': lazy(() => {
    return import('@tabler/icons/flag-pause.svg?react');
  }),
  'flag-pin': lazy(() => {
    return import('@tabler/icons/flag-pin.svg?react');
  }),
  'flag-plus': lazy(() => {
    return import('@tabler/icons/flag-plus.svg?react');
  }),
  'flag-question': lazy(() => {
    return import('@tabler/icons/flag-question.svg?react');
  }),
  'flag-search': lazy(() => {
    return import('@tabler/icons/flag-search.svg?react');
  }),
  'flag-share': lazy(() => {
    return import('@tabler/icons/flag-share.svg?react');
  }),
  'flag-star': lazy(() => {
    return import('@tabler/icons/flag-star.svg?react');
  }),
  'flag-up': lazy(() => {
    return import('@tabler/icons/flag-up.svg?react');
  }),
  'flag-x': lazy(() => {
    return import('@tabler/icons/flag-x.svg?react');
  }),
  flag: lazy(() => {
    return import('@tabler/icons/flag.svg?react');
  }),
  'flame-off': lazy(() => {
    return import('@tabler/icons/flame-off.svg?react');
  }),
  flame: lazy(() => {
    return import('@tabler/icons/flame.svg?react');
  }),
  flare: lazy(() => {
    return import('@tabler/icons/flare.svg?react');
  }),
  'flask-2-off': lazy(() => {
    return import('@tabler/icons/flask-2-off.svg?react');
  }),
  'flask-2': lazy(() => {
    return import('@tabler/icons/flask-2.svg?react');
  }),
  'flask-off': lazy(() => {
    return import('@tabler/icons/flask-off.svg?react');
  }),
  flask: lazy(() => {
    return import('@tabler/icons/flask.svg?react');
  }),
  'flip-flops': lazy(() => {
    return import('@tabler/icons/flip-flops.svg?react');
  }),
  'flip-horizontal': lazy(() => {
    return import('@tabler/icons/flip-horizontal.svg?react');
  }),
  'flip-vertical': lazy(() => {
    return import('@tabler/icons/flip-vertical.svg?react');
  }),
  'float-center': lazy(() => {
    return import('@tabler/icons/float-center.svg?react');
  }),
  'float-left': lazy(() => {
    return import('@tabler/icons/float-left.svg?react');
  }),
  'float-none': lazy(() => {
    return import('@tabler/icons/float-none.svg?react');
  }),
  'float-right': lazy(() => {
    return import('@tabler/icons/float-right.svg?react');
  }),
  'flower-off': lazy(() => {
    return import('@tabler/icons/flower-off.svg?react');
  }),
  flower: lazy(() => {
    return import('@tabler/icons/flower.svg?react');
  }),
  'focus-2': lazy(() => {
    return import('@tabler/icons/focus-2.svg?react');
  }),
  'focus-auto': lazy(() => {
    return import('@tabler/icons/focus-auto.svg?react');
  }),
  'focus-centered': lazy(() => {
    return import('@tabler/icons/focus-centered.svg?react');
  }),
  focus: lazy(() => {
    return import('@tabler/icons/focus.svg?react');
  }),
  'fold-down': lazy(() => {
    return import('@tabler/icons/fold-down.svg?react');
  }),
  'fold-up': lazy(() => {
    return import('@tabler/icons/fold-up.svg?react');
  }),
  fold: lazy(() => {
    return import('@tabler/icons/fold.svg?react');
  }),
  'folder-bolt': lazy(() => {
    return import('@tabler/icons/folder-bolt.svg?react');
  }),
  'folder-cancel': lazy(() => {
    return import('@tabler/icons/folder-cancel.svg?react');
  }),
  'folder-check': lazy(() => {
    return import('@tabler/icons/folder-check.svg?react');
  }),
  'folder-code': lazy(() => {
    return import('@tabler/icons/folder-code.svg?react');
  }),
  'folder-cog': lazy(() => {
    return import('@tabler/icons/folder-cog.svg?react');
  }),
  'folder-dollar': lazy(() => {
    return import('@tabler/icons/folder-dollar.svg?react');
  }),
  'folder-down': lazy(() => {
    return import('@tabler/icons/folder-down.svg?react');
  }),
  'folder-exclamation': lazy(() => {
    return import('@tabler/icons/folder-exclamation.svg?react');
  }),
  'folder-filled': lazy(() => {
    return import('@tabler/icons/folder-filled.svg?react');
  }),
  'folder-heart': lazy(() => {
    return import('@tabler/icons/folder-heart.svg?react');
  }),
  'folder-minus': lazy(() => {
    return import('@tabler/icons/folder-minus.svg?react');
  }),
  'folder-off': lazy(() => {
    return import('@tabler/icons/folder-off.svg?react');
  }),
  'folder-open': lazy(() => {
    return import('@tabler/icons/folder-open.svg?react');
  }),
  'folder-pause': lazy(() => {
    return import('@tabler/icons/folder-pause.svg?react');
  }),
  'folder-pin': lazy(() => {
    return import('@tabler/icons/folder-pin.svg?react');
  }),
  'folder-plus': lazy(() => {
    return import('@tabler/icons/folder-plus.svg?react');
  }),
  'folder-question': lazy(() => {
    return import('@tabler/icons/folder-question.svg?react');
  }),
  'folder-search': lazy(() => {
    return import('@tabler/icons/folder-search.svg?react');
  }),
  'folder-share': lazy(() => {
    return import('@tabler/icons/folder-share.svg?react');
  }),
  'folder-star': lazy(() => {
    return import('@tabler/icons/folder-star.svg?react');
  }),
  'folder-symlink': lazy(() => {
    return import('@tabler/icons/folder-symlink.svg?react');
  }),
  'folder-up': lazy(() => {
    return import('@tabler/icons/folder-up.svg?react');
  }),
  'folder-x': lazy(() => {
    return import('@tabler/icons/folder-x.svg?react');
  }),
  folder: lazy(() => {
    return import('@tabler/icons/folder.svg?react');
  }),
  'folders-off': lazy(() => {
    return import('@tabler/icons/folders-off.svg?react');
  }),
  folders: lazy(() => {
    return import('@tabler/icons/folders.svg?react');
  }),
  'forbid-2-filled': lazy(() => {
    return import('@tabler/icons/forbid-2-filled.svg?react');
  }),
  'forbid-2': lazy(() => {
    return import('@tabler/icons/forbid-2.svg?react');
  }),
  'forbid-filled': lazy(() => {
    return import('@tabler/icons/forbid-filled.svg?react');
  }),
  forbid: lazy(() => {
    return import('@tabler/icons/forbid.svg?react');
  }),
  forklift: lazy(() => {
    return import('@tabler/icons/forklift.svg?react');
  }),
  forms: lazy(() => {
    return import('@tabler/icons/forms.svg?react');
  }),
  'fountain-filled': lazy(() => {
    return import('@tabler/icons/fountain-filled.svg?react');
  }),
  'fountain-off': lazy(() => {
    return import('@tabler/icons/fountain-off.svg?react');
  }),
  fountain: lazy(() => {
    return import('@tabler/icons/fountain.svg?react');
  }),
  'frame-off': lazy(() => {
    return import('@tabler/icons/frame-off.svg?react');
  }),
  frame: lazy(() => {
    return import('@tabler/icons/frame.svg?react');
  }),
  'free-rights': lazy(() => {
    return import('@tabler/icons/free-rights.svg?react');
  }),
  'freeze-column': lazy(() => {
    return import('@tabler/icons/freeze-column.svg?react');
  }),
  'freeze-row-column': lazy(() => {
    return import('@tabler/icons/freeze-row-column.svg?react');
  }),
  'freeze-row': lazy(() => {
    return import('@tabler/icons/freeze-row.svg?react');
  }),
  'fridge-off': lazy(() => {
    return import('@tabler/icons/fridge-off.svg?react');
  }),
  fridge: lazy(() => {
    return import('@tabler/icons/fridge.svg?react');
  }),
  'friends-off': lazy(() => {
    return import('@tabler/icons/friends-off.svg?react');
  }),
  friends: lazy(() => {
    return import('@tabler/icons/friends.svg?react');
  }),
  'frustum-off': lazy(() => {
    return import('@tabler/icons/frustum-off.svg?react');
  }),
  'frustum-plus': lazy(() => {
    return import('@tabler/icons/frustum-plus.svg?react');
  }),
  frustum: lazy(() => {
    return import('@tabler/icons/frustum.svg?react');
  }),
  'function-filled': lazy(() => {
    return import('@tabler/icons/function-filled.svg?react');
  }),
  'function-off': lazy(() => {
    return import('@tabler/icons/function-off.svg?react');
  }),
  function: lazy(() => {
    return import('@tabler/icons/function.svg?react');
  }),
  galaxy: lazy(() => {
    return import('@tabler/icons/galaxy.svg?react');
  }),
  'garden-cart-off': lazy(() => {
    return import('@tabler/icons/garden-cart-off.svg?react');
  }),
  'garden-cart': lazy(() => {
    return import('@tabler/icons/garden-cart.svg?react');
  }),
  'gas-station-off': lazy(() => {
    return import('@tabler/icons/gas-station-off.svg?react');
  }),
  'gas-station': lazy(() => {
    return import('@tabler/icons/gas-station.svg?react');
  }),
  'gauge-filled': lazy(() => {
    return import('@tabler/icons/gauge-filled.svg?react');
  }),
  'gauge-off': lazy(() => {
    return import('@tabler/icons/gauge-off.svg?react');
  }),
  gauge: lazy(() => {
    return import('@tabler/icons/gauge.svg?react');
  }),
  gavel: lazy(() => {
    return import('@tabler/icons/gavel.svg?react');
  }),
  'gender-agender': lazy(() => {
    return import('@tabler/icons/gender-agender.svg?react');
  }),
  'gender-androgyne': lazy(() => {
    return import('@tabler/icons/gender-androgyne.svg?react');
  }),
  'gender-bigender': lazy(() => {
    return import('@tabler/icons/gender-bigender.svg?react');
  }),
  'gender-demiboy': lazy(() => {
    return import('@tabler/icons/gender-demiboy.svg?react');
  }),
  'gender-demigirl': lazy(() => {
    return import('@tabler/icons/gender-demigirl.svg?react');
  }),
  'gender-epicene': lazy(() => {
    return import('@tabler/icons/gender-epicene.svg?react');
  }),
  'gender-female': lazy(() => {
    return import('@tabler/icons/gender-female.svg?react');
  }),
  'gender-femme': lazy(() => {
    return import('@tabler/icons/gender-femme.svg?react');
  }),
  'gender-genderfluid': lazy(() => {
    return import('@tabler/icons/gender-genderfluid.svg?react');
  }),
  'gender-genderless': lazy(() => {
    return import('@tabler/icons/gender-genderless.svg?react');
  }),
  'gender-genderqueer': lazy(() => {
    return import('@tabler/icons/gender-genderqueer.svg?react');
  }),
  'gender-hermaphrodite': lazy(() => {
    return import('@tabler/icons/gender-hermaphrodite.svg?react');
  }),
  'gender-intergender': lazy(() => {
    return import('@tabler/icons/gender-intergender.svg?react');
  }),
  'gender-male': lazy(() => {
    return import('@tabler/icons/gender-male.svg?react');
  }),
  'gender-neutrois': lazy(() => {
    return import('@tabler/icons/gender-neutrois.svg?react');
  }),
  'gender-third': lazy(() => {
    return import('@tabler/icons/gender-third.svg?react');
  }),
  'gender-transgender': lazy(() => {
    return import('@tabler/icons/gender-transgender.svg?react');
  }),
  'gender-trasvesti': lazy(() => {
    return import('@tabler/icons/gender-trasvesti.svg?react');
  }),
  geometry: lazy(() => {
    return import('@tabler/icons/geometry.svg?react');
  }),
  'ghost-2-filled': lazy(() => {
    return import('@tabler/icons/ghost-2-filled.svg?react');
  }),
  'ghost-2': lazy(() => {
    return import('@tabler/icons/ghost-2.svg?react');
  }),
  'ghost-3': lazy(() => {
    return import('@tabler/icons/ghost-3.svg?react');
  }),
  'ghost-filled': lazy(() => {
    return import('@tabler/icons/ghost-filled.svg?react');
  }),
  'ghost-off': lazy(() => {
    return import('@tabler/icons/ghost-off.svg?react');
  }),
  ghost: lazy(() => {
    return import('@tabler/icons/ghost.svg?react');
  }),
  gif: lazy(() => {
    return import('@tabler/icons/gif.svg?react');
  }),
  'gift-card-filled': lazy(() => {
    return import('@tabler/icons/gift-card-filled.svg?react');
  }),
  'gift-card': lazy(() => {
    return import('@tabler/icons/gift-card.svg?react');
  }),
  'gift-off': lazy(() => {
    return import('@tabler/icons/gift-off.svg?react');
  }),
  gift: lazy(() => {
    return import('@tabler/icons/gift.svg?react');
  }),
  'git-branch-deleted': lazy(() => {
    return import('@tabler/icons/git-branch-deleted.svg?react');
  }),
  'git-branch': lazy(() => {
    return import('@tabler/icons/git-branch.svg?react');
  }),
  'git-cherry-pick': lazy(() => {
    return import('@tabler/icons/git-cherry-pick.svg?react');
  }),
  'git-commit': lazy(() => {
    return import('@tabler/icons/git-commit.svg?react');
  }),
  'git-compare': lazy(() => {
    return import('@tabler/icons/git-compare.svg?react');
  }),
  'git-fork': lazy(() => {
    return import('@tabler/icons/git-fork.svg?react');
  }),
  'git-merge': lazy(() => {
    return import('@tabler/icons/git-merge.svg?react');
  }),
  'git-pull-request-closed': lazy(() => {
    return import('@tabler/icons/git-pull-request-closed.svg?react');
  }),
  'git-pull-request-draft': lazy(() => {
    return import('@tabler/icons/git-pull-request-draft.svg?react');
  }),
  'git-pull-request': lazy(() => {
    return import('@tabler/icons/git-pull-request.svg?react');
  }),
  gizmo: lazy(() => {
    return import('@tabler/icons/gizmo.svg?react');
  }),
  'glass-full-filled': lazy(() => {
    return import('@tabler/icons/glass-full-filled.svg?react');
  }),
  'glass-full': lazy(() => {
    return import('@tabler/icons/glass-full.svg?react');
  }),
  'glass-off': lazy(() => {
    return import('@tabler/icons/glass-off.svg?react');
  }),
  glass: lazy(() => {
    return import('@tabler/icons/glass.svg?react');
  }),
  'globe-filled': lazy(() => {
    return import('@tabler/icons/globe-filled.svg?react');
  }),
  'globe-off': lazy(() => {
    return import('@tabler/icons/globe-off.svg?react');
  }),
  globe: lazy(() => {
    return import('@tabler/icons/globe.svg?react');
  }),
  'go-game': lazy(() => {
    return import('@tabler/icons/go-game.svg?react');
  }),
  'golf-off': lazy(() => {
    return import('@tabler/icons/golf-off.svg?react');
  }),
  golf: lazy(() => {
    return import('@tabler/icons/golf.svg?react');
  }),
  gps: lazy(() => {
    return import('@tabler/icons/gps.svg?react');
  }),
  gradienter: lazy(() => {
    return import('@tabler/icons/gradienter.svg?react');
  }),
  grain: lazy(() => {
    return import('@tabler/icons/grain.svg?react');
  }),
  'graph-off': lazy(() => {
    return import('@tabler/icons/graph-off.svg?react');
  }),
  graph: lazy(() => {
    return import('@tabler/icons/graph.svg?react');
  }),
  'grave-2': lazy(() => {
    return import('@tabler/icons/grave-2.svg?react');
  }),
  grave: lazy(() => {
    return import('@tabler/icons/grave.svg?react');
  }),
  'grid-3x3': lazy(() => {
    return import('@tabler/icons/grid-3x3.svg?react');
  }),
  'grid-4x4': lazy(() => {
    return import('@tabler/icons/grid-4x4.svg?react');
  }),
  'grid-dots': lazy(() => {
    return import('@tabler/icons/grid-dots.svg?react');
  }),
  'grid-goldenratio': lazy(() => {
    return import('@tabler/icons/grid-goldenratio.svg?react');
  }),
  'grid-pattern': lazy(() => {
    return import('@tabler/icons/grid-pattern.svg?react');
  }),
  'grid-scan': lazy(() => {
    return import('@tabler/icons/grid-scan.svg?react');
  }),
  'grill-fork': lazy(() => {
    return import('@tabler/icons/grill-fork.svg?react');
  }),
  'grill-off': lazy(() => {
    return import('@tabler/icons/grill-off.svg?react');
  }),
  'grill-spatula': lazy(() => {
    return import('@tabler/icons/grill-spatula.svg?react');
  }),
  grill: lazy(() => {
    return import('@tabler/icons/grill.svg?react');
  }),
  'grip-horizontal': lazy(() => {
    return import('@tabler/icons/grip-horizontal.svg?react');
  }),
  'grip-vertical': lazy(() => {
    return import('@tabler/icons/grip-vertical.svg?react');
  }),
  growth: lazy(() => {
    return import('@tabler/icons/growth.svg?react');
  }),
  'guitar-pick-filled': lazy(() => {
    return import('@tabler/icons/guitar-pick-filled.svg?react');
  }),
  'guitar-pick': lazy(() => {
    return import('@tabler/icons/guitar-pick.svg?react');
  }),
  'h-1': lazy(() => {
    return import('@tabler/icons/h-1.svg?react');
  }),
  'h-2': lazy(() => {
    return import('@tabler/icons/h-2.svg?react');
  }),
  'h-3': lazy(() => {
    return import('@tabler/icons/h-3.svg?react');
  }),
  'h-4': lazy(() => {
    return import('@tabler/icons/h-4.svg?react');
  }),
  'h-5': lazy(() => {
    return import('@tabler/icons/h-5.svg?react');
  }),
  'h-6': lazy(() => {
    return import('@tabler/icons/h-6.svg?react');
  }),
  'hammer-off': lazy(() => {
    return import('@tabler/icons/hammer-off.svg?react');
  }),
  hammer: lazy(() => {
    return import('@tabler/icons/hammer.svg?react');
  }),
  'hand-click': lazy(() => {
    return import('@tabler/icons/hand-click.svg?react');
  }),
  'hand-finger-off': lazy(() => {
    return import('@tabler/icons/hand-finger-off.svg?react');
  }),
  'hand-finger': lazy(() => {
    return import('@tabler/icons/hand-finger.svg?react');
  }),
  'hand-grab': lazy(() => {
    return import('@tabler/icons/hand-grab.svg?react');
  }),
  'hand-little-finger': lazy(() => {
    return import('@tabler/icons/hand-little-finger.svg?react');
  }),
  'hand-middle-finger': lazy(() => {
    return import('@tabler/icons/hand-middle-finger.svg?react');
  }),
  'hand-move': lazy(() => {
    return import('@tabler/icons/hand-move.svg?react');
  }),
  'hand-off': lazy(() => {
    return import('@tabler/icons/hand-off.svg?react');
  }),
  'hand-ring-finger': lazy(() => {
    return import('@tabler/icons/hand-ring-finger.svg?react');
  }),
  'hand-rock': lazy(() => {
    return import('@tabler/icons/hand-rock.svg?react');
  }),
  'hand-sanitizer': lazy(() => {
    return import('@tabler/icons/hand-sanitizer.svg?react');
  }),
  'hand-stop': lazy(() => {
    return import('@tabler/icons/hand-stop.svg?react');
  }),
  'hand-three-fingers': lazy(() => {
    return import('@tabler/icons/hand-three-fingers.svg?react');
  }),
  'hand-two-fingers': lazy(() => {
    return import('@tabler/icons/hand-two-fingers.svg?react');
  }),
  'hanger-2': lazy(() => {
    return import('@tabler/icons/hanger-2.svg?react');
  }),
  'hanger-off': lazy(() => {
    return import('@tabler/icons/hanger-off.svg?react');
  }),
  hanger: lazy(() => {
    return import('@tabler/icons/hanger.svg?react');
  }),
  hash: lazy(() => {
    return import('@tabler/icons/hash.svg?react');
  }),
  'haze-moon': lazy(() => {
    return import('@tabler/icons/haze-moon.svg?react');
  }),
  haze: lazy(() => {
    return import('@tabler/icons/haze.svg?react');
  }),
  hdr: lazy(() => {
    return import('@tabler/icons/hdr.svg?react');
  }),
  'heading-off': lazy(() => {
    return import('@tabler/icons/heading-off.svg?react');
  }),
  heading: lazy(() => {
    return import('@tabler/icons/heading.svg?react');
  }),
  'headphones-filled': lazy(() => {
    return import('@tabler/icons/headphones-filled.svg?react');
  }),
  'headphones-off': lazy(() => {
    return import('@tabler/icons/headphones-off.svg?react');
  }),
  headphones: lazy(() => {
    return import('@tabler/icons/headphones.svg?react');
  }),
  'headset-off': lazy(() => {
    return import('@tabler/icons/headset-off.svg?react');
  }),
  headset: lazy(() => {
    return import('@tabler/icons/headset.svg?react');
  }),
  'health-recognition': lazy(() => {
    return import('@tabler/icons/health-recognition.svg?react');
  }),
  'heart-bolt': lazy(() => {
    return import('@tabler/icons/heart-bolt.svg?react');
  }),
  'heart-broken': lazy(() => {
    return import('@tabler/icons/heart-broken.svg?react');
  }),
  'heart-cancel': lazy(() => {
    return import('@tabler/icons/heart-cancel.svg?react');
  }),
  'heart-check': lazy(() => {
    return import('@tabler/icons/heart-check.svg?react');
  }),
  'heart-code': lazy(() => {
    return import('@tabler/icons/heart-code.svg?react');
  }),
  'heart-cog': lazy(() => {
    return import('@tabler/icons/heart-cog.svg?react');
  }),
  'heart-discount': lazy(() => {
    return import('@tabler/icons/heart-discount.svg?react');
  }),
  'heart-dollar': lazy(() => {
    return import('@tabler/icons/heart-dollar.svg?react');
  }),
  'heart-down': lazy(() => {
    return import('@tabler/icons/heart-down.svg?react');
  }),
  'heart-exclamation': lazy(() => {
    return import('@tabler/icons/heart-exclamation.svg?react');
  }),
  'heart-filled': lazy(() => {
    return import('@tabler/icons/heart-filled.svg?react');
  }),
  'heart-handshake': lazy(() => {
    return import('@tabler/icons/heart-handshake.svg?react');
  }),
  'heart-minus': lazy(() => {
    return import('@tabler/icons/heart-minus.svg?react');
  }),
  'heart-off': lazy(() => {
    return import('@tabler/icons/heart-off.svg?react');
  }),
  'heart-pause': lazy(() => {
    return import('@tabler/icons/heart-pause.svg?react');
  }),
  'heart-pin': lazy(() => {
    return import('@tabler/icons/heart-pin.svg?react');
  }),
  'heart-plus': lazy(() => {
    return import('@tabler/icons/heart-plus.svg?react');
  }),
  'heart-question': lazy(() => {
    return import('@tabler/icons/heart-question.svg?react');
  }),
  'heart-rate-monitor': lazy(() => {
    return import('@tabler/icons/heart-rate-monitor.svg?react');
  }),
  'heart-search': lazy(() => {
    return import('@tabler/icons/heart-search.svg?react');
  }),
  'heart-share': lazy(() => {
    return import('@tabler/icons/heart-share.svg?react');
  }),
  'heart-star': lazy(() => {
    return import('@tabler/icons/heart-star.svg?react');
  }),
  'heart-up': lazy(() => {
    return import('@tabler/icons/heart-up.svg?react');
  }),
  'heart-x': lazy(() => {
    return import('@tabler/icons/heart-x.svg?react');
  }),
  heart: lazy(() => {
    return import('@tabler/icons/heart.svg?react');
  }),
  heartbeat: lazy(() => {
    return import('@tabler/icons/heartbeat.svg?react');
  }),
  'hearts-off': lazy(() => {
    return import('@tabler/icons/hearts-off.svg?react');
  }),
  hearts: lazy(() => {
    return import('@tabler/icons/hearts.svg?react');
  }),
  'helicopter-landing': lazy(() => {
    return import('@tabler/icons/helicopter-landing.svg?react');
  }),
  helicopter: lazy(() => {
    return import('@tabler/icons/helicopter.svg?react');
  }),
  'helmet-off': lazy(() => {
    return import('@tabler/icons/helmet-off.svg?react');
  }),
  helmet: lazy(() => {
    return import('@tabler/icons/helmet.svg?react');
  }),
  'help-circle-filled': lazy(() => {
    return import('@tabler/icons/help-circle-filled.svg?react');
  }),
  'help-circle': lazy(() => {
    return import('@tabler/icons/help-circle.svg?react');
  }),
  'help-hexagon-filled': lazy(() => {
    return import('@tabler/icons/help-hexagon-filled.svg?react');
  }),
  'help-hexagon': lazy(() => {
    return import('@tabler/icons/help-hexagon.svg?react');
  }),
  'help-octagon-filled': lazy(() => {
    return import('@tabler/icons/help-octagon-filled.svg?react');
  }),
  'help-octagon': lazy(() => {
    return import('@tabler/icons/help-octagon.svg?react');
  }),
  'help-off': lazy(() => {
    return import('@tabler/icons/help-off.svg?react');
  }),
  'help-small': lazy(() => {
    return import('@tabler/icons/help-small.svg?react');
  }),
  'help-square-filled': lazy(() => {
    return import('@tabler/icons/help-square-filled.svg?react');
  }),
  'help-square-rounded-filled': lazy(() => {
    return import('@tabler/icons/help-square-rounded-filled.svg?react');
  }),
  'help-square-rounded': lazy(() => {
    return import('@tabler/icons/help-square-rounded.svg?react');
  }),
  'help-square': lazy(() => {
    return import('@tabler/icons/help-square.svg?react');
  }),
  'help-triangle-filled': lazy(() => {
    return import('@tabler/icons/help-triangle-filled.svg?react');
  }),
  'help-triangle': lazy(() => {
    return import('@tabler/icons/help-triangle.svg?react');
  }),
  help: lazy(() => {
    return import('@tabler/icons/help.svg?react');
  }),
  'hemisphere-off': lazy(() => {
    return import('@tabler/icons/hemisphere-off.svg?react');
  }),
  'hemisphere-plus': lazy(() => {
    return import('@tabler/icons/hemisphere-plus.svg?react');
  }),
  hemisphere: lazy(() => {
    return import('@tabler/icons/hemisphere.svg?react');
  }),
  'hexagon-0-filled': lazy(() => {
    return import('@tabler/icons/hexagon-0-filled.svg?react');
  }),
  'hexagon-1-filled': lazy(() => {
    return import('@tabler/icons/hexagon-1-filled.svg?react');
  }),
  'hexagon-2-filled': lazy(() => {
    return import('@tabler/icons/hexagon-2-filled.svg?react');
  }),
  'hexagon-3-filled': lazy(() => {
    return import('@tabler/icons/hexagon-3-filled.svg?react');
  }),
  'hexagon-3d': lazy(() => {
    return import('@tabler/icons/hexagon-3d.svg?react');
  }),
  'hexagon-4-filled': lazy(() => {
    return import('@tabler/icons/hexagon-4-filled.svg?react');
  }),
  'hexagon-5-filled': lazy(() => {
    return import('@tabler/icons/hexagon-5-filled.svg?react');
  }),
  'hexagon-6-filled': lazy(() => {
    return import('@tabler/icons/hexagon-6-filled.svg?react');
  }),
  'hexagon-7-filled': lazy(() => {
    return import('@tabler/icons/hexagon-7-filled.svg?react');
  }),
  'hexagon-8-filled': lazy(() => {
    return import('@tabler/icons/hexagon-8-filled.svg?react');
  }),
  'hexagon-9-filled': lazy(() => {
    return import('@tabler/icons/hexagon-9-filled.svg?react');
  }),
  'hexagon-filled': lazy(() => {
    return import('@tabler/icons/hexagon-filled.svg?react');
  }),
  'hexagon-letter-a': lazy(() => {
    return import('@tabler/icons/hexagon-letter-a.svg?react');
  }),
  'hexagon-letter-b': lazy(() => {
    return import('@tabler/icons/hexagon-letter-b.svg?react');
  }),
  'hexagon-letter-c': lazy(() => {
    return import('@tabler/icons/hexagon-letter-c.svg?react');
  }),
  'hexagon-letter-d': lazy(() => {
    return import('@tabler/icons/hexagon-letter-d.svg?react');
  }),
  'hexagon-letter-e': lazy(() => {
    return import('@tabler/icons/hexagon-letter-e.svg?react');
  }),
  'hexagon-letter-f': lazy(() => {
    return import('@tabler/icons/hexagon-letter-f.svg?react');
  }),
  'hexagon-letter-g': lazy(() => {
    return import('@tabler/icons/hexagon-letter-g.svg?react');
  }),
  'hexagon-letter-h': lazy(() => {
    return import('@tabler/icons/hexagon-letter-h.svg?react');
  }),
  'hexagon-letter-i': lazy(() => {
    return import('@tabler/icons/hexagon-letter-i.svg?react');
  }),
  'hexagon-letter-j': lazy(() => {
    return import('@tabler/icons/hexagon-letter-j.svg?react');
  }),
  'hexagon-letter-k': lazy(() => {
    return import('@tabler/icons/hexagon-letter-k.svg?react');
  }),
  'hexagon-letter-l': lazy(() => {
    return import('@tabler/icons/hexagon-letter-l.svg?react');
  }),
  'hexagon-letter-m': lazy(() => {
    return import('@tabler/icons/hexagon-letter-m.svg?react');
  }),
  'hexagon-letter-n': lazy(() => {
    return import('@tabler/icons/hexagon-letter-n.svg?react');
  }),
  'hexagon-letter-o': lazy(() => {
    return import('@tabler/icons/hexagon-letter-o.svg?react');
  }),
  'hexagon-letter-p': lazy(() => {
    return import('@tabler/icons/hexagon-letter-p.svg?react');
  }),
  'hexagon-letter-q': lazy(() => {
    return import('@tabler/icons/hexagon-letter-q.svg?react');
  }),
  'hexagon-letter-r': lazy(() => {
    return import('@tabler/icons/hexagon-letter-r.svg?react');
  }),
  'hexagon-letter-s': lazy(() => {
    return import('@tabler/icons/hexagon-letter-s.svg?react');
  }),
  'hexagon-letter-t': lazy(() => {
    return import('@tabler/icons/hexagon-letter-t.svg?react');
  }),
  'hexagon-letter-u': lazy(() => {
    return import('@tabler/icons/hexagon-letter-u.svg?react');
  }),
  'hexagon-letter-v': lazy(() => {
    return import('@tabler/icons/hexagon-letter-v.svg?react');
  }),
  'hexagon-letter-w': lazy(() => {
    return import('@tabler/icons/hexagon-letter-w.svg?react');
  }),
  'hexagon-letter-x': lazy(() => {
    return import('@tabler/icons/hexagon-letter-x.svg?react');
  }),
  'hexagon-letter-y': lazy(() => {
    return import('@tabler/icons/hexagon-letter-y.svg?react');
  }),
  'hexagon-letter-z': lazy(() => {
    return import('@tabler/icons/hexagon-letter-z.svg?react');
  }),
  'hexagon-minus-2': lazy(() => {
    return import('@tabler/icons/hexagon-minus-2.svg?react');
  }),
  'hexagon-minus': lazy(() => {
    return import('@tabler/icons/hexagon-minus.svg?react');
  }),
  'hexagon-number-0': lazy(() => {
    return import('@tabler/icons/hexagon-number-0.svg?react');
  }),
  'hexagon-number-1': lazy(() => {
    return import('@tabler/icons/hexagon-number-1.svg?react');
  }),
  'hexagon-number-2': lazy(() => {
    return import('@tabler/icons/hexagon-number-2.svg?react');
  }),
  'hexagon-number-3': lazy(() => {
    return import('@tabler/icons/hexagon-number-3.svg?react');
  }),
  'hexagon-number-4': lazy(() => {
    return import('@tabler/icons/hexagon-number-4.svg?react');
  }),
  'hexagon-number-5': lazy(() => {
    return import('@tabler/icons/hexagon-number-5.svg?react');
  }),
  'hexagon-number-6': lazy(() => {
    return import('@tabler/icons/hexagon-number-6.svg?react');
  }),
  'hexagon-number-7': lazy(() => {
    return import('@tabler/icons/hexagon-number-7.svg?react');
  }),
  'hexagon-number-8': lazy(() => {
    return import('@tabler/icons/hexagon-number-8.svg?react');
  }),
  'hexagon-number-9': lazy(() => {
    return import('@tabler/icons/hexagon-number-9.svg?react');
  }),
  'hexagon-off': lazy(() => {
    return import('@tabler/icons/hexagon-off.svg?react');
  }),
  'hexagon-plus-2': lazy(() => {
    return import('@tabler/icons/hexagon-plus-2.svg?react');
  }),
  'hexagon-plus': lazy(() => {
    return import('@tabler/icons/hexagon-plus.svg?react');
  }),
  hexagon: lazy(() => {
    return import('@tabler/icons/hexagon.svg?react');
  }),
  'hexagonal-prism-off': lazy(() => {
    return import('@tabler/icons/hexagonal-prism-off.svg?react');
  }),
  'hexagonal-prism-plus': lazy(() => {
    return import('@tabler/icons/hexagonal-prism-plus.svg?react');
  }),
  'hexagonal-prism': lazy(() => {
    return import('@tabler/icons/hexagonal-prism.svg?react');
  }),
  'hexagonal-pyramid-off': lazy(() => {
    return import('@tabler/icons/hexagonal-pyramid-off.svg?react');
  }),
  'hexagonal-pyramid-plus': lazy(() => {
    return import('@tabler/icons/hexagonal-pyramid-plus.svg?react');
  }),
  'hexagonal-pyramid': lazy(() => {
    return import('@tabler/icons/hexagonal-pyramid.svg?react');
  }),
  'hexagons-off': lazy(() => {
    return import('@tabler/icons/hexagons-off.svg?react');
  }),
  hexagons: lazy(() => {
    return import('@tabler/icons/hexagons.svg?react');
  }),
  'hierarchy-2': lazy(() => {
    return import('@tabler/icons/hierarchy-2.svg?react');
  }),
  'hierarchy-3': lazy(() => {
    return import('@tabler/icons/hierarchy-3.svg?react');
  }),
  'hierarchy-off': lazy(() => {
    return import('@tabler/icons/hierarchy-off.svg?react');
  }),
  hierarchy: lazy(() => {
    return import('@tabler/icons/hierarchy.svg?react');
  }),
  'highlight-off': lazy(() => {
    return import('@tabler/icons/highlight-off.svg?react');
  }),
  highlight: lazy(() => {
    return import('@tabler/icons/highlight.svg?react');
  }),
  'history-off': lazy(() => {
    return import('@tabler/icons/history-off.svg?react');
  }),
  'history-toggle': lazy(() => {
    return import('@tabler/icons/history-toggle.svg?react');
  }),
  history: lazy(() => {
    return import('@tabler/icons/history.svg?react');
  }),
  'home-2': lazy(() => {
    return import('@tabler/icons/home-2.svg?react');
  }),
  'home-bolt': lazy(() => {
    return import('@tabler/icons/home-bolt.svg?react');
  }),
  'home-cancel': lazy(() => {
    return import('@tabler/icons/home-cancel.svg?react');
  }),
  'home-check': lazy(() => {
    return import('@tabler/icons/home-check.svg?react');
  }),
  'home-cog': lazy(() => {
    return import('@tabler/icons/home-cog.svg?react');
  }),
  'home-dollar': lazy(() => {
    return import('@tabler/icons/home-dollar.svg?react');
  }),
  'home-dot': lazy(() => {
    return import('@tabler/icons/home-dot.svg?react');
  }),
  'home-down': lazy(() => {
    return import('@tabler/icons/home-down.svg?react');
  }),
  'home-eco': lazy(() => {
    return import('@tabler/icons/home-eco.svg?react');
  }),
  'home-edit': lazy(() => {
    return import('@tabler/icons/home-edit.svg?react');
  }),
  'home-exclamation': lazy(() => {
    return import('@tabler/icons/home-exclamation.svg?react');
  }),
  'home-hand': lazy(() => {
    return import('@tabler/icons/home-hand.svg?react');
  }),
  'home-heart': lazy(() => {
    return import('@tabler/icons/home-heart.svg?react');
  }),
  'home-infinity': lazy(() => {
    return import('@tabler/icons/home-infinity.svg?react');
  }),
  'home-link': lazy(() => {
    return import('@tabler/icons/home-link.svg?react');
  }),
  'home-minus': lazy(() => {
    return import('@tabler/icons/home-minus.svg?react');
  }),
  'home-move': lazy(() => {
    return import('@tabler/icons/home-move.svg?react');
  }),
  'home-off': lazy(() => {
    return import('@tabler/icons/home-off.svg?react');
  }),
  'home-plus': lazy(() => {
    return import('@tabler/icons/home-plus.svg?react');
  }),
  'home-question': lazy(() => {
    return import('@tabler/icons/home-question.svg?react');
  }),
  'home-ribbon': lazy(() => {
    return import('@tabler/icons/home-ribbon.svg?react');
  }),
  'home-search': lazy(() => {
    return import('@tabler/icons/home-search.svg?react');
  }),
  'home-share': lazy(() => {
    return import('@tabler/icons/home-share.svg?react');
  }),
  'home-shield': lazy(() => {
    return import('@tabler/icons/home-shield.svg?react');
  }),
  'home-signal': lazy(() => {
    return import('@tabler/icons/home-signal.svg?react');
  }),
  'home-star': lazy(() => {
    return import('@tabler/icons/home-star.svg?react');
  }),
  'home-stats': lazy(() => {
    return import('@tabler/icons/home-stats.svg?react');
  }),
  'home-up': lazy(() => {
    return import('@tabler/icons/home-up.svg?react');
  }),
  'home-x': lazy(() => {
    return import('@tabler/icons/home-x.svg?react');
  }),
  home: lazy(() => {
    return import('@tabler/icons/home.svg?react');
  }),
  'horse-toy': lazy(() => {
    return import('@tabler/icons/horse-toy.svg?react');
  }),
  horse: lazy(() => {
    return import('@tabler/icons/horse.svg?react');
  }),
  horseshoe: lazy(() => {
    return import('@tabler/icons/horseshoe.svg?react');
  }),
  'hotel-service': lazy(() => {
    return import('@tabler/icons/hotel-service.svg?react');
  }),
  'hourglass-empty': lazy(() => {
    return import('@tabler/icons/hourglass-empty.svg?react');
  }),
  'hourglass-filled': lazy(() => {
    return import('@tabler/icons/hourglass-filled.svg?react');
  }),
  'hourglass-high': lazy(() => {
    return import('@tabler/icons/hourglass-high.svg?react');
  }),
  'hourglass-low': lazy(() => {
    return import('@tabler/icons/hourglass-low.svg?react');
  }),
  'hourglass-off': lazy(() => {
    return import('@tabler/icons/hourglass-off.svg?react');
  }),
  hourglass: lazy(() => {
    return import('@tabler/icons/hourglass.svg?react');
  }),
  html: lazy(() => {
    return import('@tabler/icons/html.svg?react');
  }),
  'http-connect': lazy(() => {
    return import('@tabler/icons/http-connect.svg?react');
  }),
  'http-delete': lazy(() => {
    return import('@tabler/icons/http-delete.svg?react');
  }),
  'http-get': lazy(() => {
    return import('@tabler/icons/http-get.svg?react');
  }),
  'http-head': lazy(() => {
    return import('@tabler/icons/http-head.svg?react');
  }),
  'http-options': lazy(() => {
    return import('@tabler/icons/http-options.svg?react');
  }),
  'http-patch': lazy(() => {
    return import('@tabler/icons/http-patch.svg?react');
  }),
  'http-post': lazy(() => {
    return import('@tabler/icons/http-post.svg?react');
  }),
  'http-put': lazy(() => {
    return import('@tabler/icons/http-put.svg?react');
  }),
  'http-que': lazy(() => {
    return import('@tabler/icons/http-que.svg?react');
  }),
  'http-trace': lazy(() => {
    return import('@tabler/icons/http-trace.svg?react');
  }),
  'ice-cream-2': lazy(() => {
    return import('@tabler/icons/ice-cream-2.svg?react');
  }),
  'ice-cream-off': lazy(() => {
    return import('@tabler/icons/ice-cream-off.svg?react');
  }),
  'ice-cream': lazy(() => {
    return import('@tabler/icons/ice-cream.svg?react');
  }),
  'ice-skating': lazy(() => {
    return import('@tabler/icons/ice-skating.svg?react');
  }),
  'icons-off': lazy(() => {
    return import('@tabler/icons/icons-off.svg?react');
  }),
  icons: lazy(() => {
    return import('@tabler/icons/icons.svg?react');
  }),
  'id-badge-2': lazy(() => {
    return import('@tabler/icons/id-badge-2.svg?react');
  }),
  'id-badge-off': lazy(() => {
    return import('@tabler/icons/id-badge-off.svg?react');
  }),
  'id-badge': lazy(() => {
    return import('@tabler/icons/id-badge.svg?react');
  }),
  'id-off': lazy(() => {
    return import('@tabler/icons/id-off.svg?react');
  }),
  id: lazy(() => {
    return import('@tabler/icons/id.svg?react');
  }),
  'inbox-off': lazy(() => {
    return import('@tabler/icons/inbox-off.svg?react');
  }),
  inbox: lazy(() => {
    return import('@tabler/icons/inbox.svg?react');
  }),
  'indent-decrease': lazy(() => {
    return import('@tabler/icons/indent-decrease.svg?react');
  }),
  'indent-increase': lazy(() => {
    return import('@tabler/icons/indent-increase.svg?react');
  }),
  'infinity-off': lazy(() => {
    return import('@tabler/icons/infinity-off.svg?react');
  }),
  infinity: lazy(() => {
    return import('@tabler/icons/infinity.svg?react');
  }),
  'info-circle-filled': lazy(() => {
    return import('@tabler/icons/info-circle-filled.svg?react');
  }),
  'info-circle': lazy(() => {
    return import('@tabler/icons/info-circle.svg?react');
  }),
  'info-hexagon-filled': lazy(() => {
    return import('@tabler/icons/info-hexagon-filled.svg?react');
  }),
  'info-hexagon': lazy(() => {
    return import('@tabler/icons/info-hexagon.svg?react');
  }),
  'info-octagon-filled': lazy(() => {
    return import('@tabler/icons/info-octagon-filled.svg?react');
  }),
  'info-octagon': lazy(() => {
    return import('@tabler/icons/info-octagon.svg?react');
  }),
  'info-small': lazy(() => {
    return import('@tabler/icons/info-small.svg?react');
  }),
  'info-square-filled': lazy(() => {
    return import('@tabler/icons/info-square-filled.svg?react');
  }),
  'info-square-rounded-filled': lazy(() => {
    return import('@tabler/icons/info-square-rounded-filled.svg?react');
  }),
  'info-square-rounded': lazy(() => {
    return import('@tabler/icons/info-square-rounded.svg?react');
  }),
  'info-square': lazy(() => {
    return import('@tabler/icons/info-square.svg?react');
  }),
  'info-triangle-filled': lazy(() => {
    return import('@tabler/icons/info-triangle-filled.svg?react');
  }),
  'info-triangle': lazy(() => {
    return import('@tabler/icons/info-triangle.svg?react');
  }),
  'inner-shadow-bottom-filled': lazy(() => {
    return import('@tabler/icons/inner-shadow-bottom-filled.svg?react');
  }),
  'inner-shadow-bottom-left-filled': lazy(() => {
    return import('@tabler/icons/inner-shadow-bottom-left-filled.svg?react');
  }),
  'inner-shadow-bottom-left': lazy(() => {
    return import('@tabler/icons/inner-shadow-bottom-left.svg?react');
  }),
  'inner-shadow-bottom-right-filled': lazy(() => {
    return import('@tabler/icons/inner-shadow-bottom-right-filled.svg?react');
  }),
  'inner-shadow-bottom-right': lazy(() => {
    return import('@tabler/icons/inner-shadow-bottom-right.svg?react');
  }),
  'inner-shadow-bottom': lazy(() => {
    return import('@tabler/icons/inner-shadow-bottom.svg?react');
  }),
  'inner-shadow-left-filled': lazy(() => {
    return import('@tabler/icons/inner-shadow-left-filled.svg?react');
  }),
  'inner-shadow-left': lazy(() => {
    return import('@tabler/icons/inner-shadow-left.svg?react');
  }),
  'inner-shadow-right-filled': lazy(() => {
    return import('@tabler/icons/inner-shadow-right-filled.svg?react');
  }),
  'inner-shadow-right': lazy(() => {
    return import('@tabler/icons/inner-shadow-right.svg?react');
  }),
  'inner-shadow-top-filled': lazy(() => {
    return import('@tabler/icons/inner-shadow-top-filled.svg?react');
  }),
  'inner-shadow-top-left-filled': lazy(() => {
    return import('@tabler/icons/inner-shadow-top-left-filled.svg?react');
  }),
  'inner-shadow-top-left': lazy(() => {
    return import('@tabler/icons/inner-shadow-top-left.svg?react');
  }),
  'inner-shadow-top-right-filled': lazy(() => {
    return import('@tabler/icons/inner-shadow-top-right-filled.svg?react');
  }),
  'inner-shadow-top-right': lazy(() => {
    return import('@tabler/icons/inner-shadow-top-right.svg?react');
  }),
  'inner-shadow-top': lazy(() => {
    return import('@tabler/icons/inner-shadow-top.svg?react');
  }),
  'input-ai': lazy(() => {
    return import('@tabler/icons/input-ai.svg?react');
  }),
  'input-check': lazy(() => {
    return import('@tabler/icons/input-check.svg?react');
  }),
  'input-search': lazy(() => {
    return import('@tabler/icons/input-search.svg?react');
  }),
  'input-x': lazy(() => {
    return import('@tabler/icons/input-x.svg?react');
  }),
  'ironing-1': lazy(() => {
    return import('@tabler/icons/ironing-1.svg?react');
  }),
  'ironing-2': lazy(() => {
    return import('@tabler/icons/ironing-2.svg?react');
  }),
  'ironing-3': lazy(() => {
    return import('@tabler/icons/ironing-3.svg?react');
  }),
  'ironing-off': lazy(() => {
    return import('@tabler/icons/ironing-off.svg?react');
  }),
  'ironing-steam-off': lazy(() => {
    return import('@tabler/icons/ironing-steam-off.svg?react');
  }),
  'ironing-steam': lazy(() => {
    return import('@tabler/icons/ironing-steam.svg?react');
  }),
  ironing: lazy(() => {
    return import('@tabler/icons/ironing.svg?react');
  }),
  'irregular-polyhedron-off': lazy(() => {
    return import('@tabler/icons/irregular-polyhedron-off.svg?react');
  }),
  'irregular-polyhedron-plus': lazy(() => {
    return import('@tabler/icons/irregular-polyhedron-plus.svg?react');
  }),
  'irregular-polyhedron': lazy(() => {
    return import('@tabler/icons/irregular-polyhedron.svg?react');
  }),
  italic: lazy(() => {
    return import('@tabler/icons/italic.svg?react');
  }),
  jacket: lazy(() => {
    return import('@tabler/icons/jacket.svg?react');
  }),
  jetpack: lazy(() => {
    return import('@tabler/icons/jetpack.svg?react');
  }),
  'jewish-star-filled': lazy(() => {
    return import('@tabler/icons/jewish-star-filled.svg?react');
  }),
  'jewish-star': lazy(() => {
    return import('@tabler/icons/jewish-star.svg?react');
  }),
  jpg: lazy(() => {
    return import('@tabler/icons/jpg.svg?react');
  }),
  json: lazy(() => {
    return import('@tabler/icons/json.svg?react');
  }),
  'jump-rope': lazy(() => {
    return import('@tabler/icons/jump-rope.svg?react');
  }),
  karate: lazy(() => {
    return import('@tabler/icons/karate.svg?react');
  }),
  kayak: lazy(() => {
    return import('@tabler/icons/kayak.svg?react');
  }),
  kering: lazy(() => {
    return import('@tabler/icons/kering.svg?react');
  }),
  'key-off': lazy(() => {
    return import('@tabler/icons/key-off.svg?react');
  }),
  key: lazy(() => {
    return import('@tabler/icons/key.svg?react');
  }),
  'keyboard-hide': lazy(() => {
    return import('@tabler/icons/keyboard-hide.svg?react');
  }),
  'keyboard-off': lazy(() => {
    return import('@tabler/icons/keyboard-off.svg?react');
  }),
  'keyboard-show': lazy(() => {
    return import('@tabler/icons/keyboard-show.svg?react');
  }),
  keyboard: lazy(() => {
    return import('@tabler/icons/keyboard.svg?react');
  }),
  'keyframe-align-center-filled': lazy(() => {
    return import('@tabler/icons/keyframe-align-center-filled.svg?react');
  }),
  'keyframe-align-center': lazy(() => {
    return import('@tabler/icons/keyframe-align-center.svg?react');
  }),
  'keyframe-align-horizontal-filled': lazy(() => {
    return import('@tabler/icons/keyframe-align-horizontal-filled.svg?react');
  }),
  'keyframe-align-horizontal': lazy(() => {
    return import('@tabler/icons/keyframe-align-horizontal.svg?react');
  }),
  'keyframe-align-vertical-filled': lazy(() => {
    return import('@tabler/icons/keyframe-align-vertical-filled.svg?react');
  }),
  'keyframe-align-vertical': lazy(() => {
    return import('@tabler/icons/keyframe-align-vertical.svg?react');
  }),
  'keyframe-filled': lazy(() => {
    return import('@tabler/icons/keyframe-filled.svg?react');
  }),
  keyframe: lazy(() => {
    return import('@tabler/icons/keyframe.svg?react');
  }),
  'keyframes-filled': lazy(() => {
    return import('@tabler/icons/keyframes-filled.svg?react');
  }),
  keyframes: lazy(() => {
    return import('@tabler/icons/keyframes.svg?react');
  }),
  'ladder-off': lazy(() => {
    return import('@tabler/icons/ladder-off.svg?react');
  }),
  ladder: lazy(() => {
    return import('@tabler/icons/ladder.svg?react');
  }),
  ladle: lazy(() => {
    return import('@tabler/icons/ladle.svg?react');
  }),
  lambda: lazy(() => {
    return import('@tabler/icons/lambda.svg?react');
  }),
  'lamp-2': lazy(() => {
    return import('@tabler/icons/lamp-2.svg?react');
  }),
  'lamp-off': lazy(() => {
    return import('@tabler/icons/lamp-off.svg?react');
  }),
  lamp: lazy(() => {
    return import('@tabler/icons/lamp.svg?react');
  }),
  lane: lazy(() => {
    return import('@tabler/icons/lane.svg?react');
  }),
  'language-hiragana': lazy(() => {
    return import('@tabler/icons/language-hiragana.svg?react');
  }),
  'language-katakana': lazy(() => {
    return import('@tabler/icons/language-katakana.svg?react');
  }),
  'language-off': lazy(() => {
    return import('@tabler/icons/language-off.svg?react');
  }),
  language: lazy(() => {
    return import('@tabler/icons/language.svg?react');
  }),
  'lasso-off': lazy(() => {
    return import('@tabler/icons/lasso-off.svg?react');
  }),
  'lasso-polygon': lazy(() => {
    return import('@tabler/icons/lasso-polygon.svg?react');
  }),
  lasso: lazy(() => {
    return import('@tabler/icons/lasso.svg?react');
  }),
  'layers-difference': lazy(() => {
    return import('@tabler/icons/layers-difference.svg?react');
  }),
  'layers-intersect-2': lazy(() => {
    return import('@tabler/icons/layers-intersect-2.svg?react');
  }),
  'layers-intersect': lazy(() => {
    return import('@tabler/icons/layers-intersect.svg?react');
  }),
  'layers-linked': lazy(() => {
    return import('@tabler/icons/layers-linked.svg?react');
  }),
  'layers-off': lazy(() => {
    return import('@tabler/icons/layers-off.svg?react');
  }),
  'layers-subtract': lazy(() => {
    return import('@tabler/icons/layers-subtract.svg?react');
  }),
  'layers-union': lazy(() => {
    return import('@tabler/icons/layers-union.svg?react');
  }),
  'layout-2': lazy(() => {
    return import('@tabler/icons/layout-2.svg?react');
  }),
  'layout-align-bottom': lazy(() => {
    return import('@tabler/icons/layout-align-bottom.svg?react');
  }),
  'layout-align-center': lazy(() => {
    return import('@tabler/icons/layout-align-center.svg?react');
  }),
  'layout-align-left': lazy(() => {
    return import('@tabler/icons/layout-align-left.svg?react');
  }),
  'layout-align-middle': lazy(() => {
    return import('@tabler/icons/layout-align-middle.svg?react');
  }),
  'layout-align-right': lazy(() => {
    return import('@tabler/icons/layout-align-right.svg?react');
  }),
  'layout-align-top': lazy(() => {
    return import('@tabler/icons/layout-align-top.svg?react');
  }),
  'layout-board-split': lazy(() => {
    return import('@tabler/icons/layout-board-split.svg?react');
  }),
  'layout-board': lazy(() => {
    return import('@tabler/icons/layout-board.svg?react');
  }),
  'layout-bottombar-collapse-filled': lazy(() => {
    return import('@tabler/icons/layout-bottombar-collapse-filled.svg?react');
  }),
  'layout-bottombar-collapse': lazy(() => {
    return import('@tabler/icons/layout-bottombar-collapse.svg?react');
  }),
  'layout-bottombar-expand-filled': lazy(() => {
    return import('@tabler/icons/layout-bottombar-expand-filled.svg?react');
  }),
  'layout-bottombar-expand': lazy(() => {
    return import('@tabler/icons/layout-bottombar-expand.svg?react');
  }),
  'layout-bottombar-filled': lazy(() => {
    return import('@tabler/icons/layout-bottombar-filled.svg?react');
  }),
  'layout-bottombar': lazy(() => {
    return import('@tabler/icons/layout-bottombar.svg?react');
  }),
  'layout-cards': lazy(() => {
    return import('@tabler/icons/layout-cards.svg?react');
  }),
  'layout-collage': lazy(() => {
    return import('@tabler/icons/layout-collage.svg?react');
  }),
  'layout-columns': lazy(() => {
    return import('@tabler/icons/layout-columns.svg?react');
  }),
  'layout-dashboard': lazy(() => {
    return import('@tabler/icons/layout-dashboard.svg?react');
  }),
  'layout-distribute-horizontal': lazy(() => {
    return import('@tabler/icons/layout-distribute-horizontal.svg?react');
  }),
  'layout-distribute-vertical': lazy(() => {
    return import('@tabler/icons/layout-distribute-vertical.svg?react');
  }),
  'layout-grid-add': lazy(() => {
    return import('@tabler/icons/layout-grid-add.svg?react');
  }),
  'layout-grid-remove': lazy(() => {
    return import('@tabler/icons/layout-grid-remove.svg?react');
  }),
  'layout-grid': lazy(() => {
    return import('@tabler/icons/layout-grid.svg?react');
  }),
  'layout-kanban': lazy(() => {
    return import('@tabler/icons/layout-kanban.svg?react');
  }),
  'layout-list': lazy(() => {
    return import('@tabler/icons/layout-list.svg?react');
  }),
  'layout-navbar-collapse-filled': lazy(() => {
    return import('@tabler/icons/layout-navbar-collapse-filled.svg?react');
  }),
  'layout-navbar-collapse': lazy(() => {
    return import('@tabler/icons/layout-navbar-collapse.svg?react');
  }),
  'layout-navbar-expand-filled': lazy(() => {
    return import('@tabler/icons/layout-navbar-expand-filled.svg?react');
  }),
  'layout-navbar-expand': lazy(() => {
    return import('@tabler/icons/layout-navbar-expand.svg?react');
  }),
  'layout-navbar-filled': lazy(() => {
    return import('@tabler/icons/layout-navbar-filled.svg?react');
  }),
  'layout-navbar': lazy(() => {
    return import('@tabler/icons/layout-navbar.svg?react');
  }),
  'layout-off': lazy(() => {
    return import('@tabler/icons/layout-off.svg?react');
  }),
  'layout-rows': lazy(() => {
    return import('@tabler/icons/layout-rows.svg?react');
  }),
  'layout-sidebar-left-collapse-filled': lazy(() => {
    return import('@tabler/icons/layout-sidebar-left-collapse-filled.svg?react');
  }),
  'layout-sidebar-left-collapse': lazy(() => {
    return import('@tabler/icons/layout-sidebar-left-collapse.svg?react');
  }),
  'layout-sidebar-left-expand-filled': lazy(() => {
    return import('@tabler/icons/layout-sidebar-left-expand-filled.svg?react');
  }),
  'layout-sidebar-left-expand': lazy(() => {
    return import('@tabler/icons/layout-sidebar-left-expand.svg?react');
  }),
  'layout-sidebar-right-collapse-filled': lazy(() => {
    return import('@tabler/icons/layout-sidebar-right-collapse-filled.svg?react');
  }),
  'layout-sidebar-right-collapse': lazy(() => {
    return import('@tabler/icons/layout-sidebar-right-collapse.svg?react');
  }),
  'layout-sidebar-right-expand-filled': lazy(() => {
    return import('@tabler/icons/layout-sidebar-right-expand-filled.svg?react');
  }),
  'layout-sidebar-right-expand': lazy(() => {
    return import('@tabler/icons/layout-sidebar-right-expand.svg?react');
  }),
  'layout-sidebar-right': lazy(() => {
    return import('@tabler/icons/layout-sidebar-right.svg?react');
  }),
  'layout-sidebar': lazy(() => {
    return import('@tabler/icons/layout-sidebar.svg?react');
  }),
  layout: lazy(() => {
    return import('@tabler/icons/layout.svg?react');
  }),
  'leaf-off': lazy(() => {
    return import('@tabler/icons/leaf-off.svg?react');
  }),
  leaf: lazy(() => {
    return import('@tabler/icons/leaf.svg?react');
  }),
  'lego-off': lazy(() => {
    return import('@tabler/icons/lego-off.svg?react');
  }),
  lego: lazy(() => {
    return import('@tabler/icons/lego.svg?react');
  }),
  'lemon-2': lazy(() => {
    return import('@tabler/icons/lemon-2.svg?react');
  }),
  lemon: lazy(() => {
    return import('@tabler/icons/lemon.svg?react');
  }),
  'letter-a-small': lazy(() => {
    return import('@tabler/icons/letter-a-small.svg?react');
  }),
  'letter-a': lazy(() => {
    return import('@tabler/icons/letter-a.svg?react');
  }),
  'letter-b-small': lazy(() => {
    return import('@tabler/icons/letter-b-small.svg?react');
  }),
  'letter-b': lazy(() => {
    return import('@tabler/icons/letter-b.svg?react');
  }),
  'letter-c-small': lazy(() => {
    return import('@tabler/icons/letter-c-small.svg?react');
  }),
  'letter-c': lazy(() => {
    return import('@tabler/icons/letter-c.svg?react');
  }),
  'letter-case-lower': lazy(() => {
    return import('@tabler/icons/letter-case-lower.svg?react');
  }),
  'letter-case-toggle': lazy(() => {
    return import('@tabler/icons/letter-case-toggle.svg?react');
  }),
  'letter-case-upper': lazy(() => {
    return import('@tabler/icons/letter-case-upper.svg?react');
  }),
  'letter-case': lazy(() => {
    return import('@tabler/icons/letter-case.svg?react');
  }),
  'letter-d-small': lazy(() => {
    return import('@tabler/icons/letter-d-small.svg?react');
  }),
  'letter-d': lazy(() => {
    return import('@tabler/icons/letter-d.svg?react');
  }),
  'letter-e-small': lazy(() => {
    return import('@tabler/icons/letter-e-small.svg?react');
  }),
  'letter-e': lazy(() => {
    return import('@tabler/icons/letter-e.svg?react');
  }),
  'letter-f-small': lazy(() => {
    return import('@tabler/icons/letter-f-small.svg?react');
  }),
  'letter-f': lazy(() => {
    return import('@tabler/icons/letter-f.svg?react');
  }),
  'letter-g-small': lazy(() => {
    return import('@tabler/icons/letter-g-small.svg?react');
  }),
  'letter-g': lazy(() => {
    return import('@tabler/icons/letter-g.svg?react');
  }),
  'letter-h-small': lazy(() => {
    return import('@tabler/icons/letter-h-small.svg?react');
  }),
  'letter-h': lazy(() => {
    return import('@tabler/icons/letter-h.svg?react');
  }),
  'letter-i-small': lazy(() => {
    return import('@tabler/icons/letter-i-small.svg?react');
  }),
  'letter-i': lazy(() => {
    return import('@tabler/icons/letter-i.svg?react');
  }),
  'letter-j-small': lazy(() => {
    return import('@tabler/icons/letter-j-small.svg?react');
  }),
  'letter-j': lazy(() => {
    return import('@tabler/icons/letter-j.svg?react');
  }),
  'letter-k-small': lazy(() => {
    return import('@tabler/icons/letter-k-small.svg?react');
  }),
  'letter-k': lazy(() => {
    return import('@tabler/icons/letter-k.svg?react');
  }),
  'letter-l-small': lazy(() => {
    return import('@tabler/icons/letter-l-small.svg?react');
  }),
  'letter-l': lazy(() => {
    return import('@tabler/icons/letter-l.svg?react');
  }),
  'letter-m-small': lazy(() => {
    return import('@tabler/icons/letter-m-small.svg?react');
  }),
  'letter-m': lazy(() => {
    return import('@tabler/icons/letter-m.svg?react');
  }),
  'letter-n-small': lazy(() => {
    return import('@tabler/icons/letter-n-small.svg?react');
  }),
  'letter-n': lazy(() => {
    return import('@tabler/icons/letter-n.svg?react');
  }),
  'letter-o-small': lazy(() => {
    return import('@tabler/icons/letter-o-small.svg?react');
  }),
  'letter-o': lazy(() => {
    return import('@tabler/icons/letter-o.svg?react');
  }),
  'letter-p-small': lazy(() => {
    return import('@tabler/icons/letter-p-small.svg?react');
  }),
  'letter-p': lazy(() => {
    return import('@tabler/icons/letter-p.svg?react');
  }),
  'letter-q-small': lazy(() => {
    return import('@tabler/icons/letter-q-small.svg?react');
  }),
  'letter-q': lazy(() => {
    return import('@tabler/icons/letter-q.svg?react');
  }),
  'letter-r-small': lazy(() => {
    return import('@tabler/icons/letter-r-small.svg?react');
  }),
  'letter-r': lazy(() => {
    return import('@tabler/icons/letter-r.svg?react');
  }),
  'letter-s-small': lazy(() => {
    return import('@tabler/icons/letter-s-small.svg?react');
  }),
  'letter-s': lazy(() => {
    return import('@tabler/icons/letter-s.svg?react');
  }),
  'letter-spacing': lazy(() => {
    return import('@tabler/icons/letter-spacing.svg?react');
  }),
  'letter-t-small': lazy(() => {
    return import('@tabler/icons/letter-t-small.svg?react');
  }),
  'letter-t': lazy(() => {
    return import('@tabler/icons/letter-t.svg?react');
  }),
  'letter-u-small': lazy(() => {
    return import('@tabler/icons/letter-u-small.svg?react');
  }),
  'letter-u': lazy(() => {
    return import('@tabler/icons/letter-u.svg?react');
  }),
  'letter-v-small': lazy(() => {
    return import('@tabler/icons/letter-v-small.svg?react');
  }),
  'letter-v': lazy(() => {
    return import('@tabler/icons/letter-v.svg?react');
  }),
  'letter-w-small': lazy(() => {
    return import('@tabler/icons/letter-w-small.svg?react');
  }),
  'letter-w': lazy(() => {
    return import('@tabler/icons/letter-w.svg?react');
  }),
  'letter-x-small': lazy(() => {
    return import('@tabler/icons/letter-x-small.svg?react');
  }),
  'letter-x': lazy(() => {
    return import('@tabler/icons/letter-x.svg?react');
  }),
  'letter-y-small': lazy(() => {
    return import('@tabler/icons/letter-y-small.svg?react');
  }),
  'letter-y': lazy(() => {
    return import('@tabler/icons/letter-y.svg?react');
  }),
  'letter-z-small': lazy(() => {
    return import('@tabler/icons/letter-z-small.svg?react');
  }),
  'letter-z': lazy(() => {
    return import('@tabler/icons/letter-z.svg?react');
  }),
  'license-off': lazy(() => {
    return import('@tabler/icons/license-off.svg?react');
  }),
  license: lazy(() => {
    return import('@tabler/icons/license.svg?react');
  }),
  'lifebuoy-off': lazy(() => {
    return import('@tabler/icons/lifebuoy-off.svg?react');
  }),
  lifebuoy: lazy(() => {
    return import('@tabler/icons/lifebuoy.svg?react');
  }),
  lighter: lazy(() => {
    return import('@tabler/icons/lighter.svg?react');
  }),
  'line-dashed': lazy(() => {
    return import('@tabler/icons/line-dashed.svg?react');
  }),
  'line-dotted': lazy(() => {
    return import('@tabler/icons/line-dotted.svg?react');
  }),
  'line-height': lazy(() => {
    return import('@tabler/icons/line-height.svg?react');
  }),
  'line-scan': lazy(() => {
    return import('@tabler/icons/line-scan.svg?react');
  }),
  line: lazy(() => {
    return import('@tabler/icons/line.svg?react');
  }),
  'link-off': lazy(() => {
    return import('@tabler/icons/link-off.svg?react');
  }),
  link: lazy(() => {
    return import('@tabler/icons/link.svg?react');
  }),
  'list-check': lazy(() => {
    return import('@tabler/icons/list-check.svg?react');
  }),
  'list-details': lazy(() => {
    return import('@tabler/icons/list-details.svg?react');
  }),
  'list-letters': lazy(() => {
    return import('@tabler/icons/list-letters.svg?react');
  }),
  'list-numbers': lazy(() => {
    return import('@tabler/icons/list-numbers.svg?react');
  }),
  'list-search': lazy(() => {
    return import('@tabler/icons/list-search.svg?react');
  }),
  'list-tree': lazy(() => {
    return import('@tabler/icons/list-tree.svg?react');
  }),
  list: lazy(() => {
    return import('@tabler/icons/list.svg?react');
  }),
  'live-photo-off': lazy(() => {
    return import('@tabler/icons/live-photo-off.svg?react');
  }),
  'live-photo': lazy(() => {
    return import('@tabler/icons/live-photo.svg?react');
  }),
  'live-view': lazy(() => {
    return import('@tabler/icons/live-view.svg?react');
  }),
  'load-balancer': lazy(() => {
    return import('@tabler/icons/load-balancer.svg?react');
  }),
  'loader-2': lazy(() => {
    return import('@tabler/icons/loader-2.svg?react');
  }),
  'loader-3': lazy(() => {
    return import('@tabler/icons/loader-3.svg?react');
  }),
  'loader-quarter': lazy(() => {
    return import('@tabler/icons/loader-quarter.svg?react');
  }),
  loader: lazy(() => {
    return import('@tabler/icons/loader.svg?react');
  }),
  'location-bolt': lazy(() => {
    return import('@tabler/icons/location-bolt.svg?react');
  }),
  'location-broken': lazy(() => {
    return import('@tabler/icons/location-broken.svg?react');
  }),
  'location-cancel': lazy(() => {
    return import('@tabler/icons/location-cancel.svg?react');
  }),
  'location-check': lazy(() => {
    return import('@tabler/icons/location-check.svg?react');
  }),
  'location-code': lazy(() => {
    return import('@tabler/icons/location-code.svg?react');
  }),
  'location-cog': lazy(() => {
    return import('@tabler/icons/location-cog.svg?react');
  }),
  'location-discount': lazy(() => {
    return import('@tabler/icons/location-discount.svg?react');
  }),
  'location-dollar': lazy(() => {
    return import('@tabler/icons/location-dollar.svg?react');
  }),
  'location-down': lazy(() => {
    return import('@tabler/icons/location-down.svg?react');
  }),
  'location-exclamation': lazy(() => {
    return import('@tabler/icons/location-exclamation.svg?react');
  }),
  'location-filled': lazy(() => {
    return import('@tabler/icons/location-filled.svg?react');
  }),
  'location-heart': lazy(() => {
    return import('@tabler/icons/location-heart.svg?react');
  }),
  'location-minus': lazy(() => {
    return import('@tabler/icons/location-minus.svg?react');
  }),
  'location-off': lazy(() => {
    return import('@tabler/icons/location-off.svg?react');
  }),
  'location-pause': lazy(() => {
    return import('@tabler/icons/location-pause.svg?react');
  }),
  'location-pin': lazy(() => {
    return import('@tabler/icons/location-pin.svg?react');
  }),
  'location-plus': lazy(() => {
    return import('@tabler/icons/location-plus.svg?react');
  }),
  'location-question': lazy(() => {
    return import('@tabler/icons/location-question.svg?react');
  }),
  'location-search': lazy(() => {
    return import('@tabler/icons/location-search.svg?react');
  }),
  'location-share': lazy(() => {
    return import('@tabler/icons/location-share.svg?react');
  }),
  'location-star': lazy(() => {
    return import('@tabler/icons/location-star.svg?react');
  }),
  'location-up': lazy(() => {
    return import('@tabler/icons/location-up.svg?react');
  }),
  'location-x': lazy(() => {
    return import('@tabler/icons/location-x.svg?react');
  }),
  location: lazy(() => {
    return import('@tabler/icons/location.svg?react');
  }),
  'lock-access-off': lazy(() => {
    return import('@tabler/icons/lock-access-off.svg?react');
  }),
  'lock-access': lazy(() => {
    return import('@tabler/icons/lock-access.svg?react');
  }),
  'lock-bolt': lazy(() => {
    return import('@tabler/icons/lock-bolt.svg?react');
  }),
  'lock-cancel': lazy(() => {
    return import('@tabler/icons/lock-cancel.svg?react');
  }),
  'lock-check': lazy(() => {
    return import('@tabler/icons/lock-check.svg?react');
  }),
  'lock-code': lazy(() => {
    return import('@tabler/icons/lock-code.svg?react');
  }),
  'lock-cog': lazy(() => {
    return import('@tabler/icons/lock-cog.svg?react');
  }),
  'lock-dollar': lazy(() => {
    return import('@tabler/icons/lock-dollar.svg?react');
  }),
  'lock-down': lazy(() => {
    return import('@tabler/icons/lock-down.svg?react');
  }),
  'lock-exclamation': lazy(() => {
    return import('@tabler/icons/lock-exclamation.svg?react');
  }),
  'lock-heart': lazy(() => {
    return import('@tabler/icons/lock-heart.svg?react');
  }),
  'lock-minus': lazy(() => {
    return import('@tabler/icons/lock-minus.svg?react');
  }),
  'lock-off': lazy(() => {
    return import('@tabler/icons/lock-off.svg?react');
  }),
  'lock-open-off': lazy(() => {
    return import('@tabler/icons/lock-open-off.svg?react');
  }),
  'lock-open': lazy(() => {
    return import('@tabler/icons/lock-open.svg?react');
  }),
  'lock-pause': lazy(() => {
    return import('@tabler/icons/lock-pause.svg?react');
  }),
  'lock-pin': lazy(() => {
    return import('@tabler/icons/lock-pin.svg?react');
  }),
  'lock-plus': lazy(() => {
    return import('@tabler/icons/lock-plus.svg?react');
  }),
  'lock-question': lazy(() => {
    return import('@tabler/icons/lock-question.svg?react');
  }),
  'lock-search': lazy(() => {
    return import('@tabler/icons/lock-search.svg?react');
  }),
  'lock-share': lazy(() => {
    return import('@tabler/icons/lock-share.svg?react');
  }),
  'lock-square-rounded-filled': lazy(() => {
    return import('@tabler/icons/lock-square-rounded-filled.svg?react');
  }),
  'lock-square-rounded': lazy(() => {
    return import('@tabler/icons/lock-square-rounded.svg?react');
  }),
  'lock-square': lazy(() => {
    return import('@tabler/icons/lock-square.svg?react');
  }),
  'lock-star': lazy(() => {
    return import('@tabler/icons/lock-star.svg?react');
  }),
  'lock-up': lazy(() => {
    return import('@tabler/icons/lock-up.svg?react');
  }),
  'lock-x': lazy(() => {
    return import('@tabler/icons/lock-x.svg?react');
  }),
  lock: lazy(() => {
    return import('@tabler/icons/lock.svg?react');
  }),
  'logic-and': lazy(() => {
    return import('@tabler/icons/logic-and.svg?react');
  }),
  'logic-buffer': lazy(() => {
    return import('@tabler/icons/logic-buffer.svg?react');
  }),
  'logic-nand': lazy(() => {
    return import('@tabler/icons/logic-nand.svg?react');
  }),
  'logic-nor': lazy(() => {
    return import('@tabler/icons/logic-nor.svg?react');
  }),
  'logic-not': lazy(() => {
    return import('@tabler/icons/logic-not.svg?react');
  }),
  'logic-or': lazy(() => {
    return import('@tabler/icons/logic-or.svg?react');
  }),
  'logic-xnor': lazy(() => {
    return import('@tabler/icons/logic-xnor.svg?react');
  }),
  'logic-xor': lazy(() => {
    return import('@tabler/icons/logic-xor.svg?react');
  }),
  'login-2': lazy(() => {
    return import('@tabler/icons/login-2.svg?react');
  }),
  login: lazy(() => {
    return import('@tabler/icons/login.svg?react');
  }),
  'logout-2': lazy(() => {
    return import('@tabler/icons/logout-2.svg?react');
  }),
  logout: lazy(() => {
    return import('@tabler/icons/logout.svg?react');
  }),
  'lollipop-off': lazy(() => {
    return import('@tabler/icons/lollipop-off.svg?react');
  }),
  lollipop: lazy(() => {
    return import('@tabler/icons/lollipop.svg?react');
  }),
  'luggage-off': lazy(() => {
    return import('@tabler/icons/luggage-off.svg?react');
  }),
  luggage: lazy(() => {
    return import('@tabler/icons/luggage.svg?react');
  }),
  'lungs-off': lazy(() => {
    return import('@tabler/icons/lungs-off.svg?react');
  }),
  lungs: lazy(() => {
    return import('@tabler/icons/lungs.svg?react');
  }),
  'macro-off': lazy(() => {
    return import('@tabler/icons/macro-off.svg?react');
  }),
  macro: lazy(() => {
    return import('@tabler/icons/macro.svg?react');
  }),
  'magnet-off': lazy(() => {
    return import('@tabler/icons/magnet-off.svg?react');
  }),
  magnet: lazy(() => {
    return import('@tabler/icons/magnet.svg?react');
  }),
  magnetic: lazy(() => {
    return import('@tabler/icons/magnetic.svg?react');
  }),
  'mail-ai': lazy(() => {
    return import('@tabler/icons/mail-ai.svg?react');
  }),
  'mail-bolt': lazy(() => {
    return import('@tabler/icons/mail-bolt.svg?react');
  }),
  'mail-cancel': lazy(() => {
    return import('@tabler/icons/mail-cancel.svg?react');
  }),
  'mail-check': lazy(() => {
    return import('@tabler/icons/mail-check.svg?react');
  }),
  'mail-code': lazy(() => {
    return import('@tabler/icons/mail-code.svg?react');
  }),
  'mail-cog': lazy(() => {
    return import('@tabler/icons/mail-cog.svg?react');
  }),
  'mail-dollar': lazy(() => {
    return import('@tabler/icons/mail-dollar.svg?react');
  }),
  'mail-down': lazy(() => {
    return import('@tabler/icons/mail-down.svg?react');
  }),
  'mail-exclamation': lazy(() => {
    return import('@tabler/icons/mail-exclamation.svg?react');
  }),
  'mail-fast': lazy(() => {
    return import('@tabler/icons/mail-fast.svg?react');
  }),
  'mail-filled': lazy(() => {
    return import('@tabler/icons/mail-filled.svg?react');
  }),
  'mail-forward': lazy(() => {
    return import('@tabler/icons/mail-forward.svg?react');
  }),
  'mail-heart': lazy(() => {
    return import('@tabler/icons/mail-heart.svg?react');
  }),
  'mail-minus': lazy(() => {
    return import('@tabler/icons/mail-minus.svg?react');
  }),
  'mail-off': lazy(() => {
    return import('@tabler/icons/mail-off.svg?react');
  }),
  'mail-opened-filled': lazy(() => {
    return import('@tabler/icons/mail-opened-filled.svg?react');
  }),
  'mail-opened': lazy(() => {
    return import('@tabler/icons/mail-opened.svg?react');
  }),
  'mail-pause': lazy(() => {
    return import('@tabler/icons/mail-pause.svg?react');
  }),
  'mail-pin': lazy(() => {
    return import('@tabler/icons/mail-pin.svg?react');
  }),
  'mail-plus': lazy(() => {
    return import('@tabler/icons/mail-plus.svg?react');
  }),
  'mail-question': lazy(() => {
    return import('@tabler/icons/mail-question.svg?react');
  }),
  'mail-search': lazy(() => {
    return import('@tabler/icons/mail-search.svg?react');
  }),
  'mail-share': lazy(() => {
    return import('@tabler/icons/mail-share.svg?react');
  }),
  'mail-star': lazy(() => {
    return import('@tabler/icons/mail-star.svg?react');
  }),
  'mail-up': lazy(() => {
    return import('@tabler/icons/mail-up.svg?react');
  }),
  'mail-x': lazy(() => {
    return import('@tabler/icons/mail-x.svg?react');
  }),
  mail: lazy(() => {
    return import('@tabler/icons/mail.svg?react');
  }),
  'mailbox-off': lazy(() => {
    return import('@tabler/icons/mailbox-off.svg?react');
  }),
  mailbox: lazy(() => {
    return import('@tabler/icons/mailbox.svg?react');
  }),
  man: lazy(() => {
    return import('@tabler/icons/man.svg?react');
  }),
  'manual-gearbox': lazy(() => {
    return import('@tabler/icons/manual-gearbox.svg?react');
  }),
  'map-2': lazy(() => {
    return import('@tabler/icons/map-2.svg?react');
  }),
  'map-bolt': lazy(() => {
    return import('@tabler/icons/map-bolt.svg?react');
  }),
  'map-cancel': lazy(() => {
    return import('@tabler/icons/map-cancel.svg?react');
  }),
  'map-check': lazy(() => {
    return import('@tabler/icons/map-check.svg?react');
  }),
  'map-code': lazy(() => {
    return import('@tabler/icons/map-code.svg?react');
  }),
  'map-cog': lazy(() => {
    return import('@tabler/icons/map-cog.svg?react');
  }),
  'map-discount': lazy(() => {
    return import('@tabler/icons/map-discount.svg?react');
  }),
  'map-dollar': lazy(() => {
    return import('@tabler/icons/map-dollar.svg?react');
  }),
  'map-down': lazy(() => {
    return import('@tabler/icons/map-down.svg?react');
  }),
  'map-east': lazy(() => {
    return import('@tabler/icons/map-east.svg?react');
  }),
  'map-exclamation': lazy(() => {
    return import('@tabler/icons/map-exclamation.svg?react');
  }),
  'map-heart': lazy(() => {
    return import('@tabler/icons/map-heart.svg?react');
  }),
  'map-minus': lazy(() => {
    return import('@tabler/icons/map-minus.svg?react');
  }),
  'map-north': lazy(() => {
    return import('@tabler/icons/map-north.svg?react');
  }),
  'map-off': lazy(() => {
    return import('@tabler/icons/map-off.svg?react');
  }),
  'map-pause': lazy(() => {
    return import('@tabler/icons/map-pause.svg?react');
  }),
  'map-pin-2': lazy(() => {
    return import('@tabler/icons/map-pin-2.svg?react');
  }),
  'map-pin-bolt': lazy(() => {
    return import('@tabler/icons/map-pin-bolt.svg?react');
  }),
  'map-pin-cancel': lazy(() => {
    return import('@tabler/icons/map-pin-cancel.svg?react');
  }),
  'map-pin-check': lazy(() => {
    return import('@tabler/icons/map-pin-check.svg?react');
  }),
  'map-pin-code': lazy(() => {
    return import('@tabler/icons/map-pin-code.svg?react');
  }),
  'map-pin-cog': lazy(() => {
    return import('@tabler/icons/map-pin-cog.svg?react');
  }),
  'map-pin-dollar': lazy(() => {
    return import('@tabler/icons/map-pin-dollar.svg?react');
  }),
  'map-pin-down': lazy(() => {
    return import('@tabler/icons/map-pin-down.svg?react');
  }),
  'map-pin-exclamation': lazy(() => {
    return import('@tabler/icons/map-pin-exclamation.svg?react');
  }),
  'map-pin-filled': lazy(() => {
    return import('@tabler/icons/map-pin-filled.svg?react');
  }),
  'map-pin-heart': lazy(() => {
    return import('@tabler/icons/map-pin-heart.svg?react');
  }),
  'map-pin-minus': lazy(() => {
    return import('@tabler/icons/map-pin-minus.svg?react');
  }),
  'map-pin-off': lazy(() => {
    return import('@tabler/icons/map-pin-off.svg?react');
  }),
  'map-pin-pause': lazy(() => {
    return import('@tabler/icons/map-pin-pause.svg?react');
  }),
  'map-pin-pin': lazy(() => {
    return import('@tabler/icons/map-pin-pin.svg?react');
  }),
  'map-pin-plus': lazy(() => {
    return import('@tabler/icons/map-pin-plus.svg?react');
  }),
  'map-pin-question': lazy(() => {
    return import('@tabler/icons/map-pin-question.svg?react');
  }),
  'map-pin-search': lazy(() => {
    return import('@tabler/icons/map-pin-search.svg?react');
  }),
  'map-pin-share': lazy(() => {
    return import('@tabler/icons/map-pin-share.svg?react');
  }),
  'map-pin-star': lazy(() => {
    return import('@tabler/icons/map-pin-star.svg?react');
  }),
  'map-pin-up': lazy(() => {
    return import('@tabler/icons/map-pin-up.svg?react');
  }),
  'map-pin-x': lazy(() => {
    return import('@tabler/icons/map-pin-x.svg?react');
  }),
  'map-pin': lazy(() => {
    return import('@tabler/icons/map-pin.svg?react');
  }),
  'map-pins': lazy(() => {
    return import('@tabler/icons/map-pins.svg?react');
  }),
  'map-plus': lazy(() => {
    return import('@tabler/icons/map-plus.svg?react');
  }),
  'map-question': lazy(() => {
    return import('@tabler/icons/map-question.svg?react');
  }),
  'map-route': lazy(() => {
    return import('@tabler/icons/map-route.svg?react');
  }),
  'map-search': lazy(() => {
    return import('@tabler/icons/map-search.svg?react');
  }),
  'map-share': lazy(() => {
    return import('@tabler/icons/map-share.svg?react');
  }),
  'map-south': lazy(() => {
    return import('@tabler/icons/map-south.svg?react');
  }),
  'map-star': lazy(() => {
    return import('@tabler/icons/map-star.svg?react');
  }),
  'map-up': lazy(() => {
    return import('@tabler/icons/map-up.svg?react');
  }),
  'map-west': lazy(() => {
    return import('@tabler/icons/map-west.svg?react');
  }),
  'map-x': lazy(() => {
    return import('@tabler/icons/map-x.svg?react');
  }),
  map: lazy(() => {
    return import('@tabler/icons/map.svg?react');
  }),
  'markdown-off': lazy(() => {
    return import('@tabler/icons/markdown-off.svg?react');
  }),
  markdown: lazy(() => {
    return import('@tabler/icons/markdown.svg?react');
  }),
  'marquee-2': lazy(() => {
    return import('@tabler/icons/marquee-2.svg?react');
  }),
  'marquee-off': lazy(() => {
    return import('@tabler/icons/marquee-off.svg?react');
  }),
  marquee: lazy(() => {
    return import('@tabler/icons/marquee.svg?react');
  }),
  mars: lazy(() => {
    return import('@tabler/icons/mars.svg?react');
  }),
  'mask-off': lazy(() => {
    return import('@tabler/icons/mask-off.svg?react');
  }),
  mask: lazy(() => {
    return import('@tabler/icons/mask.svg?react');
  }),
  'masks-theater-off': lazy(() => {
    return import('@tabler/icons/masks-theater-off.svg?react');
  }),
  'masks-theater': lazy(() => {
    return import('@tabler/icons/masks-theater.svg?react');
  }),
  massage: lazy(() => {
    return import('@tabler/icons/massage.svg?react');
  }),
  matchstick: lazy(() => {
    return import('@tabler/icons/matchstick.svg?react');
  }),
  'math-1-divide-2': lazy(() => {
    return import('@tabler/icons/math-1-divide-2.svg?react');
  }),
  'math-1-divide-3': lazy(() => {
    return import('@tabler/icons/math-1-divide-3.svg?react');
  }),
  'math-avg': lazy(() => {
    return import('@tabler/icons/math-avg.svg?react');
  }),
  'math-equal-greater': lazy(() => {
    return import('@tabler/icons/math-equal-greater.svg?react');
  }),
  'math-equal-lower': lazy(() => {
    return import('@tabler/icons/math-equal-lower.svg?react');
  }),
  'math-function-off': lazy(() => {
    return import('@tabler/icons/math-function-off.svg?react');
  }),
  'math-function-y': lazy(() => {
    return import('@tabler/icons/math-function-y.svg?react');
  }),
  'math-function': lazy(() => {
    return import('@tabler/icons/math-function.svg?react');
  }),
  'math-greater': lazy(() => {
    return import('@tabler/icons/math-greater.svg?react');
  }),
  'math-integral-x': lazy(() => {
    return import('@tabler/icons/math-integral-x.svg?react');
  }),
  'math-integral': lazy(() => {
    return import('@tabler/icons/math-integral.svg?react');
  }),
  'math-integrals': lazy(() => {
    return import('@tabler/icons/math-integrals.svg?react');
  }),
  'math-lower': lazy(() => {
    return import('@tabler/icons/math-lower.svg?react');
  }),
  'math-max': lazy(() => {
    return import('@tabler/icons/math-max.svg?react');
  }),
  'math-min': lazy(() => {
    return import('@tabler/icons/math-min.svg?react');
  }),
  'math-not': lazy(() => {
    return import('@tabler/icons/math-not.svg?react');
  }),
  'math-off': lazy(() => {
    return import('@tabler/icons/math-off.svg?react');
  }),
  'math-pi-divide-2': lazy(() => {
    return import('@tabler/icons/math-pi-divide-2.svg?react');
  }),
  'math-pi': lazy(() => {
    return import('@tabler/icons/math-pi.svg?react');
  }),
  'math-symbols': lazy(() => {
    return import('@tabler/icons/math-symbols.svg?react');
  }),
  'math-x-divide-2': lazy(() => {
    return import('@tabler/icons/math-x-divide-2.svg?react');
  }),
  'math-x-divide-y-2': lazy(() => {
    return import('@tabler/icons/math-x-divide-y-2.svg?react');
  }),
  'math-x-divide-y': lazy(() => {
    return import('@tabler/icons/math-x-divide-y.svg?react');
  }),
  'math-x-minus-x': lazy(() => {
    return import('@tabler/icons/math-x-minus-x.svg?react');
  }),
  'math-x-minus-y': lazy(() => {
    return import('@tabler/icons/math-x-minus-y.svg?react');
  }),
  'math-x-plus-x': lazy(() => {
    return import('@tabler/icons/math-x-plus-x.svg?react');
  }),
  'math-x-plus-y': lazy(() => {
    return import('@tabler/icons/math-x-plus-y.svg?react');
  }),
  'math-xy': lazy(() => {
    return import('@tabler/icons/math-xy.svg?react');
  }),
  'math-y-minus-y': lazy(() => {
    return import('@tabler/icons/math-y-minus-y.svg?react');
  }),
  'math-y-plus-y': lazy(() => {
    return import('@tabler/icons/math-y-plus-y.svg?react');
  }),
  math: lazy(() => {
    return import('@tabler/icons/math.svg?react');
  }),
  'maximize-off': lazy(() => {
    return import('@tabler/icons/maximize-off.svg?react');
  }),
  maximize: lazy(() => {
    return import('@tabler/icons/maximize.svg?react');
  }),
  'meat-off': lazy(() => {
    return import('@tabler/icons/meat-off.svg?react');
  }),
  meat: lazy(() => {
    return import('@tabler/icons/meat.svg?react');
  }),
  'medal-2': lazy(() => {
    return import('@tabler/icons/medal-2.svg?react');
  }),
  medal: lazy(() => {
    return import('@tabler/icons/medal.svg?react');
  }),
  'medical-cross-circle': lazy(() => {
    return import('@tabler/icons/medical-cross-circle.svg?react');
  }),
  'medical-cross-filled': lazy(() => {
    return import('@tabler/icons/medical-cross-filled.svg?react');
  }),
  'medical-cross-off': lazy(() => {
    return import('@tabler/icons/medical-cross-off.svg?react');
  }),
  'medical-cross': lazy(() => {
    return import('@tabler/icons/medical-cross.svg?react');
  }),
  'medicine-syrup': lazy(() => {
    return import('@tabler/icons/medicine-syrup.svg?react');
  }),
  meeple: lazy(() => {
    return import('@tabler/icons/meeple.svg?react');
  }),
  melon: lazy(() => {
    return import('@tabler/icons/melon.svg?react');
  }),
  menorah: lazy(() => {
    return import('@tabler/icons/menorah.svg?react');
  }),
  'menu-2': lazy(() => {
    return import('@tabler/icons/menu-2.svg?react');
  }),
  'menu-deep': lazy(() => {
    return import('@tabler/icons/menu-deep.svg?react');
  }),
  'menu-order': lazy(() => {
    return import('@tabler/icons/menu-order.svg?react');
  }),
  menu: lazy(() => {
    return import('@tabler/icons/menu.svg?react');
  }),
  'message-2-bolt': lazy(() => {
    return import('@tabler/icons/message-2-bolt.svg?react');
  }),
  'message-2-cancel': lazy(() => {
    return import('@tabler/icons/message-2-cancel.svg?react');
  }),
  'message-2-check': lazy(() => {
    return import('@tabler/icons/message-2-check.svg?react');
  }),
  'message-2-code': lazy(() => {
    return import('@tabler/icons/message-2-code.svg?react');
  }),
  'message-2-cog': lazy(() => {
    return import('@tabler/icons/message-2-cog.svg?react');
  }),
  'message-2-dollar': lazy(() => {
    return import('@tabler/icons/message-2-dollar.svg?react');
  }),
  'message-2-down': lazy(() => {
    return import('@tabler/icons/message-2-down.svg?react');
  }),
  'message-2-exclamation': lazy(() => {
    return import('@tabler/icons/message-2-exclamation.svg?react');
  }),
  'message-2-heart': lazy(() => {
    return import('@tabler/icons/message-2-heart.svg?react');
  }),
  'message-2-minus': lazy(() => {
    return import('@tabler/icons/message-2-minus.svg?react');
  }),
  'message-2-off': lazy(() => {
    return import('@tabler/icons/message-2-off.svg?react');
  }),
  'message-2-pause': lazy(() => {
    return import('@tabler/icons/message-2-pause.svg?react');
  }),
  'message-2-pin': lazy(() => {
    return import('@tabler/icons/message-2-pin.svg?react');
  }),
  'message-2-plus': lazy(() => {
    return import('@tabler/icons/message-2-plus.svg?react');
  }),
  'message-2-question': lazy(() => {
    return import('@tabler/icons/message-2-question.svg?react');
  }),
  'message-2-search': lazy(() => {
    return import('@tabler/icons/message-2-search.svg?react');
  }),
  'message-2-share': lazy(() => {
    return import('@tabler/icons/message-2-share.svg?react');
  }),
  'message-2-star': lazy(() => {
    return import('@tabler/icons/message-2-star.svg?react');
  }),
  'message-2-up': lazy(() => {
    return import('@tabler/icons/message-2-up.svg?react');
  }),
  'message-2-x': lazy(() => {
    return import('@tabler/icons/message-2-x.svg?react');
  }),
  'message-2': lazy(() => {
    return import('@tabler/icons/message-2.svg?react');
  }),
  'message-bolt': lazy(() => {
    return import('@tabler/icons/message-bolt.svg?react');
  }),
  'message-cancel': lazy(() => {
    return import('@tabler/icons/message-cancel.svg?react');
  }),
  'message-chatbot': lazy(() => {
    return import('@tabler/icons/message-chatbot.svg?react');
  }),
  'message-check': lazy(() => {
    return import('@tabler/icons/message-check.svg?react');
  }),
  'message-circle-2-filled': lazy(() => {
    return import('@tabler/icons/message-circle-2-filled.svg?react');
  }),
  'message-circle-2': lazy(() => {
    return import('@tabler/icons/message-circle-2.svg?react');
  }),
  'message-circle-bolt': lazy(() => {
    return import('@tabler/icons/message-circle-bolt.svg?react');
  }),
  'message-circle-cancel': lazy(() => {
    return import('@tabler/icons/message-circle-cancel.svg?react');
  }),
  'message-circle-check': lazy(() => {
    return import('@tabler/icons/message-circle-check.svg?react');
  }),
  'message-circle-code': lazy(() => {
    return import('@tabler/icons/message-circle-code.svg?react');
  }),
  'message-circle-cog': lazy(() => {
    return import('@tabler/icons/message-circle-cog.svg?react');
  }),
  'message-circle-dollar': lazy(() => {
    return import('@tabler/icons/message-circle-dollar.svg?react');
  }),
  'message-circle-down': lazy(() => {
    return import('@tabler/icons/message-circle-down.svg?react');
  }),
  'message-circle-exclamation': lazy(() => {
    return import('@tabler/icons/message-circle-exclamation.svg?react');
  }),
  'message-circle-heart': lazy(() => {
    return import('@tabler/icons/message-circle-heart.svg?react');
  }),
  'message-circle-minus': lazy(() => {
    return import('@tabler/icons/message-circle-minus.svg?react');
  }),
  'message-circle-off': lazy(() => {
    return import('@tabler/icons/message-circle-off.svg?react');
  }),
  'message-circle-pause': lazy(() => {
    return import('@tabler/icons/message-circle-pause.svg?react');
  }),
  'message-circle-pin': lazy(() => {
    return import('@tabler/icons/message-circle-pin.svg?react');
  }),
  'message-circle-plus': lazy(() => {
    return import('@tabler/icons/message-circle-plus.svg?react');
  }),
  'message-circle-question': lazy(() => {
    return import('@tabler/icons/message-circle-question.svg?react');
  }),
  'message-circle-search': lazy(() => {
    return import('@tabler/icons/message-circle-search.svg?react');
  }),
  'message-circle-share': lazy(() => {
    return import('@tabler/icons/message-circle-share.svg?react');
  }),
  'message-circle-star': lazy(() => {
    return import('@tabler/icons/message-circle-star.svg?react');
  }),
  'message-circle-up': lazy(() => {
    return import('@tabler/icons/message-circle-up.svg?react');
  }),
  'message-circle-x': lazy(() => {
    return import('@tabler/icons/message-circle-x.svg?react');
  }),
  'message-circle': lazy(() => {
    return import('@tabler/icons/message-circle.svg?react');
  }),
  'message-code': lazy(() => {
    return import('@tabler/icons/message-code.svg?react');
  }),
  'message-cog': lazy(() => {
    return import('@tabler/icons/message-cog.svg?react');
  }),
  'message-dollar': lazy(() => {
    return import('@tabler/icons/message-dollar.svg?react');
  }),
  'message-dots': lazy(() => {
    return import('@tabler/icons/message-dots.svg?react');
  }),
  'message-down': lazy(() => {
    return import('@tabler/icons/message-down.svg?react');
  }),
  'message-exclamation': lazy(() => {
    return import('@tabler/icons/message-exclamation.svg?react');
  }),
  'message-forward': lazy(() => {
    return import('@tabler/icons/message-forward.svg?react');
  }),
  'message-heart': lazy(() => {
    return import('@tabler/icons/message-heart.svg?react');
  }),
  'message-language': lazy(() => {
    return import('@tabler/icons/message-language.svg?react');
  }),
  'message-minus': lazy(() => {
    return import('@tabler/icons/message-minus.svg?react');
  }),
  'message-off': lazy(() => {
    return import('@tabler/icons/message-off.svg?react');
  }),
  'message-pause': lazy(() => {
    return import('@tabler/icons/message-pause.svg?react');
  }),
  'message-pin': lazy(() => {
    return import('@tabler/icons/message-pin.svg?react');
  }),
  'message-plus': lazy(() => {
    return import('@tabler/icons/message-plus.svg?react');
  }),
  'message-question': lazy(() => {
    return import('@tabler/icons/message-question.svg?react');
  }),
  'message-report': lazy(() => {
    return import('@tabler/icons/message-report.svg?react');
  }),
  'message-search': lazy(() => {
    return import('@tabler/icons/message-search.svg?react');
  }),
  'message-share': lazy(() => {
    return import('@tabler/icons/message-share.svg?react');
  }),
  'message-star': lazy(() => {
    return import('@tabler/icons/message-star.svg?react');
  }),
  'message-up': lazy(() => {
    return import('@tabler/icons/message-up.svg?react');
  }),
  'message-x': lazy(() => {
    return import('@tabler/icons/message-x.svg?react');
  }),
  message: lazy(() => {
    return import('@tabler/icons/message.svg?react');
  }),
  'messages-off': lazy(() => {
    return import('@tabler/icons/messages-off.svg?react');
  }),
  messages: lazy(() => {
    return import('@tabler/icons/messages.svg?react');
  }),
  'meteor-off': lazy(() => {
    return import('@tabler/icons/meteor-off.svg?react');
  }),
  meteor: lazy(() => {
    return import('@tabler/icons/meteor.svg?react');
  }),
  'michelin-bib-gourmand': lazy(() => {
    return import('@tabler/icons/michelin-bib-gourmand.svg?react');
  }),
  'michelin-star-green': lazy(() => {
    return import('@tabler/icons/michelin-star-green.svg?react');
  }),
  'michelin-star': lazy(() => {
    return import('@tabler/icons/michelin-star.svg?react');
  }),
  'mickey-filled': lazy(() => {
    return import('@tabler/icons/mickey-filled.svg?react');
  }),
  mickey: lazy(() => {
    return import('@tabler/icons/mickey.svg?react');
  }),
  'microphone-2-off': lazy(() => {
    return import('@tabler/icons/microphone-2-off.svg?react');
  }),
  'microphone-2': lazy(() => {
    return import('@tabler/icons/microphone-2.svg?react');
  }),
  'microphone-off': lazy(() => {
    return import('@tabler/icons/microphone-off.svg?react');
  }),
  microphone: lazy(() => {
    return import('@tabler/icons/microphone.svg?react');
  }),
  'microscope-off': lazy(() => {
    return import('@tabler/icons/microscope-off.svg?react');
  }),
  microscope: lazy(() => {
    return import('@tabler/icons/microscope.svg?react');
  }),
  'microwave-off': lazy(() => {
    return import('@tabler/icons/microwave-off.svg?react');
  }),
  microwave: lazy(() => {
    return import('@tabler/icons/microwave.svg?react');
  }),
  'military-award': lazy(() => {
    return import('@tabler/icons/military-award.svg?react');
  }),
  'military-rank': lazy(() => {
    return import('@tabler/icons/military-rank.svg?react');
  }),
  'milk-off': lazy(() => {
    return import('@tabler/icons/milk-off.svg?react');
  }),
  milk: lazy(() => {
    return import('@tabler/icons/milk.svg?react');
  }),
  milkshake: lazy(() => {
    return import('@tabler/icons/milkshake.svg?react');
  }),
  minimize: lazy(() => {
    return import('@tabler/icons/minimize.svg?react');
  }),
  'minus-vertical': lazy(() => {
    return import('@tabler/icons/minus-vertical.svg?react');
  }),
  minus: lazy(() => {
    return import('@tabler/icons/minus.svg?react');
  }),
  'mist-off': lazy(() => {
    return import('@tabler/icons/mist-off.svg?react');
  }),
  mist: lazy(() => {
    return import('@tabler/icons/mist.svg?react');
  }),
  'mobiledata-off': lazy(() => {
    return import('@tabler/icons/mobiledata-off.svg?react');
  }),
  mobiledata: lazy(() => {
    return import('@tabler/icons/mobiledata.svg?react');
  }),
  moneybag: lazy(() => {
    return import('@tabler/icons/moneybag.svg?react');
  }),
  'mood-angry': lazy(() => {
    return import('@tabler/icons/mood-angry.svg?react');
  }),
  'mood-annoyed-2': lazy(() => {
    return import('@tabler/icons/mood-annoyed-2.svg?react');
  }),
  'mood-annoyed': lazy(() => {
    return import('@tabler/icons/mood-annoyed.svg?react');
  }),
  'mood-boy': lazy(() => {
    return import('@tabler/icons/mood-boy.svg?react');
  }),
  'mood-check': lazy(() => {
    return import('@tabler/icons/mood-check.svg?react');
  }),
  'mood-cog': lazy(() => {
    return import('@tabler/icons/mood-cog.svg?react');
  }),
  'mood-confuzed-filled': lazy(() => {
    return import('@tabler/icons/mood-confuzed-filled.svg?react');
  }),
  'mood-confuzed': lazy(() => {
    return import('@tabler/icons/mood-confuzed.svg?react');
  }),
  'mood-crazy-happy': lazy(() => {
    return import('@tabler/icons/mood-crazy-happy.svg?react');
  }),
  'mood-cry': lazy(() => {
    return import('@tabler/icons/mood-cry.svg?react');
  }),
  'mood-dollar': lazy(() => {
    return import('@tabler/icons/mood-dollar.svg?react');
  }),
  'mood-edit': lazy(() => {
    return import('@tabler/icons/mood-edit.svg?react');
  }),
  'mood-empty-filled': lazy(() => {
    return import('@tabler/icons/mood-empty-filled.svg?react');
  }),
  'mood-empty': lazy(() => {
    return import('@tabler/icons/mood-empty.svg?react');
  }),
  'mood-happy-filled': lazy(() => {
    return import('@tabler/icons/mood-happy-filled.svg?react');
  }),
  'mood-happy': lazy(() => {
    return import('@tabler/icons/mood-happy.svg?react');
  }),
  'mood-heart': lazy(() => {
    return import('@tabler/icons/mood-heart.svg?react');
  }),
  'mood-kid-filled': lazy(() => {
    return import('@tabler/icons/mood-kid-filled.svg?react');
  }),
  'mood-kid': lazy(() => {
    return import('@tabler/icons/mood-kid.svg?react');
  }),
  'mood-look-left': lazy(() => {
    return import('@tabler/icons/mood-look-left.svg?react');
  }),
  'mood-look-right': lazy(() => {
    return import('@tabler/icons/mood-look-right.svg?react');
  }),
  'mood-minus': lazy(() => {
    return import('@tabler/icons/mood-minus.svg?react');
  }),
  'mood-nerd': lazy(() => {
    return import('@tabler/icons/mood-nerd.svg?react');
  }),
  'mood-nervous': lazy(() => {
    return import('@tabler/icons/mood-nervous.svg?react');
  }),
  'mood-neutral-filled': lazy(() => {
    return import('@tabler/icons/mood-neutral-filled.svg?react');
  }),
  'mood-neutral': lazy(() => {
    return import('@tabler/icons/mood-neutral.svg?react');
  }),
  'mood-off': lazy(() => {
    return import('@tabler/icons/mood-off.svg?react');
  }),
  'mood-pin': lazy(() => {
    return import('@tabler/icons/mood-pin.svg?react');
  }),
  'mood-plus': lazy(() => {
    return import('@tabler/icons/mood-plus.svg?react');
  }),
  'mood-sad-2': lazy(() => {
    return import('@tabler/icons/mood-sad-2.svg?react');
  }),
  'mood-sad-dizzy': lazy(() => {
    return import('@tabler/icons/mood-sad-dizzy.svg?react');
  }),
  'mood-sad-filled': lazy(() => {
    return import('@tabler/icons/mood-sad-filled.svg?react');
  }),
  'mood-sad-squint': lazy(() => {
    return import('@tabler/icons/mood-sad-squint.svg?react');
  }),
  'mood-sad': lazy(() => {
    return import('@tabler/icons/mood-sad.svg?react');
  }),
  'mood-search': lazy(() => {
    return import('@tabler/icons/mood-search.svg?react');
  }),
  'mood-share': lazy(() => {
    return import('@tabler/icons/mood-share.svg?react');
  }),
  'mood-sick': lazy(() => {
    return import('@tabler/icons/mood-sick.svg?react');
  }),
  'mood-silence': lazy(() => {
    return import('@tabler/icons/mood-silence.svg?react');
  }),
  'mood-sing': lazy(() => {
    return import('@tabler/icons/mood-sing.svg?react');
  }),
  'mood-smile-beam': lazy(() => {
    return import('@tabler/icons/mood-smile-beam.svg?react');
  }),
  'mood-smile-dizzy': lazy(() => {
    return import('@tabler/icons/mood-smile-dizzy.svg?react');
  }),
  'mood-smile-filled': lazy(() => {
    return import('@tabler/icons/mood-smile-filled.svg?react');
  }),
  'mood-smile': lazy(() => {
    return import('@tabler/icons/mood-smile.svg?react');
  }),
  'mood-suprised': lazy(() => {
    return import('@tabler/icons/mood-suprised.svg?react');
  }),
  'mood-tongue-wink-2': lazy(() => {
    return import('@tabler/icons/mood-tongue-wink-2.svg?react');
  }),
  'mood-tongue-wink': lazy(() => {
    return import('@tabler/icons/mood-tongue-wink.svg?react');
  }),
  'mood-tongue': lazy(() => {
    return import('@tabler/icons/mood-tongue.svg?react');
  }),
  'mood-unamused': lazy(() => {
    return import('@tabler/icons/mood-unamused.svg?react');
  }),
  'mood-up': lazy(() => {
    return import('@tabler/icons/mood-up.svg?react');
  }),
  'mood-wink-2': lazy(() => {
    return import('@tabler/icons/mood-wink-2.svg?react');
  }),
  'mood-wink': lazy(() => {
    return import('@tabler/icons/mood-wink.svg?react');
  }),
  'mood-wrrr': lazy(() => {
    return import('@tabler/icons/mood-wrrr.svg?react');
  }),
  'mood-x': lazy(() => {
    return import('@tabler/icons/mood-x.svg?react');
  }),
  'mood-xd': lazy(() => {
    return import('@tabler/icons/mood-xd.svg?react');
  }),
  'moon-2': lazy(() => {
    return import('@tabler/icons/moon-2.svg?react');
  }),
  'moon-filled': lazy(() => {
    return import('@tabler/icons/moon-filled.svg?react');
  }),
  'moon-off': lazy(() => {
    return import('@tabler/icons/moon-off.svg?react');
  }),
  'moon-stars': lazy(() => {
    return import('@tabler/icons/moon-stars.svg?react');
  }),
  moon: lazy(() => {
    return import('@tabler/icons/moon.svg?react');
  }),
  moped: lazy(() => {
    return import('@tabler/icons/moped.svg?react');
  }),
  motorbike: lazy(() => {
    return import('@tabler/icons/motorbike.svg?react');
  }),
  'mountain-off': lazy(() => {
    return import('@tabler/icons/mountain-off.svg?react');
  }),
  mountain: lazy(() => {
    return import('@tabler/icons/mountain.svg?react');
  }),
  'mouse-2': lazy(() => {
    return import('@tabler/icons/mouse-2.svg?react');
  }),
  'mouse-filled': lazy(() => {
    return import('@tabler/icons/mouse-filled.svg?react');
  }),
  'mouse-off': lazy(() => {
    return import('@tabler/icons/mouse-off.svg?react');
  }),
  mouse: lazy(() => {
    return import('@tabler/icons/mouse.svg?react');
  }),
  moustache: lazy(() => {
    return import('@tabler/icons/moustache.svg?react');
  }),
  'movie-off': lazy(() => {
    return import('@tabler/icons/movie-off.svg?react');
  }),
  movie: lazy(() => {
    return import('@tabler/icons/movie.svg?react');
  }),
  'mug-off': lazy(() => {
    return import('@tabler/icons/mug-off.svg?react');
  }),
  mug: lazy(() => {
    return import('@tabler/icons/mug.svg?react');
  }),
  'multiplier-0-5x': lazy(() => {
    return import('@tabler/icons/multiplier-0-5x.svg?react');
  }),
  'multiplier-1-5x': lazy(() => {
    return import('@tabler/icons/multiplier-1-5x.svg?react');
  }),
  'multiplier-1x': lazy(() => {
    return import('@tabler/icons/multiplier-1x.svg?react');
  }),
  'multiplier-2x': lazy(() => {
    return import('@tabler/icons/multiplier-2x.svg?react');
  }),
  'mushroom-filled': lazy(() => {
    return import('@tabler/icons/mushroom-filled.svg?react');
  }),
  'mushroom-off': lazy(() => {
    return import('@tabler/icons/mushroom-off.svg?react');
  }),
  mushroom: lazy(() => {
    return import('@tabler/icons/mushroom.svg?react');
  }),
  'music-bolt': lazy(() => {
    return import('@tabler/icons/music-bolt.svg?react');
  }),
  'music-cancel': lazy(() => {
    return import('@tabler/icons/music-cancel.svg?react');
  }),
  'music-check': lazy(() => {
    return import('@tabler/icons/music-check.svg?react');
  }),
  'music-code': lazy(() => {
    return import('@tabler/icons/music-code.svg?react');
  }),
  'music-cog': lazy(() => {
    return import('@tabler/icons/music-cog.svg?react');
  }),
  'music-discount': lazy(() => {
    return import('@tabler/icons/music-discount.svg?react');
  }),
  'music-dollar': lazy(() => {
    return import('@tabler/icons/music-dollar.svg?react');
  }),
  'music-down': lazy(() => {
    return import('@tabler/icons/music-down.svg?react');
  }),
  'music-exclamation': lazy(() => {
    return import('@tabler/icons/music-exclamation.svg?react');
  }),
  'music-heart': lazy(() => {
    return import('@tabler/icons/music-heart.svg?react');
  }),
  'music-minus': lazy(() => {
    return import('@tabler/icons/music-minus.svg?react');
  }),
  'music-off': lazy(() => {
    return import('@tabler/icons/music-off.svg?react');
  }),
  'music-pause': lazy(() => {
    return import('@tabler/icons/music-pause.svg?react');
  }),
  'music-pin': lazy(() => {
    return import('@tabler/icons/music-pin.svg?react');
  }),
  'music-plus': lazy(() => {
    return import('@tabler/icons/music-plus.svg?react');
  }),
  'music-question': lazy(() => {
    return import('@tabler/icons/music-question.svg?react');
  }),
  'music-search': lazy(() => {
    return import('@tabler/icons/music-search.svg?react');
  }),
  'music-share': lazy(() => {
    return import('@tabler/icons/music-share.svg?react');
  }),
  'music-star': lazy(() => {
    return import('@tabler/icons/music-star.svg?react');
  }),
  'music-up': lazy(() => {
    return import('@tabler/icons/music-up.svg?react');
  }),
  'music-x': lazy(() => {
    return import('@tabler/icons/music-x.svg?react');
  }),
  music: lazy(() => {
    return import('@tabler/icons/music.svg?react');
  }),
  'navigation-bolt': lazy(() => {
    return import('@tabler/icons/navigation-bolt.svg?react');
  }),
  'navigation-cancel': lazy(() => {
    return import('@tabler/icons/navigation-cancel.svg?react');
  }),
  'navigation-check': lazy(() => {
    return import('@tabler/icons/navigation-check.svg?react');
  }),
  'navigation-code': lazy(() => {
    return import('@tabler/icons/navigation-code.svg?react');
  }),
  'navigation-cog': lazy(() => {
    return import('@tabler/icons/navigation-cog.svg?react');
  }),
  'navigation-discount': lazy(() => {
    return import('@tabler/icons/navigation-discount.svg?react');
  }),
  'navigation-dollar': lazy(() => {
    return import('@tabler/icons/navigation-dollar.svg?react');
  }),
  'navigation-down': lazy(() => {
    return import('@tabler/icons/navigation-down.svg?react');
  }),
  'navigation-east': lazy(() => {
    return import('@tabler/icons/navigation-east.svg?react');
  }),
  'navigation-exclamation': lazy(() => {
    return import('@tabler/icons/navigation-exclamation.svg?react');
  }),
  'navigation-filled': lazy(() => {
    return import('@tabler/icons/navigation-filled.svg?react');
  }),
  'navigation-heart': lazy(() => {
    return import('@tabler/icons/navigation-heart.svg?react');
  }),
  'navigation-minus': lazy(() => {
    return import('@tabler/icons/navigation-minus.svg?react');
  }),
  'navigation-north': lazy(() => {
    return import('@tabler/icons/navigation-north.svg?react');
  }),
  'navigation-off': lazy(() => {
    return import('@tabler/icons/navigation-off.svg?react');
  }),
  'navigation-pause': lazy(() => {
    return import('@tabler/icons/navigation-pause.svg?react');
  }),
  'navigation-pin': lazy(() => {
    return import('@tabler/icons/navigation-pin.svg?react');
  }),
  'navigation-plus': lazy(() => {
    return import('@tabler/icons/navigation-plus.svg?react');
  }),
  'navigation-question': lazy(() => {
    return import('@tabler/icons/navigation-question.svg?react');
  }),
  'navigation-search': lazy(() => {
    return import('@tabler/icons/navigation-search.svg?react');
  }),
  'navigation-share': lazy(() => {
    return import('@tabler/icons/navigation-share.svg?react');
  }),
  'navigation-south': lazy(() => {
    return import('@tabler/icons/navigation-south.svg?react');
  }),
  'navigation-star': lazy(() => {
    return import('@tabler/icons/navigation-star.svg?react');
  }),
  'navigation-top': lazy(() => {
    return import('@tabler/icons/navigation-top.svg?react');
  }),
  'navigation-up': lazy(() => {
    return import('@tabler/icons/navigation-up.svg?react');
  }),
  'navigation-west': lazy(() => {
    return import('@tabler/icons/navigation-west.svg?react');
  }),
  'navigation-x': lazy(() => {
    return import('@tabler/icons/navigation-x.svg?react');
  }),
  navigation: lazy(() => {
    return import('@tabler/icons/navigation.svg?react');
  }),
  'needle-thread': lazy(() => {
    return import('@tabler/icons/needle-thread.svg?react');
  }),
  needle: lazy(() => {
    return import('@tabler/icons/needle.svg?react');
  }),
  'network-off': lazy(() => {
    return import('@tabler/icons/network-off.svg?react');
  }),
  network: lazy(() => {
    return import('@tabler/icons/network.svg?react');
  }),
  'new-section': lazy(() => {
    return import('@tabler/icons/new-section.svg?react');
  }),
  'news-off': lazy(() => {
    return import('@tabler/icons/news-off.svg?react');
  }),
  news: lazy(() => {
    return import('@tabler/icons/news.svg?react');
  }),
  'nfc-off': lazy(() => {
    return import('@tabler/icons/nfc-off.svg?react');
  }),
  nfc: lazy(() => {
    return import('@tabler/icons/nfc.svg?react');
  }),
  'no-copyright': lazy(() => {
    return import('@tabler/icons/no-copyright.svg?react');
  }),
  'no-creative-commons': lazy(() => {
    return import('@tabler/icons/no-creative-commons.svg?react');
  }),
  'no-derivatives': lazy(() => {
    return import('@tabler/icons/no-derivatives.svg?react');
  }),
  'north-star': lazy(() => {
    return import('@tabler/icons/north-star.svg?react');
  }),
  'note-off': lazy(() => {
    return import('@tabler/icons/note-off.svg?react');
  }),
  note: lazy(() => {
    return import('@tabler/icons/note.svg?react');
  }),
  'notebook-off': lazy(() => {
    return import('@tabler/icons/notebook-off.svg?react');
  }),
  notebook: lazy(() => {
    return import('@tabler/icons/notebook.svg?react');
  }),
  'notes-off': lazy(() => {
    return import('@tabler/icons/notes-off.svg?react');
  }),
  notes: lazy(() => {
    return import('@tabler/icons/notes.svg?react');
  }),
  'notification-off': lazy(() => {
    return import('@tabler/icons/notification-off.svg?react');
  }),
  notification: lazy(() => {
    return import('@tabler/icons/notification.svg?react');
  }),
  'number-0-small': lazy(() => {
    return import('@tabler/icons/number-0-small.svg?react');
  }),
  'number-0': lazy(() => {
    return import('@tabler/icons/number-0.svg?react');
  }),
  'number-1-small': lazy(() => {
    return import('@tabler/icons/number-1-small.svg?react');
  }),
  'number-1': lazy(() => {
    return import('@tabler/icons/number-1.svg?react');
  }),
  'number-10-small': lazy(() => {
    return import('@tabler/icons/number-10-small.svg?react');
  }),
  'number-11-small': lazy(() => {
    return import('@tabler/icons/number-11-small.svg?react');
  }),
  'number-12-small': lazy(() => {
    return import('@tabler/icons/number-12-small.svg?react');
  }),
  'number-13-small': lazy(() => {
    return import('@tabler/icons/number-13-small.svg?react');
  }),
  'number-14-small': lazy(() => {
    return import('@tabler/icons/number-14-small.svg?react');
  }),
  'number-15-small': lazy(() => {
    return import('@tabler/icons/number-15-small.svg?react');
  }),
  'number-16-small': lazy(() => {
    return import('@tabler/icons/number-16-small.svg?react');
  }),
  'number-17-small': lazy(() => {
    return import('@tabler/icons/number-17-small.svg?react');
  }),
  'number-18-small': lazy(() => {
    return import('@tabler/icons/number-18-small.svg?react');
  }),
  'number-19-small': lazy(() => {
    return import('@tabler/icons/number-19-small.svg?react');
  }),
  'number-2-small': lazy(() => {
    return import('@tabler/icons/number-2-small.svg?react');
  }),
  'number-2': lazy(() => {
    return import('@tabler/icons/number-2.svg?react');
  }),
  'number-20-small': lazy(() => {
    return import('@tabler/icons/number-20-small.svg?react');
  }),
  'number-21-small': lazy(() => {
    return import('@tabler/icons/number-21-small.svg?react');
  }),
  'number-22-small': lazy(() => {
    return import('@tabler/icons/number-22-small.svg?react');
  }),
  'number-23-small': lazy(() => {
    return import('@tabler/icons/number-23-small.svg?react');
  }),
  'number-24-small': lazy(() => {
    return import('@tabler/icons/number-24-small.svg?react');
  }),
  'number-25-small': lazy(() => {
    return import('@tabler/icons/number-25-small.svg?react');
  }),
  'number-26-small': lazy(() => {
    return import('@tabler/icons/number-26-small.svg?react');
  }),
  'number-27-small': lazy(() => {
    return import('@tabler/icons/number-27-small.svg?react');
  }),
  'number-28-small': lazy(() => {
    return import('@tabler/icons/number-28-small.svg?react');
  }),
  'number-29-small': lazy(() => {
    return import('@tabler/icons/number-29-small.svg?react');
  }),
  'number-3-small': lazy(() => {
    return import('@tabler/icons/number-3-small.svg?react');
  }),
  'number-3': lazy(() => {
    return import('@tabler/icons/number-3.svg?react');
  }),
  'number-4-small': lazy(() => {
    return import('@tabler/icons/number-4-small.svg?react');
  }),
  'number-4': lazy(() => {
    return import('@tabler/icons/number-4.svg?react');
  }),
  'number-5-small': lazy(() => {
    return import('@tabler/icons/number-5-small.svg?react');
  }),
  'number-5': lazy(() => {
    return import('@tabler/icons/number-5.svg?react');
  }),
  'number-6-small': lazy(() => {
    return import('@tabler/icons/number-6-small.svg?react');
  }),
  'number-6': lazy(() => {
    return import('@tabler/icons/number-6.svg?react');
  }),
  'number-7-small': lazy(() => {
    return import('@tabler/icons/number-7-small.svg?react');
  }),
  'number-7': lazy(() => {
    return import('@tabler/icons/number-7.svg?react');
  }),
  'number-8-small': lazy(() => {
    return import('@tabler/icons/number-8-small.svg?react');
  }),
  'number-8': lazy(() => {
    return import('@tabler/icons/number-8.svg?react');
  }),
  'number-9-small': lazy(() => {
    return import('@tabler/icons/number-9-small.svg?react');
  }),
  'number-9': lazy(() => {
    return import('@tabler/icons/number-9.svg?react');
  }),
  number: lazy(() => {
    return import('@tabler/icons/number.svg?react');
  }),
  numbers: lazy(() => {
    return import('@tabler/icons/numbers.svg?react');
  }),
  nurse: lazy(() => {
    return import('@tabler/icons/nurse.svg?react');
  }),
  nut: lazy(() => {
    return import('@tabler/icons/nut.svg?react');
  }),
  'octagon-filled': lazy(() => {
    return import('@tabler/icons/octagon-filled.svg?react');
  }),
  'octagon-minus-2': lazy(() => {
    return import('@tabler/icons/octagon-minus-2.svg?react');
  }),
  'octagon-minus': lazy(() => {
    return import('@tabler/icons/octagon-minus.svg?react');
  }),
  'octagon-off': lazy(() => {
    return import('@tabler/icons/octagon-off.svg?react');
  }),
  'octagon-plus-2': lazy(() => {
    return import('@tabler/icons/octagon-plus-2.svg?react');
  }),
  'octagon-plus': lazy(() => {
    return import('@tabler/icons/octagon-plus.svg?react');
  }),
  octagon: lazy(() => {
    return import('@tabler/icons/octagon.svg?react');
  }),
  'octahedron-off': lazy(() => {
    return import('@tabler/icons/octahedron-off.svg?react');
  }),
  'octahedron-plus': lazy(() => {
    return import('@tabler/icons/octahedron-plus.svg?react');
  }),
  octahedron: lazy(() => {
    return import('@tabler/icons/octahedron.svg?react');
  }),
  old: lazy(() => {
    return import('@tabler/icons/old.svg?react');
  }),
  'olympics-off': lazy(() => {
    return import('@tabler/icons/olympics-off.svg?react');
  }),
  olympics: lazy(() => {
    return import('@tabler/icons/olympics.svg?react');
  }),
  om: lazy(() => {
    return import('@tabler/icons/om.svg?react');
  }),
  omega: lazy(() => {
    return import('@tabler/icons/omega.svg?react');
  }),
  outbound: lazy(() => {
    return import('@tabler/icons/outbound.svg?react');
  }),
  outlet: lazy(() => {
    return import('@tabler/icons/outlet.svg?react');
  }),
  'oval-filled': lazy(() => {
    return import('@tabler/icons/oval-filled.svg?react');
  }),
  'oval-vertical-filled': lazy(() => {
    return import('@tabler/icons/oval-vertical-filled.svg?react');
  }),
  'oval-vertical': lazy(() => {
    return import('@tabler/icons/oval-vertical.svg?react');
  }),
  oval: lazy(() => {
    return import('@tabler/icons/oval.svg?react');
  }),
  overline: lazy(() => {
    return import('@tabler/icons/overline.svg?react');
  }),
  'package-export': lazy(() => {
    return import('@tabler/icons/package-export.svg?react');
  }),
  'package-import': lazy(() => {
    return import('@tabler/icons/package-import.svg?react');
  }),
  'package-off': lazy(() => {
    return import('@tabler/icons/package-off.svg?react');
  }),
  package: lazy(() => {
    return import('@tabler/icons/package.svg?react');
  }),
  packages: lazy(() => {
    return import('@tabler/icons/packages.svg?react');
  }),
  pacman: lazy(() => {
    return import('@tabler/icons/pacman.svg?react');
  }),
  'page-break': lazy(() => {
    return import('@tabler/icons/page-break.svg?react');
  }),
  'paint-filled': lazy(() => {
    return import('@tabler/icons/paint-filled.svg?react');
  }),
  'paint-off': lazy(() => {
    return import('@tabler/icons/paint-off.svg?react');
  }),
  paint: lazy(() => {
    return import('@tabler/icons/paint.svg?react');
  }),
  'palette-off': lazy(() => {
    return import('@tabler/icons/palette-off.svg?react');
  }),
  palette: lazy(() => {
    return import('@tabler/icons/palette.svg?react');
  }),
  'panorama-horizontal-off': lazy(() => {
    return import('@tabler/icons/panorama-horizontal-off.svg?react');
  }),
  'panorama-horizontal': lazy(() => {
    return import('@tabler/icons/panorama-horizontal.svg?react');
  }),
  'panorama-vertical-off': lazy(() => {
    return import('@tabler/icons/panorama-vertical-off.svg?react');
  }),
  'panorama-vertical': lazy(() => {
    return import('@tabler/icons/panorama-vertical.svg?react');
  }),
  'paper-bag-off': lazy(() => {
    return import('@tabler/icons/paper-bag-off.svg?react');
  }),
  'paper-bag': lazy(() => {
    return import('@tabler/icons/paper-bag.svg?react');
  }),
  paperclip: lazy(() => {
    return import('@tabler/icons/paperclip.svg?react');
  }),
  'parachute-off': lazy(() => {
    return import('@tabler/icons/parachute-off.svg?react');
  }),
  parachute: lazy(() => {
    return import('@tabler/icons/parachute.svg?react');
  }),
  'parentheses-off': lazy(() => {
    return import('@tabler/icons/parentheses-off.svg?react');
  }),
  parentheses: lazy(() => {
    return import('@tabler/icons/parentheses.svg?react');
  }),
  'parking-off': lazy(() => {
    return import('@tabler/icons/parking-off.svg?react');
  }),
  parking: lazy(() => {
    return import('@tabler/icons/parking.svg?react');
  }),
  'password-fingerprint': lazy(() => {
    return import('@tabler/icons/password-fingerprint.svg?react');
  }),
  'password-mobile-phone': lazy(() => {
    return import('@tabler/icons/password-mobile-phone.svg?react');
  }),
  'password-user': lazy(() => {
    return import('@tabler/icons/password-user.svg?react');
  }),
  password: lazy(() => {
    return import('@tabler/icons/password.svg?react');
  }),
  'paw-filled': lazy(() => {
    return import('@tabler/icons/paw-filled.svg?react');
  }),
  'paw-off': lazy(() => {
    return import('@tabler/icons/paw-off.svg?react');
  }),
  paw: lazy(() => {
    return import('@tabler/icons/paw.svg?react');
  }),
  pdf: lazy(() => {
    return import('@tabler/icons/pdf.svg?react');
  }),
  peace: lazy(() => {
    return import('@tabler/icons/peace.svg?react');
  }),
  'pencil-bolt': lazy(() => {
    return import('@tabler/icons/pencil-bolt.svg?react');
  }),
  'pencil-cancel': lazy(() => {
    return import('@tabler/icons/pencil-cancel.svg?react');
  }),
  'pencil-check': lazy(() => {
    return import('@tabler/icons/pencil-check.svg?react');
  }),
  'pencil-code': lazy(() => {
    return import('@tabler/icons/pencil-code.svg?react');
  }),
  'pencil-cog': lazy(() => {
    return import('@tabler/icons/pencil-cog.svg?react');
  }),
  'pencil-discount': lazy(() => {
    return import('@tabler/icons/pencil-discount.svg?react');
  }),
  'pencil-dollar': lazy(() => {
    return import('@tabler/icons/pencil-dollar.svg?react');
  }),
  'pencil-down': lazy(() => {
    return import('@tabler/icons/pencil-down.svg?react');
  }),
  'pencil-exclamation': lazy(() => {
    return import('@tabler/icons/pencil-exclamation.svg?react');
  }),
  'pencil-heart': lazy(() => {
    return import('@tabler/icons/pencil-heart.svg?react');
  }),
  'pencil-minus': lazy(() => {
    return import('@tabler/icons/pencil-minus.svg?react');
  }),
  'pencil-off': lazy(() => {
    return import('@tabler/icons/pencil-off.svg?react');
  }),
  'pencil-pause': lazy(() => {
    return import('@tabler/icons/pencil-pause.svg?react');
  }),
  'pencil-pin': lazy(() => {
    return import('@tabler/icons/pencil-pin.svg?react');
  }),
  'pencil-plus': lazy(() => {
    return import('@tabler/icons/pencil-plus.svg?react');
  }),
  'pencil-question': lazy(() => {
    return import('@tabler/icons/pencil-question.svg?react');
  }),
  'pencil-search': lazy(() => {
    return import('@tabler/icons/pencil-search.svg?react');
  }),
  'pencil-share': lazy(() => {
    return import('@tabler/icons/pencil-share.svg?react');
  }),
  'pencil-star': lazy(() => {
    return import('@tabler/icons/pencil-star.svg?react');
  }),
  'pencil-up': lazy(() => {
    return import('@tabler/icons/pencil-up.svg?react');
  }),
  'pencil-x': lazy(() => {
    return import('@tabler/icons/pencil-x.svg?react');
  }),
  pencil: lazy(() => {
    return import('@tabler/icons/pencil.svg?react');
  }),
  'pennant-2-filled': lazy(() => {
    return import('@tabler/icons/pennant-2-filled.svg?react');
  }),
  'pennant-2': lazy(() => {
    return import('@tabler/icons/pennant-2.svg?react');
  }),
  'pennant-filled': lazy(() => {
    return import('@tabler/icons/pennant-filled.svg?react');
  }),
  'pennant-off': lazy(() => {
    return import('@tabler/icons/pennant-off.svg?react');
  }),
  pennant: lazy(() => {
    return import('@tabler/icons/pennant.svg?react');
  }),
  'pentagon-filled': lazy(() => {
    return import('@tabler/icons/pentagon-filled.svg?react');
  }),
  'pentagon-number-0': lazy(() => {
    return import('@tabler/icons/pentagon-number-0.svg?react');
  }),
  'pentagon-number-1': lazy(() => {
    return import('@tabler/icons/pentagon-number-1.svg?react');
  }),
  'pentagon-number-2': lazy(() => {
    return import('@tabler/icons/pentagon-number-2.svg?react');
  }),
  'pentagon-number-3': lazy(() => {
    return import('@tabler/icons/pentagon-number-3.svg?react');
  }),
  'pentagon-number-4': lazy(() => {
    return import('@tabler/icons/pentagon-number-4.svg?react');
  }),
  'pentagon-number-5': lazy(() => {
    return import('@tabler/icons/pentagon-number-5.svg?react');
  }),
  'pentagon-number-6': lazy(() => {
    return import('@tabler/icons/pentagon-number-6.svg?react');
  }),
  'pentagon-number-7': lazy(() => {
    return import('@tabler/icons/pentagon-number-7.svg?react');
  }),
  'pentagon-number-8': lazy(() => {
    return import('@tabler/icons/pentagon-number-8.svg?react');
  }),
  'pentagon-number-9': lazy(() => {
    return import('@tabler/icons/pentagon-number-9.svg?react');
  }),
  'pentagon-off': lazy(() => {
    return import('@tabler/icons/pentagon-off.svg?react');
  }),
  'pentagon-plus': lazy(() => {
    return import('@tabler/icons/pentagon-plus.svg?react');
  }),
  'pentagon-x': lazy(() => {
    return import('@tabler/icons/pentagon-x.svg?react');
  }),
  pentagon: lazy(() => {
    return import('@tabler/icons/pentagon.svg?react');
  }),
  pentagram: lazy(() => {
    return import('@tabler/icons/pentagram.svg?react');
  }),
  'pepper-off': lazy(() => {
    return import('@tabler/icons/pepper-off.svg?react');
  }),
  pepper: lazy(() => {
    return import('@tabler/icons/pepper.svg?react');
  }),
  percentage: lazy(() => {
    return import('@tabler/icons/percentage.svg?react');
  }),
  perfume: lazy(() => {
    return import('@tabler/icons/perfume.svg?react');
  }),
  'perspective-off': lazy(() => {
    return import('@tabler/icons/perspective-off.svg?react');
  }),
  perspective: lazy(() => {
    return import('@tabler/icons/perspective.svg?react');
  }),
  'phone-call': lazy(() => {
    return import('@tabler/icons/phone-call.svg?react');
  }),
  'phone-calling': lazy(() => {
    return import('@tabler/icons/phone-calling.svg?react');
  }),
  'phone-check': lazy(() => {
    return import('@tabler/icons/phone-check.svg?react');
  }),
  'phone-filled': lazy(() => {
    return import('@tabler/icons/phone-filled.svg?react');
  }),
  'phone-incoming': lazy(() => {
    return import('@tabler/icons/phone-incoming.svg?react');
  }),
  'phone-off': lazy(() => {
    return import('@tabler/icons/phone-off.svg?react');
  }),
  'phone-outgoing': lazy(() => {
    return import('@tabler/icons/phone-outgoing.svg?react');
  }),
  'phone-pause': lazy(() => {
    return import('@tabler/icons/phone-pause.svg?react');
  }),
  'phone-plus': lazy(() => {
    return import('@tabler/icons/phone-plus.svg?react');
  }),
  'phone-x': lazy(() => {
    return import('@tabler/icons/phone-x.svg?react');
  }),
  phone: lazy(() => {
    return import('@tabler/icons/phone.svg?react');
  }),
  'photo-ai': lazy(() => {
    return import('@tabler/icons/photo-ai.svg?react');
  }),
  'photo-bolt': lazy(() => {
    return import('@tabler/icons/photo-bolt.svg?react');
  }),
  'photo-cancel': lazy(() => {
    return import('@tabler/icons/photo-cancel.svg?react');
  }),
  'photo-check': lazy(() => {
    return import('@tabler/icons/photo-check.svg?react');
  }),
  'photo-circle-minus': lazy(() => {
    return import('@tabler/icons/photo-circle-minus.svg?react');
  }),
  'photo-circle-plus': lazy(() => {
    return import('@tabler/icons/photo-circle-plus.svg?react');
  }),
  'photo-circle': lazy(() => {
    return import('@tabler/icons/photo-circle.svg?react');
  }),
  'photo-code': lazy(() => {
    return import('@tabler/icons/photo-code.svg?react');
  }),
  'photo-cog': lazy(() => {
    return import('@tabler/icons/photo-cog.svg?react');
  }),
  'photo-dollar': lazy(() => {
    return import('@tabler/icons/photo-dollar.svg?react');
  }),
  'photo-down': lazy(() => {
    return import('@tabler/icons/photo-down.svg?react');
  }),
  'photo-edit': lazy(() => {
    return import('@tabler/icons/photo-edit.svg?react');
  }),
  'photo-exclamation': lazy(() => {
    return import('@tabler/icons/photo-exclamation.svg?react');
  }),
  'photo-filled': lazy(() => {
    return import('@tabler/icons/photo-filled.svg?react');
  }),
  'photo-heart': lazy(() => {
    return import('@tabler/icons/photo-heart.svg?react');
  }),
  'photo-hexagon': lazy(() => {
    return import('@tabler/icons/photo-hexagon.svg?react');
  }),
  'photo-minus': lazy(() => {
    return import('@tabler/icons/photo-minus.svg?react');
  }),
  'photo-off': lazy(() => {
    return import('@tabler/icons/photo-off.svg?react');
  }),
  'photo-pause': lazy(() => {
    return import('@tabler/icons/photo-pause.svg?react');
  }),
  'photo-pentagon': lazy(() => {
    return import('@tabler/icons/photo-pentagon.svg?react');
  }),
  'photo-pin': lazy(() => {
    return import('@tabler/icons/photo-pin.svg?react');
  }),
  'photo-plus': lazy(() => {
    return import('@tabler/icons/photo-plus.svg?react');
  }),
  'photo-question': lazy(() => {
    return import('@tabler/icons/photo-question.svg?react');
  }),
  'photo-scan': lazy(() => {
    return import('@tabler/icons/photo-scan.svg?react');
  }),
  'photo-search': lazy(() => {
    return import('@tabler/icons/photo-search.svg?react');
  }),
  'photo-sensor-2': lazy(() => {
    return import('@tabler/icons/photo-sensor-2.svg?react');
  }),
  'photo-sensor-3': lazy(() => {
    return import('@tabler/icons/photo-sensor-3.svg?react');
  }),
  'photo-sensor': lazy(() => {
    return import('@tabler/icons/photo-sensor.svg?react');
  }),
  'photo-share': lazy(() => {
    return import('@tabler/icons/photo-share.svg?react');
  }),
  'photo-shield': lazy(() => {
    return import('@tabler/icons/photo-shield.svg?react');
  }),
  'photo-square-rounded': lazy(() => {
    return import('@tabler/icons/photo-square-rounded.svg?react');
  }),
  'photo-star': lazy(() => {
    return import('@tabler/icons/photo-star.svg?react');
  }),
  'photo-up': lazy(() => {
    return import('@tabler/icons/photo-up.svg?react');
  }),
  'photo-video': lazy(() => {
    return import('@tabler/icons/photo-video.svg?react');
  }),
  'photo-x': lazy(() => {
    return import('@tabler/icons/photo-x.svg?react');
  }),
  photo: lazy(() => {
    return import('@tabler/icons/photo.svg?react');
  }),
  physotherapist: lazy(() => {
    return import('@tabler/icons/physotherapist.svg?react');
  }),
  piano: lazy(() => {
    return import('@tabler/icons/piano.svg?react');
  }),
  pick: lazy(() => {
    return import('@tabler/icons/pick.svg?react');
  }),
  'picture-in-picture-off': lazy(() => {
    return import('@tabler/icons/picture-in-picture-off.svg?react');
  }),
  'picture-in-picture-on': lazy(() => {
    return import('@tabler/icons/picture-in-picture-on.svg?react');
  }),
  'picture-in-picture-top': lazy(() => {
    return import('@tabler/icons/picture-in-picture-top.svg?react');
  }),
  'picture-in-picture': lazy(() => {
    return import('@tabler/icons/picture-in-picture.svg?react');
  }),
  'pig-money': lazy(() => {
    return import('@tabler/icons/pig-money.svg?react');
  }),
  'pig-off': lazy(() => {
    return import('@tabler/icons/pig-off.svg?react');
  }),
  pig: lazy(() => {
    return import('@tabler/icons/pig.svg?react');
  }),
  pilcrow: lazy(() => {
    return import('@tabler/icons/pilcrow.svg?react');
  }),
  'pill-off': lazy(() => {
    return import('@tabler/icons/pill-off.svg?react');
  }),
  pill: lazy(() => {
    return import('@tabler/icons/pill.svg?react');
  }),
  pills: lazy(() => {
    return import('@tabler/icons/pills.svg?react');
  }),
  'pin-filled': lazy(() => {
    return import('@tabler/icons/pin-filled.svg?react');
  }),
  pin: lazy(() => {
    return import('@tabler/icons/pin.svg?react');
  }),
  'ping-pong': lazy(() => {
    return import('@tabler/icons/ping-pong.svg?react');
  }),
  'pinned-filled': lazy(() => {
    return import('@tabler/icons/pinned-filled.svg?react');
  }),
  'pinned-off': lazy(() => {
    return import('@tabler/icons/pinned-off.svg?react');
  }),
  pinned: lazy(() => {
    return import('@tabler/icons/pinned.svg?react');
  }),
  'pizza-off': lazy(() => {
    return import('@tabler/icons/pizza-off.svg?react');
  }),
  pizza: lazy(() => {
    return import('@tabler/icons/pizza.svg?react');
  }),
  placeholder: lazy(() => {
    return import('@tabler/icons/placeholder.svg?react');
  }),
  'plane-arrival': lazy(() => {
    return import('@tabler/icons/plane-arrival.svg?react');
  }),
  'plane-departure': lazy(() => {
    return import('@tabler/icons/plane-departure.svg?react');
  }),
  'plane-inflight': lazy(() => {
    return import('@tabler/icons/plane-inflight.svg?react');
  }),
  'plane-off': lazy(() => {
    return import('@tabler/icons/plane-off.svg?react');
  }),
  'plane-tilt': lazy(() => {
    return import('@tabler/icons/plane-tilt.svg?react');
  }),
  plane: lazy(() => {
    return import('@tabler/icons/plane.svg?react');
  }),
  'planet-off': lazy(() => {
    return import('@tabler/icons/planet-off.svg?react');
  }),
  planet: lazy(() => {
    return import('@tabler/icons/planet.svg?react');
  }),
  'plant-2-off': lazy(() => {
    return import('@tabler/icons/plant-2-off.svg?react');
  }),
  'plant-2': lazy(() => {
    return import('@tabler/icons/plant-2.svg?react');
  }),
  'plant-off': lazy(() => {
    return import('@tabler/icons/plant-off.svg?react');
  }),
  plant: lazy(() => {
    return import('@tabler/icons/plant.svg?react');
  }),
  'play-basketball': lazy(() => {
    return import('@tabler/icons/play-basketball.svg?react');
  }),
  'play-card-off': lazy(() => {
    return import('@tabler/icons/play-card-off.svg?react');
  }),
  'play-card': lazy(() => {
    return import('@tabler/icons/play-card.svg?react');
  }),
  'play-football': lazy(() => {
    return import('@tabler/icons/play-football.svg?react');
  }),
  'play-handball': lazy(() => {
    return import('@tabler/icons/play-handball.svg?react');
  }),
  'play-volleyball': lazy(() => {
    return import('@tabler/icons/play-volleyball.svg?react');
  }),
  'player-eject-filled': lazy(() => {
    return import('@tabler/icons/player-eject-filled.svg?react');
  }),
  'player-eject': lazy(() => {
    return import('@tabler/icons/player-eject.svg?react');
  }),
  'player-pause-filled': lazy(() => {
    return import('@tabler/icons/player-pause-filled.svg?react');
  }),
  'player-pause': lazy(() => {
    return import('@tabler/icons/player-pause.svg?react');
  }),
  'player-play-filled': lazy(() => {
    return import('@tabler/icons/player-play-filled.svg?react');
  }),
  'player-play': lazy(() => {
    return import('@tabler/icons/player-play.svg?react');
  }),
  'player-record-filled': lazy(() => {
    return import('@tabler/icons/player-record-filled.svg?react');
  }),
  'player-record': lazy(() => {
    return import('@tabler/icons/player-record.svg?react');
  }),
  'player-skip-back-filled': lazy(() => {
    return import('@tabler/icons/player-skip-back-filled.svg?react');
  }),
  'player-skip-back': lazy(() => {
    return import('@tabler/icons/player-skip-back.svg?react');
  }),
  'player-skip-forward-filled': lazy(() => {
    return import('@tabler/icons/player-skip-forward-filled.svg?react');
  }),
  'player-skip-forward': lazy(() => {
    return import('@tabler/icons/player-skip-forward.svg?react');
  }),
  'player-stop-filled': lazy(() => {
    return import('@tabler/icons/player-stop-filled.svg?react');
  }),
  'player-stop': lazy(() => {
    return import('@tabler/icons/player-stop.svg?react');
  }),
  'player-track-next-filled': lazy(() => {
    return import('@tabler/icons/player-track-next-filled.svg?react');
  }),
  'player-track-next': lazy(() => {
    return import('@tabler/icons/player-track-next.svg?react');
  }),
  'player-track-prev-filled': lazy(() => {
    return import('@tabler/icons/player-track-prev-filled.svg?react');
  }),
  'player-track-prev': lazy(() => {
    return import('@tabler/icons/player-track-prev.svg?react');
  }),
  'playlist-add': lazy(() => {
    return import('@tabler/icons/playlist-add.svg?react');
  }),
  'playlist-off': lazy(() => {
    return import('@tabler/icons/playlist-off.svg?react');
  }),
  'playlist-x': lazy(() => {
    return import('@tabler/icons/playlist-x.svg?react');
  }),
  playlist: lazy(() => {
    return import('@tabler/icons/playlist.svg?react');
  }),
  'playstation-circle': lazy(() => {
    return import('@tabler/icons/playstation-circle.svg?react');
  }),
  'playstation-square': lazy(() => {
    return import('@tabler/icons/playstation-square.svg?react');
  }),
  'playstation-triangle': lazy(() => {
    return import('@tabler/icons/playstation-triangle.svg?react');
  }),
  'playstation-x': lazy(() => {
    return import('@tabler/icons/playstation-x.svg?react');
  }),
  'plug-connected-x': lazy(() => {
    return import('@tabler/icons/plug-connected-x.svg?react');
  }),
  'plug-connected': lazy(() => {
    return import('@tabler/icons/plug-connected.svg?react');
  }),
  'plug-off': lazy(() => {
    return import('@tabler/icons/plug-off.svg?react');
  }),
  'plug-x': lazy(() => {
    return import('@tabler/icons/plug-x.svg?react');
  }),
  plug: lazy(() => {
    return import('@tabler/icons/plug.svg?react');
  }),
  'plus-equal': lazy(() => {
    return import('@tabler/icons/plus-equal.svg?react');
  }),
  'plus-minus': lazy(() => {
    return import('@tabler/icons/plus-minus.svg?react');
  }),
  plus: lazy(() => {
    return import('@tabler/icons/plus.svg?react');
  }),
  png: lazy(() => {
    return import('@tabler/icons/png.svg?react');
  }),
  'podium-off': lazy(() => {
    return import('@tabler/icons/podium-off.svg?react');
  }),
  podium: lazy(() => {
    return import('@tabler/icons/podium.svg?react');
  }),
  'point-filled': lazy(() => {
    return import('@tabler/icons/point-filled.svg?react');
  }),
  'point-off': lazy(() => {
    return import('@tabler/icons/point-off.svg?react');
  }),
  point: lazy(() => {
    return import('@tabler/icons/point.svg?react');
  }),
  'pointer-bolt': lazy(() => {
    return import('@tabler/icons/pointer-bolt.svg?react');
  }),
  'pointer-cancel': lazy(() => {
    return import('@tabler/icons/pointer-cancel.svg?react');
  }),
  'pointer-check': lazy(() => {
    return import('@tabler/icons/pointer-check.svg?react');
  }),
  'pointer-code': lazy(() => {
    return import('@tabler/icons/pointer-code.svg?react');
  }),
  'pointer-cog': lazy(() => {
    return import('@tabler/icons/pointer-cog.svg?react');
  }),
  'pointer-dollar': lazy(() => {
    return import('@tabler/icons/pointer-dollar.svg?react');
  }),
  'pointer-down': lazy(() => {
    return import('@tabler/icons/pointer-down.svg?react');
  }),
  'pointer-exclamation': lazy(() => {
    return import('@tabler/icons/pointer-exclamation.svg?react');
  }),
  'pointer-filled': lazy(() => {
    return import('@tabler/icons/pointer-filled.svg?react');
  }),
  'pointer-heart': lazy(() => {
    return import('@tabler/icons/pointer-heart.svg?react');
  }),
  'pointer-minus': lazy(() => {
    return import('@tabler/icons/pointer-minus.svg?react');
  }),
  'pointer-off': lazy(() => {
    return import('@tabler/icons/pointer-off.svg?react');
  }),
  'pointer-pause': lazy(() => {
    return import('@tabler/icons/pointer-pause.svg?react');
  }),
  'pointer-pin': lazy(() => {
    return import('@tabler/icons/pointer-pin.svg?react');
  }),
  'pointer-plus': lazy(() => {
    return import('@tabler/icons/pointer-plus.svg?react');
  }),
  'pointer-question': lazy(() => {
    return import('@tabler/icons/pointer-question.svg?react');
  }),
  'pointer-search': lazy(() => {
    return import('@tabler/icons/pointer-search.svg?react');
  }),
  'pointer-share': lazy(() => {
    return import('@tabler/icons/pointer-share.svg?react');
  }),
  'pointer-star': lazy(() => {
    return import('@tabler/icons/pointer-star.svg?react');
  }),
  'pointer-up': lazy(() => {
    return import('@tabler/icons/pointer-up.svg?react');
  }),
  'pointer-x': lazy(() => {
    return import('@tabler/icons/pointer-x.svg?react');
  }),
  pointer: lazy(() => {
    return import('@tabler/icons/pointer.svg?react');
  }),
  'pokeball-off': lazy(() => {
    return import('@tabler/icons/pokeball-off.svg?react');
  }),
  pokeball: lazy(() => {
    return import('@tabler/icons/pokeball.svg?react');
  }),
  'poker-chip': lazy(() => {
    return import('@tabler/icons/poker-chip.svg?react');
  }),
  'polaroid-filled': lazy(() => {
    return import('@tabler/icons/polaroid-filled.svg?react');
  }),
  polaroid: lazy(() => {
    return import('@tabler/icons/polaroid.svg?react');
  }),
  'polygon-off': lazy(() => {
    return import('@tabler/icons/polygon-off.svg?react');
  }),
  polygon: lazy(() => {
    return import('@tabler/icons/polygon.svg?react');
  }),
  poo: lazy(() => {
    return import('@tabler/icons/poo.svg?react');
  }),
  'pool-off': lazy(() => {
    return import('@tabler/icons/pool-off.svg?react');
  }),
  pool: lazy(() => {
    return import('@tabler/icons/pool.svg?react');
  }),
  power: lazy(() => {
    return import('@tabler/icons/power.svg?react');
  }),
  pray: lazy(() => {
    return import('@tabler/icons/pray.svg?react');
  }),
  'premium-rights': lazy(() => {
    return import('@tabler/icons/premium-rights.svg?react');
  }),
  prescription: lazy(() => {
    return import('@tabler/icons/prescription.svg?react');
  }),
  'presentation-analytics': lazy(() => {
    return import('@tabler/icons/presentation-analytics.svg?react');
  }),
  'presentation-off': lazy(() => {
    return import('@tabler/icons/presentation-off.svg?react');
  }),
  presentation: lazy(() => {
    return import('@tabler/icons/presentation.svg?react');
  }),
  'printer-off': lazy(() => {
    return import('@tabler/icons/printer-off.svg?react');
  }),
  printer: lazy(() => {
    return import('@tabler/icons/printer.svg?react');
  }),
  'prism-off': lazy(() => {
    return import('@tabler/icons/prism-off.svg?react');
  }),
  'prism-plus': lazy(() => {
    return import('@tabler/icons/prism-plus.svg?react');
  }),
  prism: lazy(() => {
    return import('@tabler/icons/prism.svg?react');
  }),
  prison: lazy(() => {
    return import('@tabler/icons/prison.svg?react');
  }),
  'progress-alert': lazy(() => {
    return import('@tabler/icons/progress-alert.svg?react');
  }),
  'progress-bolt': lazy(() => {
    return import('@tabler/icons/progress-bolt.svg?react');
  }),
  'progress-check': lazy(() => {
    return import('@tabler/icons/progress-check.svg?react');
  }),
  'progress-down': lazy(() => {
    return import('@tabler/icons/progress-down.svg?react');
  }),
  'progress-help': lazy(() => {
    return import('@tabler/icons/progress-help.svg?react');
  }),
  'progress-x': lazy(() => {
    return import('@tabler/icons/progress-x.svg?react');
  }),
  progress: lazy(() => {
    return import('@tabler/icons/progress.svg?react');
  }),
  prompt: lazy(() => {
    return import('@tabler/icons/prompt.svg?react');
  }),
  'propeller-off': lazy(() => {
    return import('@tabler/icons/propeller-off.svg?react');
  }),
  propeller: lazy(() => {
    return import('@tabler/icons/propeller.svg?react');
  }),
  'pumpkin-scary': lazy(() => {
    return import('@tabler/icons/pumpkin-scary.svg?react');
  }),
  'puzzle-2': lazy(() => {
    return import('@tabler/icons/puzzle-2.svg?react');
  }),
  'puzzle-filled': lazy(() => {
    return import('@tabler/icons/puzzle-filled.svg?react');
  }),
  'puzzle-off': lazy(() => {
    return import('@tabler/icons/puzzle-off.svg?react');
  }),
  puzzle: lazy(() => {
    return import('@tabler/icons/puzzle.svg?react');
  }),
  'pyramid-off': lazy(() => {
    return import('@tabler/icons/pyramid-off.svg?react');
  }),
  'pyramid-plus': lazy(() => {
    return import('@tabler/icons/pyramid-plus.svg?react');
  }),
  pyramid: lazy(() => {
    return import('@tabler/icons/pyramid.svg?react');
  }),
  'qrcode-off': lazy(() => {
    return import('@tabler/icons/qrcode-off.svg?react');
  }),
  qrcode: lazy(() => {
    return import('@tabler/icons/qrcode.svg?react');
  }),
  'question-mark': lazy(() => {
    return import('@tabler/icons/question-mark.svg?react');
  }),
  'quote-off': lazy(() => {
    return import('@tabler/icons/quote-off.svg?react');
  }),
  quote: lazy(() => {
    return import('@tabler/icons/quote.svg?react');
  }),
  quotes: lazy(() => {
    return import('@tabler/icons/quotes.svg?react');
  }),
  'radar-2': lazy(() => {
    return import('@tabler/icons/radar-2.svg?react');
  }),
  'radar-off': lazy(() => {
    return import('@tabler/icons/radar-off.svg?react');
  }),
  radar: lazy(() => {
    return import('@tabler/icons/radar.svg?react');
  }),
  'radio-off': lazy(() => {
    return import('@tabler/icons/radio-off.svg?react');
  }),
  radio: lazy(() => {
    return import('@tabler/icons/radio.svg?react');
  }),
  'radioactive-filled': lazy(() => {
    return import('@tabler/icons/radioactive-filled.svg?react');
  }),
  'radioactive-off': lazy(() => {
    return import('@tabler/icons/radioactive-off.svg?react');
  }),
  radioactive: lazy(() => {
    return import('@tabler/icons/radioactive.svg?react');
  }),
  'radius-bottom-left': lazy(() => {
    return import('@tabler/icons/radius-bottom-left.svg?react');
  }),
  'radius-bottom-right': lazy(() => {
    return import('@tabler/icons/radius-bottom-right.svg?react');
  }),
  'radius-top-left': lazy(() => {
    return import('@tabler/icons/radius-top-left.svg?react');
  }),
  'radius-top-right': lazy(() => {
    return import('@tabler/icons/radius-top-right.svg?react');
  }),
  'rainbow-off': lazy(() => {
    return import('@tabler/icons/rainbow-off.svg?react');
  }),
  rainbow: lazy(() => {
    return import('@tabler/icons/rainbow.svg?react');
  }),
  'rating-12-plus': lazy(() => {
    return import('@tabler/icons/rating-12-plus.svg?react');
  }),
  'rating-14-plus': lazy(() => {
    return import('@tabler/icons/rating-14-plus.svg?react');
  }),
  'rating-16-plus': lazy(() => {
    return import('@tabler/icons/rating-16-plus.svg?react');
  }),
  'rating-18-plus': lazy(() => {
    return import('@tabler/icons/rating-18-plus.svg?react');
  }),
  'rating-21-plus': lazy(() => {
    return import('@tabler/icons/rating-21-plus.svg?react');
  }),
  'razor-electric': lazy(() => {
    return import('@tabler/icons/razor-electric.svg?react');
  }),
  razor: lazy(() => {
    return import('@tabler/icons/razor.svg?react');
  }),
  'receipt-2': lazy(() => {
    return import('@tabler/icons/receipt-2.svg?react');
  }),
  'receipt-off': lazy(() => {
    return import('@tabler/icons/receipt-off.svg?react');
  }),
  'receipt-refund': lazy(() => {
    return import('@tabler/icons/receipt-refund.svg?react');
  }),
  'receipt-tax': lazy(() => {
    return import('@tabler/icons/receipt-tax.svg?react');
  }),
  receipt: lazy(() => {
    return import('@tabler/icons/receipt.svg?react');
  }),
  recharging: lazy(() => {
    return import('@tabler/icons/recharging.svg?react');
  }),
  'record-mail-off': lazy(() => {
    return import('@tabler/icons/record-mail-off.svg?react');
  }),
  'record-mail': lazy(() => {
    return import('@tabler/icons/record-mail.svg?react');
  }),
  'rectangle-filled': lazy(() => {
    return import('@tabler/icons/rectangle-filled.svg?react');
  }),
  'rectangle-rounded-bottom': lazy(() => {
    return import('@tabler/icons/rectangle-rounded-bottom.svg?react');
  }),
  'rectangle-rounded-top': lazy(() => {
    return import('@tabler/icons/rectangle-rounded-top.svg?react');
  }),
  'rectangle-vertical-filled': lazy(() => {
    return import('@tabler/icons/rectangle-vertical-filled.svg?react');
  }),
  'rectangle-vertical': lazy(() => {
    return import('@tabler/icons/rectangle-vertical.svg?react');
  }),
  rectangle: lazy(() => {
    return import('@tabler/icons/rectangle.svg?react');
  }),
  'rectangular-prism-off': lazy(() => {
    return import('@tabler/icons/rectangular-prism-off.svg?react');
  }),
  'rectangular-prism-plus': lazy(() => {
    return import('@tabler/icons/rectangular-prism-plus.svg?react');
  }),
  'rectangular-prism': lazy(() => {
    return import('@tabler/icons/rectangular-prism.svg?react');
  }),
  'recycle-off': lazy(() => {
    return import('@tabler/icons/recycle-off.svg?react');
  }),
  recycle: lazy(() => {
    return import('@tabler/icons/recycle.svg?react');
  }),
  'refresh-alert': lazy(() => {
    return import('@tabler/icons/refresh-alert.svg?react');
  }),
  'refresh-dot': lazy(() => {
    return import('@tabler/icons/refresh-dot.svg?react');
  }),
  'refresh-off': lazy(() => {
    return import('@tabler/icons/refresh-off.svg?react');
  }),
  refresh: lazy(() => {
    return import('@tabler/icons/refresh.svg?react');
  }),
  'regex-off': lazy(() => {
    return import('@tabler/icons/regex-off.svg?react');
  }),
  regex: lazy(() => {
    return import('@tabler/icons/regex.svg?react');
  }),
  registered: lazy(() => {
    return import('@tabler/icons/registered.svg?react');
  }),
  'relation-many-to-many': lazy(() => {
    return import('@tabler/icons/relation-many-to-many.svg?react');
  }),
  'relation-one-to-many': lazy(() => {
    return import('@tabler/icons/relation-one-to-many.svg?react');
  }),
  'relation-one-to-one': lazy(() => {
    return import('@tabler/icons/relation-one-to-one.svg?react');
  }),
  reload: lazy(() => {
    return import('@tabler/icons/reload.svg?react');
  }),
  reorder: lazy(() => {
    return import('@tabler/icons/reorder.svg?react');
  }),
  'repeat-off': lazy(() => {
    return import('@tabler/icons/repeat-off.svg?react');
  }),
  'repeat-once': lazy(() => {
    return import('@tabler/icons/repeat-once.svg?react');
  }),
  repeat: lazy(() => {
    return import('@tabler/icons/repeat.svg?react');
  }),
  'replace-filled': lazy(() => {
    return import('@tabler/icons/replace-filled.svg?react');
  }),
  'replace-off': lazy(() => {
    return import('@tabler/icons/replace-off.svg?react');
  }),
  replace: lazy(() => {
    return import('@tabler/icons/replace.svg?react');
  }),
  'report-analytics': lazy(() => {
    return import('@tabler/icons/report-analytics.svg?react');
  }),
  'report-medical': lazy(() => {
    return import('@tabler/icons/report-medical.svg?react');
  }),
  'report-money': lazy(() => {
    return import('@tabler/icons/report-money.svg?react');
  }),
  'report-off': lazy(() => {
    return import('@tabler/icons/report-off.svg?react');
  }),
  'report-search': lazy(() => {
    return import('@tabler/icons/report-search.svg?react');
  }),
  report: lazy(() => {
    return import('@tabler/icons/report.svg?react');
  }),
  'reserved-line': lazy(() => {
    return import('@tabler/icons/reserved-line.svg?react');
  }),
  resize: lazy(() => {
    return import('@tabler/icons/resize.svg?react');
  }),
  restore: lazy(() => {
    return import('@tabler/icons/restore.svg?react');
  }),
  'rewind-backward-10': lazy(() => {
    return import('@tabler/icons/rewind-backward-10.svg?react');
  }),
  'rewind-backward-15': lazy(() => {
    return import('@tabler/icons/rewind-backward-15.svg?react');
  }),
  'rewind-backward-20': lazy(() => {
    return import('@tabler/icons/rewind-backward-20.svg?react');
  }),
  'rewind-backward-30': lazy(() => {
    return import('@tabler/icons/rewind-backward-30.svg?react');
  }),
  'rewind-backward-40': lazy(() => {
    return import('@tabler/icons/rewind-backward-40.svg?react');
  }),
  'rewind-backward-5': lazy(() => {
    return import('@tabler/icons/rewind-backward-5.svg?react');
  }),
  'rewind-backward-50': lazy(() => {
    return import('@tabler/icons/rewind-backward-50.svg?react');
  }),
  'rewind-backward-60': lazy(() => {
    return import('@tabler/icons/rewind-backward-60.svg?react');
  }),
  'rewind-forward-10': lazy(() => {
    return import('@tabler/icons/rewind-forward-10.svg?react');
  }),
  'rewind-forward-15': lazy(() => {
    return import('@tabler/icons/rewind-forward-15.svg?react');
  }),
  'rewind-forward-20': lazy(() => {
    return import('@tabler/icons/rewind-forward-20.svg?react');
  }),
  'rewind-forward-30': lazy(() => {
    return import('@tabler/icons/rewind-forward-30.svg?react');
  }),
  'rewind-forward-40': lazy(() => {
    return import('@tabler/icons/rewind-forward-40.svg?react');
  }),
  'rewind-forward-5': lazy(() => {
    return import('@tabler/icons/rewind-forward-5.svg?react');
  }),
  'rewind-forward-50': lazy(() => {
    return import('@tabler/icons/rewind-forward-50.svg?react');
  }),
  'rewind-forward-60': lazy(() => {
    return import('@tabler/icons/rewind-forward-60.svg?react');
  }),
  'ribbon-health': lazy(() => {
    return import('@tabler/icons/ribbon-health.svg?react');
  }),
  rings: lazy(() => {
    return import('@tabler/icons/rings.svg?react');
  }),
  'ripple-off': lazy(() => {
    return import('@tabler/icons/ripple-off.svg?react');
  }),
  ripple: lazy(() => {
    return import('@tabler/icons/ripple.svg?react');
  }),
  'road-off': lazy(() => {
    return import('@tabler/icons/road-off.svg?react');
  }),
  'road-sign': lazy(() => {
    return import('@tabler/icons/road-sign.svg?react');
  }),
  road: lazy(() => {
    return import('@tabler/icons/road.svg?react');
  }),
  'robot-face': lazy(() => {
    return import('@tabler/icons/robot-face.svg?react');
  }),
  'robot-off': lazy(() => {
    return import('@tabler/icons/robot-off.svg?react');
  }),
  robot: lazy(() => {
    return import('@tabler/icons/robot.svg?react');
  }),
  'rocket-off': lazy(() => {
    return import('@tabler/icons/rocket-off.svg?react');
  }),
  rocket: lazy(() => {
    return import('@tabler/icons/rocket.svg?react');
  }),
  'roller-skating': lazy(() => {
    return import('@tabler/icons/roller-skating.svg?react');
  }),
  'rollercoaster-off': lazy(() => {
    return import('@tabler/icons/rollercoaster-off.svg?react');
  }),
  rollercoaster: lazy(() => {
    return import('@tabler/icons/rollercoaster.svg?react');
  }),
  'rosette-filled': lazy(() => {
    return import('@tabler/icons/rosette-filled.svg?react');
  }),
  'rosette-number-0': lazy(() => {
    return import('@tabler/icons/rosette-number-0.svg?react');
  }),
  'rosette-number-1': lazy(() => {
    return import('@tabler/icons/rosette-number-1.svg?react');
  }),
  'rosette-number-2': lazy(() => {
    return import('@tabler/icons/rosette-number-2.svg?react');
  }),
  'rosette-number-3': lazy(() => {
    return import('@tabler/icons/rosette-number-3.svg?react');
  }),
  'rosette-number-4': lazy(() => {
    return import('@tabler/icons/rosette-number-4.svg?react');
  }),
  'rosette-number-5': lazy(() => {
    return import('@tabler/icons/rosette-number-5.svg?react');
  }),
  'rosette-number-6': lazy(() => {
    return import('@tabler/icons/rosette-number-6.svg?react');
  }),
  'rosette-number-7': lazy(() => {
    return import('@tabler/icons/rosette-number-7.svg?react');
  }),
  'rosette-number-8': lazy(() => {
    return import('@tabler/icons/rosette-number-8.svg?react');
  }),
  'rosette-number-9': lazy(() => {
    return import('@tabler/icons/rosette-number-9.svg?react');
  }),
  rosette: lazy(() => {
    return import('@tabler/icons/rosette.svg?react');
  }),
  'rotate-2': lazy(() => {
    return import('@tabler/icons/rotate-2.svg?react');
  }),
  'rotate-360': lazy(() => {
    return import('@tabler/icons/rotate-360.svg?react');
  }),
  'rotate-clockwise-2': lazy(() => {
    return import('@tabler/icons/rotate-clockwise-2.svg?react');
  }),
  'rotate-clockwise': lazy(() => {
    return import('@tabler/icons/rotate-clockwise.svg?react');
  }),
  'rotate-dot': lazy(() => {
    return import('@tabler/icons/rotate-dot.svg?react');
  }),
  'rotate-rectangle': lazy(() => {
    return import('@tabler/icons/rotate-rectangle.svg?react');
  }),
  rotate: lazy(() => {
    return import('@tabler/icons/rotate.svg?react');
  }),
  'route-2': lazy(() => {
    return import('@tabler/icons/route-2.svg?react');
  }),
  'route-alt-left': lazy(() => {
    return import('@tabler/icons/route-alt-left.svg?react');
  }),
  'route-alt-right': lazy(() => {
    return import('@tabler/icons/route-alt-right.svg?react');
  }),
  'route-off': lazy(() => {
    return import('@tabler/icons/route-off.svg?react');
  }),
  'route-scan': lazy(() => {
    return import('@tabler/icons/route-scan.svg?react');
  }),
  'route-square-2': lazy(() => {
    return import('@tabler/icons/route-square-2.svg?react');
  }),
  'route-square': lazy(() => {
    return import('@tabler/icons/route-square.svg?react');
  }),
  'route-x-2': lazy(() => {
    return import('@tabler/icons/route-x-2.svg?react');
  }),
  'route-x': lazy(() => {
    return import('@tabler/icons/route-x.svg?react');
  }),
  route: lazy(() => {
    return import('@tabler/icons/route.svg?react');
  }),
  'router-off': lazy(() => {
    return import('@tabler/icons/router-off.svg?react');
  }),
  router: lazy(() => {
    return import('@tabler/icons/router.svg?react');
  }),
  'row-insert-bottom': lazy(() => {
    return import('@tabler/icons/row-insert-bottom.svg?react');
  }),
  'row-insert-top': lazy(() => {
    return import('@tabler/icons/row-insert-top.svg?react');
  }),
  'row-remove': lazy(() => {
    return import('@tabler/icons/row-remove.svg?react');
  }),
  rss: lazy(() => {
    return import('@tabler/icons/rss.svg?react');
  }),
  'rubber-stamp-off': lazy(() => {
    return import('@tabler/icons/rubber-stamp-off.svg?react');
  }),
  'rubber-stamp': lazy(() => {
    return import('@tabler/icons/rubber-stamp.svg?react');
  }),
  'ruler-2-off': lazy(() => {
    return import('@tabler/icons/ruler-2-off.svg?react');
  }),
  'ruler-2': lazy(() => {
    return import('@tabler/icons/ruler-2.svg?react');
  }),
  'ruler-3': lazy(() => {
    return import('@tabler/icons/ruler-3.svg?react');
  }),
  'ruler-measure': lazy(() => {
    return import('@tabler/icons/ruler-measure.svg?react');
  }),
  'ruler-off': lazy(() => {
    return import('@tabler/icons/ruler-off.svg?react');
  }),
  ruler: lazy(() => {
    return import('@tabler/icons/ruler.svg?react');
  }),
  run: lazy(() => {
    return import('@tabler/icons/run.svg?react');
  }),
  'rv-truck': lazy(() => {
    return import('@tabler/icons/rv-truck.svg?react');
  }),
  's-turn-down': lazy(() => {
    return import('@tabler/icons/s-turn-down.svg?react');
  }),
  's-turn-left': lazy(() => {
    return import('@tabler/icons/s-turn-left.svg?react');
  }),
  's-turn-right': lazy(() => {
    return import('@tabler/icons/s-turn-right.svg?react');
  }),
  's-turn-up': lazy(() => {
    return import('@tabler/icons/s-turn-up.svg?react');
  }),
  'sailboat-2': lazy(() => {
    return import('@tabler/icons/sailboat-2.svg?react');
  }),
  'sailboat-off': lazy(() => {
    return import('@tabler/icons/sailboat-off.svg?react');
  }),
  sailboat: lazy(() => {
    return import('@tabler/icons/sailboat.svg?react');
  }),
  salad: lazy(() => {
    return import('@tabler/icons/salad.svg?react');
  }),
  salt: lazy(() => {
    return import('@tabler/icons/salt.svg?react');
  }),
  'satellite-off': lazy(() => {
    return import('@tabler/icons/satellite-off.svg?react');
  }),
  satellite: lazy(() => {
    return import('@tabler/icons/satellite.svg?react');
  }),
  sausage: lazy(() => {
    return import('@tabler/icons/sausage.svg?react');
  }),
  'scale-off': lazy(() => {
    return import('@tabler/icons/scale-off.svg?react');
  }),
  'scale-outline-off': lazy(() => {
    return import('@tabler/icons/scale-outline-off.svg?react');
  }),
  'scale-outline': lazy(() => {
    return import('@tabler/icons/scale-outline.svg?react');
  }),
  scale: lazy(() => {
    return import('@tabler/icons/scale.svg?react');
  }),
  'scan-eye': lazy(() => {
    return import('@tabler/icons/scan-eye.svg?react');
  }),
  scan: lazy(() => {
    return import('@tabler/icons/scan.svg?react');
  }),
  'schema-off': lazy(() => {
    return import('@tabler/icons/schema-off.svg?react');
  }),
  schema: lazy(() => {
    return import('@tabler/icons/schema.svg?react');
  }),
  'school-bell': lazy(() => {
    return import('@tabler/icons/school-bell.svg?react');
  }),
  'school-off': lazy(() => {
    return import('@tabler/icons/school-off.svg?react');
  }),
  school: lazy(() => {
    return import('@tabler/icons/school.svg?react');
  }),
  'scissors-off': lazy(() => {
    return import('@tabler/icons/scissors-off.svg?react');
  }),
  scissors: lazy(() => {
    return import('@tabler/icons/scissors.svg?react');
  }),
  'scooter-electric': lazy(() => {
    return import('@tabler/icons/scooter-electric.svg?react');
  }),
  scooter: lazy(() => {
    return import('@tabler/icons/scooter.svg?react');
  }),
  scoreboard: lazy(() => {
    return import('@tabler/icons/scoreboard.svg?react');
  }),
  'screen-share-off': lazy(() => {
    return import('@tabler/icons/screen-share-off.svg?react');
  }),
  'screen-share': lazy(() => {
    return import('@tabler/icons/screen-share.svg?react');
  }),
  screenshot: lazy(() => {
    return import('@tabler/icons/screenshot.svg?react');
  }),
  'scribble-off': lazy(() => {
    return import('@tabler/icons/scribble-off.svg?react');
  }),
  scribble: lazy(() => {
    return import('@tabler/icons/scribble.svg?react');
  }),
  'script-minus': lazy(() => {
    return import('@tabler/icons/script-minus.svg?react');
  }),
  'script-plus': lazy(() => {
    return import('@tabler/icons/script-plus.svg?react');
  }),
  'script-x': lazy(() => {
    return import('@tabler/icons/script-x.svg?react');
  }),
  script: lazy(() => {
    return import('@tabler/icons/script.svg?react');
  }),
  'scuba-mask-off': lazy(() => {
    return import('@tabler/icons/scuba-mask-off.svg?react');
  }),
  'scuba-mask': lazy(() => {
    return import('@tabler/icons/scuba-mask.svg?react');
  }),
  sdk: lazy(() => {
    return import('@tabler/icons/sdk.svg?react');
  }),
  'search-off': lazy(() => {
    return import('@tabler/icons/search-off.svg?react');
  }),
  search: lazy(() => {
    return import('@tabler/icons/search.svg?react');
  }),
  'section-sign': lazy(() => {
    return import('@tabler/icons/section-sign.svg?react');
  }),
  section: lazy(() => {
    return import('@tabler/icons/section.svg?react');
  }),
  'seeding-off': lazy(() => {
    return import('@tabler/icons/seeding-off.svg?react');
  }),
  seeding: lazy(() => {
    return import('@tabler/icons/seeding.svg?react');
  }),
  'select-all': lazy(() => {
    return import('@tabler/icons/select-all.svg?react');
  }),
  select: lazy(() => {
    return import('@tabler/icons/select.svg?react');
  }),
  selector: lazy(() => {
    return import('@tabler/icons/selector.svg?react');
  }),
  'send-off': lazy(() => {
    return import('@tabler/icons/send-off.svg?react');
  }),
  send: lazy(() => {
    return import('@tabler/icons/send.svg?react');
  }),
  seo: lazy(() => {
    return import('@tabler/icons/seo.svg?react');
  }),
  'separator-horizontal': lazy(() => {
    return import('@tabler/icons/separator-horizontal.svg?react');
  }),
  'separator-vertical': lazy(() => {
    return import('@tabler/icons/separator-vertical.svg?react');
  }),
  separator: lazy(() => {
    return import('@tabler/icons/separator.svg?react');
  }),
  'server-2': lazy(() => {
    return import('@tabler/icons/server-2.svg?react');
  }),
  'server-bolt': lazy(() => {
    return import('@tabler/icons/server-bolt.svg?react');
  }),
  'server-cog': lazy(() => {
    return import('@tabler/icons/server-cog.svg?react');
  }),
  'server-off': lazy(() => {
    return import('@tabler/icons/server-off.svg?react');
  }),
  server: lazy(() => {
    return import('@tabler/icons/server.svg?react');
  }),
  servicemark: lazy(() => {
    return import('@tabler/icons/servicemark.svg?react');
  }),
  'settings-2': lazy(() => {
    return import('@tabler/icons/settings-2.svg?react');
  }),
  'settings-automation': lazy(() => {
    return import('@tabler/icons/settings-automation.svg?react');
  }),
  'settings-bolt': lazy(() => {
    return import('@tabler/icons/settings-bolt.svg?react');
  }),
  'settings-cancel': lazy(() => {
    return import('@tabler/icons/settings-cancel.svg?react');
  }),
  'settings-check': lazy(() => {
    return import('@tabler/icons/settings-check.svg?react');
  }),
  'settings-code': lazy(() => {
    return import('@tabler/icons/settings-code.svg?react');
  }),
  'settings-cog': lazy(() => {
    return import('@tabler/icons/settings-cog.svg?react');
  }),
  'settings-dollar': lazy(() => {
    return import('@tabler/icons/settings-dollar.svg?react');
  }),
  'settings-down': lazy(() => {
    return import('@tabler/icons/settings-down.svg?react');
  }),
  'settings-exclamation': lazy(() => {
    return import('@tabler/icons/settings-exclamation.svg?react');
  }),
  'settings-filled': lazy(() => {
    return import('@tabler/icons/settings-filled.svg?react');
  }),
  'settings-heart': lazy(() => {
    return import('@tabler/icons/settings-heart.svg?react');
  }),
  'settings-minus': lazy(() => {
    return import('@tabler/icons/settings-minus.svg?react');
  }),
  'settings-off': lazy(() => {
    return import('@tabler/icons/settings-off.svg?react');
  }),
  'settings-pause': lazy(() => {
    return import('@tabler/icons/settings-pause.svg?react');
  }),
  'settings-pin': lazy(() => {
    return import('@tabler/icons/settings-pin.svg?react');
  }),
  'settings-plus': lazy(() => {
    return import('@tabler/icons/settings-plus.svg?react');
  }),
  'settings-question': lazy(() => {
    return import('@tabler/icons/settings-question.svg?react');
  }),
  'settings-search': lazy(() => {
    return import('@tabler/icons/settings-search.svg?react');
  }),
  'settings-share': lazy(() => {
    return import('@tabler/icons/settings-share.svg?react');
  }),
  'settings-star': lazy(() => {
    return import('@tabler/icons/settings-star.svg?react');
  }),
  'settings-up': lazy(() => {
    return import('@tabler/icons/settings-up.svg?react');
  }),
  'settings-x': lazy(() => {
    return import('@tabler/icons/settings-x.svg?react');
  }),
  settings: lazy(() => {
    return import('@tabler/icons/settings.svg?react');
  }),
  'shadow-off': lazy(() => {
    return import('@tabler/icons/shadow-off.svg?react');
  }),
  shadow: lazy(() => {
    return import('@tabler/icons/shadow.svg?react');
  }),
  'shape-2': lazy(() => {
    return import('@tabler/icons/shape-2.svg?react');
  }),
  'shape-3': lazy(() => {
    return import('@tabler/icons/shape-3.svg?react');
  }),
  'shape-off': lazy(() => {
    return import('@tabler/icons/shape-off.svg?react');
  }),
  shape: lazy(() => {
    return import('@tabler/icons/shape.svg?react');
  }),
  'share-2': lazy(() => {
    return import('@tabler/icons/share-2.svg?react');
  }),
  'share-3': lazy(() => {
    return import('@tabler/icons/share-3.svg?react');
  }),
  'share-off': lazy(() => {
    return import('@tabler/icons/share-off.svg?react');
  }),
  share: lazy(() => {
    return import('@tabler/icons/share.svg?react');
  }),
  'shi-jumping': lazy(() => {
    return import('@tabler/icons/shi-jumping.svg?react');
  }),
  'shield-bolt': lazy(() => {
    return import('@tabler/icons/shield-bolt.svg?react');
  }),
  'shield-cancel': lazy(() => {
    return import('@tabler/icons/shield-cancel.svg?react');
  }),
  'shield-check-filled': lazy(() => {
    return import('@tabler/icons/shield-check-filled.svg?react');
  }),
  'shield-check': lazy(() => {
    return import('@tabler/icons/shield-check.svg?react');
  }),
  'shield-checkered-filled': lazy(() => {
    return import('@tabler/icons/shield-checkered-filled.svg?react');
  }),
  'shield-checkered': lazy(() => {
    return import('@tabler/icons/shield-checkered.svg?react');
  }),
  'shield-chevron': lazy(() => {
    return import('@tabler/icons/shield-chevron.svg?react');
  }),
  'shield-code': lazy(() => {
    return import('@tabler/icons/shield-code.svg?react');
  }),
  'shield-cog': lazy(() => {
    return import('@tabler/icons/shield-cog.svg?react');
  }),
  'shield-dollar': lazy(() => {
    return import('@tabler/icons/shield-dollar.svg?react');
  }),
  'shield-down': lazy(() => {
    return import('@tabler/icons/shield-down.svg?react');
  }),
  'shield-exclamation': lazy(() => {
    return import('@tabler/icons/shield-exclamation.svg?react');
  }),
  'shield-filled': lazy(() => {
    return import('@tabler/icons/shield-filled.svg?react');
  }),
  'shield-half-filled': lazy(() => {
    return import('@tabler/icons/shield-half-filled.svg?react');
  }),
  'shield-half': lazy(() => {
    return import('@tabler/icons/shield-half.svg?react');
  }),
  'shield-heart': lazy(() => {
    return import('@tabler/icons/shield-heart.svg?react');
  }),
  'shield-lock-filled': lazy(() => {
    return import('@tabler/icons/shield-lock-filled.svg?react');
  }),
  'shield-lock': lazy(() => {
    return import('@tabler/icons/shield-lock.svg?react');
  }),
  'shield-minus': lazy(() => {
    return import('@tabler/icons/shield-minus.svg?react');
  }),
  'shield-off': lazy(() => {
    return import('@tabler/icons/shield-off.svg?react');
  }),
  'shield-pause': lazy(() => {
    return import('@tabler/icons/shield-pause.svg?react');
  }),
  'shield-pin': lazy(() => {
    return import('@tabler/icons/shield-pin.svg?react');
  }),
  'shield-plus': lazy(() => {
    return import('@tabler/icons/shield-plus.svg?react');
  }),
  'shield-question': lazy(() => {
    return import('@tabler/icons/shield-question.svg?react');
  }),
  'shield-search': lazy(() => {
    return import('@tabler/icons/shield-search.svg?react');
  }),
  'shield-share': lazy(() => {
    return import('@tabler/icons/shield-share.svg?react');
  }),
  'shield-star': lazy(() => {
    return import('@tabler/icons/shield-star.svg?react');
  }),
  'shield-up': lazy(() => {
    return import('@tabler/icons/shield-up.svg?react');
  }),
  'shield-x': lazy(() => {
    return import('@tabler/icons/shield-x.svg?react');
  }),
  shield: lazy(() => {
    return import('@tabler/icons/shield.svg?react');
  }),
  'ship-off': lazy(() => {
    return import('@tabler/icons/ship-off.svg?react');
  }),
  ship: lazy(() => {
    return import('@tabler/icons/ship.svg?react');
  }),
  'shirt-filled': lazy(() => {
    return import('@tabler/icons/shirt-filled.svg?react');
  }),
  'shirt-off': lazy(() => {
    return import('@tabler/icons/shirt-off.svg?react');
  }),
  'shirt-sport': lazy(() => {
    return import('@tabler/icons/shirt-sport.svg?react');
  }),
  shirt: lazy(() => {
    return import('@tabler/icons/shirt.svg?react');
  }),
  'shoe-off': lazy(() => {
    return import('@tabler/icons/shoe-off.svg?react');
  }),
  shoe: lazy(() => {
    return import('@tabler/icons/shoe.svg?react');
  }),
  'shopping-bag-check': lazy(() => {
    return import('@tabler/icons/shopping-bag-check.svg?react');
  }),
  'shopping-bag-discount': lazy(() => {
    return import('@tabler/icons/shopping-bag-discount.svg?react');
  }),
  'shopping-bag-edit': lazy(() => {
    return import('@tabler/icons/shopping-bag-edit.svg?react');
  }),
  'shopping-bag-exclamation': lazy(() => {
    return import('@tabler/icons/shopping-bag-exclamation.svg?react');
  }),
  'shopping-bag-minus': lazy(() => {
    return import('@tabler/icons/shopping-bag-minus.svg?react');
  }),
  'shopping-bag-plus': lazy(() => {
    return import('@tabler/icons/shopping-bag-plus.svg?react');
  }),
  'shopping-bag-search': lazy(() => {
    return import('@tabler/icons/shopping-bag-search.svg?react');
  }),
  'shopping-bag-x': lazy(() => {
    return import('@tabler/icons/shopping-bag-x.svg?react');
  }),
  'shopping-bag': lazy(() => {
    return import('@tabler/icons/shopping-bag.svg?react');
  }),
  'shopping-cart-bolt': lazy(() => {
    return import('@tabler/icons/shopping-cart-bolt.svg?react');
  }),
  'shopping-cart-cancel': lazy(() => {
    return import('@tabler/icons/shopping-cart-cancel.svg?react');
  }),
  'shopping-cart-check': lazy(() => {
    return import('@tabler/icons/shopping-cart-check.svg?react');
  }),
  'shopping-cart-code': lazy(() => {
    return import('@tabler/icons/shopping-cart-code.svg?react');
  }),
  'shopping-cart-cog': lazy(() => {
    return import('@tabler/icons/shopping-cart-cog.svg?react');
  }),
  'shopping-cart-copy': lazy(() => {
    return import('@tabler/icons/shopping-cart-copy.svg?react');
  }),
  'shopping-cart-discount': lazy(() => {
    return import('@tabler/icons/shopping-cart-discount.svg?react');
  }),
  'shopping-cart-dollar': lazy(() => {
    return import('@tabler/icons/shopping-cart-dollar.svg?react');
  }),
  'shopping-cart-down': lazy(() => {
    return import('@tabler/icons/shopping-cart-down.svg?react');
  }),
  'shopping-cart-exclamation': lazy(() => {
    return import('@tabler/icons/shopping-cart-exclamation.svg?react');
  }),
  'shopping-cart-filled': lazy(() => {
    return import('@tabler/icons/shopping-cart-filled.svg?react');
  }),
  'shopping-cart-heart': lazy(() => {
    return import('@tabler/icons/shopping-cart-heart.svg?react');
  }),
  'shopping-cart-minus': lazy(() => {
    return import('@tabler/icons/shopping-cart-minus.svg?react');
  }),
  'shopping-cart-off': lazy(() => {
    return import('@tabler/icons/shopping-cart-off.svg?react');
  }),
  'shopping-cart-pause': lazy(() => {
    return import('@tabler/icons/shopping-cart-pause.svg?react');
  }),
  'shopping-cart-pin': lazy(() => {
    return import('@tabler/icons/shopping-cart-pin.svg?react');
  }),
  'shopping-cart-plus': lazy(() => {
    return import('@tabler/icons/shopping-cart-plus.svg?react');
  }),
  'shopping-cart-question': lazy(() => {
    return import('@tabler/icons/shopping-cart-question.svg?react');
  }),
  'shopping-cart-search': lazy(() => {
    return import('@tabler/icons/shopping-cart-search.svg?react');
  }),
  'shopping-cart-share': lazy(() => {
    return import('@tabler/icons/shopping-cart-share.svg?react');
  }),
  'shopping-cart-star': lazy(() => {
    return import('@tabler/icons/shopping-cart-star.svg?react');
  }),
  'shopping-cart-up': lazy(() => {
    return import('@tabler/icons/shopping-cart-up.svg?react');
  }),
  'shopping-cart-x': lazy(() => {
    return import('@tabler/icons/shopping-cart-x.svg?react');
  }),
  'shopping-cart': lazy(() => {
    return import('@tabler/icons/shopping-cart.svg?react');
  }),
  shovel: lazy(() => {
    return import('@tabler/icons/shovel.svg?react');
  }),
  shredder: lazy(() => {
    return import('@tabler/icons/shredder.svg?react');
  }),
  'sign-left-filled': lazy(() => {
    return import('@tabler/icons/sign-left-filled.svg?react');
  }),
  'sign-left': lazy(() => {
    return import('@tabler/icons/sign-left.svg?react');
  }),
  'sign-right-filled': lazy(() => {
    return import('@tabler/icons/sign-right-filled.svg?react');
  }),
  'sign-right': lazy(() => {
    return import('@tabler/icons/sign-right.svg?react');
  }),
  'signal-2g': lazy(() => {
    return import('@tabler/icons/signal-2g.svg?react');
  }),
  'signal-3g': lazy(() => {
    return import('@tabler/icons/signal-3g.svg?react');
  }),
  'signal-4g-plus': lazy(() => {
    return import('@tabler/icons/signal-4g-plus.svg?react');
  }),
  'signal-4g': lazy(() => {
    return import('@tabler/icons/signal-4g.svg?react');
  }),
  'signal-5g': lazy(() => {
    return import('@tabler/icons/signal-5g.svg?react');
  }),
  'signal-6g': lazy(() => {
    return import('@tabler/icons/signal-6g.svg?react');
  }),
  'signal-e': lazy(() => {
    return import('@tabler/icons/signal-e.svg?react');
  }),
  'signal-g': lazy(() => {
    return import('@tabler/icons/signal-g.svg?react');
  }),
  'signal-h-plus': lazy(() => {
    return import('@tabler/icons/signal-h-plus.svg?react');
  }),
  'signal-h': lazy(() => {
    return import('@tabler/icons/signal-h.svg?react');
  }),
  'signal-lte': lazy(() => {
    return import('@tabler/icons/signal-lte.svg?react');
  }),
  'signature-off': lazy(() => {
    return import('@tabler/icons/signature-off.svg?react');
  }),
  signature: lazy(() => {
    return import('@tabler/icons/signature.svg?react');
  }),
  'sitemap-off': lazy(() => {
    return import('@tabler/icons/sitemap-off.svg?react');
  }),
  sitemap: lazy(() => {
    return import('@tabler/icons/sitemap.svg?react');
  }),
  'skateboard-off': lazy(() => {
    return import('@tabler/icons/skateboard-off.svg?react');
  }),
  skateboard: lazy(() => {
    return import('@tabler/icons/skateboard.svg?react');
  }),
  skateboarding: lazy(() => {
    return import('@tabler/icons/skateboarding.svg?react');
  }),
  skull: lazy(() => {
    return import('@tabler/icons/skull.svg?react');
  }),
  slash: lazy(() => {
    return import('@tabler/icons/slash.svg?react');
  }),
  slashes: lazy(() => {
    return import('@tabler/icons/slashes.svg?react');
  }),
  sleigh: lazy(() => {
    return import('@tabler/icons/sleigh.svg?react');
  }),
  slice: lazy(() => {
    return import('@tabler/icons/slice.svg?react');
  }),
  slideshow: lazy(() => {
    return import('@tabler/icons/slideshow.svg?react');
  }),
  'smart-home-off': lazy(() => {
    return import('@tabler/icons/smart-home-off.svg?react');
  }),
  'smart-home': lazy(() => {
    return import('@tabler/icons/smart-home.svg?react');
  }),
  'smoking-no': lazy(() => {
    return import('@tabler/icons/smoking-no.svg?react');
  }),
  smoking: lazy(() => {
    return import('@tabler/icons/smoking.svg?react');
  }),
  'snowflake-off': lazy(() => {
    return import('@tabler/icons/snowflake-off.svg?react');
  }),
  snowflake: lazy(() => {
    return import('@tabler/icons/snowflake.svg?react');
  }),
  snowman: lazy(() => {
    return import('@tabler/icons/snowman.svg?react');
  }),
  'soccer-field': lazy(() => {
    return import('@tabler/icons/soccer-field.svg?react');
  }),
  'social-off': lazy(() => {
    return import('@tabler/icons/social-off.svg?react');
  }),
  social: lazy(() => {
    return import('@tabler/icons/social.svg?react');
  }),
  sock: lazy(() => {
    return import('@tabler/icons/sock.svg?react');
  }),
  'sofa-off': lazy(() => {
    return import('@tabler/icons/sofa-off.svg?react');
  }),
  sofa: lazy(() => {
    return import('@tabler/icons/sofa.svg?react');
  }),
  'solar-electricity': lazy(() => {
    return import('@tabler/icons/solar-electricity.svg?react');
  }),
  'solar-panel-2': lazy(() => {
    return import('@tabler/icons/solar-panel-2.svg?react');
  }),
  'solar-panel': lazy(() => {
    return import('@tabler/icons/solar-panel.svg?react');
  }),
  'sort-0-9': lazy(() => {
    return import('@tabler/icons/sort-0-9.svg?react');
  }),
  'sort-9-0': lazy(() => {
    return import('@tabler/icons/sort-9-0.svg?react');
  }),
  'sort-a-z': lazy(() => {
    return import('@tabler/icons/sort-a-z.svg?react');
  }),
  'sort-ascending-2': lazy(() => {
    return import('@tabler/icons/sort-ascending-2.svg?react');
  }),
  'sort-ascending-letters': lazy(() => {
    return import('@tabler/icons/sort-ascending-letters.svg?react');
  }),
  'sort-ascending-numbers': lazy(() => {
    return import('@tabler/icons/sort-ascending-numbers.svg?react');
  }),
  'sort-ascending': lazy(() => {
    return import('@tabler/icons/sort-ascending.svg?react');
  }),
  'sort-descending-2': lazy(() => {
    return import('@tabler/icons/sort-descending-2.svg?react');
  }),
  'sort-descending-letters': lazy(() => {
    return import('@tabler/icons/sort-descending-letters.svg?react');
  }),
  'sort-descending-numbers': lazy(() => {
    return import('@tabler/icons/sort-descending-numbers.svg?react');
  }),
  'sort-descending': lazy(() => {
    return import('@tabler/icons/sort-descending.svg?react');
  }),
  'sort-z-a': lazy(() => {
    return import('@tabler/icons/sort-z-a.svg?react');
  }),
  sos: lazy(() => {
    return import('@tabler/icons/sos.svg?react');
  }),
  'soup-off': lazy(() => {
    return import('@tabler/icons/soup-off.svg?react');
  }),
  soup: lazy(() => {
    return import('@tabler/icons/soup.svg?react');
  }),
  'source-code': lazy(() => {
    return import('@tabler/icons/source-code.svg?react');
  }),
  'space-off': lazy(() => {
    return import('@tabler/icons/space-off.svg?react');
  }),
  space: lazy(() => {
    return import('@tabler/icons/space.svg?react');
  }),
  'spacing-horizontal': lazy(() => {
    return import('@tabler/icons/spacing-horizontal.svg?react');
  }),
  'spacing-vertical': lazy(() => {
    return import('@tabler/icons/spacing-vertical.svg?react');
  }),
  'spade-filled': lazy(() => {
    return import('@tabler/icons/spade-filled.svg?react');
  }),
  spade: lazy(() => {
    return import('@tabler/icons/spade.svg?react');
  }),
  sparkles: lazy(() => {
    return import('@tabler/icons/sparkles.svg?react');
  }),
  speakerphone: lazy(() => {
    return import('@tabler/icons/speakerphone.svg?react');
  }),
  speedboat: lazy(() => {
    return import('@tabler/icons/speedboat.svg?react');
  }),
  'sphere-off': lazy(() => {
    return import('@tabler/icons/sphere-off.svg?react');
  }),
  'sphere-plus': lazy(() => {
    return import('@tabler/icons/sphere-plus.svg?react');
  }),
  sphere: lazy(() => {
    return import('@tabler/icons/sphere.svg?react');
  }),
  spider: lazy(() => {
    return import('@tabler/icons/spider.svg?react');
  }),
  'spiral-off': lazy(() => {
    return import('@tabler/icons/spiral-off.svg?react');
  }),
  spiral: lazy(() => {
    return import('@tabler/icons/spiral.svg?react');
  }),
  'sport-billard': lazy(() => {
    return import('@tabler/icons/sport-billard.svg?react');
  }),
  spray: lazy(() => {
    return import('@tabler/icons/spray.svg?react');
  }),
  'spy-off': lazy(() => {
    return import('@tabler/icons/spy-off.svg?react');
  }),
  spy: lazy(() => {
    return import('@tabler/icons/spy.svg?react');
  }),
  sql: lazy(() => {
    return import('@tabler/icons/sql.svg?react');
  }),
  'square-0-filled': lazy(() => {
    return import('@tabler/icons/square-0-filled.svg?react');
  }),
  'square-1-filled': lazy(() => {
    return import('@tabler/icons/square-1-filled.svg?react');
  }),
  'square-2-filled': lazy(() => {
    return import('@tabler/icons/square-2-filled.svg?react');
  }),
  'square-3-filled': lazy(() => {
    return import('@tabler/icons/square-3-filled.svg?react');
  }),
  'square-4-filled': lazy(() => {
    return import('@tabler/icons/square-4-filled.svg?react');
  }),
  'square-5-filled': lazy(() => {
    return import('@tabler/icons/square-5-filled.svg?react');
  }),
  'square-6-filled': lazy(() => {
    return import('@tabler/icons/square-6-filled.svg?react');
  }),
  'square-7-filled': lazy(() => {
    return import('@tabler/icons/square-7-filled.svg?react');
  }),
  'square-8-filled': lazy(() => {
    return import('@tabler/icons/square-8-filled.svg?react');
  }),
  'square-9-filled': lazy(() => {
    return import('@tabler/icons/square-9-filled.svg?react');
  }),
  'square-arrow-down-filled': lazy(() => {
    return import('@tabler/icons/square-arrow-down-filled.svg?react');
  }),
  'square-arrow-down': lazy(() => {
    return import('@tabler/icons/square-arrow-down.svg?react');
  }),
  'square-arrow-left-filled': lazy(() => {
    return import('@tabler/icons/square-arrow-left-filled.svg?react');
  }),
  'square-arrow-left': lazy(() => {
    return import('@tabler/icons/square-arrow-left.svg?react');
  }),
  'square-arrow-right-filled': lazy(() => {
    return import('@tabler/icons/square-arrow-right-filled.svg?react');
  }),
  'square-arrow-right': lazy(() => {
    return import('@tabler/icons/square-arrow-right.svg?react');
  }),
  'square-arrow-up-filled': lazy(() => {
    return import('@tabler/icons/square-arrow-up-filled.svg?react');
  }),
  'square-arrow-up': lazy(() => {
    return import('@tabler/icons/square-arrow-up.svg?react');
  }),
  'square-asterisk-filled': lazy(() => {
    return import('@tabler/icons/square-asterisk-filled.svg?react');
  }),
  'square-asterisk': lazy(() => {
    return import('@tabler/icons/square-asterisk.svg?react');
  }),
  'square-check-filled': lazy(() => {
    return import('@tabler/icons/square-check-filled.svg?react');
  }),
  'square-check': lazy(() => {
    return import('@tabler/icons/square-check.svg?react');
  }),
  'square-chevron-down-filled': lazy(() => {
    return import('@tabler/icons/square-chevron-down-filled.svg?react');
  }),
  'square-chevron-down': lazy(() => {
    return import('@tabler/icons/square-chevron-down.svg?react');
  }),
  'square-chevron-left-filled': lazy(() => {
    return import('@tabler/icons/square-chevron-left-filled.svg?react');
  }),
  'square-chevron-left': lazy(() => {
    return import('@tabler/icons/square-chevron-left.svg?react');
  }),
  'square-chevron-right-filled': lazy(() => {
    return import('@tabler/icons/square-chevron-right-filled.svg?react');
  }),
  'square-chevron-right': lazy(() => {
    return import('@tabler/icons/square-chevron-right.svg?react');
  }),
  'square-chevron-up-filled': lazy(() => {
    return import('@tabler/icons/square-chevron-up-filled.svg?react');
  }),
  'square-chevron-up': lazy(() => {
    return import('@tabler/icons/square-chevron-up.svg?react');
  }),
  'square-chevrons-down-filled': lazy(() => {
    return import('@tabler/icons/square-chevrons-down-filled.svg?react');
  }),
  'square-chevrons-down': lazy(() => {
    return import('@tabler/icons/square-chevrons-down.svg?react');
  }),
  'square-chevrons-left-filled': lazy(() => {
    return import('@tabler/icons/square-chevrons-left-filled.svg?react');
  }),
  'square-chevrons-left': lazy(() => {
    return import('@tabler/icons/square-chevrons-left.svg?react');
  }),
  'square-chevrons-right-filled': lazy(() => {
    return import('@tabler/icons/square-chevrons-right-filled.svg?react');
  }),
  'square-chevrons-right': lazy(() => {
    return import('@tabler/icons/square-chevrons-right.svg?react');
  }),
  'square-chevrons-up-filled': lazy(() => {
    return import('@tabler/icons/square-chevrons-up-filled.svg?react');
  }),
  'square-chevrons-up': lazy(() => {
    return import('@tabler/icons/square-chevrons-up.svg?react');
  }),
  'square-dot-filled': lazy(() => {
    return import('@tabler/icons/square-dot-filled.svg?react');
  }),
  'square-dot': lazy(() => {
    return import('@tabler/icons/square-dot.svg?react');
  }),
  'square-f0-filled': lazy(() => {
    return import('@tabler/icons/square-f0-filled.svg?react');
  }),
  'square-f0': lazy(() => {
    return import('@tabler/icons/square-f0.svg?react');
  }),
  'square-f1-filled': lazy(() => {
    return import('@tabler/icons/square-f1-filled.svg?react');
  }),
  'square-f1': lazy(() => {
    return import('@tabler/icons/square-f1.svg?react');
  }),
  'square-f2-filled': lazy(() => {
    return import('@tabler/icons/square-f2-filled.svg?react');
  }),
  'square-f2': lazy(() => {
    return import('@tabler/icons/square-f2.svg?react');
  }),
  'square-f3-filled': lazy(() => {
    return import('@tabler/icons/square-f3-filled.svg?react');
  }),
  'square-f3': lazy(() => {
    return import('@tabler/icons/square-f3.svg?react');
  }),
  'square-f4-filled': lazy(() => {
    return import('@tabler/icons/square-f4-filled.svg?react');
  }),
  'square-f4': lazy(() => {
    return import('@tabler/icons/square-f4.svg?react');
  }),
  'square-f5-filled': lazy(() => {
    return import('@tabler/icons/square-f5-filled.svg?react');
  }),
  'square-f5': lazy(() => {
    return import('@tabler/icons/square-f5.svg?react');
  }),
  'square-f6-filled': lazy(() => {
    return import('@tabler/icons/square-f6-filled.svg?react');
  }),
  'square-f6': lazy(() => {
    return import('@tabler/icons/square-f6.svg?react');
  }),
  'square-f7-filled': lazy(() => {
    return import('@tabler/icons/square-f7-filled.svg?react');
  }),
  'square-f7': lazy(() => {
    return import('@tabler/icons/square-f7.svg?react');
  }),
  'square-f8-filled': lazy(() => {
    return import('@tabler/icons/square-f8-filled.svg?react');
  }),
  'square-f8': lazy(() => {
    return import('@tabler/icons/square-f8.svg?react');
  }),
  'square-f9-filled': lazy(() => {
    return import('@tabler/icons/square-f9-filled.svg?react');
  }),
  'square-f9': lazy(() => {
    return import('@tabler/icons/square-f9.svg?react');
  }),
  'square-filled': lazy(() => {
    return import('@tabler/icons/square-filled.svg?react');
  }),
  'square-forbid-2': lazy(() => {
    return import('@tabler/icons/square-forbid-2.svg?react');
  }),
  'square-forbid': lazy(() => {
    return import('@tabler/icons/square-forbid.svg?react');
  }),
  'square-half': lazy(() => {
    return import('@tabler/icons/square-half.svg?react');
  }),
  'square-key': lazy(() => {
    return import('@tabler/icons/square-key.svg?react');
  }),
  'square-letter-a': lazy(() => {
    return import('@tabler/icons/square-letter-a.svg?react');
  }),
  'square-letter-b': lazy(() => {
    return import('@tabler/icons/square-letter-b.svg?react');
  }),
  'square-letter-c': lazy(() => {
    return import('@tabler/icons/square-letter-c.svg?react');
  }),
  'square-letter-d': lazy(() => {
    return import('@tabler/icons/square-letter-d.svg?react');
  }),
  'square-letter-e': lazy(() => {
    return import('@tabler/icons/square-letter-e.svg?react');
  }),
  'square-letter-f': lazy(() => {
    return import('@tabler/icons/square-letter-f.svg?react');
  }),
  'square-letter-g': lazy(() => {
    return import('@tabler/icons/square-letter-g.svg?react');
  }),
  'square-letter-h': lazy(() => {
    return import('@tabler/icons/square-letter-h.svg?react');
  }),
  'square-letter-i': lazy(() => {
    return import('@tabler/icons/square-letter-i.svg?react');
  }),
  'square-letter-j': lazy(() => {
    return import('@tabler/icons/square-letter-j.svg?react');
  }),
  'square-letter-k': lazy(() => {
    return import('@tabler/icons/square-letter-k.svg?react');
  }),
  'square-letter-l': lazy(() => {
    return import('@tabler/icons/square-letter-l.svg?react');
  }),
  'square-letter-m': lazy(() => {
    return import('@tabler/icons/square-letter-m.svg?react');
  }),
  'square-letter-n': lazy(() => {
    return import('@tabler/icons/square-letter-n.svg?react');
  }),
  'square-letter-o': lazy(() => {
    return import('@tabler/icons/square-letter-o.svg?react');
  }),
  'square-letter-p': lazy(() => {
    return import('@tabler/icons/square-letter-p.svg?react');
  }),
  'square-letter-q': lazy(() => {
    return import('@tabler/icons/square-letter-q.svg?react');
  }),
  'square-letter-r': lazy(() => {
    return import('@tabler/icons/square-letter-r.svg?react');
  }),
  'square-letter-s': lazy(() => {
    return import('@tabler/icons/square-letter-s.svg?react');
  }),
  'square-letter-t': lazy(() => {
    return import('@tabler/icons/square-letter-t.svg?react');
  }),
  'square-letter-u': lazy(() => {
    return import('@tabler/icons/square-letter-u.svg?react');
  }),
  'square-letter-v': lazy(() => {
    return import('@tabler/icons/square-letter-v.svg?react');
  }),
  'square-letter-w': lazy(() => {
    return import('@tabler/icons/square-letter-w.svg?react');
  }),
  'square-letter-x': lazy(() => {
    return import('@tabler/icons/square-letter-x.svg?react');
  }),
  'square-letter-y': lazy(() => {
    return import('@tabler/icons/square-letter-y.svg?react');
  }),
  'square-letter-z': lazy(() => {
    return import('@tabler/icons/square-letter-z.svg?react');
  }),
  'square-minus-filled': lazy(() => {
    return import('@tabler/icons/square-minus-filled.svg?react');
  }),
  'square-minus': lazy(() => {
    return import('@tabler/icons/square-minus.svg?react');
  }),
  'square-number-0': lazy(() => {
    return import('@tabler/icons/square-number-0.svg?react');
  }),
  'square-number-1': lazy(() => {
    return import('@tabler/icons/square-number-1.svg?react');
  }),
  'square-number-2': lazy(() => {
    return import('@tabler/icons/square-number-2.svg?react');
  }),
  'square-number-3': lazy(() => {
    return import('@tabler/icons/square-number-3.svg?react');
  }),
  'square-number-4': lazy(() => {
    return import('@tabler/icons/square-number-4.svg?react');
  }),
  'square-number-5': lazy(() => {
    return import('@tabler/icons/square-number-5.svg?react');
  }),
  'square-number-6': lazy(() => {
    return import('@tabler/icons/square-number-6.svg?react');
  }),
  'square-number-7': lazy(() => {
    return import('@tabler/icons/square-number-7.svg?react');
  }),
  'square-number-8': lazy(() => {
    return import('@tabler/icons/square-number-8.svg?react');
  }),
  'square-number-9': lazy(() => {
    return import('@tabler/icons/square-number-9.svg?react');
  }),
  'square-off': lazy(() => {
    return import('@tabler/icons/square-off.svg?react');
  }),
  'square-plus-2': lazy(() => {
    return import('@tabler/icons/square-plus-2.svg?react');
  }),
  'square-plus': lazy(() => {
    return import('@tabler/icons/square-plus.svg?react');
  }),
  'square-root-2': lazy(() => {
    return import('@tabler/icons/square-root-2.svg?react');
  }),
  'square-root': lazy(() => {
    return import('@tabler/icons/square-root.svg?react');
  }),
  'square-rotated-filled': lazy(() => {
    return import('@tabler/icons/square-rotated-filled.svg?react');
  }),
  'square-rotated-forbid-2': lazy(() => {
    return import('@tabler/icons/square-rotated-forbid-2.svg?react');
  }),
  'square-rotated-forbid': lazy(() => {
    return import('@tabler/icons/square-rotated-forbid.svg?react');
  }),
  'square-rotated-off': lazy(() => {
    return import('@tabler/icons/square-rotated-off.svg?react');
  }),
  'square-rotated': lazy(() => {
    return import('@tabler/icons/square-rotated.svg?react');
  }),
  'square-rounded-arrow-down-filled': lazy(() => {
    return import('@tabler/icons/square-rounded-arrow-down-filled.svg?react');
  }),
  'square-rounded-arrow-down': lazy(() => {
    return import('@tabler/icons/square-rounded-arrow-down.svg?react');
  }),
  'square-rounded-arrow-left-filled': lazy(() => {
    return import('@tabler/icons/square-rounded-arrow-left-filled.svg?react');
  }),
  'square-rounded-arrow-left': lazy(() => {
    return import('@tabler/icons/square-rounded-arrow-left.svg?react');
  }),
  'square-rounded-arrow-right-filled': lazy(() => {
    return import('@tabler/icons/square-rounded-arrow-right-filled.svg?react');
  }),
  'square-rounded-arrow-right': lazy(() => {
    return import('@tabler/icons/square-rounded-arrow-right.svg?react');
  }),
  'square-rounded-arrow-up-filled': lazy(() => {
    return import('@tabler/icons/square-rounded-arrow-up-filled.svg?react');
  }),
  'square-rounded-arrow-up': lazy(() => {
    return import('@tabler/icons/square-rounded-arrow-up.svg?react');
  }),
  'square-rounded-check-filled': lazy(() => {
    return import('@tabler/icons/square-rounded-check-filled.svg?react');
  }),
  'square-rounded-check': lazy(() => {
    return import('@tabler/icons/square-rounded-check.svg?react');
  }),
  'square-rounded-chevron-down-filled': lazy(() => {
    return import('@tabler/icons/square-rounded-chevron-down-filled.svg?react');
  }),
  'square-rounded-chevron-down': lazy(() => {
    return import('@tabler/icons/square-rounded-chevron-down.svg?react');
  }),
  'square-rounded-chevron-left-filled': lazy(() => {
    return import('@tabler/icons/square-rounded-chevron-left-filled.svg?react');
  }),
  'square-rounded-chevron-left': lazy(() => {
    return import('@tabler/icons/square-rounded-chevron-left.svg?react');
  }),
  'square-rounded-chevron-right-filled': lazy(() => {
    return import('@tabler/icons/square-rounded-chevron-right-filled.svg?react');
  }),
  'square-rounded-chevron-right': lazy(() => {
    return import('@tabler/icons/square-rounded-chevron-right.svg?react');
  }),
  'square-rounded-chevron-up-filled': lazy(() => {
    return import('@tabler/icons/square-rounded-chevron-up-filled.svg?react');
  }),
  'square-rounded-chevron-up': lazy(() => {
    return import('@tabler/icons/square-rounded-chevron-up.svg?react');
  }),
  'square-rounded-chevrons-down-filled': lazy(() => {
    return import('@tabler/icons/square-rounded-chevrons-down-filled.svg?react');
  }),
  'square-rounded-chevrons-down': lazy(() => {
    return import('@tabler/icons/square-rounded-chevrons-down.svg?react');
  }),
  'square-rounded-chevrons-left-filled': lazy(() => {
    return import('@tabler/icons/square-rounded-chevrons-left-filled.svg?react');
  }),
  'square-rounded-chevrons-left': lazy(() => {
    return import('@tabler/icons/square-rounded-chevrons-left.svg?react');
  }),
  'square-rounded-chevrons-right-filled': lazy(() => {
    return import('@tabler/icons/square-rounded-chevrons-right-filled.svg?react');
  }),
  'square-rounded-chevrons-right': lazy(() => {
    return import('@tabler/icons/square-rounded-chevrons-right.svg?react');
  }),
  'square-rounded-chevrons-up-filled': lazy(() => {
    return import('@tabler/icons/square-rounded-chevrons-up-filled.svg?react');
  }),
  'square-rounded-chevrons-up': lazy(() => {
    return import('@tabler/icons/square-rounded-chevrons-up.svg?react');
  }),
  'square-rounded-filled': lazy(() => {
    return import('@tabler/icons/square-rounded-filled.svg?react');
  }),
  'square-rounded-letter-a': lazy(() => {
    return import('@tabler/icons/square-rounded-letter-a.svg?react');
  }),
  'square-rounded-letter-b': lazy(() => {
    return import('@tabler/icons/square-rounded-letter-b.svg?react');
  }),
  'square-rounded-letter-c': lazy(() => {
    return import('@tabler/icons/square-rounded-letter-c.svg?react');
  }),
  'square-rounded-letter-d': lazy(() => {
    return import('@tabler/icons/square-rounded-letter-d.svg?react');
  }),
  'square-rounded-letter-e': lazy(() => {
    return import('@tabler/icons/square-rounded-letter-e.svg?react');
  }),
  'square-rounded-letter-f': lazy(() => {
    return import('@tabler/icons/square-rounded-letter-f.svg?react');
  }),
  'square-rounded-letter-g': lazy(() => {
    return import('@tabler/icons/square-rounded-letter-g.svg?react');
  }),
  'square-rounded-letter-h': lazy(() => {
    return import('@tabler/icons/square-rounded-letter-h.svg?react');
  }),
  'square-rounded-letter-i': lazy(() => {
    return import('@tabler/icons/square-rounded-letter-i.svg?react');
  }),
  'square-rounded-letter-j': lazy(() => {
    return import('@tabler/icons/square-rounded-letter-j.svg?react');
  }),
  'square-rounded-letter-k': lazy(() => {
    return import('@tabler/icons/square-rounded-letter-k.svg?react');
  }),
  'square-rounded-letter-l': lazy(() => {
    return import('@tabler/icons/square-rounded-letter-l.svg?react');
  }),
  'square-rounded-letter-m': lazy(() => {
    return import('@tabler/icons/square-rounded-letter-m.svg?react');
  }),
  'square-rounded-letter-n': lazy(() => {
    return import('@tabler/icons/square-rounded-letter-n.svg?react');
  }),
  'square-rounded-letter-o': lazy(() => {
    return import('@tabler/icons/square-rounded-letter-o.svg?react');
  }),
  'square-rounded-letter-p': lazy(() => {
    return import('@tabler/icons/square-rounded-letter-p.svg?react');
  }),
  'square-rounded-letter-q': lazy(() => {
    return import('@tabler/icons/square-rounded-letter-q.svg?react');
  }),
  'square-rounded-letter-r': lazy(() => {
    return import('@tabler/icons/square-rounded-letter-r.svg?react');
  }),
  'square-rounded-letter-s': lazy(() => {
    return import('@tabler/icons/square-rounded-letter-s.svg?react');
  }),
  'square-rounded-letter-t': lazy(() => {
    return import('@tabler/icons/square-rounded-letter-t.svg?react');
  }),
  'square-rounded-letter-u': lazy(() => {
    return import('@tabler/icons/square-rounded-letter-u.svg?react');
  }),
  'square-rounded-letter-v': lazy(() => {
    return import('@tabler/icons/square-rounded-letter-v.svg?react');
  }),
  'square-rounded-letter-w': lazy(() => {
    return import('@tabler/icons/square-rounded-letter-w.svg?react');
  }),
  'square-rounded-letter-x': lazy(() => {
    return import('@tabler/icons/square-rounded-letter-x.svg?react');
  }),
  'square-rounded-letter-y': lazy(() => {
    return import('@tabler/icons/square-rounded-letter-y.svg?react');
  }),
  'square-rounded-letter-z': lazy(() => {
    return import('@tabler/icons/square-rounded-letter-z.svg?react');
  }),
  'square-rounded-minus-2': lazy(() => {
    return import('@tabler/icons/square-rounded-minus-2.svg?react');
  }),
  'square-rounded-minus-filled': lazy(() => {
    return import('@tabler/icons/square-rounded-minus-filled.svg?react');
  }),
  'square-rounded-minus': lazy(() => {
    return import('@tabler/icons/square-rounded-minus.svg?react');
  }),
  'square-rounded-number-0-filled': lazy(() => {
    return import('@tabler/icons/square-rounded-number-0-filled.svg?react');
  }),
  'square-rounded-number-0': lazy(() => {
    return import('@tabler/icons/square-rounded-number-0.svg?react');
  }),
  'square-rounded-number-1-filled': lazy(() => {
    return import('@tabler/icons/square-rounded-number-1-filled.svg?react');
  }),
  'square-rounded-number-1': lazy(() => {
    return import('@tabler/icons/square-rounded-number-1.svg?react');
  }),
  'square-rounded-number-2-filled': lazy(() => {
    return import('@tabler/icons/square-rounded-number-2-filled.svg?react');
  }),
  'square-rounded-number-2': lazy(() => {
    return import('@tabler/icons/square-rounded-number-2.svg?react');
  }),
  'square-rounded-number-3-filled': lazy(() => {
    return import('@tabler/icons/square-rounded-number-3-filled.svg?react');
  }),
  'square-rounded-number-3': lazy(() => {
    return import('@tabler/icons/square-rounded-number-3.svg?react');
  }),
  'square-rounded-number-4-filled': lazy(() => {
    return import('@tabler/icons/square-rounded-number-4-filled.svg?react');
  }),
  'square-rounded-number-4': lazy(() => {
    return import('@tabler/icons/square-rounded-number-4.svg?react');
  }),
  'square-rounded-number-5-filled': lazy(() => {
    return import('@tabler/icons/square-rounded-number-5-filled.svg?react');
  }),
  'square-rounded-number-5': lazy(() => {
    return import('@tabler/icons/square-rounded-number-5.svg?react');
  }),
  'square-rounded-number-6-filled': lazy(() => {
    return import('@tabler/icons/square-rounded-number-6-filled.svg?react');
  }),
  'square-rounded-number-6': lazy(() => {
    return import('@tabler/icons/square-rounded-number-6.svg?react');
  }),
  'square-rounded-number-7-filled': lazy(() => {
    return import('@tabler/icons/square-rounded-number-7-filled.svg?react');
  }),
  'square-rounded-number-7': lazy(() => {
    return import('@tabler/icons/square-rounded-number-7.svg?react');
  }),
  'square-rounded-number-8-filled': lazy(() => {
    return import('@tabler/icons/square-rounded-number-8-filled.svg?react');
  }),
  'square-rounded-number-8': lazy(() => {
    return import('@tabler/icons/square-rounded-number-8.svg?react');
  }),
  'square-rounded-number-9-filled': lazy(() => {
    return import('@tabler/icons/square-rounded-number-9-filled.svg?react');
  }),
  'square-rounded-number-9': lazy(() => {
    return import('@tabler/icons/square-rounded-number-9.svg?react');
  }),
  'square-rounded-plus-2': lazy(() => {
    return import('@tabler/icons/square-rounded-plus-2.svg?react');
  }),
  'square-rounded-plus-filled': lazy(() => {
    return import('@tabler/icons/square-rounded-plus-filled.svg?react');
  }),
  'square-rounded-plus': lazy(() => {
    return import('@tabler/icons/square-rounded-plus.svg?react');
  }),
  'square-rounded-x-filled': lazy(() => {
    return import('@tabler/icons/square-rounded-x-filled.svg?react');
  }),
  'square-rounded-x': lazy(() => {
    return import('@tabler/icons/square-rounded-x.svg?react');
  }),
  'square-rounded': lazy(() => {
    return import('@tabler/icons/square-rounded.svg?react');
  }),
  'square-toggle-horizontal': lazy(() => {
    return import('@tabler/icons/square-toggle-horizontal.svg?react');
  }),
  'square-toggle': lazy(() => {
    return import('@tabler/icons/square-toggle.svg?react');
  }),
  'square-x-filled': lazy(() => {
    return import('@tabler/icons/square-x-filled.svg?react');
  }),
  'square-x': lazy(() => {
    return import('@tabler/icons/square-x.svg?react');
  }),
  square: lazy(() => {
    return import('@tabler/icons/square.svg?react');
  }),
  'squares-diagonal': lazy(() => {
    return import('@tabler/icons/squares-diagonal.svg?react');
  }),
  'squares-filled': lazy(() => {
    return import('@tabler/icons/squares-filled.svg?react');
  }),
  'stack-2': lazy(() => {
    return import('@tabler/icons/stack-2.svg?react');
  }),
  'stack-3': lazy(() => {
    return import('@tabler/icons/stack-3.svg?react');
  }),
  'stack-pop': lazy(() => {
    return import('@tabler/icons/stack-pop.svg?react');
  }),
  'stack-push': lazy(() => {
    return import('@tabler/icons/stack-push.svg?react');
  }),
  stack: lazy(() => {
    return import('@tabler/icons/stack.svg?react');
  }),
  'stairs-down': lazy(() => {
    return import('@tabler/icons/stairs-down.svg?react');
  }),
  'stairs-up': lazy(() => {
    return import('@tabler/icons/stairs-up.svg?react');
  }),
  stairs: lazy(() => {
    return import('@tabler/icons/stairs.svg?react');
  }),
  'star-filled': lazy(() => {
    return import('@tabler/icons/star-filled.svg?react');
  }),
  'star-half-filled': lazy(() => {
    return import('@tabler/icons/star-half-filled.svg?react');
  }),
  'star-half': lazy(() => {
    return import('@tabler/icons/star-half.svg?react');
  }),
  'star-off': lazy(() => {
    return import('@tabler/icons/star-off.svg?react');
  }),
  star: lazy(() => {
    return import('@tabler/icons/star.svg?react');
  }),
  'stars-filled': lazy(() => {
    return import('@tabler/icons/stars-filled.svg?react');
  }),
  'stars-off': lazy(() => {
    return import('@tabler/icons/stars-off.svg?react');
  }),
  stars: lazy(() => {
    return import('@tabler/icons/stars.svg?react');
  }),
  'status-change': lazy(() => {
    return import('@tabler/icons/status-change.svg?react');
  }),
  steam: lazy(() => {
    return import('@tabler/icons/steam.svg?react');
  }),
  'steering-wheel-off': lazy(() => {
    return import('@tabler/icons/steering-wheel-off.svg?react');
  }),
  'steering-wheel': lazy(() => {
    return import('@tabler/icons/steering-wheel.svg?react');
  }),
  'step-into': lazy(() => {
    return import('@tabler/icons/step-into.svg?react');
  }),
  'step-out': lazy(() => {
    return import('@tabler/icons/step-out.svg?react');
  }),
  'stereo-glasses': lazy(() => {
    return import('@tabler/icons/stereo-glasses.svg?react');
  }),
  'stethoscope-off': lazy(() => {
    return import('@tabler/icons/stethoscope-off.svg?react');
  }),
  stethoscope: lazy(() => {
    return import('@tabler/icons/stethoscope.svg?react');
  }),
  sticker: lazy(() => {
    return import('@tabler/icons/sticker.svg?react');
  }),
  'storm-off': lazy(() => {
    return import('@tabler/icons/storm-off.svg?react');
  }),
  storm: lazy(() => {
    return import('@tabler/icons/storm.svg?react');
  }),
  'stretching-2': lazy(() => {
    return import('@tabler/icons/stretching-2.svg?react');
  }),
  stretching: lazy(() => {
    return import('@tabler/icons/stretching.svg?react');
  }),
  strikethrough: lazy(() => {
    return import('@tabler/icons/strikethrough.svg?react');
  }),
  submarine: lazy(() => {
    return import('@tabler/icons/submarine.svg?react');
  }),
  subscript: lazy(() => {
    return import('@tabler/icons/subscript.svg?react');
  }),
  subtask: lazy(() => {
    return import('@tabler/icons/subtask.svg?react');
  }),
  'sum-off': lazy(() => {
    return import('@tabler/icons/sum-off.svg?react');
  }),
  sum: lazy(() => {
    return import('@tabler/icons/sum.svg?react');
  }),
  'sun-electricity': lazy(() => {
    return import('@tabler/icons/sun-electricity.svg?react');
  }),
  'sun-filled': lazy(() => {
    return import('@tabler/icons/sun-filled.svg?react');
  }),
  'sun-high': lazy(() => {
    return import('@tabler/icons/sun-high.svg?react');
  }),
  'sun-low': lazy(() => {
    return import('@tabler/icons/sun-low.svg?react');
  }),
  'sun-moon': lazy(() => {
    return import('@tabler/icons/sun-moon.svg?react');
  }),
  'sun-off': lazy(() => {
    return import('@tabler/icons/sun-off.svg?react');
  }),
  'sun-wind': lazy(() => {
    return import('@tabler/icons/sun-wind.svg?react');
  }),
  sun: lazy(() => {
    return import('@tabler/icons/sun.svg?react');
  }),
  sunglasses: lazy(() => {
    return import('@tabler/icons/sunglasses.svg?react');
  }),
  sunrise: lazy(() => {
    return import('@tabler/icons/sunrise.svg?react');
  }),
  'sunset-2': lazy(() => {
    return import('@tabler/icons/sunset-2.svg?react');
  }),
  sunset: lazy(() => {
    return import('@tabler/icons/sunset.svg?react');
  }),
  superscript: lazy(() => {
    return import('@tabler/icons/superscript.svg?react');
  }),
  svg: lazy(() => {
    return import('@tabler/icons/svg.svg?react');
  }),
  swimming: lazy(() => {
    return import('@tabler/icons/swimming.svg?react');
  }),
  swipe: lazy(() => {
    return import('@tabler/icons/swipe.svg?react');
  }),
  'switch-2': lazy(() => {
    return import('@tabler/icons/switch-2.svg?react');
  }),
  'switch-3': lazy(() => {
    return import('@tabler/icons/switch-3.svg?react');
  }),
  'switch-horizontal': lazy(() => {
    return import('@tabler/icons/switch-horizontal.svg?react');
  }),
  'switch-vertical': lazy(() => {
    return import('@tabler/icons/switch-vertical.svg?react');
  }),
  switch: lazy(() => {
    return import('@tabler/icons/switch.svg?react');
  }),
  'sword-off': lazy(() => {
    return import('@tabler/icons/sword-off.svg?react');
  }),
  sword: lazy(() => {
    return import('@tabler/icons/sword.svg?react');
  }),
  swords: lazy(() => {
    return import('@tabler/icons/swords.svg?react');
  }),
  'table-alias': lazy(() => {
    return import('@tabler/icons/table-alias.svg?react');
  }),
  'table-column': lazy(() => {
    return import('@tabler/icons/table-column.svg?react');
  }),
  'table-down': lazy(() => {
    return import('@tabler/icons/table-down.svg?react');
  }),
  'table-export': lazy(() => {
    return import('@tabler/icons/table-export.svg?react');
  }),
  'table-filled': lazy(() => {
    return import('@tabler/icons/table-filled.svg?react');
  }),
  'table-heart': lazy(() => {
    return import('@tabler/icons/table-heart.svg?react');
  }),
  'table-import': lazy(() => {
    return import('@tabler/icons/table-import.svg?react');
  }),
  'table-minus': lazy(() => {
    return import('@tabler/icons/table-minus.svg?react');
  }),
  'table-off': lazy(() => {
    return import('@tabler/icons/table-off.svg?react');
  }),
  'table-options': lazy(() => {
    return import('@tabler/icons/table-options.svg?react');
  }),
  'table-plus': lazy(() => {
    return import('@tabler/icons/table-plus.svg?react');
  }),
  'table-row': lazy(() => {
    return import('@tabler/icons/table-row.svg?react');
  }),
  'table-share': lazy(() => {
    return import('@tabler/icons/table-share.svg?react');
  }),
  'table-shortcut': lazy(() => {
    return import('@tabler/icons/table-shortcut.svg?react');
  }),
  table: lazy(() => {
    return import('@tabler/icons/table.svg?react');
  }),
  'tag-off': lazy(() => {
    return import('@tabler/icons/tag-off.svg?react');
  }),
  'tag-starred': lazy(() => {
    return import('@tabler/icons/tag-starred.svg?react');
  }),
  tag: lazy(() => {
    return import('@tabler/icons/tag.svg?react');
  }),
  'tags-off': lazy(() => {
    return import('@tabler/icons/tags-off.svg?react');
  }),
  tags: lazy(() => {
    return import('@tabler/icons/tags.svg?react');
  }),
  'tallymark-1': lazy(() => {
    return import('@tabler/icons/tallymark-1.svg?react');
  }),
  'tallymark-2': lazy(() => {
    return import('@tabler/icons/tallymark-2.svg?react');
  }),
  'tallymark-3': lazy(() => {
    return import('@tabler/icons/tallymark-3.svg?react');
  }),
  'tallymark-4': lazy(() => {
    return import('@tabler/icons/tallymark-4.svg?react');
  }),
  tallymarks: lazy(() => {
    return import('@tabler/icons/tallymarks.svg?react');
  }),
  tank: lazy(() => {
    return import('@tabler/icons/tank.svg?react');
  }),
  'target-arrow': lazy(() => {
    return import('@tabler/icons/target-arrow.svg?react');
  }),
  'target-off': lazy(() => {
    return import('@tabler/icons/target-off.svg?react');
  }),
  target: lazy(() => {
    return import('@tabler/icons/target.svg?react');
  }),
  teapot: lazy(() => {
    return import('@tabler/icons/teapot.svg?react');
  }),
  'telescope-off': lazy(() => {
    return import('@tabler/icons/telescope-off.svg?react');
  }),
  telescope: lazy(() => {
    return import('@tabler/icons/telescope.svg?react');
  }),
  'temperature-celsius': lazy(() => {
    return import('@tabler/icons/temperature-celsius.svg?react');
  }),
  'temperature-fahrenheit': lazy(() => {
    return import('@tabler/icons/temperature-fahrenheit.svg?react');
  }),
  'temperature-minus': lazy(() => {
    return import('@tabler/icons/temperature-minus.svg?react');
  }),
  'temperature-off': lazy(() => {
    return import('@tabler/icons/temperature-off.svg?react');
  }),
  'temperature-plus': lazy(() => {
    return import('@tabler/icons/temperature-plus.svg?react');
  }),
  temperature: lazy(() => {
    return import('@tabler/icons/temperature.svg?react');
  }),
  'template-off': lazy(() => {
    return import('@tabler/icons/template-off.svg?react');
  }),
  template: lazy(() => {
    return import('@tabler/icons/template.svg?react');
  }),
  'tent-off': lazy(() => {
    return import('@tabler/icons/tent-off.svg?react');
  }),
  tent: lazy(() => {
    return import('@tabler/icons/tent.svg?react');
  }),
  'terminal-2': lazy(() => {
    return import('@tabler/icons/terminal-2.svg?react');
  }),
  terminal: lazy(() => {
    return import('@tabler/icons/terminal.svg?react');
  }),
  'test-pipe-2': lazy(() => {
    return import('@tabler/icons/test-pipe-2.svg?react');
  }),
  'test-pipe-off': lazy(() => {
    return import('@tabler/icons/test-pipe-off.svg?react');
  }),
  'test-pipe': lazy(() => {
    return import('@tabler/icons/test-pipe.svg?react');
  }),
  tex: lazy(() => {
    return import('@tabler/icons/tex.svg?react');
  }),
  'text-caption': lazy(() => {
    return import('@tabler/icons/text-caption.svg?react');
  }),
  'text-color': lazy(() => {
    return import('@tabler/icons/text-color.svg?react');
  }),
  'text-decrease': lazy(() => {
    return import('@tabler/icons/text-decrease.svg?react');
  }),
  'text-direction-ltr': lazy(() => {
    return import('@tabler/icons/text-direction-ltr.svg?react');
  }),
  'text-direction-rtl': lazy(() => {
    return import('@tabler/icons/text-direction-rtl.svg?react');
  }),
  'text-increase': lazy(() => {
    return import('@tabler/icons/text-increase.svg?react');
  }),
  'text-orientation': lazy(() => {
    return import('@tabler/icons/text-orientation.svg?react');
  }),
  'text-plus': lazy(() => {
    return import('@tabler/icons/text-plus.svg?react');
  }),
  'text-recognition': lazy(() => {
    return import('@tabler/icons/text-recognition.svg?react');
  }),
  'text-resize': lazy(() => {
    return import('@tabler/icons/text-resize.svg?react');
  }),
  'text-scan-2': lazy(() => {
    return import('@tabler/icons/text-scan-2.svg?react');
  }),
  'text-size': lazy(() => {
    return import('@tabler/icons/text-size.svg?react');
  }),
  'text-spellcheck': lazy(() => {
    return import('@tabler/icons/text-spellcheck.svg?react');
  }),
  'text-wrap-disabled': lazy(() => {
    return import('@tabler/icons/text-wrap-disabled.svg?react');
  }),
  'text-wrap': lazy(() => {
    return import('@tabler/icons/text-wrap.svg?react');
  }),
  texture: lazy(() => {
    return import('@tabler/icons/texture.svg?react');
  }),
  theater: lazy(() => {
    return import('@tabler/icons/theater.svg?react');
  }),
  thermometer: lazy(() => {
    return import('@tabler/icons/thermometer.svg?react');
  }),
  'thumb-down-filled': lazy(() => {
    return import('@tabler/icons/thumb-down-filled.svg?react');
  }),
  'thumb-down-off': lazy(() => {
    return import('@tabler/icons/thumb-down-off.svg?react');
  }),
  'thumb-down': lazy(() => {
    return import('@tabler/icons/thumb-down.svg?react');
  }),
  'thumb-up-filled': lazy(() => {
    return import('@tabler/icons/thumb-up-filled.svg?react');
  }),
  'thumb-up-off': lazy(() => {
    return import('@tabler/icons/thumb-up-off.svg?react');
  }),
  'thumb-up': lazy(() => {
    return import('@tabler/icons/thumb-up.svg?react');
  }),
  'tic-tac': lazy(() => {
    return import('@tabler/icons/tic-tac.svg?react');
  }),
  'ticket-off': lazy(() => {
    return import('@tabler/icons/ticket-off.svg?react');
  }),
  ticket: lazy(() => {
    return import('@tabler/icons/ticket.svg?react');
  }),
  tie: lazy(() => {
    return import('@tabler/icons/tie.svg?react');
  }),
  tilde: lazy(() => {
    return import('@tabler/icons/tilde.svg?react');
  }),
  'tilt-shift-off': lazy(() => {
    return import('@tabler/icons/tilt-shift-off.svg?react');
  }),
  'tilt-shift': lazy(() => {
    return import('@tabler/icons/tilt-shift.svg?react');
  }),
  'time-duration-0': lazy(() => {
    return import('@tabler/icons/time-duration-0.svg?react');
  }),
  'time-duration-10': lazy(() => {
    return import('@tabler/icons/time-duration-10.svg?react');
  }),
  'time-duration-15': lazy(() => {
    return import('@tabler/icons/time-duration-15.svg?react');
  }),
  'time-duration-30': lazy(() => {
    return import('@tabler/icons/time-duration-30.svg?react');
  }),
  'time-duration-45': lazy(() => {
    return import('@tabler/icons/time-duration-45.svg?react');
  }),
  'time-duration-5': lazy(() => {
    return import('@tabler/icons/time-duration-5.svg?react');
  }),
  'time-duration-60': lazy(() => {
    return import('@tabler/icons/time-duration-60.svg?react');
  }),
  'time-duration-90': lazy(() => {
    return import('@tabler/icons/time-duration-90.svg?react');
  }),
  'time-duration-off': lazy(() => {
    return import('@tabler/icons/time-duration-off.svg?react');
  }),
  'timeline-event-exclamation': lazy(() => {
    return import('@tabler/icons/timeline-event-exclamation.svg?react');
  }),
  'timeline-event-minus': lazy(() => {
    return import('@tabler/icons/timeline-event-minus.svg?react');
  }),
  'timeline-event-plus': lazy(() => {
    return import('@tabler/icons/timeline-event-plus.svg?react');
  }),
  'timeline-event-text': lazy(() => {
    return import('@tabler/icons/timeline-event-text.svg?react');
  }),
  'timeline-event-x': lazy(() => {
    return import('@tabler/icons/timeline-event-x.svg?react');
  }),
  'timeline-event': lazy(() => {
    return import('@tabler/icons/timeline-event.svg?react');
  }),
  timeline: lazy(() => {
    return import('@tabler/icons/timeline.svg?react');
  }),
  tir: lazy(() => {
    return import('@tabler/icons/tir.svg?react');
  }),
  'toggle-left': lazy(() => {
    return import('@tabler/icons/toggle-left.svg?react');
  }),
  'toggle-right': lazy(() => {
    return import('@tabler/icons/toggle-right.svg?react');
  }),
  'toilet-paper-off': lazy(() => {
    return import('@tabler/icons/toilet-paper-off.svg?react');
  }),
  'toilet-paper': lazy(() => {
    return import('@tabler/icons/toilet-paper.svg?react');
  }),
  toml: lazy(() => {
    return import('@tabler/icons/toml.svg?react');
  }),
  tool: lazy(() => {
    return import('@tabler/icons/tool.svg?react');
  }),
  'tools-kitchen-2-off': lazy(() => {
    return import('@tabler/icons/tools-kitchen-2-off.svg?react');
  }),
  'tools-kitchen-2': lazy(() => {
    return import('@tabler/icons/tools-kitchen-2.svg?react');
  }),
  'tools-kitchen-off': lazy(() => {
    return import('@tabler/icons/tools-kitchen-off.svg?react');
  }),
  'tools-kitchen': lazy(() => {
    return import('@tabler/icons/tools-kitchen.svg?react');
  }),
  'tools-off': lazy(() => {
    return import('@tabler/icons/tools-off.svg?react');
  }),
  tools: lazy(() => {
    return import('@tabler/icons/tools.svg?react');
  }),
  tooltip: lazy(() => {
    return import('@tabler/icons/tooltip.svg?react');
  }),
  'topology-bus': lazy(() => {
    return import('@tabler/icons/topology-bus.svg?react');
  }),
  'topology-complex': lazy(() => {
    return import('@tabler/icons/topology-complex.svg?react');
  }),
  'topology-full-hierarchy': lazy(() => {
    return import('@tabler/icons/topology-full-hierarchy.svg?react');
  }),
  'topology-full': lazy(() => {
    return import('@tabler/icons/topology-full.svg?react');
  }),
  'topology-ring-2': lazy(() => {
    return import('@tabler/icons/topology-ring-2.svg?react');
  }),
  'topology-ring-3': lazy(() => {
    return import('@tabler/icons/topology-ring-3.svg?react');
  }),
  'topology-ring': lazy(() => {
    return import('@tabler/icons/topology-ring.svg?react');
  }),
  'topology-star-2': lazy(() => {
    return import('@tabler/icons/topology-star-2.svg?react');
  }),
  'topology-star-3': lazy(() => {
    return import('@tabler/icons/topology-star-3.svg?react');
  }),
  'topology-star-ring-2': lazy(() => {
    return import('@tabler/icons/topology-star-ring-2.svg?react');
  }),
  'topology-star-ring-3': lazy(() => {
    return import('@tabler/icons/topology-star-ring-3.svg?react');
  }),
  'topology-star-ring': lazy(() => {
    return import('@tabler/icons/topology-star-ring.svg?react');
  }),
  'topology-star': lazy(() => {
    return import('@tabler/icons/topology-star.svg?react');
  }),
  torii: lazy(() => {
    return import('@tabler/icons/torii.svg?react');
  }),
  tornado: lazy(() => {
    return import('@tabler/icons/tornado.svg?react');
  }),
  tournament: lazy(() => {
    return import('@tabler/icons/tournament.svg?react');
  }),
  'tower-off': lazy(() => {
    return import('@tabler/icons/tower-off.svg?react');
  }),
  tower: lazy(() => {
    return import('@tabler/icons/tower.svg?react');
  }),
  track: lazy(() => {
    return import('@tabler/icons/track.svg?react');
  }),
  tractor: lazy(() => {
    return import('@tabler/icons/tractor.svg?react');
  }),
  trademark: lazy(() => {
    return import('@tabler/icons/trademark.svg?react');
  }),
  'traffic-cone-off': lazy(() => {
    return import('@tabler/icons/traffic-cone-off.svg?react');
  }),
  'traffic-cone': lazy(() => {
    return import('@tabler/icons/traffic-cone.svg?react');
  }),
  'traffic-lights-off': lazy(() => {
    return import('@tabler/icons/traffic-lights-off.svg?react');
  }),
  'traffic-lights': lazy(() => {
    return import('@tabler/icons/traffic-lights.svg?react');
  }),
  train: lazy(() => {
    return import('@tabler/icons/train.svg?react');
  }),
  'transfer-in': lazy(() => {
    return import('@tabler/icons/transfer-in.svg?react');
  }),
  'transfer-out': lazy(() => {
    return import('@tabler/icons/transfer-out.svg?react');
  }),
  'transfer-vertical': lazy(() => {
    return import('@tabler/icons/transfer-vertical.svg?react');
  }),
  transfer: lazy(() => {
    return import('@tabler/icons/transfer.svg?react');
  }),
  'transform-filled': lazy(() => {
    return import('@tabler/icons/transform-filled.svg?react');
  }),
  transform: lazy(() => {
    return import('@tabler/icons/transform.svg?react');
  }),
  'transition-bottom': lazy(() => {
    return import('@tabler/icons/transition-bottom.svg?react');
  }),
  'transition-left': lazy(() => {
    return import('@tabler/icons/transition-left.svg?react');
  }),
  'transition-right': lazy(() => {
    return import('@tabler/icons/transition-right.svg?react');
  }),
  'transition-top': lazy(() => {
    return import('@tabler/icons/transition-top.svg?react');
  }),
  'trash-filled': lazy(() => {
    return import('@tabler/icons/trash-filled.svg?react');
  }),
  'trash-off': lazy(() => {
    return import('@tabler/icons/trash-off.svg?react');
  }),
  'trash-x-filled': lazy(() => {
    return import('@tabler/icons/trash-x-filled.svg?react');
  }),
  'trash-x': lazy(() => {
    return import('@tabler/icons/trash-x.svg?react');
  }),
  trash: lazy(() => {
    return import('@tabler/icons/trash.svg?react');
  }),
  treadmill: lazy(() => {
    return import('@tabler/icons/treadmill.svg?react');
  }),
  tree: lazy(() => {
    return import('@tabler/icons/tree.svg?react');
  }),
  trees: lazy(() => {
    return import('@tabler/icons/trees.svg?react');
  }),
  trekking: lazy(() => {
    return import('@tabler/icons/trekking.svg?react');
  }),
  'trending-down-2': lazy(() => {
    return import('@tabler/icons/trending-down-2.svg?react');
  }),
  'trending-down-3': lazy(() => {
    return import('@tabler/icons/trending-down-3.svg?react');
  }),
  'trending-down': lazy(() => {
    return import('@tabler/icons/trending-down.svg?react');
  }),
  'trending-up-2': lazy(() => {
    return import('@tabler/icons/trending-up-2.svg?react');
  }),
  'trending-up-3': lazy(() => {
    return import('@tabler/icons/trending-up-3.svg?react');
  }),
  'trending-up': lazy(() => {
    return import('@tabler/icons/trending-up.svg?react');
  }),
  'triangle-filled': lazy(() => {
    return import('@tabler/icons/triangle-filled.svg?react');
  }),
  'triangle-inverted-filled': lazy(() => {
    return import('@tabler/icons/triangle-inverted-filled.svg?react');
  }),
  'triangle-inverted': lazy(() => {
    return import('@tabler/icons/triangle-inverted.svg?react');
  }),
  'triangle-minus-2': lazy(() => {
    return import('@tabler/icons/triangle-minus-2.svg?react');
  }),
  'triangle-minus': lazy(() => {
    return import('@tabler/icons/triangle-minus.svg?react');
  }),
  'triangle-off': lazy(() => {
    return import('@tabler/icons/triangle-off.svg?react');
  }),
  'triangle-plus-2': lazy(() => {
    return import('@tabler/icons/triangle-plus-2.svg?react');
  }),
  'triangle-plus': lazy(() => {
    return import('@tabler/icons/triangle-plus.svg?react');
  }),
  'triangle-square-circle-filled': lazy(() => {
    return import('@tabler/icons/triangle-square-circle-filled.svg?react');
  }),
  'triangle-square-circle': lazy(() => {
    return import('@tabler/icons/triangle-square-circle.svg?react');
  }),
  triangle: lazy(() => {
    return import('@tabler/icons/triangle.svg?react');
  }),
  triangles: lazy(() => {
    return import('@tabler/icons/triangles.svg?react');
  }),
  trident: lazy(() => {
    return import('@tabler/icons/trident.svg?react');
  }),
  trolley: lazy(() => {
    return import('@tabler/icons/trolley.svg?react');
  }),
  'trophy-filled': lazy(() => {
    return import('@tabler/icons/trophy-filled.svg?react');
  }),
  'trophy-off': lazy(() => {
    return import('@tabler/icons/trophy-off.svg?react');
  }),
  trophy: lazy(() => {
    return import('@tabler/icons/trophy.svg?react');
  }),
  trowel: lazy(() => {
    return import('@tabler/icons/trowel.svg?react');
  }),
  'truck-delivery': lazy(() => {
    return import('@tabler/icons/truck-delivery.svg?react');
  }),
  'truck-loading': lazy(() => {
    return import('@tabler/icons/truck-loading.svg?react');
  }),
  'truck-off': lazy(() => {
    return import('@tabler/icons/truck-off.svg?react');
  }),
  'truck-return': lazy(() => {
    return import('@tabler/icons/truck-return.svg?react');
  }),
  truck: lazy(() => {
    return import('@tabler/icons/truck.svg?react');
  }),
  txt: lazy(() => {
    return import('@tabler/icons/txt.svg?react');
  }),
  'typography-off': lazy(() => {
    return import('@tabler/icons/typography-off.svg?react');
  }),
  typography: lazy(() => {
    return import('@tabler/icons/typography.svg?react');
  }),
  'ufo-off': lazy(() => {
    return import('@tabler/icons/ufo-off.svg?react');
  }),
  ufo: lazy(() => {
    return import('@tabler/icons/ufo.svg?react');
  }),
  'umbrella-filled': lazy(() => {
    return import('@tabler/icons/umbrella-filled.svg?react');
  }),
  'umbrella-off': lazy(() => {
    return import('@tabler/icons/umbrella-off.svg?react');
  }),
  umbrella: lazy(() => {
    return import('@tabler/icons/umbrella.svg?react');
  }),
  underline: lazy(() => {
    return import('@tabler/icons/underline.svg?react');
  }),
  universe: lazy(() => {
    return import('@tabler/icons/universe.svg?react');
  }),
  unlink: lazy(() => {
    return import('@tabler/icons/unlink.svg?react');
  }),
  upload: lazy(() => {
    return import('@tabler/icons/upload.svg?react');
  }),
  urgent: lazy(() => {
    return import('@tabler/icons/urgent.svg?react');
  }),
  usb: lazy(() => {
    return import('@tabler/icons/usb.svg?react');
  }),
  'user-bolt': lazy(() => {
    return import('@tabler/icons/user-bolt.svg?react');
  }),
  'user-cancel': lazy(() => {
    return import('@tabler/icons/user-cancel.svg?react');
  }),
  'user-check': lazy(() => {
    return import('@tabler/icons/user-check.svg?react');
  }),
  'user-circle': lazy(() => {
    return import('@tabler/icons/user-circle.svg?react');
  }),
  'user-code': lazy(() => {
    return import('@tabler/icons/user-code.svg?react');
  }),
  'user-cog': lazy(() => {
    return import('@tabler/icons/user-cog.svg?react');
  }),
  'user-dollar': lazy(() => {
    return import('@tabler/icons/user-dollar.svg?react');
  }),
  'user-down': lazy(() => {
    return import('@tabler/icons/user-down.svg?react');
  }),
  'user-edit': lazy(() => {
    return import('@tabler/icons/user-edit.svg?react');
  }),
  'user-exclamation': lazy(() => {
    return import('@tabler/icons/user-exclamation.svg?react');
  }),
  'user-heart': lazy(() => {
    return import('@tabler/icons/user-heart.svg?react');
  }),
  'user-hexagon': lazy(() => {
    return import('@tabler/icons/user-hexagon.svg?react');
  }),
  'user-minus': lazy(() => {
    return import('@tabler/icons/user-minus.svg?react');
  }),
  'user-off': lazy(() => {
    return import('@tabler/icons/user-off.svg?react');
  }),
  'user-pause': lazy(() => {
    return import('@tabler/icons/user-pause.svg?react');
  }),
  'user-pentagon': lazy(() => {
    return import('@tabler/icons/user-pentagon.svg?react');
  }),
  'user-pin': lazy(() => {
    return import('@tabler/icons/user-pin.svg?react');
  }),
  'user-plus': lazy(() => {
    return import('@tabler/icons/user-plus.svg?react');
  }),
  'user-question': lazy(() => {
    return import('@tabler/icons/user-question.svg?react');
  }),
  'user-scan': lazy(() => {
    return import('@tabler/icons/user-scan.svg?react');
  }),
  'user-search': lazy(() => {
    return import('@tabler/icons/user-search.svg?react');
  }),
  'user-share': lazy(() => {
    return import('@tabler/icons/user-share.svg?react');
  }),
  'user-shield': lazy(() => {
    return import('@tabler/icons/user-shield.svg?react');
  }),
  'user-square-rounded': lazy(() => {
    return import('@tabler/icons/user-square-rounded.svg?react');
  }),
  'user-square': lazy(() => {
    return import('@tabler/icons/user-square.svg?react');
  }),
  'user-star': lazy(() => {
    return import('@tabler/icons/user-star.svg?react');
  }),
  'user-up': lazy(() => {
    return import('@tabler/icons/user-up.svg?react');
  }),
  'user-x': lazy(() => {
    return import('@tabler/icons/user-x.svg?react');
  }),
  user: lazy(() => {
    return import('@tabler/icons/user.svg?react');
  }),
  'users-group': lazy(() => {
    return import('@tabler/icons/users-group.svg?react');
  }),
  'users-minus': lazy(() => {
    return import('@tabler/icons/users-minus.svg?react');
  }),
  'users-plus': lazy(() => {
    return import('@tabler/icons/users-plus.svg?react');
  }),
  users: lazy(() => {
    return import('@tabler/icons/users.svg?react');
  }),
  'uv-index': lazy(() => {
    return import('@tabler/icons/uv-index.svg?react');
  }),
  'ux-circle': lazy(() => {
    return import('@tabler/icons/ux-circle.svg?react');
  }),
  'vaccine-bottle-off': lazy(() => {
    return import('@tabler/icons/vaccine-bottle-off.svg?react');
  }),
  'vaccine-bottle': lazy(() => {
    return import('@tabler/icons/vaccine-bottle.svg?react');
  }),
  'vaccine-off': lazy(() => {
    return import('@tabler/icons/vaccine-off.svg?react');
  }),
  vaccine: lazy(() => {
    return import('@tabler/icons/vaccine.svg?react');
  }),
  'vacuum-cleaner': lazy(() => {
    return import('@tabler/icons/vacuum-cleaner.svg?react');
  }),
  'variable-minus': lazy(() => {
    return import('@tabler/icons/variable-minus.svg?react');
  }),
  'variable-off': lazy(() => {
    return import('@tabler/icons/variable-off.svg?react');
  }),
  'variable-plus': lazy(() => {
    return import('@tabler/icons/variable-plus.svg?react');
  }),
  variable: lazy(() => {
    return import('@tabler/icons/variable.svg?react');
  }),
  'vector-bezier-2': lazy(() => {
    return import('@tabler/icons/vector-bezier-2.svg?react');
  }),
  'vector-bezier-arc': lazy(() => {
    return import('@tabler/icons/vector-bezier-arc.svg?react');
  }),
  'vector-bezier-circle': lazy(() => {
    return import('@tabler/icons/vector-bezier-circle.svg?react');
  }),
  'vector-bezier': lazy(() => {
    return import('@tabler/icons/vector-bezier.svg?react');
  }),
  'vector-off': lazy(() => {
    return import('@tabler/icons/vector-off.svg?react');
  }),
  'vector-spline': lazy(() => {
    return import('@tabler/icons/vector-spline.svg?react');
  }),
  'vector-triangle-off': lazy(() => {
    return import('@tabler/icons/vector-triangle-off.svg?react');
  }),
  'vector-triangle': lazy(() => {
    return import('@tabler/icons/vector-triangle.svg?react');
  }),
  vector: lazy(() => {
    return import('@tabler/icons/vector.svg?react');
  }),
  venus: lazy(() => {
    return import('@tabler/icons/venus.svg?react');
  }),
  'versions-filled': lazy(() => {
    return import('@tabler/icons/versions-filled.svg?react');
  }),
  'versions-off': lazy(() => {
    return import('@tabler/icons/versions-off.svg?react');
  }),
  versions: lazy(() => {
    return import('@tabler/icons/versions.svg?react');
  }),
  'video-minus': lazy(() => {
    return import('@tabler/icons/video-minus.svg?react');
  }),
  'video-off': lazy(() => {
    return import('@tabler/icons/video-off.svg?react');
  }),
  'video-plus': lazy(() => {
    return import('@tabler/icons/video-plus.svg?react');
  }),
  video: lazy(() => {
    return import('@tabler/icons/video.svg?react');
  }),
  'view-360-off': lazy(() => {
    return import('@tabler/icons/view-360-off.svg?react');
  }),
  'view-360': lazy(() => {
    return import('@tabler/icons/view-360.svg?react');
  }),
  'viewfinder-off': lazy(() => {
    return import('@tabler/icons/viewfinder-off.svg?react');
  }),
  viewfinder: lazy(() => {
    return import('@tabler/icons/viewfinder.svg?react');
  }),
  'viewport-narrow': lazy(() => {
    return import('@tabler/icons/viewport-narrow.svg?react');
  }),
  'viewport-wide': lazy(() => {
    return import('@tabler/icons/viewport-wide.svg?react');
  }),
  vinyl: lazy(() => {
    return import('@tabler/icons/vinyl.svg?react');
  }),
  'vip-off': lazy(() => {
    return import('@tabler/icons/vip-off.svg?react');
  }),
  vip: lazy(() => {
    return import('@tabler/icons/vip.svg?react');
  }),
  'virus-off': lazy(() => {
    return import('@tabler/icons/virus-off.svg?react');
  }),
  'virus-search': lazy(() => {
    return import('@tabler/icons/virus-search.svg?react');
  }),
  virus: lazy(() => {
    return import('@tabler/icons/virus.svg?react');
  }),
  'vocabulary-off': lazy(() => {
    return import('@tabler/icons/vocabulary-off.svg?react');
  }),
  vocabulary: lazy(() => {
    return import('@tabler/icons/vocabulary.svg?react');
  }),
  volcano: lazy(() => {
    return import('@tabler/icons/volcano.svg?react');
  }),
  'volume-2': lazy(() => {
    return import('@tabler/icons/volume-2.svg?react');
  }),
  'volume-3': lazy(() => {
    return import('@tabler/icons/volume-3.svg?react');
  }),
  'volume-off': lazy(() => {
    return import('@tabler/icons/volume-off.svg?react');
  }),
  volume: lazy(() => {
    return import('@tabler/icons/volume.svg?react');
  }),
  vs: lazy(() => {
    return import('@tabler/icons/vs.svg?react');
  }),
  walk: lazy(() => {
    return import('@tabler/icons/walk.svg?react');
  }),
  'wall-off': lazy(() => {
    return import('@tabler/icons/wall-off.svg?react');
  }),
  wall: lazy(() => {
    return import('@tabler/icons/wall.svg?react');
  }),
  'wallet-off': lazy(() => {
    return import('@tabler/icons/wallet-off.svg?react');
  }),
  wallet: lazy(() => {
    return import('@tabler/icons/wallet.svg?react');
  }),
  'wallpaper-off': lazy(() => {
    return import('@tabler/icons/wallpaper-off.svg?react');
  }),
  wallpaper: lazy(() => {
    return import('@tabler/icons/wallpaper.svg?react');
  }),
  'wand-off': lazy(() => {
    return import('@tabler/icons/wand-off.svg?react');
  }),
  wand: lazy(() => {
    return import('@tabler/icons/wand.svg?react');
  }),
  'wash-dry-1': lazy(() => {
    return import('@tabler/icons/wash-dry-1.svg?react');
  }),
  'wash-dry-2': lazy(() => {
    return import('@tabler/icons/wash-dry-2.svg?react');
  }),
  'wash-dry-3': lazy(() => {
    return import('@tabler/icons/wash-dry-3.svg?react');
  }),
  'wash-dry-a': lazy(() => {
    return import('@tabler/icons/wash-dry-a.svg?react');
  }),
  'wash-dry-dip': lazy(() => {
    return import('@tabler/icons/wash-dry-dip.svg?react');
  }),
  'wash-dry-f': lazy(() => {
    return import('@tabler/icons/wash-dry-f.svg?react');
  }),
  'wash-dry-flat': lazy(() => {
    return import('@tabler/icons/wash-dry-flat.svg?react');
  }),
  'wash-dry-hang': lazy(() => {
    return import('@tabler/icons/wash-dry-hang.svg?react');
  }),
  'wash-dry-off': lazy(() => {
    return import('@tabler/icons/wash-dry-off.svg?react');
  }),
  'wash-dry-p': lazy(() => {
    return import('@tabler/icons/wash-dry-p.svg?react');
  }),
  'wash-dry-shade': lazy(() => {
    return import('@tabler/icons/wash-dry-shade.svg?react');
  }),
  'wash-dry-w': lazy(() => {
    return import('@tabler/icons/wash-dry-w.svg?react');
  }),
  'wash-dry': lazy(() => {
    return import('@tabler/icons/wash-dry.svg?react');
  }),
  'wash-dryclean-off': lazy(() => {
    return import('@tabler/icons/wash-dryclean-off.svg?react');
  }),
  'wash-dryclean': lazy(() => {
    return import('@tabler/icons/wash-dryclean.svg?react');
  }),
  'wash-eco': lazy(() => {
    return import('@tabler/icons/wash-eco.svg?react');
  }),
  'wash-gentle': lazy(() => {
    return import('@tabler/icons/wash-gentle.svg?react');
  }),
  'wash-hand': lazy(() => {
    return import('@tabler/icons/wash-hand.svg?react');
  }),
  'wash-machine': lazy(() => {
    return import('@tabler/icons/wash-machine.svg?react');
  }),
  'wash-off': lazy(() => {
    return import('@tabler/icons/wash-off.svg?react');
  }),
  'wash-press': lazy(() => {
    return import('@tabler/icons/wash-press.svg?react');
  }),
  'wash-temperature-1': lazy(() => {
    return import('@tabler/icons/wash-temperature-1.svg?react');
  }),
  'wash-temperature-2': lazy(() => {
    return import('@tabler/icons/wash-temperature-2.svg?react');
  }),
  'wash-temperature-3': lazy(() => {
    return import('@tabler/icons/wash-temperature-3.svg?react');
  }),
  'wash-temperature-4': lazy(() => {
    return import('@tabler/icons/wash-temperature-4.svg?react');
  }),
  'wash-temperature-5': lazy(() => {
    return import('@tabler/icons/wash-temperature-5.svg?react');
  }),
  'wash-temperature-6': lazy(() => {
    return import('@tabler/icons/wash-temperature-6.svg?react');
  }),
  'wash-tumble-dry': lazy(() => {
    return import('@tabler/icons/wash-tumble-dry.svg?react');
  }),
  'wash-tumble-off': lazy(() => {
    return import('@tabler/icons/wash-tumble-off.svg?react');
  }),
  wash: lazy(() => {
    return import('@tabler/icons/wash.svg?react');
  }),
  waterpolo: lazy(() => {
    return import('@tabler/icons/waterpolo.svg?react');
  }),
  'wave-saw-tool': lazy(() => {
    return import('@tabler/icons/wave-saw-tool.svg?react');
  }),
  'wave-sine': lazy(() => {
    return import('@tabler/icons/wave-sine.svg?react');
  }),
  'wave-square': lazy(() => {
    return import('@tabler/icons/wave-square.svg?react');
  }),
  'waves-electricity': lazy(() => {
    return import('@tabler/icons/waves-electricity.svg?react');
  }),
  'webhook-off': lazy(() => {
    return import('@tabler/icons/webhook-off.svg?react');
  }),
  webhook: lazy(() => {
    return import('@tabler/icons/webhook.svg?react');
  }),
  weight: lazy(() => {
    return import('@tabler/icons/weight.svg?react');
  }),
  wheel: lazy(() => {
    return import('@tabler/icons/wheel.svg?react');
  }),
  'wheelchair-off': lazy(() => {
    return import('@tabler/icons/wheelchair-off.svg?react');
  }),
  wheelchair: lazy(() => {
    return import('@tabler/icons/wheelchair.svg?react');
  }),
  whirl: lazy(() => {
    return import('@tabler/icons/whirl.svg?react');
  }),
  'wifi-0': lazy(() => {
    return import('@tabler/icons/wifi-0.svg?react');
  }),
  'wifi-1': lazy(() => {
    return import('@tabler/icons/wifi-1.svg?react');
  }),
  'wifi-2': lazy(() => {
    return import('@tabler/icons/wifi-2.svg?react');
  }),
  'wifi-off': lazy(() => {
    return import('@tabler/icons/wifi-off.svg?react');
  }),
  wifi: lazy(() => {
    return import('@tabler/icons/wifi.svg?react');
  }),
  'wind-electricity': lazy(() => {
    return import('@tabler/icons/wind-electricity.svg?react');
  }),
  'wind-off': lazy(() => {
    return import('@tabler/icons/wind-off.svg?react');
  }),
  wind: lazy(() => {
    return import('@tabler/icons/wind.svg?react');
  }),
  'windmill-filled': lazy(() => {
    return import('@tabler/icons/windmill-filled.svg?react');
  }),
  'windmill-off': lazy(() => {
    return import('@tabler/icons/windmill-off.svg?react');
  }),
  windmill: lazy(() => {
    return import('@tabler/icons/windmill.svg?react');
  }),
  'window-maximize': lazy(() => {
    return import('@tabler/icons/window-maximize.svg?react');
  }),
  'window-minimize': lazy(() => {
    return import('@tabler/icons/window-minimize.svg?react');
  }),
  'window-off': lazy(() => {
    return import('@tabler/icons/window-off.svg?react');
  }),
  window: lazy(() => {
    return import('@tabler/icons/window.svg?react');
  }),
  windsock: lazy(() => {
    return import('@tabler/icons/windsock.svg?react');
  }),
  'wiper-wash': lazy(() => {
    return import('@tabler/icons/wiper-wash.svg?react');
  }),
  wiper: lazy(() => {
    return import('@tabler/icons/wiper.svg?react');
  }),
  woman: lazy(() => {
    return import('@tabler/icons/woman.svg?react');
  }),
  wood: lazy(() => {
    return import('@tabler/icons/wood.svg?react');
  }),
  'world-bolt': lazy(() => {
    return import('@tabler/icons/world-bolt.svg?react');
  }),
  'world-cancel': lazy(() => {
    return import('@tabler/icons/world-cancel.svg?react');
  }),
  'world-check': lazy(() => {
    return import('@tabler/icons/world-check.svg?react');
  }),
  'world-code': lazy(() => {
    return import('@tabler/icons/world-code.svg?react');
  }),
  'world-cog': lazy(() => {
    return import('@tabler/icons/world-cog.svg?react');
  }),
  'world-dollar': lazy(() => {
    return import('@tabler/icons/world-dollar.svg?react');
  }),
  'world-down': lazy(() => {
    return import('@tabler/icons/world-down.svg?react');
  }),
  'world-download': lazy(() => {
    return import('@tabler/icons/world-download.svg?react');
  }),
  'world-exclamation': lazy(() => {
    return import('@tabler/icons/world-exclamation.svg?react');
  }),
  'world-heart': lazy(() => {
    return import('@tabler/icons/world-heart.svg?react');
  }),
  'world-latitude': lazy(() => {
    return import('@tabler/icons/world-latitude.svg?react');
  }),
  'world-longitude': lazy(() => {
    return import('@tabler/icons/world-longitude.svg?react');
  }),
  'world-minus': lazy(() => {
    return import('@tabler/icons/world-minus.svg?react');
  }),
  'world-off': lazy(() => {
    return import('@tabler/icons/world-off.svg?react');
  }),
  'world-pause': lazy(() => {
    return import('@tabler/icons/world-pause.svg?react');
  }),
  'world-pin': lazy(() => {
    return import('@tabler/icons/world-pin.svg?react');
  }),
  'world-plus': lazy(() => {
    return import('@tabler/icons/world-plus.svg?react');
  }),
  'world-question': lazy(() => {
    return import('@tabler/icons/world-question.svg?react');
  }),
  'world-search': lazy(() => {
    return import('@tabler/icons/world-search.svg?react');
  }),
  'world-share': lazy(() => {
    return import('@tabler/icons/world-share.svg?react');
  }),
  'world-star': lazy(() => {
    return import('@tabler/icons/world-star.svg?react');
  }),
  'world-up': lazy(() => {
    return import('@tabler/icons/world-up.svg?react');
  }),
  'world-upload': lazy(() => {
    return import('@tabler/icons/world-upload.svg?react');
  }),
  'world-www': lazy(() => {
    return import('@tabler/icons/world-www.svg?react');
  }),
  'world-x': lazy(() => {
    return import('@tabler/icons/world-x.svg?react');
  }),
  world: lazy(() => {
    return import('@tabler/icons/world.svg?react');
  }),
  'wrecking-ball': lazy(() => {
    return import('@tabler/icons/wrecking-ball.svg?react');
  }),
  'writing-off': lazy(() => {
    return import('@tabler/icons/writing-off.svg?react');
  }),
  'writing-sign-off': lazy(() => {
    return import('@tabler/icons/writing-sign-off.svg?react');
  }),
  'writing-sign': lazy(() => {
    return import('@tabler/icons/writing-sign.svg?react');
  }),
  writing: lazy(() => {
    return import('@tabler/icons/writing.svg?react');
  }),
  x: lazy(() => {
    return import('@tabler/icons/x.svg?react');
  }),
  'xbox-a': lazy(() => {
    return import('@tabler/icons/xbox-a.svg?react');
  }),
  'xbox-b': lazy(() => {
    return import('@tabler/icons/xbox-b.svg?react');
  }),
  'xbox-x': lazy(() => {
    return import('@tabler/icons/xbox-x.svg?react');
  }),
  'xbox-y': lazy(() => {
    return import('@tabler/icons/xbox-y.svg?react');
  }),
  xd: lazy(() => {
    return import('@tabler/icons/xd.svg?react');
  }),
  xxx: lazy(() => {
    return import('@tabler/icons/xxx.svg?react');
  }),
  'yin-yang-filled': lazy(() => {
    return import('@tabler/icons/yin-yang-filled.svg?react');
  }),
  'yin-yang': lazy(() => {
    return import('@tabler/icons/yin-yang.svg?react');
  }),
  yoga: lazy(() => {
    return import('@tabler/icons/yoga.svg?react');
  }),
  'zeppelin-off': lazy(() => {
    return import('@tabler/icons/zeppelin-off.svg?react');
  }),
  zeppelin: lazy(() => {
    return import('@tabler/icons/zeppelin.svg?react');
  }),
  zip: lazy(() => {
    return import('@tabler/icons/zip.svg?react');
  }),
  'zodiac-aquarius': lazy(() => {
    return import('@tabler/icons/zodiac-aquarius.svg?react');
  }),
  'zodiac-aries': lazy(() => {
    return import('@tabler/icons/zodiac-aries.svg?react');
  }),
  'zodiac-cancer': lazy(() => {
    return import('@tabler/icons/zodiac-cancer.svg?react');
  }),
  'zodiac-capricorn': lazy(() => {
    return import('@tabler/icons/zodiac-capricorn.svg?react');
  }),
  'zodiac-gemini': lazy(() => {
    return import('@tabler/icons/zodiac-gemini.svg?react');
  }),
  'zodiac-leo': lazy(() => {
    return import('@tabler/icons/zodiac-leo.svg?react');
  }),
  'zodiac-libra': lazy(() => {
    return import('@tabler/icons/zodiac-libra.svg?react');
  }),
  'zodiac-pisces': lazy(() => {
    return import('@tabler/icons/zodiac-pisces.svg?react');
  }),
  'zodiac-sagittarius': lazy(() => {
    return import('@tabler/icons/zodiac-sagittarius.svg?react');
  }),
  'zodiac-scorpio': lazy(() => {
    return import('@tabler/icons/zodiac-scorpio.svg?react');
  }),
  'zodiac-taurus': lazy(() => {
    return import('@tabler/icons/zodiac-taurus.svg?react');
  }),
  'zodiac-virgo': lazy(() => {
    return import('@tabler/icons/zodiac-virgo.svg?react');
  }),
  'zoom-cancel': lazy(() => {
    return import('@tabler/icons/zoom-cancel.svg?react');
  }),
  'zoom-check-filled': lazy(() => {
    return import('@tabler/icons/zoom-check-filled.svg?react');
  }),
  'zoom-check': lazy(() => {
    return import('@tabler/icons/zoom-check.svg?react');
  }),
  'zoom-code': lazy(() => {
    return import('@tabler/icons/zoom-code.svg?react');
  }),
  'zoom-exclamation': lazy(() => {
    return import('@tabler/icons/zoom-exclamation.svg?react');
  }),
  'zoom-filled': lazy(() => {
    return import('@tabler/icons/zoom-filled.svg?react');
  }),
  'zoom-in-area-filled': lazy(() => {
    return import('@tabler/icons/zoom-in-area-filled.svg?react');
  }),
  'zoom-in-area': lazy(() => {
    return import('@tabler/icons/zoom-in-area.svg?react');
  }),
  'zoom-in-filled': lazy(() => {
    return import('@tabler/icons/zoom-in-filled.svg?react');
  }),
  'zoom-in': lazy(() => {
    return import('@tabler/icons/zoom-in.svg?react');
  }),
  'zoom-money': lazy(() => {
    return import('@tabler/icons/zoom-money.svg?react');
  }),
  'zoom-out-area': lazy(() => {
    return import('@tabler/icons/zoom-out-area.svg?react');
  }),
  'zoom-out-filled': lazy(() => {
    return import('@tabler/icons/zoom-out-filled.svg?react');
  }),
  'zoom-out': lazy(() => {
    return import('@tabler/icons/zoom-out.svg?react');
  }),
  'zoom-pan': lazy(() => {
    return import('@tabler/icons/zoom-pan.svg?react');
  }),
  'zoom-question': lazy(() => {
    return import('@tabler/icons/zoom-question.svg?react');
  }),
  'zoom-replace': lazy(() => {
    return import('@tabler/icons/zoom-replace.svg?react');
  }),
  'zoom-reset': lazy(() => {
    return import('@tabler/icons/zoom-reset.svg?react');
  }),
  'zoom-scan': lazy(() => {
    return import('@tabler/icons/zoom-scan.svg?react');
  }),
  'zzz-off': lazy(() => {
    return import('@tabler/icons/zzz-off.svg?react');
  }),
  zzz: lazy(() => {
    return import('@tabler/icons/zzz.svg?react');
  }),
};
