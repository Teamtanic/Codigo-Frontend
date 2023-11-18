import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import { Text } from './Text';
import * as Separator from '@radix-ui/react-separator';
import { MenuItemsProps } from './SidebarMenu';
import clsx from 'clsx';
import { styled, keyframes } from '@stitches/react';
import React from 'react';


interface AccordionProps {
  items: Array<MenuItemsProps>
  className?: string
}

const slideDown = keyframes({
  from: { height: 0 },
  to: { height: 'var(--radix-accordion-content-height)' },
});

const slideUp = keyframes({
  from: { height: 'var(--radix-accordion-content-height)' },
  to: { height: 0 },
});

const StyledContent = styled(AccordionPrimitive.Content, {
  overflow: 'hidden',
  '&[data-state="open"]': {
    animation: `${slideDown} 500ms cubic-bezier(0.4, 0, 0.2, 1) forwards`,
  },
  '&[data-state="closed"]': {
    animation: `${slideUp} 500ms cubic-bezier(0.4, 0, 0.2, 1) forwards`,
  },
});


type AccordionPrimitiveContentProps = {
  children: React.ReactNode,
  forwardedRef?: React.Ref<HTMLDivElement> // tornando forwardedRef opcional
}

export const AccordionPrimitiveContent = React.forwardRef<HTMLDivElement, AccordionPrimitiveContentProps>(({ children, ...props }, forwardedRef) => (
  <StyledContent {...props} ref={forwardedRef}>
    {children}
  </StyledContent>
));


const Accordion = ({ items, className }: AccordionProps) => {

  return (
    <>
      <AccordionPrimitive.Root type="multiple" className={`${className}`}>
        {items.map((item, index) => (
          <AccordionPrimitive.Item value={`item-${index}`} className="mb-3" key={index}>
            <AccordionPrimitive.Header className="">
              <AccordionPrimitive.Trigger className={clsx(
                "group",
                "radix-state-open:rounded-t-lg radix-state-closed:rounded-lg",
                "focus:outline-none",
                "w-full flex justify-between items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              )}>
                <Text className="">{item.label}</Text>
                <div className="group:rotate-180">
                  <ChevronDownIcon className={clsx(
                    "ml-2 h-5 w-5 shrink-0 text-gray-700 ease-in-out dark:text-gray-400",
                    "group-radix-state-open:rotate-180 group-radix-state-open:duration-300",
                    "group-radix-state-closed:rotate-0 group-radix-state-closed:duration-300"
                  )} />
                </div>
              </AccordionPrimitive.Trigger>
            </AccordionPrimitive.Header>
            <div>
              <AccordionPrimitiveContent >
              {item.subitens?.map((subitem, subIndex) => (
                <div className='my-1' key={subIndex}>
                    <Separator.Root
                      className="bg-white/5 rounded-full w-full h-[0.3px] mb-1"
                      decorative
                      orientation="vertical"
                    />
                    {subitem}
                </div>
              ))}
              </AccordionPrimitiveContent>
            </div>
          </AccordionPrimitive.Item>
        ))}
      </AccordionPrimitive.Root>
    </>
  )
};



export default Accordion;
