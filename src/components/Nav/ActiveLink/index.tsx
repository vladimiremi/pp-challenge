import { useRouter } from "next/router";
import { cloneElement } from "react";
import { Active } from "./styles";

export function ActiveLink({ children, ...rest }) {
  const { asPath } = useRouter();

  let isActive = false;

  if (asPath === rest.href) {
    isActive = true;
  } else if (asPath.startsWith(String(rest.href))) {
    isActive = true;
  }

  return (
    <>
      {isActive ? (
        <Active>{cloneElement(children)}</Active>
      ) : (
        cloneElement(children)
      )}
    </>
  );
}
