import { mergeProps } from '@zag-js/solid'
import { ark, type HTMLArkProps } from '../factory'
import { Presence, splitPresenceProps, type PresenceProps } from '../presence'
import type { Assign } from '../types'
import { useDialogContext } from './dialog-context'

export interface DialogContentProps
  extends Assign<HTMLArkProps<'div'>, Omit<PresenceProps, 'fallback'>> {}

export const DialogContent = (props: DialogContentProps) => {
  const [presenceProps, localProps] = splitPresenceProps(props)
  const api = useDialogContext()
  const mergedProps = mergeProps(() => api().contentProps, localProps)

  return (
    <Presence present={api().isOpen} {...presenceProps} fallback={<div {...api().contentProps} />}>
      <ark.div {...mergedProps} />
    </Presence>
  )
}
