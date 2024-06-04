import cls from "./NotFound.module.scss";

export const NotFound = async () => {
  return (
    <div className={cls.wrapper}>
      <h2>{"notFound"}</h2>
    </div>
  );
};
