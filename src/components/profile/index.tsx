import Image from 'next/image';

export default function CardProfile() {
  return (
    <div className="box-border flex h-auto w-[250px] flex-col justify-center gap-4 rounded-md bg-primary p-4 text-center shadow-md shadow-black">
      <div className="m-auto h-[120px] w-[120px] rounded-full border-2 border-white">
        <Image
          width={120}
          height={120}
          src="https://github.com/pauloricardorc.png"
          alt="profile"
          className="overflow-hidden rounded-full"
        />
      </div>
      <p>Paulo Ricardo Rodrigues Claro</p>
      <span className="text-sm text-placeholder">Desenvolvedor</span>
    </div>
  );
}
