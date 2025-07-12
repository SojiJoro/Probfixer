import { SelectHTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options?: string[]
  placeholder?: string
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, options = [], placeholder, children, ...props }, ref) => {
    return (
      <select
        className={cn(
          "flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
        {children}
      </select>
    )
  }
)
Select.displayName = "Select"

export default Select