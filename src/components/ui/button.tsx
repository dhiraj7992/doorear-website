import Link from 'next/link'
import {
  type ComponentPropsWithoutRef,
  forwardRef,
  type Ref,
} from 'react'
import { cn } from '@/lib/cn'
import {
  marketingButtonClasses,
  type MarketingButtonSize,
  type MarketingButtonVariant,
  type SecondaryTone,
} from './button-classes'

export type MarketingButtonBaseProps = {
  variant: MarketingButtonVariant
  size: MarketingButtonSize
  secondaryTone?: SecondaryTone
  fullWidth?: boolean
}

const disabledPrimary =
  'cursor-not-allowed bg-slate-200 text-slate-500 shadow-none hover:opacity-100'

type NativeButtonProps = MarketingButtonBaseProps &
  Omit<ComponentPropsWithoutRef<'button'>, 'className'> & {
    className?: string
  }

export const Button = forwardRef<HTMLButtonElement, NativeButtonProps>(
  function Button(
    {
      variant,
      size,
      secondaryTone,
      fullWidth,
      className,
      disabled,
      type = 'button',
      ...props
    },
    ref: Ref<HTMLButtonElement>
  ) {
    const isDisabledPrimary = Boolean(disabled && variant === 'primary')

    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled}
        className={cn(
          marketingButtonClasses({
            variant,
            size,
            secondaryTone,
            fullWidth,
          }),
          isDisabledPrimary && disabledPrimary,
          className
        )}
        {...props}
      />
    )
  }
)

type LinkButtonProps = MarketingButtonBaseProps &
  Omit<ComponentPropsWithoutRef<typeof Link>, 'className'> & {
    className?: string
  }

export function LinkButton({
  variant,
  size,
  secondaryTone,
  fullWidth,
  className,
  ...props
}: LinkButtonProps) {
  return (
    <Link
      className={cn(
        marketingButtonClasses({ variant, size, secondaryTone, fullWidth }),
        className
      )}
      {...props}
    />
  )
}
