import type { AnchorHTMLAttributes } from "react";

type NativeLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
};

export function NativeLink({ href, children, ...props }: NativeLinkProps) {
  return <a href={href} {...props}>{children}</a>;
}
