import Text from "../atoms/Text";
import Icon from "../atoms/Icon";
import ContactInfo from "../molecules/ContactInfo";
import SocialMediaLinks from "../molecules/SocialMediaLinks";

const FooterContent: React.FC = () => (
  <div className="flex w-full flex-col items-center justify-center space-y-3">
    <Text className="flex items-center text-3xl font-medium text-white md:text-4xl">
      <Icon src="/icons/logo.png" alt="Logo" className="mr-2 h-8 md:h-10" />
    </Text>
    <ContactInfo
      iconSrc="/icons/phone_icon.png"
      text="(442) 214-42-36"
      alt="Phone icon"
      iconClassName="h-4"
      textClassName="text-sm text-white md:text-base"
    />
    <ContactInfo
      iconSrc="/icons/email_icon.png"
      text="iquec.lph.qro@gmail.com"
      alt="Email icon"
      iconClassName="h-3"
      textClassName="text-sm text-white md:text-base"
    />
    <SocialMediaLinks />
    <Text className="text-xs text-white md:text-base">
      © 2024 Todos los derechos reservados.
    </Text>
  </div>
);

export default FooterContent;
