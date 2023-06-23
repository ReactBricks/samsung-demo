import * as React from 'react'
import classNames from 'classnames'
import { Text, Link, types, useAdminContext } from 'react-bricks/frontend'
import { buttonColorsEditProps } from '../react-bricks-ui/LayoutSideProps'

export interface ButtonProps {
  type: 'button' | 'link'
  text: string
  href: string
  isTargetBlank: boolean
  buttonType: 'submit' | 'button' | 'reset'
  buttonColor: {
    color: string
    classNameSolid: string
    classNameOutline: string
    classNameGhost: string
  }
  variant: 'solid' | 'outline' | 'ghost'
  padding: 'normal' | 'small'
  className?: string
  simpleAnchorLink: boolean
}

const Button: types.Brick<ButtonProps> = ({
  type,
  href,
  isTargetBlank,
  buttonType,
  buttonColor,
  variant,
  padding,
  className,
  simpleAnchorLink = false,
}) => {
  const target = isTargetBlank
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {}

  if (type === 'link') {
    return (
      <Link
        href={href}
        {...target}
        className={classNames(
          'transition-colors duration-300 ease-in-out inline-block whitespace-nowrap text-center rounded-full font-samsung font-bold leading-none',
          padding === 'small'
            ? 'py-2 px-4 text-sm min-w-[75px]'
            : 'py-3 px-5 min-w-[120px] text-sm',
          {
            [buttonColor.classNameSolid]: variant === 'solid',
          },
          {
            [buttonColor.classNameOutline]: variant === 'outline',
          },
          {
            [buttonColor.classNameGhost]: variant === 'ghost',
          },
          className,
          variant === 'ghost' ? 'font-normal' : ''
        )}
        simpleAnchor={simpleAnchorLink}
      >
        <Text
          propName="text"
          placeholder="Action"
          renderBlock={({ children }) => <span>{children}</span>}
        />
      </Link>
    )
  }

  // Button
  const { isAdmin, previewMode } = useAdminContext()

  return (
    <button
      type={isAdmin && !previewMode ? 'button' : buttonType}
      //disabled={isAdmin && !previewMode}
      className={classNames(
        'transition-colors duration-300 ease-in-out inline-block whitespace-nowrap text-center rounded-full font-samsung font-bold leading-none',
        padding === 'small'
          ? 'py-2 px-4 text-sm min-w-[75px]'
          : 'py-3 px-5 min-w-[120px] text-sm',
        {
          [buttonColor?.classNameSolid]: variant === 'solid',
        },
        {
          [buttonColor?.classNameOutline]: variant === 'outline',
        },
        {
          [buttonColor.classNameGhost]: variant === 'ghost',
        },
        className
      )}
    >
      <Text
        propName="text"
        placeholder="Action"
        renderBlock={({ children }) => <span>{children}</span>}
      />
    </button>
  )
}

Button.schema = {
  name: 'custom-button',
  label: 'Button',
  hideFromAddMenu: true,
  playgroundLinkLabel: 'View source code on Github',
  playgroundLinkUrl:
    'https://github.com/ReactBricks/react-bricks-ui/blob/master/src/website/shared/Button.tsx',

  getDefaultProps: () => ({
    type: 'link',
    text: 'Click me',
    href: '',
    isTargetBlank: false,
    buttonType: 'submit',
    buttonColor: {
      color: '#4b72ff',
      classNameSolid:
        'bg-blueSamsung-700 text-white hover:bg-blueSamsung-900 uppercase',
      classNameOutline:
        'border border-blueSamsung-800 text-blueSamsung-800 dark:border-white dark:text-white uppercase',
      classNameGhost:
        'text-blueSamsung-800 dark:text-white uppercase hover:underline',
    },
    variant: 'solid',
    padding: 'normal',
  }),
  sideEditProps: [
    {
      groupName: 'Button functionality',
      defaultOpen: true,
      props: [
        {
          name: 'type',
          label: 'Type',
          type: types.SideEditPropType.Select,
          selectOptions: {
            display: types.OptionsDisplay.Radio,
            options: [
              { value: 'link', label: 'Link' },
              { value: 'button', label: 'Form Button' },
            ],
          },
        },
        {
          name: 'href',
          label: 'Link (external or path)',
          type: types.SideEditPropType.Text,
          show: (props) => props.type === 'link',
        },
        {
          name: 'isTargetBlank',
          label: 'Open in new window',
          type: types.SideEditPropType.Boolean,
          show: (props) => props.type === 'link',
        },
        {
          name: 'simpleAnchorLink',
          label: 'Simple anchor (no SPA link)',
          type: types.SideEditPropType.Boolean,
          show: (props) => props.type === 'link',
        },
        {
          name: 'buttonType',
          label: 'Button type',
          type: types.SideEditPropType.Select,
          selectOptions: {
            display: types.OptionsDisplay.Radio,
            options: [
              { value: 'submit', label: 'Form submit' },
              { value: 'reset', label: 'Form reset' },
              { value: 'button', label: 'Button' },
            ],
          },
          show: (props) => props.type === 'button',
        },
      ],
    },
    {
      groupName: 'Visual',
      defaultOpen: true,
      props: [
        buttonColorsEditProps,
        {
          name: 'variant',
          label: 'Variant',
          type: types.SideEditPropType.Select,
          selectOptions: {
            display: types.OptionsDisplay.Radio,
            options: [
              { value: 'solid', label: 'Solid' },
              { value: 'outline', label: 'Outline' },
              { value: 'ghost', label: 'Ghost' },
            ],
          },
        },
        {
          name: 'padding',
          label: 'Size',
          type: types.SideEditPropType.Select,
          selectOptions: {
            display: types.OptionsDisplay.Radio,
            options: [
              { value: 'normal', label: 'Normal' },
              { value: 'small', label: 'Small' },
            ],
          },
        },
      ],
    },
  ],
}

export default Button
