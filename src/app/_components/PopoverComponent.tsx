import * as Popover from "@radix-ui/react-popover";

const PopoverComponent = () => {
  return (
    <Popover.Root>
      <Popover.Trigger />
      <Popover.Anchor />
      <Popover.Portal>
        <Popover.Content>
          <Popover.Close />
          <Popover.Arrow />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};

export default PopoverComponent;
