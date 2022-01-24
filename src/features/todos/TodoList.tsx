import { useGetTodosQuery } from "./todoSlice";
import styles from "./Todos.module.css";
import TodoListItem from "./TodoListItem";

export default function TodoList() {
  const { data, error, isLoading } = useGetTodosQuery();

  if (isLoading) return <p>loading ...</p>;
  if (error) return <p>an error occurred. </p>;
  if (!data) return <p>no data ...</p>;

  const starwarsList: JSX.Element[] = data.results.map((p) => (
    <TodoListItem key={p.name} name={p.name} />
  ));

  return <ul className={styles.list}>{starwarsList}</ul>;
}
