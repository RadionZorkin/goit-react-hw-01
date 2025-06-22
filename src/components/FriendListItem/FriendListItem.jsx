import css from "./FriendListItem.module.css";
import clsx from "clsx";

function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div>
      <img src={avatar} alt="avatar" width="48" />
      <p className={css.name}>{name}</p>
      <p className={clsx(css.classOne, { [css.classTwo]: isOnline })}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
}

export default FriendListItem;
