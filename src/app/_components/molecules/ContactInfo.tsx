import Text from "../atoms/Text";
import Icon from "../atoms/Icon";

interface ContactInfoProps {
  iconSrc: string;
  text: string;
  alt: string;
  iconClassName?: string;
  textClassName?: string;
}

const ContactInfo: React.FC<ContactInfoProps> = ({
  iconSrc,
  text,
  alt,
  iconClassName,
  textClassName,
}) => (
  <div className="inline-flex items-center space-x-2">
    <Icon src={iconSrc} alt={alt} className={iconClassName} />
    <Text className={textClassName}>{text}</Text>
  </div>
);

export default ContactInfo;