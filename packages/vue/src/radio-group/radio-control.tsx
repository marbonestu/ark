import { defineComponent } from 'vue'
import { ark, HTMLArkProps } from '../factory'
import { ComponentWithProps, getValidChildren } from '../utils'
import { useRadioContext, useRadioGroupContext } from './radio-context'

export type RadioControlProps = HTMLArkProps<'div'>

export const RadioControl: ComponentWithProps<RadioControlProps> = defineComponent({
  name: 'RadioControl',
  setup(_, { slots, attrs }) {
    const groupApi = useRadioGroupContext()

    const api = useRadioContext()

    return () => (
      <ark.div {...groupApi.value.getRadioControlProps(api)} {...attrs}>
        {() => getValidChildren(slots)}
      </ark.div>
    )
  },
})