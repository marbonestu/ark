import { createSplitProps } from '../create-split-props'
import type { PresenceProps } from './presence'

export function splitPresenceProps<T>(props: T & Omit<PresenceProps, 'children'>) {
  return createSplitProps<Omit<PresenceProps, 'children'>>()(props, [
    'fallback',
    'lazyMount',
    'onExitComplete',
    'present',
    'unmountOnExit',
  ])
}
