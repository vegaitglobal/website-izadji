import parse from 'html-react-parser';
import styles from './RichTextComponent.module.scss';

const RichTextComponent = ({ content, narrow = true }: any): JSX.Element => {
  return (
    <div
      className={`${
        narrow ? styles.text__box__blog : styles.text__box
      } main-content`}
    >
      <div className={styles.wrap}>
        <div className={styles.rte}>
          <>{parse(content)}</>
        </div>
      </div>
    </div>
  );
};

export default RichTextComponent;
