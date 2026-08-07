import { Toaster as Sonner } from "sonner";

export function Toaster({ ...props }) {
  return (
    <Sonner
      className="toaster group"
      toastOptions={{
        classNames: {
          toast: "group toast group-[.toaster]:bg-[color:var(--ivory)] group-[.toaster]:text-[color:var(--obsidian)] group-[.toaster]:border-[color:var(--line)] group-[.toaster]:shadow-lg font-sans",
          description: "group-[.toast]:text-neutral-500",
          actionButton: "group-[.toast]:bg-[color:var(--obsidian)] group-[.toast]:text-[color:var(--ivory)]",
          cancelButton: "group-[.toast]:bg-neutral-200 group-[.toast]:text-neutral-500",
        },
      }}
      {...props}
    />
  );
}
