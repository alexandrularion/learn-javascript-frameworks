import { Heading, Text } from "../../../common";
import CategoryBadge from "./category-badge";
import styles from "./list-card.module.css";
import CommentIcon from "../../../assets/comment.svg?react";
import ArrowUpIcon from "../../../assets/arrow-up.svg?react";
import { Link } from "react-router";

const ListCard = (props) => {
  return (
    <Link to={`/s/${props.id}`}>
      <div className={styles["container"]}>
        <button className={styles["container__vote-btn"]}>
          <ArrowUpIcon />
          {props.upVotes}
        </button>
        <div className={styles["container__content"]}>
          <div>
            <Heading size="md">{props.name}</Heading>
            <Text size="lg">{props.description}</Text>
          </div>
          <CategoryBadge>{props.categoryName}</CategoryBadge>
        </div>
        <div className={styles["container__comments"]}>
          <CommentIcon />
          <Text size="lg">{props.totalComments}</Text>
        </div>
      </div>
    </Link>
  );
};

export default ListCard;
