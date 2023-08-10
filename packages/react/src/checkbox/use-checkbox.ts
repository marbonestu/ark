import * as checkbox from '@zag-js/checkbox'
import { normalizeProps, useMachine } from '@zag-js/react'
import { useId } from 'react'
import { useEnvironmentContext } from '../environment'
import { type Optional } from '../types'

export type UseCheckboxProps = Optional<checkbox.Context, 'id'> & { defaultChecked?: boolean }
export type UseCheckboxReturn = ReturnType<typeof useCheckbox>

export const useCheckbox = (props: UseCheckboxProps) => {
  const getRootNode = useEnvironmentContext()

  const initialContext = {
    id: useId(),
    getRootNode,
    ...props,
    checked: props.defaultChecked,
  }

  const context = {
    ...initialContext,
    checked: props.checked,
  }

  const [state, send] = useMachine(checkbox.machine(initialContext), { context })

  return checkbox.connect(state, send, normalizeProps)
}
