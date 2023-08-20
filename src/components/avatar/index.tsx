import { User } from "next-auth";
import React from "react";
import { Avatar, AvatarFallback } from "../ui/avatar";
import Image from "next/image";

type Props = {
  user: Pick<User, "name" | "image">;
};

const UserAvatar = ({ user }: Props) => {
  return (
    <Avatar>
      {user?.image ? (
        <div className="relative aspect-square h-full w-full">
          {" "}
          <Image
            src={user.image}
            alt="profile image"
            referrerPolicy="no-referrer"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
          />{" "}
        </div>
      ) : (
        <AvatarFallback>
          {" "}
          <span className="sr-only">{user.name}</span>
        </AvatarFallback>
      )}
    </Avatar>
  );
};

export default UserAvatar;
