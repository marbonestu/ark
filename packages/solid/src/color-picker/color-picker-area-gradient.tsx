import { mergeProps } from 'solid-js'
import { ark, type HTMLArkProps } from '../factory'
import { useColorPickerAreaContext } from './color-picker-area-context'
import { useColorPickerContext } from './color-picker-context'

export type ColorPickerAreaGradientProps = HTMLArkProps<'div'>

export const ColorPickerAreaGradient = (props: ColorPickerAreaGradientProps) => {
  const colorPicker = useColorPickerContext()
  const area = useColorPickerAreaContext()

  const mergedProps = mergeProps(colorPicker().getAreaGradientProps(area), props)

  return <ark.div {...mergedProps} />
}
