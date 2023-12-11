import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'

interface RadioOption {
  value: string
  label: string
}

interface RadioGroupProps {
  options: RadioOption[]
  defaultValue?: string
  direction?: 'row' | 'col'
  onChange?: (value: string) => void
}

export function RadioGroup({
  options,
  direction = 'col',
  onChange,
  defaultValue = 'default',
  ...props
}: RadioGroupProps) {
  return (
    <RadioGroupPrimitive.Root
      className={`flex flex-${direction} gap-2.5`}
      defaultValue={defaultValue}
      onValueChange={onChange}
      {...props}
    >
      {options.map(option => (
        <div key={option.value} className="flex items-center">
          <RadioGroupPrimitive.Item
            className="bg-white w-[25px] h-[25px] rounded-full  hover:bg-zinc-300 focus:shadow-[0_0_0_2px] focus:shadow-black outline-none cursor-pointer"
            value={option.value}
            id={`r_${option.value}`}
          >
            <RadioGroupPrimitive.Indicator className="flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-[11px] after:h-[11px] after:rounded-[50%] after:bg-zinc-500" />
          </RadioGroupPrimitive.Item>
          <label
            className="text-white text-[15px] leading-none pl-[15px] cursor-pointer"
            htmlFor={`r_${option.value}`}
          >
            {option.label}
          </label>
        </div>
      ))}
    </RadioGroupPrimitive.Root>
  )
}
