import styles from "./Todos.module.css";

interface Props {
  key: string;
  name: string;
}

export default function TodoListItem(props: Props): JSX.Element {
  const { name } = props;

  return <li className={styles.listel}>{name}</li>;
}
