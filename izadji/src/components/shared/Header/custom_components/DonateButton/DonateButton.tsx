import { Link } from 'react-router-dom';
import { routes } from '../../../../../routes';

export type DonateButtonProps = {
  btnStyle: string;
};

const DonateButton = ({ btnStyle }: DonateButtonProps): JSX.Element => {
  return (
    <Link to={routes.donate} className={btnStyle}>
      Doniraj
    </Link>
  );
};

export default DonateButton;
