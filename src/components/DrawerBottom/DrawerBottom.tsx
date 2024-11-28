"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

interface DrawerBottomProps {
  title: string;
  description: string;
  trigger: React.ReactNode;
  children: React.ReactNode;
  footerButtons?: React.ReactNode;
  onSubmit?: () => void;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function DrawerBottom({
  title,
  description,
  trigger,
  children,
  footerButtons,
  onSubmit,
  open,
  onOpenChange,
}: DrawerBottomProps) {
  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerTrigger asChild>{trigger}</DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>{title}</DrawerTitle>
            <DrawerDescription>{description}</DrawerDescription>
          </DrawerHeader>
          <div className="mt-3 h-[120px]">{children}</div>
          <DrawerFooter>
            {footerButtons || (
              <>
                <Button onClick={onSubmit}>Submit</Button>
                <DrawerClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DrawerClose>
              </>
            )}
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
