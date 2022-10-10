export default function CardTags() {
  return (
    <div className="box-border flex h-auto w-[250px] flex-wrap justify-center gap-4 rounded-md bg-primary p-4 text-center shadow-md shadow-black">
      <div className="flex h-5 w-24 cursor-pointer justify-center rounded-full bg-secondary transition hover:scale-105 hover:bg-opacity-70 hover:shadow-sm hover:shadow-black">
        <span className="text-sm">React</span>
      </div>
      <div className="flex h-5 w-24 cursor-pointer justify-center rounded-full bg-secondary transition hover:scale-105 hover:bg-opacity-70 hover:shadow-sm hover:shadow-black">
        <span className="text-sm">NodeJs</span>
      </div>
      <div className="flex h-5 w-24 cursor-pointer justify-center rounded-full bg-secondary transition hover:scale-105 hover:bg-opacity-70 hover:shadow-sm hover:shadow-black">
        <span className="text-sm">JavaScript</span>
      </div>
      <div className="flex h-5 w-24 cursor-pointer justify-center rounded-full bg-secondary transition hover:scale-105 hover:bg-opacity-70 hover:shadow-sm hover:shadow-black">
        <span className="text-sm">React Native</span>
      </div>
      <div className="flex h-5 w-24 cursor-pointer justify-center rounded-full bg-secondary transition hover:scale-105 hover:bg-opacity-70 hover:shadow-sm hover:shadow-black">
        <span className="text-sm">Html</span>
      </div>
      <div className="flex h-5 w-24 cursor-pointer justify-center rounded-full bg-secondary transition hover:scale-105 hover:bg-opacity-70 hover:shadow-sm hover:shadow-black">
        <span className="text-sm">CSS</span>
      </div>
    </div>
  );
}
