// Minimal toast hook for remaining dependencies
import * as React from "react";

export function useToast() {
  return {
    toasts: [],
    toast: (props: any) => console.log('Toast:', props),
    dismiss: () => {}
  };
}

export const toast = (props: any) => console.log('Toast:', props);