type IconProps = {
  src: string;
  altText: string;
  width: string;
  height?: string;
};

const Icon = ({
  src,
  altText,
  width,
  height = 'auto',
}: IconProps): JSX.Element => (
  <img src={src} alt={altText} style={{ width: width, height: height }} />
);

export default Icon;
