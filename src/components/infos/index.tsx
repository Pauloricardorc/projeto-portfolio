import {
  Buildings,
  Envelope,
  GithubLogo,
  GoogleChromeLogo,
  LinkedinLogo,
  MapPin,
} from 'phosphor-react';

export default function CardInfo() {
  return (
    <div className="box-border flex h-auto w-[250px] flex-col justify-center gap-4 rounded-md bg-primary p-4 text-center shadow-md shadow-black">
      <div className="flex gap-2 text-center">
        <GithubLogo weight="fill" size={20} />
        <a
          href="#"
          className="text-start text-sm text-placeholder hover:text-secondary"
        >
          github.com/pauloricardorc
        </a>
      </div>
      <div className="flex gap-2 text-center">
        <Envelope weight="fill" size={20} />
        <a
          href="#"
          className="text-start text-sm text-placeholder hover:text-secondary"
        >
          paulodev01@gmail.com
        </a>
      </div>
      <div className="flex gap-2 text-center">
        <GoogleChromeLogo weight="fill" size={20} />
        <a
          href="#"
          className="text-start text-sm text-placeholder hover:text-secondary"
        >
          google.com.br
        </a>
      </div>
      <div className="flex gap-2 text-center">
        <LinkedinLogo weight="fill" size={20} />
        <a
          href="#"
          className="text-start text-sm text-placeholder hover:text-secondary"
        >
          linkedin.com.br/in/paulo-ricardo-rc
        </a>
      </div>
      <div className="flex gap-2 text-center">
        <Buildings weight="fill" size={20} />
        <a
          href="#"
          className="text-start text-sm text-placeholder hover:text-secondary"
        >
          emp
        </a>
      </div>
      <div className="flex gap-2 text-center">
        <MapPin weight="fill" size={20} />
        <a
          href="#"
          className="text-start text-sm text-placeholder hover:text-secondary"
        >
          Brazil
        </a>
      </div>
    </div>
  );
}
