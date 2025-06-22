import FriendListItem from "../FriendListItem/FriendListItem"; // Шлях правильний
import css from "./FriendList.module.css";

function FriendList({ friendsData }) {
  return (
    <ul className={css.list}>
      {friendsData.map((friend) => (
        <li key={friend.id} className={css.item}>
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </li>
      ))}
    </ul>
  );
}

export default FriendList;
