import parse from 'html-react-parser';
import styles from './RichTextComponent.module.scss';

const RichTextComponent = ({ content }: any): JSX.Element => {
  return (
    <div className={styles.text__box}>
      <div className={styles.wrap}>
        <div className={styles.rte}>
          <>{parse(content)}</>
        </div>
      </div>
    </div>
  );
};

export default RichTextComponent;
