import styles from './Custom404.module.scss'

export default function Custom404() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        404 - Page Not Found
      </h1>
      <p className={styles.message}>
        Sorry, we could not find the page you are looking for.
      </p>
    </div>
  );
};
