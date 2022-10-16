import ReactMarkdown from 'react-markdown';
import styles from './RichTextComponent.module.scss';
const RichTextComponent = ({ content }: any): JSX.Element => {
  return (
    <div className={styles.text__box}>
      <div className={styles.wrap}>
        <div className={styles.rte}>
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
};
export default RichTextComponent;
