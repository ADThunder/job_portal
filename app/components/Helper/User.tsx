"use client";

import { Session } from "next-auth";
import { signOut } from "next-auth/react";
import Image from "next/image";

interface Props {
  session: Session;
}

const User = ({ session }: Props) => {
  return (
    <div
      onClick={() => signOut({ callbackUrl: process.env.NEXT_PUBLIC_URL })}
      className="cursor-pointer"
    >
      <Image
        src={`${session?.user?.image}`}
        alt={`${session?.user?.name}`}
        width={50}
        height={50}
        className="rounded-full"
      />
    </div>
  );
};

export default User;
