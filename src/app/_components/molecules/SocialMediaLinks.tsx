import LinkComponent from "../atoms/LinkComponent";
import Icon from "../atoms/Icon";

const SocialMediaLinks: React.FC = () => (
  <div className="inline-flex items-center space-x-4">
    <LinkComponent
      href="https://wa.me/4424613659"
      className="rounded-xl bg-black p-2 text-white hover:bg-cyan-950"
    >
      <Icon
        src="/icons/whatsapp_icon.png"
        alt="Whatsapp icon"
        className="h-8"
      />
    </LinkComponent>
    <LinkComponent
      href="https://www.facebook.com/people/Queretaro-Si-Sonrie/100064085523281/"
      className="rounded-xl bg-black p-2 text-white hover:bg-cyan-950"
    >
      <Icon
        src="/icons/facebook_icon.png"
        alt="Facebook icon"
        className="h-8"
        style={{ filter: "invert(1) sepia(1) hue-rotate(180deg) saturate(2)" }}
      />
    </LinkComponent>
    <LinkComponent
      href="https://www.instagram.com/qrosisonrie?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
      className="rounded-xl bg-black p-2 text-white hover:bg-cyan-950"
    >
      <Icon
        src="/icons/instagram_icon.png"
        alt="Instagram icon"
        className="h-8"
      />
    </LinkComponent>
  </div>
);

export default SocialMediaLinks;
